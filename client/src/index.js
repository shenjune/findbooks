import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";


// We call this a “root” DOM node because everything inside it will be managed by React DOM
// https://reactjs.org/docs/rendering-elements.html
ReactDOM.render(<App />, document.getElementById("root"));

// Service workers essentially act as proxy servers that sit between web applications, the browser, and the network (when available). They are intended, among other things, to enable the creation of effective offline experiences, intercept network requests and take appropriate action based on whether the network is available, and update assets residing on the server. They will also allow access to push notifications and background sync APIs.

//Service worker concepts and usage
//A service worker is an event-driven worker registered against an origin and a path. It takes the form of a JavaScript file that can control the web-page/site that it is associated with, intercepting and modifying navigation and resource requests, and caching resources in a very granular fashion to give you complete control over how your app behaves in certain situations (the most obvious one being when the network is not available).
//A service worker is run in a worker context: it therefore has no DOM access, and runs on a different thread to the main JavaScript that powers your app, so it is not blocking. It is designed to be fully async; as a consequence, APIs such as synchronous XHR and localStorage can't be used inside a service worker.
//Service workers only run over HTTPS, for security reasons. Having modified network requests, wide open to man in the middle attacks would be really bad. In Firefox, Service Worker APIs are also hidden and cannot be used when the user is in private browsing mode.//

// Taken from: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
registerServiceWorker();
