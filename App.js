

const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},React.createElement('h1',{id:"heading"},[React.createElement('h1',{id:"heading"},"I am an h1 tag "),React.createElement('h2',{id:"heading"},"I am an h2 tag")])),

    React.createElement("div",{id:"child"},React.createElement('h1',{id:"heading"},[React.createElement('h1',{id:"heading"},"I am an h1 tag "),React.createElement('h2',{id:"heading"},"I am an h2 tag")])),
    ])
const child=React.createElement("div",{id:"child"});
const newHeading=React.createElement("h1");
const heading=React.createElement('h1',{id:"heading"},"hey this react ");
const root =ReactDOM.createRoot(document.getElementById('root'));

console.log(root);
root.render(parent);