const ProductsController = require ("../api/controllers/products");
const sinon = require("sinon");

describe ("listProducts test", () => {
  it ("lists products", () => {
    const MockModel = {
      find: sinon.spy()
    };
    const productsController = ProductsController(MockModel);
    productsController.porducts_get_all();
    const expected = true;
    const actual = MockModel.find.calledOnce;
    expected(actual).toEqual(expected);
  });
});