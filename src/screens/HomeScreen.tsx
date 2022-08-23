import * as React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BoyScreen from './BoyScreen'
import GirlScreen from './GirlScreen'
import * as Notifications from 'expo-notifications'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const Tab = createBottomTabNavigator();

const HomeScreen: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Trai Tài" options={{ tabBarIcon: () => <Text>👦</Text> }} component={BoyScreen} />
      <Tab.Screen name="Gái Sắc" options={{ tabBarIcon: () => <Text>👧</Text> }} component={GirlScreen} />
    </Tab.Navigator>
  )
}

export default HomeScreen