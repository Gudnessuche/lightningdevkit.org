(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{261:function(t,e){t.exports=function(t){return null==t}},262:function(t,e,a){},263:function(t,e,a){},264:function(t,e,a){},282:function(t,e,a){"use strict";a(262)},283:function(t,e,a){var n=a(12),i=a(4),s=a(11);t.exports=function(t){return"string"==typeof t||!i(t)&&s(t)&&"[object String]"==n(t)}},284:function(t,e,a){"use strict";a(263)},285:function(t,e,a){"use strict";a(264)},287:function(t,e,a){"use strict";var n=a(261),i=a.n(n),s=a(252),r={name:"PageEdit",computed:{lastUpdated(){return!1===this.$page.frontmatter.lastUpdated?"":this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink(){const t=i()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,{repo:e,docsDir:a="",docsBranch:n="master",docsRepo:s=e}=this.$site.themeConfig;return t&&s&&this.$page.relativePath?this.createEditLink(e,s,a,n,this.$page.relativePath):null},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,a,n,i){if(/bitbucket.org/.test(e)){return e.replace(s.a,"")+"/src"+`/${n}/`+(a?a.replace(s.a,"")+"/":"")+i+`?mode=edit&spa=0&at=${n}&fileviewer=file-view-default`}if(/gitlab.com/.test(e)){return e.replace(s.a,"")+"/-/edit"+`/${n}/`+(a?a.replace(s.a,"")+"/":"")+i}return(s.i.test(e)?e:"https://github.com/"+e).replace(s.a,"")+"/edit"+`/${n}/`+(a?a.replace(s.a,"")+"/":"")+i}}},o=(a(282),a(7)),l=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"page-edit"},[t.editLink?e("div",{staticClass:"edit-link"},[e("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),e("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?e("div",{staticClass:"last-updated"},[e("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports,c=(a(46),a(283)),p=a.n(c),u={name:"PageNav",props:["sidebarItems"],computed:{prev(){return h(d.PREV,this)},next(){return h(d.NEXT,this)}}};const d={NEXT:{resolveLink:function(t,e){return v(t,e,1)},getThemeLinkConfig:({nextLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.next},PREV:{resolveLink:function(t,e){return v(t,e,-1)},getThemeLinkConfig:({prevLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.prev}};function h(t,{$themeConfig:e,$page:a,$route:n,$site:r,sidebarItems:o}){const{resolveLink:l,getThemeLinkConfig:c,getPageLinkConfig:u}=t,d=c(e),h=u(a),v=i()(h)?d:h;return!1===v?void 0:p()(v)?Object(s.k)(r.pages,v,n.path):l(a,o)}function v(t,e,a){const n=[];!function t(e,a){for(let n=0,i=e.length;n<i;n++)"group"===e[n].type?t(e[n].children||[],a):a.push(e[n])}(e,n);for(let e=0;e<n.length;e++){const i=n[e];if("page"===i.type&&i.path===decodeURIComponent(t.path))return n[e+a]}}var _=u,m=(a(284),{components:{PageEdit:l,PageNav:Object(o.a)(_,(function(){var t=this,e=t._self._c;return t.prev||t.next?e("div",{staticClass:"page-nav"},[e("p",{staticClass:"inner"},[t.prev?e("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?e("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?e("span",{staticClass:"next"},["external"===t.next.type?e("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),f=(a(285),Object(o.a)(m,(function(){var t=this._self._c;return t("main",{staticClass:"page"},[this._t("top"),this._v(" "),t("Content",{staticClass:"theme-default-content"}),this._v(" "),t("PageEdit"),this._v(" "),t("PageNav",this._b({},"PageNav",{sidebarItems:this.sidebarItems},!1)),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null));e.a=f.exports},301:function(t,e,a){},302:function(t,e,a){},343:function(t,e,a){"use strict";a(301)},344:function(t,e,a){"use strict";a(302)},370:function(t,e,a){"use strict";a.r(e);var n=a(259),i=a(279),s={name:"Home",components:{NavLink:i.a},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},r=(a(343),a(7)),o=Object(r.a)(s,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"home"},[e("header",{staticClass:"hero"},[e("div",{staticClass:"hero-inner"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v("\n        "+t._s(t.data.heroText||t.$title||"Hello")+"\n      ")]):t._e(),t._v(" "),null!==t.data.tagline?e("p",{staticClass:"description"},[t._v("\n        "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n      ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()])]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(a,n){return e("div",{key:n,staticClass:"feature"},[a.image?e("svg",{attrs:{title:a.title,role:"img"}},[e("use",{attrs:{"xlink:href":"/img/illustrations.svg#"+a.image}})]):t._e(),t._v(" "),e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))])])})),0):t._e(),t._v(" "),t.data.promo?e("div",{staticClass:"promo"},[e("div",{staticClass:"promo-wrapper"},[t.data.promoImage?e("svg",{attrs:{title:t.data.promoTitle,role:"img"}},[e("use",{attrs:{"xlink:href":"/img/illustrations.svg#"+t.data.promoImage}})]):t._e(),t._v(" "),e("div",[null!==t.data.promoTitle?e("h1",{attrs:{id:"promo-title"}},[t._v("\n        "+t._s(t.data.promoTitle)+"\n        ")]):t._e(),t._v(" "),null!==t.data.promoDescription?e("p",{staticClass:"promo-description"},[t._v("\n          "+t._s(t.data.promoDescription)+"\n        ")]):t._e(),t._v(" "),t.data.promoActionText&&t.data.promoActionLink?e("div",{staticClass:"action"},[e("a",{staticClass:"nav-link action-button external",attrs:{href:t.data.promoActionLink}},[t._v("\n            "+t._s(t.data.promoActionText)+"\n          ")])]):t._e()])])]):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"})],1)}),[],!1,null,null,null).exports,l={name:"Cases",components:{NavLink:i.a},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},c=(a(344),Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"cases"},[e("header",{staticClass:"hero"},[e("div",{staticClass:"hero-inner"},[null!==t.data.tagline?e("p",{staticClass:"description"},[t._v("\n        "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n        ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()])]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(a,n){return e("div",{key:n,staticClass:"feature"},[e("div",{staticClass:"feature-image-wrapper"},[a.image?e("img",{attrs:{src:t.$withBase(a.image),alt:a.imageAlt||"hero"}}):t._e()]),t._v(" "),e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))]),t._v(" "),e("NavLink",{staticClass:"nav-link",attrs:{item:{link:a.caseStudyLink,text:"View case study"}}})],1)})),0):t._e()])}),[],!1,null,null,null).exports),p=a(287),u=a(252),d={name:"Layout",components:{LayoutWrap:n.a,Home:o,Cases:c,Page:p.a},computed:{sidebarItems(){return Object(u.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)}}},h=Object(r.a)(d,(function(){var t=this,e=t._self._c;return e("LayoutWrap",[t.$page.frontmatter.cases?e("Cases"):t._e(),t._v(" "),t.$page.frontmatter.home?e("Home"):e("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=h.exports}}]);