# 🚀 Deployment Guide - Bhairavakona Gangamma Thalli Temple Website

## Part 1: Upload Project to GitHub

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and log in to your account
2. Click the **+** icon in the top-right corner and select **New repository**
3. Fill in the repository details:
   - **Repository name**: `gangamma-temple-website`
   - **Description**: "Official website of Bhairavakona Gangamma Thalli Temple - Temple inauguration ceremonies and donation portal"
   - **Visibility**: Select **Public** (so anyone can view it)
   - **Initialize repository**: Leave unchecked (we'll push existing code)
4. Click **Create repository**

### Step 2: Initialize Git Locally

Open **PowerShell** in your project folder (`c:\work-project\gangamma-temple-website`) and run:

```powershell
# Initialize git
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: Temple website with gallery, events, and donation system"

# Rename branch to main (GitHub default)
git branch -M main

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/gangamma-temple-website.git

# Push to GitHub
git push -u origin main
```

### Step 3: Verify Upload

- Go to your GitHub repository URL: `https://github.com/YOUR_USERNAME/gangamma-temple-website`
- You should see all your project files (html, css, js, images, etc.)

---

## Part 2: Deploy to Vercel

Vercel is the easiest way to deploy static websites. It integrates directly with GitHub for automatic deployments!

### Step 1: Connect GitHub to Vercel

1. Go to [Vercel.com](https://vercel.com)
2. Click **Sign Up** and choose **Continue with GitHub**
3. Authorize Vercel to access your GitHub account
4. After authorization, you'll be in the Vercel dashboard

### Step 2: Import Your Repository

1. In the Vercel dashboard, click **Add New Project**
2. Select **Import Git Repository**
3. Find your repository: **gangamma-temple-website**
4. Click **Import**

### Step 3: Configure Project Settings

Vercel will auto-detect your project as a static site. You can leave default settings:

- **Framework Preset**: Leave as auto-detected
- **Root Directory**: `.` (current directory)
- **Build Command**: Leave empty (for static site)
- **Output Directory**: Leave empty

Click **Deploy**

### Step 4: Wait for Deployment

Vercel will build and deploy your site. Once complete, you'll see:
- ✅ Production URL: `https://gangamma-temple-website.vercel.app` (or custom domain)
- Deployment logs showing successful build

---

## 🎯 Key Features After Deployment

### GitHub Repository Benefits:
✅ Version control & history  
✅ Backup of your code  
✅ Collaboration capabilities  
✅ Open source community access  

### Vercel Deployment Benefits:
✅ Free HTTPS certificate  
✅ Lightning-fast global CDN  
✅ Automatic deployments on every push  
✅ Serverless functions support  
✅ Custom domain support  
✅ Analytics & performance monitoring  

---

## 📋 Quick Reference Commands

### Git Commands
```powershell
# Check status
git status

# View changes
git diff

# Add specific file
git add filename.html

# Commit with message
git commit -m "Description of changes"

# Push to GitHub
git push

# Pull latest changes
git pull

# View commit history
git log
```

### For Future Updates

Whenever you update the website locally:

```powershell
# 1. Stage changes
git add .

# 2. Commit
git commit -m "Description of what changed"

# 3. Push to GitHub
git push

# 4. Vercel automatically redeploys! ✨
```

---

## 🔗 Custom Domain (Optional)

### Adding a Custom Domain to Vercel:

1. Go to your Vercel project dashboard
2. Click **Settings** → **Domains**
3. Click **Add Domain**
4. Enter your domain (e.g., `gangammatemple.org`)
5. Follow DNS configuration steps provided by Vercel
6. Update your domain registrar's DNS with Vercel's nameservers

---

## 🆘 Troubleshooting

### Issue: GitHub Push Fails
**Solution**: 
```powershell
# Add your GitHub credentials
git config --global user.name "Your Name"
git config --global user.email "your.email@gmail.com"

# Generate GitHub token at: https://github.com/settings/tokens
# Use token as password when pushing
```

### Issue: Vercel Deployment Fails
- Check deployment logs in Vercel dashboard
- Ensure all image paths are correct
- Verify CSS and JS files are in correct folders

### Issue: Images Not Loading
**Solution**: 
- Check image paths are relative (`images/filename.jpg` not absolute paths)
- Ensure image files are in the `images/` folder
- Check file names match exactly (case-sensitive)

---

## 📱 Testing Your Live Site

After deployment, test these features:

✅ **Homepage**: Loads properly  
✅ **Gallery**: Horizontal scroll works  
✅ **Events**: Compact cards display  
✅ **Payment Section**: QR code visible, UPI links work  
✅ **Contact Form**: Submits without errors  
✅ **Responsive**: Works on mobile/tablet/desktop  
✅ **Images**: All images load correctly  

---

## 🎓 Production Checklist

- [ ] All images are optimized and load quickly
- [ ] Links to external services work (Google Maps, forms, etc.)
- [ ] Phone numbers are clickable on mobile
- [ ] Email addresses direct to correct inbox
- [ ] UPI payment links work
- [ ] Gallery scrolls smoothly
- [ ] No console errors in browser DevTools
- [ ] Site is mobile-responsive
- [ ] Page load speed is acceptable
- [ ] All animations work smoothly

---

## 📞 Support Links

- **GitHub Help**: https://docs.github.com
- **Vercel Documentation**: https://vercel.com/docs
- **Git Tutorial**: https://git-scm.com/doc

---

**Your website is now globally accessible! 🌍**

Share your live URL: `https://gangamma-temple-website.vercel.app`
