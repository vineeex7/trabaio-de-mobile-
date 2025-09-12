import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
        source={require('@/assets/images/antony.png')}
        style={styles.reactLogo}
      />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">AQUI COMEÇA OS TEXTO</ThemedText>
      </ThemedView>    
        <ThemedText>
         
        </ThemedText>
        <ThemedText>
         
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          
        </ExternalLink>
        <ThemedText>
        
        </ThemedText>
        <Image source={require('@/assets/images/antony.png')} style={{ alignSelf: 'center' }} />
    

      
        <ThemedText>
          
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
          
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
        </ExternalLink>
      
        <ThemedText>
       
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
        </ExternalLink>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 600,
    width: 500,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
