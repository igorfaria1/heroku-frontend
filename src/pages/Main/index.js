import React, { Component } from 'react';
import api from '../../services/api';

import logo from '../../assets/logo.svg';
import './styles.css';

export default class Main extends Component {
    // Forma como capituamos valores do form 
    // e inserimos no state do component
    state = {
        newBox: '',
    };

    /**
     * Evento de submit do formulário de criação de boxes
     */
    handleSubmit = async(event) => {
        event.preventDefault();
        
        // Cria um novo box com o nome do input 'newBox'
        // no schema de boxes da api
        const response = await api.post('/boxes', {
            title: this.state.newBox,
        });

        // Esse é redirecionamento de páginas de react
        // após a criação do box irá redirecionar para /box/id
        this.props.history.push(`/box/${response.data._id}`);
    };

    // Adicionar o valor digitado no input do formulário
    // no no state do component
    handleInputChange = (event) => {
        this.setState({ newBox: event.target.value });
    };

    render() {
        return (
            <div id="main-container">
                <form onSubmit={this.handleSubmit}>
                    <img src={logo} alt=""/>
                    <input value={this.state.newBox} onChange={this.handleInputChange} placeholder="Criar box" />
                    <button type="submit">Criar</button>
                </form>
            </div>
        );
    }
}
