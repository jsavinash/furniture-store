import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../rootStackParamList';

type BookDetailSceneRouteProp = RouteProp<RootStackParamList, 'BookDetail'>;

type BookDetailSceneNavigationProp = StackNavigationProp<
  RootStackParamList,
  'BookDetail'
>;

export type BookDetailSceneProps = {
  route: BookDetailSceneRouteProp;
  navigation: BookDetailSceneNavigationProp;
};
