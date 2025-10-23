import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('../../assets/images/Roberto.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Suporte</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>
        <form action="https://formspree.io/f/mwprdgla" method="post">
     <div>
      <label htmlFor="nome">Nome:</label>
      <input type="text" id="nome" name="usuario_nome" required/>
     </div>
     <div>
       <label htmlFor="email">Email:</label>
       <input type="email" id="email" name="usuario_email" required/>
       </div>
      <div>
       <label htmlFor="email">Relato</label>
       <input type="text" id="ocorrido" name="situação_usuário" required/>
       </div>
     
       <div className="button">
         <button type="submit">Enviar Requisição de Suporte.</button>
      </div>
     </form>
            <ThemedText type="defaultSemiBold">
            </ThemedText>
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

