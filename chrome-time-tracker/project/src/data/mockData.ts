import { TimeEntry, WebsiteCategory, DailyStats } from '../types';

export const defaultCategories: WebsiteCategory[] = [
  { domain: 'github.com', category: 'productive', customized: false },
  { domain: 'stackoverflow.com', category: 'productive', customized: false },
  { domain: 'developer.mozilla.org', category: 'productive', customized: false },
  { domain: 'docs.google.com', category: 'productive', customized: false },
  { domain: 'linkedin.com', category: 'productive', customized: false },
  { domain: 'coursera.org', category: 'productive', customized: false },
  { domain: 'udemy.com', category: 'productive', customized: false },
  
  { domain: 'facebook.com', category: 'unproductive', customized: false },
  { domain: 'twitter.com', category: 'unproductive', customized: false },
  { domain: 'instagram.com', category: 'unproductive', customized: false },
  { domain: 'youtube.com', category: 'unproductive', customized: false },
  { domain: 'tiktok.com', category: 'unproductive', customized: false },
  { domain: 'reddit.com', category: 'unproductive', customized: false },
  { domain: 'netflix.com', category: 'unproductive', customized: false },
  
  { domain: 'google.com', category: 'neutral', customized: false },
  { domain: 'wikipedia.org', category: 'neutral', customized: false },
  { domain: 'amazon.com', category: 'neutral', customized: false },
];

export const mockTimeEntries: TimeEntry[] = [
  {
    id: '1',
    website: 'GitHub',
    domain: 'github.com',
    timeSpent: 7200, // 2 hours
    category: 'productive',
    timestamp: new Date(Date.now() - 86400000), // Yesterday
  },
  {
    id: '2',
    website: 'YouTube',
    domain: 'youtube.com',
    timeSpent: 3600, // 1 hour
    category: 'unproductive',
    timestamp: new Date(Date.now() - 86400000),
  },
  {
    id: '3',
    website: 'Stack Overflow',
    domain: 'stackoverflow.com',
    timeSpent: 1800, // 30 minutes
    category: 'productive',
    timestamp: new Date(),
  },
  {
    id: '4',
    website: 'Facebook',
    domain: 'facebook.com',
    timeSpent: 2700, // 45 minutes
    category: 'unproductive',
    timestamp: new Date(),
  },
  {
    id: '5',
    website: 'MDN Web Docs',
    domain: 'developer.mozilla.org',
    timeSpent: 5400, // 1.5 hours
    category: 'productive',
    timestamp: new Date(),
  },
];

export const mockDailyStats: DailyStats[] = [
  {
    date: '2025-01-20',
    totalTime: 28800, // 8 hours
    productiveTime: 18000, // 5 hours
    unproductiveTime: 7200, // 2 hours
    neutralTime: 3600, // 1 hour
    topSites: [
      { domain: 'github.com', timeSpent: 7200, category: 'productive' },
      { domain: 'stackoverflow.com', timeSpent: 5400, category: 'productive' },
      { domain: 'youtube.com', timeSpent: 3600, category: 'unproductive' },
    ],
  },
  {
    date: '2025-01-19',
    totalTime: 25200, // 7 hours
    productiveTime: 14400, // 4 hours
    unproductiveTime: 9000, // 2.5 hours
    neutralTime: 1800, // 0.5 hours
    topSites: [
      { domain: 'github.com', timeSpent: 9000, category: 'productive' },
      { domain: 'facebook.com', timeSpent: 5400, category: 'unproductive' },
      { domain: 'google.com', timeSpent: 1800, category: 'neutral' },
    ],
  },
];

export const mockWeeklyInsights = [
  "Your productivity peaked on Tuesday with 75% productive time",
  "You spent 40% less time on social media compared to last week",
  "Your most productive hours are between 9 AM and 11 AM",
  "Consider setting time limits for entertainment websites"
];