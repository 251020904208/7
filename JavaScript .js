function upDate(previewPic) {
  // 1. Check that the event is triggering
  console.log("upDate function triggered!");

  // 2. Print out the alt and src attributes of the hovered image
  console.log("Image Alt text: " + previewPic.alt);
  console.log("Image Source URL: " + previewPic.src);

  // 3. Select the element with the id of 'image'
  let targetImage = document.getElementById("image");

  // 4. Change the text inside the div to the alt text of the preview image
  targetImage.innerHTML = previewPic.alt;

  // 5. Change the background image to the source URL of the preview image
  // Note: We use template literals (`url('${...}')`) to format the CSS correctly
  targetImage.style.backgroundImage = `url('${previewPic.src}')`;
}

function undo() {
  // 1. Check that the event is triggering
  console.log("undo function triggered!");

  // 2. Select the element with the id of 'image'
  let targetImage = document.getElementById("image");

  // 3. Reset the background image back to empty/original
  targetImage.style.backgroundImage = "url('')";

  // 4. Reset the text back to the original text
  targetImage.innerHTML = "Hover over an image below to display here.";
}