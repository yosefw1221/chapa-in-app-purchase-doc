import{_ as i,r as c,o as p,c as u,d as n,e as s,a,w as e,b as r}from"./app.65277899.js";const d={},m=n("h1",{id:"getting-started",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#"),s(" Getting Started")],-1),k=n("p",null,"Welcome, This guide will help you to get started with Unofficial Chapa In-App Purchase Android Library.",-1),v={href:"https://bit.ly/example-apk",target:"_blank",rel:"noopener noreferrer"},b=r(`<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><blockquote><p><strong>minSdk : 19</strong></p></blockquote><p><strong>Step 1 :</strong> Open <code>setting.gradle</code> file add maven jetpack repository:</p><div class="language-gradle line-numbers-mode" data-ext="gradle"><pre class="language-gradle"><code>dependencyResolutionManagement <span class="token punctuation">{</span>
    repositoriesMode<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>RepositoriesMode<span class="token punctuation">.</span>FAIL_ON_PROJECT_REPOS<span class="token punctuation">)</span>
    <span class="token keyword">repositories</span> <span class="token punctuation">{</span>
        <span class="token function">google</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">mavenCentral</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        maven <span class="token punctuation">{</span> url <span class="token string">&#39;https://jitpack.io&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Step 2 :</strong> On your <code>build.gradle</code> file add the following dependency:</p><div class="language-gradle line-numbers-mode" data-ext="gradle"><pre class="language-gradle"><code><span class="token keyword">dependencies</span> <span class="token punctuation">{</span>
    <span class="token keyword">implementation</span> <span class="token string">&#39;com.github.yosefw1221:Chapa-In-App-Purchase:1.0.0-beta&#39;</span>
    <span class="token punctuation">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="initialize-configuration" tabindex="-1"><a class="header-anchor" href="#initialize-configuration" aria-hidden="true">#</a> Initialize Configuration</h2><p><strong>Step 3 :</strong> Initialize chapa configuration on your app&#39;s <code>MainActivity</code> or <code>Application</code> class</p>`,8),h=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token class-name"},"ChapaConfiguration"),s(" config "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ChapaConfiguration"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
config`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setKey"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"YOUR-CHAPA-SECRET-KEY"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// (Required)"),s(`
`),n("span",{class:"token comment"},"// for security purpose it is better to use encrypted key"),s(`
`),n("span",{class:"token comment"},"// to get encrypt key use Cipher class,"),s(`
`),n("span",{class:"token comment"},'// Log.d("Chapa-key",Cipher.encrypt(this,"YOUR-CHAPA-SECRET-KEY"))'),s(`
`),n("span",{class:"token comment"},'// config.key = Cipher.decrypt(this, "ENCRYPTED_CHAPA-SECRET-KEY")'),s(`

config`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setCurrency"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Currency"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"ETB"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// Currency.USD --Default ETB"),s(`

`),n("span",{class:"token comment"},'// config.setCallbackUrl("https://example.com/api/callback");  (Optional)'),s(`

`),n("span",{class:"token comment"},'// config.setCustomer(new Customer("first_name","last_name","example@mail.com")); (Optional)  Dialog will show to customer, to fill their infomation'),s(`
`),n("span",{class:"token comment"},'// config.setCustomization(new Customization("title","description","logo-url"));'),s(`

`),n("span",{class:"token class-name"},"Chapa"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"init"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getApplicationContext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(" config"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[n("pre",{class:"language-kotlin"},[n("code",null,[n("span",{class:"token keyword"},"val"),s(" config "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ChapaConfiguration"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
config`),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"YOUR-CHAPA-SECRET-KEY"')]),s(),n("span",{class:"token comment"},"// (Required)"),s(`
`),n("span",{class:"token comment"},"// for security purpose it is better to use encrypted key"),s(`
`),n("span",{class:"token comment"},"// to get encrypt key use Cipher class,"),s(`
`),n("span",{class:"token comment"},'// Log.d("Chapa-key",Cipher.encrypt(this,"YOUR CHAPA-SECRET-KEY"))'),s(`
`),n("span",{class:"token comment"},'// config.key = Cipher.decrypt(this, "ENCRYPTED_CHAPA-SECRET-KEY")'),s(`
config`),n("span",{class:"token punctuation"},"."),s("currency "),n("span",{class:"token operator"},"="),s(" Currency"),n("span",{class:"token punctuation"},"."),s("ETB "),n("span",{class:"token comment"},"// Currency.USD --Default ETB"),s(`

`),n("span",{class:"token comment"},'// config.callbackUrl = "https://example.com/api/callback"  (Optional)'),s(`

`),n("span",{class:"token comment"},'// config.customer = Customer("first_name","last_name","example@mail.com") (Optional)  Dialog will show to customer, to fill their infomation'),s(`
`),n("span",{class:"token comment"},'// config.customization = Customization("title","description","logo-url")'),s(`

Chapa`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"init"),n("span",{class:"token punctuation"},"("),s("applicationContext"),n("span",{class:"token punctuation"},","),s(" config"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("h2",{id:"basic-usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#basic-usage","aria-hidden":"true"},"#"),s(" Basic Usage")],-1),f=n("p",null,[n("strong",null,"Step 4 :"),s(" To process simple basic payment")],-1),C=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"try"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// get chapa instance"),s(`
   `),n("span",{class:"token class-name"},"Chapa"),s(" chapa "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Chapa"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
   `),n("span",{class:"token comment"},"// setup basic payment type"),s(`
   `),n("span",{class:"token class-name"},"BasicPayment"),s(" basicPayment "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"BasicPayment"),n("span",{class:"token punctuation"},"("),n("span",{class:"token comment"},"/*amount*/"),s(),n("span",{class:"token number"},"9.99"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
   chapa`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pay"),n("span",{class:"token punctuation"},"("),n("span",{class:"token comment"},"/* activityContext */"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},","),s(" basicPayment"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ChapaPaymentCallback"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"BasicPayment"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

     `),n("span",{class:"token doc-comment comment"},[s(`/**
       * Called when payment is successful
       *
       * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"paymentType"),s(` PaymentType object
       * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"tx_ref"),s(`      Transaction reference of the payment
       */`)]),s(`

       `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
       `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"onSuccess"),n("span",{class:"token punctuation"},"("),n("span",{class:"token annotation punctuation"},"@NonNull"),s(),n("span",{class:"token class-name"},"String"),s(" tx_ref"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token annotation punctuation"},"@NonNull"),s(),n("span",{class:"token class-name"},"BasicPayment"),s(" paymentType"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token comment"},"// TODO your code here          "),s(`
       `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
      * Called when error occurred in payment
      */`),s(`
       `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
       `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"onError"),n("span",{class:"token punctuation"},"("),n("span",{class:"token annotation punctuation"},"@NonNull"),s(),n("span",{class:"token class-name"},"ChapaError"),s(" chapaError"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token comment"},"// TODO your code here"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

       `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
       `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"onCancel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token comment"},"// TODO your code here"),s(`
       `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"catch"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ChapaError"),s(" e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token comment"},"// throws CHAPA_NOT_INITIALIZED if chapa is not initialized"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[n("pre",{class:"language-kotlin"},[n("code",null,[n("span",{class:"token comment"},"// get chapa instance"),s(`
`),n("span",{class:"token keyword"},"val"),s(" chapa "),n("span",{class:"token operator"},"="),s(" Chapa"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getInstance"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token comment"},"// setup basic payment type"),s(`
`),n("span",{class:"token keyword"},"val"),s(" basic "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"BasicPayment"),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token comment"},"/*amount*/"),s(),n("span",{class:"token number"},"9.99"),n("span",{class:"token punctuation"},")"),s(`

chapa`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pay"),n("span",{class:"token punctuation"},"("),n("span",{class:"token comment"},"/* activityContext */"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},","),s(" basic"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"object"),s(),n("span",{class:"token operator"},":"),s(" ChapaPaymentCallback"),n("span",{class:"token operator"},"<"),s("BasicPayment"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{"),s(`

 `),n("span",{class:"token comment"},`/**
  * Called when payment is successful
  *
  * @param paymentType PaymentType object
  * @param tx_ref      Transaction reference of the payment
  */`),s(`
 `),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token keyword"},"fun"),s(),n("span",{class:"token function"},"onSuccess"),n("span",{class:"token punctuation"},"("),s("tx_ref"),n("span",{class:"token operator"},":"),s(" String"),n("span",{class:"token punctuation"},","),s(" paymentType"),n("span",{class:"token operator"},":"),s(" BasicPayment"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// TODO your code here"),s(`
 `),n("span",{class:"token punctuation"},"}"),s(`

 `),n("span",{class:"token comment"},`/**
  * Called when error occurred in payment
  */`),s(`
 `),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token keyword"},"fun"),s(),n("span",{class:"token function"},"onError"),n("span",{class:"token punctuation"},"("),s("chapaError"),n("span",{class:"token operator"},":"),s(" ChapaError"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// TODO your code here"),s(`
 `),n("span",{class:"token punctuation"},"}"),s(`

 `),n("span",{class:"token comment"},`/**
  * Called when payment is canceled
  */`),s(`
 `),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token keyword"},"fun"),s(),n("span",{class:"token function"},"onCancel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// TODO your code here"),s(`
 `),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function w(E,T){const l=c("ExternalLinkIcon"),t=c("CodeGroupItem"),o=c("CodeGroup");return p(),u("div",null,[m,k,n("p",null,[n("a",v,[s("Download Sample App"),a(l)])]),b,a(o,null,{default:e(()=>[a(t,{title:"JAVA"},{default:e(()=>[h]),_:1}),a(t,{title:"KOTLIN",active:""},{default:e(()=>[g]),_:1})]),_:1}),y,f,a(o,null,{default:e(()=>[a(t,{title:"JAVA"},{default:e(()=>[C]),_:1}),a(t,{title:"KOTLIN",active:""},{default:e(()=>[_]),_:1})]),_:1})])}const x=i(d,[["render",w],["__file","gettingStarted.html.vue"]]);export{x as default};
