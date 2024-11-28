let controlCharsEnabled = false;
let originalContent = new Map();

chrome.runtime.onMessage.addListener(function (request) {
  if (request.action === "toggleControlChars") {
    controlCharsEnabled = !controlCharsEnabled;

    if (controlCharsEnabled) {
      document.querySelectorAll("p").forEach((p) => {
        if (!originalContent.has(p)) {
          originalContent.set(p, p.innerHTML);
        }
        p.innerHTML = p.innerHTML.replace(
          /[\x00-\x1F]/g,
          '<span style="background:red;color:white;padding:0 2px">␃</span>'
        );
      });
    } else {
      document.querySelectorAll("p").forEach((p) => {
        if (originalContent.has(p)) {
          p.innerHTML = originalContent.get(p);
        }
      });
    }

    chrome.runtime.sendMessage({ isEnabled: controlCharsEnabled });
  }
});
