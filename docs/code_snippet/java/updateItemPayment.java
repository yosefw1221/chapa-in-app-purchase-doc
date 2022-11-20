// to update item value
PurchasedItems purchasedItems = new PurchasedItems(/*context*/ this);
int coin = purchasedItems.getInt("Coin") 
if(coin>5){
    // it subtracts 5 coin from current coin value
    int newCoinValue = purchasedItems.updateValue("Coin",5,ItemProperties.SUBTRACT);
    Log.d("Coin",newCoinValue + "coins left");
} else 
    Log.d("Coin","You don't have enough coins");