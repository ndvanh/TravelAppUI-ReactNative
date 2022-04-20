import * as React from 'react';
import  { useState,useEffect } from "react";
import {  Keyboard,Alert,View, Text,Image,ScrollView,TextInput,StyleSheet,FlatList,SafeAreaView,TouchableOpacity,Button } from 'react-native';
import home from "../json/home.json";


//  các item
const Item = ({ ten,kc,anh }) => (
  <View style={{marginTop:10,flexDirection:'row'}}>
      <Image
    source={{uri:anh}} 
    style={{height:100,width:100,marginLeft:15,borderRadius:50,borderWidth:2,borderColor:'#130f40'}}
    />
   <View style={{flexDirection:'column',marginLeft:20,marginTop:30}}>
   <Text  style={{fontSize:25,color:'#636e72'}}>{ten}</Text>
    <Text style={{fontSize:15,color:'#636e72'}}>{kc}</Text>
   </View>
  
  </View>
);


export default  function HomeScreen({ navigation })  {
  const ddList = home.DATA;
  const renderItem = ({ item }) => (
    <Item ten={item.ten} kc={item.kc} anh={item.anh} />
    
  );
  const [count, setCount] = useState(0);
  const onPress1 = () => setCount(prevCount => prevCount + 1);
  const Thongbao = () =>
  Alert.alert(
    "Thông báo",
    "Đã nhận SĐT của bạn, chúng tôi sẽ liên hệ sau",
    [
      { text: "OK", onPress: () => console.log("OK Pressed") },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      }
     
    ]
  );
  
    return (
     
      <View style={{backgroundColor:'white',flex:1 }}>
      
         {/* Điểm đến hấp dẫn */}
         <ScrollView>
        <View style={{}}>
          
        <Image 
          source={require('../assets/phuquoc.png')}
             style={{height:250,width:'100%',backgroundColor:'black',opacity:0.7,borderBottomRightRadius:70}}
           />
           <Text  style={{color:'white',position:'absolute',fontWeight:'bold',fontSize:25,top:20,left:20}}>Xin chào!</Text>
           <Text style={{color:'white',position:'absolute',fontWeight:'bold',fontSize:25,top:50,left:20}}>Khám phá mảnh đất hình chữ S cùng chúng tôi</Text>
          <TextInput style={styles.input}  placeholder="Tìm nơi bạn muốn khám phá"   />
          <Image 
          
          source={require('../assets/findicon.png')}
             style={{height:40,width:40,position:'absolute',borderRadius:50,right:20,top:150}}
           />
        </View>
        
        <View style={{flexDirection:'row'}}>
          <Text style={{color:'#130f40',fontSize:20,fontWeight:'bold',marginLeft:15,marginTop:10}}>Điểm đến hấp dẫn</Text>
          <Text onPress={() => navigation.navigate('Khám Phá')} style={{color:'#130f40',fontSize:15,marginLeft:150,marginTop:15}}> Tất cả</Text>
        </View>
       
        <SafeAreaView style={{marginTop:10}}>
        <FlatList 
       
        data={ddList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
      //  scrollEnabled={false}
        
      />
        </SafeAreaView>


        {/* Danh mục */}
        <View style={{}}>
         
        <Text style={{color:'#130f40',fontSize:20,fontWeight:'bold',marginLeft:15,marginTop:20}}> Danh mục</Text>
        <View style={{flexDirection:'row'}}>
          {/* DMuc1 */}
        <View style={{marginTop:15,marginLeft:15,height:200,width:200,backgroundColor:'#a29bfe',flexDirection:'column',borderRadius:20}}>
        <Image 
          
          source={require('../assets/maybay.jpg')}
             style={{height:160,width:200,borderTopLeftRadius:20,borderTopRightRadius:20}}
           />
           <Text onPress={() => navigation.navigate('Chuyến Bay')} style={{color:'white',fontSize:15,marginTop:10,textAlign:'center'}}>Thông Tin Chuyến Bay</Text>
        </View>
         {/* DMuc2 */}
        <View style={{marginTop:15,marginLeft:15,height:250,width:150,backgroundColor:'#74b9ff',flexDirection:'column',borderRadius:20}}>
        <Image 
          
          source={require('../assets/vietnam.jpg')}
             style={{height:210,width:150,borderTopLeftRadius:20,borderTopRightRadius:20}}
           />
           <Text onPress={() => navigation.navigate('Khám Phá')} style={{color:'white',fontSize:15,marginTop:10,textAlign:'center'}}>Khám Phá</Text>
        </View>
        </View>

        <View style={{flexDirection:'row'}}>
           {/* DMuc3 */}
        <View style={{position:'absolute',top:-35,left:15,height:250,width:150,backgroundColor:'#55efc4',flexDirection:'column',borderRadius:20}}>
        <Image 
          
          source={require('../assets/hotel.jpg')}
             style={{height:210,width:150,borderTopLeftRadius:20,borderTopRightRadius:20}}
           />
           <Text onPress={() => navigation.navigate('Khách Sạn')} style={{color:'white',fontSize:15,marginTop:10,textAlign:'center'}}>Khách sạn</Text>
        </View>
         {/* DMuc4 */}
        <View style={{height:200,width:200,backgroundColor:'#f8a5c2',flexDirection:'column',borderRadius:20,marginLeft:180,marginTop:15}}>
        <Image 
          
          source={require('../assets/VN.jpg')}
             style={{height:160,width:200,borderTopLeftRadius:20,borderTopRightRadius:20}}
           />
           <Text onPress={() => navigation.navigate('Về Chúng Tôi')} style={{color:'white',fontSize:15,marginTop:10,textAlign:'center'}}>Về chúng tôi</Text>
        </View>
        </View>
       
        </View>
        
        {/* Sale cho bạn */}
        <View>
        <Text style={{color:'#130f40',fontSize:20,fontWeight:'bold',marginLeft:15,marginTop:20}}>Khuyến mãi đặc biệt
        </Text>
        <View style={{marginTop:10,marginLeft:15,marginRight:15}}>
        <Text style={{fontSize:15,color:'#636e72'}}>
        Vé máy bay khứ hồi đi Phú Quốc cực HOT! Để lại SĐT của bạn để nhận ngay ưu đãi!
        </Text>
        <View style={{marginTop:10,flexDirection:'row',marginBottom:15}}>
        <Text style={{marginTop:10,fontSize:20,marginTop:30}}>Số vé: {count}</Text>
        <TouchableOpacity
        style={styles.button}
        onPress={onPress1}
      >
        <Text style={{ color:'white',}}>Nhận ngay</Text>
      </TouchableOpacity>
      <Image 
          
          source={require('../assets/phuquoc2.jpg')}
             style={{height:100,width:100,marginLeft:65,borderRadius:20,borderColor:'#a29bfe',borderWidth:1}}
           />
        </View>
       <View style={{flexDirection:'row'}}>
       <TextInput style={{marginLeft:8,marginBottom:15,height:40,width:240,backgroundColor:'#74b9ff',color:'white',borderRadius:20}}  placeholder="Số điện thoại của bạn"   />
        <TouchableOpacity
         style={{borderRadius:20,backgroundColor:'#a29bfe',height:40,width:80,marginLeft:20}}
         onPress={Thongbao}
      >
        <Text style={{ color:'white',textAlign:'center',marginTop:10}}>OK</Text>
      </TouchableOpacity>
       </View>
        </View>
        </View>
      
    </ScrollView>
      </View>
      
    );
  }
  const styles = StyleSheet.create({
    input: {
      position:'absolute',color:'black',top:150,left:20,fontSize:15,
      height:40,
      width:250,
     backgroundColor:'white',
     opacity:0.9,
     borderRadius:20,
    
    },
    button: {
      alignItems: "center",
      backgroundColor: "#a29bfe",
      padding: 10,
      marginLeft:20,
      borderRadius:20,
      height:40,
    width:100,
    marginTop:25
    },
   
  });