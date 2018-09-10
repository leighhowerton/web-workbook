'use strict';

window.onload=function(){
  function itemcount(){
    let list= document.getElementsByTagName("ul")
    // alert("There are" +list[0].children.length+ "items in your cart")
    return list[0].children.length
  }
  itemcount()
  function insertitemscount(){
    let newh2 = document.createElement("h2")
    let list= document.getElementsByTagName("ul")
    let itemcount = list[0].children.length;
    newh2.innerHTML = 'You have ' + itemcount + ' items in your cart';
    let countMessage = document.getElementsByTagName("h1");
    countMessage[0].after(newh2);
    newh2.setAttribute("id", "item-count")
  }
  insertitemscount()
  function insertadditems(){
    let input = document.createElement("input")
    input.setAttribute("placeholder", "type to add")
    let countMessage = document.getElementsByTagName("ul")
    countMessage[0].after(input);
    input.setAttribute("id", "input-text")
    let newbutton = document.createElement("button")
    newbutton.innerHTML = "Add Items"
    newbutton.setAttribute("id", "add-button")
    let nextButton = document.getElementsByTagName("input")
    nextButton[0].after(newbutton)
    newbutton.onclick = additems
  }
  insertadditems()
  function additems(){
    let newItemText = document.getElementById("input-text")
    let newItem = document.createElement("li")
    newItem.innerHTML = newItemText.value
    document.getElementsByTagName("ul")[0].appendChild(newItem)
    document.getElementById("input-text").value = ""

    removeItems(newItem);
    updateItemCounter();
  }
  function updateItemCounter(){
    let h2 = document.getElementById("item-count");
    h2.innerHTML = 'You have ' +
    document.getElementsByTagName('ul')[0].children.length + ' items in your shopping cart';
  }

  function removeItems (items) {
    let removeButton= document.createElement('button');
    removeButton.innerHTML = "Remove";
      items.appendChild(removeButton);
    removeButton.onClick = eraseItem;
  }
  function eraseItem(){
    this.parentNode.remove();
    updateItemCounter();
  }
  eraseItem();
  function insertRemoveItemExistingItems(){
    let cart = document.getElementById("cart");
    for (let i = 0; i < cart.children.length; i++){
      removeItems(cart.children[i]);
    }
  }
}
