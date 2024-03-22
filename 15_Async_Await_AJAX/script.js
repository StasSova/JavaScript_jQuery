document.getElementById("formatBtn").addEventListener("click", function () {
  let inputText = document.getElementById("jsonInput").value;
  try {
    let formattedJson = JSON.stringify(JSON.parse(inputText), null, 4);
    document.getElementById("result").innerHTML =
      "<pre>" + formattedJson + "</pre>";
  } catch (error) {
    document.getElementById("result").innerText = "Ошибка: некорректный JSON";
  }
});
