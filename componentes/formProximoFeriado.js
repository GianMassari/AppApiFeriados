import React from 'react';




class formProximoFeriado extends React.Component{
constructor(props){
super(props)
this.state={
 
 }
}
    render(){
      function VerFixed(props){
        let fixed=props.fixed
        if(fixed===true){
     return <td >Es Fijo</td>
        }else{
         return <td >No es Fijo</td>
        }
       }
       function VerGlobal(props){
        let global=props.global
        if(global===true){
     return <td >Es global</td>
        }else{
         return <td >No es global</td>
        }
       }
       function VerFecha(props){
        let fecha=props.fecha
        if(fecha!=null){
          return <td>{fecha}</td>
        }else{
          return <td>No hay fecha Registrada</td>
        }
      }
      console.log(this.props);
      const proximoFeriado= this.props.proximoFeriado;
      const contenido= proximoFeriado.map(element =>
      <tr>
     <th scope="row">{element.countryCode}</th>
     <td>{element.date}</td>
     <td>{element.localName}</td>
     <td>{element.name}</td>
     <VerFixed fixed={element.fixed}/>
     <VerGlobal global={element.global}/>
     <VerFecha fecha={element.launchYear}/>
    </tr>
      )
     return(
        <div>
           <h2 className="d-flex justify-content-center">Proximos Feriados</h2>
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Codigo de Pais</th>
      <th scope="col">Fecha</th>
      <th scope="col">Nombre local</th>
      <th scope="col">Nombre en ingles</th>
      <th scope="col">Fijo</th>
      <th scope="col">Global</th>
      <th scope="col">Fecha de creacion</th>
    </tr>
  </thead>
  <tbody>
   {contenido}
  </tbody>
</table>


        </div>
     )

     
    }
}

export default formProximoFeriado;