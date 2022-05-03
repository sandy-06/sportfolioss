import React from 'react';
import'./App.css';
import Header from './components/Homepages/Header';
import Navbar from './components/Homepages/Navbar';
import About from './components/Homepages/About';
import Education from './components/Homepages/Eduction';
import Experience from './components/Homepages/Experience';
import Projects from './components/Homepages/Projects';
import Contact from './components/Homepages/Contact';
import Certificate from './components/Homepages/Certificate';
import Footer from './components/Homepages/Footer';
import Login from './components/Homepages/Login';
import Skill from './components/Homepages/Skill'
//resume check on download
// admin components
import Admin from './components/adminComponents/Admin';
//edit components
import EditAbout from './components/editComponents/EditAbout';
import EditCertificate from './components/editComponents/EditCertificate';
import EditEducation from './components/editComponents/EditEducation';
import EditExperience from './components/editComponents/EditExperience';
import EditProjects from './components/editComponents/EditProjects';
import EditSkills from './components/editComponents/EditSkills';

import {Route} from 'react-router-dom';
//import {Element} from 'react-scroll';
import Register from './components/Homepages/Register';





function App() {

  return (
    <div className="App">
     {/* navbar*/ }
     <Navbar />

     <Route exact path="/" component={Header}/>
     <Route exact path="/" component={About}/>
     <Route exact path="/" component={Education}/>
     <Route exact path="/" component={Certificate}/>
     <Route exact path="/" component={Contact}/>
     <Route exact path="/" component={Experience}/>
     <Route exact path="/" component={Projects}/>
     <Route exact path="/" component={Skill}/>
     
    
     
     <Route exact path="/login" component={Login}/>
     <Route exact path="/admin" component={Admin}/>


     <Route exact path="/editEducation/:id" component={EditEducation}/>
     <Route exact path="/editExperience/:id" component={EditExperience}/>
     <Route exact path="/editAbout/:id" component={EditAbout}/>
     <Route exact path="/editProjects/:id" component={EditProjects}/>
     <Route exact path="/editCertificate/:id" component={EditCertificate}/>
     <Route exact path="/editSkills/:id" component={EditSkills}/>


     <Route component={Footer}/>

    
     
     <Footer/>
     
     
    
     <Register/>



     <Admin/>

     <EditAbout/>
     <EditCertificate/>
     <EditEducation/>
     <EditExperience/>
     <EditProjects/>
     <EditSkills/>








    </div>
  );
}

export default App;
