import React from 'react';
import LottieView from 'lottie-react-native';

export  default class SantaAnimation extends React.Component{
    render(){
        return(
            <LottieView source = {require('../assets/42321-santa-surprise-gift.json')}
            styles = {{width: '50%' }} autoPlay loop />
        )
    }
}