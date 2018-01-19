import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const sample = "In Undertale, having a & quot; Fun Value & quot; set to 56 - 57 will play the & quot; Wrong Number Song Call & quot;.";


export default class Intro extends React.Component {


    decodeHTMLEntities(str) {
        str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
        str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');


        return str;
    }

    navigate() {
        this.props.navigation.navigate("Questions")
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ alignItems: "center", marginTop: 20 }}>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>Welcome to the {"\n"}Trivia Challenge!  </Text>
                </View>
                <View style={{ alignItems: "center", marginTop: 150 }}>
                    <Text style={{ fontSize: 25 }}>You will be presented {"\n"} with 10 True or False {"\n"} questions. </Text>
                </View>
                <View style={{ alignItems: "center", marginTop: 100 }}>
                    <Text style={{ fontSize: 25 }}>Can you score 100%?</Text>
                </View>
                <View style={{ alignItems: "center", marginTop: 150 }}>
                    <TouchableHighlight onPress={() => this.navigate()} >
                        <Text style={{ fontSize: 25 }}>BEGIN</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0E0E0',
    },
});
