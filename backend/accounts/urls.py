from django.urls import path
from . import views

name_space = 'accounts'
urlpatterns = [
    path('', views.HomeView.as_view(), name='home'),
    path('register/', views.PsychologistRegisterView.as_view(), name='user_register'),
    path('login/', views.UserLoginView.as_view(), name='user_login'),
    path('logout/', views.UserLogoutView.as_view(), name='user_logout'),
]
