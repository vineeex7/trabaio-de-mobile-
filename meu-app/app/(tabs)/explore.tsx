import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const AdventureTimeApp = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCharacters = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3001/characters');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCharacters(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching characters:', err);
      setError('Failed to load characters. Make sure JSON Server is running on port 3001.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const renderCharacter = ({ item }) => (
    <View style={styles.characterCard}>
      <Image source={{ uri: item.thumbnail }} style={styles.characterImage} />
      <View style={styles.characterInfo}>
        <Text style={styles.characterName}>{item.name}</Text>
        <Text style={styles.characterFullName}>{item.full_name}</Text>
        <Text style={styles.characterSpecie}>{item.specie}</Text>
        <Text style={styles.characterDescription} numberOfLines={3}>
          {item.description}
        </Text>
        <View style={styles.quotesContainer}>
          <Text style={styles.quotesTitle}>Quotes:</Text>
          {item.quotes.slice(0, 2).map((quote, index) => (
            <Text key={index} style={styles.quote} numberOfLines={2}>
              • {quote}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );

  const backgroundImage = require('../../assets/images/t.jpeg.jpg');

  if (loading) {
    return (
      <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.loadingText}>Loading characters...</Text>
        </View>
      </ImageBackground>
    );
  }

  if (error) {
    return (
      <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
        <View style={styles.centerContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <Text style={styles.retryText} onPress={fetchCharacters}>
            Tap to retry
          </Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Adventure Time Characters</Text>
          <Text style={styles.headerSubtitle}>
            {characters.length} characters found
          </Text>
        </View>

        <FlatList
          data={characters}
          renderItem={renderCharacter}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.85)',
    margin: 20,
    borderRadius: 12,
  },
  header: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Adventure',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 4,
  },
  listContent: {
    padding: 16,
  },
  characterCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    marginBottom: 16,
    shadowColor: 'black',
    shadowOffset: { width: 10, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: 'row',
  },
  characterImage: {
    width: 80,
    height: 100,
    borderRadius: 10,
    marginRight: 16,
  },
  characterInfo: {
    flex: 1,
  },
  characterName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Roboto',
  },
  characterFullName: {
    fontSize: 14,
    color: 'gray',
    marginTop: 2,
  },
  characterSpecie: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
    fontStyle: 'italic',
  },
  characterDescription: {
    fontSize: 12,
    color: 'black',
    marginTop: 8,
    lineHeight: 16,
    fontFamily: 'Roboto',
  },
  quotesContainer: {
    marginTop: 8,
  },
  quotesTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  quote: {
    fontSize: 10,
    color: '#666',
    lineHeight: 14,
    marginBottom: 2,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginBottom: 16,
  },
  retryText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default AdventureTimeApp;
