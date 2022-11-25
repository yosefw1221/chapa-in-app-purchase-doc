# Backup and Restore Data

Backup and restore data is a feature that allows you to backup and restore purchased data manually.
> By default the Library use Key/Value Backup ([Android Backup Service](https://developer.android.com/guide/topics/data/backup)) to backup and restore data.

## Backup Purchased Data

To backup encrypted purchased data as a JSON string or JSONObject.
> *Since purchased data is encrypted to device specifically, it only work for a single device*

<CodeGroup>
<CodeGroupItem title="JAVA">

@[code](./code_snippet/java/backupData.java)

</CodeGroupItem>
<CodeGroupItem title="KOTLIN" active>

@[code](./code_snippet/kotlin/backupData.kt)

</CodeGroupItem>
</CodeGroup>

## Restore Purchased Data

To restore encrypted purchased data from a JSON string or JSONObject.

<CodeGroup>
<CodeGroupItem title="JAVA">

@[code](./code_snippet/java/restoreData.java)

</CodeGroupItem>
<CodeGroupItem title="KOTLIN" active>

@[code](./code_snippet/kotlin/restoreData.kt)

</CodeGroupItem>
</CodeGroup>
