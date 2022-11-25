# Item Payment

It is a payment type that allow you to charge your customers to buy in-app Items like coins, gems, etc.

- ```Secure``` : Item is encrypted with ```AES-256``` algorithm using device unique id.
  
- ```Easy to Manipulate``` : It has ```REPLACE```,```ADD```,```SUBTRACT``` and ```MULTIPLY```, ```ItemProperties``` that allow you to manipulate item easily.
- ```ItemProperties``` : default ```ItemProperties.REPLACE```
  - ```REPLACE``` : Replace item value with new value
  - ```ADD``` : Adds current value to previous item value
  - ```SUBTRACT``` : Subtract new value from previous item value
  - ```MULTIPLY``` : Multiply item value with new value if exist otherwise set new value as item value
  
## Setup Item Payment

- Create ```ItemPayment``` object

<CodeGroup>
<CodeGroupItem title="JAVA">

@[code](./code_snippet/java/setupItemPayment.java)

</CodeGroupItem>
<CodeGroupItem title="KOTLIN" active>

@[code](./code_snippet/kotlin/setupItemPayment.kt)

</CodeGroupItem>
</CodeGroup>

## Get PurchasedItem Value

<CodeGroup>
<CodeGroupItem title="JAVA">

@[code](./code_snippet/java/getItemPayment.java)

</CodeGroupItem>
<CodeGroupItem title="KOTLIN" active>

@[code](./code_snippet/kotlin/getItemPayment.kt)

</CodeGroupItem>
</CodeGroup>

## Update PurchasedItem Value

<CodeGroup>
<CodeGroupItem title="JAVA">

@[code](./code_snippet/java/updateItemPayment.java)

</CodeGroupItem>
<CodeGroupItem title="KOTLIN" active>

@[code](./code_snippet/kotlin/updateItemPayment.kt)

</CodeGroupItem>
</CodeGroup>

## Remove PurchasedItem

<CodeGroup>
<CodeGroupItem title="JAVA">

@[code](./code_snippet/java/removeItemPayment.java)

</CodeGroupItem>
<CodeGroupItem title="KOTLIN" active>

@[code](./code_snippet/kotlin/removeItemPayment.kt)

</CodeGroupItem>
</CodeGroup>
