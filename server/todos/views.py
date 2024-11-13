from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from todos.models import Label, Todo
from todos.serializers import TodoSerializer


class TodoViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = TodoSerializer

    def get_queryset(self):
        user = self.request.user
        pk = self.kwargs.get('pk')

        if pk:
            return Todo.objects.filter(pk=pk, user=user)
        elif pk is None:
            return Todo.objects.filter(user=user)

        qst = Todo.objects.all()
        title = self.request.query_params.get('title')

        if title is not None:
            qst = qst.filter(title__icontains=title)
        else:
            return qst

    @action(methods=['get'], detail=True)
    def label(self, request, pk=None):
        try:
            label = Label.objects.get(pk=pk)
        except Label.DoesNotExist:
            return Response({'error': 'Label not found!'}, status=404)

        return Response({'label': label.title})

    @action(methods=['delete'], detail=False, url_path='clear_trashed')
    def clear_trashed(self, request):
        user = request.user
        deleted_count, _ = Todo.objects.filter(is_trashed=True, user=user).delete()

        return Response({"message": f"Deleted {deleted_count} trashed todos!"}, status=status.HTTP_204_NO_CONTENT)
