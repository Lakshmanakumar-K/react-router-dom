import "./All.css"
import Courses from "../courses.json"
import Course from "../Course.jsx"
import { Link } from "react-router-dom"

const All = () => {
    return (<>
        <div className="allparent">
            {Courses.map((course) => (
                <Link className="link" to={`/course/${course.id}`} key={course.id}>
                    <Course key={course.id}
                        image={course.image}
                        title={course.title}
                    />
                </Link>
            ))}
        </div>
    </>);
}

export default All