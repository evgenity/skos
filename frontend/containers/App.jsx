import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/todos';

import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/action/grade';

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../src/material_ui_raw_theme_file'

import FlatButton from 'material-ui/FlatButton';

const style = {
  marginLeft: 20
};

class App extends Component {
  render() {
    const { todos, actions } = this.props;
    return (
      <div style={{marginLeft: '20%', marginRight: '20%', 'marginTop' : '5%'}}>
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <Header addTodo={actions.addTodo}/>
            <Paper zDepth={2}>
              <TextField hintText="Name" style={style} underlineShow={false} />
              <Divider />
              <TextField hintText="Last name" style={style} underlineShow={false} />
              <Divider />
              <TextField hintText="Email" style={style} underlineShow={false} />
              <Divider />
            </Paper>
            <FlatButton label="Generate!" primary={true}  />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
