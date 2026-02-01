#!/bin/bash

echo "🔧 Configuration de l'environnement..."
echo ""

# Backend
if [ ! -f backend/.env ]; then
    cp backend/.env.example backend/.env
    echo "✅ backend/.env créé depuis backend/.env.example"
else
    echo "ℹ️  backend/.env existe déjà"
fi

# Frontend
if [ ! -f frontend/.env ]; then
    cp frontend/.env.example frontend/.env
    echo "✅ frontend/.env créé depuis frontend/.env.example"
else
    echo "ℹ️  frontend/.env existe déjà"
fi

echo ""
echo "🚀 Démarrage de Docker..."
echo ""

docker compose up --build