const tabs = await chrome.tabs.query({});

const saver = document.getElementById("saver");
const maxTabs = document.getElementById("max-tabs");

saver.onsubmit = (e) => {
  e.preventDefault();
  chrome.storage.local.set({ MAX: maxTabs.value });
}
