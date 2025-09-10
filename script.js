const categorySelect = document.getElementById('category');
const productList = document.getElementById('productList');
const products = productList.getElementsByTagName('li');

categorySelect.addEventListener('change', () => {
  const selectedCategory = categorySelect.value;

  for (let product of products) {
    const productCategory = product.getAttribute('data-category');

    if (selectedCategory === 'all' || productCategory === selectedCategory) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  }
});