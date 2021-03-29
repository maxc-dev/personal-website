/*
  personal projects
*/

class Project {
  constructor(title, datestart, datefinish, languages, skills, about, github, playstore, imgur) {
    this.title = title;
    this.datestart = datestart;
    this.datefinish = datefinish;
    this.languages = languages;
    this.skills = skills;
    this.about = about;
    if (typeof github == "undefined") {
      this.github = "";
    } else {
      this.github = "<a class=\"button\" href=\"" + github + "\">Code on GitHub</a>";
    }
    if (typeof playstore == "undefined") {
      this.playstore = "";
    } else {
      this.playstore = "<a class=\"button\" href=\"" + playstore + "\">View on Play Store</a>";
    }
    if (typeof imgur == "undefined") {
      this.imgur = "";
    } else {
      this.imgur = "<blockquote class=\"imgur-embed-pub\" lang=\"en\" data-id=\"a/6cnEmEs\"  ><a href=\"//imgur.com/a/" + imgur + "\">" + this.title + " Preview</a></blockquote><script async src=\"//s.imgur.com/min/embed.js\" charset=\"utf-8\"></script>";
    }
  }

  show() {
    return "<div class=\"card\">" +
      "<h3>" + this.title + "</h3>" +
      "<div class=\"card-container\">" +
      "</p><p class=\"exp\">Languages: " + this.languages.join(", ") +
      "</p><p class=\"exp\">Skills: </p><p class=\"explist\">  » " + this.skills.join("</p><p class=\"explist\">  » ") + "</p><p>" +
      this.about + "</p>" + this.imgur + "<p class=\"sub\">" + this.datestart + " - " + this.datefinish + "</p>" + this.github + this.playstore + "<hr><br></div></div>";
  }
}

function printProjects() {
  ghost_writer = new Project("Ghost Writer", "November 2020", "November 2020", ["Kotlin"], ["Artifical Intelligence", "Predictive Text Services"], "Ghost Writer takes an input of lyrics from songs of an artist and analyses them to create a predictive text service using native Kotlin.", "https://github.com/maxc-dev/GhostWriter", "undefined", "5qliYxd");

  kotlinfx = new Project("KotlinFX", "June 2020", "July 2020", ["Kotlin", "JavaFX", "FXML", "Gradle"], ["Kotlin Framework Creation"], "KotlinFX is a framework which allows users to easily create JavaFX projects which supports the use of Kotlin. KotlinFX is available on GitHub as a template project.", "https://github.com/maxc-dev/KotlinFX");

  moss = new Project("MOSS: Operating System", "March 2020", "June 2020", ["JavaFX", "Maven"], ["Operating System Design", "Complex UI Design"], "MOSS is an operating system simulator complete with advanced algorithms for memory management, process scheduling and disk management. The user interface was a futuristic design inspired by JARVIS from iron man.", "https://github.com/maxc-dev/MOSS", "undefined", "6cnEmEs");

  clotheswebsite = new Project("Clothing Website", "November 2019", "January 2020", ["PHP, HTML, CSS, MariaDB"], ["Website Backend", "Database Management"], "This was a website for my Web & Database Systems coursework which I received a 90% (1st) in. The website uses PHP to pull data from a MariaDB Database hosted on a local Wamp server, and then displays it dynamically onto a HTML document.", "https://github.com/maxc-dev/ClothingWebsite");

  reviseright = new Project("Revise Right", "May 2019", "July 2019", ["Kotlin", "JSON", "Gradle"], ["Android App Development", "Google Play Store"], "Revise Right is an educational flashcards app published on the Play Store", "https://github.com/maxc-dev/revise-right-comp-sci", "https://play.google.com/store/apps/details?id=dev.maxc.quiz");

  jarvis = new Project("J.A.R.V.I.S", "May 2017", "January 2019", ["JavaFX", "Maven"], ["CMUSphinx (Speech Recognition)", "Complex UI Design"], "J.A.R.V.I.S is inspired by Tony Stark's voice assistant from Iron Man. I recreated it to control my desktop computer, allowing it to open/close applications, manage accounts (passwords), schedule reminders and much more. It was this project that was noticed by BLOC Hotels, which is how I ended up working there.");

  econsim = new Project("Economy Simulation", "January 2018", "April 2019", ["Java", "MySQL"], ["Amazon Web Services (RDS Database)", "Database Management", "Full Stack Development"], "Economy Simulation is a game that allows players to simulate a real world economy. I worked on this project for my Reigate College coursework and received 100% (A*).", "https://github.com/maxc-dev/EconomySimulation");

  website = new Project("Personal Website", "March 2017", "Ongoing", ["JavaScript", "HTML", "CSS"], ["Google Domains", "GitHub Pages"], "I use this personal website (www.maxc.dev) to display my experiences, industry skills and to show employees a bit about myself.", "https://github.com/maxc-dev/personal-website");

  eclipse = new Project("Eclipse Online Gaming Server", "Feburary 2016", "August 2017", ["Java", "Skript"], ["System Administration", "Leadership", "Team Management"], "I owned, developed and administrated a gaming server which over a two year period amassed over 10,000 international players. As the owner of the server, I organised a team of 40 staff members including three senior admins who helped with the day-to-day running of the server. This experience was extremely helpful for understanding what good quality leadership entails, and how to maximise efficiency in a team.");

  document.getElementById('projects-js').innerHTML = ghost_writer.show() + kotlinfx.show() + moss.show() + clotheswebsite.show() + reviseright.show() + jarvis.show() + econsim.show() + website.show() + eclipse.show();
}
/*
  qualifications
*/
class Qualification {
  constructor(title, datestart, datefinish, qualificationList, overall) {
    this.title = title;
    this.datestart = datestart;
    this.datefinish = datefinish;
    this.qualificationList = qualificationList;
    if (typeof overall == "undefined") {
      this.overall = "";
    } else {
      this.overall = "<h4>" + overall + "</h4>";
    }
  }

