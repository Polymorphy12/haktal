import React, { Component } from "react";
import {Text, View, Button} from "react-native";

export default class secondPage extends Component {

    render() {
        const {navigation } = this.props;
        return (

            <View
                style={{
                    flex: 1,
                    backgroundColor: "grey",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >

                <Text> secondPage </Text>
                <Button
                
                title = "first"
                    onPress={()  => {
                        navigation.navigate("Home");
                    }}
                    color="#fff"

                />

            </View>
        );
    }

}
