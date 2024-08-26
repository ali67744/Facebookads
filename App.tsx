/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Scene, Router, Stack} from 'react-native-router-flux';

import Welcome from './src';
import NativeAd from './src/NativeAds';
import BannerAd from './src/BannerAds';
import InterstitialAd from './src/InterstitialAds';
import {NativeModules} from 'react-native';
const {MyNativeModule} = NativeModules;
const App = () => {
  

  return (
    <>
      <Router>
        <Stack key="root" hideNavBar>
          <Scene
            key="welcome"
            component={Welcome}
            title="React Native Facebook Ads"
            hideNavBar={false}
            direction="vertical"
          />
          <Scene
            key="nativeAd"
            title="Native Ad"
            component={()=>{
              // return MyNativeModule.openNativeScreen();
              return MyNativeModule.openNativeScreen();
            }}
            hideNavBar={false}
            direction="vertical"
          />

{/* <Scene
            key="nativeBannerAd"
            title="Native Banner Ad"
            component={()=>{
              return MyNativeModule.openNativeBannerScreen();
            }}
            hideNavBar={false}
            direction="vertical"
          /> */}
          
          <Scene
            key="bannerAd"
            title="Native Banner Ad"
            // component={BannerAd}
            component={()=>{
              return MyNativeModule.openNativeBannerScreen();
            }}
            hideNavBar={false}
            direction="vertical"
          />
          <Scene
            key="interstitialAd"
            title="Interstitial Ad"
            component={InterstitialAd}
            hideNavBar={false}
            direction="vertical"
          />
        </Stack>
      </Router>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
