import { Outlet, Link } from "react-router-dom"
import "./Parentroute.css"

const Parentroute = () => {
    return (<div>
        <div className="butparent">
            <Link to="/" style={{ cursor: "auto" }}>
                <button className="butchild"><span className="sp">All</span></button>
            </Link>
            <Link to="/fullstackdevelopment" style={{ cursor: "auto" }}>
                <button className="butchild"><span className="sp">FULL STACK DEVELOPMENT</span></button>
            </Link>
            <Link to="/datascience" style={{ cursor: "auto" }}>
                <button className="butchild"><span className="sp">DATA SCIENCE</span></button>
            </Link>
            <Link to="/cybersecurity" style={{ cursor: "auto" }}>
                <button className="butchild"><span className="sp">CYBER SECURITY</span></button>
            </Link>
            <Link to="/cloudcomputing" style={{ cursor: "auto" }}>
                <button className="butchild"><span className="sp">CLOUD COMPUTING</span></button>
            </Link>
        </div>
        <hr></hr>
        <Outlet />
    </div>);
}

export default Parentroute