
//make sure DOM is loaded before loading scripts
document.addEventListener("DOMContentLoaded", function() {

// create a starting point
  var score = 0;
  var input;

  // function updateScore() {
  //   document.getElementById('score')
  //     .innerHTML = score + " Points";
  // }

  //add 5 to score
  document
    // Step 1: Select +5 points button
    .getElementById('increase-5')
    // Step 2: Bind click event to button
    .addEventListener('click', function() {
    // Step 3: Increment the score
      score += 5;
      // Step 4: Update the DOM with the new score
      document.getElementById('score')
        .innerHTML = score + " Points";
        // updateScore();
    });

  //subtract 5 from score
  document
  // Step 1: Select -5 points button
    .getElementById('decrease-5')
  // Step 2: Bind click event to button
    .addEventListener('click', function() {
  // Step 3: Increment the score
      if (score - 5 < 0) {
        return;
      } else {
        score -= 5;
  // Step 4: Update the DOM with the new score
        document.getElementById('score')
          .innerHTML = score + " Points";
      }
      // updateScore();

    });

  //set custom score and alert if invalid entry

  // Step 1: Retrieve value from form field
  var newScoreText = document
          .getElementById("custom-score")
          .value

  // Step 2: Convert string to number
  var newScoreNumber = ParseInt(newScoreText);

  // Step 3: Set score to new number
    score =  newScoreNumber;

    // Step 4: Update DOM with new score
    document
      .getElementById("score")
      .innerHTML = score + " Points";
      // updateScore();

    });
