'use client';

import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import type { Auction } from '@/types';
import { AuctionStatus } from '@/types';

interface AuctionCardProps {
  auction: Auction;
}

export default function AuctionCard({ auction }: AuctionCardProps) {
  const isActive = auction.status === AuctionStatus.Active;
  const isClosed = auction.status === AuctionStatus.Closed;
  const endsAt = new Date(auction.endsAt);
  const timeRemaining = formatDistanceToNow(endsAt, { addSuffix: true });

  const getStatusBadge = () => {
    if (isActive) {
      return (
        <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
          Active
        </span>
      );
    }
    if (isClosed) {
      return (
        <span className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 rounded-full">
          Closed
        </span>
      );
    }
    return (
      <span className="px-2 py-1 text-xs font-semibold text-yellow-800 bg-yellow-100 rounded-full">
        Draft
      </span>
    );
  };

  return (
    <Link href={`/auctions/${auction.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
              {auction.title}
            </h3>
            {getStatusBadge()}
          </div>
          
          {auction.description && (
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {auction.description}
            </p>
          )}
          
          <div className="flex justify-between items-center">
            <div>
              <p className="text-2xl font-bold text-primary-600">
                ${auction.startPrice.toFixed(2)}
              </p>
              <p className="text-xs text-gray-500">
                Starting Price
              </p>
            </div>
            
            <div className="text-right">
              {isActive && (
                <p className="text-sm font-medium text-gray-700">
                  Ends {timeRemaining}
                </p>
              )}
              {isClosed && (
                <p className="text-sm text-gray-500">
                  Ended {timeRemaining}
                </p>
              )}
              {!isActive && !isClosed && (
                <p className="text-sm text-gray-500">
                  Created {formatDistanceToNow(new Date(auction.createdAt), { addSuffix: true })}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
