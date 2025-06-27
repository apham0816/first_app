import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { IconSymbol } from './ui/IconSymbol';
import { useThemeColor} from '@/hooks/useThemeColor';
import { useRouter } from 'expo-router';
import { Link, LinkText } from './ui/link';


interface CardProps {
  title: string;
  description: string;
  completed: boolean;
  link: string; 
} 
const Card: React.FC<CardProps> = ({ title, description, completed, link }) => {
  const backgroundColor = useThemeColor({},'background');
  const color = useThemeColor({}, 'text');
  const shadowColor = useThemeColor( {}, 'shadowColor');
  const router = useRouter();

  const handleLinkPress = () => {
    router.push({
      pathname: '/(tabs)/(home)/[title]',
      params: { title: link },
    })
  }

  return (
    <View style={[
        { backgroundColor, shadowColor, borderColor: shadowColor },
        styles.card
      ]}>
      <Text style={[styles.title, { color }]}>{title}</Text>
      <Text style={[styles.description, { color }]}>{description}</Text>
      <Text style={[styles.complete, { color }]}>
        {completed ? ' Complete' : 'Incomplete'}
        {/* <TouchableOpacity style={styles.button}>
            <IconSymbol name="checkmark" size={24} color={color} />    
        </TouchableOpacity> 
         */}
      </Text>
      <Link
          className="flex-row items-center-center justify-center"     
          onPress={handleLinkPress}
          >
            <LinkText>See Details</LinkText>
        </Link>
        
    </View>
  );
} 

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    marginBottom: 4,
  },
  complete: {
    fontSize: 14,
    marginBottom: 8,
  },
  
  button: {
    paddingVertical: 8,
    alignItems: 'flex-start',
  },
  link: {
    color: '#007AFF',
    textDecorationLine: 'underline',
    fontSize: 14,
    paddingLeft: 8,
  },
});

export default Card;