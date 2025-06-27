import {Stack, useLocalSearchParams, useRouter} from 'expo-router';
import { Button, } from 'react-native';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import {SafeAreaView} from '@/components/ui/safe-area-view';
import { Text } from '@/components/ui/text';


import todolist from '@/assets/data/todolist.json'; // <-- Make sure to import or define todolist
import { VStack } from '@/components/ui/vstack';

export default function DetailPage() {
    
    const { title: id } = useLocalSearchParams<{title: string}>();
    const list = todolist.find((item) => item.id === id);
    const {
        title,
        description,
        completed
    } = list || {};
    

    return (
        <SafeAreaView className='flex-1 bg-white dark:bg-zinc-700'>
        <Box className='p-4 m-4 dark: bg-[#151718] bg-white max-h-screen-safe items-center rounded-md'>
            <Stack.Screen 
                options={{
                 title: title,   
                }}
            />
            <Heading size='xl' >Task Details</Heading>
            <VStack space="md" className='mr-auto mt-4'>
                <Text size='lg'>Description: {description}</Text>
                <Text size='lg'>Completed:  {completed}</Text>
            </VStack>
            <Button title="Go Back" onPress={() => router.back()}  />
        </Box>
        </SafeAreaView>
    )

}

