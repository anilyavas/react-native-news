import { StyleSheet, FlatList } from 'react-native';
import { View } from '@/components/Themed';
import dummyNews from '@/assets/data/dummyNews.json';
import NewsListItem from '@/components/NewsListItem';

const news = dummyNews.articles;

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={news}
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
