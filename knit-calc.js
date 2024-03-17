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
  //var substitutedLengthAnswer = suggestedLengthNumber;
  var tempSuggestedWeightNumber = 0;
  //var tempSuggestedLengthNumber = 0;
  var tempSubstitutedWeightNumber = 0;
  var tempSubstitutedLengthNumber = 0;
  var substitutedLengthNumberAnswer = 0;
  var response = document.getElementById("answer");

  if (suggestedWeightType === "ounces") {
    tempSuggestedWeightNumber = suggestedWeightNumber * 28;
  } else if (suggestedWeightType === "grams") {
    tempSuggestedWeightNumber = suggestedWeightNumber;
  }

  if (substitutedWeightType === "ounces") {
    tempSubstitutedWeightNumber = substitutedWeightNumber * 28;
  } else if (substitutedWeightType === "grams") {
    tempSubstitutedWeightNumber = substitutedWeightNumber;
  }

  if (suggestedLengthType == substitutedLengthType) {
    substitutedLengthNumberAnswer =
      (substitutedLengthNumber / substitutedWeightNumber) *
      suggestedWeightNumber;
    if (Math.abs(suggestedLengthNumber - substitutedLengthNumberAnswer) <= 20) {
      response.innerHTML = "The two yarns are compatible.";
    } else {
      response.innerHTML = "The two yarns are not compatible.";
    }
  } else if (
    suggestedLengthType == "meters" &&
    substitutedLengthType == "yards"
  ) {
    tempSubstitutedLengthNumber = substitutedLengthNumber / 1.094;
    substitutedLengthNumberAnswer =
      (suggestedLengthNumber / tempSubstitutedLengthNumber) *
      suggestedWeightNumber;
    if (Math.abs(suggestedLengthNumber - substitutedLengthNumberAnswer) <= 20) {
      response.innerHTML = "The two yarns are compatible.";
    } else {
      response.innerHTML = "The two yarns are not compatible.";
    }
  } else if (
    suggestedLengthType == "yards" &&
    substitutedLengthType == "meters"
  ) {
    tempSubstitutedLengthNumber = substitutedLengthNumber * 1.094;
    substitutedLengthNumberAnswer =
      (suggestedLengthNumber / tempSubstitutedLengthNumber) *
      suggestedWeightNumber;
    if (Math.abs(suggestedLengthNumber - substitutedLengthNumberAnswer) <= 20) {
      response.innerHTML = "The two yarns are compatible.";
    } else {
      response.innerHTML = "The two yarns are not compatible.";
    }
  }
  return;
}

//document.getElementById("result").textContent = result;
