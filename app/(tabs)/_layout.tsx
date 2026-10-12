// import { Tabs } from 'expo-router';
// import { Home, Ticket, User } from 'lucide-react-native'; // Clean, premium icons
// import { Platform } from 'react-native';

// export default function TabLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         // Premium Colors
//         tabBarActiveTintColor: '#EAB308', // Gold
//         tabBarInactiveTintColor: '#737373', // Muted Gray
//         headerShown: false,
        
//         // Structural Polish
//         tabBarStyle: {
//           backgroundColor: '#171717', // Dark background
//           borderTopWidth: 0,
//           elevation: 10, 
//           shadowColor: '#000', 
//           shadowOpacity: 0.1,
//           shadowRadius: 10,
//           height: Platform.OS === 'ios' ? 90 : 70, 
//           paddingBottom: Platform.OS === 'ios' ? 30 : 10,
//           paddingTop: 10,
//         },
        
//         // Typography
//         tabBarLabelStyle: {
//           fontSize: 12,
//           fontWeight: '600',
//           marginTop: 4,
//         }
//       }}>
      
//       {/* 1. Home Tab */}
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => <Home size={24} color={color} strokeWidth={2.5} />,
//         }}
//       />
      
//       {/* 2. Rewards Tab */}
//       <Tabs.Screen
//         name="rewards"
//         options={{
//           title: 'Rewards',
//           tabBarIcon: ({ color }) => <Ticket size={24} color={color} strokeWidth={2.5} />,
//         }}
//       />

//       {/* 3. Profile Tab */}
//       <Tabs.Screen
//         name="profile"
//         options={{
//           title: 'Profile',
//           tabBarIcon: ({ color }) => <User size={24} color={color} strokeWidth={2.5} />,
//         }}
//       />
//     </Tabs>
//   );
// }


import { Tabs } from 'expo-router';
import { Home, Ticket, User } from 'lucide-react-native';
import { Platform, View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // Premium Colors
        tabBarActiveTintColor: '#EAB308', // SAYA Gold
        tabBarInactiveTintColor: '#737373', // Muted Gray
        headerShown: false,
        
        // Structural Polish: The Floating Pill Design
        tabBarStyle: {
          position: 'absolute',
          marginHorizontal: 10,
          bottom: Platform.OS === 'ios' ? 30 : 20,
          left: 20,
          right: 20,
          backgroundColor: '#171717', 
          borderRadius: 40, // Creates the pill shape
          borderWidth: 1,
          borderColor: '#262626', // Subtle structural border
          borderTopWidth: 1, // Overrides React Navigation's default top border
          elevation: 10, 
          shadowColor: '#000', 
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.3,
          shadowRadius: 15,
          height: 70, 
          paddingBottom: Platform.OS === 'ios' ? 20 : 10,
          paddingTop: 12,
        },
        
        // Typography & Layout
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          marginTop: 2,
        },
        
        // Hides the default gray click-highlight background
        tabBarItemStyle: {
          borderRadius: 30,
        }
      }}>
      
      {/* 1. Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <View className={`items-center justify-center ${focused ? 'scale-110' : ''}`}>
              <Home size={22} color={color} strokeWidth={focused ? 3 : 2} />
            </View>
          ),
        }}
      />
      
      {/* 2. Rewards Tab */}
      <Tabs.Screen
        name="rewards"
        options={{
          title: 'Rewards',
          tabBarIcon: ({ color, focused }) => (
            <View className={`items-center justify-center ${focused ? 'scale-110' : ''}`}>
              <Ticket size={22} color={color} strokeWidth={focused ? 3 : 2} />
            </View>
          ),
        }}
      />

      {/* 3. Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <View className={`items-center justify-center ${focused ? 'scale-110' : ''}`}>
              <User size={22} color={color} strokeWidth={focused ? 3 : 2} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}