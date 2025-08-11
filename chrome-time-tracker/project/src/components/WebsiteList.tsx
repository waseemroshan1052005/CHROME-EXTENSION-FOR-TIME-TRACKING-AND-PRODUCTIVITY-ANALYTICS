import React from 'react';
import { TimeEntry } from '../types';
import { formatTime } from '../utils/timeUtils';
import { Globe, Clock } from 'lucide-react';

interface WebsiteListProps {
  entries: TimeEntry[];
  title: string;
}

export const WebsiteList: React.FC<WebsiteListProps> = ({ entries, title }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'productive':
        return 'text-green-600 bg-green-50';
      case 'unproductive':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getCategoryDot = (category: string) => {
    switch (category) {
      case 'productive':
        return 'bg-green-500';
      case 'unproductive':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <Globe className="w-5 h-5 mr-2" />
        {title}
      </h3>
      
      <div className="space-y-3">
        {entries.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No data available</p>
        ) : (
          entries.map((entry) => (
            <div
              key={entry.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${getCategoryDot(entry.category)}`} />
                <div>
                  <p className="font-medium text-gray-800">{entry.website}</p>
                  <p className="text-sm text-gray-500">{entry.domain}</p>
                </div>
              </div>
              
              <div className="text-right">
                <div className="flex items-center text-gray-600 mb-1">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="font-medium">{formatTime(entry.timeSpent)}</span>
                </div>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(entry.category)}`}>
                  {entry.category}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};