import profilepic from '../assets/profilepic.png';
function AboutMe() {
    return <div className="about-me">
        <img src={profilepic}></img>
        <p>
            Hi! I'm Copy Walenciak, currently in the fifth trimester of the Full Stack Web Development spec at Atlas School! I am a big fan of Node, and I would really like to find an opportunity to use it after graduation, but I'm also finding that I really enjoy React as well! Outside of school and work, I play a lot of tabletop RPGs, both as a player and as a game master!
        </p>
    </div>
}

export default AboutMe;