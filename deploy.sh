#!/bin/bash

# Deployment Script für Ikigai-Webseite auf Hostinger VPS
# Verwendung: bash deploy.sh

set -e

echo "=========================================="
echo "Ikigai-Webseite Deployment Script"
echo "=========================================="
echo ""

# Farben für Output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Variablen
PROJECT_DIR="/var/www/KI-coach-gespraechsfuehrung/Ikigai-Webseite"
DOMAIN="entwicklungs-werkstatt.com"
NGINX_CONF="/etc/nginx/sites-available/${DOMAIN}"

# Phase 1: Überprüfungen
echo -e "${YELLOW}[1/5] Überprüfungen...${NC}"
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js nicht installiert!"
    exit 1
fi
echo -e "${GREEN}✓ Node.js installiert${NC}"

if ! command -v nginx &> /dev/null; then
    echo "ERROR: Nginx nicht installiert!"
    exit 1
fi
echo -e "${GREEN}✓ Nginx installiert${NC}"

# Phase 2: Git aktualisieren
echo ""
echo -e "${YELLOW}[2/5] Git Repository aktualisieren...${NC}"
cd ${PROJECT_DIR}
git pull origin master
echo -e "${GREEN}✓ Git aktualisiert${NC}"

# Phase 3: Dependencies und Build
echo ""
echo -e "${YELLOW}[3/5] Dependencies installieren und App bauen...${NC}"
npm install
npm run build
echo -e "${GREEN}✓ App gebaut${NC}"

# Phase 4: Nginx überprüfen
echo ""
echo -e "${YELLOW}[4/5] Nginx konfigurieren...${NC}"
if [ ! -f ${NGINX_CONF} ]; then
    echo "Erstelle Nginx-Konfiguration..."
    sudo cp nginx-config.conf ${NGINX_CONF}
    sudo ln -sf ${NGINX_CONF} /etc/nginx/sites-enabled/
fi

sudo nginx -t && echo -e "${GREEN}✓ Nginx Syntax OK${NC}" || { echo "ERROR: Nginx Syntax Fehler!"; exit 1; }

# Phase 5: Nginx neu starten
echo ""
echo -e "${YELLOW}[5/5] Nginx neu starten...${NC}"
sudo systemctl restart nginx
echo -e "${GREEN}✓ Nginx neu gestartet${NC}"

echo ""
echo -e "${GREEN}=========================================="
echo "✓ Deployment erfolgreich abgeschlossen!"
echo "=========================================="
echo ""
echo "Website verfügbar unter: https://${DOMAIN}"
echo ""
