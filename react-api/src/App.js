import React, {Component} from 'react'
import Contacts from './components/contacts'

class App extends Component{
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')

    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }

  state = {
    contacts: []
  }

  render (){
    return (
      <div>
        <div class="container">
          <Contacts contacts={this.state.contacts}/>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Amos Mwangi</h5>
              <h6 class="card-subtitle mb-2 text-muted">amosmwangi101@gmail.com</h6>
              <p class="card-text">Stay hungry, stay foolish</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;