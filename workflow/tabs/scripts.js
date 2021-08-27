const data = [
    {
        id: 0,
        title: "JavaScript",
        content: "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification." 
        + " JavaScript is high-level, often just-in-time compiled, and multi-paradigm." 
        + " It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions." 
        + " Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web." 
        + " Over 97% of websites use it client-side for web page behavior, often incorporating third-party libraries." 
        + "<br><br> Most web browsers have a dedicated JavaScript engine to execute the code on the user's device." 
        + " As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative programming styles." 
        + " It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM)."
    },
    {
        id: 1,
        title: "jQuery",
        content: "jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax." 
        + " It is free, open-source software using the permissive MIT License. As of May 2019, jQuery is used by 73% of the 10 million most popular websites." 
        + " Web analysis indicates that it is the most widely deployed JavaScript library by a large margin, having at least 3 to 4 times more usage than any other JavaScript library." 
        + "<br><br> jQuery's syntax is designed to make it easier to navigate a document, select DOM elements, create animations, handle events, and develop Ajax applications." 
        + " jQuery also provides capabilities for developers to create plug-ins on top of the JavaScript library. This enables developers to create abstractions for low-level interaction and animation, advanced effects and high-level, themeable widgets." 
        + " The modular approach to the jQuery library allows the creation of powerful dynamic web pages and Web applications."
    },
    {
        id: 2,
        title: "DOM",
        content: "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document." 
        + " The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree; with them one can change the structure, style or content of a document." 
        + "<br><br> Nodes can have event handlers attached to them. Once an event is triggered, the event handlers get executed.The principal standardization of the DOM was handled by the World Wide Web Consortium (W3C), which last developed a recommendation in 2004." 
        + " WHATWG took over the development of the standard, publishing it as a living document. The W3C now publishes stable snapshots of the WHATWG standard."
    },
    {
        id: 3,
        title: "CSS",
        content: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML." 
        + " CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts." 
        + " <br><br>This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics," 
        + " enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file which reduces complexity and repetition in the structural content" 
        + " as well as enabling the .css file to be cached to improve the page load speed between the pages that share the file and its formatting." 
        + " <br><br>Separation of formatting and content also makes it feasible to present the same markup page in different styles for different rendering methods, such as on-screen, in print, by voice (via speech-based browser or screen reader), and on Braille-based tactile devices."
    }
]

const nav = document.getElementById('nav');
const content = document.getElementById('content');

function selectTab (id){
    const activeTab = document.getElementsByClassName('tab active');
    if (activeTab[0]) {
        activeTab[0].classList.remove('active');
    }
    const selectedTab = document.getElementById(id);
    selectedTab.classList.toggle('active');
    content.innerHTML = data[id].content;
}

function renderTabs(){
    for (let i = 0; i < data.length; i++){
        nav.innerHTML += 
        `<div class = "tab" id = "${data[i].id}" onClick="selectTab(${data[i].id})">${data[i].title}</div>`;
    }
}
renderTabs();
selectTab(0);






