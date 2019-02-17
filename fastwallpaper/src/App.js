import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

//STYLES
import './App.css';

//COMPONENTS
import ImageList from './components/ImageList';

//IMAGENS
import logo from './img/logo.png';

class App extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            photos: [],
            name:'star',
        }

        this.onSearch();
    }

    //FUNCAO PARA BUSCAR OS PAPEIS DE PAREDE
    onSearch = async () => {
        const response = await teste.get('/search/photos', {
            params: {
                query: {this.state.name}
            }
        });

        this.setState({ photos: response.data.results })
        console.log(response.data.results);
    }

    
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

                <h2 className="ui icon header">
                    {/* <i className="desktop icon"></i> */}
                    <img
                            alt=""
                            src={logo}
                            width="140"
                            height="140"
                            className="d-inline-block align-top"
                        />
                    <div className="content">
                        Fast Wallpaper
                        <div className="sub header">Cansado de passar horas procurando o melhor papel de parede?.</div>
                    </div>
                </h2>

                <div className="ui huge fluid action input">
                    <input type="text" placeholder="Digite em inglês o estilo de papel de parede que deseja..." />
                    <div className="ui button">Buscar</div>
                </div>

                <ImageList
                    images={this.state.photos}
                />

            </div>
        );
    }
}

export default App;
