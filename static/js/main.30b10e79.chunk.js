(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{16:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__jYfP_",ImageGalleryItem:"ImageGallery_ImageGalleryItem__2CgaV","ImageGalleryItem-image":"ImageGallery_ImageGalleryItem-image__3lHET"}},18:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3C7W1",Modal:"Modal_Modal__2aHdR"}},25:function(e,t,a){e.exports={Image:"ImageGalleryItem_Image__ulWQn"}},26:function(e,t,a){e.exports={Button:"Button_Button__rEFFk"}},33:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(3),c=a.n(o),s=(a(33),a(19)),l=a(4),i=a(5),u=a(7),h=a(6),m=a(23),d=a.n(m),g=a(24),j=a(28),p=a(8),b=a.n(p),f=a(1),y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.handleChange=function(t){var a=t.currentTarget.value;e.setState({searchQuery:a.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()&&(e.props.submit(e.state.searchQuery),e.reset())},e.reset=function(){e.setState({searchQuery:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(f.jsx)("header",{className:b.a.Searchbar,children:Object(f.jsxs)("form",{className:b.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(f.jsx)("button",{type:"submit",className:b.a.SearchButton,children:Object(f.jsx)("span",{children:Object(f.jsx)(j.a,{})})}),Object(f.jsx)("input",{className:b.a.SearchInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.searchQuery,onChange:this.handleChange})]})})}}]),a}(r.Component),O=y,v=a(25),S=a.n(v);var x=function(e){var t=e.imageObj;return Object(f.jsx)("img",{src:t.webformatURL,alt:t.tags,className:S.a.Image})},_=a(16),I=a.n(_);var w=function(e){var t=e.imageArray,a=e.onImgClick;return Object(f.jsx)("ul",{className:I.a.ImageGallery,children:t.map((function(e){return Object(f.jsx)("li",{className:I.a.ImageGalleryItem,onClick:function(){return a(e)},children:Object(f.jsx)(x,{imageObj:e})},e.id)}))})},k=a(26),C=a.n(k);var M=function(e){var t=e.fetchMoreImg;return Object(f.jsx)("button",{className:C.a.Button,onClick:t,type:"button",children:"Load more"})},A=a(17),B=a.n(A),G=a(27),N=function(){var e=Object(G.a)(B.a.mark((function e(t,a){var r;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat("https://pixabay.com/api/","?").concat("key=23895189-b5b787f85de520230ba9fbe30","&q=").concat(t,"&lang=en,ru&image_type=photo&orientation=horizontal&page=").concat(a,"&per_page=12"),e.next=3,fetch(r).then((function(e){return e.ok?e.json():Promise.reject(new Error("There is no images"))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Q=N,F=a(18),D=a.n(F),L=document.querySelector("#modal-root"),E=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&e.props.modalClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.modalClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(f.jsx)("div",{className:D.a.Overlay,onClick:this.handleBackdropClick,children:Object(f.jsx)("div",{className:D.a.Modal,children:this.props.children})}),L)}}]),a}(r.Component),T=E,U=(a(64),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={imageArr:[],searchQuery:"",page:1,status:"idle",error:null,showModal:!1,modalImage:null,modalAlt:null},e.handleFormSubmit=function(t){e.setState({imageArr:[],searchQuery:t,page:1})},e.onLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e.openModal=function(t){var a=t.largeImageURL,r=t.tags;e.setState({showModal:!0,modalImage:a,modalAlt:r})},e.closeModal=function(t){e.setState({showModal:!1,modalImage:null,modalAlt:null})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,r=this.state,n=r.searchQuery,o=r.page;t.searchQuery!==n&&(this.setState({status:"pending"}),Q(n,o).then((function(e){return a.setState({imageArr:e.hits,page:1,status:"resolved"})})).catch((function(e){return a.setState({error:e,status:"rejected"})}))),t.page!==o&&1!==o&&(this.setState({status:"pending"}),Q(n,o).then((function(e){return a.setState((function(t){return{imageArr:[].concat(Object(s.a)(t.imageArr),Object(s.a)(e.hits))}}))}),this.setState({status:"resolved"})).catch((function(e){return a.setState({error:e,status:"rejected"})})),g.animateScroll.scrollToBottom(200))}},{key:"render",value:function(){var e=this.state,t=e.imageArr,a=e.showModal,r=e.modalImage,n=e.modalAlt,o=e.status,c=e.error;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(O,{submit:this.handleFormSubmit}),"resolved"===o&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(w,{imageArray:t,onImgClick:this.openModal}),0===t.length&&Object(f.jsx)("h1",{children:"No images found"}),t.length>=12&&Object(f.jsx)(M,{fetchMoreImg:this.onLoadMore})]}),"pending"===o&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(w,{imageArray:t,onImgClick:this.openModal}),Object(f.jsx)(d.a,{type:"ThreeDots",color:"#3f51b5",height:70,width:70})]}),a&&Object(f.jsx)(T,{modalClose:this.closeModal,children:Object(f.jsx)("img",{src:r,alt:n})}),"rejected"===o&&Object(f.jsx)("div",{children:c.message})]})}}]),a}(r.Component)),K=U;c.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(K,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__vKe8D",SearchForm:"Searchbar_SearchForm__3zZg7",SearchButton:"Searchbar_SearchButton__1UBj1",SearchInput:"Searchbar_SearchInput__2MBUZ"}}},[[65,1,2]]]);
//# sourceMappingURL=main.30b10e79.chunk.js.map