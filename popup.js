const tabs = await chrome.tabs.query({});

const counter = document.getElementById("counter");
const saver = document.getElementById("saver");
const maxTabs = document.getElementById("max-tabs");
const onOffSwitch = document.getElementById("on-off-switch");

const statusOn = () => {
  onOffSwitch.innerHTML = "On";
  onOffSwitch.className = "success";
}

const statusOff = () => {
  onOffSwitch.innerHTML = "Off";
  onOffSwitch.className = "danger";
}

const statusChecker = (status) => {
  if (status === "ON") {
    statusOn();
  } else {
    statusOff();
  }
}

const status = (await chrome.storage.local.get(["STATUS"])).STATUS;
statusChecker(status);


const result = await chrome.storage.local.get(["MAX"]);
counter.innerHTML = result.MAX;

saver.onsubmit = (e) => {
  e.preventDefault();
  counter.innerHTML = maxTabs.value;
  chrome.storage.local.set({ MAX: maxTabs.value });
}

onOffSwitch.onclick = (e) => {
  e.preventDefault();
  chrome.storage.local.get(["STATUS"]).then((result) => {
    if (result !== undefined  || result.STATUS !== undefined) {
      if (result.STATUS === "ON") {
        chrome.storage.local.set({ STATUS: "OFF" });
        statusOff();
      } else {
        chrome.storage.local.set({ STATUS: "ON" });
        statusOn();
      }
    }
  });
}
