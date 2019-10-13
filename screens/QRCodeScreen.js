import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import QRCodeScanner from 'react-native-qrcode-scanner';


class QRCodeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <QRCodeScanner
        onRead={this.onSuccess}
        flashMode={QRCodeScanner.Constants.FlashMode.torch}      
        topContent={
          <Text style={styles.centerText}>
            Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
                <Button title="go back to Home Screen" onPress={() => this.props.navigation.goBack()} />
                
            </View>
        );
    }
}
export default QRCodeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});