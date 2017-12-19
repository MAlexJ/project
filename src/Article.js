import React, {Component} from 'react'

// TODO -> stateless component
export default class Article extends Component {

    constructor(props) {
        super(props);

        // create >>> state
        this.state = {
            isOpen: false
        };

        // bind >>> this >>> onClick={this.clickOnButton}>
        this.clickOnButton = this.clickOnButton.bind(this);
    }

    render() {

        // get >>> article from props
        const {article} = this.props;

        // get >>> isOpen from state
        const {isOpen} = this.state;

        // get >>> logic
        const showArticleText = isOpen ? <section>{article.text}</section> : null;

        // render >>> jsx
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.clickOnButton}>Open</button>
                {showArticleText}
            </div>
        )
    }

    // action >>> click on button
    clickOnButton() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

// TODO -> state full component
// export default function Article(props) {
//
//     const {article} = props;
//     const {foo} = props;
//
//     return (
//         <div>
//             <h3>{foo}</h3>
//             <h3>{article.title}</h3>
//             <section>{article.text}</section>
//         </div>
//     );
// }