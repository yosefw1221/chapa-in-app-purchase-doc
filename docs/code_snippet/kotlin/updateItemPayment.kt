// to update item value
val purchasedItems = PurchasedItems(/*context*/ this)
val coin = purchasedItems.getInt("Coin") 
if(coin>5){
    // it subtracts 5 coin from current coin value
    val newCoinValue = purchasedItems.updateValue("Coin",5,ItemProperties.SUBTRACT)
    Log.d("Coin","$newCoinValue coins left")
} else 
    Log.d("Coin","You don't have enough coins")