import React from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const SurpriseScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Surprise Screen</Text>
      <Image
        source={{uri: 'https://c.tenor.com/rKLBka9zl5UAAAAM/yeah-excellent.gif'}}
        style={{width: 100, height:100 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});

export default SurpriseScreen;
