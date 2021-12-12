import { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import LoadMore from './components/Button';
import API from './services/image-api.js';
import Modal from './components/Modal';
import './App.css';

//State machine
//Scroll gallery
//Refactoring

class App extends Component {
  state = {
    imageArr: [],
    searchQuery: '',
    page: 1,
    status: 'idle',
    error: null,
    showModal: false,
    modalImage: null,
    modalAlt: null,
  };

  openModal = arrayEl => {
    const { largeImageURL, tags } = arrayEl;
    this.setState({
      showModal: true,
      modalImage: largeImageURL,
      modalAlt: tags,
    });
  };

  closeModal = e => {
    this.setState({
      showModal: false,
      modalImage: null,
      modalAlt: null,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery) {
      this.setState({ status: 'pending' });
      API(searchQuery, page)
        .then(response =>
          this.setState({
            imageArr: response.hits,
            status: 'resolved',
          }),
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }

    if (prevState.page !== page) {
      this.setState({ status: 'pending' });
      API(searchQuery, page)
        .then(response =>
          this.setState(prevState => ({
            imageArr: [...prevState.imageArr, ...response.hits],
            status: 'resolved',
          })),
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  onLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    // if (this.state.status === 'idle') {
    //   return <Searchbar submit={this.handleFormSubmit} />;
    // }

    // if (this.state.status === 'pending') {
    //   return <div>Loading...</div>;
    // }
    // if (this.state.status === 'resolved') {
    //   return (
    //     <>
    //       <Searchbar submit={this.handleFormSubmit} />
    //       <ImageGallery
    //         imageArray={this.state.imageArr}
    //         onImgClick={this.openModal}
    //       />
    //       <LoadMore fetchMoreImg={this.onLoadMore} />
    //       {this.state.showModal && (
    //         <Modal modalClose={this.closeModal}>
    //           <img src={this.state.modalImage} alt={this.state.modalAlt} />
    //         </Modal>
    //       )}
    //     </>
    //   );
    // }
    const { imageArr, showModal, modalImage, modalAlt } = this.state;
    return (
      <div className="App">
        <Searchbar submit={this.handleFormSubmit} />
        <ImageGallery imageArray={imageArr} onImgClick={this.openModal} />
        <LoadMore fetchMoreImg={this.onLoadMore} />
        {showModal && (
          <Modal modalClose={this.closeModal}>
            <img src={modalImage} alt={modalAlt} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
