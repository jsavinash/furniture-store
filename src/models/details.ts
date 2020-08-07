import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './rootStackParamList';

type DetailsSceneRouteProp = RouteProp<RootStackParamList, 'Details'>;

type DetailsSceneNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;

export type DetailsSceneProps = {
  route: DetailsSceneRouteProp;
  navigation: DetailsSceneNavigationProp;
};
