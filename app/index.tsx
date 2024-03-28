import { StyleSheet, FlatList } from 'react-native';
import { View } from '@/components/Themed';
import dummyNews from '@/assets/data/dummyNews.json';
import NewsListItem from '@/components/NewsListItem';
import { Stack } from 'expo-router';

const news = dummyNews.articles;

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'News' }} />
      <FlatList
        data={news}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <NewsListItem news={item} />}
      />
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
