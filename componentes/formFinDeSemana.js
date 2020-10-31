import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, SafeAreaView , Alert } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Left, Body, Right, Title ,Text , Button, Picker ,Content ,alert ,Form , Item , Icon ,Card , CardItem} from 'native-base';

class formFinDeSemana extends React.Component{
constructor(props){
super(props)
this.state={
    
 }
}
    render(){
      function VerPuente(props){
let needBridgeDay=props.needBridgeDay;
if(needBridgeDay){
return <Text>Con Feriado Puente</Text>
}else{
  return <Text>Sin Feriado Puente</Text>
}
 }
  const finDeSemana= this.props.finDeSemana;
  let contador=0;
  const contenido = finDeSemana.map((element) =>
 
 <Card key={contador++}>
            <CardItem><Body><Text>Fecha de inicio: {element.startDate}</Text></Body></CardItem>
            <CardItem><Body><Text>Fecha de fin: {element.endDate}</Text></Body></CardItem>
            <CardItem><Body><Text>Dias: {element.dayCount}</Text></Body></CardItem>
            <CardItem><Body><Text>Feriado Puente: <VerPuente needBridgeDay={element.needBridgeDay}/></Text></Body></CardItem>

  </Card>
  )
     return(

      <Container>
        <Content>
        <Text style={styles.titulos}>Fines de Semanas</Text>
         {contenido}
         </Content>
      </Container>
     
     )

     
    }
}

export default formFinDeSemana;

const styles = StyleSheet.create({
  titulos: {
    fontSize:30,
    alignSelf: "center",
    fontWeight:'bold',
    
  },
  textContent: {
    fontSize: 20,
    color: 'red',
  },
});

