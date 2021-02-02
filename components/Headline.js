import React, { Component } from 'react'
import {Button, Card} from 'react-bootstrap';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import {RouterArticle} from './RouterArticle';

class Headline extends Component {
    truncate = (input) => {
       if (input != null && input.length > 1500000) {
        return input.substring(0, 1500000) + '...';
        }
        return input;
        };
    render() {
        return (
            <div>                
                <Card.Img className="imageSize" src={this.props.article.urlToImage}></Card.Img>
                <Card className="cardSize">
                    <Card.Body>
                        <Card.Title>{this.truncate(this.props.article.title)}</Card.Title>
                        <Card.Text>
                            {this.truncate(this.props.article.description)}
                        </Card.Text>                        
                    </Card.Body>
                    <Card.Footer>
                        <Router>                      
                            <Link to="/full_article"><Button variant="primary">Read</Button></Link>                 
                       </Router>    
                    </Card.Footer>
                </Card>                
            </div>
        )
    }
}

export default (Headline);