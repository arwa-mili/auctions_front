'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { formatDistanceToNow } from 'date-fns';
import { auctionsApi, bidsApi } from '@/lib/api';
import { useUserStore } from '@/store/userStore';
import type { Auction, Bid } from '@/types';
import { AuctionStatus } from '@/types';
import BidList from '@/components/BidList';

export default function AuctionDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { currentUser } = useUserStore();
  const [auction, setAuction] = useState<Auction | null>(null);
  const [bids, setBids] = useState<Bid[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [bidAmount, setBidAmount] = useState('');
  const [bidLoading, setBidLoading] = useState(false);
  const [bidError, setBidError] = useState<string | null>(null);

  const auctionId = params.id as string;

  useEffect(() => {
    if (auctionId) {
      loadAuction();
      loadBids();
    }
  }, [auctionId]);

  const loadAuction = async () => {
    try {
      setLoading(true);
      const data = await auctionsApi.getById(auctionId);
      setAuction(data);
      setError(null);
    } catch (err) {
      setError('Failed to load auction. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const loadBids = async () => {
    try {
      const data = await bidsApi.getByAuction(auctionId);
      setBids(data);
    } catch (err) {
      console.error('Failed to load bids:', err);
    }
  };

  const handlePlaceBid = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentUser) {
      router.push('/login');
      return;
    }

    if (!auction) return;

    const amount = parseFloat(bidAmount);
    if (isNaN(amount) || amount <= 0) {
      setBidError('Please enter a valid bid amount');
      return;
    }

    const highestBid = bids.length > 0 ? Math.max(...bids.map(b => b.amount)) : auction.startPrice;
    if (amount <= highestBid) {
      setBidError(`Bid must be higher than $${highestBid.toFixed(2)}`);
      return;
    }

    if (auction.status !== AuctionStatus.Active) {
      setBidError('This auction is not active');
      return;
    }

    try {
      setBidLoading(true);
      setBidError(null);
      await bidsApi.placeBid({
        auctionId: auction.id,
        bidderId: currentUser.id,
        amount,
      });
      setBidAmount('');
      await loadBids();
      await loadAuction();
    } catch (err: any) {
      setBidError(err.response?.data?.message || 'Failed to place bid. Please try again.');
    } finally {
      setBidLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          <p className="mt-4 text-gray-600">Loading auction...</p>
        </div>
      </div>
    );
  }

  if (error || !auction) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
          {error || 'Auction not found'}
        </div>
      </div>
    );
  }

  const highestBid = bids.length > 0 ? Math.max(...bids.map(b => b.amount)) : auction.startPrice;
  const isActive = auction.status === AuctionStatus.Active;
  const endsAt = new Date(auction.endsAt);
  const timeRemaining = formatDistanceToNow(endsAt, { addSuffix: true });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {auction.title}
              </h1>
              {auction.status === AuctionStatus.Active && (
                <span className="px-3 py-1 text-sm font-semibold text-green-800 bg-green-100 rounded-full">
                  Active
                </span>
              )}
              {auction.status === AuctionStatus.Closed && (
                <span className="px-3 py-1 text-sm font-semibold text-gray-800 bg-gray-100 rounded-full">
                  Closed
                </span>
              )}
            </div>
          </div>

          {auction.description && (
            <p className="text-gray-700 mb-6 text-lg">
              {auction.description}
            </p>
          )}

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Current Highest Bid</p>
              <p className="text-4xl font-bold text-primary-600">
                ${highestBid.toFixed(2)}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Starting Price: ${auction.startPrice.toFixed(2)}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">
                {isActive ? 'Ends' : 'Ended'}
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                {timeRemaining}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                {endsAt.toLocaleString()}
              </p>
            </div>
          </div>

          {isActive && currentUser && (
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Place a Bid
              </h2>
              <form onSubmit={handlePlaceBid}>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bid Amount
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min={highestBid + 0.01}
                      value={bidAmount}
                      onChange={(e) => setBidAmount(e.target.value)}
                      placeholder={`Minimum: $${(highestBid + 0.01).toFixed(2)}`}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  <div className="flex items-end">
                    <button
                      type="submit"
                      disabled={bidLoading}
                      className="px-6 py-2 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {bidLoading ? 'Placing...' : 'Place Bid'}
                    </button>
                  </div>
                </div>
                {bidError && (
                  <p className="mt-2 text-sm text-red-600">{bidError}</p>
                )}
              </form>
            </div>
          )}

          {!currentUser && isActive && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
              <p className="text-yellow-800">
                Please{' '}
                <a href="/login" className="underline font-semibold">
                  login
                </a>{' '}
                to place a bid
              </p>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Bids ({bids.length})
            </h2>
            <BidList bids={bids} />
          </div>
        </div>
      </div>
    </div>
  );
}
