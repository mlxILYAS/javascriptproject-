function upDate(previewPic) {
    console.log("Event Triggered!");
    console.log("Image Source:", previewPic.src);
    console.log("Alt Text:", previewPic.alt);

    // Update preview area text and background image
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.textContent = previewPic.alt;
}

function undo() {
    console.log("Undo Triggered!");

    // Reset preview area to default
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = "Hover over an image below to display here.";
}
