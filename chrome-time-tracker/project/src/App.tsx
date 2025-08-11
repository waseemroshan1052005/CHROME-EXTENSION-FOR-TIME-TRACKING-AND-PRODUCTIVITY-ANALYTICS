import React, { useState } from 'react';
import { BarChart3, Settings, Calendar, Chrome, Monitor } from 'lucide-react';
import { StatsCards } from './components/StatsCards';
import { ProductivityChart } from './components/ProductivityChart';
import { WebsiteList } from './components/WebsiteList';
import { WeeklyReport } from './components/WeeklyReport';
import { CategorySettings } from './components/CategorySettings';
import { ExtensionPopup } from './components/ExtensionPopup';
import { mockTimeEntries, mockDailyStats } from './data/mockData';

type TabType = 'dashboard' | 'settings' | 'popup' | 'reports';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');

  // Calculate totals for today
  const todayStats = mockDailyStats[0];
  const weeklyData = {
    totalProductiveTime: mockDailyStats.reduce((sum, day) => sum + day.productiveTime, 0),
    totalUnproductiveTime: mockDailyStats.reduce((sum, day) => sum + day.unproductiveTime, 0),
    totalTime: mockDailyStats.reduce((sum, day) => sum + day.totalTime, 0),
  };

  const recentEntries = mockTimeEntries.slice(0, 5);

  const tabs = [
    { id: 'dashboard' as TabType, label: 'Dashboard', icon: BarChart3 },
    { id: 'reports' as TabType, label: 'Reports', icon: Calendar },
    { id: 'settings' as TabType, label: 'Settings', icon: Settings },
    { id: 'popup' as TabType, label: 'Extension Popup', icon: Chrome },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-8">
            <StatsCards
              totalTime={todayStats.totalTime}
              productiveTime={todayStats.productiveTime}
              unproductiveTime={todayStats.unproductiveTime}
              neutralTime={todayStats.neutralTime}
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ProductivityChart />
              <WebsiteList entries={recentEntries} title="Recent Activity" />
            </div>
          </div>
        );
        
      case 'reports':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <WeeklyReport weekData={weeklyData} />
            <ProductivityChart />
          </div>
        );
        
      case 'settings':
        return <CategorySettings />;
        
      case 'popup':
        return (
          <div className="flex flex-col items-center space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Extension Popup Preview</h2>
              <p className="text-gray-600">This shows how the Chrome extension popup would appear</p>
            </div>
            <ExtensionPopup />
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">TimeTracker Pro</h1>
                <p className="text-sm text-gray-500">Chrome Extension Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Tracking Active</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              TimeTracker Pro Chrome Extension - Productivity Analytics Dashboard
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Made with React & TypeScript</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;