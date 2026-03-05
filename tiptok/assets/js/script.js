(() => {
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const page = (window.location.pathname.split("/").pop() || "index.html")
    .split("?")[0]
    .split("#")[0];

  document.querySelectorAll(".nav-links a").forEach((a) => {
    const href = (a.getAttribute("href") || "").split("?")[0].split("#")[0];
    if (!href) return;
    if (href === page || (page === "" && href === "index.html")) {
      a.classList.add("is-active");
    }
  });
})();
