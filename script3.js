function purchase() {
    alert('You have purchased the product.');
}

function addToCart() {
    alert('Product added to cart.');
}

function buy() {
    alert('You have bought the product.');
}




document.addEventListener("DOMContentLoaded", function() {
    var searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            search();
        }
    });
});

function search() {
    var input, filter, container, product, name, description, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    container = document.getElementsByClassName('container')[0];
    product = container.getElementsByClassName('product');

    for (i = 0; i < product.length; i++) {
        name = product[i].getElementsByTagName('h2')[0];
        description = product[i].getElementsByTagName('p')[0];
        txtValue = name.textContent || name.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            product[i].style.display = '';
        } else {
            product[i].style.display = 'none';
        }
    }
}
