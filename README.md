# CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: B HASINI

*INTERN ID*: CT06DH1201

*DOMAIN*: Full Stack Web Development

*DURATION*: 6 WEEEKS

*MENTOR*:NEELA SANTOSH


# A comprehensive Chrome extension prototype for tracking website usage time and providing detailed productivity analytics. This application helps users understand their browsing habits and improve their digital productivity. 

## 🚀 Features

### Core Functionality
- **Real-time Website Tracking**: Monitor time spent on different websites
- **Automatic Categorization**: Classify websites as productive, unproductive, or neutral
- **Productivity Analytics**: Detailed insights into browsing habits
- **Weekly Reports**: Comprehensive productivity summaries with actionable insights
- **Custom Categories**: Personalize website classifications
- **Visual Dashboard**: Interactive charts and data visualizations

### User Interface
- **Extension Popup**: Compact interface for quick stats and controls
- **Full Dashboard**: Comprehensive analytics and reporting interface
- **Responsive Design**: Works seamlessly across different screen sizes
- **Modern UI**: Clean, professional design with smooth animations

### Analytics & Insights
- Daily and weekly productivity scores
- Time breakdown by category (productive vs unproductive)
- Top visited websites with time spent
- Productivity trends and patterns
- Personalized recommendations for improvement

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Development**: Hot Module Replacement (HMR)
- **Code Quality**: ESLint, TypeScript strict mode

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)
- **VS Code** (recommended IDE)
- **Modern web browser** (Chrome, Firefox, Safari, Edge)

## 🚀 Quick Start

### 1. Clone or Download the Project

```bash
# Create project directory
mkdir chrome-time-tracker
cd chrome-time-tracker

# Copy all project files to this directory
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. Open in Browser

Navigate to `http://localhost:5173/` in your web browser.

## 📁 Project Structure

```
chrome-time-tracker/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── ProductivityChart.tsx
│   │   ├── WebsiteList.tsx
│   │   ├── StatsCards.tsx
│   │   ├── ExtensionPopup.tsx
│   │   ├── WeeklyReport.tsx
│   │   └── CategorySettings.tsx
│   ├── data/              # Mock data and configurations
│   │   └── mockData.ts
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/             # Utility functions
│   │   └── timeUtils.ts
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── package.json           # Project dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
```

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready application |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 🖥️ Application Features

### Dashboard Tab
- **Overview Cards**: Total time, productive time, productivity score, focus sessions
- **Productivity Chart**: Visual representation of daily productivity trends
- **Recent Activity**: List of recently visited websites with time spent

### Reports Tab
- **Weekly Report**: Comprehensive productivity analysis
- **Productivity Score**: Calculated based on productive vs total time
- **Key Insights**: Personalized recommendations and observations
- **Time Breakdown**: Visual charts showing productive vs unproductive time

### Settings Tab
- **Website Categories**: Manage productive/unproductive classifications
- **Add Custom Sites**: Classify new websites according to your workflow
- **Category Management**: Edit or remove custom classifications
- **Bulk Operations**: Efficiently manage multiple website categories

### Extension Popup Tab
- **Current Site Tracking**: Real-time tracking of active website
- **Today's Stats**: Quick overview of daily productivity metrics
- **Quick Actions**: Fast access to dashboard and settings
- **Tracking Controls**: Start/stop time tracking functionality

## 🎨 Design Features

### Visual Elements
- **Color-coded Categories**: Green for productive, red for unproductive, gray for neutral
- **Interactive Charts**: Hover effects and smooth animations
- **Progress Bars**: Visual representation of time distribution
- **Status Indicators**: Real-time tracking status and activity indicators

### User Experience
- **Responsive Layout**: Optimized for different screen sizes
- **Smooth Transitions**: Professional animations and micro-interactions
- **Intuitive Navigation**: Clear tab-based interface
- **Accessibility**: Proper contrast ratios and keyboard navigation

## 🔧 Development

### Adding New Features

1. **Create Component**: Add new React components in `src/components/`
2. **Define Types**: Add TypeScript interfaces in `src/types/index.ts`
3. **Add Utilities**: Helper functions go in `src/utils/`
4. **Update Mock Data**: Modify `src/data/mockData.ts` for testing

### Customization

#### Styling
- Modify `tailwind.config.js` for custom design tokens
- Update `src/index.css` for global styles
- Use Tailwind classes for component-specific styling

#### Data Structure
- Extend interfaces in `src/types/index.ts`
- Update mock data in `src/data/mockData.ts`
- Modify utility functions in `src/utils/timeUtils.ts`

## 🚀 Building for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build
npm run preview
```

The built files will be in the `dist/` directory, ready for deployment.

## 🔮 Future Enhancements

### Chrome Extension Integration
- Manifest V3 configuration
- Background service worker for time tracking
- Content scripts for website detection
- Chrome storage API integration
- Browser action popup implementation

### Backend Integration
- User authentication system
- Data persistence and synchronization
- RESTful API endpoints
- Database schema for time tracking data
- Cloud backup and restore functionality

### Advanced Features
- Goal setting and achievement tracking
- Detailed productivity reports and exports
- Team productivity comparisons
- Integration with productivity tools
- Machine learning for smart categorization

## 🐛 Troubleshooting

### Common Issues

**Port Already in Use**
```bash
npm run dev -- --port 3000
```

**Dependencies Issues**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**TypeScript Errors**
- Check terminal output for specific error messages
- Ensure all required dependencies are installed
- Verify TypeScript configuration in `tsconfig.json`

### Getting Help

1. Check the browser console for JavaScript errors
2. Review the terminal output for build errors
3. Ensure all project files are present and correctly structured
4. Verify Node.js and npm versions meet requirements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you encounter any issues or have questions, please:

1. Check the troubleshooting section above
2. Review existing issues in the project repository
3. Create a new issue with detailed information about the problem

---

**Made with ❤️ using React, TypeScript, and Tailwind CSS**

## OUTPUT:

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/bdc10b52-1769-415b-91fc-b839f6fe02c1" />

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/3992a7c0-0ea7-4ec9-95de-e62782693e30" />

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/efa43c00-400e-45e1-b912-82e1e082122e" />

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/ca969094-3011-41b9-8514-e997298cfb3c" />
