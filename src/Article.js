import React from 'react'

export default function Article(props) {

    const {article} = props;
    const {foo} = props;

    return (
        <div>
            <h3>{foo}</h3>
            <h3>{article.title}</h3>
            <section>{article.text}</section>
        </div>
    );
}