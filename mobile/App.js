import { useState, useEffect } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { onAuth } from './src/firebase'
import { UserContext } from './src/contexts/UserContext'

import AuthScreen      from './src/screens/AuthScreen.jsx'
import HomeScreen      from './src/screens/HomeScreen'
import WifiScreen      from './src/screens/WifiScreen'
import WifiSelectScreen from './src/screens/WifiSelectScreen'

const Stack = createStackNavigator()

export default function App() {
  const [user,    setUser]    = useState(undefined)  // undefined=loading, null=未ログイン, object=ログイン済み

  useEffect(() => {
    const unsubscribe = onAuth(firebaseUser => {
      setUser(firebaseUser ?? null)
    })
    return unsubscribe
  }, [])

  // Firebase の認証状態が確定するまでスピナーを表示
  if (user === undefined) {
    return (
      <View style={{ flex: 1, backgroundColor: '#071428', justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="#1a9eba" size="large" />
      </View>
    )
  }

  // 未ログインなら認証画面
  if (user === null) {
    return (
      <SafeAreaProvider>
        <AuthScreen />
      </SafeAreaProvider>
    )
  }

  // ログイン済みならメインナビゲーション
  return (
    <UserContext.Provider value={user}>
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
    </UserContext.Provider>
  )
}
