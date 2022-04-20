import * as React from 'react';
import {  View, Text, Image, FlatList, SafeAreaView, ScrollView, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Component } from 'react/cjs/react.production.min';
import chuyenbay from "../json/chuyenbay.json";

const Stack = createStackNavigator();

//Thông tin chuyến bay

function Chuyenbay({ navigation }) {
  const Item1 = ({ diadiem, giave, anh }) => (
    <View style={{marginTop:5}}>
      <Image
        source={{uri:anh}} 
        style={{height:150, width:220, marginLeft:15, borderRadius:10}}
      />
      <Text onPress={() => navigation.navigate('Chi tiết chuyến bay 1')} style={{position:'absolute', color:'white', marginLeft:20, marginTop: 5, fontWeight: 'bold', fontSize: 15}}>{diadiem}</Text>
      <Text style={{position:'absolute', color:'black', marginLeft:20, marginTop: 120, fontWeight: 'bold', backgroundColor: 'orange', 
                    width: 180, height: 25, borderRadius: 10, fontSize: 15, textAlign: 'center'}}>
        <Text style={{fontSize: 12}}> giá từ </Text> 
        {giave}
      </Text>
    </View>
  );
  const ddList = chuyenbay.DiemDen;
  const renderItem1 = ({ item }) => (
    <Item1 diadiem={item.diadiem} giave={item.giave} anh={item.anh} /> 
  );

  const Item2 = ({ diadiem, giave, anh }) => (
    <View style={{marginTop:5}}>
      <Image
        source={{uri:anh}} 
        style={{height:150, width:220, marginLeft:15, borderRadius:10}}
      />
      <Text style={{position:'absolute', color:'white', marginLeft: 125, marginTop: 10, fontWeight: 'bold', fontSize: 15,
                    width: 100, height: 25, backgroundColor: '#74b9ff', textAlign: 'center', borderRadius: 20,}}>{giave}</Text>
      <Text onPress={() => navigation.navigate('Chi tiết chuyến bay 2')} style={{color:'black', marginLeft:20, marginTop: 10, fontWeight: 'bold', fontSize: 15}}>
        {diadiem}
      </Text>
    </View>
  );
  const VietJetList = chuyenbay.VietjetAir;
  const renderItem2 = ({ item }) => (
    <Item2 diadiem={item.diadiem} giave={item.giave} anh={item.anh} /> 
  );

  const Item3 = ({ diadiem, giave, anh }) => (
    <View style={{marginTop:5}}>
      <Image
        source={{uri:anh}} 
        style={{height:150, width:220, marginLeft:15, borderRadius:10}}
      />
      <Text style={{position:'absolute', color:'white', marginLeft: 125, marginTop: 10, fontWeight: 'bold', fontSize: 15,
                    width: 100, height: 25, backgroundColor: '#74b9ff', textAlign: 'center', borderRadius: 20,}}>{giave}</Text>
      <Text onPress={() => navigation.navigate('Chi tiết chuyến bay 3')} style={{color:'black', marginLeft:20, marginTop: 10, fontWeight: 'bold', fontSize: 15}}>
        {diadiem}
      </Text>
    </View>
  );
  const BamBooList = chuyenbay.BambooAirways;
  const renderItem3 = ({ item }) => (
    <Item3 diadiem={item.diadiem} giave={item.giave} anh={item.anh} /> 
  );

  const Item4 = ({ diadiem, giave, anh }) => (
    <View style={{marginTop:5}}>
      <Image
        source={{uri:anh}} 
        style={{height:150, width:220, marginLeft:15, borderRadius:10}}
      />
      <Text style={{position:'absolute', color:'white', marginLeft: 125, marginTop: 10, fontWeight: 'bold', fontSize: 15,
                    width: 100, height: 25, backgroundColor: '#74b9ff', textAlign: 'center', borderRadius: 20,}}>{giave}</Text>
      <Text onPress={() => navigation.navigate('Chi tiết chuyến bay 4')} style={{color:'black', marginLeft:20, marginTop: 10, fontWeight: 'bold', fontSize: 15}}>
        {diadiem}
      </Text>
    </View>
  );
  const VNAirLinesList = chuyenbay.VietnamAirlines;
  const renderItem4 = ({ item }) => (
    <Item4 diadiem={item.diadiem} giave={item.giave} anh={item.anh} /> 
  );

  return (
    <View style={{ flex: 1,backgroundColor:'white', paddingBottom: 10 }}>
      <ScrollView>
        <Text style={{color:'#130f40',fontSize:20,fontWeight:'bold',marginLeft:15,marginTop:10}}>Các điểm đến cực hấp dẫn</Text>
        <SafeAreaView style={{marginTop:10}}>
          <FlatList
            data={ddList}
            renderItem={renderItem1}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={true}
          //scrollEnabled={false}
          />
        </SafeAreaView>
        <Text style={{color:'#130f40',fontSize:20,fontWeight:'bold',marginLeft:15,marginTop:10}}>Ưu đãi đón xuân cùng VietJet Air</Text>
        <SafeAreaView style={{marginTop:10}}>
          <FlatList
            data={VietJetList}
            renderItem={renderItem2}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={true}
          //scrollEnabled={false}
          />
        </SafeAreaView>
        <Text style={{color:'#130f40',fontSize:20,fontWeight:'bold',marginLeft:15,marginTop:10}}>Ưu đãi đón xuân cùng Bamboo Airways</Text>
        <SafeAreaView style={{marginTop:10}}>
          <FlatList
            data={BamBooList}
            renderItem={renderItem3}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={true}
          //scrollEnabled={false}
          />
        </SafeAreaView>
        <Text style={{color:'#130f40',fontSize:20,fontWeight:'bold',marginLeft:15,marginTop:10}}>Ưu đãi đón xuân cùng Vietnam Airlines</Text>
        <SafeAreaView style={{marginTop:10}}>
          <FlatList
            data={VNAirLinesList}
            renderItem={renderItem4}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={true}
          //scrollEnabled={false}
          />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

function Chitietchuyenbay1({  navigation }) {
  const Item5 = ({ thoigian, giagoc, giakhuyenmai, diadiem, anh, hangbay }) => (
    <View style={{marginTop:5, marginLeft: 20, borderWidth: 1, borderRadius: 10, borderColor: '#74b9ff', height: 150, width: 355}}>
      <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 15}}>
        <View>
          <Text style={{fontSize: 20, fontWeight: "bold", color: "black"}}>{thoigian}</Text>
          <Text style={{fontSize: 15}}>{diadiem}</Text>
        </View>
        <View style={{marginLeft: 30}}>
          <Text style={{fontSize: 15, textDecorationLine: "line-through"}}>{giagoc}</Text>
          <Text onPress={() => navigation.navigate('Chi tiết vé 1')} style={{fontSize: 20, color: "red", fontWeight: 'bold'}}>{giakhuyenmai}
            <Text style={{fontSize: 15, color: "black"}}>/khách</Text>
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Image
          source={{uri:anh}} 
          style={{height: 50, width: 150, marginLeft:15}}
        />
        <Text style={{fontSize: 15, paddingTop: 10, fontWeight: "bold", color: "black", marginLeft: 20}}>{hangbay}</Text>
      </View>
    </View>
  );
  const Chitiet1 = chuyenbay.Chitiet1;
  const renderItem5 = ({ item }) => (
    <Item5 thoigian={item.thoigian} giagoc={item.giagoc} giakhuyenmai={item.giakhuyenmai} diadiem={item.diadiem} anh={item.anh} hangbay={item.hangbay} /> 
  );

  return (
    <View style={{ flex: 1, backgroundColor:'white', paddingBottom: 50}}>
      <Text style={{color:'#130f40',fontSize:20,fontWeight:'bold',marginTop:10, textAlign: 'center'}}>TP.HCM - Buôn Ma Thuột</Text>
        <SafeAreaView style={{marginTop:10}}>
          <FlatList
            data={Chitiet1}
            renderItem={renderItem5}
            keyExtractor={item => item.id}
            horizontal={false}
          //showsHorizontalScrollIndicator={true}
          //scrollEnabled={false}
          />
        </SafeAreaView>
    </View>
  );
}

