var manufactureList = { //(1)--tạo ra mảng chứa tên của từng dòng sản phẩm trong mỗi dòng sản phẩn lại có các hệ sản phẩm khác nhau
    "Laptop": [
        "Surface Laptop GO2", "Surface Laptop 4", "Surface Laptop Studio","Surface Laptop GO","Surface Pro7+","Surface Pro 8"
    ],
    "Xbox": [
        "Xbox Series X", "Xbox Series S"
    ],
    "Console": [
        "Xbox Wireless Headset", "Xbox Stereo Headset – 20th Anniversary Special Edition", "Xbox Stereo Headset"
    ]
}

var productList = []

var manuafaturerTag = document.getElementById('manuafaturer_name')//truyền dữ liệu của manuafaturer_name vào
for(var key in manufactureList) {//(2)--hàm này sẽ lấy các key đặt sẵn sau đó gọi ra  các giá trị ta đã set sẵn trong key và hiển thị ra với mỗi key khác nhau
    manuafaturerTag.innerHTML += `<option value='${key}'>${key}</option>`//'${key}'>${key}
}

function changeManufaturer() {//(3)-- đặt 1 hàm sự kiện onchange "menufaturer" trong html để thay đổi nhà sản xuất, hàm function này đc vt để xử lý khi ta thay đổi nhà sản xuất, thay đổi key kéo theo thay đổi của value
    key = manuafaturerTag.value
    categoryList = manufactureList[key]
    console.log(categoryList)

    var categoruTag = document.getElementById('category_name')//(4)--lấy ra các dòng sản phẩm của mỗi key
    categoruTag.innerHTML = '' //(6)--khi chuyển dữ liệu thì việc đầu tiên phải xóa dữ liệu vừa chọn nên hàm này có mục đích như vậy

    if(categoryList != null) { //(5)--nếu categoryList khác null thì truyền dữ liệu vào
        for (var i = 0; i < categoryList.length; i++) {
            categoruTag.innerHTML += `<option value='${categoryList[i]}'>${categoryList[i]}</option>`
        }
    }
}

function updateTotalPrice() {//(7)--function để tính tổng khi nhập số lượng sản phẩm và giá
    var price = document.getElementById('price').value
    var quantity = document.getElementById('quantity').value

    totalPrice = price * quantity//hàm tính tổng giá

    document.getElementById('total_price').value = totalPrice //sau khi ra số tiền tổng thì hiện vào phần total price
}

var count = 0 //đặt gtri ban đầu =0
function addProduct() { //(8)--Lấy giá trị đã nhập ở trên để truyền vào bảng
    var index = document.getElementById('index').value
    var productName = document.getElementById('product_name').value
    var manufactureName = document.getElementById('manuafaturer_name').value
    var categoryName = document.getElementById('category_name').value
    var price = document.getElementById('price').value
    var quantity = document.getElementById('quantity').value
    var totalPrice = document.getElementById('total_price').value

    var product = {
        'productName': productName,
        'manufactureName': manufactureName,
        'categoryName': categoryName,
        'price': price,
        'quantity': quantity,
        'totalPrice': totalPrice
    }

    if(index != '') {
        productList[index] = product
        showProduct()
        return;
    }

    productList.push(product)

    document.getElementById('result').innerHTML += `<tr>
                <td>${++count}</td>
                <td>${productName}</td>
                <td>${manufactureName}</td>
                <td>${categoryName}</td>
                <td>${price}</td>
                <td>${quantity}</td>
                <td>${totalPrice}</td>
                <td><button class="btn btn-warning" onclick="editProduct(${count - 1})">Edit</button></td>
                <td><button class="btn btn-danger" onclick="deleteProduct(${count - 1})">Delete</button></td>
            </tr>`
}

function deleteProduct(index) {
    console.log(index)
    productList.splice(index, 1)
    showProduct();
}

function showProduct() {
    document.getElementById('result').innerHTML = ''

    for (var i = 0; i < productList.length; i++) {
        document.getElementById('result').innerHTML += `<tr>
                <td>${i+1}</td>
                <td>${productList[i].productName}</td>
                <td>${productList[i].manufactureName}</td>
                <td>${productList[i].categoryName}</td>
                <td>${productList[i].price}</td>
                <td>${productList[i].quantity}</td>
                <td>${productList[i].totalPrice}</td>
                <td><button class="btn btn-warning" onclick="editProduct(${i})">Edit</button></td>
                <td><button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button></td>
            </tr>`
    }
}

function editProduct(index) {
    var product = productList[index]
    console.log(product)
    document.getElementById('index').value = index
    document.getElementById('product_name').value = product.productName
    document.getElementById('manuafaturer_name').value = product.manufactureName
    changeManufaturer()
    document.getElementById('category_name').value = product.categoryName
    document.getElementById('price').value = product.price
    document.getElementById('quantity').value = product.quantity
    document.getElementById('total_price').value = product.totalPrice
}