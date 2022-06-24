
console.log( document.getElementById("maSP").value)
function hienThi() {
  var div = document.getElementById('add');
  if (div.style.display !== 'none') {
    div.style.display = 'none';
  }
  else {
    div.style.display = 'block';
  }
}
var data = []

function them() {
  var add_maSP = document.getElementById("maSP").value
  var add_maadmin = document.getElementById("ma").value
  var add_tenadmin = document.getElementById("ten").value
  var add_gia = document.getElementById("gia").value
  var add_danhmuc = document.getElementById("danhmuc").value

  var item = {
    Ma: add_maSP,
    Ten: add_tenadmin,
    Gia: add_gia,
    Danhmuc: add_danhmuc
  }
  var listUser = localStorage.getItem("list-User") ? JSON.parse(localStorage.getItem("list-User")) : [];
  listUser.push(item)
  localStorage.setItem("list-User", JSON.stringify(listUser))
  // data.push(item)
  // xuatdulieu()
  renderUser()
  clear()
}
function renderUser() {
  var listUser = localStorage.getItem("list-User") ? JSON.parse(localStorage.getItem("list-User")) : [];
  var add_maadmin = document.getElementById("ma").value
  var add_maSP = document.getElementById("maSP").value
  var add_tenadmin = document.getElementById("ten").value
  var add_gia = document.getElementById("gia").value
  var add_danhmuc = document.getElementById("danhmuc").value
  var user = `<tr>
   
      
  </tr>`

  listUser.map((value, index) => {
    user += `<tr><th scope='row'> ${index + 1} </th><td> ${value.Ma}   </td><td> ${value.Ten}   </td><td>  ${value.Gia} </td><td> ${value.Danhmuc} </td><td><div class='d-flex justify-content-center '><button onclick ='editUser(${index})'><i class="bi bi-pen"></i> </button> <button onclick='Delete( ${index} )'><i class="bi bi-trash-fill"></i></button></div></td></tr>`
  })

  document.getElementById("data").innerHTML = user
}

function clear() {
  document.getElementById("maSP").value =""
  document.getElementById("ma").value = ""
  document.getElementById("ten").value = ""
  document.getElementById("gia").value = ""
  document.getElementById("danhmuc").value = ""
}
function changeUser() {
  var listUser = localStorage.getItem("list-User") ? JSON.parse(localStorage.getItem("list-User")) : [];
  var index = document.getElementById("ma").value
  var add_maSP =document.getElementById("maSP").value
  var add_tenadmin = document.getElementById("ten").value
  var add_gia = document.getElementById("gia").value
  var add_danhmuc = document.getElementById("danhmuc").value
  listUser[index] = {
    Ma: add_maSP,
    Ten: add_tenadmin,
    Gia: add_gia,
    Danhmuc: add_danhmuc
  }
  localStorage.setItem("list-User", JSON.stringify(listUser))
  renderUser();
  clear()
}
function editUser(index) {
  var listUser = localStorage.getItem("list-User") ? JSON.parse(localStorage.getItem("list-User")) : [];   
  document.getElementById("ma").value = index
  document.getElementById("maSP").value = listUser[index].Ma
  document.getElementById("ten").value = listUser[index].Ten
  document.getElementById("gia").value = listUser[index].Gia
  document.getElementById("danhmuc").value = listUser[index].Danhmuc
  document.getElementById("add").style.display = 'block';
  // document.getElementById("index").value = index
}
function Delete(index) {
  var listUser = localStorage.getItem("list-User") ? JSON.parse(localStorage.getItem("list-User")) : [];
  listUser.splice(index, 1)
  localStorage.setItem("list-User", JSON.stringify(listUser))
  renderUser();
}

