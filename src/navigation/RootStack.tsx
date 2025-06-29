import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../screens/AuthScreen';
import RootBottomTabs from '../navigation/RootBottomTabs';

const Stack = createNativeStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator
            initialRouteName='Auth'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='Auth' component={AuthScreen} />
            <Stack.Screen name='RootBottomTabs' component={RootBottomTabs} />
        </Stack.Navigator>
    );
}

export default RootStack;