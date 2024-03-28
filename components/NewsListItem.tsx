import { News } from '@/constants/Types';
import { StyleSheet, Image, Pressable } from 'react-native';
import { Text, View } from './Themed';
import { Entypo } from '@expo/vector-icons';

const NewsListItem = ({ news }: { news: News }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: news.urlToImage }}
        style={styles.image}
        resizeMode='cover'
      />
      <Text style={styles.title}>{news.title}</Text>
      <Pressable>
        <Entypo name='chevron-right' color='white' size={20} />
      </Pressable>
    </View>
  );
};

export default NewsListItem;
const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    margin: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 75,
    aspectRatio: 1,
    margin: 5,
  },
});
