import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, SafeAreaView , Alert , View , ScrollView} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Left, Body, Right, Title ,Text , Button, Picker ,Content ,alert ,Form , Item , Icon} from 'native-base';


//MIS COMPONENTES//
import FormFeriados from './formFeriados';
import FormFinDeSemana from './formFinDeSemana';
import FormProximoFeriado from './formProximoFeriado';


//FUNCIONES API//
const obtenerFeriados = require("../api/libraryFeriados");
const obtenerFinSemana = require("../api/libraryFinSemana");
const obtenerProximosFeriados = require("../api/libraryProximosFeriados");


export class FormDatos extends React.Component{
constructor(props){
super(props)
this.state={
  anio:"2020",
  pais:"AR",
  boton:"",
feriado:"",
proximoFeriado:"",
finDeSemana:"",
cantFeriados:0,
}


//SETEO DE LAS FUNCIONES
this.handlerSelectPais = this.handlerSelectPais.bind(this);
this.handlerSelectAnio = this.handlerSelectAnio.bind(this);
this.handlerFeriadoApi=this.handlerFeriadoApi.bind(this);
this.handlerProximoFeriadoApi=this.handlerProximoFeriadoApi.bind(this);
this.handlerFinDeSemanaApi=this.handlerFinDeSemanaApi.bind(this);

}

handlerFeriadoApi(){
obtenerFeriados(this.state.anio,this.state.pais).then(feriado => {
  let cantidad= feriado.data.length;
   this.setState({
     boton:"BotonFeriado",
       feriado:feriado.data,
       cantFeriados:cantidad,
    })
  }).catch((err) => {
    Alert.alert(err.message + "catch");
  });
}

handlerProximoFeriadoApi(){
 obtenerProximosFeriados(this.state.pais).then(proximoFeriado =>{
  this.setState({
    boton:"BotonProximo",
      proximoFeriado:proximoFeriado.data,
   })
 }).catch((err) => {
   alert('El pais que ingreso no es correcto');
 });
}

handlerFinDeSemanaApi(){
obtenerFinSemana(this.state.anio,this.state.pais).then(finDeSemana => {
   this.setState({
    boton:"BotonFinDe",
    finDeSemana:finDeSemana.data,
    })
  }).catch((err) => {
    alert(err.message + "catch");
 
  });
}


handlerSelectPais(pais){
  this.setState({
    pais:pais,
  })
  }

  handlerSelectAnio(anio){
    this.setState({
      anio:anio,
  })
  }

  render(){
    let boton;
    if(this.state.boton==="BotonFeriado"){
      boton= <FormFeriados feriado={this.state.feriado} cantidad={this.state.cantFeriados}/>
    }else if(this.state.boton==="BotonFinDe"){
 boton= <FormFinDeSemana finDeSemana={this.state.finDeSemana}/>
    }else if (this.state.boton==="BotonProximo"){
 boton= <FormProximoFeriado proximoFeriado={this.state.proximoFeriado}/>
    }
return(
  <Container>
  <Form>
  <Item>
<Text>Selecciona un pais</Text>
<Icon style={{ margin:20}} name='flag' />
    <Picker
      note
      mode="dropdown"
      style={styles.listaSelect}
      selectedValue={this.state.pais}
     onValueChange={this.handlerSelectPais}
    >
      <Picker.Item label="Argentina" value="AR" />
      <Picker.Item label="Estados Unidos" value="US" />
      <Picker.Item label="España" value="ES" />
      <Picker.Item label="Uruguay" value="UY" />
    </Picker>
    </Item>
    <Item last>
 <Text>Selecciona un Año</Text>
 <Icon style={{ margin:20}} name='time' />
   <Picker
     note
     mode="dropdown"
     style={{ width: 120 }}
     selectedValue={this.state.anio}
     onValueChange={this.handlerSelectAnio}
   >
     <Picker.Item label="2020" value="2020"/>
     <Picker.Item label="2021" value="2021"/>
     <Picker.Item label="2022" value="2022"/>
     <Picker.Item label="2023" value="2023"/>
   </Picker>
   </Item> 
 </Form>

<Button style={styles.botones} onPress={this.handlerFeriadoApi}>
  <Text>Consultar Feriados</Text>
  </Button>

  <Button style={styles.botones} onPress={this.handlerFinDeSemanaApi}>
  <Text>Consultar fin de Semanas</Text>
  </Button>

  <Button style={styles.botones} onPress={this.handlerProximoFeriadoApi}>
  <Text>Consultar Proximos Feriados</Text>
  </Button>

  {boton}
</Container>

  /* RESULTADOS segun el boton apretado*/ 



)
    }
}

export default FormDatos;


const styles = StyleSheet.create({
  botones: {
    width: "70%",
    alignSelf: "center",
    margin:5,
    justifyContent: 'center',
  },
  listaSelect:{
    width: 120,
    
  },
});
