/*
Author: Julie Solacroup
Last modified: 30/01/19

    Script containing the Objects (JSON) used in the web app

*/

function Item(image, name, reference, description, price) {
    this.image = image;
    this.name = name;
    this.reference = reference;
    this.description = description;
    this.price = price;

    this.display = function(){
        alert('ref: '+this.reference+'\n'+'price: '+this.price);
    }
}

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

let itemA = new Item('/Computer.jpg',"Computer Screen", "CSX1231", "Curved Computer Monitor with OLED Display of 20 inches.", 150);
let itemB = new Item('/Unit.jpg', "Computer Unit", "CSX1232", "Computer Unit Quadricore composed of the latest processor Intel I9", 250);
let itemC = new Item('/Keyboard.jpg', "Keyboard + Mouse" , "CSX1233", "Just a simple Computer Keyboard and a Mouse", 50);
let itemD = new Item('/ARglasses.jpg', "AR Glasses" , "CSX1234", "Just a simple AR Glasses to run the latest games", 200);
let itemE = new Item('/Hub.jpg', "USB Hub" , "CSX1235", "Just a simple USB hub to let you connect devices to your computer", 20);
let itemF = new Item('/Hdmi.jpg', "HDMI Cable" , "1236", "Just a simple HDMI cable to connect your devices", 10);

let mockInventory = new StoreInventory([itemA,itemB,itemC,itemD,itemE,itemF]);

export{Item, Basket, Owner, StoreInventory, mockInventory} 