import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './rootStackParamList';

export interface ILogin {
  name: string;
}
type LoginSceneRouteProp = RouteProp<RootStackParamList, 'Login'>;

type LoginSceneNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

export type LoginSceneProps = {
  route: LoginSceneRouteProp;
  navigation: LoginSceneNavigationProp;
};
