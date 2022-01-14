console.log('=== Start: Flexible React Component ===')
const root = document.getElementById('root')

const courses = [
    {
      "id": 2,
      "title": "HTML, CSS từ Zero đến Hero",
      "slug": "html-css",
      "description": "Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.",
      "thumbnail": "courses/2.png",
      "content": null,
      "preview_origin": "youtube",
      "preview_youtube_id": "R6plN3FvzFY",
      "preview_video": null,
      "language": "html",
      "syntax_highlight": "language-html",
      "level": "Trình độ cơ bản",
      "priority": 10,
      "students_count": 104287,
      "deleted_at": null,
      "created_at": "2020-04-10T14:23:13.000000Z",
      "updated_at": "2022-01-02T09:56:06.000000Z",
      "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-production/courses/2.png",
      "preview_video_cdn": ""
    },
    {
      "id": 1,
      "title": "JavaScript Cơ Bản",
      "slug": "javascript-co-ban",
      "description": "Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.",
      "thumbnail": "courses/1.png",
      "content": null,
      "preview_origin": "youtube",
      "preview_youtube_id": "0SJE9dYdpps",
      "preview_video": null,
      "language": "javascript",
      "syntax_highlight": "language-javascript",
      "level": "Trình độ cơ bản",
      "priority": 30,
      "students_count": 63009,
      "deleted_at": null,
      "created_at": "2020-06-10T14:23:13.000000Z",
      "updated_at": "2022-01-02T09:59:08.000000Z",
      "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-production/courses/1.png",
      "preview_video_cdn": ""
    },
    {
      "id": 7,
      "title": "Kiến Thức Nhập Môn",
      "slug": "lessons-for-newbie",
      "description": "Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.",
      "thumbnail": "courses/7.png",
      "content": null,
      "preview_origin": "youtube",
      "preview_youtube_id": "M62l1xA5Eu8",
      "preview_video": null,
      "language": null,
      "syntax_highlight": null,
      "level": "Trình độ cơ bản",
      "priority": 0,
      "students_count": 46518,
      "deleted_at": null,
      "created_at": "2020-02-10T14:23:13.000000Z",
      "updated_at": "2022-01-02T09:58:05.000000Z",
      "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-production/courses/7.png",
      "preview_video_cdn": ""
    },
]

// UI Component: only show UI elements
function CourseItem (props) {
    return (
        <div>
            <p>{props.id}</p>
            <h1 onClick={() => props.onClick(props.title)}>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.studentsCount}</p>
            <img src={props.image}></img>
            <hr/>
        </div>
    )
}

const Form = {
    Input() {
        return <input/>
    },
    CheckBox() {
        return <input type="checkbox"/>
    },
}

function Button ({title, href, onClick}) {
    // Click button -> run script on click -> redirect
    let Component = 'button'
    const props = {}
    if (href) {
        props.href = href
        Component = 'a'
    }
    if (onClick) props.onClick = onClick
    console.log(props);

    return (
        <Component {...props} className='btn'>{title}</Component>
    )
}

function Input ({label, ...inputProps}) {
    return (
        <div>
            <label>{label}</label>
            <input {...inputProps} />
        </div>
    )
}

function List ({data, children}) {
    return (
        <ul>
            {data.map((item, index) => <li key={index}>{item}</li>)}
            {/* {data.map((item, index) => children(item, index))} */}
            {/* {data.map((...props) => children(...props))} */}
            {data.map(children)}
            {/* // Don't do last way because it's difficult to understand */}
        </ul>
    )
}

// Container
function App () {
    // use callBack
    const handleClick = (title) => {
        console.log(title)
    }

    // const type = 'CheckBox'
    // console.log(Form[type]);
    // const Component = Form[type]

    const cars = ['BMW', 'Audi', 'Mercedes', 'Porsche']

    return (
        // <div className="wrapper">
        //     {
        //         courses.map((course, index) => (
        //             <CourseItem
        //                 key={index}
        //                 id={course.id}
        //                 title={course.title}
        //                 description={course.description}
        //                 studentsCount={course.students_count}
        //                 image={course.thumbnail_cdn}
        //                 onClick={handleClick}
        //                 // onClick={() => handleClick(course)} // Don't this way, it's will be reduce performance
        //             />
        //         ))
        //     }
        // </div>
        // <div className="wrapper">
        //     <Form.Input/>
        //     <Component/>
        // </div>
        <div className="wrapper">
            <Button
                title='Click Me!'
                // href="/"
                onClick={() => console.log(Math.random())}
            />
            <Input
                label='Full name'
                type='text'
                placeholder='Enter your name'
                title='This is input'
                onFocus={() => console.log('Focus')}
            />
            <List data={cars}>
                {(item, index) => <li key={index}>{item} - 2</li>}
            </List>
        </div>
    )
}

ReactDOM.render(<App/>, root)
