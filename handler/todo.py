# -*- coding:utf-8 -*- 

#================================================
#
#		creater:15921315347@163.com
#		create time:2016-06-10 20:50:13
#		description:todo RESTFul service
#
#================================================

from tornado.web import RequestHandler,escape
import uuid
import datetime
from handler import json_encode
from motor  import motor_tornado
from bson import ObjectId
from tornado.gen import coroutine

client = motor_tornado.MotorClient('localhost',27017)
db=client.test_database;



class TodoHandler(RequestHandler):

	@coroutine
	def get(self,*args,**kwargs):
		result = yield db.todos.find({}).to_list(length=None)
		self.set_header('content-type','application/json; charset=UTF-8')
		self.write(json_encode({'status':'success','todos':result}))

	@coroutine	
	def put(self,*args,**kwargs):
		todo_id = self.get_argument('id',None)
		todo_status = self.get_argument('status',0)
		yield db.todos.update({'_id':ObjectId(todo_id)},{'$set':{'status':todo_status}})
		self.set_header('content-type','application/json; charset=UTF-8')
		self.write(escape.json_encode({'status':'success'}))
		pass

	@coroutine
	def post(self,*args,**kwargs):

		content = self.get_argument('content',None)		
		time=datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
		#todos.append({'content':content,'status':0,'time':time,'id':str(uuid.uuid1())})
		yield db.todos.save({'content':content,'status':0,'time':time})

		self.set_header('content-type','application/json; charset=UTF-8')
		self.write(escape.json_encode({'status':'success'}))

	@coroutine
	def delete(self,*args,**kwargs):
		todo_id = args[0] if len(args)>0 else '';
		yield db.todos.remove({'_id':ObjectId(todo_id)})
		self.set_header('content-type','application/json; charset=UTF-8')
		self.write(escape.json_encode({'status':'success'}))



routes = [
	(r'/api/todo/list',TodoHandler),
	(r'/api/todo',TodoHandler),
	(r'/api/todo/(.*)',TodoHandler),
]
