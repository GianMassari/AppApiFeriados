import React from 'react';

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
return <td>Con Feriado Puente</td>
}else{
  return <td>Sin Feriado Puente</td>
}
      }
      const finDeSemana= this.props.finDeSemana;
      console.log(finDeSemana)
  const contenido = finDeSemana.map((element) =>
  <tr>
  <th scope="row">{element.startDate}</th>
  <td>{element.endDate}</td>
  <td>{element.dayCount}</td>
  <VerPuente needBridgeDay={element.needBridgeDay}/>
 </tr>

  )
     return(
        <div>
          <h2 className="d-flex justify-content-center">Fines de Semanas</h2>
<table class="table table-bordered">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Fecha de inicio</th>
      <th scope="col">Fecha de fin</th>
      <th scope="col">Dias</th>
      <th scope="col">Feriado Puente</th>
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

export default formFinDeSemana;