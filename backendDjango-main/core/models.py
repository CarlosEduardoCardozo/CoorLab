from django.db import models

class ticket(models.Model):
  name = models.CharField(max_length=30)
  price_confort = models.CharField(max_length=30)
  price_econ = models.CharField(max_length=30)
  city = models.CharField(max_length=30) 
  duration = models.CharField(max_length=30)
  seat = models.CharField(max_length=30)
  bed = models.CharField(max_length=30)


  def __str__(self):
      return self.name