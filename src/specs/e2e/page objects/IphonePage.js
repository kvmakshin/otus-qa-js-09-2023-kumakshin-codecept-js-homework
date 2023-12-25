class IphonePage {
    constructor() {
      this.openIphone15ProSelector = "li.chapternav-item.chapternav-item-iphone-15-pro .chapternav-label";
      this.buyIphone15ProSelector = "a.welcome__lockup-cta[aria-label='Buy iPhone 15 Pro']";
  
      this.openIphone15Selector = "li.chapternav-item.chapternav-item-iphone-15 .chapternav-label";
      this.buyIphone15Selector = "a.welcome__lockup-cta[aria-label='Buy iPhone 15']";
  
      this.openIphone14Selector = "li.chapternav-item.chapternav-item-iphone-14 .chapternav-label";
  
      this.openIphone13Selector = "li.chapternav-item.chapternav-item-iphone-13 .chapternav-label";
  
      this.openIphoneSESelector = "li.chapternav-item.chapternav-item-iphone-se .chapternav-label";
      this.buyIphoneSESelector = "a.ac-ln-button[data-analytics-title='buy iphone se']";
  
      this.openCompareSelector = "li.chapternav-item.chapternav-item-compare .chapternav-label";
  
      this.openAirPodsSelector = "li.chapternav-item.chapternav-item-airpods .chapternav-label";
      this.buyAirPodsPro2Selector = "a[aria-label='Buy - AirPods Pro (2nd generation)']";
  
      this.openAirTagSelector = "li.chapternav-item.chapternav-item-airtag .chapternav-label";
      this.buyAirTagSelector = "a.ac-ln-button[data-analytics-title='buy apple airtag']";
  
      this.openAccessoriesSelector = "li.chapternav-item.chapternav-item-accessories .chapternav-label";
  
      this.openAppleCardSelector = "li.chapternav-item.chapternav-item-apple-card .chapternav-label";
      this.applyForAppleCardSelector = "a.ac-ln-button.ac-ln-button-apply.apply-now-cta[data-analytics-title='apply now']";
  
      this.openIOSSelector = "li.chapternav-item.chapternav-item-ios .chapternav-label";
  
      this.openShopIphoneSelector = "li.chapternav-item.chapternav-item-shop-iphone .chapternav-label";
    }
  
    async goto(I) {
      await I.amOnPage("iphone/");
    }
  
    async clickBuyIphone15Pro(I) {
      await I.click(this.openIphone15ProSelector);
      await I.click(this.buyIphone15ProSelector);
    }
  
    async clickBuyIphone15(I) {
      await I.click(this.openIphone15Selector);
      await I.click(this.buyIphone15Selector);
    }
  
    async clickIphone14(I) {
      await I.click(this.openIphone14Selector);
    }
  
    async clickIphone13(I) {
      await I.click(this.openIphone13Selector);
    }
  
    async clickBuyIphoneSE(I) {
      await I.click(this.openIphoneSESelector);
      await I.click(this.buyIphoneSESelector);
    }
  
    async clickCompare(I) {
      await I.click(this.openCompareSelector);
    }
  
    async clickBuyAirPodsPro2(I) {
      await I.click(this.openAirPodsSelector);
      await I.click(this.buyAirPodsPro2Selector);
    }
  
    async clickBuyAirTag(I) {
      await I.click(this.openAirTagSelector);
      await I.click(this.buyAirTagSelector);
    }
  
    async clickAccessories(I) {
      await I.click(this.openAccessoriesSelector);
    }
  
    async clickApplyForAppleCard(I) {
      await I.click(this.openAppleCardSelector);
      await I.click(this.applyForAppleCardSelector);
    }
  
    async clickIOS(I) {
      await I.click(this.openIOSSelector);
    }
  
    async clickShopIphone(I) {
      await I.click(this.openShopIphoneSelector);
    }
  }
  
  module.exports = new IphonePage();
  