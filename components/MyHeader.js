import React from "react";
import { Header, Icon } from "react-native-elements";

export default class MyHeader extends React.Component{
    render(){
        return(
            <Header
                leftComponent = {<Icon name ='bars' type = 'font-awesome' color = '#ffffff' />}
                centerComponent={{text:props.title}}
                rightComponent = {<Icon name ='bell' type = 'font-awesome' color = '#ffffff' />}
            />
        )
    }
}