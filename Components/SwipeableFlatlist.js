import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import {Text,View,StyleSheet} from 'react-native'
import {ListItem} from 'react-native-elements'
import{SwipeListView} from 'react-native-swipe-list-view'
import db from '../config'
export default class SwipableFlatlist extends Component{
    constructor(props){
     super(props);
     this.state = {
         allNotifications:this.props.allNotifications
     }
    }
    onSwipeValueChange=(swipeData)=>{
      var allNotifications = this.state.allNotifications
      const {key,value} = swipeData
if(value<-Dimensions.get('window').width()){
   const newData =[...allNotifications]
   this.updateMarkAsRead(allNotifications[key])
   newData.splice(key,1)
   this.setState({
       allNotifications:newData,
   })
      }
    }
    updateMarkAsRead=(notification)=>{
db.collection(all_notifications).doc(notification.doc_id)
.update({
    'notifications_Status':'read'
})
    }
renderItem=(data)=>{
<ListItem 
leftElement={
    <Icon 
    name = 'book'
    type = 'font-awesome'
    color = '#696969'
    />
}
title ={
    data.item.book_name
}
titleStyle={{
    color: 'black',
    fontWeight: 'bold'
}}
subtitle={
    data.item.message
}
bottomDivider
/>
}
renderHiddenItems=()=>{
    <View style = {styles.rowBack}>
        <View style = {[styles.backRightBtn,styles.backRightBtnRight]}>
         <Text style = {styles.backTextWhite}>
          
         </Text>
        </View>

    </View>
}
    render(){
        return(
            <View style = {styles.container}>
             <SwipeListView 
             disableRightSwipe
             data = {this.state.allNotifications}
             renderItem = {this.renderItem}
             renderHiddenItem = {this.renderHiddenItem}
             rightOpenValue = {-Dimensions.get('window').width}
             previewRowKey = {'0'}
             previewOpenDelay = {3000}
             previewOpenValues={-40}
             onSwipeValueChange = {this.onSwipeValueChange}
             keyExtractor = {(item,index)=>index.toString()}
             />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      flex: 1
    },
    backTextWhite: {
      color: "#FFF",
      fontWeight: "bold",
      fontSize: 15,
      textAlign: "center",
      alignSelf: "flex-start"
    },
    rowBack: {
      alignItems: "center",
      backgroundColor: "#29b6f6",
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingLeft: 15
    },
    backRightBtn: {
      alignItems: "center",
      bottom: 0,
      justifyContent: "center",
      position: "absolute",
      top: 0,
      width: 100
    },
    backRightBtnRight: {
      backgroundColor: "#29b6f6",
      right: 0
    }
  });