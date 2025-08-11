import React from 'react';
import { Clock, TrendingUp, Target, Zap } from 'lucide-react';
import { formatTime, getProductivityScore } from '../utils/timeUtils';

interface StatsCardsProps {
  totalTime: number;
  productiveTime: number;
  unproductiveTime: number;
  neutralTime: number;
}

export const StatsCards: React.FC<StatsCardsProps> = ({
  totalTime,
  productiveTime,
  unproductiveTime,
  neutralTime
}) => {
  const productivityScore = getProductivityScore(productiveTime, totalTime);

  const stats = [
    {
      title: 'Total Time',
      value: formatTime(totalTime),
      icon: Clock,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Productive Time',
      value: formatTime(productiveTime),
      icon: TrendingUp,
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      title: 'Productivity Score',
      value: `${productivityScore}%`,
      icon: Target,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      title: 'Focus Sessions',
      value: '12',
      icon: Zap,
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={stat.title}
          className={`${stat.bgColor} rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className={`${stat.textColor} text-sm font-medium`}>
                {stat.title}
              </p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {stat.value}
              </p>
            </div>
            <div className={`${stat.color} p-3 rounded-lg`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};