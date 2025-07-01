import { createDrawerNavigator } from '@react-navigation/drawer';
import RootBottomTabs from '@/navigation/RootBottomTabs'

const Drawer = createDrawerNavigator();

function DrawerStack() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="RootBottomTabs"
                component={RootBottomTabs}
                options={{
                    headerShown: false
                }}
            />
        </Drawer.Navigator>
    );
}

export default DrawerStack;