import profile from '../../Assets/images/profile.png';
import profileWebp from '../../Assets/images/profile.webp';
import introImg from '../../Assets/images/frame2.png'
import introImgwebp from '../../Assets/images/frame2.webp'
import github from '../../Assets/badges/github.svg'
import linkedin from '../../Assets/badges/linkedin.svg'
import mail from '../../Assets/badges/mail.svg'
import codepen from '../../Assets/badges/codepen.svg'
import adderssImg from '../../Assets/badges/location.svg'
import phoneImg from '../../Assets/badges/phone.svg'

const aboutData = {
        "name" : "Baher Essam",
        "adderss" : "Cairo, Egypt.",
        "phone" : "(+02) 01146786272",
        'email': 'contact@baher.essam.com',
        "adderssImg" : adderssImg,
        "phoneImg" : phoneImg,
        'emailImg': mail,
        'age': 25,
        "job" : [ "Freelancer", "Web Developer" ],
        "skills" : ["Html5", "CSS3",'Bootstrap4','Matrtlize.css','Tailwind css', "Javascript", 'Jquery',  "react-bootstrap", "Reactjs", 'JSX', 'PWA', 'laravel',"WIX / EditorX" , "Wordpress"  ],
        "photo" : profile,
        "photoWebp" : profileWebp,
        "photoAlt" : 'profile-photo',
        "introImg" : introImg,
        "introImgwebp" : introImgwebp,
        "introImgAlt" : 'intro-photo',
        "pref" : `
            Web development has been always my passion. I still remember coding my first line of code and making it print “hello world!”. It was almost magic, being able to get the computer to do whatever I wanted.

            I love applying responsive design with a nice animation and watching my web pages shrink into mobile screens and still look amazing. It’s oddly satisfying.`,
        "Social" : [
            {
                'id':1,
                'name': 'github',
                "photo" : github,
                "url" : "https://github.com/Baher-essam"
            },
            {
                'id':2,
                'name': 'linkedin',
                "photo" : linkedin,
                "url" : "https://www.linkedin.com/in/baher-essam/"
            },
            {
                'id':3,
                'name': 'codepen',
                "photo" : codepen,
                "url" : "https://codepen.io/Baher-Essam"
            },
            {
                'id':4,
                'name': 'mail',
                "photo" : mail,
                "url" : "mailto:contact@baher.essam.com"
            }
        ]
}

export default aboutData
