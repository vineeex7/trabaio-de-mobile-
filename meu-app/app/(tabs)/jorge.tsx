import { Image } from 'expo-image';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [kingdoms, setKingdoms] = useState([]);  
  const [error, setError] = useState(null);      
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    fetch('http://localhost:3000/kingdoms')
      .then(res => {
        if (!res.ok) throw new Error('Erro na resposta: ' + res.status);
        return res.json();
      })
      .then(data => {
        setKingdoms(data);  
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
        <ThemedText style={styles.text} type="title">Reinos</ThemedText>
      </ThemedView>


      {loading && <ThemedText>Carregando...</ThemedText>}

      
      {error && <ThemedText>Erro: {error}</ThemedText>}

      
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
    fontFamily: "Adventure Time",
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
  kingdomDescription: {
    fontFamily: 'Quicksand'
  },
  text: {
    fontFamily: 'Adventure'
  }

});
