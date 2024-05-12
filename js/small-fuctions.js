  /* MENU BAR CODE */
  function openNav() {
    console.log("Opening the nav");
    document.getElementById("mymenu").style.width = "100%";
  }
  
  function closeNav() {
    console.log("Closing the nav");
    document.getElementById("mymenu").style.width = "0";
  }

  /* END OF MENU BAR CODE */

  /* POP UPP ADD SITH FILES */

document.addEventListener('DOMContentLoaded', function () {
  // Show the pop-up ad after a delay
  setTimeout(showPopup, 3000); // Show after 3 seconds

  function showPopup() {
      document.getElementById('popup-ad-sith-files').style.display = 'block';
  }

  // Get the close button
  var closeButton = document.querySelector('.close-btn');
  
  // When the user clicks on (x), close the pop-up
  closeButton.addEventListener('click', function() {
      document.getElementById('popup-ad-sith-files').style.display = 'none';
  });
});


/* END OF POP UPP ADD SITH FILES */