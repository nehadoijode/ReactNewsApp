import React, { Component } from 'react';
import {Button, Card} from 'react-bootstrap';

class FullArticle extends Component {
        constructor(props){
            super(props)  
    }

    truncate = (input) => {
       if (input != null && input.length > 1500000) {
        return input.substring(0, 1500000) + '...';
        }
        return input;
        };
    render() {
        return (
            <div>                
                <Card.Img className="imageSize" src={this.props.location.state.article.urlToImage}></Card.Img>
                <Card className="cardSize">
                    <Card.Body>
                        <Card.Title>{this.truncate(this.props.location.state.article.title)}</Card.Title>
                        <Card.Text>
                            {this.props.location.state.article.description}
                        </Card.Text>                       
                    </Card.Body>
                </Card>                
            </div>
        )
    }
}

export default FullArticle;