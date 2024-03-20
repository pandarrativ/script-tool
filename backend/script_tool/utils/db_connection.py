from pymongo import MongoClient

class MongoConnection:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(MongoConnection, cls).__new__(cls)
            cls._instance.client = MongoClient('localhost', 27017)
        return cls._instance