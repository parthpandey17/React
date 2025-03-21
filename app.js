const heading=React.createElement("h1",{id:"heading",xyz:"abc"},"Hello world from react");
// const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); 

//create this structure using react

// <div id="parent">
//     <div id="child">
//         <h1></h1>
//         <h2></h2>
//     </div>
//     <div id="child2">
//         <h1></h1>
//         <h2></h2>
//     </div>
// </div>

const parent=React.createElement("div",{id:"parent"},[
    React.createElement(
        "div",{id:"chlid"},
    //sibling
        [React.createElement("h1",{},"I am a h1 tag"),React.createElement("h2",{},"I am a h2 tag")]
    ),
    React.createElement(
        "div",{id:"chlid2"},
    //sibling
        [React.createElement("h1",{},"I am a h1 tag"),React.createElement("h2",{},"I am a h2 tag")]
    ),
]
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);