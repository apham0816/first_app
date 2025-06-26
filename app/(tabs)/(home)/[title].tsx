import {useLocalSearchParams, useRouter} from 'expo-router';
import { Button, ScrollView, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
export default function DeatilScnreen() {
    const router = useRouter();
    const { title } = useLocalSearchParams<{title: string}>()

    return (
        <ScrollView style={styles.container}>

            <ThemedText style={styles.subtitle} type="subtitle">Dynamic Page</ThemedText>
            {/* <Button onPress={() => router.back()} title="Go Back" >Back</Button> */}
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
    },
});