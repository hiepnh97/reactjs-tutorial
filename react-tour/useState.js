console.log('=== Hooks: useState ===')
// import { useState } from 'react'
const root = document.getElementById('root')

const bill = [1,2,4]
var number = 1

function App() {
    console.log('============', number)
    // const total = bill.reduce((a,b) => a + b)
    // console.log('=======total=====', total)
    // const [counter, setCounter] = React.useState(total)

    const [counter, setCounter] = React.useState(() => {
        // Run only one time
        const total = bill.reduce((a,b) => a + b)
        console.log('=======total=====', total)
        return total
    })

    const handleDecrease = () => setCounter(counter - 1)
    const handleIncrease = () => {
      setCounter(counter + 1)
    //   setCounter(preState => preState + 1 )
    //   setCounter(preState => preState + 1 )
    //   setCounter(preState => preState + 1 )
    }

    const [info, setInfo] = React.useState({
        name: 'Nguyen Hoang Hiep',
        age: '25',
    })
    const handleUpdate = () => {
        // setInfo({
        //     ...info,
        //     gender: 'Male',
        // })
        setInfo(pre => {
            // Handle logic here
            return {
                ...pre,
                gender: 'Male',
            }
        })
    }

    number += 1
    return (
      <div className="App">
        <h1>{counter}</h1>
        <button onClick={handleDecrease}>-</button>
        <button onClick={handleIncrease}>+</button>
        <br/>
        <h1>{JSON.stringify(info)}</h1>
        <button onClick={handleUpdate}>Update</button>
      </div>
    );
  }

ReactDOM.render(<App/>, root)
