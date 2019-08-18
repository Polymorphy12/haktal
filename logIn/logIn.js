import React, { Component } from "react";
import { TouchableOpacity, Text, View, Button, TextInput, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class logIn extends Component {
    render() {
        const {navigation } = this.props;
        return (
            <View
                style= {{
                    flex: 1
                }}
            >
                <ScrollView
                    
                    contentContainerStyle={{
                        flex: 1,
                        backgroundColor: "white",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: -1
                    }}
                >
                    <Text style={layer}> 학식탈출 </Text>
                    <Text style ={loginStyle}>로그인</Text>
                    <TextInput
                        style={email}
                        placeholder= "email"
                        onChangeText={(e_mail) => this.setState({e_mail})}
                    />

                    {/* 
                        Placeholder : TextInput의 힌트
                    */}
                    <TextInput
                        style={password}
                        placeholder= "password"
                        onChangeText={(pass_word) => this.setState({pass_word})}
                    />
                    {/* <Button
                        onPress={() => {
                            navigation.navigate("restaurantGrid");
                        }}
                        title="Press Me"
                        /> */}
                        
                </ScrollView>
                <View>
                    <TouchableOpacity
                        style={orderButton}
                        onPress={() => {
                            navigation.navigate("restaurantGrid");
                        }}
                    >
                        <Text style={letsGetStarted}>점심/저녁 주문하기!</Text>
                    </TouchableOpacity>
                </View>
                
                
            </View>
        );
    }
}


const layer = {
  fontFamily: "SCDream6",
  fontSize: 20,
  fontWeight: "bold",
  fontStyle: "normal",
  letterSpacing: -0.53,
  textAlign: "center",
  color: "#ff1d30",
  marginBottom: 73
};

const loginStyle = {
  fontFamily: "AppleSDGothicNeo",
  fontSize: 30,
  fontWeight: "800",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "center",
  color: "#3c2123",
  marginBottom: 46
};

const email = {
    fontFamily: "Avenir",
    fontSize: 25,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#b9c2ce"
  };

  const password = {
    fontFamily: "Avenir",
    fontSize: 25,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#b9c2ce"
  };


  const orderButton = {
    height: 70,
    //opacity: 0.51,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff1d30"
    
  };

  const letsGetStarted = {
    fontFamily: "SCDream6",
    fontSize: 19,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "white"
  };
