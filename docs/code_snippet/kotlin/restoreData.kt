try {
   val purchasedItems = PurchasedItems(/*context*/ this)
   val encryptedString = "--encrypted json string--";
   purchasedItems.restorePurchase(encryptedString);
   // using encrypted JSON object
   JSONObject encryptedJSON = // encrypted JSONObject
   purchasedItems.restorePurchase(encryptedJSON);
 } catch (e : JSONException){
    Log.e("Chapa", "Error: ${e.message}")
}