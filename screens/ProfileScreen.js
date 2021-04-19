import React, { Component } from "react";
import { View,Text,TextInput,StyleSheet,TouchableOpacity, Alert} from "react-native";
import db from '../config';
import firebase from 'firebase';

export default class ProfileScreen extends React.Component{
  constructor(){
    super();
    this.state = {
      FirstName:'',
      LastName:'',
      Address:'',
      Contact:'',
      docId:''
    }
  }

  getUserDetails=()=>{
    var email = firebase.auth().currentUser.email;
    db.collection('users').where('email_id', '==', email).get().then(snapshot => {
      snapshot.forEach(doc=>{var data = doc.data()
      this.setState({
        FirstName : data.first_name,
        LastName : data.last_name,
        Address : data.address,
        Contact : data.contact,
        docId: doc.id
      })})
    })
  }

  componentDidMount(){
    this.getUserDetails();
  }

  updateUserDetails=()=>{
    db.collection('users').doc(this.state.docId).update({
      'first_name' : this.state.FirstName,
      'last_name' : this.state.LastName,
      'contact' : this.state.Contact,
      'address':this.state.Address
    })
    Alert.alert("Profile updated");
  }
    render(){
        return(
            <View>
                <Text style={styles.title}>
                Profile Settings
                </Text>
        <TextInput
        style={styles.formTextInput}
          placeholder ={'FirstName'} 
          onChangeText = {(text)=>{
            this.setState({FirstName : text})
          }
          }
          value = {this.state.FirstName}
        />
        <TextInput
        style={styles.formTextInput}
          placeholder ={"Last Name"}
          onChangeText = {(text)=>{
            this.setState({LastName : text})
          }
          }
          value = {this.state.LastName}
        /><TextInput
        style={styles.formTextInput}
          placeholder ={"Address"}
          onChangeText = {(text)=>{
            this.setState({Address : text})
          }
          }
          value = {this.state.Address}
        /><TextInput
        style={styles.formTextInput}
          placeholder ={"Contact"}
          onChangeText = {(number)=>{
            this.setState({Contact : number})
          }
          }
          value = {this.state.Contact}
          maxLength = {10}
        />
        <TouchableOpacity onPress={()=>{this.updateUserDetails()}}>
          <Text>Change</Text>
          </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formTextInput : {
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10
  },
  title :{
    fontSize:65,
    fontWeight:'300',
    paddingBottom:30,
    color : '#ff3d00'
  },    
})  