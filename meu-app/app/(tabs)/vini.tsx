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
A premissa de ser o "último humano" se desfaz com revelações familiares dolorosas: seu pai, Martin, é um vigarista egoísta que o abandona, e sua mãe, Minerva, é uma humana superprotetora que tenta privá-lo de suas aventuras. Espiritualmente, Finn é a mais recente reencarnação do Campeão de Marte, um espírito heroico eterno. Em uma vida passada, ele foi Shoko, uma jovem cujo esqueleto radioativo o próprio Finn descobre, criando uma conexão macabra com seu próprio passado. 
Curiosamente, sua alma é considerada "pura" e perfeitamente alinhada com o Bem, o que paradoxalmente pode torná-lo rígido em seu código moral. Sua jornada com o braço perdido e recuperado em diferentes circunstâncias simboliza suas constantes transformações físicas e emocionais, mostrando que ser herói é uma lição contínua de lidar com perdas, traumas e a complexidade de crescer.
       
        </ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}> 
      
        <ThemedText><strong>NO GERAL </strong>
          À primeira vista, "Hora de Aventura" parece um desenho alegre e nonsense sobre um menino e seu cachorro mágico em um mundo pós-apocalíptico cheio de doces e princesas. No entanto, quanto mais fundo se mergulha em Ooo, mais se descobre que a série é um tesouro de mistérios, tragédias e comentários profundos escondidos sob uma fachada colorida.

Das Curiosidades às Polêmicas: O Iceberg de Ooo 

Começando pelas peculiaridades criativas, uma das curiosidades mais charmosas é a voz do Gunter, o pinguim do Rei Gelado. Seus grasnados não são de um pinguim real, mas sim os gritos distortidos da criadora da série, Pendleton Ward. Já a dublagem brasileira é um caso à parte, famosa por sua criatividade e liberdade, incorporando gírias e sotaques únicos que cativaram o público.

Mas a série vai muito além disso. O maior segredo de Ooo é sua própria natureza: a Terra doce e fantástica é, na verdade, nosso planeta Terra após uma guerra nuclear apocalíptica, a "Guerra dos Cogumelos". Isso explica as ruínas de shoppings, estações de metrô e tecnologia antiga que Finn e Jake encontram. Essa revelação transforma toda a percepção da série, mostrando que a aventura acontece sobre os escombros de uma civilização extinta.

Esse tom sombrio se reflete nas origens dos personagens. A tristeza do Rei Gelado tem uma raiz profundamente trágica: ele era um homem comum chamado Simon Petrikov. Sua amada, Betty, estava perdendo a memória e, em seu delírio, repetia "prometa-me que sempre será meu". Simon interpretou como um pedido de compromisso e, num ato desesperado, usou a Coroa da Justiça, que lhe concedeu poderes gelados ao custo de sua sanidade, transformando-o no personagem que conhecemos.

A complexidade emocional se estende ao relacionamento entre Marceline e a Princesa Jujuba. A música "I'm Just Your Problem" revela que elas foram melhores amigas no passado, mas um desentendimento banal (Marceline queria explodir uma bomba velha para se divertir, e Jujuba, como governante responsável, proibiu) criou uma ruptura que durou séculos, mostrando como suas naturezas imaturas e maduras, respectivamente, sempre entraram em conflito.

E então entramos nas águas mais polêmicas e especulativas. A série frequentemente brinca com temas de morte e passagem do tempo de forma sutil e melancólica. Em "Hora de Aventura: Terras Distantes", há uma cena rápida e não comentada de uma lápide com o formato da cabeça de Jake ao fundo, uma confirmação discreta e devastadora de que o cão herói já havia falecido, confirmando um desejo que ele mesmo expressou em um episódio anterior sobre ter uma festa quando morresse.

Finalmente, a teoria mais polêmica e perturbadora envolve a possível origem dos Homenzinhos de Goma. Uma passagem enigmática no diário de Simon Petrikov sugere que eles podem ter sido seres humanos mutados pela radiação durante o pós-apocalipse, possivelmente por um experimento da Princesa Jujuba. Essa ideia sombria coloca a adorável governante do Reino Doce sob uma luz potencialmente aterrorizante, sugerindo que seu reino foi construído sobre uma transformação horrível de sua própria espécie.

É essa mistura única de nonsense, coração e horror existencial que define "Hora de Aventura". A série nunca teve medo de explorar a loucura, a perda e as consequências de um mundo arruinado, provando que mesmo a aventura mais matemática pode esconder as lições mais profundas e amargas.
         
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

