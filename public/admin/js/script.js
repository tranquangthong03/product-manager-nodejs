const allStatusElements = document.querySelectorAll("[data-status]");
if (allStatusElements.length > 0) {
  let url = new URL(window.location.href);
  allStatusElements.forEach((item) => {
    item.addEventListener("click", (e) => {
      const currentItemStatus = item.getAttribute("data-status");
      if (currentItemStatus !== "all") {
        url.searchParams.set("status", currentItemStatus);
      } else {
        url.searchParams.delete("status");
      }
      window.location.href = url.href; //Set lại url
    });
  });
}
