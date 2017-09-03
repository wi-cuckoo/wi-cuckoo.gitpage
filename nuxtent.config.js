/*
** nuxtent config
*/

module.exports = {
  content: [
    ['blog', {
      page: '/blog/_slug',
      permalink: "/:slug",
      generate: ['get', 'getAll'],
      isPost: false
    }]
  ],
  api: {
   	baseURL: process.env.NODE_ENV === 'production'
	    ? 'http://wi-cuckoo.github.io'
	    : 'http://0.0.0.0:3000'
 	}
}