// import { Fragment } from "react";
import React from "react";
import Card from "./Card";

import './card.css'
import { DATA_PROJECT } from "../../constants/projects";

export default function Projects() {

    // function ProjectsTitle({ title }) {
    //     return <h1>{title}</h1>;
    // }

    // React Fragment
    // return DATA_PROJECT.map((data, index) => (
    //     <React.Fragment key={index}>
    //         <ProjectsTitle title={data.title} />
    //         <div>{data.description}</div>
    //     </React.Fragment>
    // ));

    return (
        <>
            <div className="projects-container">
                {DATA_PROJECT.map((data, index) => (
                    <Card
                        key={index}
                        id={data.id}
                        title={data.title}
                        desc={data.description}
                        href={`/projects/${data.id}`}
                    />
                ))}
            </div>
        </>
    );
}
