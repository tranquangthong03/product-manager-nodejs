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
// Form Search
const formSearch = document.querySelector("#formSearch");
if (formSearch) {
  let url = new URL(window.location.href);
  formSearch.addEventListener("submit", (e) => {
    const searchInput = e.target.elements.keyword.value;
    e.preventDefault(); // Ngăn chặn hành động mặc định của form
    if (searchInput) {
      url.searchParams.set("keyword", searchInput);
    } else {
      url.searchParams.delete("keyword");
    }
    window.location.href = url.href;
  });
}
//End Form Search
