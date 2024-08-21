browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const targetUrl = "bandcamp.com/album";
  if (changeInfo.status === "complete" && tab.url.includes(targetUrl)) {
    const pageTitle = document.title;

    browser.storage.local.set({ pageTitle }).then(() => {
      console.log("Page content has been stored.");
    });
  }
});
