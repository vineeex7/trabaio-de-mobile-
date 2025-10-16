import { Image } from 'expo-image';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function CharactersScreen() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/characters') // Alterado para buscar personagens
      .then(res => {
        if (!res.ok) throw new Error('Erro na resposta: ' + res.status);
        return res.json();
      })
      .then(data => {
        setCharacters(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao buscar dados:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <ScrollView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Personagens</ThemedText>
      </ThemedView>

      {loading && <ThemedText>Carregando...</ThemedText>}
      {error && <ThemedText>Erro: {error}</ThemedText>}
      {!loading && characters.length === 0 && (
        <ThemedText>Nenhum personagem encontrado.</ThemedText>
      )}

      {characters.map((character, index) => (
        <ThemedView key={index} style={styles.stepContainer}>
          <Image
            source={{ uri: character.image }}
            style={styles.characterImage}
            contentFit="cover"
            transition={1000}
          />
          <ThemedText style={styles.characterTitle}>{character.name}</ThemedText>
          <ThemedText style={styles.characterDescription}>{character.description}</ThemedText>
        </ThemedView>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  stepContainer: {
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  characterImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  characterTitle: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  characterDescription: {
    marginTop: 5,
    fontSize: 14,
  },
});
  
