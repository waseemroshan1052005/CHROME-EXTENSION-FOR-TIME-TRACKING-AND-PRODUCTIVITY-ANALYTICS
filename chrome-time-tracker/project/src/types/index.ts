export interface TimeEntry {
  id: string;
  website: string;
  domain: string;
  timeSpent: number; // in seconds
  category: 'productive' | 'unproductive' | 'neutral';
  timestamp: Date;
  favicon?: string;
}

export interface WebsiteCategory {
  domain: string;
  category: 'productive' | 'unproductive' | 'neutral';
  customized: boolean;
}

export interface DailyStats {
  date: string;
  totalTime: number;
  productiveTime: number;
  unproductiveTime: number;
  neutralTime: number;
  topSites: Array<{
    domain: string;
    timeSpent: number;
    category: string;
  }>;
}

export interface WeeklyReport {
  weekStart: string;
  weekEnd: string;
  totalProductiveTime: number;
  totalUnproductiveTime: number;
  dailyBreakdown: DailyStats[];
  productivityScore: number;
  insights: string[];
}