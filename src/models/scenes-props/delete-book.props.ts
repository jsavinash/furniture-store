import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../rootStackParamList';

type DeleteBookSceneRouteProp = RouteProp<RootStackParamList, 'DeleteBook'>;

type DeleteBookSceneNavigationProp = StackNavigationProp<
  RootStackParamList,
  'DeleteBook'
>;

export type DeleteBookSceneProps = {
  route: DeleteBookSceneRouteProp;
  navigation: DeleteBookSceneNavigationProp;
};
