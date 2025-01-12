import {
  StyleSheet,
  View,
  Platform,
  SafeAreaView,
  useColorScheme,
  StatusBar,
} from 'react-native';
import React, {memo} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Scaffold = props => {
  const {containerStyle = {}} = props;

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      {Platform.OS == 'ios' ? (
        <SafeAreaView style={[styles.container, containerStyle]}>
          {props?.children}
        </SafeAreaView>
      ) : (
        <View style={[styles.container, containerStyle]}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          {props?.children}
        </View>
      )}
    </>
  );
};

export default memo(Scaffold);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
