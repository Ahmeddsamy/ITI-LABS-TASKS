const User = require("../User");

describe("test addToCart", function () {
  it("adds a product to the cart", function () {
    const ahmed = new User("ahmed", "samy");
    const product = { name: "watch", price: 10 };
    ahmed.addToCart(product);

    expect(ahmed.cart.length).toEqual(1);
    expect(ahmed.cart[0]).toEqual(product);
  });
});

describe("test calculateTotalCartPrice", function () {
  it("calculates the total cart price ", function () {
    const ahmed = new User("ahmed", "samy");
    ahmed.addToCart({ name: "watch", price: 10 });
    ahmed.addToCart({ name: "phone", price: 100 });

    const totalPrice = ahmed.calculateTotalCartPrice();
    expect(totalPrice).toEqual(110);
  });
});

describe("test checkout", function () {
  it("calls paymentModel methods and returns true on verified payment", function () {
    let paymentModel = jasmine.createSpyObj([
      "goToVerifyPage",
      "returnBack",
      "isVerify",
    ]);

    paymentModel.isVerify.and.returnValue(true);
    const result = ahmed.checkout(paymentModel);

    expect(paymentModel.goToVerifyPage).toHaveBeenCalled();
    expect(paymentModel.returnBack).toHaveBeenCalled();
    expect(paymentModel.isVerify).toHaveBeenCalled();
    expect(result).toBe(true);
  });
  it("calls paymentModel methods and returns false on verified payment", function () {
    let paymentModel = jasmine.createSpyObj([
      "goToVerifyPage",
      "returnBack",
      "isVerify",
    ]);

    paymentModel.isVerify.and.returnValue(false);
    const result = ahmed.checkout(paymentModel);

    expect(paymentModel.goToVerifyPage).toHaveBeenCalled();
    expect(paymentModel.returnBack).toHaveBeenCalled();
    expect(paymentModel.isVerify).toHaveBeenCalled();
    expect(result).toBe(false);
  });
});
