// import project1 from '../../Assets/images/project-1.webp'
// import project3 from '../../Assets/images/project-3.webp'//not exist
import project4 from '../../Assets/images/project-4.webp'
import project5 from '../../Assets/images/project-5.webp'
import project6 from '../../Assets/images/project-6.webp'
import project7 from '../../Assets/images/project-7.webp'
import project8 from '../../Assets/images/project-8.webp'
import project9 from '../../Assets/images/project-9.webp'
import project010 from '../../Assets/images/project-11.webp'
import project011 from '../../Assets/images/project-10.webp'
import project012 from '../../Assets/images/project-12.webp'
import project013 from '../../Assets/images/project-13.webp'
import project014 from '../../Assets/images/project-14.webp'
import project015 from '../../Assets/images/project-15.webp'

// import projectO1 from '../../Assets/images/project-1.jpg'
// import projectO3 from '../../Assets/images/project-3.jpg'//not exist
import projectO4 from '../../Assets/images/project-4.jpg'
import projectO5 from '../../Assets/images/project-5.jpg'
import projectO6 from '../../Assets/images/project-6.jpg'
import projectO7 from '../../Assets/images/project-7.jpg'
import projectO8 from '../../Assets/images/project-8.jpg'
import projectO9 from '../../Assets/images/project-9.jpg'
import project10 from '../../Assets/images/project-11.jpg'
import project11 from '../../Assets/images/project-10.png'
import project12 from '../../Assets/images/project-12.png'
import project13 from '../../Assets/images/project-13.png'
import project14 from '../../Assets/images/project-14.jpg'
import project15 from '../../Assets/images/project-15.jpg'


