
console.log('=== Start: useEffect ===');

const tabs = ['posts', 'comments', 'albums']

function Content () {
    const [title, setTitle] = React.useState('')
    const [posts, setPosts] = React.useState([])
    const [type, setType] = React.useState('posts')
    const [show, setShow] = React.useState(false)
    const [countDown, setCountDown] = React.useState(180)
    
    // React.useEffect(() => {
    //     // Call each time after component mounted
    //     console.log('=== Mounted ===')
    //     document.title = title
    // })
    // React.useEffect(() => {
    //     // Call only one time after component mounted
    //     console.log('=== Mounted ===')
    // }, [])
    React.useEffect(() => {
        // Call when component mounted or type change changed
        console.log('=== Mounted ===')
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(response => response.json())
        .then(posts => setPosts(posts))
    }, [type])

    React.useEffect(() => {
        // Call when component mounted or type change changed
        console.log('=== Mounted ===')
        const handleScroll = () => {
            setShow(window.scrollY >= 200)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            // Cleanup function: Call before component unmounted
            console.log('=== Unmounted ===')
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // React.useEffect(() => {
    //     // Call when component mounted or type change changed
    //     console.log('=== Mounted ===')
    //     const timeId = setInterval(() => {
    //         setCountDown(pre => pre - 1)
    //     }, 1000)
    //     return () => clearInterval(() => timeId)
    // }, [])

    React.useEffect(() => {
        // Call when component mounted or type change changed
        console.log('=== Mounted ===')
        const timeId = setTimeout(() => {
            setCountDown(countDown - 1)
        }, 1000)
        // return () => clearTimeout(timeId)
    }, [countDown])

    return (
        <div>
            {/* {tabs.map(tab => (
                <button
                    key={tab}
                    onClick={() => {setType(tab)}}
                    style={type === tab ? {backgroundColor: 'red'} : {}}
                >{tab}</button>
            ))}
            <input
                value={title}
                onChange={(e) => {setTitle(e.target.value)}}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{type === 'comments' ? post.body : post.title}</li>
                ))}
            </ul>
            {show && <button
                style={{
                    position: 'fixed',
                    right: 20,
                    bottom: 20,
                }}
            >To Top</button>} */}
            <h1>{countDown}</h1>
        </div>
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
            {console.log('=== Render ===')}
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'))
 