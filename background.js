// Reference:
// https://developer.chrome.com/docs/extensions/mv3/service_workers/
// https://developer.chrome.com/docs/extensions/reference/runtime/#event-onInstalled

chrome.tabs.onCreated.addListener(async () => {
  let tabs = await chrome.tabs.query({});
  let nTabs = tabs.length;
  chrome.storage.local.get(["MAX"]).then((result) => {
    if (nTabs > result.MAX) {
      const lastTab = tabs[tabs.length - 1];
      const tabId = lastTab.id;
      chrome.tabs.remove(tabId);
    }
  });
});
