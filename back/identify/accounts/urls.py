from django.urls import path
from .views import get_routes,get_user
from rest_framework_simplejwt.views import TokenRefreshView,TokenObtainPairView


urlpatterns = [
    path('', get_routes), #--> to explain apis and how to use them to developers
    path('token/', TokenObtainPairView.as_view()), # gives the token for the authenticated user
    path('token/refresh/', TokenRefreshView.as_view()), # gives a new token for a user
    path('token/get_user/', get_user), #get username by token
]
