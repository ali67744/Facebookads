import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {BannerView} from 'react-native-fbads';
import {bannerAdPlacementId} from '../Variables';

const BannerAd = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <BannerView
          placementId={bannerAdPlacementId}
          type="standard"
          onPress={() => console.log('click')}
          onError={(err) => console.log('error', err)}
        />
      </View>
      <View style={styles.bannerContainer}>
        <BannerView
          placementId={bannerAdPlacementId}
          type="large"
          onPress={(xx) => console.log('click',xx)}
          onError={(err) => console.log('error', err)}
        />
      </View>
    </View>
  );
};

let styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  bannerContainer: {
    marginVertical: 10,
  },
});

export default BannerAd;
