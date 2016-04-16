from django.http import JsonResponse
from django.shortcuts import render
from djangoreact.core.models import Message


def home(request):
    return render(request, 'messages.html')


def api(request):
    messages = list()
    for message in Message.objects.all():
        messages.append({
            'content': message.content,
            'time_ago': message.time_ago,
            'pk': message.pk,
            'author': message.author
        })
    return JsonResponse({'messages': messages})
