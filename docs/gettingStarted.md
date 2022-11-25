# Getting Started

Welcome, This guide will help you to get started with Unofficial Chapa In-App Purchase Android Library.

## Installation

> **minSdk : 19**

**Step 1 :** Open ```setting.gradle``` file add maven jetpack repository:

@[code gradle {6}](./code_snippet/other/setting.gradle)

**Step 2 :** On your ```build.gradle``` file add the following dependency:

@[code gradle {2}](./code_snippet/other/build.gradle)

## Initialize Configuration

**Step 2 :** Initialize chapa configuration on your app's ```MainActivity``` or ```Application``` class

<CodeGroup>
<CodeGroupItem title="JAVA">

@[code](./code_snippet/java/intialize.java)

</CodeGroupItem>
<CodeGroupItem title="KOTLIN" active>

@[code](./code_snippet/kotlin/intialize.kt)

</CodeGroupItem>
</CodeGroup>

## Basic Usage

**Step 3 :** To process simple basic payment

<CodeGroup>
<CodeGroupItem title="JAVA">

@[code](./code_snippet/java/basicPayment.java)

</CodeGroupItem>
<CodeGroupItem title="KOTLIN" active>

@[code](./code_snippet/kotlin/basicPayment.kt)

</CodeGroupItem>
</CodeGroup>
