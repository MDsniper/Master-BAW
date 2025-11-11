# Deployment Guide

## Coolify Deployment (Recommended)

**For Coolify users, see [COOLIFY.md](./COOLIFY.md) for complete Coolify-specific instructions.**

Quick Coolify setup:
1. Create new Application in Coolify
2. Connect your Git repository
3. Set Build Pack to **Docker**
4. Set Health Check Path to `/health`
5. Configure domain and deploy

The included Dockerfile and nginx configuration work perfectly with Coolify out of the box.

---

## Docker Deployment (Manual VPS)

This project includes a complete Docker setup with nginx for production deployment.

### Quick Start

#### 1. Build and Run with Docker Compose

```bash
# Build and start the container
docker compose up -d --build

# View logs
docker compose logs -f

# Stop the container
docker compose down
```

The application will be available at `http://your-server-ip`

#### 2. Manual Docker Build (Alternative)

```bash
# Build the image
docker build -t bennie-williams-ai .

# Run the container
docker run -d -p 80:80 --name bennie-williams-ai bennie-williams-ai

# View logs
docker logs -f bennie-williams-ai

# Stop and remove
docker stop bennie-williams-ai
docker rm bennie-williams-ai
```

### Using a Different Port

If port 80 is already in use, modify `docker-compose.yml`:

```yaml
ports:
  - "8080:80"  # Use port 8080 instead
```

Or for manual docker run:

```bash
docker run -d -p 8080:80 --name bennie-williams-ai bennie-williams-ai
```

### SSL/HTTPS Setup

For production with SSL, use a reverse proxy like Caddy or nginx on your host:

#### Option 1: Caddy (Easiest - Auto SSL)

Create `Caddyfile`:

```
benniewilliams.ai {
    reverse_proxy localhost:80
}
```

Run Caddy:

```bash
caddy run
```

#### Option 2: Nginx + Certbot

```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d benniewilliams.ai
```

Example nginx config (`/etc/nginx/sites-available/bennie-williams`):

```nginx
server {
    server_name benniewilliams.ai www.benniewilliams.ai;

    location / {
        proxy_pass http://localhost:80;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/benniewilliams.ai/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/benniewilliams.ai/privkey.pem;
}

server {
    if ($host = benniewilliams.ai) {
        return 301 https://$host$request_uri;
    }
    listen 80;
    server_name benniewilliams.ai www.benniewilliams.ai;
    return 404;
}
```

### Troubleshooting White Screen Issues

If you see a white screen after deployment:

#### 1. Check Browser Console

Open browser DevTools (F12) and check for errors. Common issues:

- **404 errors for assets**: Assets not loading correctly
- **Failed to load module**: Build issue or incorrect base path
- **CORS errors**: nginx misconfiguration

#### 2. Verify Container is Running

```bash
docker ps
docker logs bennie-williams-ai
```

#### 3. Check nginx Configuration

```bash
# Access the container
docker exec -it bennie-williams-ai sh

# Check nginx config
cat /etc/nginx/conf.d/default.conf

# Check if files exist
ls -la /usr/share/nginx/html/
```

You should see `index.html` and an `assets/` directory.

#### 4. Test Health Endpoint

```bash
curl http://localhost/health
# Should return: healthy
```

#### 5. Verify Build Output

The build creates these files:
- `/usr/share/nginx/html/index.html` - Main HTML
- `/usr/share/nginx/html/assets/` - JS, CSS, and other assets
- `/usr/share/nginx/html/bennie-headshot.png` - Public assets

#### 6. Check React Router Configuration

The nginx config includes:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

This ensures all routes fall back to `index.html` for client-side routing.

### Updating the Deployment

```bash
# Pull latest code
git pull

# Rebuild and restart
docker compose up -d --build

# Or manually
docker build -t bennie-williams-ai .
docker stop bennie-williams-ai
docker rm bennie-williams-ai
docker run -d -p 80:80 --name bennie-williams-ai bennie-williams-ai
```

### Environment Variables

Currently, the app doesn't require environment variables. If you need to add them:

1. Create `.env.production`:

```env
VITE_API_URL=https://api.example.com
```

2. Update `docker-compose.yml`:

```yaml
environment:
  - VITE_API_URL=${VITE_API_URL}
```

3. Rebuild the container

### Performance Optimization

The nginx configuration includes:

- **Gzip compression** for faster page loads
- **Asset caching** (1 year for static files)
- **Security headers** (XSS, CORS, etc.)
- **Health checks** for monitoring

### Monitoring

Check container health:

```bash
docker ps --filter name=bennie-williams-ai
```

View real-time logs:

```bash
docker compose logs -f
```

### Resource Usage

Typical resource usage:
- **Image size**: ~50MB (alpine-based)
- **RAM**: ~10-20MB
- **CPU**: Minimal (nginx is very efficient)

## Alternative Deployment Options

### Static Hosting (Netlify, Vercel, etc.)

```bash
# Build locally
pnpm run build

# Upload the `dist/` directory to your hosting provider
```

For React Router to work, ensure the hosting provider redirects all routes to `index.html`.

### Manual VPS Deployment

```bash
# Install dependencies
pnpm install

# Build
pnpm run build

# Serve with nginx (install separately)
sudo cp -r dist/* /var/www/html/
```

Use the included `nginx.conf` as a reference for your system nginx configuration.

## Support

If you encounter issues:

1. Check the browser console for errors
2. Review docker logs: `docker logs bennie-williams-ai`
3. Verify nginx is serving files: `docker exec -it bennie-williams-ai ls -la /usr/share/nginx/html/`
4. Test locally first: `pnpm run build && pnpm run preview`
