import { News } from '@/constants/Types';
import { StyleSheet, Image } from 'react-native';
import { Text, View } from './Themed';

const NewsListItem = ({ news }: { news: News }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{news.title}</Text>
      <Image source={{ uri: news.urlToImage }} style={styles.image} />
    </View>
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
    paddingVertical: 5,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});
