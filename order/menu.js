import React, { Component } from "react";
import { Text, View, Button, ImageBackground, TouchableOpacity, ScrollView, FlatList, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default class Menu extends Component {
    state = {
        data: [1, 2, 3, 4, 5, 6,7,8]
      }
    
      _renderItem = ({item}) => (
        <TouchableOpacity style = {background}
        onPress={() => {
            this.props.navigation.navigate("menuDetails");
            console.log(this.props);
          }}>
            <Image style={{ 
              width: 80, 
              height : 86}}> 
            </Image>
            <View style = {foodInfoContainer}>
                <Text style={foodName}>음식 이름</Text>
                <Text style={foodPrice}>{item}원</Text>
            </View>
        </TouchableOpacity>
      );

      handleIncrease = () => {
        this.setState({
          data: this.state.data.concat( this.state.data.length + 1 )
        });
      }

      render() {

        return (
          <View
            style= {{
              flex: 1
            }}
          >
            <View style = {navBar}>
              <Text style={titleText}>학식탈출</Text>
            </View>
            
            
            
            <FlatList 
              data={this.state.data}
              renderItem={this._renderItem}
              
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


const background = {
  height: 160,
  borderRadius: 4,
  backgroundColor: '#fff',
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "#ff1d30",
  flexDirection: 'row',
  alignItems: 'center'
};

const listView = {
//   // flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center'
}

const foodInfoContainer = {
    margin: 35
}

const foodName = {
  
  fontFamily: "S-CoreDream-5",
  fontSize: 17,
  fontWeight: "500",
  fontStyle: "normal",
  letterSpacing: 0,
  color: "#273951"
}

const foodPrice = {
  fontFamily: "S-CoreDream-5",
  fontSize: 13,
  fontWeight: "500",
  fontStyle: "normal",
  letterSpacing: 0,
  color: "#a2a9b3"
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