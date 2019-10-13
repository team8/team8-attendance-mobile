
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class LoginScreen extends React.Component {

static navigationOptions = {
    header: null
}

    render(){
        return(
            <View style={styles.container}>
                <Button title="Go To QR code"
                onPress={()=>this.props.navigation.navigate('QRCode')}/>

            </View>
        )
    }

    
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});