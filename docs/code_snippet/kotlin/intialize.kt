val config = ChapaConfiguration()
config.key = "YOUR-CHAPA-SECRET-KEY" // (Required)
// for security purpose it is better to use decrypted key
// to get decrypt key use Cipher class,
// Log.d("Chapa-key",Cipher.decrypt(this,"YOUR CHAPA-SECRET-KEY"))
// config.key = Cipher.decrypt(this, "DECRYPTED_CHAPA-SECRET-KEY")
config.currency = Currency.ETB // Currency.USD --Default ETB

// config.callbackUrl = "https://example.com/api/callback"  (Optional)

// config.customer = Customer("first_name","last_name","example@mail.com") (Optional)  Dialog will show to customer, to fill their infomation
// config.customization = Customization("title","description","logo-url")

Chapa.init(applicationContext, config)