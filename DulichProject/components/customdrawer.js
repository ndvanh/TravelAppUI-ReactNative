import React from 'react';
import { View, Text, Image } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const CustomDrawer = props => {
    return(
        <View>
            <DrawerContentScrollView {...props}/>
        <View style={{backgroundColor:'#74b9ff',height:180,width:280, alignItems:'center'}}>          
            <Image 
          source={require('../assets/ava.png')}
             style={{height:120,width:120,borderRadius:100,marginTop:10}}
           />
            <Text style={{color:'white',marginTop:5,fontSize:18}}>Xin chào người dùng</Text>
            </View>
        <DrawerItemList {...props} />
       <View style={{height:1,width:230,backgroundColor:'#7f8c8d',marginLeft:24,marginTop:180}}>

       </View>
      <View style={{flexDirection:'row',marginTop:20,marginLeft:15}}>
      <Text style={{fontSize:20,color:'#7f8c8d'}}>Thoát</Text>
      <Image 
      
          source={require('../assets/off.png')}
             style={{height:30,width:30,position:'absolute',right:15}}
           />
      </View>
        </View>
    );
};
export default CustomDrawer;