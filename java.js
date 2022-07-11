// To change the page in Research
function page() {
  var m1 = document.getElementById("page1"); //gets the element having ID "page1"
  var m2 = document.getElementById("page2"); //gets the element having ID ""
  if (m1.style.display == "none")           //compares if the m1 i.e., page1 is displayed or not
  {                                          //If not displayed it displays page1 and hides page 2
    m1.style.display = "block";
    m2.style.display = "none";
  } else {                                      //If the page1 is displayed,it changes the page 2 to be displayed and hides page 1
    m1.style.display = "none";
    m2.style.display = "block";
  }
}

//JavaScript to make image slider in Interests page

var Index = 0;          //set the index to 0
show(Index);            //shows image having index equal to the index provided
changeauto();

function change(a) {
  Index += a;           //add or subtract 1 to Index
  show(Index);          //show image having index equal to the index provided
}

// this is the auto change function which changes the image every 5 seconds

function changeauto() {
  Index++;
  show(Index);
  setTimeout(changeauto, 5000);
}
// this is the show function used to display the image 

function show(a) {
  var x = document.getElementsByClassName("slider");        //gets all elements having class as "slider" and puts in an array

  if (a > x.length - 1) {
    Index = 0;                                              //if n exceeds the indexes of the array then set Index to 0
  }
  if (a < 0) {
    Index = x.length - 1;                                   //if n is negative then set Index to the last index of the array
  }
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";                             //set display none to all elements
  }

  x[Index].style.display = "block";                         //set display block to element with index equal to Index
}
