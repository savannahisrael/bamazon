var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    user: "root",
    password: "root",
    host: "localhost",
    port: 8889,
    database: "bamazon"
});

function viewInventory() {
    connection.query("SELECT * FROM products", function (err, data) {
        if (err) throw err;

        console.table(data);
        menu();
    })
}

function menu() {
    inquirer.prompt([
        {
        message: "What is the Item ID number of the item you want to purchase?",
        type: "input",
        name: "item",
        },
        {
        message: "How many units of the product do you want to buy?",
        type: "input",
        name: "units"
        }
    ]).then(function(answers) {
        
    })
}


connection.connect(function(err) {
    if (err) throw err;

    console.log("Welcome valued customer!  See our current inventory below:")
    viewInventory();
});