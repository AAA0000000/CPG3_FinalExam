function newbody(x) {
  switch (x) {
    case 0:
      $("#body-placeholder").load("Home/body_vision.html", naviPanelLoad());
      document.title = "DLSU DECE - Vision";
      break;
    case 1:
      $("#body-placeholder").load("Home/body_mission.html");
      break;
    case 2:
      $("#body-placeholder").load("Home/body_programhistory.html");
      break;
    case 3:
      $("#body-placeholder").load("Home/body_elga.html");
      break;
    case 4:
      $("#body-placeholder").load("Home/body_peo.html");
      break;
    case 5:
      $("#body-placeholder").load("Home/body_so.html");
      break;
    case 10:
      $("#body-placeholder").load("DegreePrograms/dp_ug.html");
      break;
    case 11:
      $("#body-placeholder").load("DegreePrograms/dp_grad.html");
      break;
    case 12:
      $("#body-placeholder").load("DegreePrograms/dp_other.html");
      break;
    case 13:
      $("#body-placeholder").load("DegreePrograms/dp_cmap_ece.html");
      break;
    case 14:
      $("#body-placeholder").load("DegreePrograms/dp_stats.html");
      break;
    case 15:
      $("#body-placeholder").load("DegreePrograms/dp_raa.html");
      break;
    case 16:
      $("#body-placeholder").load("DegreePrograms/dp_cmap_cpe.html");
      break;
    case 20:
      $("#body-placeholder").load("Faculty/structure.html");
      break;
    case 21:
      $("#body-placeholder").load("Faculty/profile.html");
      break;
    case 30:
      $("#body-placeholder").load("CL/labs.html");
      break;
    case 31:
      $("#body-placeholder").load("CL/community.html");
      break;
    case 32:
      $("#body-placeholder").load("CL/student_orgs.html");
      break;
    case 40:
      $("#body-placeholder").load("Ach/awards.html");
      break;
    case 41:
      $("#body-placeholder").load("Ach/conferences.html");
      break;
    case 42:
      $("#body-placeholder").load("Ach/licensure.html");
      break;
    case 50:
      $("#body-placeholder").load("Archives/pubs.html");
      break;
    case 51:
      $("#body-placeholder").load("Archives/thesis_arch2013.html");
      break;
    case 52:
      $("#body-placeholder").load("Archives/thesis_arch2012.html");
      break;
    case 53:
      $("#body-placeholder").load("Archives/thesis_arch2011.html");
      break;
    case 54:
      $("#body-placeholder").load("Archives/thesis_arch2010.html");
      break;
    case 55:
      $("#body-placeholder").load("Archives/thesis_arch2009.html");
      break;
    case 56:
      $("#body-placeholder").load("Archives/thesis_arch2008.html");
      break;
    case 57:
      $("#body-placeholder").load("Archives/thesis_arch2007.html");
      break;
    case 60:
      $("#body-placeholder").load("Other/continuing.html");
      break;
    case 61:
      $("#body-placeholder").load("Other/alumni.html");
      break;
    case 62:
      $("#body-placeholder").load("Other/forms_policies.html");
      break;
    default:
      break;
  }

  if (x) {
    naviPanelLoad();
  }
}

function show(shown, hidden) {
  document.getElementById(shown).style.display = 'block';
  document.getElementById(hidden).style.display = 'none';
  return false;
}

