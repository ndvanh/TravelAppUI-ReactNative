import * as React from 'react';
import { useState } from "react";
import {  View, Text,Image,FlatList,SafeAreaView,ScrollView, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import khampha from "../json/khampha.json";
 
const Stack = createStackNavigator();


    //Địa điểm

function Diadiem({ navigation }) {
  //  các item
const Item = ({ ten,tg,anh }) => (
  <View style={{marginTop:5,flexDirection:'column'}}>
      <Image
    source={{uri:anh}} 
    style={{height:120,width:200,marginLeft:15,borderRadius:10}}
    />
   <View style={{flexDirection:'column',marginLeft:20,marginTop:5,width:100}}>
   <Text onPress={() => navigation.navigate('Chi tiết thông tin')} style={{fontSize:15,color:'#636e72',width:200}}>{ten}</Text>
    <Text style={{fontSize:12,color:'#636e72'}}>{tg}</Text>
   </View>
  
  </View>
);
  const ddList = khampha.DATA;
  const renderItem = ({ item }) => (
    <Item ten={item.ten} tg={item.tg} anh={item.anh} />
    
  );
  return (
    <View style={{ flex: 1,backgroundColor:'white' }}>
      <ScrollView>
        <View>
        <Image 
          source={require('../assets/dinh-fansipan.jpg')}
             style={{height:200,width:'100%',opacity:0.7,backgroundColor:'black'}}
           />
           <Text style={{position:'absolute',color:'white',fontSize:25,left:15,top:30}}>Khám phá Việt Nam nơi có</Text>
  <View style={{flexDirection:'row'}}>
           <Image 
          
          source={require('../assets/taybac.jpg')}
             style={{height:250,width:'50%',opacity:0.7,backgroundColor:'black'}}
           />
            <Text style={{position:'absolute',color:'white',fontSize:25,left:15,top:30}}>Núi cao</Text>
          <Image 
          source={require('../assets/catba.jpg')}
             style={{height:250,width:'50%',opacity:0.7,backgroundColor:'black'}}
           />
            <Text style={{position:'absolute',color:'white',fontSize:25,right:15,top:30}}>Biển rộng</Text>
           </View>
        </View>
      
      <View style={{marginTop:10}}>
      <Text style={{color:'#130f40',fontSize:20,fontWeight:'bold',marginLeft:15,marginTop:5}}>Địa điểm mới nhất</Text>
      <Image 
          
          source={require('../assets/sapa.jpg')}
             style={{height:180,width:'100%',marginTop:10}}
           />
           <Text onPress={() => navigation.navigate('Chi tiết thông tin')} style={{color:'#636e72',padding:10,fontSize:15}}>Đến Sapa mùa này có gì chơi? Vùng đất Tây Bắc ẩn chứa bao điều kì diệu của cảnh sắc thiên nhiên! Cùng khám phá ngay! </Text>
           <Text style={{color:'#636e72',marginLeft:10,fontSize:12}}>5:00PM 02/01/2022 </Text>
      </View>
      <View style={{width:280,height:1,backgroundColor:'#192a56',marginLeft:55,marginTop:5}}/>
   
      <SafeAreaView style={{marginTop:10}}>
        <FlatList 
       
        data={ddList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        //scrollEnabled={true}
        
      />
        </SafeAreaView>
        </ScrollView>
    </View>
  );
}  

    // Chi tiết
    
  function Chitiet({  navigation }) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
      <View style={{ flex: 1, backgroundColor:'white'}}>
        <ScrollView>
       <View>
       <Image 
          
          source={require('../assets/Sapa-2.jpg')}
             style={{height:300,width:'100%',borderBottomRightRadius:30,borderBottomLeftRadius:30}}
           />
           <Image 
          
          source={require('../assets/location.png')}
             style={{height:30,width:30,position:'absolute',borderRadius:50,bottom:5,left:15}}
           />
            <Image 
          
          source={require('../assets/love.png')}
             style={{height:30,width:30,position:'absolute',borderRadius:10,bottom:5,right:15}}
           />
            <Text onPress={() =>
          navigation.navigate('Khám phá địa điểm', {
            
          })
        } style={{position:'absolute',color:'white',fontSize:15,left:15,top:10}}>↲ Quay lại</Text>
           <Text style={{position:'absolute',color:'white',fontSize:25,left:15,bottom:50,fontWeight:'bold'}}>Thị trấn Sapa</Text>
           <Text style={{position:'absolute',color:'white',fontSize:15,left:50,bottom:10}}>Lào Cai, Việt Nam</Text>
       </View>
       <View>
         <Text style={{color:'#130f40',fontSize:20,textAlign:'center',marginTop:10,fontWeight:'500'}}>Đánh giá tổng quan</Text>
         <Text style={{color:'#636e72',fontSize:15,textAlign:'justify',padding:10}}>Sa Pa có nhiều cảnh đẹp tự nhiên như thác Bạc cao khoảng 200m, cầu Mây là một di tích lịch sử của người dân tộc, cổng Trời là điểm cao nhất mà đường bộ có thể đi tới để đứng ngắm đỉnh Phan Xi Păng, rừng Trúc, động Tả Phìn, bãi đá cổ Sa Pa nằm trong Thung lũng Mường Hoa. Hàm Rồng là nơi trồng rất nhiều loại hoa, màu sắc sặc sỡ và được trồng theo từng khuôn viên. Ở nơi đây cũng có vườn lan với nhiều loại hoa quý hiếm. Sa Pa có đỉnh Phan Xi Păng cao 3.147 m trên dãy Hoàng Liên Sơn. Dãy Hoàng Liên Sơn có nhiều loài gỗ quý và chim thú như gà gô, gấu, khỉ, sơn dương. Trong khu rừng quốc gia Hoàng Liên Sơn còn có đến 136 loài chim, 56 loài thú và 553 loài côn trùng. Có 37 loài thú được ghi trong sách đỏ Việt Nam. </Text>
         <View style={{flexDirection:'row'}}>
         <Image 
          
          source={require('../assets/4.5.png')}
             style={{marginLeft:15}}
           />
           <Text style={{color:'#130f40',fontSize:15,marginLeft:10,marginTop:5}}>4.5 (999 votes)</Text>
         </View>
          <View style={{flexDirection:'row'}}>
          <Text style={{color:'#130f40',fontSize:20,marginLeft:15,marginTop:10,marginBottom:15,fontWeight:'500'}}>Quan tâm đến địa điểm này ?</Text>
                   <Switch
                   style={{marginLeft:15}}
                   trackColor={{ false: "#2d3436", true: "#74b9ff" }}
                thumbColor={isEnabled ? "#0984e3" : "#b2bec3"}
                   onValueChange={toggleSwitch}
                   value={isEnabled}
                />
          </View>
       </View>
        </ScrollView>
      </View>
    );
  }

export default  function Khampha() {
    return (
      <Stack.Navigator
      screenOptions={{ headerShown: false }}
      >
         <Stack.Screen name="Khám phá địa điểm" component={Diadiem}  />
        <Stack.Screen name="Chi tiết thông tin" component={Chitiet}  />
      </Stack.Navigator>
    );
  }