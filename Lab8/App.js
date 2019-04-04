import React, { Component } from 'react';
import {TextInput, StyleSheet, Button, Text, View } from 'react-native';

export default class App extends React.Component {

  //States are first defined in a constructor of props
  constructor(props){
    super(props);

    //We define the initial state
    this.state = {
      firstInput: "",
      lastInput: "",
      stateChanged: false
    }

  }


  //Definition of a method we want to trigger when the state changes
  displayResult(){

    //We validate if the input changed
    if(this.state.firstInput !== "" || this.state.lastInput != ""){

      //If so, we change the stateChanged flag
      this.setState({stateChanged: true});
    }

    else{
      this.setState({stateChanged: false});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text >Enter your name</Text>
          <TextInput onChangeText={(inputValue) => this.setState({firstInput: inputValue})}  />
        </View>
        <View>
          <Text >Enter your last name</Text>
          <TextInput onChangeText={(inputValue2) => this.setState({lastInput: inputValue2})}  />
        </View>

        <View>
          <Button onPress={() => {this.displayResult()}} title="Press Here"  />
        </View>

         <View >
           <Text > {this.state.stateChanged ? this.state.firstInput : ""}  {this.state.stateChanged ? this.state.lastInput : ""} </Text>
         </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});
