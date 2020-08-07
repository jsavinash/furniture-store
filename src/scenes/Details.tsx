import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {DetailsSceneProps} from '../models/details';

const Details = (props: DetailsSceneProps) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Login... again"
        onPress={() => props.navigation.navigate('Login')}
      />
    </View>
  );
};
export default Details;