const projectsData =[
    // {
    //     "id" : 1,
    //     "imagOe" : projectO1,
    //     "image" : project1,
    //     "tech" : [ "Html5", "CSS3",'Bootstrap4', "Javascript", 'Jquery' ],
    //     "name" : "Coder bits",
    //     "status" : "offline",//offline-upgrading-pending-enhancing-compeleted-finished
    //     "tag" : "homepage",
    //     "text" : "this is a project",
    //     "category" : "self",
    //     "imageAlt" : "Coder-bits project",
    //     "url" : null,
    //   }, 
      // {
      //   "id" : 2,
      //   "imagOe" : projectO3,
      //   "image" : project3,
      //   "tech" : [ "Html5", "CSS3",'Bootstrap4', "Javascript", 'Jquery' ],
      //   "name" : "project 3",
      //   "status" : "offline",
      //   "tag" : "allprojects",
      //   "text" : "this is a project2",
      //   "category" : "self",
      //   "imageAlt" : "alt",
      //   "url" : null,
      // }, 
      {
        "id" : 3,
        "imagOe" : projectO4,
        "image" : project4,
        "tech" : [ "Html5", "CSS3",'Bootstrap4', "Javascript", 'Jquery' ],
        "name" : "Flyo landpage",
        "status" : "live",
        "tag" : "allprojects",
        "text" : "this is a project2",
        "category" : "self",
        "imageAlt" : "Flyo project",
        "url" : "https://baher-flyo.netlify.app/",
      }, 
      {       
        "id" : 4,
        "imagOe" : projectO5,
        "image" : project5,
        "tech" : [ "Html5", "CSS3",'Bootstrap4', "Javascript", 'Jquery' ],
        "name" : "Scenic",
        "status" : "live",
        "tag" : "allprojects",
        "text" : "this is a project2",
        "category" : "self",
        "imageAlt" : "Scenic project",
        "url" : "https://baher-scenic.netlify.app/",
      }, 
      {       
        "id" : 5,
        "imagOe" : projectO6,
        "image" : project6,
        "tech" : [ "Html5", "CSS3",'Bootstrap4', "Javascript", 'Jquery', 'php', 'mySQL', 'laravel' ],
        "name" : "Rowadun",
        "status" : "live",
        "tag" : "allprojects",
        "text" : "this is a project2",
        "category" : "work",
        "imageAlt" : "Rowadun project",
        "url" : "https://www.rowadun.com/",
      }, 
      {       
        "id" : 6,
        "imagOe" : projectO7,
        "image" : project7,
        "tech" : [ "Html5", "CSS3",'Bootstrap4', "Javascript", 'Jquery', 'php', 'mySQL', 'laravel' ],
        "name" : "Attractive car",
        "status" : "offline", //add expired
        "tag" : "allprojects",
        "text" : "this is a project2",
        "category" : "work",
        "imageAlt" : "Attractive-car project",
        "url" : null,
      }, 
      {       
        "id" : 7,
        "imagOe" : projectO8,
        "image" : project8,
        "tech" : [ "Html5", "CSS3",'Bootstrap4', "Javascript", 'Jquery', 'php', 'mySQL', 'laravel' ],
        "name" : "Akwan media",
        "status" : "live",
        "tag" : "allprojects",
        "text" : "this is a project2",
        "category" : "work",
        "imageAlt" : "Akwan-media project",
        "url" : "https://www.akwanmedia.com/ar",
      }, 
      {       
        "id" : 8,
        "imagOe" : projectO9,
        "image" : project9,
        "tech" : [ "WIX / EditorX" ],
        "name" : "advalue",
        "status" : "live",
        "tag" : "allprojects",
        "text" : "this is a project2",
        "category" : "freelance",
        "imageAlt" : "advalue project",  
        "url" : 'https://www.advaluesolutions.com/',
      },
      {
        "id" : 9,
        "imageO" : project010,
        "image" : project10,
        "tech" : [ "Html5", "CSS3",'Bootstrap4', "Javascript" ],
        "name" : "Madz",
        "status" : "offline",
        "tag" : "allprojects",
        "text" : "this is a project2",
        "category" : "freelance",
        "imageAlt" : "Madz project",
        "url" : null,
      }, 
      {       
        "id" : 10,
        "imageO" : project011,
        "image" : project11,
        "tech" : [ "Html5", "CSS3", "react-bootstrap", "Reactjs", 'JSX', 'PWA'],
        "name" : "macline",
        "status" : "live",
        "category" : "freelance",
        "imageAlt" : "macline project",
        "url" : 'https://macline.netlify.app/',
      },
      {       
        "id" : 11,
        "imageO" : project012,
        "image" : project12,
        "tech" : [ 'WordPress'],
        "name" : "Igroup",
        "status" : "offline",
        "category" : "freelance",
        "imageAlt" : "Igroup project",
        "url" : null,
      },
      {       
        "id" : 12,
        "imageO" : project013,
        "image" : project13,
        "tech" : [ "Html5", "CSS3", "react-bootstrap", "Reactjs", 'JSX', 'PWA'],
        "name" : "Dr.Ashraf El-Kelany",
        "status" : "live",
        "category" : "freelance",
        "imageAlt" : "Dr.ashraf El-kelany project",
        "url" : 'https://ashrafelkelany.netlify.app/',
      },
      {       
        "id" : 13,
        "imageO" : project014,
        "image" : project14,
        "tech" : [ "PHP", "Laravel8", 'mySQL'],
        "name" : "Dim glass",
        "status" : "live",
        "category" : "freelance",
        "imageAlt" : "Dimglass project",
        "url" : 'https://dimglass.net/',
      },
      {       
        "id" : 14,
        "imageO" : project015,
        "image" : project15,
        "tech" : [ "Wordpress"],
        "name" : "scent3",
        "status" : "live",
        "category" : "freelance",
        "imageAlt" : "scent3 project",
        "url" : 'https://scent3.com/',
      },
      {       
        "id" : 15,
        "imageO" : null,
        "image" : null,
        "tech" : [ "Wordpress"],
        "name" : "Etax",
        "status" : "live",
        "category" : "work",
        "imageAlt" : "etax",
        "url" : 'https://etax.com.eg/',
      },
      {       
        "id" : 16,
        "imageO" : null, // if not found
        "image" : null,
        "tech" : [ "Reactjs", "react-bootstrap","PHP", "Laravel8",'mySQL'],
        "name" : "Case Managment system", // big title
        "status" : "live",
        "category" : "work",
        "imageAlt" : "case managment project",
        "url" : ''
      },
      {       
        "id" : 17,
        "imageO" : null, // if not found
        "image" : null,
        "tech" : [ "Reactjs", "react-bootstrap","PHP", "Laravel8",'mySQL'],
        "name" : "Employee portal", // big title
        "status" : "live",
        "category" : "work",
        "imageAlt" : "Employee portal project",
        "url" : 'https://ess.eta.gov.eg/',
      },


]

export default projectsData;