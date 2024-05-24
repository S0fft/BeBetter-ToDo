from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from todos.models import Label, Todo
from todos.serializers import TodoSerializer


class TodoViewSet(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        pk = self.kwargs.get('pk')

        if pk:
            return Todo.objects.filter(pk=pk, user=user)

        return Todo.objects.filter(user=user)

    @action(methods=['get'], detail=True)
    def label(self, request, pk=None):
        try:
            label = Label.objects.get(pk=pk)
        except Label.DoesNotExist:
            return Response({'error': 'Label not found!'}, status=404)

        return Response({'label': label.title})
