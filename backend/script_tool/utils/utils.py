import datetime
import json
import ast

def get_current_time():
    return datetime.datetime.now()

# parser for respnse to json
def parse_to_json(resp):
    return json.loads(resp)
                
def parse_to_json_single_quotes(resp):
    try:
        return json.loads(resp)
    except Exception as e:  # incase it the dict keys is wrapped by ' instead of "
        return ast.literal_eval(resp)
    
def parse_node_settings(resp):
    start_index = resp.find('{')
    end_index = resp.rfind('}')
    resp = resp[start_index:end_index+1]
    print("-------------- sleect finished --------------------")
    print(resp)
    return parse_to_json(resp)

def clean_messages(messages):
    return [{"role":item["role"], "content":item['content']} for item in messages]

def filter_sort_document(data):
    filtered_data = list(filter(lambda item: item["order"] != "", data))
    # filtered_data.sort(lambda item:item["order"])
    return filtered_data