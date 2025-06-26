import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { IconSymbo } from './ui/IconSymbol';
import { useThemeColor} from './hooks/useThemeColor';

interface CardProps {
  title: string;
  location: string;
  rating: number;
  link: string;
} 
const Card: React.FC<CardProps> = ({ title, location, rating, link }) => {
  const backgroundColor = useThemeColor({},'background');
  const color = useThemeColor({}, 'text');
  const shadowColor = useThemeColor( {}, 'shadowColor');

  return (
    <View style={[
        { backgroundColor, shadowColor, borderColor: shadowColor },
        styles.card
      ]}>
      <Text style={[styles.title, { color }]}>{title}</Text>
      <Text style={[styles.location, { color }]}>{location}</Text>
      <Text style={[styles.rating, { color }]}>Rating: {rating.toFixed(1)}</Text>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Link pressed:')}>
        <Text style={[styles.link, { color }]}>View Details</Text>
      </TouchableOpacity>
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
  location: {
    fontSize: 14,
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
    marginBottom: 8,
  },
  link: {
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  button: {
    paddingVertical: 8,
    alignItems: 'flex-start',
  },
});