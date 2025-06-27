import { Box } from '@/components/ui/box';
import { useNavigation } from 'expo-router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Text } from '@/components/ui/text';
import { Input, InputField } from '@/components/ui/input';
import { Button, ButtonText } from '@/components/ui/button';
import { useListContext } from '@/components/ui/todolist-context-provider';





const ListSchema = Yup.object().shape({
    title: Yup.string().required('Task is required'),
    description: Yup.string().required('Description is required'),

});
const AddList=() => {
    const navigation = useNavigation();
    const { addList } = useListContext();
 return(
    <Box className="flex-1 p-4 dark:bg-neutral-950">
        <Formik
            initialValues={{
                title: '',
                description: '',

            }}
            validationSchema={ListSchema}
            onSubmit={(values, {resetForm}) =>{
                addList({
                    id: Date.now().toString(),
                    title: values.title,
                    description: values.description,
                    completed: false
                });

                resetForm();
                navigation.goBack();
            }
        }
        >
            {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
                <Box>
                    <Box className='mb-4'>
                        <Text size='lg' className='mb-2 text-stone-900 dark:text-white'>Task</Text>
                        <Input variant='outline' size='md' className='bg-white dark:bg-zinc-900 mt-2'>
                            <InputField 
                                onChangeText={handleChange('title')}
                                onBlur={handleBlur('title')}
                                value={values.title}
                                placeholder='Enter the task'
                            />
                        </Input>
                        {touched.title && errors.title && (
                            <Text size='lg' className='text-red-500 mt-1'>{errors.title}</Text>
                        )}

                    </Box>
                    <Box className='mb-4'>
                        <Text size='lg' className='mb-2 text-stone-900 dark:text-white'>Description</Text>
                        <Input variant='outline' size='md' className='bg-white dark:bg-zinc-900 mt-2'>
                            <InputField 
                                onChangeText={handleChange('description')}
                                onBlur={handleBlur('description')}
                                value={values.description}
                                placeholder='Enter the description'
                            />
                        </Input>
                        {touched.title && errors.title && (
                            <Text size='lg' className='text-red-500 mt-1'>{errors.description}</Text>
                        )}

                    </Box>

                    <Button action='positive' onPress={() => handleSubmit()} className='mt-4'>
                        <ButtonText>Submit</ButtonText>
                    </Button>
                    
                </Box>
            )}
            
        </Formik>
    </Box>
)
}


export default AddList;