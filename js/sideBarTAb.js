function openCity(evt, sideBarLink) {
    // Declare all variables
    let i, tabcontent, sideBarLinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    // Get all elements with class="sideBarLinks" and remove the class "active"
    sideBarLinks = document.getElementsByClassName("sideBarLinks");
    for (i = 0; i < sideBarLinks.length; i++) {
      sideBarLinks[i].className = sideBarLinks[i].className.replace(" active", "");
    }

    document.getElementById(sideBarLink).style.display = "block";
    evt.currentTarget.className += " active";

    if(sideBarLink == 'all'){
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "block";
          }
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(sideBarLink).style.display = "block";
    evt.currentTarget.className += " active";
  }
