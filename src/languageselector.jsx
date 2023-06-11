import React from "react";
import { createContext } from "react";

const LanguageContext = createContext();

export default class LanguageSelector extends React.Component {
  state = {
    selectedLanguage: "English",
  };

  handleLanguageChange = (event) => {
    this.setState({ selectedLanguage: event.target.value });
  };

  render() {
    const { selectedLanguage } = this.state;

    return (
      <div>
        <h1>Language Selector</h1>
        <select value={selectedLanguage} onChange={this.handleLanguageChange}>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="Italiano">Italiano</option>
        </select>
        <LanguageContext.Provider value={selectedLanguage}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </div>
    );
  }
}

class DisplayLanguage extends React.Component {
  render() {
    return (
      <LanguageContext.Consumer>
        {(language) => <div>Selected Language: {language}</div>}
      </LanguageContext.Consumer>
    );
  }
}
