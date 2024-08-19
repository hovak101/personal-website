import githubLogo from '../assets/github-32.svg'

function Project(props) {
    const keyPoints = props.keyPoints?.map((keyPoint, index) => (
        <li className="project-text" key={`keypoint-${index}`}>{keyPoint}</li>
    ));

    return (
        <div className="project-container">
            <h3 className="project-title">{props.name}</h3>
            <div className="project-photo-link-list">
                <div className="project-photo-link">
                    <img src={props.img} className='project-photo'/>
                    <a href={props.github} target="_blank" rel="noopener noreferrer">
                        <img src={githubLogo} className="logo github" alt="github logo" />
                    </a>
                </div>
                <ul className='project-list'>
                    {keyPoints}
                </ul>
            </div>
        </div>
    );
}

export default Project;
