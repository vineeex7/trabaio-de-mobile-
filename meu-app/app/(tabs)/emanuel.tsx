import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
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
        <ThemedText type="title">EPISODIOS</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        
        <ThemedText>  Principais episodios de hora da aventura.
          <ThemedText type="defaultSemiBold">

          </ThemedText>
     
        </ThemedText>1. O Lamento do Rei Gelado

Temporada: 5 | Episódio: 14
Revela o trágico passado do Rei Gelado e sua relação com a Princesa Jujuba, mostrando um lado mais humano e melancólico do personagem.s
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
       
        <ThemedText>
       
        </ThemedText>2. A Despedida de Marceline

Temporada: 6 | Episódio: 25
Marceline lida com seu relacionamento com o Rei dos Vampiros, seu pai, e canta a música "I'm Just Your Problem", tocando temas de abandono e reconciliação.
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      
        <ThemedText>
         
        </ThemedText> 3. O Último Caderno de Desenhos de Finn

Temporada: 7 | Episódio: 7
Finn encontra seu caderno de desenhos antigos, refletindo sobre seu crescimento e as mudanças que ele passou ao longo da série.
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

