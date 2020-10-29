import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, SafeAreaView , ScrollView ,View ,Alert } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Left, Body, Right, Title ,Text , Button, Picker ,Content ,alert , Card , CardItem } from 'native-base';

//COMPONENTES//
import FormDatos from "./componentes/formDatos";


export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }
  
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

 render(){
    if (!this.state.isReady) {
      return <AppLoading />;
    }
  return (
   
   
      <Container>
         <ScrollView>
        <Header>
          <Left/>
          <Body>
            <Title>Feriados Api</Title>
          </Body>
          <Right />
        </Header>

        <FormDatos/>
       
        </ScrollView>
      </Container>
    
   
      
 
      /*}<Button
  title="Learn More"
  color="#841584"
  onPress={() => Alert.alert('Simple Button pressed')}
  accessibilityLabel="Learn more about this purple button"/>
      <StatusBar style="auto" />
    </Container>
  */

  );
}
}

const styles = StyleSheet.create({
  container: {
    marginTop:'50px',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
fontSize:30,

  },
});
