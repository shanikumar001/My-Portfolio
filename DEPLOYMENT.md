# Production Deployment Guide

This repository contains both the **Backend** (Node.js/Express/MongoDB) and **Frontend** (React/Vite/Tailwind CSS) for Balmiki Kumar (Shani Kumar)'s portfolio.

---

## 1. Backend Deployment on Render

### Step 1: Create a New Web Service
1. Sign in to [Render Dashboard](https://dashboard.render.com/).
2. Click **New +** → **Web Service**.
3. Connect your GitHub repository: `https://github.com/shanikumar001/My-Portfolio`.

### Step 2: Configure Service Settings
| Setting | Value |
|---|---|
| **Name** | `portfolio-backend` (or your choice) |
| **Region** | Oregon (US West) or Singapore / Frankfurt |
| **Branch** | `main` |
| **Root Directory** | `backend` |
| **Runtime** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `node server.js` |
| **Plan** | `Free` |

### Step 3: Configure Environment Variables
In the **Environment Variables** section on Render, add:

| Key | Value | Description |
|---|---|---|
| `NODE_ENV` | `production` | Production environment |
| `PORT` | `5002` | Port (Render handles routing automatically) |
| `MONGODB_URI` | `mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>` | Your MongoDB Atlas connection string |
| `JWT_SECRET` | `your_secret_key_32_chars` | Secret key for admin authentication |
| `CLOUDINARY_CLOUD_NAME` | `your_cloud_name` | Cloudinary storage cloud name |
| `CLOUDINARY_API_KEY` | `your_api_key` | Cloudinary API Key |
| `CLOUDINARY_API_SECRET` | `your_api_secret` | Cloudinary API Secret |
| `FRONTEND_URL` | `https://shanikumar.ziuro.com` | Primary production frontend domain |
| `ADMIN_EMAIL` | `shani@gmai.com` | Admin login email |
| `ADMIN_PASSWORD` | `your_secure_password` | Admin login password |

### Step 4: Health Check (Optional)
- Set **Health Check Path** to `/api/health` or `/health`.
- Click **Create Web Service**.
- Once deployed, copy your Render URL: `https://portfolio-backend-xxxx.onrender.com`.
- Verify by visiting: `https://portfolio-backend-xxxx.onrender.com/api/health` in your browser.

---

## 2. Frontend Deployment on Vercel

### Step 1: Import Project to Vercel
1. Sign in to [Vercel Dashboard](https://vercel.com/).
2. Click **Add New...** → **Project**.
3. Select your repository: `My-Portfolio`.

### Step 2: Build & Project Settings
| Setting | Value |
|---|---|
| **Framework Preset** | `Vite` |
| **Root Directory** | Click **Edit** and select `frontend` |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

*(Note: If you leave Root Directory as `./`, the included root `vercel.json` will automatically build `frontend` and point to `frontend/dist`.)*

### Step 3: Configure Environment Variables
Under **Environment Variables**, add:

| Key | Value |
|---|---|
| `VITE_API_URL` | `https://your-portfolio-backend.onrender.com/api` |

*(Note: Replace with your actual Render backend URL from Section 1)*

### Step 4: Deploy & Add Custom Domain
1. Click **Deploy**.
2. Once the deployment finishes, go to **Settings** → **Domains**.
3. Enter your custom domain: `shanikumar.ziuro.com`.
4. In your DNS provider (e.g. Cloudflare, Namecheap, GoDaddy):
   - Add a **CNAME** record:
     - **Name / Host:** `shanikumar`
     - **Target / Points to:** `cname.vercel-dns.com`
5. Vercel will automatically issue free SSL and point your domain.

---

## 3. Verification Checklist

- [ ] Backend health check responds: `https://your-backend.onrender.com/api/health` returns `status: ok`.
- [ ] Frontend loads on `https://shanikumar.ziuro.com`.
- [ ] Contact form submits successfully and messages appear in MongoDB Atlas.
- [ ] Admin login modal works at `/admin` (press `Ctrl + Shift + A` or visit the admin portal).
