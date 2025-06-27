
import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import ListCard from '@/components/ListCard';
import { Box } from '@/components/ui/box';
import { Input, InputField } from '@/components/ui/input';
import { Heading } from '@/components/ui/heading';
import { useListContext } from '@/components/ui/todolist-context-provider';


export default function HomeScreen() {
  const { lists } = useListContext();
  const[searchQuery, setSearchQuery] = useState("");
  const[filteredTasks, setFilteredTasks] = useState(lists);

  
  const handleSearch = (query:string) => {
    setSearchQuery(query);
    const filtered = lists.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ,
      /* item.description.toLowerCase().includes(query.toLowerCase()) */
    );
    setFilteredTasks(filtered);
  };

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredTasks(lists);
    }else {
      const filtered = lists.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
      setFilteredTasks(filtered);
    }
  }, [lists] );


  return (
    <Box className='flex-1 p-4 dark:bg-zinc-700'>
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
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListCard 
              {...item}
            />
          )}
        /> 
      
    </Box>
  );
}

