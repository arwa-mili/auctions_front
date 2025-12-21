'use client';

import { useState } from 'react';
import { searchApi } from '@/lib/api';
import type { Auction } from '@/types';
import AuctionCard from '@/components/AuctionCard';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Auction[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) {
      return;
    }

    setLoading(true);
    setSearched(true);
    
    try {
      const data = await searchApi.searchAuctions(query);
      setResults(data);
    } catch (err) {
      console.error('Search failed:', err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Search Auctions
      </h1>

      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-lg"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          <p className="mt-4 text-gray-600">Searching...</p>
        </div>
      ) : searched ? (
        results.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No auctions found for "{query}"</p>
            <p className="text-gray-400 mt-2">Try a different search term</p>
          </div>
        ) : (
          <>
            <p className="text-gray-600 mb-4">
              Found {results.length} auction{results.length !== 1 ? 's' : ''} for "{query}"
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((auction) => (
                <AuctionCard key={auction.id} auction={auction} />
              ))}
            </div>
          </>
        )
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Enter a search term to find auctions</p>
        </div>
      )}
    </div>
  );
}
