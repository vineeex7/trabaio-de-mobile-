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
          source={require('../../assets/images/meu-mundo.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">EPISODIOS</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        
        <ThemedText>  PRINCIPAIS EPISODIOS DE HORA DA AVENTURA:
          
     
        </ThemedText>
        


      <ThemedText>1. O Lamento do Rei Gelado

Temporada: 5 | Ep: 14 ㅤrevela trágico passado do Rei Gelado e sua relação com a Princesa Jujuba, mostrando um lado mais humano e melancólico do personagem.s</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
       
        <ThemedText>
       2. A Despedida de Marceline 
 Temporada: 6 | Ep: 25 Marceline lida com seu relacionamento com o Rei dos Vampiros, seu pai, e canta a música "I'm Just Your Problem", tocando temas de abandono e reconciliação.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      
        <ThemedText>
         3. Último Caderno de Desenhos de Finn

Temporada: 7 | Ep: 7
Finn encontra seu caderno de desenhos antigos, refletindo sobre seu crescimento e as mudanças que ele passou ao longo da série.
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
    height: 250,
    width: 500,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

