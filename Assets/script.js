// Display the current date
var currentDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDate);

$(document).ready(function () { // "save" button function & event listener
    $(".saveBtn").on("click", function () { 
        var txt = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, txt);
    });
   
    function timeTracker() {
        //get current number of hours.
        var currentTime = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var tbTime = parseInt($(this).attr("id").split("hour")[1]);

            // if statement to see if time inside time block is less than the currentTime. If true will be marked as "past"
            if (tbTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            // else if statement checking if the time block is equal to the current time. if true block is marked as "present"
            else if (tbTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            // else statement marking any time blocks that aren't less than or equal to the currentTime as "future"
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        });
    };

    // Get available items form localStorage if there are any.
    $("#hour9AM .description").val(localStorage.getItem("hour9AM"));
    $("#hour10AM .description").val(localStorage.getItem("hour10AM"));
    $("#hour11AM .description").val(localStorage.getItem("hour11AM"));
    $("#hour12PM .description").val(localStorage.getItem("hour12PM"));
    $("#hour13PM .description").val(localStorage.getItem("hour13PM"));
    $("#hour14PM .description").val(localStorage.getItem("hour14PM"));
    $("#hour15PM .description").val(localStorage.getItem("hour15PM"));
    $("#hour16PM .description").val(localStorage.getItem("hour16PM"));
    $("#hour17PM .description").val(localStorage.getItem("hour17PM"));

    timeTracker();
})