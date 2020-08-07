import * as React from 'react';
import {DetailsSceneProps} from '../../models/details';
import {StyledView, StyledText, StyledButton} from './styles';

const Details = (props: DetailsSceneProps) => {
  return (
    <StyledView>
      <StyledText>Details Screen</StyledText>
      <StyledButton
        title="Go to Login... again"
        onPress={() => props.navigation.navigate('Login')}
      />
    </StyledView>
  );
};
export default Details;
