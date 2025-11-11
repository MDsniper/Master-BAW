# White Screen Troubleshooting Guide for Coolify

## Step 1: Check Browser Console (MOST IMPORTANT)

1. Open your Coolify-deployed site
2. Press **F12** to open Developer Tools
3. Click **Console** tab
4. Look for red errors

### Common Errors and Fixes:

**Error: "Failed to load module /assets/index-xxxxx.js"**
- **Cause**: Assets not loading, base path issue
- **Fix**: Check if Coolify is serving files correctly

**Error: "Uncaught SyntaxError: Unexpected token '<'"**
- **Cause**: HTML being served instead of JavaScript
- **Fix**: nginx routing issue, check runtime logs

**Error: Nothing in console, completely blank**
- **Cause**: JavaScript not loading at all
- **Fix**: Check network tab for 404 errors

## Step 2: Verify Coolify Configuration

### In Coolify Dashboard:

**General Tab:**
- [ ] Port: Must be **80** (not 8080, not 3000)
- [ ] Build Pack: **Dockerfile**
- [ ] Dockerfile Location: `./Dockerfile`

**Health Check:**
- [ ] Enabled: **Yes**
- [ ] Path: `/health`
- [ ] Method: GET
- [ ] Interval: 30s

**Environment Variables:**
- Should be empty (none needed for this app)

## Step 3: Check Build Logs

1. Go to **Deployments** tab in Coolify
2. Click on latest deployment
3. Look at **Build Logs**

**Successful build should show:**
```
✓ 2034 modules transformed.
✓ built in 2.60s
```

**If build fails:**
- Check for "pnpm: command not found" - this is OK, Docker handles it
- Check for "COPY failed" errors - files might not be committed
- Check for out of memory errors - increase Coolify resources

## Step 4: Check Runtime Logs

1. Go to **Logs** tab
2. Look for nginx errors

**Healthy logs should show:**
```
[notice] 1#1: start worker process
[notice] nginx started
```

**Problem logs:**
```
[error] open() "/usr/share/nginx/html/index.html" failed
[error] cannot find index.html
```

## Step 5: Test Health Endpoint

```bash
curl https://your-coolify-domain.com/health
```

**Expected**: Returns `healthy`

**If it fails:**
- Container is not running
- nginx is not started
- Port mapping is wrong

## Step 6: Check Assets in Container

In Coolify, go to **Terminal** or **Execute** and run:

```bash
ls -la /usr/share/nginx/html/
```

**You should see:**
- `index.html` (2-3 KB)
- `assets/` directory with JS and CSS files
- `bennie-headshot.png`
- `favicon.svg`
- `robots.txt`

**If index.html is missing:**
- Build failed
- Vite didn't generate dist folder
- Dockerfile COPY command failed

## Common Fixes

### Fix 1: Wrong Port Configuration

**Problem**: Coolify shows the app running but white screen

**Solution**:
1. Go to Settings → General
2. Set Port to **80** (not 8080)
3. Redeploy

### Fix 2: Base Path Issue

**Problem**: Assets return 404 in browser console

**Solution**: Verify `vite.config.ts` has `base: '/'`

Current config should be:
```typescript
export default defineConfig({
  base: '/',
  // ... rest of config
});
```

### Fix 3: nginx Not Serving Files

**Problem**: Health check fails, no response from server

**Solution**:
1. Check Runtime Logs for nginx errors
2. Verify Dockerfile copied files correctly
3. Redeploy from scratch

### Fix 4: Coolify Using Wrong Branch

**Problem**: Old code is deployed

**Solution**:
1. Settings → Source
2. Verify branch is `main`
3. Force redeploy

### Fix 5: Cache Issue

**Problem**: Changes not reflected

**Solution**:
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+F5)
3. Try incognito mode

## Manual Debug in Coolify

### Method 1: Check if nginx is running

In Coolify Terminal:
```bash
ps aux | grep nginx
```

Should show nginx processes running.

### Method 2: Check nginx config

```bash
cat /etc/nginx/conf.d/default.conf
```

Should show our custom config.

### Method 3: Test nginx directly

```bash
wget -O- http://localhost/
```

Should return HTML.

### Method 4: Check file permissions

```bash
ls -la /usr/share/nginx/html/
```

All files should be readable (r-- permissions).

## Nuclear Option: Rebuild from Scratch

If nothing works:

1. **Delete the application in Coolify**
2. **Create new application**
3. **Reconfigure everything from scratch**
4. **Deploy**

## Getting More Help

If still stuck, gather this information:

1. **Browser Console Output** (screenshot or copy errors)
2. **Coolify Build Logs** (last 50 lines)
3. **Coolify Runtime Logs** (last 50 lines)
4. **Coolify URL** (the actual URL you're accessing)
5. **Result of**: `curl https://your-domain.com/health`
6. **Result of**: `curl -I https://your-domain.com/`

With this information, we can debug exactly what's wrong.

## Verification Checklist

Once working, verify:

- [ ] Site loads with no white screen
- [ ] No errors in browser console (F12)
- [ ] All sections visible and working
- [ ] Images load correctly
- [ ] Navigation works
- [ ] Smooth scrolling functions
- [ ] Responsive on mobile
- [ ] HTTPS certificate valid
- [ ] Health endpoint returns "healthy"

## Known Working Configuration

**Coolify Settings:**
```
Build Pack: Dockerfile
Dockerfile Path: ./Dockerfile
Port: 80
Health Check Path: /health
Branch: main
Auto Deploy: Enabled (optional)
```

**Expected Response Times:**
- Build: 20-60 seconds
- Health Check: < 3 seconds
- Page Load: < 2 seconds

**Expected Resource Usage:**
- RAM: 20-50 MB
- CPU: < 5%
- Image Size: ~58 MB
```
