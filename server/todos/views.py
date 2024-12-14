from django.db.models import Count
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

        filters = self.request.query_params.get('filter')

        if filters:
            filter_params = filters.replace('/', '').split(',')

            if 'is_trashed' in filter_params:
                qst = qst.filter(is_trashed=True)

            if 'is_done' in filter_params:
                qst = qst.filter(is_done=True)

        return qst

    @action(methods=['get'], detail=True)
    def label(self, request, pk=None):
        try:
            label = Label.objects.get(pk=pk)
        except Label.DoesNotExist:
            return Response({'error': 'Label not found!'}, status=404)

        return Response({'label': label.title})

    @action(methods=['get'], detail=False)
    def count_by_sections(self, request):
        user = request.user

        result = {
            'done_count': Todo.objects.filter(user=user, is_done=True).count(),
            'trashed_count': Todo.objects.filter(user=user, is_trashed=True).count(),
            'total_count': Todo.objects.filter(user=user).count()
        }

        return Response(result)
