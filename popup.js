document.getElementById("toggleBtn").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "toggleControlChars" });
  });
});

chrome.runtime.onMessage.addListener(function (request) {
  const btn = document.getElementById("toggleBtn");
  if (request.isEnabled) {
    btn.textContent = "Disable Control Characters";
    btn.classList.add("disabled");
  } else {
    btn.textContent = "Enable Control Characters";
    btn.classList.remove("disabled");
  }
});
