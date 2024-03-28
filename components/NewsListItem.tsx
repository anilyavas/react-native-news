import { News } from '@/constants/Types';
import { StyleSheet, Image, Pressable } from 'react-native';
import { Text } from './Themed';
import { Link } from 'expo-router';

const NewsListItem = ({ news }: { news: News }) => {
  return (
    <Link href={`/(tabs)/${news.id}`} asChild>
      <Pressable style={styles.container}>
        <Text style={styles.title}>{news.title}</Text>
        <Image source={{ uri: news.urlToImage }} style={styles.image} />
      </Pressable>
    </Link>
  );
};

export default NewsListItem;
const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    marginVertical: 10,
  },
});
