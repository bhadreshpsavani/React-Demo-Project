import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'


class App extends Component {
    removeCharacter = index => {
        const { characters } = this.state
      
        this.setState({
          characters: characters.filter((character, i) => {
            return i !== index
          }),
        })
    }

  state =  {
    characters : []
  }
  
  handleSubmit = character =>{
    this.setState({ character : [this.state.characters, character]})
  }
       
  
  render() {

    const {characters}=this.state

    return (
        <div className="container">
            <Table  characterData={characters} removeCharacter={this.removeCharacter}/>
            <Form handleSubmit={this.handleSubmit}/>
         </div>
    )

  }
}

export default App