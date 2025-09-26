import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#00FF00',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarStyle: {
          backgroundColor: '#000000',
          borderTopColor: '#00FF00', 
          borderTopWidth: 2,
        },
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 12,
        },
        
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Página de Login',
          tabBarIcon: ({ color }) => <Ionicons name="people" size={24} color="gray" />
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Personagens',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
      name='jorge'
      options={{
        title: 'Reinos',
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="chess-king" size={24} color="gray" />
      }}
      />
      <Tabs.Screen
      name='vini'
      options={{
        title: 'Curiosidades',
        tabBarIcon: ({ color }) => <FontAwesome6 name="ellipsis" size={24} color="gray" />
      }}
      />
      <Tabs.Screen
      name='emanuel'
      options={{
        title: 'Episódios',
        tabBarIcon: ({ color }) => <Entypo name="video" size={24} color="gray" />
      }}
      />
    </Tabs>
  );
}
