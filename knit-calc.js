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
  var suggestedWeightNumber = parseFloat(suggestedWeight);
  var suggestedLength = document.getElementById("suggestedLength").value;
  var suggestedLengthNumber = parseFloat(suggestedLength);
  var substitutedWeight = document.getElementById("substitutedWeight").value;
  var substitutedWeightNumber = parseFloat(substitutedWeight);
  var substitutedLength = document.getElementById("substitutedLength").value;
  var substitutedLengthNumber = parseFloat(substitutedLength);
  var substitutedLengthAnswer = suggestedLengthNumber;
  var tempSuggestedWeightNumber = 0;
  var tempSuggestedLengthNumber = 0;
  var tempSubstitutedWeightNumber = 0;
  var tempSubstitutedLengthNumber = 0;

  console.log("Suggested Weight Type: " + suggestedWeightType);
  console.log("Suggested Weight Number: " + suggestedWeightNumber);
  console.log("Suggested Length Type: " + suggestedLengthType);
  console.log("Suggested Length Number: " + suggestedLengthNumber);
  console.log("Substituted Weight Type: " + substitutedWeightType);
  console.log("Substituted Weight Number: " + substitutedWeightNumber);
  console.log("Substituted Length Type: " + substitutedLengthType);
  console.log("Substituted Length Number: " + substitutedLengthNumber);

  console.log("Suggested Weight Type: " + suggestedWeightType);
  console.log("Suggested Weight Number: " + suggestedWeightNumber);
  console.log("Suggested Length Type: " + suggestedLengthType);
  console.log("Suggested Length Number: " + suggestedLengthNumber);
  console.log("Substituted Weight Type: " + substitutedWeightType);
  console.log("Substituted Weight Number: " + substitutedWeightNumber);
  console.log("Substituted Length Type: " + substitutedLengthType);
  console.log("Substituted Length Number: " + substitutedLengthNumber);
}
