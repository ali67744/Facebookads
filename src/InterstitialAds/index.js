import React, {Component} from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';
import {InterstitialAdManager} from 'react-native-fbads';
import {InterstitialAdPlacementId} from '../Variables';

const {width} = Dimensions.get('window');

const InterstitialAd = () => {
  const _showAd = () => {
    InterstitialAdManager.showAd(InterstitialAdPlacementId)
      .then(() => {})
      .catch(() => {});
  };
  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor="#b2bbbc"
        style={styles.button}
        onPress={() => _showAd()}>
        <Text style={styles.buttonText}>Show Interstitial Ad</Text>
      </TouchableHighlight>
    </View>
  );
};
let styles = StyleSheet.create({
  container: {
    width,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    elevation: 3,
    borderRadius: 10,
    paddingVertical: 10,
    width: width - 80,
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#a70f0a',
  },
});

export default InterstitialAd;
