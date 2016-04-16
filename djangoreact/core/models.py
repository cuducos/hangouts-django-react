import arrow
from django.db import models


class Message(models.Model):
    content = models.CharField(max_length=140)
    author = models.CharField(max_length=140)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.content

    @property
    def time_ago(self):
        time_ago = arrow.get(self.created_at)
        return time_ago.humanize(locale='pt')

    class Meta:
        ordering = ['-created_at']
