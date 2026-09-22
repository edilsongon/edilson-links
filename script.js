document.querySelectorAll("[data-product]").forEach((link) => {
  link.addEventListener("click", () => {
    const product = link.dataset.product;

    if (typeof window.gtag === "function") {
      window.gtag("event", "select_product", {
        product_name: product,
      });
    }
  });
});
