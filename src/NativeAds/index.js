/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {NativeAdsManager, AdSettings} from 'react-native-fbads';
import {nativeAdPlacementId} from '../Variables';
import {StyleSheet, View} from 'react-native';

import NativeAdView from './NativeAdView';

const NativeAd = () => {
  const adsManager = new NativeAdsManager(nativeAdPlacementId);

  return (
    <View
      style={{
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
      }}>
      <NativeAdView adsManager={adsManager} adChoicePosition="bottomRight" />
    </View>
  );
};

export default NativeAd;
