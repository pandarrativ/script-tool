from django.urls import path
from .views import *


urlpatterns = [
    path("widget-chat", WidgetChatView.as_view()),
    path("task", ScriptToolView.as_view()),
    path("data", ScriptCreationView.as_view()),
    path("conversation", ConversationView.as_view()),
]