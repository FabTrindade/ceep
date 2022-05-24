import React, { Component } from 'react';
class ListaDeCategorias extends Component {
    _handleEvenoInput(e)
    {
        if (e.key === "Enter"){
            this.props.addCategoria(e.target.value);
        }
    }
    render() {
        return (
            <section>
                <ul>
                    {this.props.categorias.map((categoria, index)=>{
                        return <li key={index}>{categoria}</li>
                    })}
                </ul>
                
                <input
                    type="Text"
                    placeholder='Insira a Categoria'
                    onKeyUp={this._handleEvenoInput.bind(this)} />
            </section>
        );
    }
}

export default ListaDeCategorias;