console.log('=== Start: Two Way Binding ===')

// Random gift
// const gifts = ['A', 'B', 'C', 'D', 'E', 'F']

// function RandomGift () {
//     const [gift, setGift] = React.useState('None Gift')
//     const handleGetGift = () => {
//         console.log('=== Get Gift')
//         setGift(gifts[Math.floor(Math.random() * gifts.length)])
//     }

//     return (
//         <div style={{paddingLeft: 10}}>
//             <h1>{gift}</h1>
//             <button onClick={handleGetGift}>Get Gift</button>
//         </div>
//     )
// }

// Two-way Binding
const courses = [
    {
        id: 1,
        name: 'HTML'
    },
    {
        id: 2,
        name: 'CSS'
    },
    {
        id: 3,
        name: 'Javascript'
    }
]

function TwoWayBinding () {
    // Example 1
    // const [name, setName] = React.useState('')
    // const [email, setEmail] = React.useState('')
    // const handleGetGift = () => {
    //     console.log('=== Get Gift')
    //     setGift(gifts[Math.floor(Math.random() * gifts.length)])
    // }
    // console.log(name);

    // const handleSubmit = () => {
    //     console.log('=== Submit: ===', name, email)
    // }

    // return (
    //     <div style={{paddingLeft: 10}}>
    //         <input
    //             value={name}
    //             onChange={(e) => setName(e.target.value)}
    //         />
    //         <input
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //         />
    //         <button
    //             style={{marginLeft: 10}}
    //             onClick={handleSubmit}>Submit</button>
    //     </div>
    // )

    // Example 2
    // const [selected, setSelected] = React.useState()
    // console.log('=== selected: ===', selected)

    // const handleSubmit = () => {
    //     console.log('=== handleSubmit: ===', selected)
    // }

    // return (
    //     <div style={{paddingLeft: 10}}>
    //         {courses.map((course, i) => (
    //             <div key={course.id} >
    //                 <input
    //                     type='radio'
    //                     value={course.id}
    //                     checked={selected === course.id}
    //                     onChange={() => setSelected(course.id)}
    //                 />
    //                 {course.name}
    //             </div>
    //         ))}
    //         <button
    //             style={{marginLeft: 10}}
    //             onClick={handleSubmit}>Submit</button>
    //     </div>
    // )

    // Example 3
    const [checked, setChecked] = React.useState([])
    console.log('=== Checkeds: ===', checked)

    const handleChecked = (id) => {
        console.log('=== handleChecked: ===', checked)
        // setChecked(pre => {
        //     if (pre.includes(id)) {
        //         return pre.filter(item => item !== id)
        //     } else {
        //         return [...pre, id]
        //     }
        // })
        if (checked.includes(id)){
            checked.filter(item => item.id != id)
            setChecked(pre => pre.filter(item => item !== id))
        }
        else {
            setChecked([...checked, id])
        }
    }
    const handleSubmit = () => {
        console.log(checked)
    }

    return (
        <div style={{paddingLeft: 10}}>
            {courses.map((course, i) => (
                <div key={course.id} >
                    <input
                        type='checkbox'
                        value={course.id}
                        checked={checked.includes(course.id)}
                        onChange={() => handleChecked(course.id)}
                    />
                    {course.name}
                </div>
            ))}
            <button
                style={{marginLeft: 10}}
                onClick={handleSubmit}>Submit</button>
        </div>
    )
}

const oldTodos = () => {
    console.log('==oldTodos==')
    return JSON.parse(localStorage.getItem('todos')) || []
}
// Todolist
function TodoList () {
    const [input, setInput] = React.useState([])
    // const [todos, setTodos] = React.useState(
    //     () => JSON.parse(localStorage.getItem('todos')) || [])
    const [todos, setTodos] = React.useState(oldTodos)

    const handleAdd = () => {
        if (!todos.includes(input)) {
            setTodos(pre => {
                const newJobs = [...pre, input]

                // Save to localStorage
                const jsonJobs = JSON.stringify(newJobs)
                console.log('=== newJobs: ===', jsonJobs)
                localStorage.setItem('todos', jsonJobs)
                return newJobs
            })
        }
        setInput('')
        console.log('=== input: ===', input)
        console.log('=== todos: ===', todos)
    }

    return (
        <div style={{paddingLeft: 10}}>
            <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                style={{marginLeft: 10}}
                onClick={handleAdd}>Add</button>
            <ul>
                {todos.map((todo, index) => <li key={index}>{todo}</li>)}
            </ul>
        </div>
    )
}


// ReactDOM.render(<RandomGift/>, document.getElementById('root'))
// ReactDOM.render(<TwoWayBinding/>, document.getElementById('root'))
ReactDOM.render(<TodoList/>, document.getElementById('root'))
