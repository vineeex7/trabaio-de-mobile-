import { Image } from 'expo-image';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [kingdoms, setKingdoms] = useState([]);  // Estado para guardar os dados
  const [error, setError] = useState(null);      // Estado para guardar erros (opcional)
  const [loading, setLoading] = useState(true);  // Estado para loading (opcional)

  useEffect(() => {
    fetch('http://localhost:3000/kingdoms')
      .then(res => {
        if (!res.ok) throw new Error('Erro na resposta: ' + res.status);
        return res.json();
      })
      .then(data => {
        setKingdoms(data);  // Guarda os dados no estado
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao buscar dados:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <ScrollView
      >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Reinos</ThemedText>
      </ThemedView>

      {/* Mostrar loading */}
      {loading && <ThemedText>Carregando...</ThemedText>}

      {/* Mostrar erro */}
      {error && <ThemedText>Erro: {error}</ThemedText>}

      {/* Se quiser mostrar algo padrão quando não tiver dados */}
      {!loading && kingdoms.length === 0 && (
        <ThemedText>Nenhum reino encontrado.</ThemedText>
      )}
      {kingdoms.map((kingdom, index) => (
  <ThemedView key={index} style={styles.stepContainer}>
    <Image
      source={{ uri: kingdom.image }}
      style={styles.kingdomImage}
      contentFit="cover"
      transition={1000}
    />

    <ThemedText style={styles.kingdomTitle}>{kingdom.name}</ThemedText>
    <ThemedText style={styles.kingdomDescription}>{kingdom.description}</ThemedText>
  </ThemedView>
))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 10,
    paddingTop: 0,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    padding: 10,
  },
  kingdomImage: {
    width: '100%',
    height: 150,
    borderRadius: 70,
    marginBottom: 5,
  },
  kingdomTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
    padding: 10
  },
  kingdomDescription:{
fontFamily: 'quicksand'
  }

});
