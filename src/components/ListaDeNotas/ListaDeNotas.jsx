import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";
class ListaDeNotas extends Component {
  constructor(){
    super();
    this.state = {notas:[]}
    this._bindNotificaNovasNotas = this._notificaNovasNotas.bind(this);
  }
  componentDidMount(){
    this.props.notas.inscrever(this._bindNotificaNovasNotas);
    
  }

  componentWillUnmount(){
    this.props.notas.desinscrever(this._bindNotificaNovasNotas);
  }

  _notificaNovasNotas(notas){
    this.setState({...this.state.notas, notas})
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota
                indice={index}
                apagarNota={this.props.apagarNota}
                titulo={nota.titulo}
                texto={nota.texto}
                categoria={nota.categoria} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
