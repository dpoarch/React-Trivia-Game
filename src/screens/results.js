import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { onPlayAgain } from '../actions'


class Results extends React.Component {

    onPlayAgainButton() {
        const { navigation } = this.props;
        this.props.onPlayAgain({ navigation })
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={{ alignItems: "center", justifyContent: "center", marginBottom: 20 }} >
                    <Text style={{ fontWeight: "bold", fontSize: 20 }} >You Scored {"\n"} {this.props.score}/10 </Text>
                </View>

                {
                    this.props.array.map((y) => {
                        return (
                            <View style={{ flexDirection: "row", margin: 5 }} >
                                <Text style={{ fontSize: 15, fontWeight: "bold" }}>{y[0]} - </Text>
                                <Text style={{ fontSize: 15 }}>{y[1]}</Text>
                            </View>);
                    })
                }
                <View style={{ alignItems: "center", marginTop: 20 }}>
                    <TouchableHighlight onPress={() => this.onPlayAgainButton()} >
                        <Text style={{ fontSize: 25 }}>PLAY AGAIN?</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        );
    }
}
const mapStateToProps = ({ question }) => {
    const { data, i, array, score } = question
    return { data, i, array, score }
}
export default connect(mapStateToProps, {
    onPlayAgain
})(Results);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0E0E0',
        marginTop: 20
    },
});
