import * as React from 'react';
import {DeleteBookSceneProps} from '../../models/scenes-props/delete-book.props';
import {StyledView, StyledText, StyledButton} from './delete-book-styles';

const DeleteBook = (props: DeleteBookSceneProps) => {
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
export default DeleteBook;
