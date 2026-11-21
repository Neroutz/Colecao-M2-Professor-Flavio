from django.db import models


# Create your models here.

class series(models.Model):
    titulo = models.CharField(max_length=100)
    plataforma = models.CharField(max_length=100)
    Ano  = models.IntegerField() 
    avaliacao = models.FloatField()
    
    def __str__(self):
        return self.titulo