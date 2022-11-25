# Extending PaymentType

Sometimes you may need to extend your own payment type to fit your need. You can do that by extending ```PaymentType``` class.

<CodeGroup>
<CodeGroupItem title="JAVA">

@[code](./code_snippet/java/extendPaymentType.java)

</CodeGroupItem>
<CodeGroupItem title="KOTLIN" active>

@[code](./code_snippet/kotlin/extendPaymentType.kt)

</CodeGroupItem>
</CodeGroup>

- **```PaymentType``` methods**

|   Method | Description | Required | Default |
|---- | ---- |---- |----|
| setAmount(amount: Float) |  payment amount | Yes |  
| setCurrency(currency: Currency) |  payment currency Currency.ETB or Currency.USD | Yes | ETB
| setTxRef(tx_ref: String) | payment unique transaction reference | Yes |
| setCustomer(customer: Customer) |  customer's information.  | NO (customer can fill their information) |
| setCustomizations(customizations: Customizations) |  payment modal customizations | No | null
| setCallbackUrl(callback_url: String) | Api that trigger when payment is successful | No |null
