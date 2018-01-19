import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { getAllData, getFirstData, clickButtonTrue, clickButtonFalse } from '../actions'


class Questions extends React.Component {


    componentWillMount() {
        const { navigation } = this.props;
        this.props.getFirstData({ navigation });
        // console.log(Object.values(this.props.data))
    }

    onClickTrue() {
        const { navigation } = this.props;
        this.props.clickButtonTrue({ navigation });
        // console.log(this.props.i)
        // console.log(this.props.array)

    }

    onClickFalse() {
        const { navigation } = this.props;
        this.props.clickButtonFalse({ navigation });
        // console.log(this.props.i)
        // console.log(this.props.array)

    }

   

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={{ alignItems: "center", marginTop: 20 }}>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>{Object.values(this.props.data)[0]}</Text>
                </View>
                <View style={{ alignItems: "center", marginTop: 120, borderWidth: 1, height: 250, padding: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>{Object.values(this.props.data)[3]}</Text>
                </View>

                <View style={{ alignItems: "center", justifyContent: "center", marginTop: 80, flexDirection: "row" }}>
                    <TouchableHighlight style={{ borderWidth: 1, width: 100, alignItems: "center" }} onPress={() => this.onClickTrue()} >
                        <Text style={{ fontSize: 25 }}>TRUE</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ borderWidth: 1, width: 100, marginLeft: 20, alignItems: "center" }} onPress={() => this.onClickFalse()} >
                        <Text style={{ fontSize: 25 }}>FALSE</Text>
                    </TouchableHighlight>
                </View>
            </View >
        );
    }
}

const mapStateToProps = ({ question }) => {
    const { data, i, array } = question
    return { data, i, array }
}
export default connect(mapStateToProps, {
    getAllData,
    getFirstData,
    clickButtonTrue,
    clickButtonFalse
})(Questions);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0E0E0',
        padding: 20
    },
});
