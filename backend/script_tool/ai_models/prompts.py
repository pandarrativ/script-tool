SETTINGS = """As a helping assistant, your primary goal is to assist users in creating their own movie scripts. Follow these steps to provide effective support:

(1) Understand the User's Vision: Begin by asking questions to understand the user's idea for their movie. This includes the genre, plot, setting, and characters. Encourage them to share any specific themes, messages, or emotions they want to convey.

(2) Develop the Plot: Once you have a clear understanding of their vision, help them structure their plot. Guide them in creating a beginning, middle, and end, ensuring the story flows logically and maintains the audience's interest. Discuss key elements like conflict, climax, and resolution.

(3) Character Development: Assist in developing well-rounded characters. Discuss their backgrounds, motivations, and how they will evolve throughout the story. Ensure each character's actions and dialogue align with their personality and role in the plot.

(4) Dialogue Crafting: Offer guidance on writing dialogue that sounds natural, conveys the characters' emotions, and advances the plot. Encourage the use of subtext and show rather than tell.

(5) Scene Setting: Help in visualizing scenes. Discuss locations, time periods, and atmospheres that will bring the story to life. Ensure that each scene contributes to the overall narrative.

(6) Formatting Advice: Provide information on the standard format for movie scripts, including scene headings, action lines, character names, dialogue, and parentheticals.

(7) Feedback and Revision: Offer constructive feedback on the script. Point out areas for improvement, such as plot inconsistencies, character development, pacing, and dialogue. Encourage revision based on this feedback.

(8) Encouragement and Motivation: Throughout the process, motivate the user and encourage their creativity. Acknowledge their progress and the effort they're putting into their script.

Remember, your role is to guide and support the user in bringing their creative vision to life in the form of a movie script."""


def add_prompt_settings(prompt):
    return [
        {"role":"system", "content":SETTINGS},
        {"role":"user", "content":prompt},
    ]


def create_logline(when, who, what, why, how, where, but):
    return """Create a logline for me based on the following elements: when: {{{when}}},  who: {{{who}}}, what: {{{what}}}, why: {{{why}}}, how: {{{how}}}, where: {{{where}}}, but: {{{but}}}.
        Present the results in JSON format as follows: 

        Desired format:
        {{    
            logline:<STRING>
        }}
        """.format(when=when, who=who, what=what, why=why, how=how, where=where, but=but)


def create_beat_sheet(logline, structureType):
    if structureType == "Three-Act Structure":
        return """Create a beat sheet that follows a typical three-act structure based on the logline following the movie script:  {logline}.   
            Present the results in JSON format as follows: 

            Desired format:
            {{    
                "Action1": {{"Opening Image":<STRING>, "Theme Stated":<STRING>, "Set-Up":<STRING>, "Catalyst":<STRING>, "Debate":<STRING> }},
                "Action2": {{"Break into Two:":<STRING>,  "B Story":<STRING>, "Fun and Games":<STRING>, "Midpoint":<STRING>, "Bad Guys Close In":<STRING>, "All Is Lost":<STRING>, "Dark Night of the Soul":<STRING>}},
                "Action3": {{"Break into Three":<STRING>,  "Finale":<STRING>, "Closing Image":<STRING>}},
            }}
            """.format(logline=logline)
    elif structureType == "Hero's Journey":
        return """Create a beat sheet that follows a typical the hero's journey structure based on the logline following the movie script:  {logline}.   
                Present the results in JSON format as follows: 

                Desired format:
                {{    
                    "Ordinary World": <STRING>,
                    "Call to Adventure":  <STRING>,
                    "Action3":  <STRING>,
                    "Refusal of the Call": <STRING>,
                    "Meeting with the Mentor":  <STRING>,
                    "Crossing the Threshold":  <STRING>,
                    "Tests, Allies, Enemies": <STRING>,
                    "Approach to the Inmost Cave":  <STRING>,
                    "Ordeal":  <STRING>,
                    "Reward": <STRING>,
                    "The Road Back":  <STRING>,
                    "Resurrection":  <STRING>,
                    "Return with the Elixi":  <STRING>,
                }}
                """.format(logline=logline)
    elif structureType == "Five-Act Structure":
        return """Create a beat sheet that follows a typical five-act structure based on the logline following the movie script:  {logline}.   
            Present the results in JSON format as follows: 

            Desired format:
            {{    
                    "Exposition": <STRING>,
                    "Rising Action":  <STRING>,
                    "Action3":  <STRING>,
                    "Climax": <STRING>,
                    "Falling Action":  <STRING>,
                    "Denouement/Resolution":  <STRING>,
            }}
            """.format(logline=logline)
    elif structureType == "Seven-Point Story Structure":
        return """Create a beat sheet that follows a typical seven-point story structure based on the logline following the movie script:  {logline}.   
            Present the results in JSON format as follows: 

            Desired format:
            {{    
                    "Hook": <STRING>,
                    "Plot Turn 1":  <STRING>,
                    "Pinch Point 1":  <STRING>,
                    "Midpoint": <STRING>,
                    "Pinch Point 2":  <STRING>,
                    "Plot Turn 2":  <STRING>,
                    "Resolution": <STRING>,
            }}
            """.format(logline=logline)
            

