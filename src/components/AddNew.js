// @flow
import React, {Component} from 'react';
import TextField from 'material-ui/TextField';


import {connect} from 'react-redux'
import {addTodo} from '../actions'

class AddNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTask: ''
        }
    }

    setValue(field, event) {
        const object = {};
        object[field] = event.target.value;
        this.setState(object);
    }

    render() {
        const self = this;

        return (
            <form onSubmit={
                (e) => {
                    e.preventDefault();
                    if (self.state.newTask.trim() !== '') {
                        self.props.addNew(self.state.newTask);
                        self.setState({newTask: ''})
                    }
                }
            }>


                <TextField
                    floatingLabelText="What needs to be done?"
                    onChange={this.setValue.bind(this, 'newTask')}
                    value={this.state.newTask}
                    fullWidth={true}
                />
            </form>
        );
    }
}
;


const mapDispatchToProps = dispatch => {
    return {
        addNew: text => {
            dispatch(addTodo(text))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddNew)