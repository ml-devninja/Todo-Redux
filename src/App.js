import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

import TodoList from './components/TodoList'
import AddNew from './components/AddNew';
import Filters from './components/Filters';
import Paper from 'material-ui/Paper';

const App = () => (

    <MuiThemeProvider>
            <div className="App">

                <Paper zDepth={1} style={{padding:'0 20px'}}>
                <AddNew/>
                <TodoList/>
                </Paper>
                <Filters/>

            </div>
        </MuiThemeProvider>
)



export default App;
