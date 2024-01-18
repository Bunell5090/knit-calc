function knit() {
  event.preventDefault();
  var suggestedWeightType = document.getElementById(
    "suggestedWeightType"
  ).value;
  var suggestedLengthType = document.getElementById(
    "suggestedLengthType"
  ).value;
  var substitutedWeightType = document.getElementById(
    "substituedWeightType"
  ).value;
  var substitutedLengthType = document.getElementById(
    "substitutedLengthType"
  ).value;
  var suggestedWeight = document.getElementById("suggestedWeight").value;
  var suggestedLength = document.getElementById("suggestedLength").value;
  var substitutedWeight = document.getElementById("substitutedWeight").value;
  var substitutedLength = document.getElementById("substitutedLength").value;

  console.log("Data submitted: " + suggestedWeightType);
  console.log("Data submitted: " + suggestedLengthType);
  console.log("Data submitted: " + substitutedWeightType);
  console.log("Data submitted: " + substitutedLengthType);
}
