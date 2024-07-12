from rest_framework import serializers
from todos.models import Todo


class TodoSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Todo
        fields = "__all__"


class TodoSerializerPartial(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'

        extra_kwargs = {
            'title': {'required': False},
            'content': {'required': False},
        }
