/**
 * Created by Mateusz on 05.08.2017.
 */
// @flow
import React, {Component} from 'react';
import { connect } from 'react-redux'

import SingleTodo from './SingleTodo'
import { changeStatus, deleteItem, changeText } from './../actions'
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


function getVisible(todos, filter) {
    switch(filter){
        case 'COMPLETED':
            return todos.filter(item => item.completed)
        case 'INCOMPLETED':
            return todos.filter(item => !item.completed)
        default :
            return todos;
    }
}

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openDialog: false
        }
    }

    editDialog(id, text){
        this.setState({
            openDialog: true,
            todo: {
                id,
                text
            }
        })
    }
    handleClose(){
        this.setState( ...this.state ,{
            openDialog:false
        })
    }
    handleEdit(e){
        this.setState({
            ...this.state,
                todo: {...this.state.todo,
                    text: e.target.value
                }
        });
    }

    handleSave(){
        let todo = this.state.todo;
        this.props.itemActions.editItem(todo.id, todo.text);
        this.handleClose()
    }

    render() {
        let todos = getVisible(this.props.todos, this.props.visibilityFilter);
        const self = this;
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
            <FlatButton
                label="Save"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleSave.bind(this)}
            />,
        ];

        return (
        <div>
            <List>
            {todos.map((singleItem) => (
                <div key={singleItem.id}>
                <SingleTodo  {...singleItem} {...this.props.itemActions} onEdit={self.editDialog.bind(self)} />
                <Divider/>
                </div>
            ))}
            </List>

            {this.state.openDialog && <Dialog open={this.state.openDialog} actions={actions}>
                <TextField
                    floatingLabelText="New value?"
                    onChange={ this.handleEdit.bind(this) }
                    value={ this.state.todo.text}
                    fullWidth={true}
                />
            </Dialog>}

        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos,
        visibilityFilter: state.visibility
    }
}

const mapDispatchToProps = dispatch => {

    return {

        itemActions: {
            changeStatus: id => {
                dispatch(changeStatus(id))

            },
            deleteItem: id => {
                dispatch(deleteItem(id))
            },
            editItem: (id, text) => {
                dispatch(changeText(id, text))
            },

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)