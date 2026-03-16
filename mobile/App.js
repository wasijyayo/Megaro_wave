import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import HomeScreen       from './src/screens/HomeScreen'
import WifiScreen       from './src/screens/WifiScreen'
import WifiSelectScreen from './src/screens/WifiSelectScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home"       component={HomeScreen} />
          <Stack.Screen name="Wifi"       component={WifiScreen} />
          <Stack.Screen name="WifiSelect" component={WifiSelectScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