def create_treatment(logline, beat_sheet):
    return """Create a treatment based on the following information. 
    logline : {{{logline}}}
    Beat sheet: {{{beat_sheet}}}

    Present the results in JSON format as follows: 

    Desired format:
    {{    
        "Title":<STRING>,
        "Logline":<STRING>,
       "Action1":<STRING>,
        "Action2":<STRING>,
       "Action3":<STRING>,
        "Wrap Up":<STRING>,
    }}""".format(logline=logline, beat_sheet=beat_sheet)
    
    
def generate_scene_nodes_settings(logline, outline):
    return """Create screenplays for each part in the movie outline. You first need to decide the number of screenplays and then generate information for each screenplay. This is the movie information:
    Movie logline : {{{logline}}}
    Movie outline : {{{outline}}}
    
    Present the results in JSON format as follows, the content of the screenplay should follow the standard format of a movie screenplay. Objects should be wrapped by double quotes:

    Desired format:
    {{    
        "Number of scenes": <INT>,
        "Scene1": {{"title":<STRING>, "time":<STRING>, "characters":<LIST_OF_STRINGS>, "location":<STRING>, "summary":<STRING>, "screenplay":<STRING>}},
        "Scene2": {{"title":<STRING>, "time":<STRING>, "characters":<LIST_OF_STRINGS>, "location":<STRING>, "summary":<STRING>, "screenplay":<STRING>}}
        <OTHER SCENES DATA>
    }}""".format(logline=logline, outline=outline)

    
    
def generate_scene(logline, outline, sceneData):
    return """Create a screenplay for one movie scene based on the following information.
    Movie logline : {{{logline}}}
    Movie outline : {{{outline}}}
    Characters of this scene : {{{characters}}}
    Location of this scene : {{{location}}}
    Time of this scene : {{{time}}}
    Summary of this scene : {{{summary}}}
    
    Present the results in JSON format as follows, your response should follow the standard format of a movie screenplay: 

    Desired format:
    {{    
        "Content":<STRING>
    }}""".format(logline=logline, outline=outline, characters=sceneData["characters"], location=sceneData["location"], time=sceneData["time"], summary=sceneData["summary"])


def randomize_logline_elements(elementName, loglineData, outlineData, scenesData):
    return """Create a random element {{{elementName}}} for movie logline based on the following information. If any details are missing due to the writer's incomplete creation, these should be omitted. You need to be imaginative.
        Movie Logline : {{{logline}}}
        Movie outline : {{{outline}}}
        Scenes: {{{scenesData}}}
        
        Present the results in JSON format as follows, with the element succinctly described in a few words:


        Desired format:
        {{    
            "{elementName}":<STRING>
        }}""".format(elementName=elementName, logline=loglineData["loglineContent"], outline=outlineData["outlineContent"], scenesData=scenesData)

######################### director agent settings ##################
def ask_directort_opinion(agent_name, task, script_data):
    return [
        {"role":"system", "content":"""You are a movie diretor. Your primary goal is to provide users with suggestion about his movie script. You need to follow these roles: (1) Be consice (2) Be spefic and focusing on certain part of user script (3) Return response in the tone as {agent_name}.""".format(agent_name=agent_name)},
        {"role":"user", "content":"""Give your response in 30 words in the style of {agent_name}. This is the script information: {{{script_data}}}. Present the results in JSON format as follows: 

        Desired format:
        {{    
            "suggestion":<STRING>
        }}""".format(agent_name=agent_name, script_data=script_data)}
    ]


def ask_directort_structure(agent_name, task, script_data):
        return [
        {"role":"system", "content":"""You are a movie diretor. Your primary goal is to provide users with suggestion about his movie script. You need to follow these roles: (1) Be consice (2) Be spefic and focusing on certain part of user script (3) Focusing on the script structure (4) Return response in the tone as {agent_name}.""".format(agent_name=agent_name)},
        {"role":"user", "content":"""Give your response in 30 words in the style of {agent_name}. This is the script information: {{{script_data}}}. Present the results in JSON format as follows: 

        Desired format:
        {{    
            "suggestion":<STRING>
        }}""".format(agent_name=agent_name, script_data=script_data)}
    ]


# def add_master_agent_messages_settings(messages, agent_name):
#     return messages


############################### for conversation ################################ 
def wrap_chat_messages(messages, scriptInfo):
    settings = """You are a movie creation agent. Your task is to help the user write his movie script. You need to  follow these rules: (1) Understand the script; (2) Return detailed responses; (3) Play the advisory role; (4) Give iterative feedback; (5) Be problem solving. Control your response in 100 words. Some of the script information might be missing because the user is still writing it. This is the script information.: {{{scriptInfo}}}""".format(scriptInfo=scriptInfo)
    messages.insert(0, {"role":"system", "content":settings})