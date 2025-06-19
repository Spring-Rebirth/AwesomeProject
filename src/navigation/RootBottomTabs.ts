import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/root-bottom-tabs/HomeScreen';
import ProfileScreen from '../screens/root-bottom-tabs/ProfileScreen';
import { EvilIcons } from '@react-native-vector-icons/evil-icons';
import { BottomTabBar } from '@react-navigation/bottom-tabs';

const RootBottomTabs = createBottomTabNavigator({
  // tabBar: (props) => <BottomTabBar { ...props } />,
  screens: {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
});

export default RootBottomTabs;