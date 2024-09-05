import { Provider } from 'react-redux';
import Store from './Redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Toasts } from '@backpackapp-io/react-native-toast';
import { Routes } from './Navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider store={Store}>
          <Routes />
          <Toasts />
        </Provider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
