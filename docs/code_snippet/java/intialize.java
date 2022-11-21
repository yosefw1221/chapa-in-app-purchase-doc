ChapaConfiguration config = new ChapaConfiguration();
config.setKey("YOUR-CHAPA-SECRET-KEY"); // (Required)
// for security purpose it is better to use encrypted key
// to get encrypt key use Cipher class,
// Log.d("Chapa-key",Cipher.encrypt(this,"YOUR-CHAPA-SECRET-KEY"))
// config.key = Cipher.decrypt(this, "ENCRYPTED_CHAPA-SECRET-KEY")

config.setCurrency(Currency.ETB); // Currency.USD --Default ETB

// config.setCallbackUrl("https://example.com/api/callback");  (Optional)

// config.setCustomer(new Customer("first_name","last_name","example@mail.com")); (Optional)  Dialog will show to customer, to fill their infomation
// config.setCustomization(new Customization("title","description","logo-url"));

Chapa.init(getApplicationContext(), config);
