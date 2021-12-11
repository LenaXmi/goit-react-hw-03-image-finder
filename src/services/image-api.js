const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = 'key=23895189-b5b787f85de520230ba9fbe30';

const API = function (searchQuery, page) {
  const url = `${BASE_URL}?${API_KEY}&q=${searchQuery}&lang=en,ru&image_type=photo&orientation=horizontal&page=${page}&per_page=12`;
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`There is not images`));
  });
};
export default API;

// import { Component } from 'react';

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = 'key=23895189-b5b787f85de520230ba9fbe30';

// class API extends Component {
//   state = {
//     searchQuery: '',
//     page: 1,
//   };

//   fetchImages() {
//     const url = `${BASE_URL}?${API_KEY}&q=${this.state.searchQuery}&lang=en,ru&image_type=photo&orientation=horizontal&page=${this.state.page}&per_page=12`;
//     return fetch(url).then(response => {
//       this.incrementPage();
//       return response.json();
//     });
//   }

//   incrementPage() {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//     // this.page += 1;
//   }

//   resetPage() {
//     this.setState({ page: 1 });
//     // this.page = 1;
//   }

//   get query() {
//     return this.state.searchQuery;
//   }

//   set query(newQuery) {
//     // this.searchQuery = newQuery;
//   }
// }
// export default API;
