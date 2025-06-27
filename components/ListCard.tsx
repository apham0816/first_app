import React from 'react';
import { useRouter } from 'expo-router';
import { Link, LinkText } from './ui/link';
import { List, useListContext } from './ui/todolist-context-provider';
import { Card } from './ui/card';
import { Heading } from './ui/heading';
import { FavouriteIcon, Icon } from './ui/icon';
import { Pressable } from './ui/pressable';
import { Text } from './ui/text'



const ListCard: React.FC<List> = ({ title, description, completed, id, isFavorite }: List) => {
  const { toggleFavorite } = useListContext();
  const router = useRouter();

  const handleLinkPress = () => {
    router.push({
      pathname: '/(tabs)/(home)/[title]',
      params: { title: id },
    })
  }

  return (
    <>
      <Card variant="filled" className="mt-4">
          <Heading>{title}</Heading>
          <Pressable
            onPress={() => toggleFavorite(id)}
          >
            <Icon 
              as={FavouriteIcon}
              size='xl'
              className={`${isFavorite ? 'text-red-500' : 'text-gray-500'} absolute right-4 top-4`}
            />
          </Pressable>
          <Text className='text-md my-1 dark:text-white'>{description}</Text>
          <Link
            onPress={handleLinkPress}
            className='flex-row items-center justify-center'
          >
            <LinkText className='text-blue-500 text-lg no-underline'>
              See Details
            </LinkText>
          </Link>
      </Card>
    </>
  );
  
} 

export default ListCard;