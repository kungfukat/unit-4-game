$(document).ready(function () {
    var random = Math.floor(Math.random() * 100) + 19;

    var buttons = [
        blue,
        green,
        pink,
        red,
    ]
    for (i = 0; i < buttons.length; i++) {
        buttons[i] = Math.floor(Math.random() * 12) + 1;
    }
    var userScore = 0;
    var userWins = 0;
    var userLoss = 0;

    $(document).on("keyup", function () {
        $("#blue").on("click", function () {
            userScore = userScore + buttons[0];
            $("#total-score").text(userScore);
            if (userScore === random) {
                userWins++;
                $("#wins").text("Wins: " + userWins);

            }
            else if (userScore > random) {
                userLoss++;
                $("#losses").text("Losses: " + userLoss);

            }
        });
        $("#green").on("click", function () {
            userScore = userScore + buttons[1];
            $("#total-score").text(userScore);
            if (userScore === random) {
                userWins++;
                $("#wins").text("Wins: " + userWins);

            }
            else if (userScore > random) {
                userLoss++;
                $("#losses").text("Losses: " + userLoss);

            }
        });
        $("#pink").on("click", function () {
            userScore = userScore + buttons[2];
            $("#total-score").text(userScore);
            if (userScore === random) {
                userWins++;
                $("#wins").text("Wins: " + userWins);

            }
            else if (userScore > random) {
                userLoss++;
                $("#losses").text("Losses: " + userLoss);

            }
        });
        $("#red").on("click", function () {
            userScore = userScore + buttons[3];
            $("#total-score").text(userScore);
            if (userScore === random) {
                userWins++;
                $("#wins").text("Wins: " + userWins);

            }
            else if (userScore > random) {
                userLoss++;
                $("#losses").text("Losses: " + userLoss);

            }
        });
        if (userLoss > 0) {
        }

    });

    // this part right here might be extra,but the code wont work properly without it

    $("#random-number").text(random);
    $("#losses").text("Losses: " + userLoss);

    $("#wins").text("Wins: " + userWins);

    $(".img").on("click", function () {
        if (userScore === random) {
            userWin++;
            $("#wins").text("Wins: " + userWin);

        }
        else if (userScore > random) {
            $("#losses").text("Losses: " + userLoss);

        }

    })
    // **                      ***


});
