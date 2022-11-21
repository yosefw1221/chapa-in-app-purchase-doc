Log.d("Encrypted ",
        "amount ${Cipher.encrypt(this,"19.9")}" + 
        "item-key ${Cipher.encrypt(this,"gold")}" +
        "item-value ${Cipher.encrypt(this,"300")}")

// copy the logged encrypted data from logcat  
try {            
   val gold =  ItemPayment(
        this,
        Cipher.decrypt(this, "C5F373E141957172C4F130A65BFE70B9").toDouble(), // amount
        Cipher.decrypt(this, "DAABD31A834EEC8E3EE29C819AFD6091"), // itemKey
        Cipher.decrypt(this, "E6D33CB6CBFB48212745A53469AC5CC0").toInt(), // itemValue
        ItemProperties.ADD
    )
} catch (e: ChapaError) {
    Log.e("Error", e.message) // UNSUPPORTED DATA TYPE
}