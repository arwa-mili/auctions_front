'use client';

import { formatDistanceToNow } from 'date-fns';
import type { Bid } from '@/types';

interface BidListProps {
  bids: Bid[];
}

export default function BidList({ bids }: BidListProps) {
  if (bids.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No bids yet. Be the first to bid!
      </div>
    );
  }

  // Sort bids by amount descending
  const sortedBids = [...bids].sort((a, b) => b.amount - a.amount);

  return (
    <div className="space-y-3">
      {sortedBids.map((bid, index) => (
        <div
          key={bid.id}
          className={`p-4 rounded-lg border-2 ${
            index === 0
              ? 'bg-green-50 border-green-200'
              : 'bg-white border-gray-200'
          }`}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg font-bold text-gray-900">
                ${bid.amount.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600">
                Bidder: {bid.bidderId.slice(0, 8)}...
              </p>
            </div>
            <div className="text-right">
              {index === 0 && (
                <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-200 rounded-full mb-2 block">
                  Highest Bid
                </span>
              )}
              <p className="text-xs text-gray-500">
                {formatDistanceToNow(new Date(bid.createdAt), { addSuffix: true })}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
