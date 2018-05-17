import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: '',
        city: '',
        zip: '',
      }
    };
  }

  handleChangeFor = propertyName => event => {
    this.setState({
      user: {
        ...this.state.user,
        [propertyName]: event.target.value,
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      // user: this.state.user,
      user: {
        name: '',
        city: '',
        zip: '',
      }
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.user.name} onChange={this.handleChangeFor('name')} placeholder="Name" />
          <input value={this.state.user.city} onChange={this.handleChangeFor('city')} placeholder="City" />
          <input value={this.state.user.zip} onChange={this.handleChangeFor('zip')} placeholder="Zip" />
          <input type="submit" value="Submit form"/>
        </form>
        <p>
          {this.state.user.name} is from {this.state.user.city} and has this {this.state.user.zip}
        </p>
      </div>
    );
  }
}
export default App;