import React, { Component } from 'react';

// converting to class to handle the emoji state that this is now going to display - following andrei
// but eventually want to figure out how to ONLY use functional components to do the same thing

class Rank extends Component {

  constructor(props) {
    super(props);

    this.state = {
      emoji: ''
    }
  }

  componentDidMount() {
    this.generateEmoji(this.props.entries)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.entries === this.props.entries && prevProps.name === this.props.name) {
      return null
    }
    this.generateEmoji(this.props.entries)

  }

  generateEmoji = (entries) => {
    fetch(`https://a21n9rj933.execute-api.us-east-1.amazonaws.com/prod/rank?rank=${entries}`)
      .then(resp => resp.json())
      .then(data => this.setState({
        emoji: data.input
      }))
      .catch(console.log)
  }

  render() {

    return (
      <div>
        <div className='white f3'>
          {`${this.props.name}, your current entry count is...`}
        </div>
        <div className='white f1'>
          {this.props.entries}
        </div>
        <div className='white f3'>
          {`Rank Badge: ${this.state.emoji}`}
        </div>
      </div>
    );
  }


}

export default Rank;