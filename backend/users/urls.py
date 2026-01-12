from django.urls import path
from .views import *


urlpatterns=[
    path("register/", RegisterView.as_view()),
    path("login/", LoginView.as_view()),
    path("users/", UserListView.as_view()),
    path("update/<int:pk>/", UserUpdateView.as_view()),
    path("delete/<int:pk>/", UserDeleteView.as_view()),
]