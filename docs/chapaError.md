# Chapa Exception

| Error Name |   Error Code | Description |
|---- | ---- |---- |
| CHAPA_ERROR | 400| chapa payment api error |
| UNSUPPORTED_DATA_TYPE | 422| passing unsupported data type in ItemPayment |
| CHAPA_NOT_INITIALIZED | 433| Chapa Configuration not initialize by ```Chapa.init(chapaConfig)``` |
| INVALID_CHAPA_CHECKOUT_URL | 422| Url is not valid chapa checkout url |
| INTERNAL_ERROR | 500| Internal exception occurred  |
| CONNECTIVITY_PROBLEM | 599| Internet connection problem or no internet |
| INVALID_DATA | 600| When ```ChapaConfiguration``` is ```null```
| INVALID_CUSTOMER_DATA | 601| Invalid customer information
| INVALID_CALLBACK_URL | 602| Callback url is not valid url
| INVALID_CHAPA_KEY | 603| Chapa public key is null or Empty
| INVALID_CURRENCY | 604| Unsupported Currency type
| INVALID_TX_REF | 605| When it not alphanumeric characters between 6 and 100
| INVALID_AMOUNT | 606| When the amount is less than 1
| TEST_KEY_IN_PRODUCTION | 607| When using chapa test key in android release build
| INITIALIZE_ON_APP_MAIN_ACTIVITY | 700| Initialize ```Chapa``` on ```AppMainActivity``` class that already have ```AppPayment```
| PHONE_ID_MISMATCH | 701 | Device id is mismatched when initialize ```AppPayment```
