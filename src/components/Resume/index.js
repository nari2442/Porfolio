import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const Resume = ()=>(
<div>
    <Header/>
    <div className="resume-container">
<h1>Resume</h1>
<div className="education-content-container">
    <h1>Education</h1>

<ul className="year-content-list-container">
<li className="year-content-container">
<p>June 2021 - Present</p>
<div className="content-container">
    <h1>Establishment Name | IRC</h1>
    <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
</div>
</li>
<li className="year-content-container">
<p>2012 - 2018</p>
<div className="content-container">
    <h1>Establishment Name | IRC</h1>
    <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
</div>
</li>
<li className="year-content-container">
<p>2010 - 2012</p>
<div className="content-container">
    <h1>Establishment Name | IRC</h1>
    <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
</div>
</li>
</ul>

</div>
<hr/>
<div className="skills-container">
<h1>Skills
& Expertise</h1>
<ul className='skills-list-container'>
    <li>I'm a paragraph. Click here to add your own text and edit me.</li>
    <li>I'm a paragraph. Click here to add your own text and edit me.</li>
    <li>I'm a paragraph. Click here to add your own text and edit me.</li>
    <li>I'm a paragraph. Click here to add your own text and edit me.</li>
    <li>I'm a paragraph. Click here to add your own text and edit me.</li>
</ul>
</div>
<hr/>
<div className="resume-projects-container">
<h1>Projects</h1>
<ul>
    <li>I'm a paragraph. Click here to add your own text and edit me.</li>
    <li>I'm a paragraph. Click here to add your own text and edit me.</li>
    <li>I'm a paragraph. Click here to add your own text and edit me.</li>
    <li>I'm a paragraph. Click here to add your own text and edit me.</li>
    <li>I'm a paragraph. Click here to add your own text and edit me.</li>
</ul>
</div>
    </div>
    <hr/>
    <Footer/>

</div>
)

export default Resume