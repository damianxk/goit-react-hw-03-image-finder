import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './SearchBar.module.css';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleInputChange = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
  };

  render() {
    const { handleInputChange, handleSubmit } = this;

    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.input}
            name="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={handleInputChange}
          />
          <button className={css.searchButton} type="submit">
            Search
          </button>
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
