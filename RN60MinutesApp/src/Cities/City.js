import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native'

import { colors } from '../theme'

export default class City extends React.Component{
    static navigationOptions = (props) => {
        console.log('props:', props)
        return {
            title: props.navigation.state.params.city.city,
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: '400'
            }
        }      
    }

    state = {
        name: '',
        info: ''
    }

    onChangeText = (key, value) => {
        this.setState({
            [key]: value
        })
    }
    addLocation = () => {
        if(this.state.name ==='' || this.state.info ==='') return
        const { city } = this.props.navigation.state.params
        const location = {
            name: this.state.name,
            info: this.state.info
        }
        this.props.srceenProps.addLocation(location, city)
        this.setState({
            name: '',
            info: ''
        })
    }

    render(){
        const { city } = this.props.navigation.state.params
        return (
        <View style={{ flex: 1 }}>
        {
            city.locations.map((location, index) => (
                <View>
                    <Text>{location.name}</Text>
                </View>
            )
        
        )
        }
            <TextInput 
            value = {this.state.name}
            placeholder='Location name'
            onChangeText={val => this.onChangeText('name', val)}
            style={styles.input}
            placeholderTextColor='#fff'
            />
             <TextInput 
            value = {this.state.info}
            placeholder='Location name'
            onChangeText={val => this.onChangeText('info', val)}
            style={[styles.input, styles.input2]}
            placeholderTextColor='#fff'
            />
        
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.addLocation}> 
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Add Location</Text>
                </View>

            </TouchableOpacity>
        </View>
        <TextInput />
    </View>
        )
    }
}

const styles = StyleSheet.create({
    locationContainer: {
        padding: 10,
        borderBottomColor: color.primary,
        borderBottomWidth: 2
    },
    name: {},
    info: {},
    input:{
        position: 'absolute',
        height: 50,
        backgroundColor: colors.primary,
        width: '100%',
        bottom: 104,
        left: 0,
        color: '#fff'
    },
    input2: {
        bottom: 52
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%'
    },
    button: {
        height: 50,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    }
})