import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            textDecoration: this.props.todo.status ? 'line-through' : 'none',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }
    }

    render() {
        const { id, tittle } = this.props.todo;
        return (
            <div style={this.getStyle()} >
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    {tittle}
                    <button style={btnStyle} onClick={this.props.markDelete.bind(this, id)} >x</button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    padding: '5px 10px',
    cursor: 'pointer',
    float: 'right'
};

export default TodoItem
