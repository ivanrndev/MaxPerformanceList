import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

import {Photo} from '../../../types';
import {verticalScale} from '../../../utils';

const ListItemComponent = ({item, navigate}: {item: Photo; navigate: () => void}) => (
  <TouchableOpacity
    style={[styles.container, {shadowColor: item.avg_color}]}
    onPress={navigate}>
    <FastImage
      source={{uri: item.src.medium}}
      style={[styles.image, {borderColor: item.avg_color}]}
    />
    <Text numberOfLines={1} style={styles.title}>
      {item.photographer}
    </Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(170),
    shadowOffset: {
      width: 5,
      height: 15,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  image: {
    width: verticalScale(140),
    height: verticalScale(140),
    borderRadius: 10,
    borderWidth: 0.5,
  },
  title: {margin: 5},
});

export default ListItemComponent;
