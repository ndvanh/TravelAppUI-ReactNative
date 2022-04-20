import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/Home';
import Khampha from './screens/Khampha';
import Khachsan from './screens/Khachsan';
import Maybay from './screens/Maybay';
import Gioithieu from './screens/Gioithieu';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomDrawer from './components/customdrawer';
const Drawer = createDrawerNavigator();

//options={{ headerShown: false }}
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
          drawerContent={props => <CustomDrawer {...props} />}
       // screenOptions={{ headerShown: false }}
       screenOptions={{   drawerActiveBackgroundColor: '#130f40', 
       drawerActiveTintColor: 'white',   
       drawerInactiveTintColor: '#7f8c8d',
       headerStyle: {
        backgroundColor: '#74b9ff',
        
      },
      headerTintColor: 'white',
      headerTitleAlign:'center',
       drawerLabelStyle: {
        fontSize: 18
      },
      
     }}
      >
         <Drawer.Screen name="Home" component={HomeScreen}
          options={{
            drawerIcon: ({color}) => (
              <Icon name="home" size={25} color={color} />
            ),
          }} />
        <Drawer.Screen name="Khám Phá" component={Khampha}
         options={{
          drawerIcon: ({color}) => (
            <Icon name="globe" size={25} color={color} />
          ),
        }} />
        <Drawer.Screen name="Chuyến Bay" component={Maybay} 
         options={{
          drawerIcon: ({color}) => (
            <Icon name="plane" size={25} color={color} />
          ),
        }}/>
        <Drawer.Screen name="Khách Sạn" component={Khachsan}
         options={{
          drawerIcon: ({color}) => (
            <Icon name="hotel" size={25} color={color} />
          ),
        }}
         />
         <Drawer.Screen name="Về Chúng Tôi" component={Gioithieu}
         options={{
          drawerIcon: ({color}) => (
            <Icon name="umbrella" size={25} color={color} />
          ),
        }}
         />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
