from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import User


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        refresh = self.get_token(self.user)

        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)

        data['refresh_token_lifetime'] = str(refresh.lifetime.total_seconds())
        data['access_token_lifetime'] = str(refresh.access_token.lifetime.total_seconds())

        return data


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
    email = serializers.EmailField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])
    image = serializers.ImageField(required=False, allow_null=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'password2', 'image')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match!"})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            image=validated_data.get('image', None)
        )

        user.set_password(validated_data['password'])
        user.save()

        return user


class ProfileSerializer(serializers.ModelSerializer):
    todos_quantity = serializers.SerializerMethodField()
    is_done_todos_quantity = serializers.SerializerMethodField()
    is_trashed_todos_quantity = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email',
                  'is_active', 'todos_quantity', 'is_done_todos_quantity', 'is_trashed_todos_quantity']

    def get_todos_quantity(self, obj):
        return obj.todos.count()

    def get_is_done_todos_quantity(self, obj):
        return obj.todos.filter(is_done=True).count()

    def get_is_trashed_todos_quantity(self, obj):
        return obj.todos.filter(is_trashed=True).count()
