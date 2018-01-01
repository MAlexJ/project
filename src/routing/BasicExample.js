import React, {Component} from 'react'
import {Link, Route, BrowserRouter} from 'react-router-dom'
import Home from './Home';
import Topics from './Topics';
import About from './About';
import Button from 'material-ui/Button';

class BasicExample extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                    </ul>

                    <Button raised color="primary">
                        Hello World
                    </Button>

                    <hr/>

                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/topics" component={Topics}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default BasicExample;