var data = [];
var attribute;
function printTable(attribute, data) {
  var table = document.getElementById(attribute);
  for (i = 0; i < data.length; i++) {
    var row = table.insertRow(i + 1);
    for (j = 0; j < data[i].length; j++) {
      var cell = row.insertCell(j);
      cell.innerHTML = data[i][j]
    }
  }
}
function dataset(x) {
  switch (x) {
    case 1:
      attribute = "ece_major";
      data = [
        ["LBYEC2A", "Computer Fundamentals and Programming 1", 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["LBYEC2B", "Computer Fundamentals and Programming 2", 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        ["ELECEN1", "Circuits 1", 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        ["LBYEC2D", "Circuits 1 Laboratory", 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        ["ELECEN2", "Circuits 2", 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        ["LBYEC2F", "Circuits 2 Laboratory", 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        ["TRONIC1", "Electronic Devices and Circuits", 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
        ["LBYEC2G", "Electronic Devices and Circuits Laboratory", 0, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["MATHADV", "Advanced Engineering Mathematics for ECE", 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        ["LBYEC2H", "Advanced Engineering Mathematics for ECE Laboratory", 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
        ["CIRLOGI", "Logic Circuits and Switching Theory", 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
        ["LBYEC2I", "Logic Circuits and Switching Theory Laboratory", 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
        ["ELECMG1", "Elecromagnetics", 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
        ["TRONIC2", "Electronic Circuit Analysis and Design", 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        ["LBYEC2J", "Electronic Circuit Analysis and Design Laboratory", 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        ["FEECONS", "Feedback and Control Systems", 2, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        ["LBYEC3F", "Feedback and Control Systems Laboratory", 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        ["COCIMIC", "Microprocessor and Microcontrol Systems and Design", 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
        ["LBYEC3L", "Microprocessor and Microcontrol Systems and Design Laboratory", 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 1, 0],
        ["COMMANA", "Principles of Communication Systems", 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 1],
        ["LBYEC3D", "Principles of Communication Systems Laboratory", 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        ["SIGDISC", "Signals, Spectra and Signal Processing", 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
        ["LBYEC4A", "Signals, Spectra and Signal Processing Laboratory", 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0],
        ["LAWSECE", "ECE Laws, Contracts, Ethics , Standards and Safety", 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
        ["DIGCOMT", "Modulation and Coding Techniques", 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0],
        ["LBYEC3E", "Modulation and Coding Techniques Laboratory", 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2],
        ["MTTHECE", "Methods of Research for ECE", 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0],
        ["TRONIC3", "Electronic Systems and Design", 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 2],
        ["LBYEC3K", "Electronic System and Design Laboratory", 0, 0, 1, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        ["MIXIGEL", "Mixed Signal Electronics", 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0],
        ["LBYEC3J", "Mixed Signal Electronics Laboratory", 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2],
        ["LBYEC3G", "Digital Systems Design Laboratory", 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0],
        ["LBYEC3H", "Analog Systems Design Laboratory", 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
        ["TRANSIL", "Transmission of Signals", 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
        ["LBYEC3I", "Transmission of Signals Laboratory", 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0],
        ["TSSEC1A", "ECE Project 1", 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2],
        ["MACTRAN", "Energy Conversion", 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
        ["LBYEC4D", "Energy Conversion Laboratory", 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
        ["SEMSECE", "Seminars and Colloqium for ECE", 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0],
        ["TSSEC1B", "ECE Project 2", 0, 0, 5, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0],
        ["COMMDAT", "Data Communications", 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3],
        ["LBYEC4B", "Data Communications Laboratory", 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3],
        ["ECECAPS", "Electronics and Communications Systems Design", 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 3],
        ["ECELCCV", "ECE Elective", 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0],
        ["LBYEC4G", "ECE Elective Laboratory", 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0],
        ["PRCGEEC", "Practicum for ECE", 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 3, 0],
        ["COMWIRL", "Wireless Communications", 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
        ["LBYEC4E", "Wireless Communications Laboratory", 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
        ["MATSENG", "Materials Science and Engineering", 0, 0, 0, 0, 0, 3, 0, 3, 3, 3, 0, 0, 0],
        ["LBYEC3A", "Intelligent Engineering Systems", 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
        ["TSSEC1C", "ECE Project 3", 0, 0, 3, 3, 3, 0, 3, 3, 0, 3, 0, 3, 0],
        ["LBYEC4F", "ECE Computational Numerical Methods Laboratory", 3, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ];
      break;
    case 2:
      attribute = "ece_ge";
      data = [
        ["GEARTAP", "Art Appreciation", 0, 0, 0, 0, 0, 0, 0, 0, "●", 0, 0, 0, 0],
        ["GELECAH", "Arts and Humanities", 0, 0, 0, 0, 0, 0, 0, 0, "●", 0, 0, 0, 0],
        ["BASCHEM", "Basic Chemistry", "●", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["BASPHYS", "Basic Physics", "●", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["ENGCHEM", "Chemistry for Engineers", "●", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["LBYCH1", "Chemistry for Engineers Laboratory", 0, "●", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["LBYME1C", "Computer Aided Drafting (CAD) for ECE and CPE", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "●", 0, 0],
        ["LBYEC2A", "Computer Fundamentals and Programming 1", "●", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["LBYEC2B", "Computer Fundamentals and Programming 2", "●", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["CALENG1", "Differential Calculus", "●", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["CALENG3", "Differential Equations", "●", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["LCENWRD", "Encountering the Word in the World", 0, 0, 0, 0, 0, 0, 0, 0, "●", 0, 0, 0, 0],
        ["DATAENG", "Engineering Data Analysis", "●", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["ECNOMCC", "Engineering Economics for ECE", "●", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["ENGMANA", "Engineering Management", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "●", 0],
        ["ENGENVI", "Environmental Science and Engineering", "●", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["GEETHIC", "Ethics", 0, 0, 0, 0, 0, "●", 0, 0, 0, 0, 0, 0, 0],
        ["LCFAITH", "Faith Worth Living", 0, 0, 0, 0, 0, 0, 0, 0, "●", 0, 0, 0, 0],
        ["FNDSTAT", "Foundation course in Statistics", "●", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["FNDMATH", "Foundation course in Math", "●", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["CALENG2", "Integral Calculus", "●", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["LASARE1", "Lasallian Recollection 1", 0, 0, 0, 0, 0, 0, 0, 0, "●", 0, 0, 0, 0],
        ["LASARE2", "Lasallian Recollection 2", 0, 0, 0, 0, 0, 0, 0, 0, "●", 0, 0, 0, 0],
        ["LASARE3", "Lasallian Recollection 3", 0, 0, 0, 0, 0, 0, 0, 0, "●", 0, 0, 0, 0],
        ["LCLSONE", "Lasallian Studies 1", 0, 0, 0, 0, 0, 0, 0, 0, "●", 0, 0, 0, 0],
        ["LCLSTWO", "Lasallian Studies 2", 0, 0, 0, 0, 0, 0, 0, 0, "●", 0, 0, 0, 0],
        ["LCLSTRI", "Lasallian Studies 3", 0, 0, 0, 0, 0, 0, 0, 0, "●", 0, 0, 0, 0],
        ["GERIZAL", "Life and Works of Rizal", 0, 0, 0, 0, 0, 0, 0, 0, "●", 0, 0, 0, 0],
        ["GEMATMW", "Mathematics in the Modern World", "●", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["NSTPCW1", "National Service Training Program 1", 0, 0, 0, 0, 0, 0, 0, 0, "●", 0, 0, 0, 0],
        ["NSTPCW2", "National Service Training Program 2", 0, 0, 0, 0, 0, 0, 0, 0, "●", 0, 0, 0, 0],
        ["NSTP101", "National Sevice Training Program-General Orientation", 0, 0, 0, 0, 0, 0, 0, 0, "●", 0, 0, 0, 0],
        ["GEFTWEL", "Physical Fitness and Wellness", 0, 0, 0, 0, 0, 0, 0, 0, "●", 0, 0, 0, 0],
        ["GEDANCE", "Physical Fitness and Wellness in Dance", 0, 0, 0, 0, 0, 0, 0, 0, "●", 0, 0, 0, 0],
        ["GESPORT", "Physical Fitness and Wellness in Individual Sports", 0, 0, 0, 0, 0, 0, 0, 0, "●", 0, 0, 0, 0],
        ["GETEAMS", "Physical Fitness and Wellness in Teams Sport", 0, 0, 0, 0, 0, 0, 0, 0, "●", 0, 0, 0, 0],
        ["ENGPHS2", "Physics 2", "●", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["LBYPH1B", "Physics 2 Laboratory", 0, "●", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["ENGPHYS", "Physics for Engineers", "●", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["LBYPH1A", "Physics for Engineers Laboratory", 0, "●", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["GEPCOMM", "Purposive Communications", 0, 0, 0, 0, 0, 0, "●", 0, 0, 0, 0, 0, 0],
        ["GERPHIS", "Readings in the Philippine History", 0, 0, 0, 0, 0, 0, 0, 0, "●", 0, 0, 0, 0],
        ["GELECST", "Science and Technology", 0, 0, "●", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["GESTSOC", "Science, Technology and Society", 0, 0, "●", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["GELECSP", "Social Science and Philosophy", 0, 0, 0, 0, 0, 0, 0, 0, "●", 0, 0, 0, 0],
        ["SAS1000", "Student Affairs Series 1", 0, 0, 0, 0, 0, 0, 0, 0, "●", 0, 0, 0, 0],
        ["SAS2000", "Student Affairs Series 2", 0, 0, 0, 0, 0, 0, 0, 0, "●", 0, 0, 0, 0],
        ["SAS3000", "Student Affairs Series 3", 0, 0, 0, 0, 0, 0, 0, 0, "●", 0, 0, 0, 0],
        ["ENGTREP", "Technopreneurship 101", 0, 0, 0, 0, 0, 0, 0, 0, "●", 0, 0, 0, 0],
        ["GEWORLD", "The Contemporary World", 0, 0, 0, 0, 0, 0, 0, 0, 0, "●", 0, 0, 0],
        ["LCASEAN", "The Filipino and ASEAN", 0, 0, 0, 0, 0, 0, 0, 0, "●", 0, 0, 0, 0],
        ["GEUSELF", "Understanding the self", 0, 0, 0, 0, 0, 0, 0, 0, "●", 0, 0, 0, 0]
      ];
      break;
    case 3:
      attribute = "cpe_major";
      data = [
        ["DISCRMT", "Discrete Mathematics", 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        ["DATSRAL", "Data Structures and Algorithms Lecture", 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        ["LBYCPA2", "Data Structures and Algorithms Laboratory", 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        ["FUNDCKT", "Fundamentals of Electrical Circuits Lecture", 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        ["LBYEC2M", "Fundamentals of Electrical Circuits Laboratory", 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        ["MICPROS", "Microprocessors Lecture", 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["LBYCPA3", "Microprocessors Laboratory", 0, 3, 2, 0, 0, 0, 3, 0, 0, 0, 2, 0],
        ["LBYCPB3", "Computer Engineering Drafting and Design Laboratory", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
        ["REMETHS", "Methods of Research", 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0],
        ["FDCNSYS", "Feedback and Control Systems", 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
        ["LBYCPC3", "Feedback and Control System Laboratory", 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
        ["EMERTEC", "Emerging Technologies in CpE", 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 0],
        ["THSCP4B", "CpE Practice and Design 2", 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 3, 2],
        ["DSIGPRO", "Digital Signal Processing Lecture", 3, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0],
        ["LBYCPA4", "Digital Signal Processing Laboratory", 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0],
        ["CONETSC", "Computer Networks and Security Lecture", 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0],
        ["LBYCPB4", "Computer Networks and Security Laboratory", 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["CPECAPS", "Operational Technologies", 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 2],
        ["COEDISC", "Computer Engineering as a Discipline", 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
        ["PROLOGI", "Programming Logic and Design Lecture", 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["LBYCPA1", "Programming Logic and Design Laboratory", 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        ["LBYEC2A", "Computer Fundamentals and Programming 1", 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        ["NUMMETS", "Numerical Methods", 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        ["FUNDLEC", "Fundamentals of Electronic Circuits Lecture", 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["LBYCPC2", "Fundamentals of Electronic Circuits Laboratory", 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 3, 0],
        ["SOFDESG", "Software Design Lecture", 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
        ["LBYCPD2", "Software Design Laboratory", 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0],
        ["CSYSARC", "Computer Architecture and Organization Lecture", 3, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0],
        ["LBYCPD3", "Computer Architecture and Organization Laboratory", 0, 3, 2, 0, 0, 0, 3, 0, 0, 0, 0, 0],
        ["EMBDSYS", "Embedded Systems Lecture", 0, 0, 3, 0, 0, 0, 0, 2, 0, 0, 0, 0],
        ["LBYCPM3", "Embedded Systems Laboratory", 0, 2, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0],
        ["CPECOG1", "CPE Elective 1 Lecture", 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
        ["LBYCPF3", "CPE Elective 1 Laboratory", 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
        ["PRCGECP", "Practicum for CpE", 0, 0, 0, 3, 0, 3, 3, 0, 0, 0, 0, 3],
        ["LBYEC2B", "Computer Fundamentals and Programming 2", 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        ["LBYCPEI", "Object Oriented Programming Laboratory", 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["LOGDSGN", "Logic Circuits and Design Lecture", 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        ["LBYCPG4", "Logic Circuits and Design Laboratory", 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0],
        ["OPESSYS", "Operating Systems", 2, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0],
        ["LBYCPO1", "Operating Systems Laboratory", 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
        ["LBYCPF2", "Introduction to HDL Laboratory", 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0],
        ["MXSIGFN", "Fundamentals of Mixed Signals and Sensors", 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
        ["CPECOG2", "CpE Elective 2 Lecture", 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
        ["LBYCPH3", "CpE Elective 2 Laboratory", 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
        ["OCHESAF", "Basic Occupational Health and Safety", 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0],
        ["CPEPRAC", "CpE Laws and Professional Practice", 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0],
        ["THSCP4A", "CpE Practice and Design 1", 0, 2, 1, 2, 0, 0, 0, 2, 0, 0, 0, 1],
        ["LBYEC3B", "Intelligent Systems for Engineering", 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ["THSCP4C", "CpE Practice and Design 3", 0, 3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 3],
        ["CPECOG3", "CpE Elective 3 Lecture", 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
        ["LBYCPC4", "CpE Elective 3 Laboratory", 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
        ["CPETRIP", "Seminars and Field Trips for CpE", 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0]
      ];
      break;
    default:
      break;
  }
  printTable(attribute, data);
}

function naviPanelLoad() {
  const delay = 1000;
  // CLEAR RIGHT PANEL
  $("#naviPanel").html("");
  // ASSIGN IDs TO EVERY HEADERS
  setTimeout(function() {
    $("#body-placeholder h1").each(function() {
      var hyphenated = $(this).text().replace(/\s/g, '-');
      $(this).attr('id', hyphenated);
    }
    );
    $("#body-placeholder h2").each(function() {
      var hyphenated = $(this).text().replace(/\s/g, '-');
      $(this).attr('id', hyphenated);
    }
    );
    $("#body-placeholder h3").each(function() {
      var hyphenated = $(this).text().replace(/\s/g, '-');
      $(this).attr('id', hyphenated);
    }
    );
  }, delay);
  // DO THE PANEL STUFF
  setTimeout(function() {
    // SCRAPE NEWLY LOADED BODY FOR HEADERS
    var contentTable = "<nav role='navigation' class='table-of-contents'>" +
      "<h1>";
    $("#body-placeholder h1").each(function() {
      headerElement = $(this);
      headerTitle = headerElement.text();
      headerLink = "#" + headerElement.attr("id");

      newLine =
        "<a href='" + headerLink + "'>" +
        headerTitle +
        "</a>" +
        "</h1>" +
        "<ul>";
      contentTable += newLine;

      $("#body-placeholder h2").each(function() {
        headerElement = $(this);
        headerTitle = headerElement.text();
        headerLink = "#" + headerElement.attr("id");

        newLine =
          "<li>" +
          "<a href='" + headerLink + "'>" +
          headerTitle +
          "</a>" +
          "</li>";
        contentTable += newLine;
      }
      )

      contentTable += "</ul>";


    });

    contentTable +=
      "</nav>";

    console.log(contentTable);
    document.getElementById("naviPanel").innerHTML += contentTable;
  }, delay);
}
