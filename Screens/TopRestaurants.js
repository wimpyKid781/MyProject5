import React,{Component} from 'react'
import {View, TouchablOpacity,Text} from 'react-native'
export default class TopRestaurants extends Component {
    constructor(){
        super();
        this.state({
            text: ''
        })
    }
    render(){
        return(
            <View>
                <MyHeader />
                <Input 
                style = {{marginTop:20}}
                label = {'Restaurant Genre'}
                containerStyle = {{marginTop: 20}}
                placeholder = {'What type of food would you like to eat?'}
                onChangeText={(text)=>{
                    this.setState({
                        text: text
                    })
                }}
                />
            </View>
        )
    }
}