function Chitietchuyenbay2({  navigation }) {
  const Item6 = ({ thoigian, giagoc, giakhuyenmai, diadiem, anh, hangbay }) => (
    <View style={{marginTop:5, marginLeft: 20, borderWidth: 1, borderRadius: 10, borderColor: '#74b9ff', height: 150, width: 355}}>
      <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 15}}>
        <View>
          <Text style={{fontSize: 20, fontWeight: "bold", color: "black"}}>{thoigian}</Text>
          <Text style={{fontSize: 15}}>{diadiem}</Text>
        </View>
        <View style={{marginLeft: 30}}>
          <Text style={{fontSize: 15, textDecorationLine: "line-through"}}>{giagoc}</Text>
          <Text onPress={() => navigation.navigate('Chi tiết vé 2')} style={{fontSize: 20, color: "orange", fontWeight: 'bold'}}>{giakhuyenmai}
            <Text style={{fontSize: 15, color: "black"}}>/khách</Text>
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Image
          source={{uri:anh}} 
          style={{height: 50, width: 150, marginLeft:15}}
        />
        <Text style={{fontSize: 15, paddingTop: 10, fontWeight: "bold", color: "black", marginLeft: 20}}>{hangbay}</Text>
      </View>
    </View>
  );
  const Chitiet2 = chuyenbay.Chitiet2;
  const renderItem6 = ({ item }) => (
    <Item6 thoigian={item.thoigian} giagoc={item.giagoc} giakhuyenmai={item.giakhuyenmai} diadiem={item.diadiem} anh={item.anh} hangbay={item.hangbay} /> 
  );

  return (
    <View style={{ flex: 1, backgroundColor:'white', paddingBottom: 50}}>
      <Text style={{color:'#130f40',fontSize:20,fontWeight:'bold',marginTop:10, textAlign: 'center'}}>TP.HCM - Hà Nội</Text>
        <SafeAreaView style={{marginTop:10}}>
          <FlatList
            data={Chitiet2}
            renderItem={renderItem6}
            keyExtractor={item => item.id}
            horizontal={false}
          //showsHorizontalScrollIndicator={true}
          //scrollEnabled={false}
          />
        </SafeAreaView>
    </View>
  );
}

