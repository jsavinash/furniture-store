import * as React from 'react';
import {LoginSceneProps} from '../../models/login';
import {StyledView, StyledText, StyledButton} from './styles';

const Login = (props: LoginSceneProps) => {
  return (
    <StyledView>
      <StyledText>Details Screen</StyledText>
      <StyledButton
        title="Go to Details...."
        onPress={() => props.navigation.navigate('Details')}
      />
    </StyledView>
  );
};
export default Login;
