const tabs = await chrome.tabs.query({});

const saver = document.getElementById("saver");
const maxTabs = document.getElementById("max-tabs");
const onOffSwitch = document.getElementById("on-off-switch");

saver.onsubmit = (e) => {
  e.preventDefault();
  chrome.storage.local.set({ MAX: maxTabs.value });
}

onOffSwitch.onclick = (e) => {
  e.preventDefault();
  chrome.storage.local.get(["STATUS"]).then((result) => {
    if (result !== undefined  || result.STATUS !== undefined) {
      if (result.STATUS === "ON") {
        chrome.storage.local.set({ STATUS: "OFF" });
      } else {
        chrome.storage.local.set({ STATUS: "ON" });
      }
    }
  });
}
