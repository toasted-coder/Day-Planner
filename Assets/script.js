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
    $("#8Am .description").val(localStorage.getItem("8Am"));
    $("#9Am .description").val(localStorage.getItem("9Am"));
    $("#10Am .description").val(localStorage.getItem("10Am"));
    $("#11Am .description").val(localStorage.getItem("11Am"));
    $("#12Pm .description").val(localStorage.getItem("12Pm"));
    $("#1Pm .description").val(localStorage.getItem("1Pm"));
    $("#2Pm .description").val(localStorage.getItem("2Pm"));
    $("#3Pm .description").val(localStorage.getItem("3Pm"));
    $("#4Pm .description").val(localStorage.getItem("4Pm"));
    $("#5Pm .description").val(localStorage.getItem("5Pm"));

    timeTracker();
})