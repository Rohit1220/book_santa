import React from "react";
import { View ,TextInput , TouchableOpacity, Alert, StyleSheet } from "react-native";
import MyHeader from "../components/MyHeader";
import db from '../config';
import firebase from 'firebase';

/*
AIzaSyBqT19La9hCVS0LzePI7KXWakc80Iz3hEY 
*/


export default class BookRequest extends React.Component{
    constructor(){
        super();
        this.state={
            bookName : "",
            reasonToRequest:"",
            userId: firebase.auth().currentUser.email
        }
    }

    createUniqueId(){
        return Math.random().toString(36).substring(7);
    }

    addRequest = (bookName, reasonToRequest)=>{
        var randomRequestId = this.createUniqueId();
        db.collection('requested_books').add({
            'user_id' : this.state.userId,
            "book_name" : bookName,
            "reason_to_request" : reasonToRequest,
            "request_id" : randomRequestId
        })

        this.setState({
            bookName : "",
            reasonToRequest : "",
        })

        return Alert.alert("Book requested sucessfully")
    }

    render(){
        return(
            <View style={{flex:1}}>
                <MyHeader title="Request Book" navigation = {this.props.navigation}/>
                <TextInput placeholder = {"Enter Book Name"} onChangeText = {(text)=>{this.setState({bookName:text})}}/>
                <TextInput placeholder = {"Reson To Request"} onChangeText = {(text)=>{this.setState({reasonToRequest:text})}}/>
                <TouchableOpacity onPress = {()=>{this.addRequest(this.state.bookName, this.state.reasonToRequest)}}
                style = {styles.button}>
                    <Text>
                        Request
                    </Text>
                </TouchableOpacity>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        justifyContent :'center',
        alignItems:'center',
        height:50,
        backgroundColor:'#ff5722',
        borderRadius:10

    }
})