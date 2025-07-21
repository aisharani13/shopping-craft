let list = document.getElementById('productList')
list.style.display = 'none';
document.getElementById("Search").addEventListener("keyup", function () {
  let filter = this.value.toLowerCase();
  let items = document.querySelectorAll("#productList .product-item");

  let hasMatch = false;
  items.forEach(function (item) {
    const text = item.textContent.toLowerCase();
    if (text.includes(filter)) {
      item.style.display = "block";
      hasMatch = true;
    } else {
      item.style.display = "none";
    }
  });

  // Hide dropdown if nothing matches or input is empty
  document.getElementById("productList").style.display = (filter === "" || !hasMatch) ? "none" : "block";
});