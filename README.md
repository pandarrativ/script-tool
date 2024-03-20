# ScriptCreationTool

## Frontend

Create a `.env` file in your `/frontend` folder and add this line into it

```
REACT_APP_BACKEND_HOST="http://localhost:8000"
```

then run following command in your terminal

```shell
cd path_to_your_project/frontend
npm install
npm start
```





## Backend

Create a `.env` file in your `/backend` folder and add these lines into it  (Replace information ...)

```
OPENAI_API_KEY="..."
OPENAI_API_VERSION="."
OPENAI_API_ENDPOINT="."
```

Open a new terminal, then run following command in terminal

```shell
cd path_to_your_project/backend
conda create --name script_tool_env python=3.9
conda activate script_tool_env
pip install -r requirements.txt
python manage.py runserver
```

