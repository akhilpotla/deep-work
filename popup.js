const tabs = await chrome.tabs.query({});

const count = document.getElementById("count");
count.innerHTML = tabs.length;

const closer = document.getElementById("closer");
closer.onclick = async (e) => {
  const lastTab = tabs[tabs.length - 1]
  const tabId = lastTab.id;
  chrome.tabs.remove(tabId);
}
