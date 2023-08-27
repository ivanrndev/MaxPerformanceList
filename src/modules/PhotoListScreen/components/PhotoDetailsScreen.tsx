import React, {useState} from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useRoute} from '@react-navigation/native';

const PhotoDetailsScreen = () => {
  const [loading, setLoading] = useState(false);

  const {params} = useRoute();

  return (
    <>
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Loading</Text>
        </View>
      ) : null}
      <FastImage
        source={{uri: params.uri}}
        style={{flex: 1, margin: 30, borderRadius: 20}}
        resizeMode={FastImage.resizeMode.cover}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
    </>
  );
};

export default PhotoDetailsScreen;
