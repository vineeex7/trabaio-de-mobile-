import { Image } from 'expo-image';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

interface Episode {
  id: number;
  slug: string;
  name: string;
  description: string;
  image: string;
  thumbnail: string;
  release: string;
  episode: string;
}

export default function HomeScreen() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);


  const fetchEpisodes = async () => {
    try {
      const response = await fetch('http://adventure-time-api-lg.vercel.app/api/episodes');
      const data = await response.json();
      
      if (data.message === "item retrieved successfully" && data.items) {
        setEpisodes(data.items);
      }
    } catch (error) {
      console.error('Erro ao buscar episódios:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEpisodes();
  }, []);


  const renderEpisodeItem = ({ item }: { item: Episode }) => (
    <ThemedView style={styles.episodeContainer}>
      <ThemedView style={styles.episodeHeader}>
        <ThemedText style={styles.episodeNumber}>{item.episode}</ThemedText>
        <ThemedText style={styles.episodeDate}>{item.release}</ThemedText>
      </ThemedView>
      
      <ThemedText style={styles.episodeTitle}>{item.name}</ThemedText>
      
      <Image
        source={{ uri: item.thumbnail }}
        style={styles.episodeImage}
        contentFit="cover"
      />
      
      <ThemedText style={styles.episodeDescription}>
        {item.description}
      </ThemedText>
    </ThemedView>
  );

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
        <ThemedText type="title">PRINCIPAIS EPISÓDIOS DE HORA DA AVENTURA:</ThemedText>
      </ThemedView>
    

      <ThemedView style={styles.apiSection}>
        <ThemedText style={styles.sectionTitle}></ThemedText>
        
        {loading ? (
          <ThemedText>Carregando episódios...</ThemedText>
        ) : (
          <FlatList
            data={episodes}
            renderItem={renderEpisodeItem}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
          />
        )}
      </ThemedView>

    
      <ThemedView style={styles.featuredSection}>
        <ThemedText style={styles.sectionTitle}>Episódios Destacados</ThemedText>
        
        <ThemedView style={styles.stepContainer}>
          <ThemedText style={styles.featuredTitle}>
            1. O Lamento do Rei Gelado
          </ThemedText>
          <ThemedText style={styles.featuredInfo}>
            Temporada: 5 | Ep: 14
          </ThemedText>
          <ThemedText style={styles.featuredDescription}>
            Revela trágico passado do Rei Gelado e sua relação com a Princesa Jujuba, mostrando um lado mais humano e melancólico do personagem.
          </ThemedText>
        </ThemedView>
        
        <ThemedView style={styles.stepContainer}>
          <ThemedText style={styles.featuredTitle}>
            2. A Despedida de Marceline
          </ThemedText>
          <ThemedText style={styles.featuredInfo}>
            Temporada: 6 | Ep: 25
          </ThemedText>
          <ThemedText style={styles.featuredDescription}>
            Marceline lida com seu relacionamento com o Rei dos Vampiros, seu pai, e canta a música "I'm Just Your Problem", tocando temas de abandono e reconciliação.
          </ThemedText>
        </ThemedView>
        
        <ThemedView style={styles.stepContainer}>
          <ThemedText style={styles.featuredTitle}>
            3. Último Caderno de Desenhos de Finn
          </ThemedText>
          <ThemedText style={styles.featuredInfo}>
            Temporada: 7 | Ep: 7
          </ThemedText>
          <ThemedText style={styles.featuredDescription}>
            Finn encontra seu caderno de desenhos antigos, refletindo sobre seu crescimento e as mudanças que ele passou ao longo da série.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText style={styles.featuredTitle}>
            4. O Templo de Marte
          </ThemedText>
          <ThemedText style={styles.featuredInfo}>
            Temporada: 6 | Ep: 2
          </ThemedText>
          <ThemedText style={styles.featuredDescription}>
            Finn e Jake viajam para Marte em uma missão para salvar a Princesa Jujuba, encontrando criaturas alienígenas e desafios cósmicos.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText style={styles.featuredTitle}>
            5. A Mão do Rei
          </ThemedText>
          <ThemedText style={styles.featuredInfo}>
            Temporada: 5 | Ep: 7
          </ThemedText>
          <ThemedText style={styles.featuredDescription}>
            Finn recebe uma misteriosa luva biônica que começa a afetar seu comportamento, levantando questões sobre identidade e controle.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText style={styles.featuredTitle}>
            6. A Torre
          </ThemedText>
          <ThemedText style={styles.featuredInfo}>
            Temporada: 5 | Ep: 25
          </ThemedText>
          <ThemedText style={styles.featuredDescription}>
            Finn constrói uma torre gigante para alcançar o céu em uma jornada emocional que explora seu relacionamento com seu pai biológico.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText style={styles.featuredTitle}>
            7. O Vazio
          </ThemedText>
          <ThemedText style={styles.featuredInfo}>
            Temporada: 5 | Ep: 49
          </ThemedText>
          <ThemedText style={styles.featuredDescription}>
            Um episódio experimental que explora a mente de Finn através de animações surreais e sequências de sonho psicodélicas.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText style={styles.featuredTitle}>
            8. A Rainha dos Vampiros
          </ThemedText>
          <ThemedText style={styles.featuredInfo}>
            Temporada: 3 | Ep: 10
          </ThemedText>
          <ThemedText style={styles.featuredDescription}>
            Marceline enfrenta seu passado vampírico quando uma antiga ameaça retorna, revelando mais sobre sua história e transformação.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText style={styles.featuredTitle}>
            9. O Jogo de Pôquer de Finn
          </ThemedText>
          <ThemedText style={styles.featuredInfo}>
            Temporada: 4 | Ep: 18
          </ThemedText>
          <ThemedText style={styles.featuredDescription}>
            Finn participa de um jogo de pôquer de alto risco contra um misterioso adversário, aprendendo lições valiosas sobre apostas e consequências.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText style={styles.featuredTitle}>
            10. A Cidadela
          </ThemedText>
          <ThemedText style={styles.featuredInfo}>
            Temporada: 5 | Ep: 3
          </ThemedText>
          <ThemedText style={styles.featuredDescription}>
            Finn e Jake descobrem uma prisão interdimensional cheia de versões alternativas do Rei Gelado, expandindo a mitologia do multiverso.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText style={styles.featuredTitle}>
            11. O Incidente
          </ThemedText>
          <ThemedText style={styles.featuredInfo}>
            Temporada: 4 | Ep: 25
          </ThemedText>
          <ThemedText style={styles.featuredDescription}>
            Um evento catastrófico ameaça Ooo, forçando todos os personagens a se unirem em uma batalha épica pela sobrevivência.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText style={styles.featuredTitle}>
            12. A Lenda
          </ThemedText>
          <ThemedText style={styles.featuredInfo}>
            Temporada: 8 | Ep: 14
          </ThemedText>
          <ThemedText style={styles.featuredDescription}>
            Um episódio que reconta a origem de Finn através de diferentes perspectivas mitológicas, explorando como as lendas são criadas.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText style={styles.featuredTitle}>
            13. O Grande Jogo
          </ThemedText>
          <ThemedText style={styles.featuredInfo}>
            Temporada: 7 | Ep: 25
          </ThemedText>
          <ThemedText style={styles.featuredDescription}>
            Finn e Jake participam de um torneio interdimensional que testa suas habilidades de forma inesperada e filosófica.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText style={styles.featuredTitle}>
            14. A Última Festa
          </ThemedText>
          <ThemedText style={styles.featuredInfo}>
            Temporada: 9 | Ep: 8
          </ThemedText>
          <ThemedText style={styles.featuredDescription}>
            Os habitantes de Ooo se reúnem para uma festa memorável enquanto enfrentam mudanças iminentes em seu mundo.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText style={styles.featuredTitle}>
            15. O Fim
          </ThemedText>
          <ThemedText style={styles.featuredInfo}>
            Temporada: 10 | Ep: 13
          </ThemedText>
          <ThemedText style={styles.featuredDescription}>
            O épico final da série onde Finn e Jake enfrentam seu maior desafio em uma batalha que decidirá o destino de Ooo.
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
  },
  reactLogo: {
    height: 250,
    width: 500,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  apiSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  episodeContainer: {
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(161, 206, 220, 0.2)',
  },
  episodeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  episodeNumber: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  episodeDate: {
    fontSize: 12,
    opacity: 0.7,
  },
  episodeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  episodeImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  episodeDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  
  featuredSection: {
    marginBottom: 24,
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  featuredInfo: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#666',
  },
  featuredDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
});