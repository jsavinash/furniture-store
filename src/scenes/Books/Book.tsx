import * as React from 'react';
import {BookSceneProps} from '../../models/scenes-props/book.props';
import {FlatList} from 'react-native';
import {StyledView, StyledButton, StyledFlatListText} from './book-styles';

const Books = (props: BookSceneProps) => {
  return (
    <StyledView>
      <StyledButton
        title="Add Book"
        onPress={() => props.navigation.navigate('AddBook')}
      />
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => (
          <StyledFlatListText
            onPress={() => props.navigation.navigate('BookDetail')}>
            {item.key}
          </StyledFlatListText>
        )}
      />
    </StyledView>
  );
};
export default Books;
