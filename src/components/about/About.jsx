import './about.scss';
import nkar from '../../images/sam.b0e6f83d1022f7c4108b.jpg';


const About = () => {

    return(
        <div className='about'>
            <img src={nkar} alt="nkar" height="300px" width="300px" />
            <h1 className='aboutTitle'>About Us</h1>
            <span>This website created by Samvel Sargsyan. Inside of the Home page are published Upcoming/New Movies. I used the frontend part using HTML, CSS, JavaScript and ReactJS. From the help of these programming languages, i was able to create a fun, enjoyable Movie page. I have learned to create many Websites on this platform from the web programming classes I have took on the DASA2 platform, with my teacher Armen Derikyan.</span>
        </div>
        )

}


export default About;