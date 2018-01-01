import React from 'react';
import {render} from 'react-dom';
import BasicExample from './routing/BasicExample'

const styles = {
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

render(<BasicExample classes={styles}/>, document.getElementById('container'));