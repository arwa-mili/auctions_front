import axios from 'axios';
import type { Auction, Bid, User, CreateAuctionDto, CreateBidDto, CreateUserDto } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auctions API
export const auctionsApi = {
  getAll: async (): Promise<Auction[]> => {
    const { data } = await api.get<Auction[]>('/api/auctions');
    return data;
  },

  getById: async (id: string): Promise<Auction> => {
    const { data } = await api.get<Auction>(`/api/auctions/${id}`);
    return data;
  },

  create: async (dto: CreateAuctionDto): Promise<Auction> => {
    const { data } = await api.post<Auction>('/api/auctions', dto);
    return data;
  },
};

// Bids API
export const bidsApi = {
  placeBid: async (dto: CreateBidDto): Promise<Bid> => {
    const { data } = await api.post<Bid>('/api/bids', dto);
    return data;
  },

  getByAuction: async (auctionId: string): Promise<Bid[]> => {
    const { data } = await api.get<Bid[]>(`/api/bids/auction/${auctionId}`);
    return data;
  },
};

// Users API
export const usersApi = {
  getAll: async (): Promise<User[]> => {
    const { data } = await api.get<User[]>('/api/users');
    return data;
  },

  getById: async (id: string): Promise<User> => {
    const { data } = await api.get<User>(`/api/users/${id}`);
    return data;
  },

  create: async (dto: CreateUserDto): Promise<User> => {
    const { data } = await api.post<User>('/api/users', dto);
    return data;
  },
};

// Search API
export const searchApi = {
  searchAuctions: async (query: string): Promise<Auction[]> => {
    const { data } = await api.get<Auction[]>('/api/search/auctions', {
      params: { q: query },
    });
    return data;
  },
};

export default api;
