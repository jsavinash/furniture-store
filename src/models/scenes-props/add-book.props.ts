import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../rootStackParamList';

type AddBookSceneRouteProp = RouteProp<RootStackParamList, 'AddBook'>;

type AddBookSceneNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AddBook'
>;

export type AddBookSceneProps = {
  route: AddBookSceneRouteProp;
  navigation: AddBookSceneNavigationProp;
};