function Chitietchuyenbay3({  navigation }) {
  const Item7 = ({ thoigian, giagoc, giakhuyenmai, diadiem, anh, hangbay }) => (
    <View style={{marginTop:5, marginLeft: 20, borderWidth: 1, borderRadius: 10, borderColor: '#74b9ff', height: 150, width: 355}}>
      <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 15}}>
        <View>
          <Text style={{fontSize: 20, fontWeight: "bold", color: "black"}}>{thoigian}</Text>
          <Text style={{fontSize: 15}}>{diadiem}</Text>
        </View>
        <View style={{marginLeft: 30}}>
          <Text style={{fontSize: 15, textDecorationLine: "line-through"}}>{giagoc}</Text>
          <Text onPress={() => navigation.navigate('Chi tiết vé 3')} style={{fontSize: 20, color: "orange", fontWeight: 'bold'}}>{giakhuyenmai}
            <Text style={{fontSize: 15, color: "black"}}>/khách</Text>
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Image
          source={{uri:anh}} 
          style={{height: 50, width: 150, marginLeft:15}}
        />
        <Text style={{fontSize: 15, paddingTop: 10, fontWeight: "bold", color: "black", marginLeft: 20}}>{hangbay}</Text>
      </View>
    </View>
  );
  const Chitiet3 = chuyenbay.Chitiet3;
  const renderItem7 = ({ item }) => (
    <Item7 thoigian={item.thoigian} giagoc={item.giagoc} giakhuyenmai={item.giakhuyenmai} diadiem={item.diadiem} anh={item.anh} hangbay={item.hangbay} /> 
  );

  return (
    <View style={{ flex: 1, backgroundColor:'white', paddingBottom: 50}}>
      <Text style={{color:'#130f40',fontSize:20,fontWeight:'bold',marginTop:10, textAlign: 'center'}}>Hà Nội - Huế</Text>
        <SafeAreaView style={{marginTop:10}}>
          <FlatList
            data={Chitiet3}
            renderItem={renderItem7}
            keyExtractor={item => item.id}
            horizontal={false}
          //showsHorizontalScrollIndicator={true}
          //scrollEnabled={false}
          />
        </SafeAreaView>
    </View>
  );
}

