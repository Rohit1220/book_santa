import React from 'react';
import { View , Text, TouchableOpacity} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';
 
export default class SideDrawerMenu extends React.Component{
    render (){
        return(
        <View style = {{flex : 1}}>
            <Text>side menu</Text>
            <DrawerItems {...this.props}/>
            <TouchableOpacity onPress={()=>{
                firebase.auth().signOut()
            this.props.navigation.navigate('LoginScreen')
            }}>
                <Text>
                    Logout
                </Text>
            </TouchableOpacity>
        </View>
        )
    }
}