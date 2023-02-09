const tabs = await chrome.tabs.query({});

const count = document.getElementById("count");
count.innerHTML = tabs.length;

const saver = document.getElementById("saver");
console.log("saver: " + saver);
const max_tabs = document.getElementById("max-tabs");
max_tabs.onchange = (e) => {
  console.log(e.target.value);
}
