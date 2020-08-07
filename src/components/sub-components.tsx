import * as React from 'react';
import {Button, View, Text} from 'react-native';

interface Props {
  navigation;
}

export const LoginForm = (props: Props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => props.navigation.navigate('Details')}
      />
    </View>
  );
};
