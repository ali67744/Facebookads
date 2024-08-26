package com.teachingproject;

import android.content.Intent;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class MyNativeModule extends ReactContextBaseJavaModule {

    private static ReactApplicationContext reactContext;



    MyNativeModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "MyNativeModule";
    }

    @ReactMethod
    public void openNativeScreen() {
        Intent intent = new Intent(reactContext, NavtiveActivity.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        reactContext.startActivity(intent);
    }
    @ReactMethod
    public void openNativeBannerScreen() {
        Intent intent = new Intent(reactContext, NativeBanner.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        reactContext.startActivity(intent);
    }
}
