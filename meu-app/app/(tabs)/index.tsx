import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

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
        {/* Formulário HTML estilizado */}
        <form action="https://formspree.io/f/mwprdgla" method="POST" style={styles.form as any}>
          <div style={styles.field as any}>
            <label htmlFor="nome" style={styles.label as any}>Nome:</label>
            <input type="text" id="nome" name="usuario_nome" required style={styles.input as any} />
          </div>

          <div style={styles.field as any}>
            <label htmlFor="email" style={styles.label as any}>Email:</label>
            <input type="email" id="email" name="usuario_email" required style={styles.input as any} />
          </div>

          <div style={styles.field as any}>
            <label htmlFor="ocorrido" style={styles.label as any}>Relato:</label>
            <textarea id="ocorrido" name="situacao_usuario" required style={styles.textarea as any} />
          </div>

          <button type="submit" style={styles.button as any}>
            Enviar Requisição de Suporte
          </button>
        </form>
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
    gap: 12,
    marginBottom: 16,
  },
  reactLogo: {
    height: 250,
    width: 500,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 400,
    width: '100%',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    fontFamily: "arial"
  },
  input: {
    padding: 10,
    fontSize: 14,
    borderRadius: 6,
    border: '1px solid #CCC',
    backgroundColor: '#FFF',
  },
  textarea: {
    padding: 10,
    fontSize: 14,
    borderRadius: 6,
    border: '1px solid #CCC',
    backgroundColor: '#FFF',
    minHeight: 100,
    resize: 'vertical',
  },
  button: {
    backgroundColor: '#007AFF',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    border: 'none',
    cursor: 'pointer',
    alignSelf: 'flex-start',
  },



});
