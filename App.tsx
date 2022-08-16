/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';


import * as Sentry from '@sentry/react-native';
import { Navigation } from 'react-native-navigation';

Sentry.init({
  dsn: 'https://2cc6ee6e11d04d74b74b9b2b653c1491@o1357066.ingest.sentry.io/6643601',
  debug: true,
  beforeSend: (e) => {
    console.log('Event beforeSend:', e);
    return e;
  },
  // This will be called with a boolean `didCallNativeInit` when the native SDK has been contacted.
  onReady: ({didCallNativeInit}) => {
    console.log('onReady called with didCallNativeInit:', didCallNativeInit);
  },
  tracesSampleRate: 1,
  integrations: [
    new Sentry.ReactNativeTracing({
      tracingOrigins: ["localhost", /^\//],
      // Pass instrumentation to be used as `routingInstrumentation`
      routingInstrumentation: new Sentry.ReactNativeNavigationInstrumentation(
        Navigation,
      )
    }),
  ],
});

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = (props: { componentId: string }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onThrowErrorButton = () => {throw new Error('This is a crash')};
  const onSurpriseButton = () => {
    Navigation.push(props.componentId, {
      component: {
        name: 'Surprise',
        options: {
          topBar: {
            title: {
              text: 'Surprise!'
            }
          }
        }
      }
    });
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Let's crash">
            <Button
              onPress={onThrowErrorButton}
              title="Throw an error!"
              color="#841584"
              accessibilityLabel="Throw an error to simulate an application error and send it to Sentry."
            />
          </Section>
          <Section title="Curious?">
            <Button
              onPress={onSurpriseButton}
              title="Open surprise!"
              color="#841584"
              accessibilityLabel="Open new screen on stack to test automatic Sentry performance monitoring."
            />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
