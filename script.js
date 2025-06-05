async function predictFromCSV(file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("https://huggingface.co/spaces/your-username/your-space/api/predict", {
    method: "POST",
    body: formData
  });

  const result = await response.json();
  displayPredictions(result.data); // Your custom function to show predictions
}
function handleUpload() {
  const fileInput = document.getElementById("csvFileInput");
  const file = fileInput.files[0];
  if (file) {
    predictFromCSV(file);
  }
}