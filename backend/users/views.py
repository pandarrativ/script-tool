from django.http import Http404

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserCreateSerializer, UserSearchSerializer


from django.contrib.auth.hashers import make_password, check_password


from .models import User
import re


# for user login
class LoginView(APIView):
    def post(self, request , format=None):
        email, password = request.data["email"],request.data["password"]
        user = User.get_user_by_email(email=email)
        if not user:
            return Response("User not found", status=status.HTTP_404_NOT_FOUND)
        else:
            is_valid = check_password(password, user.password)
            if is_valid:
                # user = self.get_user(request.data["username"], request.data["password"])
                serializer = UserSearchSerializer(user)
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response("Password incorrect", status=status.HTTP_400_BAD_REQUEST)



# # for user signup
class SingupView(APIView):

    def post(self, request, format=None):
        email, password = request.data["email"], request.data["password"]
        user = User(email=email, password=password)
        error_messsage = self.validateUser(user)
        if error_messsage:
            return Response(error_messsage, status=status.HTTP_400_BAD_REQUEST)
        else:
            user.password = make_password(user.password)
            user.save()
            serializer = UserSearchSerializer(user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

    
    def validateUser(self, user):
        if not user.email:
            return "Email is required!"
        elif not self.is_valid_email(user.email):
            return "Email is not valid!"
        elif user.is_email_exists():
            return "Email already used!"
        elif not user.password:
            return "Password is required!"
        elif len(user.password) < 3 or len(user.password) > 20:
            return "Password length invalid. Should between 3 to 20 characters!"
        
        return None


    def is_valid_email(self, email):
        email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        return re.match(email_pattern, email)
         

