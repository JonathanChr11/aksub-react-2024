import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DATA_PROJECT } from "../../constants/projects";

export default function Details() {
    const { projectsId } = useParams();
    const [projectsData, setProjectsData] = useState([]);

    useEffect(() => {
        const filteredData = DATA_PROJECT.filter(
            (project) => projectsId === project.id
        );
        setProjectsData(filteredData[0]);
    }, [projectsId])
    
    console.log(projectsData)

    return (
        <div>
            <h1>{projectsData.title}</h1>
            <div>{projectsData.description}</div>
        </div>
    );
}
