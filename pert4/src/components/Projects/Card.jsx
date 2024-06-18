import { Link } from "react-router-dom";

export default function Card({ id, title, desc, href }) {  

    return (
        <Link className="card-container" to={href}>
            <div>
                <p>{id}</p>
            </div>
            <h1 className="card-title">{title}</h1>
            <p className="card-desc">{desc}</p>
        </Link>
    );
}
