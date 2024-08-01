import "./All.css"
import Courses from "../courses.json"
import Course from "../Course.jsx"
import { Link } from "react-router-dom"


const Datascience = () => {

    const cr = Courses.filter((obj) => obj.cours == "datascience")
    return (<>
        <div className="allparent">
            {cr.map((course) => (
                <Link className="link" to={`/course/${course.id}`} key={course.id}>
                    <Course key={course.id}
                        image={course.image}
                        title={course.title}
                    />
                </Link>
            ))}
        </div>
    </>);
};

export default Datascience