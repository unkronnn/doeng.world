# 🚀 Deployment Guide - Doeng World

## Langkah 1: Build Project

Di komputer lokal, jalankan:

```bash
# Berikan izin execute ke script
chmod +x deploy.sh

# Build project
./deploy.sh
```

Atau manual:
```bash
npm install
npm run build
```

File hasil build akan ada di folder `dist/`.

---

## Langkah 2: Upload ke VPS

### A. Via SCP (dari komputer lokal):
```bash
# Ganti USER dan VPS_IP dengan milik kamu
scp -r dist/* USER@VPS_IP:/var/www/doeng.world/
```

### B. Via FTP/SFTP:
- Gunakan FileZilla atau WinSCP
- Upload semua file dari folder `dist/` ke `/var/www/doeng.world/`

### C. Via Git (Recommended):
```bash
# Di VPS:
cd /var/www
git clone https://github.com/unkronnn/doeng.world.git
cd doeng.world
npm install
npm run build
# Copy hasil build
sudo cp -r dist/* /var/www/doeng.world/
```

---

## Langkah 3: Setup Nginx

### A. Copy konfigurasi Nginx:
```bash
# Di VPS:
sudo nano /etc/nginx/sites-available/doeng.world
```

Paste isi dari file `nginx.conf`, lalu save (Ctrl+X, Y, Enter).

### B. Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/doeng.world /etc/nginx/sites-enabled/
```

### C. Test konfigurasi:
```bash
sudo nginx -t
```

### D. Restart Nginx:
```bash
sudo systemctl restart nginx
```

---

## Langkah 4: Setup SSL (Optional tapi Recommended)

```bash
# Install certbot (jika belum)
sudo apt install certbot python3-certbot-nginx -y

# Generate SSL certificate
sudo certbot --nginx -d doeng.world -d www.doeng.world

# Auto-renewal sudah diatur otomatis
```

---

## Langkah 5: Update DNS

Di provider domain kamu (Cloudflare, Namecheap, dll):

```
Type  | Name | Value           | TTL
------|------|-----------------|-----
A     | @    | VPS_IP_ADDRESS  | Auto
A     | www  | VPS_IP_ADDRESS  | Auto
```

---

## Troubleshooting

### Permission issues:
```bash
sudo chown -R www-data:www-data /var/www/doeng.world
sudo chmod -R 755 /var/www/doeng.world
```

### Nginx error:
```bash
# Check logs
sudo tail -f /var/log/nginx/error.log
```

### Tidak bisa akses:
- Pastikan port 80 dan 443 terbuka di firewall
- Check DNS sudah propagate (cek di https://dnschecker.org)

---

## Update Website

Jika ada perubahan, ulangi langkah 1 dan 2:

```bash
# Di lokal
npm run build
scp -r dist/* USER@VPS_IP:/var/www/doeng.world/
```

---

## Multiple Websites di 1 VPS

VPS kamu sudah bisa host multiple sites. Setiap site punya:
- Folder sendiri: `/var/www/site1`, `/var/www/doeng.world`, dll
- Config Nginx sendiri: `/etc/nginx/sites-available/site1`, `/etc/nginx/sites-available/doeng.world`

Nginx akan route berdasarkan `server_name` di config.

---

## Notes

- **Background image**: Pastikan file `background.png` ikut ter-upload dari folder `asset/`
- **Node modules**: JANGAN upload `node_modules/`, cukup folder `dist/` saja
- **Environment**: Production build sudah optimized dan minified

✅ Selesai! Website kamu seharusnya sudah live di `https://doeng.world`
