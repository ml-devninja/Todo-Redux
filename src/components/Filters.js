// @flow
import React, {Component} from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { visibilityFilter } from '../actions/index'


class Filters extends Component {



    render() {

        let incompletedQty = this.props.todos.filter(item => !item.completed).length

        const taskTypes = ['ALL', 'COMPLETED', 'INCOMPLETED'];
        const self = this;
        return (
            <div>
                {taskTypes.map( (type, index) => {
                    return <RaisedButton key={index} label={type + ` ${(type==='INCOMPLETED' ? `(${incompletedQty})` : '')}`} style={{margin: 12}} primary={(type === self.props.visibilityFilter ? true : false)} onTouchTap={() => self.props.changeFilter(type)}/>
                })}

            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        todos: state.todos,
        visibilityFilter: state.visibility
    }
}

const mapDispathToProps = dispatch => {
    return {
        changeFilter: (filter) => dispatch(visibilityFilter(filter))
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Filters)