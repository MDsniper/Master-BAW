# Coolify Deployment Guide

## Quick Setup

### 1. Prerequisites
- Coolify instance running and accessible
- Git repository connected to Coolify
- Domain name configured (optional but recommended)

### 2. Create New Application in Coolify

1. **Login to Coolify Dashboard**
2. **Create New Resource** → Select "Application"
3. **Source**: Connect your Git repository
   - Repository: `https://github.com/yourusername/Master-BAW` (or your Git URL)
   - Branch: `main`

### 3. Configure Application

#### General Settings:
- **Name**: `bennie-williams-ai`
- **Build Pack**: Docker
- **Dockerfile Location**: `./Dockerfile` (default)
- **Port**: `80`

#### Health Check:
- **Health Check Enabled**: ✅ Yes
- **Health Check Path**: `/health`
- **Health Check Method**: GET
- **Health Check Interval**: 30s

#### Domain Settings:
- **Domain**: `benniewilliams.ai` (or your domain)
- **HTTPS**: Enable (Coolify auto-generates SSL certificates)

### 4. Environment Variables (Optional)

Currently, this app doesn't require environment variables. If you need to add any in the future:

```bash
NODE_ENV=production
VITE_API_URL=https://api.example.com
```

Go to **Environment Variables** tab in Coolify and add them there.

### 5. Deploy

Click **Deploy** button in Coolify dashboard.

Coolify will:
1. Clone your repository
2. Build the Docker image using the Dockerfile
3. Run the container
4. Set up HTTPS with Let's Encrypt (if domain is configured)
5. Monitor health checks

### 6. Verify Deployment

**Check Build Logs:**
- Watch the build process in Coolify's logs viewer
- Look for successful build completion

**Test the Application:**
```bash
# Health check
curl https://benniewilliams.ai/health

# Should return: healthy
```

**Access the Site:**
Visit your configured domain: `https://benniewilliams.ai`

## Troubleshooting

### White Screen Issue

If you see a white screen:

1. **Check Build Logs** in Coolify
   - Look for build errors
   - Verify all dependencies installed correctly

2. **Check Runtime Logs**
   - In Coolify dashboard, go to Logs tab
   - Look for nginx errors

3. **Verify Health Check**
   ```bash
   curl https://yourdomain.com/health
   ```
   Should return `healthy`

4. **Check Browser Console** (F12)
   - Look for 404 errors on assets
   - Check for JavaScript errors

### Build Failures

**Error: "pnpm: command not found"**
- This is normal - Docker image includes pnpm
- Check Dockerfile is being used correctly

**Error: "COPY failed"**
- Ensure `.dockerignore` exists
- Check all source files are committed to Git

**Out of Memory During Build**
- Increase Coolify server memory
- Or reduce build concurrency in Dockerfile

### Health Check Failures

**Health check keeps failing:**

1. Check nginx is running:
   ```bash
   # In Coolify logs, look for nginx startup messages
   ```

2. Verify health endpoint:
   ```bash
   # SSH into Coolify server
   docker exec -it <container-name> wget -O- http://localhost/health
   ```

3. Check nginx configuration:
   ```bash
   docker exec -it <container-name> cat /etc/nginx/conf.d/default.conf
   ```

## Updating Deployment

### Method 1: Auto-Deploy (Recommended)

Enable **Auto Deploy** in Coolify settings to automatically deploy when you push to your repository.

1. Make changes to your code
2. Commit and push to Git:
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```
3. Coolify automatically rebuilds and redeploys

### Method 2: Manual Deploy

1. Push changes to Git
2. Go to Coolify dashboard
3. Click **Redeploy** button

## Advanced Configuration

### Custom nginx Configuration

If you need to modify nginx settings:

1. Edit `nginx.conf` in the repository
2. Commit and push changes
3. Redeploy in Coolify

### Adding SSL/Custom Domain

1. Go to **Domains** section in Coolify
2. Add your domain: `benniewilliams.ai`
3. Point your domain's DNS to Coolify server IP:
   ```
   A Record: @ → YOUR_COOLIFY_SERVER_IP
   A Record: www → YOUR_COOLIFY_SERVER_IP
   ```
4. Enable **Generate SSL Certificate**
5. Coolify automatically generates Let's Encrypt certificate

### Resource Limits

In Coolify, you can set resource limits:

**Recommended Settings:**
- **Memory**: 256MB (this is a static site, very lightweight)
- **CPU**: 0.5 cores
- **Replicas**: 1 (increase for high traffic)

### Persistent Storage (Not Required)

This is a static site with no database, so persistent storage is not needed. All content is baked into the Docker image.

## Monitoring

### View Logs

**Build Logs:**
- Coolify Dashboard → Your App → Deployments → Select deployment → Build Logs

**Runtime Logs:**
- Coolify Dashboard → Your App → Logs

**nginx Access Logs:**
```bash
docker exec -it <container-name> tail -f /var/log/nginx/access.log
```

### Metrics

Coolify provides basic metrics:
- CPU usage
- Memory usage
- Network traffic

Access these in the **Metrics** tab.

### Alerts

Set up alerts in Coolify:
1. **Settings** → **Notifications**
2. Configure email/Slack/Discord notifications
3. Get alerts for:
   - Failed deployments
   - Health check failures
   - High resource usage

## Rollback

If a deployment breaks your site:

1. Go to **Deployments** tab
2. Find the last working deployment
3. Click **Redeploy** on that version

## Performance Optimization

### CDN Setup (Optional)

For better global performance, add a CDN:

1. **Cloudflare** (Recommended - Free):
   - Point your domain to Cloudflare
   - Set Cloudflare DNS to point to Coolify server
   - Enable caching and CDN features

2. **Configure Cloudflare Settings**:
   - SSL/TLS: Full (strict)
   - Auto Minify: JS, CSS, HTML
   - Brotli compression: Enabled
   - Browser Cache TTL: Respect existing headers

### Image Optimization

The headshot and blog images should be optimized:

```bash
# Install tools locally
sudo apt install optipng jpegoptim

# Optimize PNG
optipng -o7 public/bennie-headshot.png

# Optimize JPEG
jpegoptim --max=85 public/blog/*.jpg
```

Then commit and redeploy.

## Security

### Automatic Security Headers

The `nginx.conf` includes security headers:
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy

### HTTPS Enforcement

Coolify automatically:
- Generates SSL certificates
- Redirects HTTP → HTTPS
- Renews certificates before expiry

### Regular Updates

Keep dependencies updated:

```bash
# Update dependencies
pnpm update

# Test locally
pnpm run dev
pnpm run build

# Commit and deploy
git add .
git commit -m "Update dependencies"
git push
```

## Cost Optimization

This deployment is very lightweight:
- **~50MB** Docker image
- **~20MB** RAM usage
- **Minimal** CPU usage
- **No database** required

Perfect for small VPS instances (1GB RAM is plenty).

## Support

### Coolify Documentation
https://coolify.io/docs

### Project Issues
Check browser console (F12) and Coolify logs for specific errors.

### Common URLs to Test

After deployment, test these:
- `https://yourdomain.com` - Home page
- `https://yourdomain.com/health` - Health check
- `https://yourdomain.com/#about` - Section navigation
- `https://yourdomain.com/#blog` - Blog section

All should work correctly with smooth scrolling navigation.
