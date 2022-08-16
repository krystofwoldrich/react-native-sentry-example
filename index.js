/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import App from './App';
import {name as appName} from './app.json';
import SurpriseScreen from './src/Surprise/SurpriseScreen';

Navigation.registerComponent(appName, () => App);
Navigation.registerComponent('Surprise', () => SurpriseScreen);

Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: appName,
             }
           }
         ]
       }
     }
  });
});
