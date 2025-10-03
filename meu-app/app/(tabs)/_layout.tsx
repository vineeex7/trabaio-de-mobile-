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
import { Image } from 'react-native';
const MyIcon = require('../../assets/images/icons8-gunter-50.png');

const Reino = require('../../assets/images/icons8-treasure-map-50.png');


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#00FFFF',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarStyle: {
          backgroundColor: '#000000',
          borderTopColor: '#00FFFF', 
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
          tabBarIcon: ({ color }) => <Ionicons name="people" size={24} color="lime" />
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Personagens',
          tabBarIcon: ({ color }) =><Image
          source={MyIcon}
          style={{ width: 24, height: 24, tintColor: color }} // o tintColor serve para mudar a cor da imagem se ela for um ícone monocromático
          resizeMode="contain"
        />,
        }}
      />
      <Tabs.Screen
      name='jorge'
      options={{
        title: 'Reinos',
        tabBarIcon: ({ color }) => <Image
        source={Reino}
        style={{ width: 24, height: 24, tintColor: color }} // o tintColor serve para mudar a cor da imagem se ela for um ícone monocromático
        resizeMode="contain" />
      }}
      />
       <Tabs.Screen
      name='emanuel'
      options={{
        title: 'Episódios',
        tabBarIcon: ({ color }) => <Entypo name="video" size={24} color="red" />
      }}
      />
      <Tabs.Screen
      name='vini'
      options={{
        title: 'Curiosidades',
        tabBarIcon: ({ color }) => <FontAwesome6 name="ellipsis" size={24} color="yellow" />
      }}
      />
     
    </Tabs>
  );
}
