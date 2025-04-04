import React from 'react';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-16 h-16 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
    </div>
  )
}