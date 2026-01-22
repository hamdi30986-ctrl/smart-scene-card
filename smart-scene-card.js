function t(t,e,i,s){var o,a=arguments.length,r=a<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(r=(a<3?o(r):a>3?o(e,i,r):o(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let a=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new a(i,t,s)},n=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,_=globalThis,g=_.trustedTypes,m=g?g.emptyScript:"",v=_.reactiveElementPolyfillSupport,f=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!l(t,e),$={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const a=s?.call(this);o?.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s;const a=o.fromAttribute(e,t.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(void 0!==t){const a=this.constructor;if(!1===s&&(o=this[t]),i??=a.getPropertyOptions(t),!((i.hasChanged??b)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==o||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[f("elementProperties")]=new Map,x[f("finalized")]=new Map,v?.({ReactiveElement:x}),(_.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,k=t=>t,S=w.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+C,M=`<${T}>`,O=document,P=()=>O.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,U="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,D=/>/g,I=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,L=/"/g,B=/^(?:script|style|textarea|title)$/i,F=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),V=new WeakMap,q=O.createTreeWalker(O,129);function Q(t,e){if(!H(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,s=[];let o,a=2===e?"<svg>":3===e?"<math>":"",r=N;for(let e=0;e<i;e++){const i=t[e];let n,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===N?"!--"===l[1]?r=R:void 0!==l[1]?r=D:void 0!==l[2]?(B.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=I):void 0!==l[3]&&(r=I):r===I?">"===l[0]?(r=o??N,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,n=l[1],r=void 0===l[3]?I:'"'===l[3]?L:j):r===L||r===j?r=I:r===R||r===D?r=N:(r=I,o=void 0);const h=r===I&&t[e+1].startsWith("/>")?" ":"";a+=r===N?i+M:c>=0?(s.push(n),i.slice(0,c)+A+i.slice(c)+C+h):i+C+(-2===c?e:h)}return[Q(t,a+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,a=0;const r=t.length-1,n=this.parts,[l,c]=J(t,e);if(this.el=K.createElement(l,i),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=q.nextNode())&&n.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(A)){const e=c[a++],i=s.getAttribute(t).split(C),r=/([.?@])?(.*)/.exec(e);n.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?et:"?"===r[1]?it:"@"===r[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(C)&&(n.push({type:6,index:o}),s.removeAttribute(t));if(B.test(s.tagName)){const t=s.textContent.split(C),e=t.length-1;if(e>0){s.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],P()),q.nextNode(),n.push({type:2,index:++o});s.append(t[e],P())}}}else if(8===s.nodeType)if(s.data===T)n.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)n.push({type:7,index:o}),t+=C.length-1}o++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,s){if(e===W)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const a=z(e)?void 0:e._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),void 0===a?o=void 0:(o=new a(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=Z(t,o._$AS(t,e.values),o,s)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??O).importNode(e,!0);q.currentNode=s;let o=q.nextNode(),a=0,r=0,n=i[0];for(;void 0!==n;){if(a===n.index){let e;2===n.type?e=new X(o,o.nextSibling,this,t):1===n.type?e=new n.ctor(o,n.name,n.strings,this,t):6===n.type&&(e=new ot(o,this,t)),this._$AV.push(e),n=i[++r]}a!==n?.index&&(o=q.nextNode(),a++)}return q.currentNode=O,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),z(t)?t===G||null==t||""===t?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==G&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(Q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Y(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new K(t)),e}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new X(this.O(P()),this.O(P()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=k(t).nextSibling;k(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}_$AI(t,e=this,i,s){const o=this.strings;let a=!1;if(void 0===o)t=Z(this,t,e,0),a=!z(t)||t!==this._$AH&&t!==W,a&&(this._$AH=t);else{const s=t;let r,n;for(t=o[0],r=0;r<o.length-1;r++)n=Z(this,s[i+r],e,r),n===W&&(n=this._$AH[r]),a||=!z(n)||n!==this._$AH[r],n===G?t=G:t!==G&&(t+=(n??"")+o[r+1]),this._$AH[r]=n}a&&!s&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==G)}}class st extends tt{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??G)===W)return;const i=this._$AH,s=t===G&&i!==G||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==G&&(i===G||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const at=w.litHtmlPolyfillSupport;at?.(K,X),(w.litHtmlVersions??=[]).push("3.3.2");const rt=globalThis;class nt extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new X(e.insertBefore(P(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}nt._$litElement$=!0,nt.finalized=!0,rt.litElementHydrateSupport?.({LitElement:nt});const lt=rt.litElementPolyfillSupport;lt?.({LitElement:nt}),(rt.litElementVersions??=[]).push("4.2.2");const ct=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},dt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},ht=(t=dt,e,i)=>{const{kind:s,metadata:o}=i;let a=globalThis.litPropertyMetadata.get(o);if(void 0===a&&globalThis.litPropertyMetadata.set(o,a=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),a.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};function pt(t){return(e,i)=>"object"==typeof i?ht(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ut(t){return pt({...t,state:!0,attribute:!1})}const _t=[{name:"Warm White",rgb:[255,244,229],color:"#fff4e5"},{name:"Cool White",rgb:[255,255,255],color:"#ffffff"},{name:"Red",rgb:[255,0,0],color:"#f44336"},{name:"Orange",rgb:[255,152,0],color:"#ff9800"},{name:"Amber",rgb:[255,193,7],color:"#ffc107"},{name:"Yellow",rgb:[255,235,59],color:"#ffeb3b"},{name:"Lime",rgb:[205,220,57],color:"#cddc39"},{name:"Green",rgb:[76,175,80],color:"#4caf50"},{name:"Teal",rgb:[0,150,136],color:"#009688"},{name:"Cyan",rgb:[0,188,212],color:"#00bcd4"},{name:"Blue",rgb:[33,150,243],color:"#2196f3"},{name:"Indigo",rgb:[63,81,181],color:"#3f51b5"},{name:"Purple",rgb:[156,39,176],color:"#9c27b0"},{name:"Pink",rgb:[233,30,99],color:"#e91e63"}];let gt=class extends nt{constructor(){super(...arguments),this._showEntityPicker=!1,this._searchQuery=""}setConfig(t){this._config=t}render(){if(!this._config||!this.hass)return F``;const t=this._config.entities||[];return F`
            <div class="editor">
                <div class="row">
                    <ha-textfield
                        label="Scene Name"
                        .value=${this._config.name||""}
                        @input=${this._handleNameChange}
                        class="name-input"
                        style="flex: 2;"
                    ></ha-textfield>
                    <ha-icon-picker
                        .value=${this._config.icon}
                        .configValue=${"icon"}
                        @value-changed=${this._handleIconChange}
                        style="flex: 1;"
                    ></ha-icon-picker>
                </div>
                <div class="row" style="margin-top: -8px; justify-content: space-between;">
                    <div style="display: flex; gap: 16px;">
                        <ha-formfield label="Show Name">
                            <ha-switch
                                .checked=${!0!==this._config.hide_name}
                                @change=${t=>this._updateConfig({hide_name:!t.target.checked})}
                            ></ha-switch>
                        </ha-formfield>
                        <ha-formfield label="Show Icon">
                            <ha-switch
                                .checked=${!0!==this._config.hide_icon}
                                @change=${t=>this._updateConfig({hide_icon:!t.target.checked})}
                            ></ha-switch>
                        </ha-formfield>
                    </div>
                    <ha-textfield
                        label="Icon Size (px)"
                        type="number"
                        .value=${this._config.icon_size||24}
                        @input=${t=>this._updateConfig({icon_size:parseInt(t.target.value)})}
                        style="width: 100px;"
                    ></ha-textfield>
                </div>

                <div class="entity-list">
                    ${t.map((t,e)=>this._renderEntity(t,e))}
                </div>

                <div class="add-row">
                    <ha-entity-picker
                        .hass=${this.hass}
                        .value=${this._searchQuery}
                        @value-changed=${this._handleEntitySelected}
                        .includeDomains=${["light","switch","climate","cover","media_player","input_boolean"]}
                    ></ha-entity-picker>
                </div>
            </div>
        `}_renderEntity(t,e){const i=t.entity_id.split(".")[0],s=this.hass.states[t.entity_id],o=s?.attributes.friendly_name||t.entity_id;return F`
            <div class="entity-item">
                <div class="entity-header">
                    <ha-icon icon=${function(t){switch(t.split(".")[0]){case"light":return"mdi:lightbulb";case"switch":return"mdi:toggle-switch";case"climate":return"mdi:thermostat";case"cover":return"mdi:window-shutter";case"media_player":return"mdi:cast";case"input_boolean":return"mdi:toggle-switch-outline";case"scene":return"mdi:palette";case"script":return"mdi:script-text";default:return"mdi:circle-outline"}}(t.entity_id)}></ha-icon>
                    <span class="entity-name">${o}</span>
                    <ha-formfield label="Glow" style="font-size: 11px;">
                        <ha-switch
                            .checked=${!1!==t.include_in_active}
                            @change=${t=>this._updateEntity(e,{include_in_active:!!t.target.checked&&void 0})}
                            style="--mdc-switch-state-layer-size: 24px;"
                        ></ha-switch>
                    </ha-formfield>
                    <button class="remove-btn" @click=${()=>this._removeEntity(e)}>
                        <ha-icon icon="mdi:close"></ha-icon>
                    </button>
                </div>
                ${this._renderControls(t,e,i)}
            </div>
        `}_renderControls(t,e,i){switch(i){case"light":const i=this.hass.states[t.entity_id],s=i?.attributes.supported_color_modes;let o=!1,a=!1;if(s)o=s.includes("hs")||s.includes("rgb")||s.includes("xy")||s.includes("rgbw"),a=s.includes("color_temp");else{const t=i?.attributes.supported_features||0;o=!!(16&t),a=!!(2&t)}const r=i?.attributes.min_mireds??153,n=i?.attributes.max_mireds??500,l=t.rgb_color||i?.attributes.rgb_color;let c=-1;return l&&(c=_t.findIndex(t=>t.rgb[0]===l[0]&&t.rgb[1]===l[1]&&t.rgb[2]===l[2])),F`
                    <div class="control-row">
                        <label>Brightness</label>
                        <input type="range" min="0" max="100"
                            .value=${String(t.brightness??100)}
                            @input=${t=>this._updateEntity(e,{brightness:parseInt(t.target.value)})}
                        />
                        <span class="control-value">${t.brightness??100}%</span>
                    </div>

                    ${a?F`
                    <div class="control-row">
                        <label>Temp</label>
                        <input type="range" 
                            class="temp-slider"
                            min=${r} 
                            max=${n}
                            .value=${String(t.color_temp??Math.round((r+n)/2))}
                            @input=${t=>this._updateEntity(e,{color_temp:parseInt(t.target.value)})}
                        />
                    </div>`:""}

                    ${o?F`
                    <div class="control-row" style="align-items: center;">
                        <label>Color</label>
                        <div class="color-select">
                            <select 
                                style="flex: 1; padding: 4px; border-radius: 4px;"
                                @change=${t=>{const i=parseInt(t.target.value);i>=0&&this._updateEntity(e,{rgb_color:_t[i].rgb})}}
                                @click=${t=>t.stopPropagation()}
                            >
                                <option value="-1" ?selected=${-1===c}>Select Color...</option>
                                ${_t.map((t,e)=>F`
                                    <option value=${e} ?selected=${c===e}>
                                        ${t.name}
                                    </option>
                                `)}
                            </select>
                            ${l?F`
                                <div class="color-preview" style="background: rgb(${l[0]}, ${l[1]}, ${l[2]})"></div>
                            `:""}
                        </div>
                    </div>`:""}

                    <!-- Light Smart Mode -->
                    <div class="control-row" style="margin-top: 8px; border-top: 1px solid var(--divider-color); padding-top: 8px;">
                        <label style="font-weight: 500;">Smart Mode</label>
                        <ha-switch
                            .checked=${void 0!==t.exit_delay||t.skip_if_covers_open}
                            @change=${t=>{t.target.checked?this._updateEntity(e,{exit_delay:30}):this._updateEntity(e,{exit_delay:void 0,skip_if_covers_open:void 0})}}
                        ></ha-switch>
                    </div>
                    
                    ${void 0!==t.exit_delay||t.skip_if_covers_open?F`
                        <div style="background: rgba(0,0,0,0.1); padding: 12px; border-radius: 8px; margin-top: 8px;">
                            <div class="control-row">
                                <label>Night Exit Delay</label>
                                <input type="number" min="0" max="120" step="5"
                                    style="width: 60px; padding: 4px; border-radius: 4px; border: 1px solid var(--divider-color);"
                                    .value=${String(t.exit_delay??0)}
                                    @change=${t=>{const i=parseInt(t.target.value);this._updateEntity(e,{exit_delay:i>0?i:void 0})}}
                                />
                                <span class="control-value">sec</span>
                            </div>
                            <div class="control-row" style="margin-top: 8px;">
                                <label>Skip if covers opening (day)</label>
                                <ha-switch
                                    .checked=${t.skip_if_covers_open??!1}
                                    @change=${t=>this._updateEntity(e,{skip_if_covers_open:t.target.checked||void 0})}
                                ></ha-switch>
                            </div>
                            <div style="font-size: 11px; color: var(--secondary-text-color); margin-top: 4px;">
                                Skip light if scene opens covers during daytime
                            </div>
                        </div>
                    `:""}
                `;case"climate":const d=this.hass.states[t.entity_id],h=d?.attributes.min_temp??16,p=d?.attributes.max_temp??30,u=d?.attributes.hvac_modes||["cool","heat"],_=d?.attributes.fan_modes||["auto","low","medium","high"],g=void 0!==t.temperature_sensor;return F`
                    <div class="control-row">
                        <label>Mode</label>
                        <select @change=${t=>this._updateEntity(e,{hvac_mode:t.target.value})}>
                            ${u.filter(t=>"off"!==t).map(e=>F`
                                <option value=${e} ?selected=${t.hvac_mode===e}>
                                    ${e.charAt(0).toUpperCase()+e.slice(1)}
                                </option>
                            `)}
                        </select>
                    </div>
                    <div class="control-row">
                        <label>Temp</label>
                        <input type="range" min=${h} max=${p} step="0.5"
                            .value=${String(t.temperature??22)}
                            @input=${t=>this._updateEntity(e,{temperature:parseFloat(t.target.value)})}
                        />
                        <span class="control-value">${t.temperature??22}°</span>
                    </div>
                    
                    <!-- Conditional AC Section -->
                    <div class="control-row" style="margin-top: 8px; border-top: 1px solid var(--divider-color); padding-top: 8px;">
                        <label style="font-weight: 500;">Smart Mode</label>
                        <ha-switch
                            .checked=${g}
                            @change=${t=>{t.target.checked?this._updateEntity(e,{temperature_sensor:"",min_temp_threshold:27,high_temp_threshold:30,fan_mode_low:"low",fan_mode_high:"high"}):this._updateEntity(e,{temperature_sensor:void 0,min_temp_threshold:void 0,high_temp_threshold:void 0,fan_mode_low:void 0,fan_mode_high:void 0})}}
                        ></ha-switch>
                    </div>
                    
                    ${g?F`
                        <div style="background: rgba(0,0,0,0.1); padding: 12px; border-radius: 8px; margin-top: 8px;">
                            <div class="control-row" style="display: flex; align-items: center; gap: 8px;">
                                <ha-selector
                                    .hass=${this.hass}
                                    .selector=${{entity:{filter:[{domain:"sensor",device_class:"temperature"},{domain:"sensor",unit_of_measurement:"°C"},{domain:"sensor",unit_of_measurement:"°F"}]}}}
                                    .value=${t.temperature_sensor||""}
                                    .label=${"Temperature Sensor"}
                                    @value-changed=${t=>this._updateEntity(e,{temperature_sensor:t.detail.value})}
                                    style="flex: 1;"
                                ></ha-selector>
                                <span class="control-value" style="min-width: 40px; text-align: right;">${t.temperature_sensor&&this.hass.states[t.temperature_sensor]?this.hass.states[t.temperature_sensor].state+"°":""}</span>
                            </div>
                            <div class="control-row">
                                <label>Min Threshold</label>
                                <input type="number" min="15" max="35" step="1"
                                    style="width: 60px; padding: 4px; border-radius: 4px; border: 1px solid var(--divider-color);"
                                    .value=${String(t.min_temp_threshold??27)}
                                    @input=${t=>this._updateEntity(e,{min_temp_threshold:parseFloat(t.target.value)})}
                                />
                                <span style="font-size: 12px; color: var(--secondary-text-color);">Below = No AC</span>
                            </div>
                            <div class="control-row">
                                <label>High Threshold</label>
                                <input type="number" min="15" max="40" step="1"
                                    style="width: 60px; padding: 4px; border-radius: 4px; border: 1px solid var(--divider-color);"
                                    .value=${String(t.high_temp_threshold??30)}
                                    @input=${t=>this._updateEntity(e,{high_temp_threshold:parseFloat(t.target.value)})}
                                />
                                <span style="font-size: 12px; color: var(--secondary-text-color);">Above = High Fan</span>
                            </div>
                            <div class="control-row">
                                <label>Fan Low</label>
                                <select 
                                    style="flex: 1; padding: 4px; border-radius: 4px;"
                                    @change=${t=>this._updateEntity(e,{fan_mode_low:t.target.value})}
                                >
                                    ${_.map(e=>F`
                                        <option value=${e} ?selected=${t.fan_mode_low===e||!t.fan_mode_low&&"low"===e}>
                                            ${e.charAt(0).toUpperCase()+e.slice(1)}
                                        </option>
                                    `)}
                                </select>
                            </div>
                            <div class="control-row">
                                <label>Fan High</label>
                                <select 
                                    style="flex: 1; padding: 4px; border-radius: 4px;"
                                    @change=${t=>this._updateEntity(e,{fan_mode_high:t.target.value})}
                                >
                                    ${_.map(e=>F`
                                        <option value=${e} ?selected=${t.fan_mode_high===e||!t.fan_mode_high&&"high"===e}>
                                            ${e.charAt(0).toUpperCase()+e.slice(1)}
                                        </option>
                                    `)}
                                </select>
                            </div>
                        </div>
                    `:""}
                `;case"cover":return F`
                    <div class="control-row">
                        <label>Position</label>
                        <input type="range" min="0" max="100"
                            .value=${String(t.position??100)}
                            @input=${t=>this._updateEntity(e,{position:parseInt(t.target.value)})}
                        />
                        <span class="control-value">${t.position??100}%</span>
                    </div>
                    <div class="control-row" style="gap: 8px;">
                        <button 
                            type="button"
                            style="flex: 1; padding: 8px; border-radius: 8px; border: 1px solid var(--divider-color); background: ${0===t.position?"var(--primary-color)":"transparent"}; color: ${0===t.position?"#fff":"var(--primary-text-color)"}; cursor: pointer;"
                            @click=${()=>this._updateEntity(e,{position:0})}
                        >
                            Close (0%)
                        </button>
                        <button 
                            type="button"
                            style="flex: 1; padding: 8px; border-radius: 8px; border: 1px solid var(--divider-color); background: ${100===t.position||void 0===t.position?"var(--primary-color)":"transparent"}; color: ${100===t.position||void 0===t.position?"#fff":"var(--primary-text-color)"}; cursor: pointer;"
                            @click=${()=>this._updateEntity(e,{position:100})}
                        >
                            Open (100%)
                        </button>
                    </div>

                    <!-- Cover Smart Mode -->
                    <div class="control-row" style="margin-top: 8px; border-top: 1px solid var(--divider-color); padding-top: 8px;">
                        <label style="font-weight: 500;">Smart Mode</label>
                        <ha-switch
                            .checked=${t.only_daytime??!1}
                            @change=${t=>this._updateEntity(e,{only_daytime:t.target.checked||void 0})}
                        ></ha-switch>
                    </div>
                    
                    ${t.only_daytime?F`
                        <div style="background: rgba(0,0,0,0.1); padding: 12px; border-radius: 8px; margin-top: 8px;">
                            <div style="font-size: 11px; color: var(--secondary-text-color);">
                                Cover will only open during daytime (sun above horizon). At night, the open action will be skipped.
                            </div>
                        </div>
                    `:""}
                `;case"media_player":const m=void 0!==t.welcome_tts;return F`
                    <div class="control-row">
                        <label>Volume</label>
                        <input type="range" min="0" max="100"
                            .value=${String(t.volume??50)}
                            @input=${t=>this._updateEntity(e,{volume:parseInt(t.target.value)})}
                        />
                        <span class="control-value">${t.volume??50}%</span>
                    </div>

                    <!-- Media Player Smart Mode -->
                    <div class="control-row" style="margin-top: 8px; border-top: 1px solid var(--divider-color); padding-top: 8px;">
                        <label style="font-weight: 500;">Smart Mode</label>
                        <ha-switch
                            .checked=${m}
                            @change=${t=>{t.target.checked?this._updateEntity(e,{welcome_tts:!0}):this._updateEntity(e,{welcome_tts:void 0,welcome_message:void 0})}}
                        ></ha-switch>
                    </div>

                    ${m?F`
                        <div style="background: rgba(0,0,0,0.1); padding: 12px; border-radius: 8px; margin-top: 8px;">
                            <div class="control-row" style="display: flex; align-items: center; gap: 8px;">
                                <ha-selector
                                    .hass=${this.hass}
                                    .selector=${{entity:{filter:[{domain:"tts"}]}}}
                                    .value=${t.tts_service||""}
                                    .label=${"TTS Service"}
                                    @value-changed=${t=>this._updateEntity(e,{tts_service:t.detail.value})}
                                    style="flex: 1;"
                                ></ha-selector>
                            </div>
                            <div class="control-row" style="margin-top: 8px;">
                                <label>Welcome Message (Activate)</label>
                            </div>
                            <div class="control-row" style="margin-top: 4px;">
                                <input type="text" 
                                    placeholder="Good morning!"
                                    style="flex: 1; padding: 8px; border-radius: 4px; border: 1px solid var(--divider-color);"
                                    .value=${t.welcome_message??""}
                                    @change=${t=>this._updateEntity(e,{welcome_message:t.target.value})}
                                />
                            </div>
                            <div class="control-row" style="margin-top: 8px;">
                                <label>Goodbye Message (Deactivate)</label>
                            </div>
                            <div class="control-row" style="margin-top: 4px;">
                                <ha-switch
                                    .checked=${t.goodbye_tts??!1}
                                    @change=${t=>this._updateEntity(e,{goodbye_tts:t.target.checked||void 0})}
                                    style="margin-right: 8px;"
                                ></ha-switch>
                                <input type="text" 
                                    placeholder="Goodbye!"
                                    style="flex: 1; padding: 8px; border-radius: 4px; border: 1px solid var(--divider-color);"
                                    .value=${t.goodbye_message??""}
                                    ?disabled=${!t.goodbye_tts}
                                    @change=${t=>this._updateEntity(e,{goodbye_message:t.target.value})}
                                />
                            </div>
                            <div style="font-size: 11px; color: var(--secondary-text-color); margin-top: 4px;">
                                Select TTS service. Welcome plays on activate, Goodbye plays on deactivate.
                            </div>
                        </div>
                    `:""}
                `;case"switch":case"input_boolean":const v=void 0!==t.skip_if_entity;return F`
                    <!-- Toggle Smart Mode -->
                    <div class="control-row" style="margin-top: 8px; border-top: 1px solid var(--divider-color); padding-top: 8px;">
                        <label style="font-weight: 500;">Smart Mode</label>
                        <ha-switch
                            .checked=${v}
                            @change=${t=>{t.target.checked?this._updateEntity(e,{skip_if_entity:"",skip_if_state:""}):this._updateEntity(e,{skip_if_entity:void 0,skip_if_state:void 0})}}
                        ></ha-switch>
                    </div>

                    ${v?F`
                        <div style="background: rgba(0,0,0,0.1); padding: 12px; border-radius: 8px; margin-top: 8px;">
                            <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">
                                Skip this toggle if another entity is in a specific state
                            </div>
                            <div class="control-row" style="display: flex; align-items: center; gap: 8px;">
                                <label style="min-width: auto;">Skip if</label>
                                <ha-entity-picker
                                    .hass=${this.hass}
                                    .value=${t.skip_if_entity||""}
                                    @value-changed=${t=>{const i=t.detail.value;this._updateEntity(e,{skip_if_entity:i,skip_if_state:""})}}
                                    .includeDomains=${["light","switch","climate","cover","media_player","input_boolean","binary_sensor","sensor"]}
                                    style="flex: 1;"
                                ></ha-entity-picker>
                            </div>
                            ${t.skip_if_entity?F`
                                <div class="control-row" style="margin-top: 8px;">
                                    <label style="min-width: auto;">is</label>
                                    <select 
                                        style="flex: 1; padding: 8px; border-radius: 4px; border: 1px solid var(--divider-color); background: var(--card-background-color); color: var(--primary-text-color);"
                                        @change=${t=>this._updateEntity(e,{skip_if_state:t.target.value})}
                                    >
                                        <option value="" ?selected=${!t.skip_if_state}>Select state...</option>
                                        ${this._getEntityStateOptions(t.skip_if_entity).map(e=>F`
                                            <option value=${e.value} ?selected=${t.skip_if_state===e.value}>${e.label}</option>
                                        `)}
                                    </select>
                                </div>
                            `:""}
                        </div>
                    `:""}
                `;default:return F``}}_getEntityStateOptions(t){switch(t.split(".")[0]){case"climate":return[{value:"off",label:"Off"},{value:"cool",label:"Cool"},{value:"heat",label:"Heat"},{value:"heat_cool",label:"Heat/Cool"},{value:"auto",label:"Auto"},{value:"fan_only",label:"Fan Only"},{value:"dry",label:"Dry"}];case"cover":return[{value:"open",label:"Open"},{value:"closed",label:"Closed"},{value:"opening",label:"Opening"},{value:"closing",label:"Closing"}];case"media_player":return[{value:"off",label:"Off"},{value:"playing",label:"Playing"},{value:"paused",label:"Paused"},{value:"idle",label:"Idle"},{value:"standby",label:"Standby"}];case"binary_sensor":return[{value:"on",label:"On / Detected"},{value:"off",label:"Off / Clear"}];case"sensor":const e=this.hass.states[t];return e?[{value:e.state,label:`Current: ${e.state}`}]:[];default:return[{value:"on",label:"On"},{value:"off",label:"Off"}]}}_handleIconChange(t){t.stopPropagation(),this._updateConfig({icon:t.detail.value})}_handleEntitySelected(t){t.stopPropagation();const e=t.detail.value;if(!e)return;this._addEntity(e);const i=this.shadowRoot?.querySelector("ha-entity-picker");i&&(i.value="")}_handleNameChange(t){const e=t.target.value;this._updateConfig({name:e})}_addEntity(t){const e=t.split(".")[0],i=this.hass.states[t],s={entity_id:t};switch(e){case"light":s.brightness=i?.attributes.brightness?Math.round(i.attributes.brightness/255*100):100;break;case"climate":s.temperature=i?.attributes.temperature??22;const t=i?.attributes.hvac_modes||[];s.hvac_mode=t.includes("cool")?"cool":t.find(t=>"off"!==t)||"cool";break;case"cover":s.position=i?.attributes.current_position??100;break;case"media_player":s.volume=i?.attributes.volume_level?Math.round(100*i.attributes.volume_level):50}const o=[...this._config.entities||[],s];this._updateConfig({entities:o}),this._showEntityPicker=!1,this._searchQuery=""}_removeEntity(t){const e=(this._config.entities||[]).filter((e,i)=>i!==t);this._updateConfig({entities:e})}_updateEntity(t,e){const i=[...this._config.entities||[]];i[t]={...i[t],...e},this._updateConfig({entities:i})}_updateConfig(t){this._config={...this._config,...t},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}};gt.styles=r`
        .editor {
            padding: 16px;
        }
        .row {
            display: flex;
            gap: 8px;
            margin-bottom: 16px;
            align-items: center;
        }
        .row input[type="text"] {
            flex: 1;
            padding: 8px 12px;
            border: 1px solid var(--divider-color);
            border-radius: 4px;
            font-size: 14px;
            background: var(--card-background-color);
            color: var(--primary-text-color);
        }
        .icon-btn {
            width: 40px;
            height: 40px;
            border: 1px solid var(--divider-color);
            border-radius: 4px;
            background: var(--card-background-color);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .entity-list {
            margin-bottom: 16px;
        }
        .entity-item {
            display: flex;
            flex-direction: column;
            padding: 12px;
            background: var(--secondary-background-color);
            border-radius: 8px;
            margin-bottom: 8px;
        }
        .entity-header {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .entity-name {
            flex: 1;
            font-weight: 500;
        }
        .remove-btn {
            background: none;
            border: none;
            color: var(--error-color);
            cursor: pointer;
            padding: 4px;
        }
        .control-row {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 8px;
            font-size: 13px;
        }
        .control-row label {
            min-width: 70px;
            color: var(--secondary-text-color);
        }
        .control-row input[type="range"] {
            flex: 1;
        }
        .control-row select {
            flex: 1;
            padding: 4px 8px;
            border-radius: 4px;
            border: 1px solid var(--divider-color);
            background: var(--card-background-color);
            color: var(--primary-text-color);
        }
        .control-value {
            min-width: 40px;
            text-align: right;
        }
        /* Temperature Gradient Slider */
        .temp-slider {
            -webkit-appearance: none;
            width: 100%;
            height: 6px;
            border-radius: 3px;
            background: linear-gradient(to right, rgb(166, 209, 255), rgb(255, 255, 255), rgb(255, 160, 0));
            outline: none;
        }
        .temp-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #fff;
            border: 2px solid var(--primary-color);
            cursor: pointer;
        }
        /* Color Preset Select */
        .color-select {
            flex: 1;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .color-preview {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 1px solid var(--divider-color);
        }
        .add-btn {
            width: 100%;
            padding: 10px;
            border: 2px dashed var(--divider-color);
            border-radius: 8px;
            background: transparent;
            color: var(--secondary-text-color);
            cursor: pointer;
            font-size: 14px;
        }
        .add-btn:hover {
            border-color: var(--primary-color);
            color: var(--primary-color);
        }
        /* Entity picker overlay */
        .picker-overlay {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999;
        }
        .picker {
            background: var(--card-background-color);
            border-radius: 12px;
            width: 90%;
            max-width: 400px;
            max-height: 60vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }
        .picker-header {
            padding: 12px;
            border-bottom: 1px solid var(--divider-color);
        }
        .picker-header input {
            width: 100%;
            padding: 8px 12px;
            border: 1px solid var(--divider-color);
            border-radius: 4px;
            font-size: 14px;
            box-sizing: border-box;
            background: var(--card-background-color);
            color: var(--primary-text-color);
        }
        .picker-list {
            flex: 1;
            overflow-y: auto;
            padding: 8px;
        }
        .picker-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px;
            border-radius: 8px;
            cursor: pointer;
        }
        .picker-item:hover {
            background: var(--secondary-background-color);
        }
        .picker-item-info {
            flex: 1;
            min-width: 0;
        }
        .picker-item-name {
            font-weight: 500;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .picker-item-id {
            font-size: 12px;
            color: var(--secondary-text-color);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    `,t([pt({attribute:!1})],gt.prototype,"hass",void 0),t([ut()],gt.prototype,"_config",void 0),t([ut()],gt.prototype,"_showEntityPicker",void 0),t([ut()],gt.prototype,"_searchQuery",void 0),gt=t([ct("smart-scene-card-editor")],gt);const mt=["on","cool","heat","heat_cool","auto","fan_only","dry"];let vt=class extends nt{constructor(){super(...arguments),this._showTrackingModal=!1,this._holdTimer=null,this._holdStartTime=0}static getConfigElement(){return document.createElement("smart-scene-card-editor")}static getStubConfig(){return{type:"custom:smart-scene-card",name:"My Scene",icon:"mdi:lightbulb-group",entities:[]}}static getLayoutOptions(){return{grid_columns:2,grid_min_columns:1,grid_rows:1,grid_min_rows:1}}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config=t}_isAnyEntityActive(){if(!this.hass||!this._config.entities)return!1;for(const t of this._config.entities){if(!1===t.include_in_active)continue;const e=this.hass.states[t.entity_id];if(!e)continue;const i=t.entity_id.split(".")[0],s=e.state;switch(i){case"light":case"switch":case"input_boolean":if("on"===s)return!0;break;case"climate":if(mt.includes(s))return!0;break;case"cover":if("open"===s)return!0;break;case"media_player":if("playing"===s)return!0}}return!1}render(){if(!this._config)return F`<ha-card><div class="empty">Loading...</div></ha-card>`;const t=this._config.name||"",e=this._config.icon||"mdi:lightbulb-group",i=(this._config.entities||[]).length>0,s=this._config.hide_name??!1,o=this._config.hide_icon??!1,a=this._config.icon_size||24;if(!i)return F`
                <ha-card>
                    <div class="empty">
                        <ha-icon icon="mdi:cog"></ha-icon>
                        <p>Configure this card</p>
                    </div>
                </ha-card>
            `;const r=this._isAnyEntityActive();return F`
            <ha-card>
                <button 
                    class="scene-button ${r?"active":""} ${s&&!o?"icon-only":""}" 
                    @click=${this._handleClick}
                    @mousedown=${this._handleHoldStart}
                    @mouseup=${this._handleHoldEnd}
                    @mouseleave=${this._handleHoldEnd}
                    @touchstart=${this._handleHoldStart}
                    @touchend=${this._handleHoldEnd}
                    @touchcancel=${this._handleHoldEnd}
                >
                    ${o?"":F`
                        <ha-icon 
                            class="scene-icon" 
                            icon=${e}
                            style="--mdc-icon-size: ${a}px;"
                        ></ha-icon>
                    `}
                    ${!s&&t?F`
                        <span class="scene-name">${t}</span>
                    `:""}
                </button>
            </ha-card>
            ${this._showTrackingModal?this._renderTrackingModal():""}
        `}async _handleClick(){if(!this.hass)return void console.error("Smart Scene Card: No hass object");const t=this._config.entities||[];if(0===t.length)return void console.warn("Smart Scene Card: No entities configured");const e=this._isAnyEntityActive();try{e?await this._turnOffAll(t):await this._activateScene(t)}catch(t){console.error("Smart Scene Card: Toggle failed:",t)}}async _activateScene(t){for(const e of t){const i=e.entity_id.split(".")[0];try{switch(i){case"light":if(e.skip_if_covers_open){const i=this.hass.states["sun.sun"],s=i&&"above_horizon"===i.state,o=t.some(t=>"cover"===t.entity_id.split(".")[0]&&(void 0===t.position||t.position>50));if(s&&o){console.log(`Smart Scene Card: Daytime + covers opening - skipping light ${e.entity_id}`);break}}const s={entity_id:e.entity_id};void 0!==e.brightness&&(s.brightness_pct=e.brightness),void 0!==e.rgb_color&&(s.rgb_color=e.rgb_color),void 0!==e.color_temp&&(s.color_temp=e.color_temp),await this.hass.callService("light","turn_on",s);break;case"switch":case"input_boolean":if(e.skip_if_entity&&e.skip_if_state){const t=this.hass.states[e.skip_if_entity];if(t&&t.state===e.skip_if_state){console.log(`Smart Scene Card: Skipping ${e.entity_id} because ${e.skip_if_entity} is ${e.skip_if_state}`);break}}await this.hass.callService(i,"turn_on",{entity_id:e.entity_id});break;case"climate":if(e.temperature_sensor){const t=this.hass.states[e.temperature_sensor];if(t){const i=parseFloat(t.state),s=e.min_temp_threshold??27,o=e.high_temp_threshold??30;if(i<s){console.log(`Smart Scene Card: Temp ${i}° < ${s}°, skipping AC`);break}const a=i>=o?e.fan_mode_high||"high":e.fan_mode_low||"low";console.log(`Smart Scene Card: Temp ${i}°, using fan mode: ${a}`);const r={entity_id:e.entity_id};e.hvac_mode&&(r.hvac_mode=e.hvac_mode),void 0!==e.temperature&&(r.temperature=e.temperature),void 0!==e.temperature?await this.hass.callService("climate","set_temperature",r):e.hvac_mode&&await this.hass.callService("climate","set_hvac_mode",{entity_id:e.entity_id,hvac_mode:e.hvac_mode}),await this.hass.callService("climate","set_fan_mode",{entity_id:e.entity_id,fan_mode:a})}else{console.warn(`Smart Scene Card: Sensor ${e.temperature_sensor} unavailable, using default`);const t={entity_id:e.entity_id};e.hvac_mode&&(t.hvac_mode=e.hvac_mode),void 0!==e.temperature&&(t.temperature=e.temperature),void 0!==e.temperature?await this.hass.callService("climate","set_temperature",t):e.hvac_mode&&await this.hass.callService("climate","set_hvac_mode",{entity_id:e.entity_id,hvac_mode:e.hvac_mode})}}else{const t={entity_id:e.entity_id};e.hvac_mode&&(t.hvac_mode=e.hvac_mode),void 0!==e.temperature&&(t.temperature=e.temperature),void 0!==e.temperature?await this.hass.callService("climate","set_temperature",t):e.hvac_mode&&await this.hass.callService("climate","set_hvac_mode",{entity_id:e.entity_id,hvac_mode:e.hvac_mode})}break;case"cover":if(e.only_daytime&&(void 0===e.position||e.position>50)){const t=this.hass.states["sun.sun"];if(t&&"below_horizon"===t.state){console.log(`Smart Scene Card: Night mode - skipping cover open for ${e.entity_id}`);break}}if(void 0!==e.position)if(0===e.position)await this.hass.callService("cover","close_cover",{entity_id:e.entity_id});else if(e.position>=100)await this.hass.callService("cover","open_cover",{entity_id:e.entity_id});else try{await this.hass.callService("cover","set_cover_position",{entity_id:e.entity_id,position:e.position})}catch{await this.hass.callService("cover","open_cover",{entity_id:e.entity_id})}else await this.hass.callService("cover","open_cover",{entity_id:e.entity_id});break;case"media_player":await this.hass.callService("media_player","turn_on",{entity_id:e.entity_id}),void 0!==e.volume&&await this.hass.callService("media_player","volume_set",{entity_id:e.entity_id,volume_level:e.volume/100}),e.welcome_tts&&e.welcome_message&&e.tts_service&&this.hass.callService("tts","speak",{entity_id:e.tts_service,media_player_entity_id:e.entity_id,message:e.welcome_message}).catch(t=>{console.warn("Smart Scene Card: TTS failed:",t)})}}catch(t){console.error(`Smart Scene Card: Failed to activate ${e.entity_id}:`,t)}}}async _turnOffAll(t){for(const e of t){const t=e.entity_id.split(".")[0];try{switch(t){case"light":if(e.exit_delay){const t=this.hass.states["sun.sun"];t&&"below_horizon"===t.state?(console.log(`Smart Scene Card: Night mode - delaying light off by ${e.exit_delay}s`),setTimeout(()=>{this.hass.callService("light","turn_off",{entity_id:e.entity_id})},1e3*e.exit_delay)):await this.hass.callService("light","turn_off",{entity_id:e.entity_id})}else await this.hass.callService("light","turn_off",{entity_id:e.entity_id});break;case"switch":case"input_boolean":await this.hass.callService(t,"turn_off",{entity_id:e.entity_id});break;case"climate":await this.hass.callService("climate","turn_off",{entity_id:e.entity_id});break;case"cover":void 0!==e.position&&e.position<=50?await this.hass.callService("cover","open_cover",{entity_id:e.entity_id}):await this.hass.callService("cover","close_cover",{entity_id:e.entity_id});break;case"media_player":e.goodbye_tts&&e.goodbye_message&&e.tts_service&&this.hass.callService("tts","speak",{entity_id:e.tts_service,media_player_entity_id:e.entity_id,message:e.goodbye_message}).catch(t=>{console.warn("Smart Scene Card: Goodbye TTS failed:",t)}),await this.hass.callService("media_player","turn_off",{entity_id:e.entity_id})}}catch(t){console.error(`Smart Scene Card: Failed to turn off ${e.entity_id}:`,t)}}}_handleHoldStart(t){t.preventDefault(),this._holdStartTime=Date.now(),this._holdTimer=window.setTimeout(()=>{this._showTrackingModal=!0},3e3)}_handleHoldEnd(){this._holdTimer&&(window.clearTimeout(this._holdTimer),this._holdTimer=null)}_renderTrackingModal(){const t=this._config.entities||[],e=this._config.name||"Scene";return F`
            <div class="tracking-overlay" @click=${this._closeTrackingModal}>
                <div class="tracking-modal" @click=${t=>t.stopPropagation()}>
                    <div class="tracking-header">
                        <h3>${e} - Status</h3>
                        <button class="tracking-close" @click=${this._closeTrackingModal}>
                            <ha-icon icon="mdi:close"></ha-icon>
                        </button>
                    </div>
                    <div class="tracking-list">
                        ${t.map(t=>this._renderEntityStatus(t))}
                    </div>
                </div>
            </div>
        `}_closeTrackingModal(){this._showTrackingModal=!1}_renderEntityStatus(t){const e=this.hass.states[t.entity_id],i=t.entity_id.split(".")[0],s=e?.attributes.friendly_name||t.entity_id,o=this._getEntityTrackingStatus(t,e);return F`
            <div class="tracking-item">
                <ha-icon class="tracking-icon" icon=${this._getDomainIcon(i)}></ha-icon>
                <div class="tracking-info">
                    <div class="tracking-name">${s}</div>
                    <div class="tracking-detail">${o.detail}</div>
                </div>
                <span class="tracking-status ${o.class}">${o.icon}</span>
            </div>
        `}_getEntityTrackingStatus(t,e){if(!e)return{icon:"❓",class:"status-mismatch",detail:"Entity not found"};const i=e.state;switch(t.entity_id.split(".")[0]){case"light":{const s="on"===i;if(t.skip_if_covers_open){const t=this.hass.states["sun.sun"],e=t&&"above_horizon"===t.state,i=(this._config.entities||[]).some(t=>"cover"===t.entity_id.split(".")[0]&&(void 0===t.position||t.position>50));if(e&&i)return{icon:"⏭️",class:"status-skipped",detail:"Skipped (daytime + covers opening)"}}if(!s)return{icon:"❌",class:"status-mismatch",detail:"Off (expected: On)"};const o=Math.round((e.attributes.brightness||255)/255*100),a=t.brightness??100;return Math.abs(o-a)>10?{icon:"⚠️",class:"status-skipped",detail:`Brightness: ${o}% (expected: ${a}%)`}:{icon:"✅",class:"status-match",detail:`On at ${o}%`}}case"switch":case"input_boolean":{const e="on"===i;if(t.skip_if_entity&&t.skip_if_state){const e=this.hass.states[t.skip_if_entity];if(e&&e.state===t.skip_if_state)return{icon:"⏭️",class:"status-skipped",detail:`Skipped (${t.skip_if_entity} is ${t.skip_if_state})`}}return e?{icon:"✅",class:"status-match",detail:"On"}:{icon:"❌",class:"status-mismatch",detail:"Off (expected: On)"}}case"climate":{const s=i,o=e.attributes.temperature,a=t.hvac_mode||"cool",r=t.temperature??22;if(t.temperature_sensor&&t.min_temp_threshold){const e=this.hass.states[t.temperature_sensor];if(e){const i=parseFloat(e.state);if(i<t.min_temp_threshold)return{icon:"⏭️",class:"status-skipped",detail:`Skipped (room ${i}° < ${t.min_temp_threshold}°)`}}}return"off"===s?{icon:"❌",class:"status-mismatch",detail:`Off (expected: ${a})`}:s!==a?{icon:"⚠️",class:"status-skipped",detail:`Mode: ${s} (expected: ${a})`}:Math.abs(o-r)>1?{icon:"⚠️",class:"status-skipped",detail:`Temp: ${o}° (expected: ${r}°)`}:{icon:"✅",class:"status-match",detail:`${s} at ${o}°`}}case"cover":{const s=e.attributes.current_position??("open"===i?100:0),o=t.position??100;if(t.only_daytime&&o>50){const t=this.hass.states["sun.sun"];if(t&&"below_horizon"===t.state)return{icon:"⏭️",class:"status-skipped",detail:"Skipped (nighttime)"}}return Math.abs(s-o)>10?{icon:"❌",class:"status-mismatch",detail:`Position: ${s}% (expected: ${o}%)`}:{icon:"✅",class:"status-match",detail:`Position: ${s}%`}}case"media_player":{const s=!["off","unavailable"].includes(i),o=Math.round(100*(e.attributes.volume_level||0)),a=t.volume??50;if(!s)return{icon:"❌",class:"status-mismatch",detail:"Off (expected: On)"};return Math.abs(o-a)>10?{icon:"⚠️",class:"status-skipped",detail:`Volume: ${o}% (expected: ${a}%)`}:{icon:"✅",class:"status-match",detail:`${i} at ${o}%`}}default:return{icon:"❓",class:"status-skipped",detail:`State: ${i}`}}}_getDomainIcon(t){switch(t){case"light":return"mdi:lightbulb";case"switch":return"mdi:toggle-switch";case"input_boolean":return"mdi:toggle-switch-outline";case"climate":return"mdi:thermostat";case"cover":return"mdi:window-shutter";case"media_player":return"mdi:speaker";default:return"mdi:cog"}}getCardSize(){return 1}};vt.styles=r`
        :host {
            display: block;
            height: 100%;
        }
        ha-card {
            overflow: hidden;
            height: 100%;
            display: flex;
            flex-direction: column;
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
        }
        .scene-button {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 12px;
            padding: 16px;
            width: 100%;
            height: 100%;
            min-height: 56px;
            box-sizing: border-box;
            border: none;
            border-radius: 16px;
            cursor: pointer;
            text-align: left;
            font-family: var(--paper-font-body1_-_font-family, Roboto, sans-serif);
            transition: all 0.3s ease;
            
            /* OFF State - Dark Gray transparent (from user's code) */
            background: rgba(40, 40, 45, 0.6);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255,255,255,0.05);
            color: var(--secondary-text-color, #9e9e9e);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        }
        .scene-button:hover {
            background: rgba(50, 50, 55, 0.7);
        }
        
        /* ON State - Teal/Cyan Gradient (from user's code) */
        .scene-button.active {
            background: linear-gradient(135deg, rgba(0, 137, 123, 0.5) 0%, rgba(0, 172, 193, 0.4) 100%);
            box-shadow: 0 4px 20px rgba(0, 200, 180, 0.3), inset 0 1px 0 rgba(255,255,255,0.1);
            color: var(--primary-text-color, #fff);
        }
        .scene-button.active:hover {
            background: linear-gradient(135deg, rgba(0, 150, 136, 0.55) 0%, rgba(0, 188, 212, 0.45) 100%);
            box-shadow: 0 4px 25px rgba(0, 200, 180, 0.4), inset 0 1px 0 rgba(255,255,255,0.15);
        }
        
        .scene-button.icon-only {
            justify-content: center;
        }
        
        .scene-icon {
            flex-shrink: 0;
            color: rgba(255, 255, 255, 0.5);
            transition: all 0.3s ease;
        }
        .scene-button.active .scene-icon {
            color: #00d4aa;
            filter: drop-shadow(0 0 6px rgba(0, 212, 170, 0.5));
        }
        
        .scene-name {
            font-size: 14px;
            font-weight: 500;
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            line-height: 1.4;
        }
        
        .empty {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 24px;
            text-align: center;
            color: var(--secondary-text-color);
            height: 100%;
            gap: 8px;
            background: rgba(40, 40, 45, 0.6);
            border-radius: 16px;
        }
        .empty ha-icon {
            --mdc-icon-size: 32px;
            opacity: 0.5;
        }
        .empty p {
            margin: 0;
            font-size: 14px;
        }
        
        /* Tracking Modal Overlay */
        .tracking-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
        }
        .tracking-modal {
            background: var(--card-background-color, #1c1c1e);
            border-radius: 16px;
            width: 90%;
            max-width: 360px;
            max-height: 70vh;
            overflow: hidden;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        }
        .tracking-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px;
            border-bottom: 1px solid var(--divider-color, rgba(255,255,255,0.1));
        }
        .tracking-header h3 {
            margin: 0;
            font-size: 16px;
            font-weight: 600;
            color: var(--primary-text-color);
        }
        .tracking-close {
            background: none;
            border: none;
            color: var(--secondary-text-color);
            cursor: pointer;
            padding: 4px;
        }
        .tracking-list {
            padding: 8px 0;
            max-height: 50vh;
            overflow-y: auto;
        }
        .tracking-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 16px;
        }
        .tracking-item:not(:last-child) {
            border-bottom: 1px solid var(--divider-color, rgba(255,255,255,0.05));
        }
        .tracking-icon {
            flex-shrink: 0;
            --mdc-icon-size: 24px;
        }
        .tracking-info {
            flex: 1;
            min-width: 0;
        }
        .tracking-name {
            font-size: 14px;
            font-weight: 500;
            color: var(--primary-text-color);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .tracking-detail {
            font-size: 12px;
            color: var(--secondary-text-color);
            margin-top: 2px;
        }
        .tracking-status {
            font-size: 20px;
            flex-shrink: 0;
        }
        .status-match { color: #4caf50; }
        .status-mismatch { color: #f44336; }
        .status-skipped { color: #ff9800; }
    `,t([pt({attribute:!1})],vt.prototype,"hass",void 0),t([ut()],vt.prototype,"_config",void 0),t([ut()],vt.prototype,"_showTrackingModal",void 0),vt=t([ct("smart-scene-card")],vt),window.customCards=window.customCards||[],window.customCards.push({type:"smart-scene-card",name:"Smart Scene Card",description:"A card for creating and toggling smart scenes",preview:!0});export{vt as SmartSceneCard};
