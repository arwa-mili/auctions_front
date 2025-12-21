'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auctionsApi } from '@/lib/api';
import { useUserStore } from '@/store/userStore';

export default function CreateAuctionPage() {
  const router = useRouter();
  const { currentUser } = useUserStore();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startPrice: '',
    endsAt: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!currentUser) {
      router.push('/login');
    }
  }, [currentUser, router]);

  if (!currentUser) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentUser) {
      router.push('/login');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const endsAtDate = new Date(formData.endsAt);
      if (endsAtDate <= new Date()) {
        setError('End date must be in the future');
        setLoading(false);
        return;
      }

      const auction = await auctionsApi.create({
        title: formData.title,
        description: formData.description || undefined,
        startPrice: parseFloat(formData.startPrice),
        endsAt: endsAtDate.toISOString(),
        ownerId: currentUser.id,
      });

      router.push(`/auctions/${auction.id}`);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to create auction. Please try again.');
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Get minimum date (tomorrow)
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateString = minDate.toISOString().slice(0, 16);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Create New Auction
        </h1>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-red-800">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="e.g., Vintage Rolex Watch"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="Describe your item..."
            />
          </div>

          <div>
            <label htmlFor="startPrice" className="block text-sm font-medium text-gray-700 mb-2">
              Starting Price ($) *
            </label>
            <input
              type="number"
              id="startPrice"
              name="startPrice"
              value={formData.startPrice}
              onChange={handleChange}
              step="0.01"
              min="0"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              placeholder="0.00"
            />
          </div>

          <div>
            <label htmlFor="endsAt" className="block text-sm font-medium text-gray-700 mb-2">
              End Date & Time *
            </label>
            <input
              type="datetime-local"
              id="endsAt"
              name="endsAt"
              value={formData.endsAt}
              onChange={handleChange}
              min={minDateString}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            />
            <p className="mt-1 text-sm text-gray-500">
              The auction will end at this date and time
            </p>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating...' : 'Create Auction'}
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
