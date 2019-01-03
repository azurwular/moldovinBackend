const mocha = require('mocha');
const assert = require("assert");
const Product = require("../api/models/product");

//Describe
describe("save a product", function() {

    //create tests
    it ('saves a product', function(done) {
        var char = new Product({
            name: "Product090"
        });

        char.save().then(function(){
            assert(char.isNew ===false);
            done();
        });

    });
    
});