  show() {
    return "<div class=\"card\">" +
      "<h3>" + this.title + "</h3>" +
      "<div class=\"card-container\">" +
      this.overall +
      "<p class=\"exp\">Qualifications: </p><p class=\"explist\">  » " + this.qualificationList.join("</p><p class=\"explist\">  » ") +
      "</p><p class=\"sub\">" + this.datestart + " - " + this.datefinish + "</p><hr><br></div></div>";
  }
}

function printQualifications() {
  uos1 = new Qualification("University of Surrey - Year 1", "October 2019", "June 2020", ["Programming Fundamentals: 1st", "Computer Logic: 1st", "Web & Database Systems: 1st", "Foundations of Computing: 2:1", "Software Development: 1st", "Operating Systems: 1st", "Foundations of Computing II: 1st", "Data Structures & Algorithms: 1st"], "Year 1 Average: 86%");

  uos2 = new Qualification("University of Surrey - Year 2", "October 2020", "June 2021", ["Web Application Development: 1st", "Advanced Algorithms: 1st", "Further Programming Paradigms: 1st", "Information Retreival: 1st"], "Year 2 Average: 82%");

  reigate = new Qualification("Reigate College", "September 2017", "June 2019", ["Computer Science: A", "Mathematics: B", "Economics: B"]);

  document.getElementById('qualifications-js').innerHTML = uos2.show() + uos1.show() + reigate.show();
}

/*
  Basically going to print out lots of work experience stuff
*/
class Experience {
  constructor(title, company, datestart, datefinish, description) {
    this.title = title;
    this.company = company;
    this.datestart = datestart;
    this.datefinish = datefinish;
    this.description = description;
  }

  show() {
    return "<div class=\"card\">" +
      "<h3>" + this.company + " - " + this.title + "</h3>" +
      "<div class=\"card-container\">" +
      "</p><p class=\"sub\">" + this.datestart + " - " + this.datefinish + "</p>" +
      "</p><p class=\"explist\">" + this.description +
      "</div></div>";
  }
}

function printExperience() {
  intergreat = new Experience("Computer Science Digital Lecturer", "InterGreat Education Group", "July 2020", "August 2020", "I created and presented resources over a webinar for international students (UK & China) that want to learn how to code in English. This role has given me skills in public speaking, improvisation and confidence in front of large audiences of over 70 students.");
  campusmate = new Experience("Computer Science Tutor", "CampusMate", "June 2020", "Ongoing", "I provide one-to-one Computer Science tutoring at GCSE & A-Level standard. I enjoy this position because it actually helps me to recap topics which I haven't studied in a while. At the same time I am able to help other students to boost their academic success in computer science.");
  bloc = new Experience("Software Developer", "Bloc Hotel: Gatwick", "September 2018", "November 2018", "Using Android (Java) and speech recognition technology, I developed an application that allowed users to control air conditioning, blinds and the lights in their rooms. This project was a great experience as I was able to use new technology to develop a unique system that has never been created before.");

  document.getElementById('experience-js').innerHTML = intergreat.show() + campusmate.show() + bloc.show();
}

function navBar() {
  document.getElementById('nav-bar-js').innerHTML =
    "<ul><li><a href=\"index.html\">Home</a></li>" +
    "<li><a href=\"experience.html\">Experience</a></li>" +
    "<li><a href=\"qualifications.html\">Qualifications</a></li>" +
    "<li><a href=\"projects.html\">Projects</a></li></ul>";
}
