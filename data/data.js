

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// HERE ALL THE DATA FROM THE WEB PAGE WILL BE INSERTED
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


//=========================================
// INTRODUCTION
//=========================================
export const introductionData = {
    // Hi, my name is....
    yourName: "K SURYA KARTHIKEYA!", // Insert your name
    socialNetwork: [
        {
            icon: "fa fa-envelope-o",  // find other icon in https://fontawesome.com/v4.7/icons/
            nameSocialNetwork: "Email",  // label name
            url: "mailto:karthikeya16082@gmail.com"  //  url of the Social Network
        },
        {
            icon: "fa fa-linkedin", // find other icon in https://fontawesome.com/v4.7/icons/
            nameSocialNetwork: "Linkedin",
            url: "https://www.linkedin.com/in/vijay-khv-1779a9207/"
        },
        {
            icon: "fa fa-github-alt",   // find other icon in https://fontawesome.com/v4.7/icons/
            nameSocialNetwork: "Github",
            url: "https://github.com/vijaykhv"
        }


    ],

    // Page session direction
    nav: [
        {
            optionNav: "About me",
            idSection: "about"    // If it changes, check the session id in <index.html> ;
        },
        {
            optionNav: "Skills",
            idSection: "skills"   // If it changes, check the session id in <index.html> ;
        },
        {
            optionNav: "Certificates",
            idSection: "projects"  // If it changes, check the session id in <index.html> ;
        }


    ]

}


//=========================================
//                ABOUT ME
//=========================================
export const aboutMeData = {
    title: "ABOUT ME",
    description: "Eagerly pursuing a Bachelor's degree in Data Science and Artificial Intelligence at ICFAI Tech, Hyderabad, I am an inquisitive and adaptable individual committed to continual self-improvement. My hands-on experience spans multiple programming languages and practical skills essential in my field. Proficient in C, Java, Python, and JavaScript, I approach challenges with a pragmatic mindset, evaluating analytical perspectives and applying them to meet specific objectives.",
    titleURL: "View Resume",
    urlCV: "assets/Resume.pdf"
}




//=========================================
//                 SKILLS 
//=========================================
export const skillsData = [


    {
        img: "assets/python.svg",  // card image  > insert the svg image in the assets folder
        nameSkill: "Python"      //  card name
    },

    {
        img: "assets/sql.svg",  // card image  > insert the svg image in the assets folder
        nameSkill: "SQL"      //  card name
    },

    {
        img: "assets/c.svg",
        nameSkill: "C"
    },

    {
        img: "assets/java.svg",
        nameSkill: "JAVA"
    },

    {
        img: "assets/git.svg",
        nameSkill: "Git"
    },

    {
        img: "assets/html-5.svg",
        nameSkill: "HTML"
    },

    {
        img: "assets/css3.svg",
        nameSkill: "CSS"
    },

    {
        img: "assets/js.svg",
        nameSkill: "JavaScript"
    },


]
//=========================================
//                PROJECTS
//=========================================
export const projectsData = [
    {
        title: "Exploratory Data Analysis",    // card image  > insert the svg image in the assets folder
        describe: "",
        url: "https://fsp-assessment-certificates.s3-ap-southeast-1.amazonaws.com/KarthikeyaKs-124922538.pdf",  // url of the Github repository
        img: "assets/EDA.svg"//image Project
    },
    {
        title: "Data Processing and Visualization",    // card image  > insert the svg image in the assets folder
        describe: "",
        url: "https://fsp-assessment-certificates.s3.ap-southeast-1.amazonaws.com/%27/s3/buckets/fsp-assessment-certificates%27/Karthikeya%2BKs_6p5xzkmk8w.pdf.pdf",  // url of the Github repository
        img: "assets/DV.svg"//image Project
    },
    {
        title: "Aquiring Data",    // card image  > insert the svg image in the assets folder
        describe: "",
        url: "https://fsp-assessment-certificates.s3-ap-southeast-1.amazonaws.com/KarthikeyaKs-124919303.pdf",  // url of the Github repository
        img: "assets/AD.svg"//image Project
    },
]








