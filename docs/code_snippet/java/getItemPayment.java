PurchasedItems purchasedItems = new PurchasedItems(/*context*/ this);
// get item value
// method one (Recommended)
int coin = purchasedItems.getInt("Coin"); // returns item value if exist otherwise returns 0

// alternatively you can use
int _coin = purchasedItems.getValue("Coin", /*default value*/ 0); // returns item value if exist otherwise returns default value