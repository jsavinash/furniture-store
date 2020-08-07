import * as React from 'react';
import {RootState} from '../../app/reducer';
import {BookSceneProps} from '../../models/book';
import {FlatList} from 'react-native';
import {
  StyledView,
  StyledText,
  StyledButton,
  StyledFlatListText,
} from './book-styles';
import * as bookAction from './book.action';

import {
  useDispatch,
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux';

const Books = (props: BookSceneProps) => {
  const [counter, setCounter] = React.useState<number | 0>(0);
  const dispatch = useDispatch();
  const count = useReduxSelector<TypedUseSelectorHook<RootState>>(
    (state: RootState) => state.book.count,
  );
  dispatch(bookAction.addBook());

  console.log('count', count);
  return (
    <StyledView>
      <StyledText>Details Screen</StyledText>
      <StyledButton
        title="Go to Details...."
        onPress={() => props.navigation.navigate('BookDetail')}
      />
      <StyledText>Counter {counter}</StyledText>
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
          <StyledFlatListText>{item.key}</StyledFlatListText>
        )}
      />
      <StyledButton
        title="Increment Counter"
        onPress={() => setCounter(counter + 1)}
      />
    </StyledView>
  );
};
export default Books;
