import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';

import s from './Searchbar.module.css';
class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({
      searchQuery: value.toLowerCase(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      return;
    }
    this.props.submit(this.state.searchQuery);

    this.reset();
  };

  reset = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchButton}>
            <span>
              <BsSearch />
            </span>
          </button>

          <input
            className={s.SearchInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
