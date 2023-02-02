const tabs = await chrome.tabs.query({});

console.log("TABS: " + JSON.stringify(tabs[0]));
console.log("TABS: " + tabs.length);

const count = document.getElementById("count");
count.innerHTML = tabs.length;
