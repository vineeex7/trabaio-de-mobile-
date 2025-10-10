import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Background } from '@react-navigation/elements';

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
        <ThemedText type="title">CURIOSIDADES</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        
        <ThemedText><strong>FINN</strong> 
  
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
       
        <ThemedText>Finn Mertens, o icônico herói de Ooo, carrega uma história muito mais complexa do que sua aparência de menino aventureiro sugere. Seu famoso chapéu de urso não é apenas um acessório, mas um troféu de sua primeira grande caçada infantil. A série acompanha seu crescimento real, começando aos 12 e terminando aos 17 anos, com suas crises adolescentes e questionamentos sobre o heroísmo sendo centrais para o enredo.
           Uma de suas habilidades mais únicas é a Mão Fantasma, uma projeção de energia psíquica que surge de seu coto e representa sua força de vontade e emoções transbordantes.
A premissa de ser o <strong>ultimo humano</strong> se desfaz com revelações familiares dolorosas: seu pai, Martin, é um vigarista egoísta que o abandona, e sua mãe, Minerva, é uma humana superprotetora que tenta privá-lo de suas aventuras. Espiritualmente, Finn é a mais recente reencarnação do Campeão de Marte, um espírito heroico eterno. Em uma vida passada, ele foi Shoko, uma jovem cujo esqueleto radioativo o próprio Finn descobre, criando uma conexão macabra com seu próprio passado. 
Curiosamente, sua alma é considerada <strong>pura</strong> e perfeitamente alinhada com o Bem, o que paradoxalmente pode torná-lo rígido em seu código moral. Sua jornada com o braço perdido e recuperado em diferentes circunstâncias simboliza suas constantes transformações físicas e emocionais, mostrando que ser herói é uma lição contínua de lidar com perdas, traumas e a complexidade de crescer.
       
        </ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}> 
      
        <ThemedText><strong>NO GERAL </strong>
          À primeira vista, <strong>Hora de Aventura</strong>Hora de Aventura parece um desenho alegre, mas é um tesouro de mistérios e tragédias escondido sob uma fachada colorida. A maior revelação é que a Terra de Ooo é, na verdade, nosso planeta após a <strong>Guerra dos Cogumelos</strong>, uma guerra nuclear apocalíptica.

Por trás das aventuras, há histórias profundamente trágicas. O <strong>Rei Gelado</strong> era um homem comum, Simon Petrikov, que perdeu a sanidade ao usar uma coroa mágica para honrar um pedido de sua amada Betty. A complexa relação entre <strong>Marceline e a Princesa Jujuba</strong> é marcada por um desentendimento centenário que começou de forma banal.

A série também aborda a morte de forma sutil e melancólica, com pistas discretas confirmando o falecimento de personagens queridos. Por fim, a teoria mais perturbadora sugere que os <strong>Homenzinhos de Goma</strong> podem ter sido seres humanos mutados, colocando a Princesa Jujuba sob uma luz potencialmente aterrorizante. É essa mistura única de nonsense, coração e horror existencial que define a série.
         
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}> 
      
      <ThemedText><strong>reino de fogo </strong>
    Moldado pela paixão da Chama Rainha, este reino vulcânico abriga criaturas de fogo e paisagens em constante ebulição. Cada labareda conta uma história de sua governante temperamental.

      </ThemedText>
    </ThemedView>
    <ThemedView style={styles.stepContainer}> 
      
      <ThemedText><strong>Reino Gelado:</strong>
    
     Criado pela magia da Princesa de Gente, seu eterno inverno refletia inicialmente seu coração solitário. Com o tempo, o reino foi derretendo conforme ela se abria para amizades.
      </ThemedText>
    </ThemedView>
    <ThemedView style={styles.stepContainer}> 
      
      <ThemedText><strong>Montanha de Fogo:</strong> 
     Mais que uma caverna, é o museu pessoal de Marceline. Suas paredes guardam relíquias do mundo humano e lembranças de seus mil anos de vida.

      </ThemedText>
    </ThemedView>

    <ThemedView style={styles.stepContainer}> 
      
      <ThemedText> <strong>Reino do Algodão Doce:</strong> 
       Estruturas flutuantes que demonstram a genialidade científica de Jujuba, mas também sua dificuldade em criar conexões terra-a-terra.

      </ThemedText>
    </ThemedView>
    <ThemedView style={styles.stepContainer}> 
      
      <ThemedText> <strong>Reino do Algodão Doce:</strong>
      Estruturas flutuantes que demonstram a genialidade científica de Jujuba, mas também sua dificuldade em criar conexões terra-a-terra.

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

