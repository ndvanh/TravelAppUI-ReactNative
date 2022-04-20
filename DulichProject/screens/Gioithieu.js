import * as React from 'react';
import { Button, View, Text,ScrollView,Image,TextInput,TouchableOpacity,Alert } from 'react-native';
export default  function Gioithieu()  {
  const Thongbao = () =>
  Alert.alert(
    "Thông báo",
    "Đã nhận SĐT và họ tên của bạn, chúng tôi sẽ liên hệ sau",
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
      <View style={{ flex: 1,backgroundColor:'white' }}>
         <ScrollView>
        <View>
        <Image 
          source={require('../assets/gt.jpg')}
             style={{height:250,width:'100%',opacity:0.7,backgroundColor:'black'}}
           />
            <Text style={{position:'absolute',color:'white',fontSize:25,left:'25%',top:30,fontWeight:'bold'}}>Chúng tôi là DLV</Text>
            <Text style={{position:'absolute',color:'white',fontSize:18,left:15,top:120}}>ứng dụng thông tin về du lịch lớn nhất tại Việt Nam, giúp bạn khám phá đất nước hình chữ S chỉ bằng chiếc smartphone nhỏ bé của bạn!</Text>

  </View>

  <Text style={{color:'#130f40',fontSize:20,fontWeight:'bold',textAlign:'center',marginTop:15}}>Mục tiêu của chúng tôi</Text>
<View style={{flexDirection:'row',marginTop:15}}>
<Image 
          source={require('../assets/ketnoi.jpg')}
             style={{height:120,width:'50%',borderBottomLeftRadius:30}}
           />
  <View style={{width:'50%',height:120,backgroundColor:'#74b9ff',borderTopRightRadius:30}}>
  <Text style={{fontSize:25,color:'white',textAlign:'right',marginTop:30,marginRight:15}}>Kết nối cộng đồng</Text>
    </View>        
</View>
<View style={{flexDirection:'row',marginTop:15}}>
<View style={{width:'50%',height:120,backgroundColor:'#ED4C67',borderTopLeftRadius:30}}>
  <Text style={{fontSize:25,color:'white',textAlign:'left',marginTop:30,marginLeft:15}}>Cảm xúc chân thật</Text>
    </View>   
<Image 
          source={require('../assets/nt.jpg')}
             style={{height:120,width:'50%',borderBottomRightRadius:30}}
           />
       
</View>
<View style={{flexDirection:'row',marginTop:15}}>
<Image 
          source={require('../assets/vt.jpg')}
             style={{height:120,width:'50%',borderBottomLeftRadius:30}}
           />
  <View style={{width:'50%',height:120,backgroundColor:'#FFC312',borderTopRightRadius:30}}>
  <Text style={{fontSize:25,color:'white',textAlign:'center',marginTop:40}}>Nâng tầm vị thế</Text>
    </View>        
</View>
<Text style={{color:'#130f40',fontSize:20,fontWeight:'bold',textAlign:'center',marginTop:15}}>Liên hệ với chúng tôi</Text>
<View style={{marginTop:15}}>
<TextInput style={{height:40,width:'70%',borderWidth:1,marginLeft:15,borderRadius:20}}  placeholder="Họ tên của bạn"   />
<TextInput style={{height:40,width:'70%',borderWidth:1,marginLeft:15,borderRadius:20,marginTop:15}}  placeholder="Số điện thoại"   />
<View style={{flexDirection:'row'}}>
<Image 
          source={require('../assets/fb.png')}
             style={{marginLeft:15,marginTop:10}}
           />
 <TouchableOpacity
         style={{borderRadius:20,backgroundColor:'#a29bfe',height:40,width:80,marginLeft:140,marginTop:10}}>
         <Text  onPress={Thongbao} style={{ color:'white',textAlign:'center',marginTop:10}}>OK</Text>
      </TouchableOpacity>
</View>
<View style={{marginLeft:15,marginBottom:15}}>
<Text style={{color:'#130f40',fontSize:15,marginTop:10}}>Địa chỉ: 235 Hoàng Quốc Việt, Hà Nội</Text>
 <Text style={{color:'#130f40',fontSize:15,marginTop:10}}>SĐT: 0123456789</Text>
 <Text style={{color:'#130f40',fontSize:15,marginTop:10}}>Email: dulichDLV@gmail.com</Text>
</View>

</View>
  </ScrollView>
      </View>
    );
  }
 