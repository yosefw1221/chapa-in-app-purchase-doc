import{_ as p,r as c,o as u,c as r,d as n,e as s,a,w as e}from"./app.65277899.js";const i={},d=n("h1",{id:"backup-and-restore-data",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#backup-and-restore-data","aria-hidden":"true"},"#"),s(" Backup and Restore Data")],-1),k=n("p",null,"Backup and restore data is a feature that allows you to backup and restore purchased data manually.",-1),m={href:"https://developer.android.com/guide/topics/data/backup",target:"_blank",rel:"noopener noreferrer"},h=n("h2",{id:"backup-purchased-data",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#backup-purchased-data","aria-hidden":"true"},"#"),s(" Backup Purchased Data")],-1),b=n("p",null,"To backup encrypted purchased data as a JSON string or JSONObject.",-1),v=n("blockquote",null,[n("p",null,[n("em",null,"Since purchased data is encrypted to device specifically, it only work for a single device")])],-1),y=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token class-name"},"PurchasedItems"),s(" purchasedItems "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PurchasedItems"),n("span",{class:"token punctuation"},"("),n("span",{class:"token comment"},"/*context*/"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"String"),s(" encryptedString "),n("span",{class:"token operator"},"="),s(" purchasedItems"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getAllEncryptedPayedItemAsJSONString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"JSONObject"),s(" encryptedJSon "),n("span",{class:"token operator"},"="),s(" purchasedItems"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getAllEncryptedPayedItemAsJSON"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[n("pre",{class:"language-kotlin"},[n("code",null,[n("span",{class:"token keyword"},"val"),s(" purchasedItems "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"PurchasedItems"),n("span",{class:"token punctuation"},"("),n("span",{class:"token comment"},"/*context*/"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"val"),s(" encryptedString"),n("span",{class:"token operator"},":"),s("String "),n("span",{class:"token operator"},"="),s(" purchasedItems"),n("span",{class:"token punctuation"},"."),s(`allEncryptedPayedItemAsJSONString
`),n("span",{class:"token keyword"},"val"),s(" encryptedJSon"),n("span",{class:"token operator"},":"),s("JSONObject "),n("span",{class:"token operator"},"="),s(" purchasedItems"),n("span",{class:"token punctuation"},"."),s(`allEncryptedPayedItemAsJSON
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("h2",{id:"restore-purchased-data",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#restore-purchased-data","aria-hidden":"true"},"#"),s(" Restore Purchased Data")],-1),S=n("p",null,"To restore encrypted purchased data from a JSON string or JSONObject.",-1),f=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token class-name"},"PurchasedItems"),s(" purchasedItems "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"PurchasedItems"),n("span",{class:"token punctuation"},"("),n("span",{class:"token comment"},"/*context*/"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
   `),n("span",{class:"token class-name"},"String"),s(" encryptedString "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"--encrypted json string--"'),n("span",{class:"token punctuation"},";"),s(`
   purchasedItems`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"restorePurchase"),n("span",{class:"token punctuation"},"("),s("encryptedString"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
   `),n("span",{class:"token comment"},"// using encrypted JSON object"),s(`
   `),n("span",{class:"token class-name"},"JSONObject"),s(" encryptedJSON "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token comment"},"// encrypted JSONObject"),s(`
   purchasedItems`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"restorePurchase"),n("span",{class:"token punctuation"},"("),s("encryptedJSON"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
 `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"JSONException"),s(" e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    e`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"printStackTrace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[n("pre",{class:"language-kotlin"},[n("code",null,[n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token keyword"},"val"),s(" purchasedItems "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"PurchasedItems"),n("span",{class:"token punctuation"},"("),n("span",{class:"token comment"},"/*context*/"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},")"),s(`
   `),n("span",{class:"token keyword"},"val"),s(" encryptedString "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"--encrypted json string--"')]),n("span",{class:"token punctuation"},";"),s(`
   purchasedItems`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"restorePurchase"),n("span",{class:"token punctuation"},"("),s("encryptedString"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
   `),n("span",{class:"token comment"},"// using encrypted JSON object"),s(`
   JSONObject encryptedJSON `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token comment"},"// encrypted JSONObject"),s(`
   purchasedItems`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"restorePurchase"),n("span",{class:"token punctuation"},"("),s("encryptedJSON"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
 `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"("),s("e "),n("span",{class:"token operator"},":"),s(" JSONException"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    Log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"e"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"Chapa"')]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"Error: '),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),n("span",{class:"token expression"},[s("e"),n("span",{class:"token punctuation"},"."),s("message")]),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},'"')]),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function I(N,J){const l=c("ExternalLinkIcon"),t=c("CodeGroupItem"),o=c("CodeGroup");return u(),r("div",null,[d,k,n("blockquote",null,[n("p",null,[s("By default the Library use Key/Value Backup ("),n("a",m,[s("Android Backup Service"),a(l)]),s(") to backup and restore data.")])]),h,b,v,a(o,null,{default:e(()=>[a(t,{title:"JAVA"},{default:e(()=>[y]),_:1}),a(t,{title:"KOTLIN",active:""},{default:e(()=>[g]),_:1})]),_:1}),_,S,a(o,null,{default:e(()=>[a(t,{title:"JAVA"},{default:e(()=>[f]),_:1}),a(t,{title:"KOTLIN",active:""},{default:e(()=>[O]),_:1})]),_:1})])}const x=p(i,[["render",I],["__file","backupAndRestore.html.vue"]]);export{x as default};