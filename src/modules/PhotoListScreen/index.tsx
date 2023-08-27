import React, {useCallback, useEffect} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FlashList, ListRenderItemInfo} from '@shopify/flash-list';

import usePhotosApi from '../../api/usePhotosApi';
import {Photo} from '../../types';
import {height, verticalScale, width} from '../../utils';
import ListFooterComponent from './components/ListFooterComponent';
import ListItemComponent from './components/ListItemComponent';

const PhotoListScreen = () => {
  const {photos, fetchPhotos, loading, refreshFetch} = usePhotosApi();
  const navigation = useNavigation();

  useEffect(() => {
    fetchPhotos();
  }, []);

  const renderItem = ({item}: ListRenderItemInfo<Photo>) => (
    <ListItemComponent
      item={item}
      navigate={() =>
        navigation.navigate('PhotoDetailsScreen', {uri: item.src.large2x})
      }
    />
  );

  return (
    <View style={styles.container}>
      <FlashList
        numColumns={2}
        data={photos}
        ListFooterComponent={<ListFooterComponent loading={loading} />}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        estimatedItemSize={verticalScale(170)}
        estimatedFirstItemOffset={verticalScale(170)}
        onEndReached={fetchPhotos}
        onRefresh={refreshFetch}
        refreshing={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default PhotoListScreen;
