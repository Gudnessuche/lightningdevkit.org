(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{360:function(e,n,t){e.exports=t.p+"assets/img/ldk-peer-management.ac42ca47.svg"},408:function(e,n,t){"use strict";t.r(n);var r=t(7),o=Object(r.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"peer-management"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#peer-management"}},[e._v("#")]),e._v(" Peer Management")]),e._v(" "),n("figure",[n("img",{attrs:{src:t(360),alt:"Peer Management"}})]),e._v(" "),n("p",[e._v("One of the first things you'll need to do when building your own Lightning node is connect to a peer. In LDK this is handled by the "),n("a",{attrs:{href:"https://docs.rs/lightning/*/lightning/ln/peer_handler/struct.PeerManager.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("PeerManager")]),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("PeerManager")]),e._v(" has two dependencies:")]),e._v(" "),n("ul",[n("li",[e._v("A "),n("a",{attrs:{href:"https://docs.rs/lightning/*/lightning/ln/channelmanager/index.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("ChannelManager")]),n("OutboundLink")],1),e._v(" that enables it to notify peers when it wants to do things such as open channels.")]),e._v(" "),n("li",[e._v("A "),n("a",{attrs:{href:"https://docs.rs/lightning/*/lightning/routing/gossip/struct.P2PGossipSync.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("P2PGossipSync")]),n("OutboundLink")],1),e._v(" that understands when peers you are connected to send you gossip messages, enables you to forward messages, announce channel opens and more.")])]),e._v(" "),n("p",[e._v("Since LDK knows nothing about your networking stack, you'll need to implement your own networking logic in order to connect to peers on the network. Provide LDK with raw TCP/IP socket data and the library will handle the rest for you.")]),e._v(" "),n("p",[e._v("LDK also handles a number of background tasks that need to happen periodically via "),n("a",{attrs:{href:"https://docs.rs/lightning-background-processor/*/lightning_background_processor/struct.BackgroundProcessor.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("BackgroundProcessor")]),n("OutboundLink")],1)]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("Default Implementation")]),e._v(" "),n("p",[e._v("If you are developing in a Rust "),n("a",{attrs:{href:"https://tokio.rs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tokio"),n("OutboundLink")],1),e._v(" environment, LDK ships with a socket handling "),n("a",{attrs:{href:"https://docs.rs/lightning-net-tokio/*/lightning_net_tokio/",target:"_blank",rel:"noopener noreferrer"}},[e._v("crate"),n("OutboundLink")],1),e._v(" that let's you easily create new connections with peers.")])])])}),[],!1,null,null,null);n.default=o.exports}}]);