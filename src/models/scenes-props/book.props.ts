import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../rootStackParamList';

type BookSceneRouteProp = RouteProp<RootStackParamList, 'Book'>;

type BookSceneNavigationProp = StackNavigationProp<RootStackParamList, 'Book'>;

export type BookSceneProps = {
  route: BookSceneRouteProp;
  navigation: BookSceneNavigationProp;
};
