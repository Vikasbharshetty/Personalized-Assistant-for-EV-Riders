import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import screens
import LoadingScreen from './src/screens/LoadingScreen';
import OnboardingSlider from './src/screens/OnboardingSlider';
import GetStartedScreen from './src/screens/GetStartedScreen';
import LoginScreen from './src/screens/LoginScreen';
import PhoneNumberInputScreen from './src/screens/PhoneNumberInputScreen';
import OTPVerificationScreen from './src/screens/OTPVerificationScreen';
import AddVehicleScreen from './src/screens/AddVehicleScreen';
import SelectBrandScreen from './src/screens/SelectBrandScreen';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import EditProfileScreen from './src/screens/EditProfileScreen';
import PaymentMethodsScreen from './src/screens/PaymentMethodsScreen';
import MyVehiclesScreen from './src/screens/MyVehiclesScreen';

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState('Loading');

  useEffect(() => {
    // Simulate app initialization and determine initial route
    const initializeApp = async () => {
      try {
        // Add a delay to show the loading screen
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        // For now, always start with onboarding
        // You can add logic here to check if user is logged in
        setInitialRoute('Onboarding');
      } catch (error) {
        console.error('App initialization error:', error);
        setInitialRoute('Onboarding');
      } finally {
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaProvider>
        <LoadingScreen />
      </SafeAreaProvider>
    );
  }

  console.log('App with Navigation rendering...');
  
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName={initialRoute}
          screenOptions={{ 
            headerShown: false,
            gestureEnabled: true,
            cardStyleInterpolator: ({ current, layouts }) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [layouts.screen.width, 0],
                      }),
                    },
                  ],
                },
              };
            },
          }}
        >
          <Stack.Screen name="Loading" component={LoadingScreen} />
          <Stack.Screen name="Onboarding" component={OnboardingSlider} />
          <Stack.Screen name="GetStarted" component={GetStartedScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={PhoneNumberInputScreen} />
          <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} />
          <Stack.Screen name="AddVehicle" component={AddVehicleScreen} />
          <Stack.Screen name="SelectBrand" component={SelectBrandScreen} />
          <Stack.Screen name="Main" component={BottomTabNavigator} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />
          <Stack.Screen name="PaymentMethods" component={PaymentMethodsScreen} />
          <Stack.Screen name="MyVehicles" component={MyVehiclesScreen} />
        </Stack.Navigator>
        <StatusBar style="dark" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
