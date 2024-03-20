from .utils.db_util import MongoDBUtil
import uuid
from .utils.utils import get_current_time



class WidgetDAO:
    collection = MongoDBUtil.get_collection(collection="script_tool_agent")

    @staticmethod
    def create_new_script_play_agent(user_id, script_id, agent):
        data = {
            "_id": str(uuid.uuid4()),
            "user_id": user_id,
            "script_id": script_id,
            "agent":agent,
            "messages":[]
        }
        inserted_id = WidgetDAO.collection.insert_one(data).inserted_id
        return inserted_id

    @staticmethod
    def add_script_play_agent_messages(script_agent_id, msg):
        query = {"_id": script_agent_id}  
        update = {
            "$push": {"messages": msg},
        }
            
        return WidgetDAO.collection.update_one(query, update)


class ScriptCreationDAO:
    collection = MongoDBUtil.get_collection()
    
    @staticmethod
    def new_script_creation(user_id, agent):
        script_id = str(uuid.uuid4())
        data = {
            "_id":script_id,
            "name":"<Enter_Script_Name>",
            "user_id":user_id,
            "agent":agent,
            "start_time":get_current_time(),
            "last_updated_time":get_current_time(),
            "currentStage":"Logline",
            "activatedStages":["Logline"],
            "loglineData":{
                "loglineContent":"",
                "loglineRawContent":"",
                "loglineWhen":"",
                "loglineWho":"",
                "loglineWhat":"",
                "loglineWhy":"",
                "loglineHow":"",
                "loglineWhere":"",
                "loglineBut":"",
            },
            "outlineData":{
                "structureType":"",
                "outlineContent":"",
                "outlineRawContent":"",
            },
            "scenesData":{
                "sceneType":"",
                "nodesData":{},
            },
            "elements":[
                {"element":"LOCATION", "items":[]},
                {"element":"CHARACTER", "items":[]},
                {"element":"PROP", "items":[]},
            ],
            "toastMessages":[],
            "conversationMessages":[],
        }
        ScriptCreationDAO.collection.insert_one(data)
        return data

    @staticmethod
    def get_scene_data_by_id(script_id):
        query = {"_id": script_id}
        return ScriptCreationDAO.collection.find_one(query, {"scenesData":1})
        

    @staticmethod
    def activate_page(script_id, stageName):
        query = {"_id": script_id}  
        update = {
            "$push": {"activatedStages":stageName},
            "$set":{"last_updated_time":get_current_time()},
        }
        return ScriptCreationDAO.collection.update_one(query, update)

    @staticmethod
    def update_script_creation_data(script_id, dataName, dataValue):
        query = {"_id": script_id}  
        update = {
            "$set":{
                dataName:dataValue,
                "last_updated_time":get_current_time()
            },
        }
        return ScriptCreationDAO.collection.update_one(query, update)
    
    @staticmethod
    def add_toast_message(script_id, msg):
        query = {"_id": script_id}  
        update = {
            "$push": {"toastMessages":msg},
        }
        return ScriptCreationDAO.collection.update_one(query, update)
    
    @staticmethod
    def add_conversation_message(script_id, msg):
        query = {"_id": script_id}  
        update = {
            "$push": {"conversationMessages":msg},
        }
        return ScriptCreationDAO.collection.update_one(query, update)


