import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Inter_400Regular as InterRegular,
  Inter_700Bold as InterBold
} from '@expo-google-fonts/inter';

import Home from '@/screens/home';

export default function App() {
  const [fontsLoaded] = useFonts({ InterRegular, InterBold })

  if (!fontsLoaded) return null;

  return (
    <>
      <Home />
      <StatusBar style="light" translucent />
    </>
  );
}