import React , {useState, useEffect} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './projects.css'
import {projectsData} from '../../fake-database/index'


const Projects = () => {
    const [category, setCategory] = useState('all');
    const [filterdImages, setFilterdImages] = useState([]);

    useEffect(
        () => {
            category === 'all' ? setFilterdImages(projectsData) : setFilterdImages(projectsData.filter(project => project.category === category))}, 
            [category]
        );



    return(
        <section id="projects" className="py-5">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col sm={12} className="text-capitalize text-center">
                        <div className="section-title">
                            <h1>projects</h1>
                        </div>
                        <div className="projects-list my-4 text-white">
                            <ul className="list-unstyled">
                                <CategoryBtn name="all"   handleSetCategory={setCategory}/>
                                <CategoryBtn name="self"  handleSetCategory={setCategory}/>
                                <CategoryBtn name="work"  handleSetCategory={setCategory}/>
                                <CategoryBtn name="freelance"  handleSetCategory={setCategory}/>
                            </ul>
                        </div>
                    </Col>
                    {filterdImages.map(project =>(
                        <Col lg={4} md={6} sm={12} className={'project '+ project.category} key={project.id}>
                            <a href={project.url}  rel="noreferrer noopener" >
                                <div className="project-deatils text-white">
                                    <div className={'project-img  '+project.status}>
                                        <picture>
                                            <source srcSet={project.imageO} alt={project.imageAlt} />
                                            <img src={project.image} alt={project.imageAlt} className="img-fluid" width={500} height={180}/>
                                        </picture>
                                    </div>
                                    <div className="project-content">
                                        <div className="d-flex justify-content-between align-items-center mb10">
                                            <p className="project-name mb0">{project.name}</p>
                                            <div className="project-status">
                                                <span className={project.status}>{project.status}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="tech-used mb10">
                                            <p className="mb-0">Used Technologies:</p>
                                            <ul className="list-unstyled mb0">
                                                {project.tech.map(tech =>(
                                                    <li className="tech-name">{tech}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className={'project-release project-release-'+project.status}>coming soon</div>
                                    </div>
                                </div>
                            </a>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
        )
}

const CategoryBtn = ({name, handleSetCategory}) =>{
    return (
        <li  onClick={() => handleSetCategory(name) }>{name.toUpperCase()}</li>
    ) 
}
export default Projects;