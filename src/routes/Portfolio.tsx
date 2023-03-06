import {useEffect, useState} from "react";

export interface Project {
    _id: string,
    title: string,
    description: string,
    repository: string
}

const Portfolio = () => {
    const [projects, setProjects] = useState<null|Project[]>(null)
    useEffect(() => {
        fetch('https://personal-825b.restdb.io/rest/projects', {
            method: 'GET',
            headers: {
                'x-apikey': `${process.env.DB_API_KEY}`
            }
        })
            .then((res) => {
                if(!res.ok) return;
                res.json().then((project)=> setProjects(project));
            });
    })
    return (
        <>
            <div>Hello Portfolio</div>
            <div style={{border: '3px black'}}>
                { projects !== null ?
                    projects.map(project =>
                        <div>
                            <h1>{project.title}</h1>
                            <div>{project.repository}</div>
                            <div>{project.description}</div>
                        </div>
                    ):
                    <div>No projects</div>
                }
            </div>
        </>
    );
}
export default Portfolio;