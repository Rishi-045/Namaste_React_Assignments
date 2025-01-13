● What is Emmet?
Emmet is web devlopment tool that allows you to write HTML and CSS code faster using
shorthand syntax that expands into full peice of code.

● Difference between a Library and Framework?
Library is a collection of prewritten code snippets.that can used and reused to perform certain
tasks.
Example :- React,jQuery (both are the javaScript library)

Framework is a platform that provides a basic foundation or sturcture for devloping software
application.
Example :- next.js(javaScript Framework),django(python Framework)

the key diffrence between them is Inversion of control. When using a library the full control on the devloper. who tells the application when to call library functions.
When using a framework the control is in the hand of framework . the framework call your code at predefined points , dictating the flow of application.

● What is CDN? Why do we use it?
A CDN(Content Delivery Network) is a network of servers located around the world that delivers web content (like images,scripts,libraries,stylesheets) to user quickly and efficiently.
Use of CDN :-
-> Faster Loading - Since files are served from nearest server content loads faster for user.
-> Reducing Server Load - Reduce traffic from main server to CDN servers.
-> Gloabal Reach - Users from world wide get similar performance because of distributed servers.

● Why is React known as React?
React is a javaScript library for building User Interface, primarly for single page application.React core principle is that the User Interface should automatically update (or react) to changes in the application states an props.

● What is crossorigin in script tag?
crossorigin origin attribute is used when including resources (like script,libraries,images) from diffrent origin(domain). it tells teh browser how to handle CORS(cross origin resource sharing) for the included resources.

● What is diference between React and ReactDOM?
React is a core Library used for building User Interface . React focuses on the logic an rendering components but does't interact with browser DOM.
ReactDOM is library that is bridge between the React core library and the browser's DOM. It provides methods to render React components to the actual DOM.

● What is difference between react.development.js and react.production.js files via CDN?
Use react.devlopment.js during devloping or debugging your application. it helps to catches issues early by providing detailed message and warnings.
Use react.production.js when deploying your appplication to production. it ensures better performance, faster loading times by removing unnecessary devlopment features.

● What is async and defer?
async is an attribute that is using with script tag. The behaviour of async is it downloads the scripts in the parallel while parsing the HTML. Once the script is download,it executed immediately,possibly before the HTML parsing is complete.
if multiple scripts are included, their execution order is not guaranted.

defer is also an attribute that is using with <> tag.The behaviour of defer is it downloads the scripts in the parallel while parsing the HTML, But the script is only executed after the entire HTML document has been parsed.
if multiple scripts are included, their execution order depends on which order they appears in the HTML document.