function Chitietchuyenbay4({  navigation }) {
  const Item8 = ({ thoigian, giagoc, giakhuyenmai, diadiem, anh, hangbay }) => (
    <View style={{marginTop:5, marginLeft: 20, borderWidth: 1, borderRadius: 10, borderColor: '#74b9ff', height: 150, width: 355}}>
      <View style={{flexDirection: 'row', marginTop: 15, marginLeft: 15}}>
        <View>
          <Text style={{fontSize: 20, fontWeight: "bold", color: "black"}}>{thoigian}</Text>
          <Text style={{fontSize: 15}}>{diadiem}</Text>
        </View>
        <View style={{marginLeft: 30}}>
          <Text style={{fontSize: 15, textDecorationLine: "line-through"}}>{giagoc}</Text>
          <Text onPress={() => navigation.navigate('Chi tiết vé 4')} style={{fontSize: 20, color: "orange", fontWeight: 'bold'}}>{giakhuyenmai}
            <Text style={{fontSize: 15, color: "black"}}>/khách</Text>
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Image
          source={{uri:anh}} 
          style={{height: 50, width: 150, marginLeft:15}}
        />
        <Text style={{fontSize: 15, paddingTop: 10, fontWeight: "bold", color: "black", marginLeft: 20}}>{hangbay}</Text>
      </View>
    </View>
  );
  const Chitiet4 = chuyenbay.Chitiet4;
  const renderItem8 = ({ item }) => (
    <Item8 thoigian={item.thoigian} giagoc={item.giagoc} giakhuyenmai={item.giakhuyenmai} diadiem={item.diadiem} anh={item.anh} hangbay={item.hangbay} /> 
  );

  return (
    <View style={{ flex: 1, backgroundColor:'white', paddingBottom: 50}}>
      <Text style={{color:'#130f40',fontSize:20,fontWeight:'bold',marginTop:10, textAlign: 'center'}}>TP.HCM - Hải Phòng</Text>
        <SafeAreaView style={{marginTop:10}}>
          <FlatList
            data={Chitiet4}
            renderItem={renderItem8}
            keyExtractor={item => item.id}
            horizontal={false}
          //showsHorizontalScrollIndicator={true}
          //scrollEnabled={false}
          />
        </SafeAreaView>
    </View>
  );
}

