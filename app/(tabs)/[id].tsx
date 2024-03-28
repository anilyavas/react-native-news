import { StyleSheet, FlatList } from 'react-native';
import { View, Text } from '@/components/Themed';
import dummyNews from '@/assets/data/dummyNews.json';
import { Stack, useLocalSearchParams } from 'expo-router';

const news = dummyNews.articles;

export default function HomeScreen() {
  const { id } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
