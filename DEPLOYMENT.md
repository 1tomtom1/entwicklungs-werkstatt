# Deployment Guide - Ikigai Webseite auf Hostinger VPS

## Übersicht
Diese Anleitung zeigt, wie du die Ikigai-Webseite auf deinem Hostinger VPS deployst.

**Details:**
- Domain: `entwicklungs-werkstatt.com`
- Server: Ubuntu 25.10
- SSH: `root@187.124.181.83`
- Webserver: Nginx
- SSL: Let's Encrypt (kostenlos)

---

## Phase 1: Server vorbereiten

### 1.1 SSH-Verbindung aufbauen
```bash
ssh root@187.124.181.83
```

### 1.2 System aktualisieren
```bash
apt update
apt upgrade -y
```

### 1.3 Erforderliche Packages installieren
```bash
apt install -y nodejs npm git nginx certbot python3-certbot-nginx
```

### 1.4 Node.js-Version überprüfen
```bash
node --version  # sollte v18+ sein
npm --version
```

---

## Phase 2: App klonen & bauen

### 2.1 Projektverzeichnis erstellen
```bash
mkdir -p /var/www
cd /var/www
```

### 2.2 Git-Repository klonen
```bash
git clone https://github.com/1tomtom1/entwicklungs-werkstatt.git
cd entwicklungs-werkstatt
```

### 2.3 Dependencies installieren
```bash
npm install
```

### 2.4 App für Production bauen
```bash
npm run build
```

Das erstellt einen `dist/`-Ordner mit allen statischen Dateien.

---

## Phase 3: Nginx konfigurieren

### 3.1 Nginx-Konfiguration erstellen
```bash
sudo nano /etc/nginx/sites-available/entwicklungs-werkstatt.com
```

Kopiere folgende Konfiguration:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name entwicklungs-werkstatt.com www.entwicklungs-werkstatt.com;

    root /var/www/entwicklungs-werkstatt/dist;
    index index.html;

    # Alle Requests zur index.html (für React Router)
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache-Einstellungen für Assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Keine Caching für HTML
    location ~* \.html?$ {
        expires -1;
        add_header Cache-Control "public, must-revalidate, proxy-revalidate";
    }
}
```

Speichern: `CTRL+O` → `ENTER` → `CTRL+X`

### 3.2 Konfiguration aktivieren
```bash
sudo ln -s /etc/nginx/sites-available/entwicklungs-werkstatt.com \
  /etc/nginx/sites-enabled/entwicklungs-werkstatt.com
```

### 3.3 Default-Site deaktivieren (optional)
```bash
sudo rm /etc/nginx/sites-enabled/default
```

### 3.4 Nginx-Syntax prüfen
```bash
sudo nginx -t
```

Output sollte sein:
```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

### 3.5 Nginx starten/neu starten
```bash
sudo systemctl start nginx
sudo systemctl enable nginx  # Auto-Start aktivieren
sudo systemctl restart nginx
```

---

## Phase 4: SSL/HTTPS mit Let's Encrypt

### 4.1 SSL-Zertifikat erstellen
```bash
sudo certbot --nginx -d entwicklungs-werkstatt.com -d www.entwicklungs-werkstatt.com
```

Der Certbot aktualisiert die Nginx-Konfiguration automatisch.

### 4.2 Auto-Renewal testen
```bash
sudo certbot renew --dry-run
```

Das Zertifikat wird automatisch vor Ablauf erneuert (alle 90 Tage).

---

## Phase 5: DNS konfigurieren (bei Hostinger)

1. Gehe zu deinem Hostinger Account
2. Domain-Verwaltung → DNS
3. Erstelle/bearbeite folgende Records:

**A-Record:**
- Name: `@` (oder leer)
- Typ: `A`
- Wert: `187.124.181.83`

**CNAME-Record (optional):**
- Name: `www`
- Typ: `CNAME`
- Wert: `entwicklungs-werkstatt.com`

Änderungen können 24 Stunden dauern bis sie aktiv sind.

---

## Phase 6: Website testen

1. Öffne `https://entwicklungs-werkstatt.com` im Browser
2. Prüfe auf grünes Schloss (HTTPS funktioniert)
3. Teste die verschiedenen Seiten
4. Klicke auf "Impressum" - sollte funktionieren
5. Stripe-Button testen (nur Zahlungslink checken)

---

## Häufige Fehler & Lösungen

### `CTRL+C im Browser / Seite lädt nicht`
→ Nginx neu starten:
```bash
sudo systemctl restart nginx
```

### 404 Fehler bei Neuladen
→ Das ist normal! React Router funktioniert nur bei korrekt konfiguriertem Nginx.
→ Prüfe `try_files $uri $uri/ /index.html;` in der Config.

### SSL funktioniert nicht
→ Überprüfe DNS-Einträge sind gesetzt
→ Warte 24h für DNS-Propagation
→ Oder besuche: https://www.whatsmydns.net/

### Updates hochfahren (nach Code-Changes)

```bash
cd /var/www/entwicklungs-werkstatt
git pull origin master
npm install
npm run build
sudo systemctl restart nginx
```

---

## Performance & Monitoring

### Nginx-Status prüfen
```bash
sudo systemctl status nginx
```

### Logs ansehen
```bash
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Disk-Speicher prüfen
```bash
df -h
```

### RAM-Nutzung prüfen
```bash
free -h
```

---

## Backup & Sicherheit

### Backup des Projektordners
```bash
tar -czf ~/ikigai-backup-$(date +%Y%m%d).tar.gz \
  /var/www/entwicklungs-werkstatt/
```

### Firewall-Regeln (ufw)
```bash
sudo ufw allow 22/tcp   # SSH
sudo ufw allow 80/tcp   # HTTP
sudo ufw allow 443/tcp  # HTTPS
sudo ufw enable
```

---

## Nächste Schritte

- [ ] Server vorbereitet (Phase 1)
- [ ] App geklont & gebaut (Phase 2)
- [ ] Nginx konfiguriert (Phase 3)
- [ ] SSL aktiviert (Phase 4)
- [ ] DNS eingestellt (Phase 5)
- [ ] Website getestet (Phase 6)

Bei Fragen: `root@187.124.181.83`
