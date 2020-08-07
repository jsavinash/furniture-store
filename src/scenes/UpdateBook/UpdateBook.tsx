import * as React from 'react';
import {UpdateBookSceneProps} from '../../models/scenes-props/update-book.props';
import {StyledView, StyledText, StyledButton} from './update-book-styles';

const UpdateBook = (props: UpdateBookSceneProps) => {
  return (
    <StyledView>
      <StyledText>Details Screen</StyledText>
      <StyledButton
        title="Go to Login... again"
        onPress={() => props.navigation.navigate('Book')}
      />
    </StyledView>
  );
};
export default UpdateBook;
