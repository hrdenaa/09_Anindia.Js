let shoppingList = [];

function renderList() {
    let list = document.getElementById("itemsBelanja");
    list.innerHTML = "";

    for (let i = 0; i < shoppingList.length; i++) {
        let li = document.createElement("li");
        li.textContent = shoppingList[i];
        list.appendChild(li);
    }

    document.getElementById("jumlahItem").innerHTML =
        "Jumlah item saat ini: " + shoppingList.length;
}

function tambahItem() {
    let item = document.getElementById("newItem").value;
    if (item !== "") {
        shoppingList.push(item);
        document.getElementById("newItem").value = "";
        renderList();
    }
}

function hapusItemTerakhir() {
    if (shoppingList.length > 0) {
        shoppingList.pop();
        renderList();
    }
}

renderList();
