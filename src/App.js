import { Component } from 'react';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import * as Scroll from 'react-scroll';
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

  componentDidMount() {
    toast.info('Find image');
    console.log(API);
  }

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;
    // const response = await API(searchQuery, page);

    if (prevState.searchQuery !== searchQuery) {
      this.setState({ status: 'pending' });

      // try {
      //   if (response.hits.length > 0) {
      //     this.setState({
      //       imageArr: response.hits,
      //       page: 1,
      //       status: 'resolved',
      //     });
      //     toast.success('Images found');
      //   }

      //   if (response.hits.length === 0) {
      //     this.setState({ status: 'idle' });
      //     toast.error('No images found');
      //   }
      // } catch (error) {
      //   this.setState({ error, status: 'rejected' });
      // }

      // try {
      //   const response = await API(searchQuery, page);

      //   const { hits } = response;

      //   if (hits.length === 0) {
      //     toast.error('No images found');
      //     this.setState({ status: 'idle' });
      //   } else if (hits.length > 0) {
      //     toast.success('images found');
      //     this.setState({ imageArr: hits, status: 'resolved' });
      //   }
      // } catch (error) {
      //   toast.error('something went wrong');
      //   return this.setState({ error: error, status: 'rejected' });
      // }

      API(searchQuery, page)
        .then(
          response =>
            this.setState({
              imageArr: response.hits,
              page: 1,
              status: 'resolved',
            }),
          toast.success(`Images with ${this.state.searchQuery} found`),
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }

    if (prevState.page !== this.state.page) {
      this.setState({ status: 'pending' });

      API(searchQuery, page)
        .then(
          response =>
            this.setState(prevState => ({
              imageArr: [...prevState.imageArr, ...response.hits],
            })),
          this.setState({ status: 'resolved' }),
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleFormSubmit = searchQuery => {
    this.setState({ imageArr: [], searchQuery, page: 1 });
  };

  render() {
    const { imageArr, showModal, modalImage, modalAlt, status, error } =
      this.state;
    return (
      <div className="App">
        <ToastContainer autoClose={3000} />
        <Searchbar submit={this.handleFormSubmit} />

        {status === 'resolved' && (
          <>
            <ImageGallery imageArray={imageArr} onImgClick={this.openModal} />
            {imageArr.length >= 12 && (
              <LoadMore fetchMoreImg={this.onLoadMore} />
            )}
          </>
        )}

        {status === 'pending' && (
          <>
            <ImageGallery imageArray={imageArr} onImgClick={this.openModal} />
            <Loader
              type="ThreeDots"
              color="#3f51b5"
              height={70}
              width={70}
              // timeout={3000}
            />
          </>
        )}

        {showModal && (
          <Modal modalClose={this.closeModal}>
            <img src={modalImage} alt={modalAlt} />
          </Modal>
        )}
        {status === 'rejected' && <div>{error.message}</div>}
      </div>
    );
  }
}

export default App;
