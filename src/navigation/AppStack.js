import {memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CartList, SignIn} from '../screens';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen name="CartList" component={CartList} />
    </Stack.Navigator>
  );
};

export default memo(AppStack);
