import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Entypo } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="feed" options={{ headerShown: false,
      }}/>
      <Tabs.Screen name="camera" options={{ headerShown: false }}/>
      <Tabs.Screen name="account" options={{ headerShown: false }}/>
    </Tabs>
  );
}
