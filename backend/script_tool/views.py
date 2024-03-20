from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import redirect


import openai
from .ai_models.openai_api import OpenAIAPI
from .ai_models.prompts import *

from .utils.utils import *
from .utils.node_utils import get_position_settings

from .dao import ScriptCreationDAO, WidgetDAO, ScriptDocumentDAO
from .node_config.zigzag import ZIGZAG_SETTINGS

# Create your views here.   
class WidgetChatView(APIView):
     def post(self, request, format=None):
        task, agentName, script_id, script_data = request.data["task"], request.data["agentName"], request.data["script_id"], request.data["script_data"]
        
        if task == "ASK_OPINION":
            try:
                resp = OpenAIAPI.send_messages(messages=ask_directort_opinion(agent_name=agentName, task=task, script_data=script_data))
                resp = parse_to_json(resp=resp)
                data = {"timestamp":get_current_time(), "content":resp["suggestion"], "taskType":task}      
                ScriptCreationDAO.add_toast_message(script_id=script_id, msg=data)
                return Response(data, status=status.HTTP_200_OK)
            except Exception as e:
                return Response(e, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        elif task == "STORY_STRUCTURE":
            try:
                resp = OpenAIAPI.send_messages(messages=ask_directort_structure(agent_name=agentName, task=task, script_data=script_data))
                resp = parse_to_json(resp=resp)
                data = {"timestamp":get_current_time(), "content":resp["suggestion"], "taskType":task}
                # print(data)
                return Response(data, status=status.HTTP_200_OK)
            except Exception as e:
                return Response(e, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class ConversationView(APIView):
    def post(self, request):
        task, script_id, messages =request.data["task"], request.data["script_id"], request.data["messages"]
        
        if task == "CHAT":
            try:
                scriptInfo = request.data["scriptInfo"]
                wrap_chat_messages(messages=messages, scriptInfo=scriptInfo)
                resp = OpenAIAPI.send_messages(messages=messages)
                ScriptCreationDAO.add_conversation_message(script_id=script_id, msg=messages[-1])
                ScriptCreationDAO.add_conversation_message(script_id=script_id, msg={"role":"assistant", "content":resp})
                # print(resp)
                return Response(resp, status=status.HTTP_200_OK)
            except Exception as e:
                return Response(e, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
                
        
class ScriptToolView(APIView):
    def post(self, request, format=None):
        # print(request.data)
        task = request.data["task"]
        print(task)


        if task == "CREATE_LOGLINE":
            try:
                messages = add_prompt_settings(create_logline(when=request.data["when"], 
                                                              who = request.data["who"], 
                                                              what=request.data["what"],
                                                              why=request.data["why"],
                                                              how=request.data["how"],
                                                              where=request.data["where"],
                                                              but=request.data["but"],
                                                              ))
                resp = OpenAIAPI.send_messages(messages=messages)
                print(resp)
                resp = parse_to_json(resp=resp)
                return Response(resp, status=status.HTTP_200_OK)
            except Exception as e:
                    return Response(e, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


        elif task == "CREATE_BEAT_SHEET":
            try:
                logline, structureType = request.data["logline"], request.data["structureType"]
                messages = add_prompt_settings(create_beat_sheet(logline=logline, structureType=structureType))
                resp = OpenAIAPI.send_messages(messages=messages)
                resp = parse_to_json(resp=resp)
                return Response(resp, status=status.HTTP_200_OK)
            except Exception as e:
                    return Response(e, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            

        elif task == "CREATE_TREATMENT":
            try:
                logline, beat_sheet = request.data["logline"], request.data["beat_sheet"]
                messages = add_prompt_settings(create_treatment(logline=logline, beat_sheet=beat_sheet))
                resp = OpenAIAPI.send_messages(messages=messages)
                resp = parse_to_json(resp=resp)
                return Response(resp, status=status.HTTP_200_OK)
            except Exception as e:
                    return Response(e, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
                
                
        elif task == "INIT_NODES_SETTINGS":
            script_id, logline, outline =request.data["script_id"] , request.data["logline"], request.data["outline"]
            try:
                print("----------- first attempt --------------")
                print(generate_scene_nodes_settings(logline=logline, outline=outline))
                messages = add_prompt_settings(generate_scene_nodes_settings(logline=logline, outline=outline))
                resp = OpenAIAPI.send_messages(messages=messages)
                # get response and parse
                print(resp)
                resp = parse_node_settings(resp=resp)
                # print(resp)
                print("-------------------- parse successfully ------------------")
                print(resp)
                
                # create document 
                document_id_lists = []
                for i in range(resp["Number of scenes"]):
                    sc = "Scene" + str(i+1)
                    print(sc)                        
                    print(resp[sc]["screenplay"])
                    inserted_id = ScriptDocumentDAO.init_document_with_textContent(script_id, resp[sc]["screenplay"])
                    document_id_lists.append(inserted_id)
                print(" ------------------ data stored --------------------")
                print(document_id_lists)
                data = get_position_settings(resp["Number of scenes"], resp, document_id_lists)
                print(data)
                return Response(data, status=status.HTTP_200_OK)
            except Exception as e:
                try:
                    print("----------- first attempt --------------")
                    print(generate_scene_nodes_settings(logline=logline, outline=outline))
                    messages = add_prompt_settings(generate_scene_nodes_settings(logline=logline, outline=outline))
                    resp = OpenAIAPI.send_messages(messages=messages)
                    # get response and parse
                    print(resp)
                    resp = parse_node_settings(resp=resp)
                    # print(resp)
                    print("-------------------- parse successfully ------------------")
                    print(resp)
                    
                    # create document 
                    document_id_lists = []
                    for i in range(resp["Number of scenes"]):
                        sc = "Scene" + str(i+1)
                        print(sc)                        
                        print(resp[sc]["screenplay"])
                        inserted_id = ScriptDocumentDAO.init_document_with_textContent(script_id, resp[sc]["screenplay"])
                        document_id_lists.append(inserted_id)
                    print(" ------------------ data stored --------------------")
                    print(document_id_lists)
                    data = get_position_settings(resp["Number of scenes"], resp, document_id_lists)
                    print(data)
                    return Response(data, status=status.HTTP_200_OK)
                except Exception as e:
                    return Response(e, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        elif task == "AI_GENERATE_SCENE":
            try:
                logline, outline, sceneData = request.data["logline"], request.data["outline"], request.data["sceneData"]
                messages = add_prompt_settings(generate_scene(logline=logline, outline=outline, sceneData=sceneData))
                resp = OpenAIAPI.send_messages(messages=messages)
                print("------------")
                print(resp)
                print("------------")
                # print(resp)
                resp = parse_to_json(resp=resp)
                print(resp)
                return Response(resp, status=status.HTTP_200_OK)
            except Exception as e:
                    return Response(e, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
                
        elif task == "RANDOMIZE_LOGLINE_ELEMENTS":
            try:
                elementName, loglineData, outlineData, scenesData = request.data["elementName"], request.data["loglineData"], request.data["outlineData"], request.data["scenesData"]
                messages = add_prompt_settings(randomize_logline_elements(elementName=elementName, loglineData=loglineData,outlineData=outlineData, scenesData=scenesData))
                print(messages)
                
                resp = OpenAIAPI.send_messages(messages=messages)
                print("------------")
                print(resp)
                print("------------")
                # print(resp)
                resp = parse_to_json(resp=resp)
                print(resp)
                
                return Response(resp, status=status.HTTP_200_OK)
            except Exception as e:
                    return Response(e, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class ScriptCreationView(APIView):
    def post(self, request, format=None):
        task = request.data["task"]
        print(task)
        
        if task == "NEW_SCRIPT_CREATION":
            try:
                user_id, agent = request.data["user_id"], request.data["agentName"]
                data = ScriptCreationDAO.new_script_creation(user_id=user_id, agent=agent)
                return Response(data, status=status.HTTP_200_OK)
            except Exception as e:
                return Response(e, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        elif task == "ACTIVATE_PAGE":
            try:
                script_id, stageName = request.data["script_id"], request.data["stageName"]
                ScriptCreationDAO.activate_page(script_id=script_id, stageName=stageName)
                return Response(200, status=status.HTTP_200_OK)
            except Exception as e:
                return Response(e, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        
        elif task == "UPDATE_SCRIPT_CREATION_DATA":
            try:
                script_id, dataName, dataValue = request.data["script_id"], request.data["dataName"], request.data["dataValue"]
                ScriptCreationDAO.update_script_creation_data(script_id=script_id, dataName=dataName, dataValue=dataValue)
                return Response(200, status=status.HTTP_200_OK)
            except Exception as e:
                return Response(e, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        # depricated version of v4
        elif task == "INIT_NODES_SETTINGS":
            try:
                script_id, sceneType = request.data["script_id"], request.data["sceneType"]
                # if zigzag
                if sceneType == "ZigZag":
                    sceneData = ZIGZAG_SETTINGS
                    ScriptCreationDAO.update_script_creation_data(script_id=script_id, dataName="scenesData", dataValue={"sceneType":"",  "nodesData":sceneData})
                    return Response(sceneData, status=status.HTTP_200_OK)
                
            except Exception as e:
                return Response(e, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        elif task == "GET_OR_INIT_SCRIPT":
            try:
                print(request.data["script_id"])
                print( request.data["document_id"])
                script_id, document_id = request.data["script_id"], request.data["document_id"]
                print(script_id)
                print(document_id)
                
                # if zigzag
                if not document_id:
                    data = ScriptDocumentDAO.init_document(script_id=script_id)
                else:
                    data = ScriptDocumentDAO.get_document_by_id(document_id=document_id)
                return Response(data, status=status.HTTP_200_OK)
            except Exception as e:
                return Response(e, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        
        elif task == "UPDATE_DOCUMENT":
            try:
                script_id, document_id, textContent, rawContent = request.data["script_id"], request.data["document_id"], request.data["textContent"], request.data["rawContent"]
                data = ScriptDocumentDAO.update_document_by_id(document_id=document_id,textContent=textContent, rawContent=rawContent)
                return Response(data, status=status.HTTP_200_OK)
            except Exception as e:
                return Response(e, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        elif task == "FIND_ALL_DOCUMENTS":
            try:
                script_id = request.data["script_id"]
                # data = ScriptDocumentDAO.get_documents_by_script_id(script_id=script_id)
                # find all the scenes of this script
                sceneData = ScriptCreationDAO.get_scene_data_by_id(script_id=script_id)
                nodesData = sceneData["scenesData"]["nodesData"]["nodes"]
                # filter with order
                nodesData = list(filter(lambda item:item["data"]["order"] != "", nodesData))
                nodesData.sort(key=lambda item:item["data"]["order"])
                document_id_list = [item["data"]["document_id"] for item in nodesData]
                data = ScriptDocumentDAO.get_documents_by_documentsId_list(document_id_list=document_id_list)
                return Response(data, status=status.HTTP_200_OK)
            except Exception as e:
                return Response(e, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
