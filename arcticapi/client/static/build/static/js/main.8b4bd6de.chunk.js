(this.webpackJsonparticproducts=this.webpackJsonparticproducts||[]).push([[0],{105:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(37),c=a.n(l),m=(a(86),a(23)),o=a.n(m),s=a(79),u=a(62),i=a(63),d=a(80),E=a(65),p=a(81),b=a(30),f=a.n(b),h=r.a.createContext(),v=(a(105),a(116)),g=a(115),y=a(74),x=a(122),N=a(123),C=a(120),S=a(7);function O(e){var t=r.a.useContext(h);return r.a.createElement(x.a,{className:""},r.a.createElement("i",{className:"fas fa-store p-2 text-secondary float-left",style:{fontSize:"4rem"}}),r.a.createElement(x.a.Brand,{href:"/",style:{fontSize:"2rem"},className:""},"Arctic Products"),r.a.createElement(N.a,{defaultActiveKey:"/",style:{fontSize:"1.25rem"},className:"align-bottom"},r.a.createElement(N.a.Item,null,r.a.createElement(S.b,{to:"/",className:"text-secondary mr-4"},"Home ")),r.a.createElement(N.a.Item,null,r.a.createElement(S.b,{to:"/about",className:"text-secondary mr-4"},"About ")),r.a.createElement(N.a.Item,null,r.a.createElement(S.b,{to:"/help",className:"text-secondary mr-4"},"Help "))),r.a.createElement(x.a.Collapse,{className:"justify-content-end"},r.a.createElement(N.a.Item,null,r.a.createElement(S.b,{to:"/cart",className:"text-secondary mr-4 float-right"},r.a.createElement("i",{className:"fas fa-shopping-cart p-2 text-secondary",style:{fontSize:"1.5rem"}}),r.a.createElement("span",{style:{fontSize:"1.25rem"}},"(",t.cartCount,") "))),r.a.createElement(x.a.Text,null,r.a.createElement(C.a,{title:"Hello Jeffrey Mohler"},r.a.createElement(C.a.Item,null,"View Profile"),r.a.createElement(C.a.Item,null,"Sign Out")))))}function j(e){return r.a.createElement("div",{className:"App-footer",style:{fontSize:"1rem"}},"Artic Products \xa9 2020")}function w(e){var t={},a=0,n=r.a.useContext(h);t=n.categories;for(var l=0,c=Object.values(t);l<c.length;l++){c[l].total=0}for(var m=0,o=Object.values(n.products);m<o.length;m++){var s=o[m];t[s.category].total=t[s.category].total+1,a++}return r.a.createElement("div",{className:"float-left"},r.a.createElement(N.a,{defaultActiveKey:"/",className:"flex-column pt-3 text-left"},r.a.createElement(S.b,{to:"/",className:"nav-link font-weight-bold"},"All Products (",a,")"),Object.values(t).sort().map((function(e){return r.a.createElement(S.b,{key:e.id,className:"nav-link",to:"/Category/".concat(e.title)},e.title," (",e.total,")")}))))}function k(e){return r.a.createElement("div",null,"Recent Products",r.a.createElement("ul",null,r.a.createElement("li",null,"Product 1"),r.a.createElement("li",null,"Product 2"),r.a.createElement("li",null,"Product 3"),r.a.createElement("li",null,"Product 4")))}var P=a(124);function F(e){return r.a.createElement(P.a,{className:"text-primary"},r.a.createElement(P.a.Img,{variant:"top",src:"".concat("/static/build","/productimages/").concat(e.product.filename,"-1.png")}),r.a.createElement(S.b,{to:"/product/".concat(e.product.id),className:"position-absolute btn btn-secondary",style:{right:0}},"Details"),r.a.createElement(P.a.Body,{className:"bg-secondary p-2 text-center"},r.a.createElement(P.a.Title,null,e.product.name),r.a.createElement(P.a.Text,{style:{fontSize:20}},"$",parseFloat(e.product.price).toFixed(2))))}var T=a(16);function z(e){var t=Object(T.g)({path:"/Category/:id",strict:!0,sensitive:!0}),a=r.a.useContext(h),n=a.products;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",{className:"text-secondary text-center"},"Welcome to Artic Products!"),r.a.createElement(g.a,null,Object.values(n).filter((function(e){if(null!=t){var n=Object.values(a.categories).find((function(e){return e.title===t.params.id}));return e.category===n.id}return e})).map((function(e){return r.a.createElement(y.a,{md:"3",className:"p-4",key:e.id},r.a.createElement(F,{product:e}))})))))}function A(e){return r.a.createElement("div",null,r.a.createElement("div",null,"This is the About Page"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))}function I(e){return r.a.createElement("div",null,r.a.createElement("div",null,"This is the Help Page."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))}var M=a(78),q=a(117);function $(e){var t,a=Object(T.g)({path:"/product/:id",strict:!0,sensitive:!0}),n=r.a.useContext(h),l=n.products;t=Object.values(l).find((function(e){return e.id===parseInt(a.params.id)}));var c=r.a.useState("1"),m=Object(M.a)(c,2),o=m[0],s=m[1];return null==t?r.a.createElement("div",{className:"text-secondary"},r.a.createElement("h2",{className:"mt-5"},"Sorry, Product Was Not Found."),r.a.createElement("h3",null,"Please try again.")):r.a.createElement(v.a,{className:"text-secondary"},r.a.createElement(g.a,null,r.a.createElement(y.a,{md:"8"},r.a.createElement("h1",{className:"p-2"},t.name),r.a.createElement("p",{className:"text-justify"},t.description),r.a.createElement("h3",{className:"text-left"},"$",parseFloat(t.price).toFixed(2)),r.a.createElement("br",null),r.a.createElement(S.b,{to:"/cart",className:"position-absolute btn btn-warning",style:{left:15},onClick:function(e){n.addToCart(t.id)}},"Add to Cart")),r.a.createElement(y.a,{md:"4"},r.a.createElement(q.a,{rounded:!0,src:"".concat("/static/build","/productimages/").concat(t.filename,"-").concat(o,".png"),className:" float-right mt-4",width:"300px",height:"300px"}),r.a.createElement(g.a,{className:""},r.a.createElement(y.a,null),r.a.createElement(y.a,null,r.a.createElement(q.a,{rounded:!0,src:"".concat("/static/build","/productimages/").concat(t.filename,"-1.png"),onMouseEnter:function(){return s(1)},onMouseLeave:function(){return s(1)},className:"float-right mt-4 mb-4",width:"30px",height:"30px"})),r.a.createElement(y.a,null,r.a.createElement(q.a,{rounded:!0,src:"".concat("/static/build","/productimages/").concat(t.filename,"-2.png"),onMouseEnter:function(){return s(2)},onMouseLeave:function(){return s(1)},className:"float-right mt-4 mb-4",width:"30px",height:"30px"})),r.a.createElement(y.a,null,r.a.createElement(q.a,{rounded:!0,src:"".concat("/static/build","/productimages/").concat(t.filename,"-3.png"),onMouseEnter:function(){return s(3)},onMouseLeave:function(){return s(1)},className:"float-right mt-4 mb-4",width:"30px",height:"30px"})),r.a.createElement(y.a,null,r.a.createElement(q.a,{rounded:!0,src:"".concat("/static/build","/productimages/").concat(t.filename,"-4.png"),onMouseEnter:function(){return s(4)},onMouseLeave:function(){return s(1)},className:"float-right mt-4 mb-4",width:"30px",height:"30px"})),r.a.createElement(y.a,null)))))}var B=a(118);function H(e){for(var t=r.a.useContext(h),a=!1,n=0,l=0,c=Object.values(t.cart);l<c.length;l++){void 0!==c[l]&&(a=!0)}return!1===a?r.a.createElement("div",{className:"text-secondary"},r.a.createElement("h1",{className:"text-secondary"},"Shopping Cart"),r.a.createElement("h4",null,"There are no items in the cart")):r.a.createElement("div",{className:"text-secondary"},r.a.createElement("h1",{className:"text-secondary"},"Shopping Cart"),r.a.createElement(B.a,{hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Product"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Extended"),r.a.createElement("th",null))),r.a.createElement("tbody",null,Object.entries(t.cart).map((function(e){var a=Object.values(t.products).find((function(t){return t.id===parseInt(e[0])}));return n+=a.price*e[1],r.a.createElement("tr",{key:a.id},r.a.createElement("th",null,r.a.createElement(q.a,{rounded:!0,src:"/productimages/".concat(a.filename,"-1.png"),width:"100px",height:"100px"})),r.a.createElement("th",null,a.name),r.a.createElement("th",null,e[1]),r.a.createElement("th",null,"$",parseFloat(a.price).toFixed(2)),r.a.createElement("th",null,"$",parseFloat(a.price*e[1]).toFixed(2)),r.a.createElement("th",null,r.a.createElement(S.b,{to:"/cart",className:"btn btn-secondary",onClick:function(n){t.removeFromCart(a.id,e[1])}},"Remove")))}))),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Total"),r.a.createElement("th",null),r.a.createElement("th",null),r.a.createElement("th",null,"$",parseFloat(n).toFixed(2)),r.a.createElement("th",null)))),r.a.createElement(S.b,{to:"/checkout",className:"btn btn-warning float-right w-100"},"Checkout"))}var L=a(121),W=a(73),_=a(119),G=a(35),J=a(28),K=a(77),R=Object(K.a)("pk_test_CPAu6sGwqjTbRvKkWFmBaOCO006josfk80");var D=function(e){return r.a.createElement(J.Elements,{stripe:R},r.a.createElement(V,null))},V=function(e){var t=r.a.useContext(h),a=t.getCartTotal(),n={},l=0,c=Object(J.useStripe)(),m=Object(J.useElements)(),s=Object(T.f)();return Object.entries(t.cart).map((function(e){var a=Object.values(t.products).find((function(t){return t.id===parseInt(e[0])}));return n[l]={pid:e[0],price:a.price,qty:e[1]},l++,n})),r.a.createElement(G.c,{initialValues:{name:"Conrad Fox",address1:"1234",address2:"5678",city:"Provo",state:"UT",zipcode:"84602",total:a,items:n},validateOnChange:!1,validateOnBlur:!1,validate:function(e){var t={};return null!==e.name&&""!==e.name||(t.name="Name is a required field"),null!==e.address1&&""!==e.address1||(t.address1="Address1 is a required field"),null!==e.city&&""!==e.city||(t.city="City is a required field"),null!==e.state&&""!==e.state||(t.state="State is a required field"),null!==e.zipcode&&""!==e.zipcode||(t.zipcode="Zip is a required field"),0===a&&(t.payment="Cart is empty"),t},onSubmit:function(e,a){var n,r;return o.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return console.log("submit",e),l.next=3,o.a.awrap(f.a.post("/api/sale/",{values:e}));case 3:return n=l.sent,console.log(n.data),l.next=7,o.a.awrap(c.confirmCardPayment(n.data.client_secret,{payment_method:{card:m.getElement(J.CardElement),billing_details:{name:e.name,address:e.address1+" "+e.address2+" "+e.city+", "+e.state+" "+e.zipcode}}}));case 7:r=l.sent,console.log(r,1),r.error?(console.log(r.error.message),a.setFieldError("payment",r.error.message)):"succeeded"===r.paymentIntent.status&&(t.clearCart(),s.push("/receipt"));case 10:case"end":return l.stop()}}))}},(function(e){return r.a.createElement(Q,{form:e,total:a})}))},Z={style:{base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}},disabled:!1},Q=function(e){return r.a.createElement(v.a,null,r.a.createElement(G.b,null,r.a.createElement("h1",{className:"text-secondary float-left pt-1"},"Checkout"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(g.a,null,r.a.createElement(y.a,null,r.a.createElement("div",{className:"text-left bg-light border border-dark rounded p-2"},r.a.createElement("h5",{className:"text-decoration-underline"},"Shipping"),r.a.createElement(U,{title:"Name:",name:"name",type:"text",disabled:e.form.isSubmitting}),r.a.createElement(U,{title:"Address1:",name:"address1",type:"text",disabled:e.form.isSubmitting}),r.a.createElement(U,{title:"Address2:",name:"address2",type:"text",disabled:e.form.isSubmitting}),r.a.createElement(U,{title:"City:",name:"city",type:"text",disabled:e.form.isSubmitting}),r.a.createElement(U,{title:"State:",name:"state",type:"text",disabled:e.form.isSubmitting}),r.a.createElement(U,{title:"Zip:",name:"zipcode",type:"number",disabled:e.form.isSubmitting}))),r.a.createElement(y.a,null,r.a.createElement("div",{className:"text-left bg-light border border-dark rounded p-2"},r.a.createElement("h5",{className:"text-decoration-underline"},"Payment"),r.a.createElement("br",null),r.a.createElement("div",{className:"bg-danger border border-light rounded pt-3 pl-2 pr-2"},r.a.createElement(G.a,{name:"payment"},(function(t){return r.a.createElement(L.a.Group,null,Z.disabled=e.form.isSubmitting,r.a.createElement(J.CardElement,{options:Z}),t.meta.error&&r.a.createElement("span",{className:"text-warning"},t.meta.error))}))),r.a.createElement("br",null),r.a.createElement("div",{className:"text-center"},"Your card will be charged $",e.total,". ",r.a.createElement("br",null),r.a.createElement("br",null),e.form.isSubmitting?r.a.createElement(W.a,{type:"submit",className:"btn-warning",disabled:e.form.isSubmitting},r.a.createElement(_.a,{animation:"border",size:"sm",disabled:!0})," ",r.a.createElement("span",null,"\xa0"),"Purchase"):r.a.createElement(W.a,{type:"submit",className:"btn-warning",disabled:e.form.isSubmitting},"Purchase")))))),r.a.createElement("br",null))},U=function(e){return r.a.createElement(G.a,{name:e.name},(function(t){return r.a.createElement(L.a.Group,null,e.title&&r.a.createElement(L.a.Label,null,e.title),r.a.createElement(L.a.Control,Object.assign({type:e.type,placeholder:e.placeholder,disabled:e.disabled},t.field)),t.meta.touched&&t.meta.error&&r.a.createElement("div",{className:"text-warning"},t.meta.error))}))};function Y(e){return r.a.createElement("div",{className:"text-left text-secondary"},r.a.createElement("br",null),r.a.createElement("h2",null,"Thank you for your order!"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))}var X=function(){return r.a.createElement(S.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:""},r.a.createElement(v.a,{fluid:!0,className:"min-vh-100 d-flex flex-column"},r.a.createElement(g.a,null,r.a.createElement(y.a,{className:"bg-primary"},r.a.createElement(O,null))),r.a.createElement(g.a,{className:" flex-grow-1"},r.a.createElement(y.a,{className:"bg-secondary",md:"2"},r.a.createElement(w,null)),r.a.createElement(y.a,{className:"bg-success",md:"8"},r.a.createElement(T.c,null,r.a.createElement(T.a,{path:"/about"},r.a.createElement(A,null)),r.a.createElement(T.a,{path:"/help"},r.a.createElement(I,null)),r.a.createElement(T.a,{path:"/product/"},r.a.createElement($,null)),r.a.createElement(T.a,{path:"/cart/"},r.a.createElement(H,null)),r.a.createElement(T.a,{path:"/checkout/"},r.a.createElement(D,null)),r.a.createElement(T.a,{path:"/receipt/"},r.a.createElement(Y,null)),r.a.createElement(T.a,{path:"/"},r.a.createElement(z,null)))),r.a.createElement(y.a,{className:"bg-info",md:"2"},r.a.createElement(k,null))),r.a.createElement(g.a,{className:"bg-primary"},r.a.createElement(y.a,{className:"bg-primary"},r.a.createElement(j,null)))))))},ee=a(34),te=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(E.a)(t).call(this,e))).addToCart=function(e){a.state.cart[e]?a.setState((function(t){return Object(ee.a)(t,(function(t){t.cart[e]=t.cart[e]+1,t.cartCount=t.cartCount+1}))})):a.setState((function(t){return Object(ee.a)(t,(function(t){t.cart[e]=1,t.cartCount=t.cartCount+1}))}))},a.removeFromCart=function(e,t){a.setState((function(a){return Object(ee.a)(a,(function(a){delete a.cart[e],a.cartCount=a.cartCount-t}))}))},a.getCartTotal=function(){var e=0;return Object.entries(a.state.cart).map((function(t){var n=Object.values(a.state.products).find((function(e){return e.id===parseInt(t[0])}));return e+=n.price*t[1]})),e},a.clearCart=function(){a.setState((function(e){return Object(ee.a)(e,(function(e){e.cart={},e.cartCount=0}))}))},a.actions={addToCart:a.addToCart,removeFromCart:a.removeFromCart,getCartTotal:a.getCartTotal,clearCart:a.clearCart},a.state={categories:{},products:{},cart:{},cartCount:0},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.Provider,{value:Object(s.a)({},this.state,{},this.actions)},r.a.createElement(X,null))}},{key:"componentDidMount",value:function(){var e,t,a,n,r,l,c,m,s,u,i,d,E,p,b,h;return o.a.async((function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,o.a.awrap(f.a.get("/api/category/"));case 2:for(e=v.sent,t={},a=!0,n=!1,r=void 0,v.prev=7,l=e.data[Symbol.iterator]();!(a=(c=l.next()).done);a=!0)m=c.value,t[m.id]=m;v.next=15;break;case 11:v.prev=11,v.t0=v.catch(7),n=!0,r=v.t0;case 15:v.prev=15,v.prev=16,a||null==l.return||l.return();case 18:if(v.prev=18,!n){v.next=21;break}throw r;case 21:return v.finish(18);case 22:return v.finish(15);case 23:return this.setState({categories:t}),v.next=26,o.a.awrap(f.a.get("/api/product/"));case 26:for(s=v.sent,u={},i=!0,d=!1,E=void 0,v.prev=31,p=s.data[Symbol.iterator]();!(i=(b=p.next()).done);i=!0)h=b.value,u[h.id]=h;v.next=39;break;case 35:v.prev=35,v.t1=v.catch(31),d=!0,E=v.t1;case 39:v.prev=39,v.prev=40,i||null==p.return||p.return();case 42:if(v.prev=42,!d){v.next=45;break}throw E;case 45:return v.finish(42);case 46:return v.finish(39);case 47:this.setState({products:u});case 48:case"end":return v.stop()}}),null,this,[[7,11,15,23],[16,,18,22],[31,35,39,47],[40,,42,46]])}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(112);c.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},82:function(e,t,a){e.exports=a(113)},86:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.8b4bd6de.chunk.js.map