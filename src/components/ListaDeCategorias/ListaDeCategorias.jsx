import React, { Component } from "react";
import "./estilo.css";
class ListaDeCategorias extends Component {
  
  constructor(){
    super();
    this.state={
      categorias:[]
    }
    this._bindNotificaNovasCategorias = this._notificaNovasCategorias.bind(this)
  }

  componentDidMount(){
    this.props.categorias.inscrever(this._bindNotificaNovasCategorias)
  }

  
  componentWillUnmount(){
    this.props.categorias.desinscrever(this._bindNotificaNovasCategorias)
  }

  _notificaNovasCategorias(categorias){
    this.setState({...this.state.categorias, categorias})
  }
  
  _handleEventoInput(e) {
    if (e.key === "Enter") {
      this.props.addCategoria(e.target.value);
      e.target.value = "";
    }
  }
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => {
            return (
              <li key={index} className="lista-categorias_item">
                {categoria}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
