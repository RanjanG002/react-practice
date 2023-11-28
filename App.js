// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

{/* <div parent>
    <div child1></div>
<h1></h1>
<h2></h2>
<div child2></div>
<h1></h1>
<h2></h2>
</div>
<div parent2>
    <div child1></div>
<h1></h1>
<h2></h2>
<div child2></div>
<h1></h1>
<h2></h2>
</div> */}

const heading = React.createElement("div",
{id:'parent'},[React.createElement("div",
{id:'child1.'},[React.createElement("h1",
{id:'heading'},),React.createElement("h2",
{id:'heading'},)]),React.createElement("div",
{id:'child2'},[React.createElement("h1",
{id:'heading'},),React.createElement("h2",
{id:'heading'},)])]);
// const heading = React.createElement("h1",{id:'heading'},"H1 element is Working");
const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
