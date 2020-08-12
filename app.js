/*
  personal projects
*/

class Project {
  constructor(title, datestart, datefinish, languages, skills, about, github, playstore) {
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
  }

  show() {
    return "<div class=\"card\">" +
      "<h3>" + this.title + "</h3>" +
      "<div class=\"card-container\">" +
      "</p><p class=\"exp\">Languages: " + this.languages.join(", ") +
      "</p><p class=\"exp\">Skills: </p><p class=\"explist\">  » " + this.skills.join("</p><p class=\"explist\">  » ") + "</p><p>" +
      this.about + "</p><p class=\"sub\">" + this.datestart + " - " + this.datefinish + "</p>" + this.github + this.playstore + "<hr><br></div></div>";
  }
}

function printProjects() {
  kotlinfx = new Project("KotlinFX", "June 2020", "July 2020", ["Kotlin", "JavaFX", "FXML", "Gradle"], ["Kotlin Framework Creation"], "KotlinFX is a framework which allows users to easily create JavaFX projects which supports the use of Kotlin. KotlinFX is available on GitHub as a template project.", "https://github.com/maxc-dev/KotlinFX")

  shuffler = new Project("Shuffler", "October 2019", "Ongoing", ["Kotlin", "PHP", "MySQL", "JSON", "XML", "Gradle"], ["AndroidX Development", "KotlinX (Concurrency & Serialization)", "Material Design", "Amazon Web Services (RDS Database)", "REST API"], "Shuffler is an educational flashcards revision app which uses a unique gestures swiping concept to enable consolidation of a chosen topic. This app is still under development and I plan to have it released before September 2020, it is based off of Revise Right, although it includes much greater functionality, interface and user experience.")

  clotheswebsite = new Project("Clothing Website", "November 2019", "January 2020", ["PHP, HTML, CSS, MariaDB"], ["Website Backend", "Database Management", "Wamp Server"], "This was a website for my Web & Database Systems coursework which I received a 90% (1st) in. The website uses PHP to pull data from a MariaDB Database hosted on a local Wamp server, and then displays it dynamically onto a HTML document.", "https://github.com/maxc-dev/ClothingWebsite");

  reviseright = new Project("Revise Right", "May 2019", "July 2019", ["Kotlin", "JSON", "XML", "Gradle"], ["Android Development", "Google Play Store"], "Revise Right is an educational flashcards app published on the Play Store", "https://github.com/maxc-dev/revise-right-comp-sci", "https://play.google.com/store/apps/details?id=dev.maxc.quiz");

  blochotel = new Project("BLOC Hotels: Software Developer", "October 2018", "November 2018", ["Java", "Gradle"], ["Android Development (Tablet)", "CMUSphinx (Speech Recognition)"], "I developed a tablet application with speech recognition that would allow hotel customers to control their room via their voice. For example if you said 'bloc turn on the lights', the app would translate this and prepare a transmission to turn the lights off.");

  jarvis = new Project("J.A.R.V.I.S", "May 2017", "January 2019", ["Java", "FXML", "Maven"], ["CMUSphinx (Speech Recognition)", "Complex UI Design"], "J.A.R.V.I.S is inspired by Tony Stark's voice assistant from Iron Man. I recreated it to control my desktop computer, allowing it to open/close applications, manage accounts (passwords), schedule reminders and much more. It was this project that was noticed by BLOC Hotels, which is how I ended up working there.");

  econsim = new Project("Economy Simulation", "January 2018", "April 2019", ["Java", "MySQL"], ["Amazon Web Services (RDS Database)", "Database Management"], "Economy Simulation is a game that allows players to simulate a real world economy. I worked on this project for my Reigate College coursework and received 100% (A*).", "https://github.com/maxc-dev/EconomySimulation");

  website = new Project("Personal Website", "March 2017", "Ongoing", ["JavaScript", "HTML", "CSS"], ["Google Domains", "GitHub Pages"], "I use this personal website (www.maxc.dev) to display my experiences, industry skills and to show employees a bit about myself.", "https://github.com/maxc-dev/personal-website");

  eclipse = new Project("Eclipse Online Gaming Server", "Feburary 2016", "August 2017", ["Java", "Skript"], ["Sys Administration", "Leadership", "Team Management"], "I owned, developed and administrated a gaming server which over a two year period amassed over 10,000 international players. As the owner of the server, I organised a team of 40 staff members including three senior admins who helped with the day-to-day running of the server. This experience was extremely helpful for understanding what good quality leadership entails, and how to maximise efficiency in a team.");

  document.getElementById('projects-js').innerHTML = kotlinfx.show() + shuffler.show() + clotheswebsite.show() + reviseright.show() + blochotel.show() + jarvis.show() + econsim.show() + website.show() + eclipse.show();
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
  uos1 = new Qualification("University of Surrey - Year 1", "September 2019", "June 2020", ["Programming Fundamentals: 1st", "Computer Logic: 1st", "Web & Database Systems: 1st", "Foundations of Computing: 2:1", "Software Development: 1st", "Operating Systems: 1st", "Foundations of Computing II: 1st", "Data Structures & Algorithms: 1st"], "Year 1 Average: 85%");

  reigate = new Qualification("Reigate College", "September 2017", "June 2019", ["Computer Science: A", "Mathematics: B", "Economics: B"]);

  document.getElementById('qualifications-js').innerHTML = uos1.show() + reigate.show();
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
      "<h3>" + this.title + "</h3>" +
      "<div class=\"card-container\">" +
      "<h4>" + this.company + "</h4>" +
      "</p><p class=\"explist\">" + this.description +
      "</p><p class=\"sub\">" + this.datestart + " - " + this.datefinish + "</p><hr><br></div></div>";
  }
}

function printExperience() {
  intergreat = new Experience("Computer Science Webinar Presenter", "InterGreat Education Group", "July 2020", "Ongoing", "I create and present resources over a webinar for international students (UK & China) that want to learn how to code in English. This role has given me skills in public speaking, improvisation and confidence in front of large audiences of over 70 students.");
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
