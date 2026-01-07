let currentPage = 0;
const pages = document.querySelectorAll(".page");

function nextPage() {
  pages[currentPage].classList.remove("active");
  currentPage++;
  pages[currentPage].classList.add("active");

  // Auto move if page has data-auto
  if (pages[currentPage].dataset.auto) {
    setTimeout(nextPage, 3000);
  }
}
