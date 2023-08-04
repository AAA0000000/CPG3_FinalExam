function newbody(x) {
  switch (x) {
    case 0:
      $("#body-placeholder").load("Home/body_vision.html");
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
      $("#body-placeholder").load("DegreePrograms/dp_cmap.html");
      break;
    case 14:
      $("#body-placeholder").load("DegreePrograms/dp_stats.html");
      break;
    case 15:
      $("#body-placeholder").load("DegreePrograms/dp_raa.html");
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
      $("#body-placeholder").load("Arch/pubs.html");
      break;
    case 51:
      $("#body-placeholder").load("Arch/thesis_arch.html");
      break;
    case 60:
      $("#body-placeholder").load("Other/continuing.html");
      break;
    case 61:
      $("#body-placeholder").load("Other/alumni.html");
      break;
    case 61:
      $("#body-placeholder").load("Other/forms_policies.html");
      break;
    default:
    
      break;
  }
}