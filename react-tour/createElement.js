console.log('=== Start Create ===')
const root = document.getElementById('root')

// // Native Dom
// const h1Dom = document.createElement('h1')
// h1Dom.title = 'Hello'
// h1Dom.className = 'heading'
// h1Dom.innerHTML = 'Hello Guys!'
// root.appendChild(h1Dom)

// // By React
// const h1React = React.createElement('h1', {
//     title: 'Hello',
//     className: 'heading',
//     children: 'Hello Guys!'
// },)

// console.dir(h1Dom);
// console.log(h1React);

// // Native Dom
// const ulDom = document.createElement('ul')
// ulDom.className = 'list'
// ulDom.id = 'listId'
// ulDom.style = 'color: red;'
// const liDom = document.createElement('li')
// liDom.className = 'item'
// liDom.innerHTML = 'Item 1'
// const liDom2 = document.createElement('li')
// liDom2.className = 'item'
// liDom2.innerHTML = 'Item 2'

// ulDom.appendChild(liDom)
// ulDom.appendChild(liDom2)
// root.appendChild(ulDom)

// // By React
// const ulReact = React.createElement(
//     'ul', {
//         id: 'listID',
//         color: 'red'
//     },
//     React.createElement('li', null, 'Item 1'),
//     React.createElement('li', null, 'Item 2')
// )

// console.log(ulReact);

// By React
const divReact = React.createElement(
    'div', {
        className: 'post-item',
    },
    React.createElement(
        'h2', {
            title: 'Learn ReactJs'
        },
        'Learn ReactJs'),
    React.createElement(
        'p', {},
        'Learn ReactJs Basic'),
)

console.log(divReact);

// React DOME -> Render UI
ReactDOM.render(divReact, root)
