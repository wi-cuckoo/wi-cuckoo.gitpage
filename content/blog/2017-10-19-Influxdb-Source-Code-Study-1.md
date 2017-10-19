---
title: Influxdb Source Code Study - One
_date: 19 Oct 2017
---

> 入 Go 的坑啦！在公司写了一年的 Web，终于开始接触后端开发。由于项目的原因，用 Influxdb 作为数据存储服务，很多开发都是围绕这 Influxdb。想着顺带深入学习一下 Influxdb 的源代码。这是第一篇，先从构建其开发环境开始吧

### Go 开发项目结构

Go 建议的是所有项目都在一个目录下开发，解决依赖分散的问题。而本身 Go 的设计也要求一定的目录结构，所以通过对已有开源项目的学习，我建立了如下的目录结构

```
	$HOME/go-workspace
		bin/
		pkg/
		src/
			github.com
				influxdata
					influxdb					
				my-project
				...
			golang.org
			...
```

然后执行，当然更普遍做法是写到 .bash_profile 这种文件里去

`$ export GOPATH=$HOME/go-workspace`

### 获取 Influxdb

Influxdb 除了集群版会收费获取之外，本身是开源的。在 Git 上就可以获取到。那我们首先使用 **go get** 命令下载下来

`$ go get -u github.com/influxdata/influxdb`

你不要给我说 github 都上不去。完了之后呢就是要解决依赖包的问题啦

### 安装 Influxdb 依赖包

由于开始我也不知道 Influxdb 用的什么工具管理依赖，反正肯定是有工具的，不像我们学习时候那么原始地开发。那首先发现项目目录下有个文件比较特殊：**Godeps**，拿着这个 Godeps 去一搜，就发现用的是 **[gpm](https://github.com/pote/gpm)** 这个工具。接下来你就知道该怎么办啦。

这里提一句，现在 Go 官方提供了一个管理依赖的工具 **[dep](https://github.com/golang/dep)**，目测还是很好用的，比较人家自家出的。以后开发项目首选它

按照 gpm 的说明执行 gpm get 应该就好啦。但这里有个头疼的问题就是，有些包是在 golang.org 上的。由于众所周知的原因，很多人是访问不了的。那可咋整呢，你说你上不了 google 我也不能怪你不是，你没法办证呀。这里我到某些帖子上学到一个方法，因为一个事实是 golang.org 下面的包到 github.com 上面都有，所以就对应到 github 上去手动下载下来，本地构建一个目录结构 $HOME/go-workspace/src/golang.org/x 这种，然后把 github 下载下来那些放到下面去，偷天换日，完美解决。

### 接下来

环境搭建好后，就要开始分析项目代码结构啦。这里我打算从构建发行包开始，没错，从 build.py 下手。那下次发一篇关于构建发行包 及 influxdb 项目结构的随笔


> In Hangzhou 1724