function Chitietve1({  navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor:'white'}}>
      <ScrollView>
      <Text style={{color:'#130f40',fontSize:20,fontWeight:'bold',marginTop:10, textAlign: 'center'}}>TP HCM - Buôn Ma Thuột</Text>
        <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 30}}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 17, color: 'black' }}>12:25</Text>
            <Text style={{fontSize: 15}}>7 thg 1</Text>
            <Text style={{fontWeight: 'bold', fontSize: 17, color: 'black', marginTop: 480 }}>13:50</Text>
            <Text style={{fontSize: 15}}>7 thg 1</Text>
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 17, color: 'black' }}>TP HCM (SGN)</Text>
            <Text style={{fontSize: 15}}>Sân bay Tân Sơn Nhất</Text>
            <View style={{marginTop: 10, borderWidth: 1, borderColor: '#74b9ff', borderRadius: 10, width: 260, height: 460, paddingLeft: 10, paddingTop: 10}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', fontSize: 17, color: 'black'}}>VietJet Air</Text>
                <Image
                  source={{ uri:'http://aviacheap.ru/wp-content/uploads/lowcosters/VietJet-Air.jpg'}} 
                  style={{height: 20, width: 100, marginLeft: 30}}
                />
              </View>
              <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 17, color: 'black'}}>Số hiệu: VJ-112 Promo</Text>
              <Text style={{marginTop: 10, fontSize: 15}}>7kg hành lý xách tay</Text>
              <Text style={{marginTop: 10, fontSize: 15}}>Hành lý 0kg (mua thêm khi đặt chỗ)</Text>
              <Text style={{marginTop: 10, fontSize: 15}}>In-flight entertainment not available</Text>
              <Text style={{marginTop: 10, fontSize: 15}}>WiFi not available</Text>
              <Text style={{marginTop: 10, fontSize: 15}}>Power/USB port not available</Text>
              <Text style={{marginTop: 10, fontSize: 15}}>Airbus A321 Sơ đồ ghế ngồi 3-3</Text>
              <Text style={{marginTop: 10, fontSize: 15}}>Khoảng cách ghế 28 inch (tiêu chuẩn)</Text>
              <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 17, color: 'black'}}>Chi tiết giá</Text>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: 120}}>
                  <Text style={{marginTop: 10, fontSize: 15, color: 'black'}}>Giá vé Người lớn cơ bản (x1)</Text>
                  <Text style={{marginTop: 10, fontSize: 15, color: 'black'}}>Thuế</Text>
                  <Text style={{marginTop: 10, fontSize: 15, color: 'black'}}>Giá khuyến mãi</Text>
                </View>
                <View style={{marginLeft: 20}}>
                  <Text style={{marginTop: 10, fontSize: 15}}>634.900 VND</Text>
                  <Text style={{marginTop: 28, fontSize: 15}}>Đã bao gồm</Text>
                  <Text style={{marginTop: 10, fontSize: 15}}>466.900</Text>
                </View>
              </View>
            </View>
            <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 17, color: 'black' }}>Buôn Ma Thuột (BMV)</Text>
            <Text style={{fontSize: 15}}>Sân bay Buôn Ma Thuột</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function Chitietve2({  navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor:'white'}}>
      <ScrollView>
        <Text style={{color:'#130f40',fontSize:20,fontWeight:'bold',marginTop:10, textAlign: 'center'}}>TP HCM - Hà Nội</Text>
        <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 30}}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 17, color: 'black' }}>22:15</Text>
            <Text style={{fontSize: 15}}>6 thg 1</Text>
            <Text style={{fontWeight: 'bold', fontSize: 17, color: 'black', marginTop: 480 }}>00:25</Text>
            <Text style={{fontSize: 15}}>7 thg 1</Text>
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 17, color: 'black' }}>TP HCM (SGN)</Text>
            <Text style={{fontSize: 15}}>Sân bay Tân Sơn Nhất</Text>
            <View style={{marginTop: 10, borderWidth: 1, borderColor: '#74b9ff', borderRadius: 10, width: 260, height: 460, paddingLeft: 10, paddingTop: 10}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', fontSize: 17, color: 'black'}}>VietJet Air</Text>
                <Image
                  source={{ uri:'http://aviacheap.ru/wp-content/uploads/lowcosters/VietJet-Air.jpg'}} 
                  style={{height: 20, width: 100, marginLeft: 30}}
                />
              </View>
              <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 17, color: 'black'}}>Số hiệu: VJ-162 Promo</Text>
              <Text style={{marginTop: 10, fontSize: 15}}>7kg hành lý xách tay</Text>
              <Text style={{marginTop: 10, fontSize: 15}}>Hành lý 0kg (mua thêm khi đặt chỗ)</Text>
              <Text style={{marginTop: 10, fontSize: 15}}>In-flight entertainment not available</Text>
              <Text style={{marginTop: 10, fontSize: 15}}>WiFi not available</Text>
              <Text style={{marginTop: 10, fontSize: 15}}>Power/USB port not available</Text>
              <Text style={{marginTop: 10, fontSize: 15}}>Airbus A321 Sơ đồ ghế ngồi 3-3</Text>
              <Text style={{marginTop: 10, fontSize: 15}}>Khoảng cách ghế 28 inch (tiêu chuẩn)</Text>
              <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 17, color: 'black'}}>Chi tiết giá</Text>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: 120}}>
                  <Text style={{marginTop: 10, fontSize: 15, color: 'black'}}>Giá vé Người lớn cơ bản (x1)</Text>
                  <Text style={{marginTop: 10, fontSize: 15, color: 'black'}}>Thuế</Text>
                  <Text style={{marginTop: 10, fontSize: 15, color: 'black'}}>Giá khuyến mãi</Text>
                </View>
                <View style={{marginLeft: 20}}>
                  <Text style={{marginTop: 10, fontSize: 15}}>503.900 VND</Text>
                  <Text style={{marginTop: 28, fontSize: 15}}>Đã bao gồm</Text>
                  <Text style={{marginTop: 10, fontSize: 15}}>499.900</Text>
                </View>
              </View>
            </View>
            <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 17, color: 'black' }}>Hà Nội (HAN)</Text>
            <Text style={{fontSize: 15}}>Sân bay Nội Bài</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function Chitietve3({  navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor:'white'}}>
      <ScrollView>
      <Text style={{color:'#130f40',fontSize:20,fontWeight:'bold',marginTop:10, textAlign: 'center'}}>Hà Nội - Huế</Text>
        <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 30}}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 17, color: 'black' }}>22:15</Text>
            <Text style={{fontSize: 15}}>7 thg 1</Text>
            <Text style={{fontWeight: 'bold', fontSize: 17, color: 'black', marginTop: 480 }}>00:25</Text>
            <Text style={{fontSize: 15}}>8 thg 1</Text>
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 17, color: 'black' }}>Hà Nội (HAN)</Text>
            <Text style={{fontSize: 15}}>Sân bay Nội Bài</Text>
            <View style={{marginTop: 10, borderWidth: 1, borderColor: '#74b9ff', borderRadius: 10, width: 260, height: 460, paddingLeft: 10, paddingTop: 10}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', fontSize: 17, color: 'black'}}>Bamboo Airways</Text>
                <Image
                  source={{ uri:'https://aeronautica.online/wp-content/uploads/2019/01/Bamboo-Airways-logo-1920x600.jpg'}} 
                  style={{height: 30, width: 100}}
                />
              </View>
              <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 17, color: 'black'}}>Số hiệu: QH-226</Text>
              <Text style={{marginTop: 10, fontSize: 15}}>8kg hành lý xách tay</Text>
              <Text style={{marginTop: 10, fontSize: 15}}>Hành lý 0kg (mua thêm khi đặt chỗ)</Text>
              <Text style={{marginTop: 10, fontSize: 15}}>In-flight entertainment not available</Text>
              <Text style={{marginTop: 10, fontSize: 15}}>WiFi not available</Text>
              <Text style={{marginTop: 10, fontSize: 15}}>Power/USB port not available</Text>
              <Text style={{marginTop: 10, fontSize: 15}}>Sơ đồ ghế ngồi 2-2-2</Text>
              <Text style={{marginTop: 10, fontSize: 15}}>Khoảng cách ghế 28 inch (tiêu chuẩn)</Text>
              <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 17, color: 'black'}}>Chi tiết giá</Text>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: 120}}>
                  <Text style={{marginTop: 10, fontSize: 15, color: 'black'}}>Giá vé Người lớn cơ bản (x1)</Text>
                  <Text style={{marginTop: 10, fontSize: 15, color: 'black'}}>Thuế</Text>
                  <Text style={{marginTop: 10, fontSize: 15, color: 'black'}}>Giá khuyến mãi</Text>
                </View>
                <View style={{marginLeft: 20}}>
                  <Text style={{marginTop: 10, fontSize: 15}}>466.900 VND</Text>
                  <Text style={{marginTop: 28, fontSize: 15}}>Đã bao gồm</Text>
                  <Text style={{marginTop: 10, fontSize: 15}}>353.600</Text>
                </View>
              </View>
            </View>
            <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 17, color: 'black' }}>Thừa Thiên Huế (HUI)</Text>
            <Text style={{fontSize: 15}}>Sân bay Phú Bài</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function Chitietve4({  navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor:'white'}}>
      <ScrollView>
      <Text style={{color:'#130f40',fontSize:20,fontWeight:'bold',marginTop:10, textAlign: 'center'}}>TP HCM - Hải Phòng</Text>
        <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 30}}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 17, color: 'black' }}>15:40</Text>
            <Text style={{fontSize: 15}}>8 thg 1</Text>
            <Text style={{fontWeight: 'bold', fontSize: 17, color: 'black', marginTop: 480 }}>17:50</Text>
            <Text style={{fontSize: 15}}>8 thg 1</Text>
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 17, color: 'black' }}>TP HCM (SGN)</Text>
            <Text style={{fontSize: 15}}>Sân bay Tân Sơn Nhất</Text>
            <View style={{marginTop: 10, borderWidth: 1, borderColor: '#74b9ff', borderRadius: 10, width: 260, height: 460, paddingLeft: 10, paddingTop: 10}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', fontSize: 17, color: 'black'}}>Vietnam Airlines</Text>
                <Image
                  source={{ uri:'https://pluspng.com/img-png/vietnam-airlines-logo-vector-png-vietnam-airlines-logo-renewed-company-logo-2250.png'}} 
                  style={{height: 30, width: 100, marginLeft: 10}}
                />
              </View>
              <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 17, color: 'black'}}>Số hiệu: VN5311</Text>
              <Text style={{marginTop: 10, fontSize: 15}}>10kg hành lý xách tay</Text>
              <Text style={{marginTop: 10, fontSize: 15}}>Hành lý 0kg (mua thêm khi đặt chỗ)</Text>
              <Text style={{marginTop: 10, fontSize: 15}}>In-flight entertainment not available</Text>
              <Text style={{marginTop: 10, fontSize: 15}}>WiFi not available</Text>
              <Text style={{marginTop: 10, fontSize: 15}}>Power/USB port not available</Text>
              <Text style={{marginTop: 10, fontSize: 15}}>Sơ đồ ghế ngồi 4-4</Text>
              <Text style={{marginTop: 10, fontSize: 15}}>Khoảng cách ghế 28 inch (tiêu chuẩn)</Text>
              <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 17, color: 'black'}}>Chi tiết giá</Text>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: 120}}>
                  <Text style={{marginTop: 10, fontSize: 15, color: 'black'}}>Giá vé Người lớn cơ bản (x1)</Text>
                  <Text style={{marginTop: 10, fontSize: 15, color: 'black'}}>Thuế</Text>
                  <Text style={{marginTop: 10, fontSize: 15, color: 'black'}}>Giá khuyến mãi</Text>
                </View>
                <View style={{marginLeft: 20}}>
                  <Text style={{marginTop: 10, fontSize: 15}}>534.900 VND</Text>
                  <Text style={{marginTop: 28, fontSize: 15}}>Đã bao gồm</Text>
                  <Text style={{marginTop: 10, fontSize: 15}}>475.600</Text>
                </View>
              </View>
            </View>
            <Text style={{marginTop: 10, fontWeight: 'bold', fontSize: 17, color: 'black' }}>Hải Phòng (HPH)</Text>
            <Text style={{fontSize: 15}}>Sân bay Cát Bi</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default  function Maybay()  {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Thông tin chuyến bay" component={Chuyenbay} />
        <Stack.Screen name="Chi tiết chuyến bay 1" component={Chitietchuyenbay1} />
        <Stack.Screen name="Chi tiết chuyến bay 2" component={Chitietchuyenbay2} />
        <Stack.Screen name="Chi tiết chuyến bay 3" component={Chitietchuyenbay3} />
        <Stack.Screen name="Chi tiết chuyến bay 4" component={Chitietchuyenbay4} />
        <Stack.Screen name="Chi tiết vé 1" component={Chitietve1} />
        <Stack.Screen name="Chi tiết vé 2" component={Chitietve2} />
        <Stack.Screen name="Chi tiết vé 3" component={Chitietve3} />
        <Stack.Screen name="Chi tiết vé 4" component={Chitietve4} />
      </Stack.Navigator>
    );
  }
 