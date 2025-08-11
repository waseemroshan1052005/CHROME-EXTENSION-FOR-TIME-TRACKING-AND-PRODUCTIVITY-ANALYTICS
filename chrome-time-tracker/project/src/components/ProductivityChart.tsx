import React from 'react';
import { mockDailyStats } from '../data/mockData';
import { formatTime, formatDate } from '../utils/timeUtils';

interface ProductivityChartProps {
  data?: typeof mockDailyStats;
}

export const ProductivityChart: React.FC<ProductivityChartProps> = ({ 
  data = mockDailyStats 
}) => {
  const maxTime = Math.max(...data.map(d => d.totalTime));

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Daily Productivity</h3>
      <div className="space-y-4">
        {data.map((day, index) => (
          <div key={day.date} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">
                {formatDate(new Date(day.date))}
              </span>
              <span className="text-sm text-gray-500">
                {formatTime(day.totalTime)}
              </span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-6 relative overflow-hidden">
              <div
                className="bg-green-500 h-full rounded-l-full transition-all duration-500"
                style={{
                  width: `${(day.productiveTime / maxTime) * 100}%`
                }}
              />
              <div
                className="bg-red-500 h-full absolute top-0 transition-all duration-500"
                style={{
                  left: `${(day.productiveTime / maxTime) * 100}%`,
                  width: `${(day.unproductiveTime / maxTime) * 100}%`
                }}
              />
              <div
                className="bg-gray-400 h-full absolute top-0 rounded-r-full transition-all duration-500"
                style={{
                  left: `${((day.productiveTime + day.unproductiveTime) / maxTime) * 100}%`,
                  width: `${(day.neutralTime / maxTime) * 100}%`
                }}
              />
            </div>
            
            <div className="flex justify-between text-xs text-gray-600">
              <span className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded mr-1"></div>
                Productive: {formatTime(day.productiveTime)}
              </span>
              <span className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded mr-1"></div>
                Unproductive: {formatTime(day.unproductiveTime)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};