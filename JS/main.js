let listOfBusiness = {
    "business":
        [
            { "id": "SP01", "name": "Surface Pro 8 for Business", "desc": "Get unprecedented levels of performance and versatility on a 13-inch screen. Available with Windows 11." },
            { "id": "SP02", "name": "Get Microsoft Teams for free", "desc": "Online meetings, chat and shared cloud storage – all in one place." },
            { "id": "SP03", "name": "Microsoft 365 for business", "desc": "Stay a step ahead with powerful apps for productivity, connection and security." },
            { "id": "SP04", "name": "Welcome to your Windows 365 Cloud PC", "desc": "Securely stream your Windows experience from the Microsoft cloud to any device." },
        ]
}
var ten_menu = document.getElementById('ten-menu');
for (var i = 0; i < listOfBusiness['business'].length; i++) {
    menu.innerHTML += ' <div class="col-1"></div><div class="col-2 border" style="text-align: center; color: black;background-color: white;">' +
        listOfBusiness['business'][i].name;
}
