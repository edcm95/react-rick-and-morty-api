import React from 'react';
import axios from 'axios';

import { Button, Spinner } from 'reactstrap';
import CharacterCardGrid from '../components/characterCardGrid';

const characterAPI = 'https://rickandmortyapi.com/api/character';

class CharactersPage extends React.Component {

    state = {
        page: 1,
        characters: [],
    }

    //Life cycle control

    componentDidMount() {
        this.fetchCharacters();
    }

    componentWillUnmount() {
        this.setState({
            page: 1,
            characters: [],
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (!nextState.characters) {
            return false;
        }
        return true;
    }


    // --- --- --- --- --- ---

    fetchCharacters = async () => {
        const response = await axios.get(`${characterAPI}/?page=${this.state.page}`);

        this.setState({
            characters: response.data.results,
        });
    }


    changePage(delta) {
        const nextPage = this.state.page + delta;

        if (nextPage < 0 || nextPage > 20) {
            return;
        }

        this.setState({
            page: nextPage,
            characters: null,
        }, this.fetchCharacters)
    }


    render() {
        console.log("Component rendered: ", this.state.characters);

        const grid = (this.state.characters) ?
            React.createElement(CharacterCardGrid, this.state.characters) :
            <Spinner animation="border" variant="danger" />;

        return (
            <div className="charactersPageTitle">
                <h1>Characters</h1>
                <div>
                    <Button color="warning" onClick={() => this.changePage(-1)}>Back</Button>
                    <Button color="success" onClick={() => this.changePage(+1)} >Next</Button>
                </div>
                {grid}
            </div>
        );
    }
}

export default CharactersPage;