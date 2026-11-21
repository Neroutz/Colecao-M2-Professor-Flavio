from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render

import json

from django.http import JsonResponse

from .models import series

@csrf_exempt
def api_series(request):
    

    if request.method == "POST":
        infos = json.loads(request.body)
        
        nota = infos["avaliacao"]
        ano = infos["Ano"]
    
        if nota > 10 or nota < 0:
            return JsonResponse(
            {"erro": "Avaliação inválida"},
            status=400
        )

        elif ano > 2026 or ano < 1900:
                    return JsonResponse(
                    {"erro": "Ano inválido"},
                    status=400
                )

        else:

            seriearquivo = series.objects.create(
               titulo=infos["titulo"],
               plataforma=infos["plataforma"],
                Ano=infos["Ano"],
                avaliacao=infos["avaliacao"],
            )
            return JsonResponse({"id": seriearquivo.id}, status=201)

        
    serie = list(series.objects.values())
    return JsonResponse(serie, safe=False)

def api_resumo(request):

    if request.method == "GET":
        serie = list(series.objects.values())

        soma = 0

        melhornota = 0

        melhorfilme = ""

        for i in serie:
             if i["avaliacao"] > melhornota:
                melhornota = i["avaliacao"]                
                melhorfilme = i["titulo"]

        for i in serie:
            soma += i["avaliacao"]

        total = len(serie)

        if total == 0:
            return JsonResponse({"total": total})

        else:
            media = round(soma / total, 2)

            return JsonResponse({"total": total,
                                "melhor": melhorfilme,
                                "media_avaliacao": media
                                 })

            

