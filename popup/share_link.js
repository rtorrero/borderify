document.addEventListener("DOMContentLoaded", function () {
  const clickableElement = document.getElementById("redirect-button");
  clickableElement.addEventListener("click", function () {
    console.log("The clickable element was clicked!");

    browser.storage.local.get(["pageTitle", "pageContent"]).then((result) => {
      const title = result.pageTitle || "No Title";

      // Display the content in the popup (or do something else with it)
      document.getElementById("page-title").innerText = title;

      // For example, you can also use this content to decide the redirection
      document
        .getElementById("redirect-button")
        .addEventListener("click", () => {
          const redirectToUrl = "https://another-example.com";
          browser.tabs
            .query({ active: true, currentWindow: true })
            .then((tabs) => {
              browser.tabs.update(tabs[0].id, { url: redirectToUrl });
            });
        });
    });
  });
});
