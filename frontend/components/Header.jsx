import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';
import SelectField from 'material-ui/SelectField';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';


class Header extends Component {
  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <header className="header">
          
          <h1>Генератор документов</h1>
          <SelectField
                    floatingLabelText="Document type"
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
            <MenuItem value={1} primaryText="Договор подряда" />
            <MenuItem value={2} primaryText="Отчет о команидровке" />
            <MenuItem value={3} primaryText="Запрос визиток" />
          </SelectField>
      </header>
    );
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Header;
