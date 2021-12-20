(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__146Iv",imageGalleryItem:"ImageGallery_imageGalleryItem__3necw"}},12:function(e,t,a){e.exports={overlay:"Modal_overlay__FGNAT",modal:"Modal_modal__45zXT"}},15:function(e,t,a){e.exports={image:"ImageGalleryItem_image__2bWUa"}},17:function(e,t,a){e.exports={spiner:"Loader_spiner__1DOGy"}},18:function(e,t,a){e.exports={button:"Button_button__3YnYt"}},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),i=a(13),s=a(3),l=a(4),u=a(6),h=a(5),m=a(9),b=(a(23),a(8)),d=a.n(b),g=a(1),p=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleNameChange=function(t){e.setState({query:t.target.value.toLowerCase()})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.query.trim())return Object(m.b)("Please enter something;)");e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.query;return Object(g.jsx)("header",{className:d.a.searchbar,children:Object(g.jsxs)("form",{onSubmit:this.handleSubmit,className:d.a.form,children:[Object(g.jsx)("button",{type:"submit",className:d.a.button,children:Object(g.jsx)("span",{className:d.a.buttonLabel,children:"Search"})}),Object(g.jsx)("input",{className:d.a.input,type:"text",placeholder:"Search images and photos",value:e,name:"query",onChange:this.handleNameChange})]})})}}]),a}(n.Component),j=a(15),f=a.n(j),y=function(e){var t=e.webformatURL,a=e.tags,n=e.onClickImage,r=e.largeImageURL;return Object(g.jsx)("img",{src:t,alt:a,onClick:function(){return n(r)},className:f.a.image})};y.defaultProps={tags:""};var O=y,v=a(11),_=a.n(v),w=function(e){var t=e.images,a=e.onClickImage;return Object(g.jsx)("ul",{className:_.a.imageGallery,children:t.map((function(e){return Object(g.jsx)("li",{className:_.a.imageGalleryItem,children:Object(g.jsx)(O,{webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags,onClickImage:a})},e.id)}))})},x=a(16),S=a.n(x),k=(a(14),a(17)),I=a.n(k),C=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsx)("div",{className:I.a.spiner,children:Object(g.jsx)(S.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})})}}]),a}(n.Component),L=a(18),N=a.n(L),q=function(e){var t=e.onSearch;return Object(g.jsx)("button",{type:"button",onClick:t,className:N.a.button,children:"Load more"})};q.defaultProps={onLoadMore:function(){}};var M=q,U=a(12),G=a.n(U),R=document.querySelector("#modal-root"),D=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(g.jsx)("div",{className:G.a.overlay,onClick:this.handleBackdropClick,children:Object(g.jsx)("div",{className:G.a.modal,children:this.props.children})}),R)}}]),a}(n.Component);function P(e,t){return fetch("".concat("https://pixabay.com","/api/?image_type=photo&orientation=horizontal&q=").concat(e,"&page=").concat(t,"&per_page=12&key=").concat("24180904-cdf25eb395cc9b94381638218")).then((function(e){if(e.ok)return e.json();throw new Error(e.statusText)}))}a(45);var T=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],query:"",page:1,error:null,largeImageURL:"",showModal:!1,loader:!1},e.onSearchQuery=function(t){e.setState({images:[],query:t,page:1})},e.fetchImages=function(){var t=e.state,a=t.query,n=t.page;e.setState({loader:!0}),P(a,n).then((function(t){var a=t.hits;return e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(a)),page:e.page+1}}))})).catch((function(t){Object(m.b)("Trouble. Something is wrong :("),e.setState({error:t})})).finally((function(){return e.setState({loader:!1})}))},e.handleFormSubmit=function(t){e.setState({images:t})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal,largeImageURL:""}}))},e.handleClickImage=function(t){e.setState({largeImageURL:t,showModal:!0})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&this.fetchImages(),t.page!==this.state.page&&window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.showModal,n=e.largeImageURL,r=e.loader;return Object(g.jsxs)("div",{children:[r&&Object(g.jsx)(C,{}),Object(g.jsx)(p,{onSubmit:this.onSearchQuery}),Object(g.jsx)(w,{images:t,onClickImage:this.handleClickImage}),t.length<1&&Object(g.jsxs)("p",{className:"notification",children:[" ","Please enter what you want to see \xaf\\_(\u30c4)_/\xaf"," "]}),a&&Object(g.jsx)(D,{onClose:this.toggleModal,children:Object(g.jsx)("img",{src:n,alt:"",width:650})}),t.length>=12?Object(g.jsx)(M,{onSearch:this.fetchImages}):null,Object(g.jsx)(m.a,{})]})}}]),a}(n.Component);c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(T,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__1JMwN",form:"Searchbar_form__PNgzs",button:"Searchbar_button__wO18X",buttonLabel:"Searchbar_buttonLabel__3zZ1O",input:"Searchbar_input__2DWJH"}}},[[46,1,2]]]);
//# sourceMappingURL=main.c883f03a.chunk.js.map