class ScriptDocumentDAO:
    collection = MongoDBUtil.get_collection(collection="script_tool_document")
    
    @staticmethod
    def init_document(script_id):
        data = {
            "_id": str(uuid.uuid4()),
            "script_id": script_id,
            "textContent":"",
            "rawContent":{
                "blocks": [
                    {
                    "key": "cl8cd",
                    "text": "",
                    "type": "header-one",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                    }
                ],
                "entityMap": {}
                }
        }
        ScriptDocumentDAO.collection.insert_one(data).inserted_id
        return data
    
    @staticmethod
    def init_document_with_textContent(script_id, textContent):
        print("--")
        document_id = str(uuid.uuid4())
        data = {
            "_id": document_id,
            "script_id": script_id,
            "textContent":textContent,
            "rawContent":{}
        }
        print(data)
        print("---- start data ----------------")
        ScriptDocumentDAO.collection.insert_one(data).inserted_id
        return document_id
    
    @staticmethod
    def get_document_by_id(document_id):
        data = ScriptDocumentDAO.collection.find_one({"_id":document_id})
        return data
        
    @staticmethod
    def get_documents_by_script_id(script_id):
        res = []
        for r in ScriptDocumentDAO.collection.find({"script_id":script_id}):
            res.append(r)
        return res
    
    @staticmethod
    def get_documents_by_documentsId_list(document_id_list):
        res = []
        for _id in document_id_list:
            if _id:
                document = ScriptDocumentDAO.collection.find_one({"_id":_id})
                res.append(document)
        return res
    
    @staticmethod
    def update_document_by_id(document_id, textContent, rawContent):
        query = {"_id":document_id}
        update = {
            "$set":{
                "textContent":textContent,
                "rawContent":rawContent,
            },
        }
        ScriptDocumentDAO.collection.update_one(query, update)
        return 200
    
    @staticmethod
    def update_document_order(document_id, order):
        query = {"_id":document_id}
        update = {
            "$set":{
                "order":order
            },
        }
        ScriptDocumentDAO.collection.update_one(query, update)
        return 200


# below is a sample class for data persistance
# class ScriptPlayDAO:
#     collection = MongoDBUtil.get_collection()
    
#     # insert
#     @staticmethod
#     def create_new_script_play(user_id, mode="hybrid-agent", script="Shantaram"):
        
#         # set your data here  
#         # script = "xxx"  script_name = "xxx"  ...
        
        
#         data = {
#             "_id": str(uuid.uuid4()),
#             "user_id": user_id,
#             "script": script,
#             "script_name":script_name,
#             "mode":mode,
#             "start_time": get_current_time(),
#             "end_time": get_current_time(),
#             "pages": 1,
#             "playdata":[        
#                 {
#                     "keywords":first_story_keywords,
#                     "story":story,
#                     "img":image,
#                     "event_type":"story-description",
#                     "order":1,
#                     "timestamp":get_current_time(),
#                 },
#             ],
#             "thoughts":"N/A",
#             "thoughts_imgs":[],
#         }
#         inserted_id = ScriptPlayDAO.collection.insert_one(data).inserted_id
        
        
#         # return data to user
#         res = {
#             "script":script,
#             "script_name":Script_class.script_name,
#             "user_name":Script_class.username,
#             "scriptplay_id":inserted_id, 
#             "characters":Script_class.character_list,
#             "story_description":Script_class.story_description,
#             "first_story":Script_class.first_story,
#             "first_image":Script_class.first_story_image,
#             "mode":mode,
#             "mode_settings":mode_settings,
#             }
#         return res
    
#     # update 
#     @staticmethod
#     def add_gameplay_data(object_id, order, event_type, data):
#         data["event_type"] = event_type
#         data["order"] = order
#         data["timestamp"] = get_current_time()
#         query = {"_id": object_id}  
#         update = {
#             "$push": {"playdata": {"$each": [data],}},
#             "$set":{"end_time":get_current_time()},
#             "$inc": {"pages": 1},
#         }
#         return ScriptPlayDAO.collection.update_one(query, update)



#     # find many
#     @staticmethod
#     def find_all_scriptplay(user_id):
#         query = {"user_id":user_id}
#         fields = {
#             "_id":1,
#             "script":1,
#             "start_time":1,
#             "end_time":1,
#             "pages": 1,
#             "script_name":1,
#         }
#         res = []
#         for r in ScriptPlayDAO.collection.find(query, fields):
#             res.append(r)
#         return res
    
#     # find one
#     @staticmethod
#     def find_scriptplay_by_id(_id):
#         return ScriptPlayDAO.collection.find_one({"_id":_id})
 