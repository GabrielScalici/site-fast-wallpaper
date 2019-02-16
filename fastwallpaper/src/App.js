import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

//COMPONENTES
import './App.css';

//IMAGENS
import logo from './img/logo.png';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        {' Fast Wallpaper'}
                    </Navbar.Brand>
                </Navbar>

                <div className="ui huge fluid action input">
                    <input type="text" placeholder="Digite em inglês o estilo de papel de parede que deseja..." />
                    <div className="ui button">Buscar</div>
                </div>

            </div>
        );
    }
}

export default App;
