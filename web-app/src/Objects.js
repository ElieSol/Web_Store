/*
Author: Julie Solacroup
Last modified: 30/01/19

    Script containing the Objects (JSON) used in the web app

*/

/*
    Item Object
    Attributes:
        - image : string that contains the path to the corresponding image (i.e. "img/")
        - name : string containing the items name
        - reference:  string containing the items name
        - description:  string containing the items description
        - price: int corresponding to the items price
        - quantityBuyer: int corresponding to the number of this items that the client has in his cart
        - quantityStore: int corresponding to the number of this items that the store has in stock

    Methods:
        _display(): display reference and price of the item
        _addedToCart(): add item to cart and remove from inventory
        _deletedFromCart() : remove item from cart and re-add to inventory
*/
function Item(image, name, reference, description, price, quantityStore) {
    this.image = image;
    this.name = name;
    this.reference = reference;
    this.description = description;
    this.price = price;
    this.quantityBuyer = 0;
    this.quantityStore = quantityStore;

    this.display = function(){
        alert('ref: '+this.reference+'\n'+'price: '+this.price);
    }

    this.addedToCart = function(){
        this.quantityBuyer+=1;
        this.quantityStore-=1;
    }

    this.deletedFromCart = function(){
        this.quantityBuyer-=1;
        this.quantityStore+=1;
    }
}


/*
    Basket Object
    Attributes:
        - listOfItems: list containing the items that the client has in his cart
        - total Price: int corresponding to the total price of the items in the cart
        - owner (optionnal): string containing the name of the owner of the cart

    Methods:
        _displayContent() : display items in the cart
        _addItem() : add item to the cart (i.e. the list listOfItems)
        _getItemFromReference() : find item from reference passed as parameter and return the corresponding item
        _getTotalPrice() : computes the total price and returns the value
        _getTotalNumberOfItem() : get the number of items in the cart and returns the value
        _getQuantityOfEachItems() : return an object with as an index the reference of an item and as a value the quantity of the corresponding item
*/
function Basket(listOfItems, totalPrice, owner) {
    this.listOfItems = listOfItems;
    this.totalPrice = totalPrice;
    this.owner = owner;

    this.displayContent = function(){
        for(let i = 0; i < listOfItems.length ; i++){
            listOfItems[i].display();
        }
    }

    this.addItem = function(item){
        this.listOfItems.push(item);
    }

    this.getItemFromReference = function(ref){
        for(let i = 0; i < listOfItems.length ; i++){
            if(listOfItems[i].reference==ref){
                return listOfItems[i];
            }
        }
    }

    this.getTotalPrice = function(){
        var totalPrice = 0;
        for(let i = 0; i < listOfItems.length ; i++){
            totalPrice += listOfItems[i].price;
        }
        return totalPrice;
    }

    this.getTotalNumberOfItem = function(){
        var total = 0;
        for(let i = 0; i < listOfItems.length ; i++){
            total += 1;
        }
        return total;
    }

    this.getQuantityOfEachItems = function (){
        var listOfQuantity = {};
        for(let i = 0; i < listOfItems.length ; i++){
            var item = listOfItems[i].reference;
            if(!(item in listOfQuantity)){
                listOfQuantity[item] = 1;
            }
            else{
                listOfQuantity[item] += 1;
            }
        }
        return listOfQuantity;
    }
}



function Owner(name, basket) {
    this.name = name;
    this.basket = basket;
}


/*
    StoreInventory Object
    Attributes:
        - inventoryList: list containing the items that the store has in stock

    Methods:
        _addItem() : add item to the store inventory (i.e. the list inventoryList)
        _deleteItem() : delete the item passed as parameters from the inventory
        _getQuantityOfEachItems() : return an object with as an index the reference of an item and as a value the quantity of the corresponding item
*/
function StoreInventory(inventoryList) {
    this.inventoryList = inventoryList;

    this.addItem = function(item){
        this.inventoryList.push(item);
    }

    this.deleteItem = function(item){
        var index = this.inventoryList.indexOf(item);
        this.inventoryList.splice(index,1);
    }

    this.getQuantityOfEachItems = function (){
        var listOfQuantity = {};
        for(let i = 0; i < inventoryList.length ; i++){
            var item = inventoryList[i].reference;
            if(!(item in listOfQuantity)){
                listOfQuantity[item] = 1;
            }
            else{
                listOfQuantity[item] += 1;
            }
        }
        return listOfQuantity;
    }
}

/*

Declaration of the mock data

*/

let itemA = new Item('/Computer.jpg',"Computer Screen", "CSX1231", "Curved Computer Monitor with OLED Display of 20 inches.", 150, 5);
let itemB = new Item('/Unit.jpg', "Computer Unit", "CSX1232", "Computer Unit Quadricore composed of the latest processor Intel I9", 250, 6);
let itemC = new Item('/Keyboard.jpg', "Keyboard + Mouse" , "CSX1233", "Just wireless Computer Keyboard and a Mouse", 50, 15);
let itemD = new Item('/ARglasses.jpg', "AR Glasses" , "CSX1234", "AR Glasses to run the latest games using the latest technologies", 200, 2);
let itemE = new Item('/Hub.jpg', "USB Hub" , "CSX1235", "Just a simple USB hub to let you connect devices to your computer", 20, 20);
let itemF = new Item('/Hdmi.jpg', "HDMI Cable" , "1236", "Just a simple HDMI cable to connect your devices", 10, 17);

let mockInventory = new StoreInventory([itemA,itemB,itemC,itemD,itemE,itemF]);

export{Item, Basket, Owner, StoreInventory, mockInventory} 