var currentIndex = -1;
var productNameinput = document.getElementById("productNameInput");
var productpriceinput = document.getElementById("productPriceInput");
var productcatgoryinput = document.getElementById("productCatgoryInput");
var productdiscriptioninput = document.getElementById(
  "productDiscriptionInput"
);
function deleteProduct(index) {
  productContainer.splice(index, 1);
  localStorage.setItem("myproducts", JSON.stringify(productContainer));
  displayProduct();
}
function clearForm() {
  productNameinput.value = "";
  productpriceinput.value = "";
  productcatgoryinput.value = "";
  productdiscriptioninput.value = "";
}

var productContainer;
if (localStorage.getItem("myproducts") == null) {
  productContainer = [];
} else {
  productContainer = JSON.parse(localStorage.getItem("myproducts"));
  displayProduct();
}

function addProduct() {
  var product = {
    name: productNameinput.value,
    price: productpriceinput.value,
    category: productcatgoryinput.value,
    description: productdiscriptioninput.value,
  };
  productContainer.push(product);
  localStorage.setItem("myproducts", JSON.stringify(productContainer));
  displayProduct();
  clearForm();
}

function displayProduct() {
  var box = "";
  for (var i = 0; i < productContainer.length; i++) {
    box += "<tr>";
    box += "<td>" + productContainer[i].name + "</td>";
    box += "<td>" + productContainer[i].price + "</td>";
    box += "<td>" + productContainer[i].category + "</td>";
    box += "<td>" + productContainer[i].description + "</td>";
    box +=
      '<td><button onclick="updateProduct(' +
      i +
      ')" class="btn btn-warning">update</button></td>';
    box +=
      '<td><button onclick="deleteProduct(' +
      i +
      ')" class="btn btn-danger">delete</button></td>';
    box += "</tr>"; // Added to properly close the table row
  }
  document.getElementById("tablebody").innerHTML = box;
}

var cont = "";
var cont2 = "";
var newtext = "";
function searchProduct(term) {
  cont = ""; // Clear previous search results
  cont2 = ""; // Clear previous stylized search results
  for (var i = 0; i < productContainer.length; i++) {
    if (productContainer[i].name.includes(term.trim())) {
      cont += "<tr>";
      cont += "<td>" + productContainer[i].name + "</td>";
      cont += "<td>" + productContainer[i].price + "</td>";
      cont += "<td>" + productContainer[i].category + "</td>";
      cont += "<td>" + productContainer[i].description + "</td>";
      cont += "</tr>";

      newtext = productContainer[i].name.replace(
        term,
        `<span style="color:red;">` + term + `</span>`
      );
      cont2 += `<p>` + newtext + `</p>`;
    }
  }
  document.getElementById("tablebody").innerHTML = cont;
  document.getElementById("search").innerHTML = cont2;
}

//*/
/*
        document.body.addEventListener("click",function(){
            var r = math.round(math.random()*255  );
            var g = math.round(math.random()*255  );
            var b = math.round(math.random()*255  );
            document.body.style.dackgroundColor="rgb("+r+","+g+","+b+" )";
        })
        document.body.addEventListener("click",function(e){
console.log(e.clientX);
        })
var myImg = document.getElementById("demo")
document.body.addEventListener("mousemove" , function(e){
    myImg.style.left=e.clientX
myImg.style.left=e.clientX})*/
