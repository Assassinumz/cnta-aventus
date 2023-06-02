from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .renderers import GraphRenderer
from .models import *
from .serializers import *

class BMIGView(APIView):
    renderer_classes = [GraphRenderer]
    def get(self, request):
        graph = BMIG.objects.all()[0]
        serializer = BMIGSerializer(graph)
        return Response(serializer.data, status = status.HTTP_200_OK)
    
class MUACGView(APIView):
    renderer_classes = [GraphRenderer]
    def get(self, request):
        graph = MUACG.objects.all()[0]
        serializer = MUACGSerializer(graph)
        return Response(serializer.data, status = status.HTTP_200_OK)
    
class HCFGView(APIView):
    renderer_classes = [GraphRenderer]
    def get(self, request):
        graph = HCFG.objects.all()[0]
        serializer = HCFGSerializer(graph)
        return Response(serializer.data, status = status.HTTP_200_OK)

class HFAGView(APIView):
    renderer_classes = [GraphRenderer]
    def get(self, request):
        graph = HFAG.objects.all()[0]
        serializer = HFAGSerializer(graph)
        return Response(serializer.data, status = status.HTTP_200_OK)
    
class WFAGView(APIView):
    renderer_classes = [GraphRenderer]
    def get(self, request):
        graph = WFAG.objects.all()[0]
        serializer = WFAGSerializer(graph)
        return Response(serializer.data, status = status.HTTP_200_OK)
    
class WFHGView(APIView):
    renderer_classes = [GraphRenderer]
    def get(self, request):
        graph = WFHG.objects.all()[0]
        serializer = WFHGSerializer(graph)
        return Response(serializer.data, status = status.HTTP_200_OK)
      
class BMIBView(APIView):
    renderer_classes = [GraphRenderer]
    def get(self, request):
        graph = BMIB.objects.all()[0]
        serializer = BMIBSerializer(graph)
        return Response(serializer.data, status = status.HTTP_200_OK)
    
class MUACBView(APIView):
    renderer_classes = [GraphRenderer]
    def get(self, request):
        graph = MUACB.objects.all()[0]
        serializer = MUACBSerializer(graph)
        return Response(serializer.data, status = status.HTTP_200_OK)
    
class HCFBView(APIView):
    renderer_classes = [GraphRenderer]
    def get(self, request):
        graph = HCFB.objects.all()[0]
        serializer = HCFBSerializer(graph)
        return Response(serializer.data, status = status.HTTP_200_OK)

class HFABView(APIView):
    renderer_classes = [GraphRenderer]
    def get(self, request):
        graph = HFAB.objects.all()[0]
        serializer = HFABSerializer(graph)
        return Response(serializer.data, status = status.HTTP_200_OK)
    
class WFABView(APIView):
    renderer_classes = [GraphRenderer]
    def get(self, request):
        graph = WFAB.objects.all()[0]
        serializer = WFABSerializer(graph)
        return Response(serializer.data, status = status.HTTP_200_OK)
    
class WFHBView(APIView):
    renderer_classes = [GraphRenderer]
    def get(self, request):
        graph = WFHB.objects.all()[0]
        serializer = WFHBSerializer(graph)
        return Response(serializer.data, status = status.HTTP_200_OK)