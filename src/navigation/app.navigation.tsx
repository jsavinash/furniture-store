import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../scenes/Login/Login';
import Details from '../scenes/Details';
import {navigationParams} from '../common/navigation';

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name={navigationParams.login.name}
          component={Login}
          options={{title: navigationParams.login.title}}
        />
        <Stack.Screen
          name={navigationParams.details.name}
          component={Details}
          options={{title: navigationParams.details.title}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
