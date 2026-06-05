# EV Charging Station Finder

A React Native Expo app for finding electric vehicle charging stations with an intuitive interface featuring map view, station details, and navigation capabilities.

## Features

- 📍 **Interactive Map View**: View charging stations on an interactive map with custom markers
- 📱 **List View**: Toggle between map and list views for better browsing experience
- 🔍 **Search Functionality**: Search for charging stations by name or location
- ⚡ **Station Details**: Comprehensive information about each charging station including:
  - Availability status (available/total chargers)
  - Charging type and power (DC Fast, Level 2, etc.)
  - Pricing information
  - Operating hours
  - Connector types (Tesla Supercharger, CCS, CHAdeMO)
  - Amenities (WiFi, restrooms, coffee shop, etc.)
  - User ratings
- 🧭 **Navigation**: Direct navigation to charging stations
- 📱 **Modern UI**: Clean, intuitive interface with proper spacing and visual hierarchy
- 📍 **Location Services**: Uses device location to show nearby charging stations

## Project Structure

```
EVChargingStationFinder/
├── src/
│   ├── screens/
│   │   ├── HomeScreen.js          # Main screen with map/list view
│   │   └── StationDetailsScreen.js # Detailed station information
│   ├── components/                # Reusable UI components
│   ├── services/                 # API services and data management
│   ├── utils/                    # Utility functions
│   └── constants/                # App constants and configuration
├── assets/                       # Images, fonts, and other assets
├── App.js                        # Main app component
└── package.json                  # Dependencies and scripts
```

## Dependencies

- **Expo SDK**: Latest version for React Native development
- **React Navigation**: For screen navigation
- **React Native Maps**: Interactive map functionality
- **Expo Location**: Device location services
- **Expo Vector Icons**: Beautiful icon library
- **React Native Safe Area Context**: Handle device safe areas

## Installation & Setup

1. **Clone and navigate to the project:**
   ```bash
   cd EVChargingStationFinder
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Run on device/simulator:**
   ```bash
   # For iOS
   npm run ios
   
   # For Android
   npm run android
   
   # For web
   npm run web
   ```

## Usage

### Running the App

1. Make sure you have Expo CLI installed globally:
   ```bash
   npm install -g @expo/cli
   ```

2. Start the development server:
   ```bash
   expo start
   ```

3. Use the Expo Go app on your mobile device to scan the QR code, or run on a simulator

### Key Screens

#### Home Screen (`HomeScreen.js`)
- **Map View**: Interactive map showing charging station locations with custom markers
- **List View**: Scrollable list of nearby charging stations with detailed information
- **Search Bar**: Find specific charging stations
- **Toggle Controls**: Switch between map and list views
- **Station Cards**: Each station shows name, address, distance, charging type, availability, pricing, and rating

#### Station Details Screen (`StationDetailsScreen.js`)
- **Comprehensive Information**: Full details about the selected charging station
- **Availability**: Real-time charger availability
- **Charging Information**: Power output, connector types, pricing
- **Amenities**: Available facilities like WiFi, restrooms, food
- **Action Buttons**: Navigate to station or call for support

## Customization

### Adding New Stations
Update the `chargingStations` state in `HomeScreen.js` with new station data:

```javascript
{
  id: 'unique_id',
  name: 'Station Name',
  address: 'Full Address',
  distance: '1.5 km',
  type: 'DC Fast', // or 'Level 2'
  power: '150 kW',
  available: 3,
  total: 6,
  price: '$0.28/kWh',
  rating: 4.5,
  coordinates: {
    latitude: 37.7749,
    longitude: -122.4194,
  },
}
```

### Styling
All styles are defined using React Native's StyleSheet API. Main colors:
- Primary Blue: `#2196F3`
- Success Green: `#4CAF50`
- Warning Orange: `#FF9800`
- Gold: `#FFD700`
- Background: `#f5f5f5`

### Icons
Using Expo Vector Icons (Ionicons). Common icons:
- `flash`: Charging/electricity
- `map`: Map view
- `list`: List view
- `search`: Search functionality
- `star`: Ratings
- `navigate`: Navigation

## Development Notes

- The app uses mock data for demonstration. In production, integrate with real charging station APIs
- Location permissions are requested on app startup
- Map view uses React Native Maps which requires additional setup for production builds
- The UI is optimized for both iOS and Android platforms

## Future Enhancements

- [ ] Real-time charging station data integration
- [ ] User authentication and profiles
- [ ] Favorite stations
- [ ] Route planning with charging stops
- [ ] Payment integration
- [ ] Push notifications for charging completion
- [ ] Dark mode support
- [ ] Offline map caching

## License

MIT License - Feel free to use this project for your own applications. 