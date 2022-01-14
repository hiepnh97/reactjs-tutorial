console.log('=== Start: DOM Event ===')
const root = document.getElementById('root')


function App () {
    return (
        <div id="wrapper">
            <button
                onClick={
                    () => console.log('Click')
                }
                onDoubleClick={
                    (event) => console.log('Double Click', event.target)
                }
            >Click Me!</button>
        </div>
    )
}

ReactDOM.render(<App/>, root)
