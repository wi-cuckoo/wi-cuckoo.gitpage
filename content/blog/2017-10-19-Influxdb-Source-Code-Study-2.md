---
title: Influxdb Source Code Study - Two
_date: 2 Nov 2017
---

> 看了好几天的 Influxdb 存储原理，其实还是只知道皮毛。要深入剖析如何具体实现存储，压缩，合并等细节，还有很长路要走。那我现在先从写入这条路开始探索吧

### 服务启动
首先，influxdb 启动大致步骤为**解析参数** -> **获取并校验配置** -> **创建服务实例** -> **开启服务** -> **监控服务运行**

那其实解析参数与获取配置没啥好说的，配置使用 toml 文件，有全局配置与各模块对应的一块配置。然后创建服务就是实例化一个 Server 结构体，如下：

```go
type Server struct {
	buildInfo BuildInfo											

	err     chan error
	closing chan struct{}

	BindAddress string
	Listener    net.Listener

	Logger zap.Logger

	MetaClient *meta.Client

	TSDBStore     *tsdb.Store
	QueryExecutor *query.QueryExecutor
	PointsWriter  *coordinator.PointsWriter
	Subscriber    *subscriber.Service

	Services []Service

	SnapshotterService *snapshotter.Service

	Monitor *monitor.Monitor

	reportingDisabled bool

	CPUProfile string
	MemProfile string

	httpAPIAddr string

	httpUseTLS bool

	tcpAddr string

	config *Config
}
```

这里的 Service 是一个接口，定义了一些子服务需要提供的方法，包括 Open, Close, WithLogger。一些服务如 MonitorService, PrecreatorService 与 SnapshotterService 等都会 append 到 Services 里面去。然后通过循环来逐个启动：
```go
	for _, service := range s.Services {								
		if err := service.Open(); err != nil {
			return fmt.Errorf("open service: %s", err)
		}
	}
```

这里我们主要关注 HTTPDService，客户端的写入与查询都是需要通过 http 请求来完成。

### Http 请求

Http 服务首先也是定义了一个结构体，并实现了 Service 接口。这个结构体比较小：
```go
type Service struct {
	ln    net.Listener												
	addr  string
	https bool
	cert  string
	key   string
	limit int
	err   chan error

	unixSocket         bool
	bindSocket         string
	unixSocketListener net.Listener

	Handler *Handler

	Logger zap.Logger
}
```
在 NewServer 方法返回的 Server 实例中，主要关注一下由 NewHandler 方法返回的 *Handler 指针。Handler 作为一个结构体同样定义了很多东西，主要就有 QueryExecutor 与 PointsWriter，分别对应于服务查询与写入请求。Http 服务使用 [pat](https://github.com/bmizerany/pat) 来管理路由的，从代码看出，总共支持三种写入请求，我们目前主要需了解的就是其中的 POST /write 请求：
```go
		Route{
			"write", // Data-ingest route.
			"POST", "/write", true, true, h.serveWrite,
		},
```

那么接下来我们开始讲解一下 serverWrite 的处理过程。

### Server Write




> In Hangzhou 1724
