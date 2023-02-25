var mySidenav = document.getElementById("mySidenav");
var toggleButton = document.getElementById("toggleButton");

// Add click event listener to document
document.addEventListener("click", (event) => {
    // Check if click is outside of the side bar and its child elements
    if (
      event.target !== mySidenav &&
      !mySidenav.contains(event.target) &&
      event.target !== toggleButton
    ) {
      // Close the side bar
      mySidenav.style.width = "0";
    }
  });
  
  // Open side bar when toggleButton is clicked
  toggleButton.addEventListener("click", () => {
    mySidenav.style.width = "250px";
  });
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}