// Reference:
// https://developer.chrome.com/docs/extensions/mv3/service_workers/
// https://developer.chrome.com/docs/extensions/reference/runtime/#event-onInstalled

const MAXIMUM_NUMBER_OF_TABS = 3;

chrome.tabs.onCreated.addListener(async () => {
  let tabs = await chrome.tabs.query({});
  let nTabs = tabs.length;
  if (nTabs > MAXIMUM_NUMBER_OF_TABS) {
    const lastTab = tabs[tabs.length - 1];
    const tabId = lastTab.id;
    chrome.tabs.remove(tabId);
  }
});
