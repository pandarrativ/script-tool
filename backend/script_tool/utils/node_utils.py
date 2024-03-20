def get_position_settings(number_of_scenes, resp_data, document_id_lists):
    if number_of_scenes == 3:
        res = {"nodes":[], "edges":[]}
        positions = [(-3000, 1500), (0, -1700), (3000, 1500)]
        for i in range(1, 4):
            sc = "Scene" + str(i)
            res["nodes"].append({
                    "id": 'node-' + str(i),
                    "type": 'SceneNode1', 
                    "position": { "x": positions[i-1][0], "y": positions[i-1][1] },
                    "data": { 
                        "title": resp_data[sc]["title"], 
                        "nodeId":i, 
                        "document_id":"", 
                        "order":i, 
                        "characters": resp_data[sc]["characters"], 
                        "location": resp_data[sc]["location"], 
                        "time": resp_data[sc]["time"], 
                        "summary": resp_data[sc]["summary"],
                        "document_id": document_id_lists[i-1]
                    }
                })
        
        for i in range(1, 3):
            res["edges"].append({ 'id': 'edge-'+str(i), 'type': "ScenesEdge", 'source': 'node-'+str(i), 'target': 'node-'+str(1+i), 'animated':  True, 'data': { }},)
        
        return res
    elif number_of_scenes == 5:
        res = {"nodes":[], "edges":[]}
        positions = [(-3000, 1500),(-1500, 1500) , (0, -1700), (1500, 1500), (3000, 1500)]
        for i in range(1, 6):
            sc = "Scene" + str(i)
            res["nodes"].append({
                    "id": 'node-' + str(i),
                    "type": 'SceneNode1', 
                    "position": { "x": positions[i-1][0], "y": positions[i-1][1] },
                    "data": { 
                        "title": resp_data[sc]["title"], 
                        "nodeId":i, 
                        "document_id":"", 
                        "order":i, 
                        "characters": resp_data[sc]["characters"], 
                        "location": resp_data[sc]["location"], 
                        "time": resp_data[sc]["time"], 
                        "summary": resp_data[sc]["summary"],
                        "document_id": document_id_lists[i-1]
                    }
                })
        
        for i in range(1, 5):
            res["edges"].append({ 'id': 'edge-'+str(i), 'type': "ScenesEdge", 'source': 'node-'+str(i), 'target': 'node-'+str(1+i), 'animated':  True, 'data': { }},)
        
        return res
    else:
        res = {"nodes":[], "edges":[]}
        h_gap = 6000//number_of_scenes
        v_gap = 3200//number_of_scenes
        x, y = -3000, 1500
        for i in range(1, 6):
            sc = "Scene" + str(i)
            res["nodes"].append({
                    "id": 'node-' + str(i),
                    "type": 'SceneNode1', 
                    "position": { "x": x, "y": y},
                    "data": { 
                        "title": resp_data[sc]["title"], 
                        "nodeId":i, 
                        "document_id":"", 
                        "order":i, 
                        "characters": resp_data[sc]["characters"], 
                        "location": resp_data[sc]["location"], 
                        "time": resp_data[sc]["time"], 
                        "summary": resp_data[sc]["summary"],
                        "document_id": document_id_lists[i-1]
                    }
                })
            x += h_gap
            y -= v_gap
            v_gap = -v_gap
        
        for i in range(1, 5):
            res["edges"].append({ 'id': 'edge-'+str(i), 'type': "ScenesEdge", 'source': 'node-'+str(i), 'target': 'node-'+str(1+i), 'animated':  True, 'data': { }},)
        
        return res
