(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{46:function(e,s,t){},48:function(e,s,t){},49:function(e,s,t){"use strict";t.r(s);var a=t(3),i=t.n(a),r=t(14),n=t.n(r),c=t(5),o=t.n(c),m=t(15),l=t(16),d=t(17),u=t(20),j=t(19),v=t(18),p=t.n(v),b=t(2),g=t.n(b),h=(t(46),t(0));function _(e){var s=e.id,t=e.year,a=e.title,i=e.summary,r=e.poster,n=e.genres;return Object(h.jsxs)("div",{className:"movie",children:[Object(h.jsx)("img",{className:"movie__poster",src:r,alt:s}),Object(h.jsxs)("div",{className:"movie__data",children:[Object(h.jsx)("h3",{className:"movie__title",children:a}),Object(h.jsx)("h5",{className:"movie__year",children:t}),Object(h.jsx)("ul",{className:"movie__genres",children:n.map((function(e,s){return Object(h.jsx)("li",{className:"genres__genre",children:e},s)}))}),Object(h.jsx)("p",{className:"movie__summary",children:i.slice(0,140)})]})]})}_.prototype={id:g.a.number.isRequired,year:g.a.number.isRequired,title:g.a.string.isRequired,summary:g.a.string.isRequired,poster:g.a.string.isRequired,genres:g.a.arrayOf(g.a.string.isRequired)};var y=_,O=(t(48),function(e){Object(u.a)(t,e);var s=Object(j.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=s.call.apply(s,[this].concat(i))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark((function s(){var t,a;return o.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,p.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=s.sent,a=t.data.data.movies,e.setState({movies:a,isLoading:!1}),console.log(e.state.movies);case 6:case"end":return s.stop()}}),s)}))),e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,s=e.isLoading,t=e.movies;return Object(h.jsx)("section",{className:"container",children:s?Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(h.jsx)("div",{className:"movies",children:t.map((function(e){return Object(h.jsx)(y,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),t}(i.a.Component));n.a.render(Object(h.jsx)(O,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.e3eb7cac.chunk.js.map