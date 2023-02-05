const tabs = await chrome.tabs.query({});

const count = document.getElementById("count");
count.innerHTML = tabs.length;

const closer = document.getElementById("closer");
closer.onclick = async (e) => {
  const tabId = getLastElement(tabs).id;
  chrome.tabs.remove(tabId);
}

const getLastElement = (array) => {
  const length = array.length;
  return array[length - 1];
}
