console.log('=== Start: Mounted & UnMounted ===');
function Content () {
    return (
        <h1>Nguyen Hoang Hiep</h1>
    )
}

function App () {
    const [isShow, setIsShow] = React.useState(false)
    return (
        <div style={{paddingLeft: 10}}>
            <button 
                onClick={() => {setIsShow(!isShow)}}
            >Toggle</button>
            {isShow && <Content />}
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'))
 