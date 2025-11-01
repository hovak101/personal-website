import alexPhoto from '../assets/alex_thumbs_up.jpg';
import Links from '../components/Links.jsx'

function Profile() {

    return (
        <div className="profile-container">
            <img src={alexPhoto} className='profile-photo'/>
            <div className="bio-link-container">
                <p className="profile-bio">I'm a computer science major at San Jose State University. 
                My primary interests are <strong className="interests">robotics and ML</strong>. I've done a lot of 
                personal and team projects, so please check them out below!</p>
                <Links/>
            </div>
        </div>
    );
}

export default Profile;
