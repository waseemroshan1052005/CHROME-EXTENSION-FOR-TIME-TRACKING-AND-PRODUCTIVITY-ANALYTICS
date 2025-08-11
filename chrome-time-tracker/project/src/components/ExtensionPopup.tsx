import React, { useState } from 'react';
import { Clock, Settings, BarChart3, Pause, Play } from 'lucide-react';
import { formatTime } from '../utils/timeUtils';

export const ExtensionPopup: React.FC = () => {
  const [isTracking, setIsTracking] = useState(true);
  const [todayTime] = useState({
    total: 14400, // 4 hours
    productive: 9600, // 2.67 hours
    unproductive: 4800 // 1.33 hours
  });

  const currentSite = {
    domain: 'github.com',
    category: 'productive' as const,
    timeOnSite: 1800 // 30 minutes
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'productive':
        return 'text-green-600';
      case 'unproductive':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="w-80 bg-white border rounded-lg shadow-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5" />
            <h2 className="font-semibold">TimeTracker Pro</h2>
          </div>
          <button
            onClick={() => setIsTracking(!isTracking)}
            className={`p-2 rounded-full transition-colors ${
              isTracking ? 'bg-white/20 hover:bg-white/30' : 'bg-red-500 hover:bg-red-600'
            }`}
          >
            {isTracking ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Current Site */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Current Site</span>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            currentSite.category === 'productive' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {currentSite.category}
          </span>
        </div>
        <p className="font-medium text-gray-800">{currentSite.domain}</p>
        <p className="text-sm text-gray-500">
          Time on site: {formatTime(currentSite.timeOnSite)}
        </p>
      </div>

      {/* Today's Stats */}
      <div className="p-4 border-b">
        <h3 className="text-sm font-medium text-gray-600 mb-3">Today's Activity</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Total Time</span>
            <span className="font-medium">{formatTime(todayTime.total)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-green-600">Productive</span>
            <span className="font-medium text-green-600">{formatTime(todayTime.productive)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-red-600">Unproductive</span>
            <span className="font-medium text-red-600">{formatTime(todayTime.unproductive)}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-3">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-l-full"
              style={{ width: `${(todayTime.productive / todayTime.total) * 100}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1 text-center">
            {Math.round((todayTime.productive / todayTime.total) * 100)}% productive today
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center space-x-2 p-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
            <BarChart3 className="w-4 h-4" />
            <span className="text-sm font-medium">Dashboard</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-3 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
            <Settings className="w-4 h-4" />
            <span className="text-sm font-medium">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};