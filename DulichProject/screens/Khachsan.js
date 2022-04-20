import * as React from 'react';
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text,Image,FlatList,SafeAreaView,ScrollView,TextInput, Switch } from 'react-native';
import khachsan from "../json/khachsan.json";

const Stack = createStackNavigator();

const Item = ({ ten,kc,anh }) => (
  <View style={{marginTop:5,flexDirection:'column'}}>
      <Image
    source={{uri:anh}} 
    style={{height:180,width:290,marginLeft:15,borderRadius:10}}
    />
   <View style={{flexDirection:'column',marginLeft:20,marginTop:5,width:100}}>
   <Text style={{fontSize:20,color:'#636e72',width:200}}>{ten}</Text>
    <Text style={{fontSize:15,color:'#636e72'}}>{kc}</Text>
   </View>
  
  </View>
);


function Diadiem({ navigation }) {
  const Item = ({ diadiem,slks,anh }) => (
    <View style={{marginTop:5,flexDirection:'row'}}>
        <Image
      source={{uri:anh}} 
      style={{height:140,width:200,marginLeft:10,borderRadius:10}}
      />
    <View >
    <Text onPress={() => navigation.navigate('Thông tin khách sạn')} style={{width: 170,fontSize:20,color:'#636e72',marginLeft:10,}}>{diadiem}</Text>
      <Text style={{ marginLeft:10, fontSize:16,width:150, color:'#636e72'}}>{slks}</Text>
     
    </View>
    </View>
  );
  const ddList = khachsan.DATA;
  const renderItem = ({ item }) => (
    <Item diadiem={item.diadiem} slks={item.slks} anh={item.anh} />
    
  );
  return (
    <View style={{ flex: 1,backgroundColor:'white' }}>
   
      <FlatList
       data={ddList}
       renderItem={renderItem}
       keyExtractor={item => item.id}
       horizontal={false}
       showsHorizontalScrollIndicator={true}
     />
    
    </View>

  );
}  


function KhachSan({ navigation }) {
  const Item2 = ({ tenks,tt,anh, gia }) => (
    <View style={{marginTop:5,flexDirection:'row'}}>
        <Image
      source={{uri:anh}} 
      style={{height:120,width:200,marginLeft:15,borderRadius:10}}
      />
    <View >
    <Text  onPress={() => navigation.navigate('Chi tiết khách sạn')} style={{width: 170,fontSize:15,color:'#636e72',marginLeft:10,}}>{tenks}</Text>
      <Text style={{fontSize:13,width:170,marginLeft:10, color:'#636e72'}}>{tt}</Text>
      <Text style={{fontSize:12,width:170,marginLeft:10, color:'#636e72'}}>{gia}</Text>
    </View>
    
    </View>
  );
  
  const ddList = khachsan.DATA1;
  const renderItem = ({ item }) => (
    <Item2 tenks={item.tenks} tt={item.tt} anh={item.anh} gia={item.gia} />
    
  );
  return (
    <View style={{ flex: 1,backgroundColor:'white' }}>
      <FlatList
       data={ddList}
       renderItem={renderItem}
       keyExtractor={item => item.id}
       horizontal={false}
       showsHorizontalScrollIndicator={true}
     />
    
    </View>
  );
}  

 
function Chitiet({  navigation }) {

  const ddList = khachsan.DATA3;
  const renderItem = ({ item }) => (
    <Item ten={item.ten} kc={item.kc} anh={item.anh} />
    
  );


  return (
    <View style={{ flex: 1, backgroundColor:'white'}}>
      <ScrollView>
     <View>
        <SafeAreaView style={{marginTop:10}}>
            <FlatList 
          
            data={ddList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={true}
          />
            </SafeAreaView>
         
     </View>
     <View>
       <Text style={{color:'#130f40',fontSize:30,textAlign:'center',marginTop:10,fontWeight:'500'}}>Đánh giá</Text>
       <Text style={{color:'#636e72',fontSize:15,textAlign:'justify',padding:10}}>Hãy thử một trong những khách sạn phổ biến và được đánh giá cao ở Việt Nam. Ví dụ như Sa Pa có nhiều cảnh đẹp tự nhiên như thác Bạc cao khoảng 200m, cầu Mây là một di tích lịch sử của người dân tộc, cổng Trời là điểm cao nhất mà đường bộ có thể đi tới để đứng ngắm đỉnh Phan Xi Păng, rừng Trúc, động Tả Phìn, bãi đá cổ Sa Pa nằm trong Thung lũng Mường Hoa. Hàm Rồng là nơi trồng rất nhiều loại hoa, màu sắc sặc sỡ và được trồng theo từng khuôn viên. Ở nơi đây cũng có vườn lan với nhiều loại hoa quý hiếm. Sa Pa có đỉnh Phan Xi Păng cao 3.147 m trên dãy Hoàng Liên Sơn. Và các khách sạn ở các tỉnh thành phố khác giá rẻ gần nhiều khu vui chơi mọi người mau nhanh tay chọn cho mình khách sạn của chúng tôi một cách nhanh nhất và nhiều lý do cùng các tiện ghi. Tiện nghi của khách sạn: đạt chuẩn 3 sao tại khu phố cổ, tòa nhà khách sạn 8 tầng kiến trúc hiện đại với trang thiết bị trong phòng sang trọng. Khách sạn có 14 phòng nghỉ, tất cả các phòng đều được trang trí theo kiến trúc hiện đại, nội thất trong phòng được sắp đặt một cách một cách mỹ thuật cùng các thiết bị hiên đại như Tivi, truyền hình cáp, điều hòa không khí 2 chiều, internet không dây tốc độ cao miễn phí, các dịch vụ in, photo miễn phí. Có nhà hàng chuyên phục vụ các món ăn địa phương và quốc tế nổi tiếng, cùng nhiều dịch vụ khác.</Text>
       <View style={{flexDirection:'row'}}>
       <Image 
        
        source={require('../assets/4.5.png')}
           style={{marginLeft:15}}
         />
         <Text style={{color:'#130f40',fontSize:15,marginLeft:10,marginTop:5}}>4.5 (9999 votes)</Text>
       </View>
        <View style={{flexDirection:'row'}}>
        <Text style={{color:'#130f40',fontSize:18,marginLeft:15,marginTop:10,marginBottom:15,fontWeight:'500'}}>Quan tâm đến khách sạn hãy đánh giá cho chúng tôi biết? </Text>
       
        </View>
        
     </View>
<View style={{marginTop:10}}>
<View style={{flexDirection:'row'}}>

</View>
<View style={{marginLeft:15,marginBottom:15}}>
<Text style={{color:'#130f40',fontSize:15,marginTop:0}}>Địa chỉ: 235 Hoàng Quốc Việt, Hà Nội</Text>
 <Text style={{color:'#130f40',fontSize:15,marginTop:10}}>SĐT: 0123456789</Text>
 <Text style={{color:'#130f40',fontSize:15,marginTop:10}}>Email: dulichDLV@gmail.com</Text>
</View>

</View>
     
      </ScrollView>
    </View>
  );
}

export default  function Khachsan()  {
    return (
       <Stack.Navigator
      screenOptions={{ headerShown: false }}
      >
         <Stack.Screen name="Khám phá địa điểm" component={Diadiem}  />
         <Stack.Screen name="Thông tin khách sạn" component={KhachSan}  />
         <Stack.Screen name="Chi tiết khách sạn" component={Chitiet}  />
      </Stack.Navigator>
    );
  }
 