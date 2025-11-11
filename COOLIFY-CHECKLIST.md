# Coolify Deployment Checklist

Use this checklist to deploy your Bennie Williams AI website to Coolify.

## Pre-Deployment

- [ ] Coolify instance is running and accessible
- [ ] Git repository is pushed to GitHub/GitLab/Gitea
- [ ] Domain DNS is pointed to Coolify server (optional, can be done later)
- [ ] All code changes are committed and pushed

## In Coolify Dashboard

### 1. Create Application
- [ ] Click **+ New Resource** → **Application**
- [ ] Select **Public Repository** or **Private Repository**
- [ ] Enter repository URL (e.g., `https://github.com/yourusername/Master-BAW`)
- [ ] Select branch: `main`
- [ ] Click **Continue**

### 2. Configure Build Settings
- [ ] **Build Pack**: Select `Dockerfile`
- [ ] **Dockerfile Location**: `./Dockerfile` (default)
- [ ] **Docker Build Arguments**: Leave empty (not needed)
- [ ] Click **Continue**

### 3. Configure Application Settings
- [ ] **Application Name**: `bennie-williams-ai` (or your preference)
- [ ] **Port**: `80`
- [ ] **Exposed Port**: Leave default (Coolify handles this)

### 4. Configure Health Check
- [ ] **Enable Health Check**: ✅ Check this
- [ ] **Health Check Path**: `/health`
- [ ] **Health Check Method**: `GET`
- [ ] **Health Check Interval**: `30` seconds
- [ ] **Health Check Timeout**: `3` seconds
- [ ] **Health Check Retries**: `3`

### 5. Configure Domain (Optional)
- [ ] Click **Domains** tab
- [ ] Add domain: `benniewilliams.ai` (or your domain)
- [ ] Enable **Generate SSL Certificate**: ✅ Yes
- [ ] Click **Add Domain**

**DNS Configuration Required:**
```
Type: A
Name: @
Value: YOUR_COOLIFY_SERVER_IP

Type: A
Name: www
Value: YOUR_COOLIFY_SERVER_IP
```

### 6. Environment Variables (Optional - Skip for Now)
Currently not needed, but if you need them later:
- [ ] Click **Environment Variables** tab
- [ ] Add any required variables
- [ ] Example: `NODE_ENV=production`

### 7. Deploy
- [ ] Review all settings
- [ ] Click **Deploy** button
- [ ] Watch build logs for any errors

## Post-Deployment Verification

### Check Build Status
- [ ] Build logs show successful completion
- [ ] No errors in build process
- [ ] Image built successfully

### Check Container Status
- [ ] Container is running (green status)
- [ ] Health check is passing (✅ green)
- [ ] No restart loops

### Test the Application

#### Test Health Endpoint
```bash
curl https://yourdomain.com/health
# Expected: "healthy"
```
- [ ] Health endpoint returns "healthy"

#### Test Website Access
- [ ] Home page loads: `https://yourdomain.com`
- [ ] No white screen
- [ ] No console errors (F12 → Console)
- [ ] Images load correctly

#### Test Navigation
- [ ] Click navigation links (About, Services, etc.)
- [ ] Smooth scroll works
- [ ] All sections load correctly

#### Test on Mobile
- [ ] Site is responsive on mobile
- [ ] Navigation menu works
- [ ] Images scale correctly

## Troubleshooting

If anything fails, check:

### Build Failures
- [ ] Check build logs in Coolify
- [ ] Verify Dockerfile is in repository root
- [ ] Ensure all files are committed to Git
- [ ] Check if Coolify has enough resources (RAM/CPU)

### White Screen Issues
- [ ] Check browser console (F12) for JavaScript errors
- [ ] Verify health check endpoint works: `curl https://yourdomain.com/health`
- [ ] Check container logs in Coolify
- [ ] Verify nginx is running inside container

### Health Check Failures
- [ ] Wait 30-60 seconds after deployment (container needs time to start)
- [ ] Check health check path is `/health` (not `/healthz`)
- [ ] Verify port is set to `80`
- [ ] Check container logs for nginx errors

### SSL/Domain Issues
- [ ] Verify DNS is propagated: `dig yourdomain.com`
- [ ] Wait up to 24 hours for DNS propagation
- [ ] Check Coolify SSL certificate generation logs
- [ ] Ensure port 443 is open on Coolify server

## Enable Auto-Deploy (Optional)

After successful deployment:
- [ ] Go to **Settings** tab
- [ ] Enable **Auto Deploy on Git Push**
- [ ] Select branch to monitor: `main`
- [ ] Click **Save**

Now every `git push` will automatically rebuild and redeploy!

## Performance Optimization (Optional)

### Add CDN (Cloudflare)
- [ ] Sign up for Cloudflare (free tier)
- [ ] Add your domain to Cloudflare
- [ ] Point Cloudflare DNS to Coolify server
- [ ] Enable caching and optimization features
- [ ] Set SSL to **Full (strict)**

### Monitor Resources
- [ ] Check **Metrics** tab in Coolify
- [ ] Verify RAM usage is low (~20-50MB)
- [ ] Check CPU usage is minimal
- [ ] Set up alerts if needed

## Success Criteria

✅ All these should be true:
- [ ] Build completed successfully
- [ ] Container is running and healthy
- [ ] Website loads without white screen
- [ ] Navigation works smoothly
- [ ] All sections display correctly
- [ ] Images load properly
- [ ] HTTPS works (if domain configured)
- [ ] Health check passes
- [ ] No errors in browser console
- [ ] Mobile responsive design works

## Next Steps

Once deployed successfully:
- [ ] Test all features thoroughly
- [ ] Share the URL with stakeholders
- [ ] Set up monitoring/alerts in Coolify
- [ ] Configure backups if needed
- [ ] Enable auto-deploy for future updates
- [ ] Add analytics (Google Analytics, Plausible, etc.)
- [ ] Submit to search engines (Google Search Console)

---

## Quick Reference

**Coolify Dashboard Locations:**
- Build Logs: Application → Deployments → [Latest] → Build Logs
- Runtime Logs: Application → Logs
- Health Status: Application → Overview (green/red indicator)
- Metrics: Application → Metrics
- Settings: Application → Settings

**Important URLs to Test:**
- Home: `https://yourdomain.com`
- Health: `https://yourdomain.com/health`
- About Section: `https://yourdomain.com/#about`
- Services: `https://yourdomain.com/#services`
- Blog: `https://yourdomain.com/#blog`

**Support Resources:**
- Coolify Docs: https://coolify.io/docs
- Project Deployment Guide: See `COOLIFY.md`
- Docker Guide: See `DEPLOYMENT.md`
