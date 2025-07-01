import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../screens/AuthScreen';
import DrawerStack from '../navigation/DrawerStack';

const Stack = createNativeStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator
            initialRouteName='Auth'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name='Auth'
                component={AuthScreen}
                options={{
                    animation: 'fade',
                    presentation: 'transparentModal',
                }}
            />
            <Stack.Screen
                name='DrawerStack'
                component={DrawerStack}
                options={{
                    animation: 'fade',
                }}
            />
        </Stack.Navigator>
    );
}

export default RootStack;