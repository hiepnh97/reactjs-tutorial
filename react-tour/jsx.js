console.log('=== Start: JSX ===')
const root = document.getElementById('root')

// const courses = [
//     'HTML, CSS',
//     'Javascript',
//     'Python',
//     'AWS'
// ]

// // JSX render array
// const ul = <ul className="list">
//     { courses.map((course, index) => <li className="item" key={index}>{course}</li>) }
// </ul>

// const jsx = (
//     <React.Fragment>
//         <h1>Title 1</h1>
//         <h1>Title 2</h1>
//     </React.Fragment>
// )

// React DOME -> Render UI
// ReactDOM.render(ul, root)
// ReactDOM.render(jsx, root)

// React Component
// function Header () {
//     return (
//         <header>
//             <h1>Header</h1>
//         </header>
//     )
// }

// class Content extends React.Component {
//     render () {
//         return (
//             <div>
//                 <h1>Content</h1>
//                 <p>Content detail</p>
//             </div>
//         )
//     }
// }

// function Footer () {
//     return (
//         <header>
//             <h1>Footer</h1>
//         </header>
//     )
// }

// function App (props) {
//     console.log(props);
//     return (
//         <div id="wrapper">
//             <h1>{props.title}</h1>
//             <Header />
//             <Content />
//             <Footer />
//         </div>
//     )
// }

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

function CourseItem (props) {
    return (
        <div>
            <p>{props.id}</p>
            <h1 onClick={() => console.log(props.title)}>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.studentsCount}</p>
            <img src={props.image}></img>
            <hr/>
        </div>
    )
}

const app = (
    // <App title="Application Demo"/>
    courses.map((course, index) => (
        <CourseItem
            key={index}
            id={course.id}
            title={course.title}
            description={course.description}
            studentsCount={course.students_count}
            image={course.thumbnail_cdn}
        />
    ))
)

ReactDOM.render(app, root)
