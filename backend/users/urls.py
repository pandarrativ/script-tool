from django.urls import path
from .views import (
    LoginView,
    SingupView,
)

urlpatterns = [
    path("signin", LoginView.as_view()),
    path("signup", SingupView.as_view()),
]