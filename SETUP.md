# Quick Setup Guide

## Step 1: Install Dependencies

```bash
cd frontend
npm install
```

## Step 2: Configure Environment

Create a `.env.local` file in the `frontend` directory:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000
```

**Note:** Make sure your backend services are running on port 3000 (or update the URL accordingly).

## Step 3: Run the Development Server

```bash
npm run dev
```

The frontend will be available at [http://localhost:3001](http://localhost:3001)

## Step 4: Test the Application

1. **Login/Sign Up**: Click "Login / Sign Up" in the navbar
2. **Browse Auctions**: View all auctions on the home page
3. **Create Auction**: Click "Create Auction" to add a new auction
4. **Place Bids**: Click on any active auction to view details and place bids
5. **Search**: Use the search page to find auctions by title

## Troubleshooting

### Backend Connection Issues

If you see errors about API calls failing:
- Ensure your backend services are running
- Check that `NEXT_PUBLIC_API_URL` matches your backend URL
- Verify CORS is enabled on your backend (if needed)

### Port Already in Use

If port 3001 is already in use, Next.js will automatically use the next available port. Check the terminal output for the actual URL.

## Features Overview

✅ **Home Page** - Browse all auctions with filtering
✅ **Auction Details** - View auction details and place bids
✅ **Create Auction** - Form to create new auctions
✅ **Search** - Search auctions by title
✅ **User Authentication** - Login/Sign up functionality
✅ **Responsive Design** - Works on mobile, tablet, and desktop

Enjoy your auctions platform! 🎯
