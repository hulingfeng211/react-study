# -*- coding:utf-8 -*- 

#================================================
#
#		creater:15921315347@163.com
#		create time:2016-06-09 11:42:13
#		description:app handler entry
#
#================================================
from tornado.web import RequestHandler
from datetime import datetime
import json
from bson import ObjectId

class DefaultHandler(RequestHandler):
	"""默认Handler"""

	def get(self,*arg,**kwargs):
		home_path=self.settings['home_url']
		self.redirect(home_path)

class JSONEncoder(json.JSONEncoder):

    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        if isinstance(o,datetime):
        	return o.strftime('%Y-%m-%d %H:%M:%S')
        return json.JSONEncoder.default(self, o)

def json_encode(o):

	return JSONEncoder().encode(o)

