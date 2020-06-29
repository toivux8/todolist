import React, { Component } from 'react'

export class AddTodo extends Component {
    state= {
        tittle: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value  });

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.tittle);
        this.setState({ tittle: '' });
    }

    render() {
        return (
            <form  onSubmit={this.onSubmit} style={{ display: 'flex' }} >
                <input 
                    type="text" 
                    name="tittle"
                    placeholder="Add Todo ..." 
                    style={{ flex: '10', padding: '5px' }}
                    value={this.state.tittle}
                    onChange={this.onChange}
                />
                <input 
                    type="submit"
                    value= "Submit"
                    className= "btn"
                    style={{ flex: '1' }}
                />
            </form>
        )
    }
}

export default AddTodo
