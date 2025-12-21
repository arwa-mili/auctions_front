'use client';

import { useEffect, useState } from 'react';
import { auctionsApi } from '@/lib/api';
import type { Auction } from '@/types';
import AuctionCard from '@/components/AuctionCard';
import { AuctionStatus } from '@/types';

export default function Home() {
  const [auctions, setAuctions] = useState<Auction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'active' | 'closed'>('all');

  useEffect(() => {
    loadAuctions();
  }, []);

  const loadAuctions = async () => {
    try {
      setLoading(true);
      const data = await auctionsApi.getAll();
      setAuctions(data);
      setError(null);
    } catch (err) {
      setError('Failed to load auctions. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredAuctions = auctions.filter((auction) => {
    if (filter === 'active') return auction.status === AuctionStatus.Active;
    if (filter === 'closed') return auction.status === AuctionStatus.Closed;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Live Auctions
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Discover amazing items up for auction
        </p>

        {/* Filter Tabs */}
        <div className="flex space-x-4 border-b border-gray-200">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 font-medium text-sm ${
              filter === 'all'
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            All ({auctions.length})
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`px-4 py-2 font-medium text-sm ${
              filter === 'active'
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Active ({auctions.filter(a => a.status === AuctionStatus.Active).length})
          </button>
          <button
            onClick={() => setFilter('closed')}
            className={`px-4 py-2 font-medium text-sm ${
              filter === 'closed'
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Closed ({auctions.filter(a => a.status === AuctionStatus.Closed).length})
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          <p className="mt-4 text-gray-600">Loading auctions...</p>
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
          {error}
        </div>
      ) : filteredAuctions.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No auctions found.</p>
          <p className="text-gray-400 mt-2">Be the first to create one!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAuctions.map((auction) => (
            <AuctionCard key={auction.id} auction={auction} />
          ))}
        </div>
      )}
    </div>
  );
}
