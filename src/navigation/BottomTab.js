import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dinning, Home, Settings} from '../screens';
import {View, Text, TouchableOpacity} from 'react-native';
import {useLinkBuilder, useTheme} from '@react-navigation/native';
import {Colors} from '../utils/Colors';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import SettingsIcon from 'react-native-vector-icons/Feather';
import Cupcake from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  const {colors} = useTheme();
  const {buildHref} = useLinkBuilder();

  return (
    <View
      style={{
        flexDirection: 'row',
        borderTopWidth: 1,
        color: Colors?.barGrey,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const myIcon = label => {
          if (label == 'Home') {
            return (
              <HomeIcon
                name="home"
                size={30}
                color={isFocused ? Colors?.red : Colors?.TextGrey}
              />
            );
          } else if (label == 'Dinning') {
            return (
              <Cupcake
                name="cupcake"
                size={30}
                color={isFocused ? Colors?.red : Colors?.TextGrey}
              />
            );
          } else {
            return (
              <SettingsIcon
                name="settings"
                size={30}
                color={isFocused ? Colors?.red : Colors?.TextGrey}
              />
            );
          }
        };

        return (
          <TouchableOpacity
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              width: '20%',
              padding: 15,
              justifyContent: 'center',
              alignItems: 'center',
              // borderTopWidth: 2,
              // borderTopColor: isFocused && Colors?.red,
            }}
            key={index}>
            {myIcon(label)}
            <Text
              style={{
                color: isFocused ? Colors?.red : Colors?.TextGrey,
                fontWeight: '500',
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Dinning" component={Dinning} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default BottomTab;
