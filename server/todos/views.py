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

    @action(methods=['get'], detail=True)
    def label(self, request, pk=None):
        try:
            label = Label.objects.get(pk=pk)
        except Label.DoesNotExist:
            return Response({'error': 'Label not found!'}, status=404)
        return Response({'label': label.title})
