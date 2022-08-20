from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated
from .serializers import UserSerializer,ProfileSerializer

@api_view(['GET'])
def get_routes(request):
    explanation = ''
    return Response(explanation)

# class TokenSerializer(TokenObtainPairSerializer):
#     @classmethod
#     def get_token(cls, user):
#         token = super().get_token(user)
#         # adds to the token
#         token['username'] = user.username
#         return token

# class TokenView(TokenObtainPairView):
#     serializer_class = TokenSerializer

@api_view(['GET','POST'])
@permission_classes((IsAuthenticated, ))
def get_user(request):
    content = {'user':UserSerializer(request.user).data, 'profile':ProfileSerializer(request.user.profile).data}
    return Response(content)