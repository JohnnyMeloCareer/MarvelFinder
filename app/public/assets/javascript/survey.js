var newFriendData;

$("#formSubmit").on("click", function (event) {
    event.preventDefault();
    function formValidation() {
        var isValid = true;
        $(".form-control").each(function () {
            if ($(this).val() === "") {
                isValid = false;
            }
        });
        return isValid;
    };
    if (formValidation()) {
        newFriendData = {
            name: $("#userName").val(),
            photo: $("#userPicture").val(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
        };
        // Sending the user information to apiRoutes.js to match with friend, then it sends back the best match
        // function(data) data - contains bestMatch information
        $.post("/api/marvel", newFriendData, function (data) {
            // If statement is able to run because res.json(bestMatch); in the app.post request in apiRoutes.js, which sent back the best match based on the user's answers
            if (data) {
                $("#bestMatchName").text("Hello, " + newFriendData.name + "! My name is " + data.name + "!");
                $("#bestMatchPhoto").attr("src", data.photo);
                $("#bestMatchModal").modal("toggle");
            }
        });
    } else {
        $("#formControlModal").modal("toggle");
    }
});
$("#doItAgain").on("click", function (event) {
    event.preventDefault();
    location.reload();
})