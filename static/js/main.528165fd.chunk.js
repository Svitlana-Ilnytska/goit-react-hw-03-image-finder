(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__146Iv",imageGalleryItem:"ImageGallery_imageGalleryItem__3necw"}},14:function(e,t,a){e.exports={image:"ImageGalleryItem_image__2bWUa"}},16:function(e,t,a){e.exports={spiner:"Loader_spiner__1DOGy"}},17:function(e,t,a){e.exports={button:"Button_button__3YnYt"}},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),s=a(12),i=a(3),u=a(4),l=a(6),m=a(5),b=a(8),h=(a(22),a(7)),g=a.n(h),j=a(1),f=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleNameChange=function(t){e.setState({query:t.target.value.toLowerCase()})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.query.trim())return Object(b.b)("Please enter something;)");e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.query;return Object(j.jsx)("header",{className:g.a.searchbar,children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:g.a.form,children:[Object(j.jsx)("button",{type:"submit",className:g.a.button,children:Object(j.jsx)("span",{className:g.a.buttonLabel,children:"Search"})}),Object(j.jsx)("input",{className:g.a.input,type:"text",placeholder:"Search images and photos",value:e,name:"query",onChange:this.handleNameChange})]})})}}]),a}(n.Component),p=a(14),d=a.n(p),y=function(e){e.id;var t=e.webformatURL,a=e.tags,n=e.onClickImage;return Object(j.jsx)("img",{src:t,alt:a,onClick:n,className:d.a.image})};y.defaultProps={tags:""};var O=y,v=a(11),_=a.n(v),x=function(e){var t=e.images,a=e.onClickImage;return Object(j.jsx)("ul",{className:_.a.imageGallery,children:t.map((function(e){return Object(j.jsx)("li",{className:_.a.imageGalleryItem,children:Object(j.jsx)(O,{webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags,onClickImage:function(){return a(e.id)}})},e.id)}))})},S=a(15),w=a.n(S),I=(a(13),a(16)),N=a.n(I),k=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:N.a.spiner,children:Object(j.jsx)(w.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})})}}]),a}(n.Component),q=a(17),C=a.n(q),L=function(e){var t=e.onSearch;return Object(j.jsx)("button",{type:"button",onClick:t,className:C.a.button,children:"Load more"})};L.defaultProps={onLoadMore:function(){}};var G=L;function U(e,t){return fetch("".concat("https://pixabay.com","/api/?image_type=photo&orientation=horizontal&q=").concat(e,"&page=").concat(t,"&per_page=12&key=").concat("24180904-cdf25eb395cc9b94381638218")).then((function(e){if(e.ok)return e.json();throw new Error(e.statusText)}))}a(44);var B=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],query:"",page:1,status:"idle",error:null},e.onSearchQuery=function(t){e.setState({images:[],query:t,page:1})},e.scrollToBottom=function(){window.scrollBy({top:-50,left:0,behavior:"smooth"})},e.fetchImages=function(){e.setState({status:"pending"});var t=e.state,a=t.query,n=t.page;1!==n&&e.scrollToBottom(),U(a,n).then((function(t){var a=t.hits;return e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(a)),page:e.page+1,status:"resolved"}}))})).catch((function(t){return e.setState(Object(b.b)("Trouble. Something is wrong :("),{error:t,status:"rejected"})}))},e.handleFormSubmit=function(t){e.setState({images:t})},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.status;return"idle"===a?Object(j.jsx)(f,{onSubmit:this.onSearchQuery}):"pending"===a?Object(j.jsx)(k,{}):"rejected"===a?Object(j.jsx)("p",{children:"No more"}):"resolved"===a?Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{onSubmit:this.onSearchQuery}),Object(j.jsx)(x,{images:t}),t.length>=12?Object(j.jsx)(G,{onSearch:this.fetchImages}):null,Object(j.jsx)(b.a,{})]}):void 0}}]),a}(n.Component);o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__1JMwN",form:"Searchbar_form__PNgzs",button:"Searchbar_button__wO18X",buttonLabel:"Searchbar_buttonLabel__3zZ1O",input:"Searchbar_input__2DWJH"}}},[[45,1,2]]]);
//# sourceMappingURL=main.528165fd.chunk.js.map