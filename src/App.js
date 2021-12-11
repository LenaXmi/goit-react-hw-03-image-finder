import { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import LoadMore from './components/Button';
import API from './services/image-api.js';
import Modal from './components/Modal';
import './App.css';

//Modal image
//State machine
//Scroll gallery
//Refactoring

class App extends Component {
  state = {
    imageArr: [],
    searchQuery: '',
    page: 1,
    status: 'idle',
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  componentDidMount() {
    this.loadImages();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      API(this.state.searchQuery, this.state.page).then(response =>
        this.setState({ imageArr: response.hits }),
      );
    }

    if (prevState.page !== this.state.page) {
      API(this.state.searchQuery, this.state.page).then(response =>
        this.setState(prevState => ({
          imageArr: [...prevState.imageArr, ...response.hits],
        })),
      );
    }
  }

  loadImages = () => {};

  onLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  incrementPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <div className="App">
        <Searchbar submit={this.handleFormSubmit} />

        <ImageGallery
          imageArray={this.state.imageArr}
          onImgClick={this.toggleModal}
        />

        <LoadMore fetchMoreImg={this.onLoadMore} />
        {this.state.showModal && (
          <Modal>
            <img src={this.state.imageArr[0].largeImageURL} alt="" />
            {console.log(this.state.imageArr[0].largeImageURL)}
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
