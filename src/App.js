import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from './actions';

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                    style={
                        [styles.button, {backgroundColor: this.props.color}]
                    }
                    onPress={() => {
                        this.props.color === 'red' 
                            ? this.props.changeButtonColor('green')
                            : this.props.changeButtonColor('red')
                    }}
                >
                    <Text style={styles.text}> Press me! </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        alignSelf: 'center',
        alignItems: 'center',
        height: 50,
        width: 250,
        padding: 15,
        borderRadius: 10,
    },
    text: {
        color: 'white'
    }
});

function mapDispatchToProps(dispatch) 
{
        return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {
        return{
                color: state.buttonColor
        }
}, mapDispatchToProps)(App);
