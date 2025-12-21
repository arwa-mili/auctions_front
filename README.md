# Auctions Frontend

A modern, full-featured Next.js frontend for the Auctions Microservices platform.

## Features

- 🎯 **Browse Auctions** - View all auctions with filtering (All, Active, Closed)
- 🔍 **Search** - Search auctions by title
- ➕ **Create Auctions** - Create new auctions with details
- 💰 **Bid on Auctions** - Place bids on active auctions
- 👤 **User Management** - Login/Sign up functionality
- 📱 **Responsive Design** - Beautiful UI that works on all devices
- ⚡ **Real-time Updates** - See latest bids and auction status

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Backend services running (see main README)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

3. Update `.env.local` with your backend API URL:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3001](http://localhost:3001) in your browser

## Project Structure

```
frontend/
├── app/                    # Next.js app directory
│   ├── auctions/          # Auction pages
│   │   ├── [id]/         # Auction detail page
│   │   └── create/       # Create auction page
│   ├── search/           # Search page
│   ├── login/            # Login/Sign up page
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── Navbar.tsx        # Navigation bar
│   ├── AuctionCard.tsx  # Auction card component
│   └── BidList.tsx      # Bid list component
├── lib/                  # Utilities
│   └── api.ts           # API client
├── store/                # State management
│   └── userStore.ts     # User state (Zustand)
└── types/                # TypeScript types
    └── index.ts         # Type definitions
```

## API Integration

The frontend consumes the following backend endpoints:

- `GET /api/auctions` - List all auctions
- `GET /api/auctions/:id` - Get auction details
- `POST /api/auctions` - Create new auction
- `POST /api/bids` - Place a bid
- `GET /api/bids/auction/:auctionId` - Get bids for an auction
- `GET /api/users` - List users
- `GET /api/users/:id` - Get user details
- `POST /api/users` - Create user
- `GET /api/search/auctions?q=query` - Search auctions

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **Axios** - HTTP client
- **date-fns** - Date formatting

## Build for Production

```bash
npm run build
npm start
```

## License

MIT
