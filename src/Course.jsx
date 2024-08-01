import "./Course.css"
import PropTypes from "prop-types"
import { useParams } from "react-router-dom"
import Courses from "./courses.json"

const Course = ({ id, image, title }) => {
    const params = useParams();

    const course = Courses.find((cr) => cr.id == params.courseId);

    return (
        <>
            {course ?
                (<div className="childflex"><div className="child"><img style={{ height: "300px", borderRadius: "5px" }} src={course.image} alt=""></img>
                    <h4>{course.title}</h4><p style={{ textAlign: "left" }}>In this blog, you’ll be reading about some of the best Full-Stack Development Project Ideas in 2024 which you must definitely try hands-on as these projects can really leverage your chances of standing out from the crowd.</p></div></div>) : (<div className="allchild">
                        {console.log(course)}
                        <img style={{ width: "100%", height: "300px", borderRadius: "5px" }} src={image} alt=""></img>
                        <h4>{title}</h4>
                    </div>)}
        </>);
};

Course.propTypes = {
    id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
}

export default Course