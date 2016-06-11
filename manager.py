# -*- coding:utf-8 -*- 

#============================================
#
#		creater:15921315347@163.com
#		create time:2016-06-09 11:42:13
#		description:app entry
#
#============================================

from tornado.web import Application,StaticFileHandler,RedirectHandler
from tornado.gen import IOLoop
from handler import DefaultHandler,todo
import os


if __name__ == '__main__':
	settings = {}
	handlers = [
		(r'/app',RedirectHandler,{'url':'/app/index.html'}),
		(r'/app/(.*)',StaticFileHandler,{"path": os.path.join(os.path.dirname(__file__),'app')})
	]
	handlers.extend(todo.routes)
	#enable debug
	settings['debug'] = True
	settings['home_url']="/app/index.html"
	settings['static_url_prefix']='/public/'
	settings['default_handler_class']=DefaultHandler
	settings['static_path'] = os.path.join(os.path.dirname(__file__),'public')



	app=Application(handlers=handlers,**settings)
	print 'server at *:11108 '
	app.listen(11108)
	IOLoop.current().start()
