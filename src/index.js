import React, {useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  View,
  Text,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {AdSettings} from 'react-native-fbads';

const {width} = Dimensions.get('window');

const Main = () => {
  useEffect(() => {
    AdSettings.setLogLevel('debug');
    AdSettings.addTestDevice(AdSettings.currentDeviceHash);
    const requestedStatus = AdSettings.requestTrackingPermission();

    if (requestedStatus === 'authorized' || requestedStatus === 'unavailable') {
      AdSettings.setAdvertiserIDCollectionEnabled(true);
      // Both calls are not related to each other
      // FB won't deliver any ads if this is set to false or not called at all.
      AdSettings.setAdvertiserTrackingEnabled(true);
    }

    return () => {
      AdSettings.clearTestDevices();
    };
  }, []);
  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor="#b2bbbc"
        style={styles.button}
        onPress={() => Actions.nativeAd()}>
        <Text style={styles.buttonText}>Native Ad</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#b2bbbc"
        onPress={() => Actions.bannerAd()}
        style={styles.button}>
        <Text style={styles.buttonText}>Native Banner Ad</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#b2bbbc"
        onPress={() => Actions.interstitialAd()}
        style={styles.button}>
        <Text style={styles.buttonText}>Interstitial Ad</Text>
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

export default Main;
