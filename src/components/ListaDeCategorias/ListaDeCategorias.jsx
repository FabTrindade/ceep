import React, { Component } from "react";
import "./estilo.css";
class ListaDeCategorias extends Component {
  componentDidMount(){
    this.props.categorias.inscrever(this._notificaNovasCategorias.bind(this))
  }

  _notificaNovasCategorias(){
    console.log("Categoria recebida!")
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
          {this.props.categorias.categorias.map((categoria, index) => {
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
