import githubLogo from '../assets/github-32.svg'

function Project(props) {
    const keyPoints = props.keyPoints?.map((keyPoint, index) => (
        <li className="project-text" key={index}>{keyPoint}</li>
    ));

    return (
    <div className="project-container">
        <h3 className="project-title">{props.name}</h3>
        <div className="project-photo-list">
            <img src={props.img} className='project-photo'/>
            <ul className='project-list'>
                {keyPoints}
            </ul>
        </div>
        <a href={props.github} target="_blank">
          <img src={githubLogo} className="logo github" alt="github logo" />
        </a>
    </div>
    );
}

export default Project; 