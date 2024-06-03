import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./BottomTabNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <>
          <Stack.Screen name="root" component={BottomTabNavigator} />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
