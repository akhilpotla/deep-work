const tabs = await chrome.tabs.query({});

const count = document.getElementById("count");
count.innerHTML = tabs.length;

const saver = document.getElementById("saver");
const max_tabs = document.getElementById("max-tabs");
const getter = document.getElementById("getter");

saver.onsubmit = (e) => {
  e.preventDefault();
  chrome.storage.local.set({ MAX: max_tabs.value }).then(() => {
    console.log("Maximum number of tabs is set to: " + max_tabs.value);
  });
}

getter.onclick = (e) => {
  chrome.storage.local.get(["MAX"]).then((result) => {
    console.log("Saved maximum number of tabs: " + result.MAX);
  });
}
