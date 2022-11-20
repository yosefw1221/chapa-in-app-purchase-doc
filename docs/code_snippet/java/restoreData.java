try {
   PurchasedItems purchasedItems = new PurchasedItems(/*context*/ this);
   String encryptedString = "--encrypted json string--";
   purchasedItems.restorePurchase(encryptedString);
   // using encrypted JSON object
   JSONObject encryptedJSON = // encrypted JSONObject
   purchasedItems.restorePurchase(encryptedJSON);
 } catch(JSONException e){
    e.printStackTrace();
}