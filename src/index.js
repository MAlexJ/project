import React from 'react';
import {render} from 'react-dom';
import Article from './Article';
import {articles} from './resourse';

const article = articles[0];

render(<Article article={article} foo={'bar text'}/>, document.getElementById('container'));