#!/bin/bash

# Script para executar o front end Vue.js e o back end Django simultaneamente

# Diretório do front end
cd coorlabtest-master
# Instalar dependências do front end
npm install
# Iniciar o servidor de desenvolvimento do front end
npm run dev -- --port 8080 &
# Volte para o diretório raiz do projeto
cd ..

# Diretório do back end
cd backendDjango-main
# Instalar dependências do back end (se houver)
poetry add django djangorestframework djangorestframework_simplejwt django-cors-headers
# Comando para iniciar o servidor do Django (por exemplo)
python manage.py runserver 3000 &
# Volte para o diretório raiz do projeto
cd ..

# Aguarde os servidores estarem prontos
wait