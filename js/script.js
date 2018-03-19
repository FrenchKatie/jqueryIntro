//To see if your JS file has loaded in:
// alert("Javascript is loaded in");
// console.log("Javascript is loaded");

/*
Multi line Comments
Can use as many lines as you like between the two tags
*/


$(document).ready(function(){
  //will give us back every single div on the page
  // $("div")

  //will give us back every item with this class attatched
  // $(".box")

  //will give us back the item with this id
  // $("#box1")

  //will give us back a div with the id of box 1
  // $("div#box1")

  //will give us back all of the li's inside of the ul's on the page
  // $("ul li")

  //Click Events:

  //what element you want to target
  //what event you want it to have
  //what happens when the event is actioned


  // $("#box1").click(function(){
  //   console.log("green box is clicked")
  // })
  //
  // $("#box2").dblclick(function(){
  //   console.log("red box is clicked")
  // })

  //Common basic events:
  //click() = click
  //dblclick() = double click
  //mouseover() = when our mouse is over it
  //mouse leave() = when our mouse leaves the object
  //hover() = when you hover over the object - mix of mouseover and mouseleave
  //mousedown() = when we hold the click down
  //mouseup() = when we lift our finger off the click
  //keydown() = when you type a key down
  //keyup() = when you lift your finger off the key
  //focus() = when we enter into a form element
  //blur() = when we leve the form element
  //submit() = when a form has been submitted

  //Common Effects:

  //Preventing the default event from happening:
  // $("#myForm").submit(function() {
  //   event.preventDefault();
  //   console.log("do this instead");
  // })

  //Selecting an object to action something else

    // $("#box2").hide(); //hiding the second box
    // $("#box2").toggle(5000); //toggles the hide on and off.  This time delay is recorded in miliseconds - 5000 = 5 seconds
    // $("#box2").fadeOut(5000); //fade out the second box
    // $("#box2").fadeIn(5000); //fades in the second box
    // $("#box2").toggleClass("wider"); //toggles a class on and off for the second box
    // $("#box2").addClass("wider"); //adds a class to the second box
    // $("#box2").removeClass("wider"); //remove class to the second box
    // $("#box2").css("background-color", "pink"); //change a css property.  The element, and the property you want to change
    // $("#box2").css({"background-color":"pink", "width":"500px"}); //change more than one css property at a time



    //What you would do to target one element at a time:
    // $("#box1").click(function(){
    //   $("#box1").toggleClass("higher");
    // })

    //Targeting multiple elements to do the same action:
    // $(".box").click(function(){
    //   $(this).toggleClass("higher");//this stands for THIS current element that i am selecting - dont affect all with this class.
    // })

    //When i click this button i want to add more text to this paragraph
    $("#button").click(function(){
      // $("#paragraph").append(" This text gets added to the end"); //append means add it to the end of targeted element
      // $("#paragraph").prepend("This text is adding to the start "); //prepemd means add it to the start of targeted element
      // $("#paragraph").text("override the text"); //This will override the original text and replace it with the new text
      // $("#paragraph").empty(); // This will empty the contents of the target element - all the text inside it is gone
      // $("#paragraph").remove(); //This will completely remove the targeted element
      // $("#list1").append("<li>This is a list item</li>"); //You can append any HTML tags, images, anything!
      // $("#list1").append("<li class='listColor'>This is a list item</li>"); //if you are going to add a class or id then you need to make sure you are using the correct quotation marks.  I.e. double first - single inside.
      // $("body").append("<div class='box blue'></div>");
    })
})
