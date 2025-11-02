/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import './i18n';
import { useTranslation } from 'react-i18next';
import {
  Home as HomeIcon,
  Bot as RobotIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
} from 'lucide-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// i18n is initialized in ./i18n (imports locales)
const Tab = createBottomTabNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <AppContent />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

function getIconComponent(routeName: string) {
  if (routeName === 'Home') return HomeIcon;
  if (routeName === 'Agents') return RobotIcon;
  if (routeName === 'Store') return ShoppingBagIcon;
  if (routeName === 'Me') return UserIcon;
  return HomeIcon;
}

function TabBarIcon({
  Icon,
  color,
  size,
}: {
  Icon: any;
  color: string;
  size: number;
}) {
  return <Icon color={color} size={size} />;
}

function AppContent() {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      {/* eslint-disable react/no-unstable-nested-components */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon
              Icon={getIconComponent(route.name)}
              color={color}
              size={size}
            />
          ),
          tabBarActiveTintColor: '#f2df0d',
          tabBarInactiveTintColor: '#666',
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ tabBarLabel: t('Home') }}
        />
        <Tab.Screen
          name="Agents"
          component={Agents}
          options={{ tabBarLabel: t('Agents') }}
        />
        <Tab.Screen
          name="Store"
          component={Store}
          options={{ tabBarLabel: t('Store') }}
        />
        <Tab.Screen
          name="Me"
          component={Me}
          options={{ tabBarLabel: t('Me') }}
        />
      </Tab.Navigator>
      {/* eslint-enable react/no-unstable-nested-components */}
    </View>
  );
}

// screens and components moved to separate files
import Home from './screens/Home';
import Agents from './screens/Agents';
import Store from './screens/Store';
import Me from './screens/Me';
import { default as styles } from './styles/commonStyles';

export default App;
