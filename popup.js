const tabs = await chrome.tabs.query({});

const saver = document.getElementById("saver");
const max_tabs = document.getElementById("max-tabs");

saver.onsubmit = (e) => {
  e.preventDefault();
  chrome.storage.local.set({ MAX: max_tabs.value });
}
