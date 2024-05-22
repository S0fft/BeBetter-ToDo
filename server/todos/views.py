from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from todos.models import Label, Todo
from todos.serializers import TodoSerializer


class TodoViewSet(viewsets.ModelViewSet):
    serializer_class = TodoSerializer

    def get_queryset(self):
        pk = self.kwargs.get('pk')

        if not pk:
            return Todo.objects.all()

        return Todo.objects.filter(pk=pk)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    @action(methods=['get'], detail=True)
    def label(self, request, pk=None):
        label = Label.objects.get(pk=pk)

        return Response({'Label': label.title})
