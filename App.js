import { useCallback, useEffect, useState } from "react";
import { StyleSheet, Pressable, Keyboard } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { 
  useFonts, 
  Montserrat_300Light,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import Title from "./src/components/Title";
import Form from "./src/components/Form";

// Impede que a splash screen desapareça automaticamente
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  // Carrega as fontes
  const [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  });


  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        setAppIsReady(true);
      }
    }
    prepare();
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // Esconde a splash screen quando a view estiver pronta
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    // Enquanto não estiver pronto, não renderiza nada (splash screen fica visível)
    return null;
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container} onLayout={onLayoutRootView}>
      <Title />
      <Form />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEF9F0",
  },
});
