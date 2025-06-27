import { Image, StyleSheet, Platform } from 'react-native';
import React, { useState } from 'react';
import { View, Text, TextInput,FlatList, Button, ScrollView} from 'react-native';
import todolist from '@/assets/data/todolist.json';
import Card from '@/components/Card';
import { useTheme } from '@react-navigation/native';
import { Box } from '@/components/ui/box';
import { Input, InputField } from '@/components/ui/input';
import { Heading } from '@/components/ui/heading';



export default function HomeScreen() {
  const[searchQuery, setSearchQuery] = useState('');
  const[filteredTasks, setFilteredTasks] = useState(todolist);

  const { colors } = useTheme();
  const backgroundColor = colors.background;
  const color = colors.text;

  const handleSearch = (query:string) => {
    setSearchQuery(query);
    const filtered = todolist.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTasks(filtered);
  };
  

 /*  const handlePresss =() => {
    if (task.trim()) {
      setTasks(prev => [...prev, { id: Date.now(), text: task }]);
      setTask(''); // Clear the input field after adding the task
    }
  };  */

  return (
    <Box className='flex-1 p-4'>
      <Heading size='xl' className='self-center'>Welcome to Your To-Do List</Heading>
        <Input variant='outline' size='lg'className='bg-white dark:bg-zinc-900 mt-2'>
          <InputField 
            placeholder="Search tasks..."
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </Input>
        <FlatList 
          data ={filteredTasks}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <Card 
              {...item}
            />
          )}
        /> 
      
     
      {/* <Button title="Submit" onPress={handlePresss} /> */}

      {/* <ThemedText style={styles.subheading}>Your Task:</ThemedText> */}

      {/* <FlatList 
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
          <ThemedView style={styles.taskItem}>
            <ThemedText>{item.text}</ThemedText>
          </ThemedView>
        )}
      /> */}
      
    </Box>
  );
}

const styles = StyleSheet.create({
  
  
  header: {
    
    paddingVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 10,
  },

  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    marginTop: 16,
  },
  
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  
  taskItem: {
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 10,
  },
});

