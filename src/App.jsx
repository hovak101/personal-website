import Profile from './components/Profile.jsx'
import Project from './components/Project.jsx'
import Navbar from './components/Navbar.jsx'
import EmailWithCopy from './components/EmailWithCopy.jsx';

function App(props) {
  const projectList = props.projects?.map((project) => (
    <Project id={project.id} img={project.img} name={project.name} keyPoints={project.keyPoints} key={project.id} github={project.github}/>
  ));

  return (
    <>
      <Navbar/>
      <h1 className="title" id="profile">Hi, I'm Alex Hovakimyan</h1>
      <Profile/>
      <h2 id="projects">Projects</h2>
      <div className="projects-container">
        {projectList}
      </div>
      <h2 id="contact">Contact Me</h2>
      <EmailWithCopy/>
    </>
  )
}

export default App
