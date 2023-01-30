import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  onChangeCapitalId = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountryName = () => {
    const {activeCapitalId} = this.state
    const activeCountryAndCapital = countryAndCapitalsList.find(
      countryName => activeCapitalId === countryName.id,
    )
    return activeCountryAndCapital.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountryName()
    return (
      <div className="app-container">
        <div className="countries-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select
              id="capital"
              className="select"
              onChange={this.onChangeCapitalId}
              value={activeCapitalId}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option
                  className="option"
                  key={eachCountry.id}
                  value={eachCountry.id}
                >
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="question">is capital of which country?</label>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
