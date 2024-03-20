from django.db import models
from uuid import uuid4

# Create your models here.
class User(models.Model):
    _id = models.UUIDField(primary_key=True, default=uuid4,  unique=True, editable=False)
    # name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    # username = models.CharField(max_length=20,  unique=True)
    password = models.CharField(max_length=200)

    def __str__(self):
        return "{} {} {} {}".format(self.email, self.password) 
    
    # @staticmethod
    # def get_user_by_username(username):
    #     try:
    #         return User.objects.get(username=username)
    #     except:
    #         return None
    @staticmethod
    def get_user_by_email(email):
        try:
            return User.objects.get(email=email)
        except:
            return None
        
    # def is_username_exists(self):
    #     if User.objects.filter(username = self.username):
    #         return True
    #     return False
    
    def is_email_exists(self):   
        if User.objects.filter(email = self.email):
            return True
        return False