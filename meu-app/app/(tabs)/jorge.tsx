import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  fetch('http://localhost:3000/kingdoms')
  .then(res => {
    if (!res.ok) throw new Error('Erro na resposta: ' + res.status);
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error('Erro ao buscar dados:', err)); 
    return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/background-jorge.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Reinos</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          Terra Da Grama: É o lugar onde mora ,Finn, Jake, BMO, Shelby e Neptr e Fern
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
       
        <ThemedText>
      Reino Doce: Moram lá: Princesa Jujuba(governante), Povo Doce, Mordomo Menta, Lady Iris, Starchy
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      
        <ThemedText>
         rggegre
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 600,
    width: 500,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

