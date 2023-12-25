const IphonePage = require("./page objects/IphonePage");

Feature("iPhone Purchase Tests");

Scenario("Test iPhone 15 Pro Purchase", async ({ I }) => {
  IphonePage.goto(I);
  IphonePage.clickBuyIphone15Pro(I);
  I.wait(10);
  I.seeInCurrentUrl("/shop/buy-iphone/iphone-15-pro");
});

Scenario("Test iPhone 15 Purchase", async ({ I }) => {
  IphonePage.goto(I);
  IphonePage.clickBuyIphone15(I);
  I.wait(10);
  I.seeInCurrentUrl("/shop/buy-iphone/iphone-15");
});

Scenario("Test iPhone 14 Purchase", async ({ I }) => {
  IphonePage.goto(I);
  IphonePage.clickIphone14(I);
  I.seeInCurrentUrl("/shop/buy-iphone/iphone-14");
});

Scenario("Test iPhone 13 Purchase", async ({ I }) => {
  IphonePage.goto(I);
  IphonePage.clickIphone13(I);
  I.seeInCurrentUrl("/shop/buy-iphone/iphone-13");
});

Scenario("Test iPhone SE Purchase", async ({ I }) => {
  IphonePage.goto(I);
  IphonePage.clickBuyIphoneSE(I);
  I.wait(10);
  I.seeInCurrentUrl("/shop/buy-iphone/iphone-se");
});

Feature("iPhone Models Comparison Test");

Scenario("Test Compare iPhone Models", async ({ I }) => {
  IphonePage.goto(I);
  IphonePage.clickCompare(I);
  I.wait(10);
  I.seeElement("h1#page-title.typography-headline-elevated");
});

Feature("AirPods Purchase Test");

Scenario("Test AirPods Pro Purchase", async ({ I }) => {
  IphonePage.goto(I);
  IphonePage.clickBuyAirPodsPro2(I);
  I.wait(10);
  I.seeInCurrentUrl("/shop/product/MTJV3AM/A/airpods-pro");
});

Feature("AirTag Purchase Test");

Scenario("Test AirTag Purchase", async ({ I }) => {
  IphonePage.goto(I);
  IphonePage.clickBuyAirTag(I);
  I.wait(10);
  I.seeInCurrentUrl("/shop/buy-airtag/airtag");
});

Feature("View iPhone Accessories Test");

Scenario("Test View iPhone Accessories", async ({ I }) => {
  IphonePage.goto(I);
  IphonePage.clickAccessories(I);
  I.wait(5);
  I.seeElement("h2.as-pinwheel-title[data-analytics-section='Featured iPhone Accessories']");
});

Feature("Apply for Apple Card Test");

Scenario("Test Apply for Apple Card", async ({ I }) => {
  IphonePage.goto(I);
  IphonePage.clickApplyForAppleCard(I);
  I.wait(10);
  I.seeElement("h1.si-container-title.tk-intro");
});

Feature("iOS 17 Overview Test");

Scenario("Test iOS 17 Overview", async ({ I }) => {
  IphonePage.goto(I);
  IphonePage.clickIOS(I);
  I.wait(5);
  I.seeElement("a[href='/ios/ios-17/'][data-analytics-title='product index']");
});

Feature("Shop iPhone Test");

Scenario("Test Shop iPhone", async ({ I }) => {
  IphonePage.goto(I);
  IphonePage.clickShopIphone(I);
  I.wait(5);
  I.seeElement("h1.rs-shop-header");
});
