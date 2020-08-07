import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../rootStackParamList';

type UpdateBookSceneRouteProp = RouteProp<RootStackParamList, 'UpdateBook'>;

type UpdateBookSceneNavigationProp = StackNavigationProp<
  RootStackParamList,
  'UpdateBook'
>;

export type UpdateBookSceneProps = {
  route: UpdateBookSceneRouteProp;
  navigation: UpdateBookSceneNavigationProp;
};
