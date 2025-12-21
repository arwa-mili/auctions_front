export enum AuctionStatus {
  Draft = 'draft',
  Active = 'active',
  Closed = 'closed'
}

export interface Auction {
  id: string;
  title: string;
  description?: string;
  startPrice: number;
  endsAt: string;
  status: AuctionStatus;
  ownerId?: string;
  createdAt: string;
}

export interface Bid {
  id: string;
  auctionId: string;
  bidderId: string;
  amount: number;
  createdAt: string;
}

export interface User {
  id: string;
  username: string;
  displayName?: string;
  createdAt: string;
}

export interface CreateAuctionDto {
  title: string;
  description?: string;
  startPrice: number;
  endsAt: string;
  ownerId?: string;
}

export interface CreateBidDto {
  auctionId: string;
  bidderId: string;
  amount: number;
}

export interface CreateUserDto {
  username: string;
  displayName?: string;
}
