import linkedinLogo from '../assets/linkedin-128.svg'
import githubLogo from '../assets/github-128.svg'

function Links() {
    return(<div>
        <a href="https://github.com/hovak101" target="_blank">
          <img src={githubLogo} className="logo github" alt="github logo" />
        </a>
        <a href="https://www.linkedin.com/in/alex-hovakimyan" target="_blank">
          <img src={linkedinLogo} className="logo linkedin" alt="linkedin logo" />
        </a>
    </div>);
}

export default Links;