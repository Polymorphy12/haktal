import React, { Component } from "react";
import { Text, View, Button, ImageBackground, TouchableOpacity, ScrollView, FlatList, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";


export default class restaurantGrid extends Component {
    
  
  state = {
        data: [1, 2, 3, 4, 5, 6,7,8]
      }
    

      _renderItem = ({item}) => (

        <TouchableOpacity style = {background} 
        onPress={() => {
          this.props.navigation.navigate("menu");
          console.log(this.props);
        }} >
            <Image style={{ 
              width: 80, 
              height : 86}}> 
            </Image>
            
            <Text>배달 금액까지</Text>
            <Text>{item}원</Text>
            <Text>주문인원:{item}/50</Text>
        </TouchableOpacity>
      );

      handleIncrease = () => {
        this.setState({
          data: this.state.data.concat( this.state.data.length + 1 )
        });
      }

      handleDecrease = () => {
      
        this.setState({
          data: this.state.data.splice( this.state.data.length + 1 )
        });
      }

      render() {

        const {navigation } = this.props;

        console.log("render!!!!");
        console.log(this.props);

        return (
          <View
            style= {{
              flex: 1
            }}
          >
            <View style = {navBar}>
              <Text style={titleText}>학식탈출</Text>
            </View>
            
            
            
            <View style = {orderDueContainer}>
                <View style={toggleContainer}>
                  <TouchableOpacity style={toggleLunch} onPress={this.handleIncrease}>
                    <Text>점심</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={toggleDinner} onPress={this.handleDecrease}>
                    <Text>저녁</Text>
                  </TouchableOpacity>
                </View>
              
                <Text style = {orderDue}>점심 주문 마감 시간: 10:30 AM</Text>            
            </View>
            
            <FlatList 
              data={this.state.data}
              renderItem={this._renderItem}
              
              numColumns={3}
              contentContainerStyle={listView}
            />
            <View style = {footer}>
              <TouchableOpacity style = {footerBox}>
                <Text>Menu</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {footerBox}>
                <Text>Location</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {footerBox}>
                <Text>History</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }
}

const titleText = {
  // width: 225.6,
  // height: 25,
  fontFamily: "AppleSDGothicNeo",
  fontSize: 23,
  fontWeight: "800",
  fontStyle: "normal",
  // lineHeight: 25,
  letterSpacing: -0.24,
  textAlign: "center",
  color: "#ffffff"
};

const toggleContainer = {
  marginTop: 20,
flexDirection: 'row',
alignItems: 'center'
}

const toggleLunch = {
  width: 80,
  height: 20,
  borderTopLeftRadius: 100,
  borderBottomLeftRadius: 100,
  backgroundColor: "#ff1d30",
  alignItems: "center",
  justifyContent: "center"
}

const toggleDinner = {
  width: 80,
  height: 20,
  borderTopRightRadius: 100,
  borderBottomRightRadius: 100,
  backgroundColor: "#dcdcdc",
  alignItems: "center",
  justifyContent: "center"

}

const orderDueContainer = {
  alignItems: "center",
  justifyContent: "center"
}

const orderDue = {
  marginTop: 25,
  fontFamily: "S-CoreDream-5",
  fontSize: 20,
  fontWeight: "500",
  fontStyle: "normal",
  letterSpacing: 1.05,
  color: "#000"
}

const background = {
  width: 108,
  height: 160,
  borderRadius: 4,
  backgroundColor: '#fff',
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "#ff1d30",
  margin: 5
};

const listView = {
  // flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}

const navBar = {
  height: 70,
  //opacity: 0.51,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#ff1d30"
};


const footer ={
  height: 80,
  backgroundColor: "rgba(248, 248, 248, 0.98)",
  flexDirection: 'row',
  justifyContent: "center",
  alignItems: "center"
}

const footerBox ={
  margin: 20,
  justifyContent: "center",
  alignItems: "center",
  width: 89.3,
  height: 40,
  backgroundColor: "rgba(185, 202, 210, 0)"
}