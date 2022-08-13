import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {FC} from 'react';
import {Post} from '../data/types';
import Icon from 'react-native-vector-icons/AntDesign';
  
const screenWidth = Dimensions.get('screen').width;

const PopularPost: FC<Post> = props => {
  return (
    <View style={styles.PopularPost}>
      <Text>{props.text}</Text>
     <Text><Icon name='like2' size={20}/></Text> 
    </View>
  );
};
const styles = StyleSheet.create({
  PopularPost: {
    backgroundColor: 'white',
    width: screenWidth / 3,
    height: screenWidth / 4,
    marginHorizontal: 10,
    shadowColor: '#ccc',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    borderRadius: 6,
  },
});
export default PopularPost;
