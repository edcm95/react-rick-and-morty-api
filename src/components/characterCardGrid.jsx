import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle
} from 'reactstrap'

export default function (characters) {
    const cards = [];
    const textStyle = {
        textAlign: "left",
    }

    Object.values(characters).forEach(character => {
        const card = (
            <div className="card" key={character.id}>
                <Card style={{
                    backgroundColor: "#BCBCBB",
                    borderColor: "#FEED01",
                    borderWidth: "3px",
                }}>
                    <CardImg src={character.image} alt='Character image'></CardImg>
                    <CardBody>
                        <CardTitle><strong>{character.name}</strong></CardTitle>
                        <span></span>
                        <CardText style={textStyle}>ID: {character.id}</CardText>
                        <CardText style={textStyle}>Species: {character.species}</CardText>
                        <CardText style={textStyle}>Status: {character.status}</CardText>
                        <CardText style={textStyle}>Location: {character.location.name}</CardText>
                    </CardBody>
                </Card>
            </div>
        );

        cards.push(card);
    });



    return (
        <div className="cardGrid">
            {cards}
        </div>
    );
}