import React from 'react';
import { Calendar, TrendingUp, Award, AlertCircle } from 'lucide-react';
import { formatTime, getProductivityScore } from '../utils/timeUtils';
import { mockWeeklyInsights } from '../data/mockData';

interface WeeklyReportProps {
  weekData: {
    totalProductiveTime: number;
    totalUnproductiveTime: number;
    totalTime: number;
  };
}

export const WeeklyReport: React.FC<WeeklyReportProps> = ({ weekData }) => {
  const productivityScore = getProductivityScore(
    weekData.totalProductiveTime,
    weekData.totalTime
  );

  const getScoreColor = (score: number) => {
    if (score >= 70) return 'text-green-600 bg-green-50';
    if (score >= 50) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 70) return Award;
    if (score >= 50) return TrendingUp;
    return AlertCircle;
  };

  const ScoreIcon = getScoreIcon(productivityScore);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
          <Calendar className="w-5 h-5 mr-2" />
          Weekly Report
        </h3>
        <span className="text-sm text-gray-500">
          Jan 14 - Jan 20, 2025
        </span>
      </div>

      {/* Productivity Score */}
      <div className={`rounded-lg p-4 mb-6 ${getScoreColor(productivityScore)}`}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium opacity-75">Weekly Productivity Score</p>
            <p className="text-3xl font-bold">{productivityScore}%</p>
          </div>
          <ScoreIcon className="w-8 h-8" />
        </div>
      </div>

      {/* Time Breakdown */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-green-600 font-medium">Productive Time</p>
          <p className="text-xl font-bold text-green-800">
            {formatTime(weekData.totalProductiveTime)}
          </p>
        </div>
        <div className="text-center p-4 bg-red-50 rounded-lg">
          <p className="text-sm text-red-600 font-medium">Unproductive Time</p>
          <p className="text-xl font-bold text-red-800">
            {formatTime(weekData.totalUnproductiveTime)}
          </p>
        </div>
      </div>

      {/* Insights */}
      <div>
        <h4 className="font-medium text-gray-800 mb-3">Key Insights</h4>
        <div className="space-y-2">
          {mockWeeklyInsights.map((insight, index) => (
            <div key={index} className="flex items-start space-x-2 text-sm text-gray-600">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
              <p>{insight}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};