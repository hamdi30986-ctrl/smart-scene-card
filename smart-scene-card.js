function e(e,t,i,s){var o,r=arguments.length,a=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(r<3?o(a):r>3?o(t,i,a):o(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let r=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(t,e))}return e}toString(){return this.cssText}};const a=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new r(i,e,s)},n=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new r("string"==typeof e?e:e+"",void 0,s))(t)})(e):e,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,_=globalThis,g=_.trustedTypes,v=g?g.emptyScript:"",m=_.reactiveElementPolyfillSupport,y=(e,t)=>e,f={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},b=(e,t)=>!l(e,t),$={attribute:!0,type:String,converter:f,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);void 0!==s&&c(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:o}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:s,set(t){const r=s?.call(this);o?.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...h(e),...p(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(n(e))}else void 0!==e&&t.push(n(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{if(i)e.adoptedStyleSheets=s.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of s){const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,e.appendChild(s)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:f).toAttribute(t,i.type);this._$Em=e,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=i.getPropertyOptions(s),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:f;this._$Em=s;const r=o.fromAttribute(t,e.type);this[s]=r??this._$Ej?.get(s)??r,this._$Em=null}}requestUpdate(e,t,i,s=!1,o){if(void 0!==e){const r=this.constructor;if(!1===s&&(o=this[e]),i??=r.getPropertyOptions(e),!((i.hasChanged??b)(o,t)||i.useDefault&&i.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:o},r){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==o||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===s&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,s=this[t];!0!==e||this._$AL.has(t)||void 0===s||this.C(t,void 0,i,s)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[y("elementProperties")]=new Map,x[y("finalized")]=new Map,m?.({ReactiveElement:x}),(_.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,S=e=>e,k=w.trustedTypes,A=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,O=`<${P}>`,T=document,M=()=>T.createComment(""),U=e=>null===e||"object"!=typeof e&&"function"!=typeof e,z=Array.isArray,N="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,I=/>/g,j=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,L=/"/g,B=/^(?:script|style|textarea|title)$/i,F=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),W=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),q=new WeakMap,V=T.createTreeWalker(T,129);function Q(e,t){if(!z(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(t):t}const J=(e,t)=>{const i=e.length-1,s=[];let o,r=2===t?"<svg>":3===t?"<math>":"",a=H;for(let t=0;t<i;t++){const i=e[t];let n,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===H?"!--"===l[1]?a=R:void 0!==l[1]?a=I:void 0!==l[2]?(B.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=j):void 0!==l[3]&&(a=j):a===j?">"===l[0]?(a=o??H,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,n=l[1],a=void 0===l[3]?j:'"'===l[3]?L:D):a===L||a===D?a=j:a===R||a===I?a=H:(a=j,o=void 0);const h=a===j&&e[t+1].startsWith("/>")?" ":"";r+=a===H?i+O:c>=0?(s.push(n),i.slice(0,c)+E+i.slice(c)+C+h):i+C+(-2===c?t:h)}return[Q(e,r+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]};class K{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,r=0;const a=e.length-1,n=this.parts,[l,c]=J(e,t);if(this.el=K.createElement(l,i),V.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=V.nextNode())&&n.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(E)){const t=c[r++],i=s.getAttribute(e).split(C),a=/([.?@])?(.*)/.exec(t);n.push({type:1,index:o,name:a[2],strings:i,ctor:"."===a[1]?te:"?"===a[1]?ie:"@"===a[1]?se:ee}),s.removeAttribute(e)}else e.startsWith(C)&&(n.push({type:6,index:o}),s.removeAttribute(e));if(B.test(s.tagName)){const e=s.textContent.split(C),t=e.length-1;if(t>0){s.textContent=k?k.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],M()),V.nextNode(),n.push({type:2,index:++o});s.append(e[t],M())}}}else if(8===s.nodeType)if(s.data===P)n.push({type:2,index:o});else{let e=-1;for(;-1!==(e=s.data.indexOf(C,e+1));)n.push({type:7,index:o}),e+=C.length-1}o++}}static createElement(e,t){const i=T.createElement("template");return i.innerHTML=e,i}}function Z(e,t,i=e,s){if(t===W)return t;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const r=U(t)?void 0:t._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(e),o._$AT(e,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(t=Z(e,o._$AS(e,t.values),o,s)),t}class Y{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??T).importNode(t,!0);V.currentNode=s;let o=V.nextNode(),r=0,a=0,n=i[0];for(;void 0!==n;){if(r===n.index){let t;2===n.type?t=new X(o,o.nextSibling,this,e):1===n.type?t=new n.ctor(o,n.name,n.strings,this,e):6===n.type&&(t=new oe(o,this,e)),this._$AV.push(t),n=i[++a]}r!==n?.index&&(o=V.nextNode(),r++)}return V.currentNode=T,s}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),U(e)?e===G||null==e||""===e?(this._$AH!==G&&this._$AR(),this._$AH=G):e!==this._$AH&&e!==W&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>z(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==G&&U(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,s="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=K.createElement(Q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new Y(s,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=q.get(e.strings);return void 0===t&&q.set(e.strings,t=new K(e)),t}k(e){z(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new X(this.O(M()),this.O(M()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=S(e).nextSibling;S(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,o){this.type=1,this._$AH=G,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}_$AI(e,t=this,i,s){const o=this.strings;let r=!1;if(void 0===o)e=Z(this,e,t,0),r=!U(e)||e!==this._$AH&&e!==W,r&&(this._$AH=e);else{const s=e;let a,n;for(e=o[0],a=0;a<o.length-1;a++)n=Z(this,s[i+a],t,a),n===W&&(n=this._$AH[a]),r||=!U(n)||n!==this._$AH[a],n===G?e=G:e!==G&&(e+=(n??"")+o[a+1]),this._$AH[a]=n}r&&!s&&this.j(e)}j(e){e===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===G?void 0:e}}class ie extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==G)}}class se extends ee{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){if((e=Z(this,e,t,0)??G)===W)return;const i=this._$AH,s=e===G&&i!==G||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==G&&(i===G||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class oe{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const re=w.litHtmlPolyfillSupport;re?.(K,X),(w.litHtmlVersions??=[]).push("3.3.2");const ae=globalThis;class ne extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const s=i?.renderBefore??t;let o=s._$litPart$;if(void 0===o){const e=i?.renderBefore??null;s._$litPart$=o=new X(t.insertBefore(M(),e),e,void 0,i??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}ne._$litElement$=!0,ne.finalized=!0,ae.litElementHydrateSupport?.({LitElement:ne});const le=ae.litElementPolyfillSupport;le?.({LitElement:ne}),(ae.litElementVersions??=[]).push("4.2.2");const ce=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},de={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:b},he=(e=de,t,i)=>{const{kind:s,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),"setter"===s&&((e=Object.create(e)).wrapped=!0),r.set(i.name,e),"accessor"===s){const{name:s}=i;return{set(i){const o=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,o,e,!0,i)},init(t){return void 0!==t&&this.C(s,void 0,e,t),t}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];t.call(this,i),this.requestUpdate(s,o,e,!0,i)}}throw Error("Unsupported decorator location: "+s)};function pe(e){return(t,i)=>"object"==typeof i?he(e,t,i):((e,t,i)=>{const s=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),s?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function ue(e){return pe({...e,state:!0,attribute:!1})}const _e=[{name:"Warm White",rgb:[255,244,229],color:"#fff4e5"},{name:"Cool White",rgb:[255,255,255],color:"#ffffff"},{name:"Red",rgb:[255,0,0],color:"#f44336"},{name:"Orange",rgb:[255,152,0],color:"#ff9800"},{name:"Amber",rgb:[255,193,7],color:"#ffc107"},{name:"Yellow",rgb:[255,235,59],color:"#ffeb3b"},{name:"Lime",rgb:[205,220,57],color:"#cddc39"},{name:"Green",rgb:[76,175,80],color:"#4caf50"},{name:"Teal",rgb:[0,150,136],color:"#009688"},{name:"Cyan",rgb:[0,188,212],color:"#00bcd4"},{name:"Blue",rgb:[33,150,243],color:"#2196f3"},{name:"Indigo",rgb:[63,81,181],color:"#3f51b5"},{name:"Purple",rgb:[156,39,176],color:"#9c27b0"},{name:"Pink",rgb:[233,30,99],color:"#e91e63"}];let ge=class extends ne{constructor(){super(...arguments),this._showEntityPicker=!1,this._searchQuery=""}setConfig(e){this._config=e}render(){if(!this._config||!this.hass)return F``;const e=this._config.entities||[];return F`
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
                                @change=${e=>this._updateConfig({hide_name:!e.target.checked})}
                            ></ha-switch>
                        </ha-formfield>
                        <ha-formfield label="Show Icon">
                            <ha-switch
                                .checked=${!0!==this._config.hide_icon}
                                @change=${e=>this._updateConfig({hide_icon:!e.target.checked})}
                            ></ha-switch>
                        </ha-formfield>
                    </div>
                    <ha-textfield
                        label="Icon Size (px)"
                        type="number"
                        .value=${this._config.icon_size||24}
                        @input=${e=>this._updateConfig({icon_size:parseInt(e.target.value)})}
                        style="width: 100px;"
                    ></ha-textfield>
                </div>

                <div class="entity-list">
                    ${e.map((e,t)=>this._renderEntity(e,t))}
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
        `}_renderEntity(e,t){const i=e.entity_id.split(".")[0],s=this.hass.states[e.entity_id],o=s?.attributes.friendly_name||e.entity_id;return F`
            <div class="entity-item">
                <div class="entity-header">
                    <ha-icon icon=${function(e){switch(e.split(".")[0]){case"light":return"mdi:lightbulb";case"switch":return"mdi:toggle-switch";case"climate":return"mdi:thermostat";case"cover":return"mdi:window-shutter";case"media_player":return"mdi:cast";case"input_boolean":return"mdi:toggle-switch-outline";case"scene":return"mdi:palette";case"script":return"mdi:script-text";default:return"mdi:circle-outline"}}(e.entity_id)}></ha-icon>
                    <span class="entity-name">${o}</span>
                    <ha-formfield label="Glow" style="font-size: 11px;">
                        <ha-switch
                            .checked=${!1!==e.include_in_active}
                            @change=${e=>this._updateEntity(t,{include_in_active:!!e.target.checked&&void 0})}
                            style="--mdc-switch-state-layer-size: 24px;"
                        ></ha-switch>
                    </ha-formfield>
                    <button class="remove-btn" @click=${()=>this._removeEntity(t)}>
                        <ha-icon icon="mdi:close"></ha-icon>
                    </button>
                </div>
                ${this._renderControls(e,t,i)}
            </div>
        `}_renderControls(e,t,i){switch(i){case"light":const i=this.hass.states[e.entity_id],s=i?.attributes.supported_color_modes;let o=!1,r=!1;if(s)o=s.includes("hs")||s.includes("rgb")||s.includes("xy")||s.includes("rgbw"),r=s.includes("color_temp");else{const e=i?.attributes.supported_features||0;o=!!(16&e),r=!!(2&e)}const a=i?.attributes.min_mireds??153,n=i?.attributes.max_mireds??500,l=e.rgb_color||i?.attributes.rgb_color;let c=-1;return l&&(c=_e.findIndex(e=>e.rgb[0]===l[0]&&e.rgb[1]===l[1]&&e.rgb[2]===l[2])),F`
                    <div class="control-row">
                        <label>Brightness</label>
                        <input type="range" min="0" max="100"
                            .value=${String(e.brightness??100)}
                            @input=${e=>this._updateEntity(t,{brightness:parseInt(e.target.value)})}
                        />
                        <span class="control-value">${e.brightness??100}%</span>
                    </div>

                    ${r?F`
                    <div class="control-row">
                        <label>Temp</label>
                        <input type="range" 
                            class="temp-slider"
                            min=${a} 
                            max=${n}
                            .value=${String(e.color_temp??Math.round((a+n)/2))}
                            @input=${e=>this._updateEntity(t,{color_temp:parseInt(e.target.value)})}
                        />
                    </div>`:""}

                    ${o?F`
                    <div class="control-row" style="align-items: center;">
                        <label>Color</label>
                        <div class="color-select">
                            <select 
                                style="flex: 1; padding: 4px; border-radius: 4px;"
                                @change=${e=>{const i=parseInt(e.target.value);i>=0&&this._updateEntity(t,{rgb_color:_e[i].rgb})}}
                                @click=${e=>e.stopPropagation()}
                            >
                                <option value="-1" ?selected=${-1===c}>Select Color...</option>
                                ${_e.map((e,t)=>F`
                                    <option value=${t} ?selected=${c===t}>
                                        ${e.name}
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
                            .checked=${void 0!==e.exit_delay||e.skip_if_covers_open}
                            @change=${e=>{e.target.checked?this._updateEntity(t,{exit_delay:30}):this._updateEntity(t,{exit_delay:void 0,skip_if_covers_open:void 0})}}
                        ></ha-switch>
                    </div>
                    
                    ${void 0!==e.exit_delay||e.skip_if_covers_open?F`
                        <div style="background: rgba(0,0,0,0.1); padding: 12px; border-radius: 8px; margin-top: 8px;">
                            <div class="control-row">
                                <label>Night Exit Delay</label>
                                <input type="number" min="0" max="120" step="5"
                                    style="width: 60px; padding: 4px; border-radius: 4px; border: 1px solid var(--divider-color);"
                                    .value=${String(e.exit_delay??0)}
                                    @change=${e=>{const i=parseInt(e.target.value);this._updateEntity(t,{exit_delay:i>0?i:void 0})}}
                                />
                                <span class="control-value">sec</span>
                            </div>
                            <div class="control-row" style="margin-top: 8px;">
                                <label>Skip if covers opening (day)</label>
                                <ha-switch
                                    .checked=${e.skip_if_covers_open??!1}
                                    @change=${e=>this._updateEntity(t,{skip_if_covers_open:e.target.checked||void 0})}
                                ></ha-switch>
                            </div>
                            <div style="font-size: 11px; color: var(--secondary-text-color); margin-top: 4px;">
                                Skip light if scene opens covers during daytime
                            </div>
                        </div>
                    `:""}
                `;case"climate":const d=this.hass.states[e.entity_id],h=d?.attributes.min_temp??16,p=d?.attributes.max_temp??30,u=d?.attributes.hvac_modes||["cool","heat"],_=d?.attributes.fan_modes||["auto","low","medium","high"],g=void 0!==e.temperature_sensor;return F`
                    <div class="control-row">
                        <label>Mode</label>
                        <select @change=${e=>this._updateEntity(t,{hvac_mode:e.target.value})}>
                            ${u.filter(e=>"off"!==e).map(t=>F`
                                <option value=${t} ?selected=${e.hvac_mode===t}>
                                    ${t.charAt(0).toUpperCase()+t.slice(1)}
                                </option>
                            `)}
                        </select>
                    </div>
                    <div class="control-row">
                        <label>Temp</label>
                        <input type="range" min=${h} max=${p} step="0.5"
                            .value=${String(e.temperature??22)}
                            @input=${e=>this._updateEntity(t,{temperature:parseFloat(e.target.value)})}
                        />
                        <span class="control-value">${e.temperature??22}°</span>
                    </div>
                    
                    <!-- Conditional AC Section -->
                    <div class="control-row" style="margin-top: 8px; border-top: 1px solid var(--divider-color); padding-top: 8px;">
                        <label style="font-weight: 500;">Smart Mode</label>
                        <ha-switch
                            .checked=${g}
                            @change=${e=>{e.target.checked?this._updateEntity(t,{temperature_sensor:"",min_temp_threshold:27,high_temp_threshold:30,fan_mode_low:"low",fan_mode_high:"high"}):this._updateEntity(t,{temperature_sensor:void 0,min_temp_threshold:void 0,high_temp_threshold:void 0,fan_mode_low:void 0,fan_mode_high:void 0})}}
                        ></ha-switch>
                    </div>
                    
                    ${g?F`
                        <div style="background: rgba(0,0,0,0.1); padding: 12px; border-radius: 8px; margin-top: 8px;">
                            <div class="control-row" style="display: flex; align-items: center; gap: 8px;">
                                <ha-selector
                                    .hass=${this.hass}
                                    .selector=${{entity:{filter:[{domain:"sensor",device_class:"temperature"},{domain:"sensor",unit_of_measurement:"°C"},{domain:"sensor",unit_of_measurement:"°F"}]}}}
                                    .value=${e.temperature_sensor||""}
                                    .label=${"Temperature Sensor"}
                                    @value-changed=${e=>this._updateEntity(t,{temperature_sensor:e.detail.value})}
                                    style="flex: 1;"
                                ></ha-selector>
                                <span class="control-value" style="min-width: 40px; text-align: right;">${e.temperature_sensor&&this.hass.states[e.temperature_sensor]?this.hass.states[e.temperature_sensor].state+"°":""}</span>
                            </div>
                            <div class="control-row">
                                <label>Min Threshold</label>
                                <input type="number" min="15" max="35" step="1"
                                    style="width: 60px; padding: 4px; border-radius: 4px; border: 1px solid var(--divider-color);"
                                    .value=${String(e.min_temp_threshold??27)}
                                    @input=${e=>this._updateEntity(t,{min_temp_threshold:parseFloat(e.target.value)})}
                                />
                                <span style="font-size: 12px; color: var(--secondary-text-color);">Below = No AC</span>
                            </div>
                            <div class="control-row">
                                <label>High Threshold</label>
                                <input type="number" min="15" max="40" step="1"
                                    style="width: 60px; padding: 4px; border-radius: 4px; border: 1px solid var(--divider-color);"
                                    .value=${String(e.high_temp_threshold??30)}
                                    @input=${e=>this._updateEntity(t,{high_temp_threshold:parseFloat(e.target.value)})}
                                />
                                <span style="font-size: 12px; color: var(--secondary-text-color);">Above = High Fan</span>
                            </div>
                            <div class="control-row">
                                <label>Fan Low</label>
                                <select 
                                    style="flex: 1; padding: 4px; border-radius: 4px;"
                                    @change=${e=>this._updateEntity(t,{fan_mode_low:e.target.value})}
                                >
                                    ${_.map(t=>F`
                                        <option value=${t} ?selected=${e.fan_mode_low===t||!e.fan_mode_low&&"low"===t}>
                                            ${t.charAt(0).toUpperCase()+t.slice(1)}
                                        </option>
                                    `)}
                                </select>
                            </div>
                            <div class="control-row">
                                <label>Fan High</label>
                                <select 
                                    style="flex: 1; padding: 4px; border-radius: 4px;"
                                    @change=${e=>this._updateEntity(t,{fan_mode_high:e.target.value})}
                                >
                                    ${_.map(t=>F`
                                        <option value=${t} ?selected=${e.fan_mode_high===t||!e.fan_mode_high&&"high"===t}>
                                            ${t.charAt(0).toUpperCase()+t.slice(1)}
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
                            .value=${String(e.position??100)}
                            @input=${e=>this._updateEntity(t,{position:parseInt(e.target.value)})}
                        />
                        <span class="control-value">${e.position??100}%</span>
                    </div>
                    <div class="control-row" style="gap: 8px;">
                        <button 
                            type="button"
                            style="flex: 1; padding: 8px; border-radius: 8px; border: 1px solid var(--divider-color); background: ${0===e.position?"var(--primary-color)":"transparent"}; color: ${0===e.position?"#fff":"var(--primary-text-color)"}; cursor: pointer;"
                            @click=${()=>this._updateEntity(t,{position:0})}
                        >
                            Close (0%)
                        </button>
                        <button 
                            type="button"
                            style="flex: 1; padding: 8px; border-radius: 8px; border: 1px solid var(--divider-color); background: ${100===e.position||void 0===e.position?"var(--primary-color)":"transparent"}; color: ${100===e.position||void 0===e.position?"#fff":"var(--primary-text-color)"}; cursor: pointer;"
                            @click=${()=>this._updateEntity(t,{position:100})}
                        >
                            Open (100%)
                        </button>
                    </div>

                    <!-- Cover Smart Mode -->
                    <div class="control-row" style="margin-top: 8px; border-top: 1px solid var(--divider-color); padding-top: 8px;">
                        <label style="font-weight: 500;">Smart Mode</label>
                        <ha-switch
                            .checked=${e.only_daytime??!1}
                            @change=${e=>this._updateEntity(t,{only_daytime:e.target.checked||void 0})}
                        ></ha-switch>
                    </div>
                    
                    ${e.only_daytime?F`
                        <div style="background: rgba(0,0,0,0.1); padding: 12px; border-radius: 8px; margin-top: 8px;">
                            <div style="font-size: 11px; color: var(--secondary-text-color);">
                                Cover will only open during daytime (sun above horizon). At night, the open action will be skipped.
                            </div>
                        </div>
                    `:""}
                `;case"media_player":const v=void 0!==e.welcome_tts;return F`
                    <div class="control-row">
                        <label>Volume</label>
                        <input type="range" min="0" max="100"
                            .value=${String(e.volume??50)}
                            @input=${e=>this._updateEntity(t,{volume:parseInt(e.target.value)})}
                        />
                        <span class="control-value">${e.volume??50}%</span>
                    </div>

                    <!-- Media Player Smart Mode -->
                    <div class="control-row" style="margin-top: 8px; border-top: 1px solid var(--divider-color); padding-top: 8px;">
                        <label style="font-weight: 500;">Smart Mode</label>
                        <ha-switch
                            .checked=${v}
                            @change=${e=>{e.target.checked?this._updateEntity(t,{welcome_tts:!0}):this._updateEntity(t,{welcome_tts:void 0,welcome_message:void 0})}}
                        ></ha-switch>
                    </div>

                    ${v?F`
                        <div style="background: rgba(0,0,0,0.1); padding: 12px; border-radius: 8px; margin-top: 8px;">
                            <div class="control-row" style="display: flex; align-items: center; gap: 8px;">
                                <ha-selector
                                    .hass=${this.hass}
                                    .selector=${{entity:{filter:[{domain:"tts"}]}}}
                                    .value=${e.tts_service||""}
                                    .label=${"TTS Service"}
                                    @value-changed=${e=>this._updateEntity(t,{tts_service:e.detail.value})}
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
                                    .value=${e.welcome_message??""}
                                    @change=${e=>this._updateEntity(t,{welcome_message:e.target.value})}
                                />
                            </div>
                            <div class="control-row" style="margin-top: 8px;">
                                <label>Goodbye Message (Deactivate)</label>
                            </div>
                            <div class="control-row" style="margin-top: 4px;">
                                <ha-switch
                                    .checked=${e.goodbye_tts??!1}
                                    @change=${e=>this._updateEntity(t,{goodbye_tts:e.target.checked||void 0})}
                                    style="margin-right: 8px;"
                                ></ha-switch>
                                <input type="text" 
                                    placeholder="Goodbye!"
                                    style="flex: 1; padding: 8px; border-radius: 4px; border: 1px solid var(--divider-color);"
                                    .value=${e.goodbye_message??""}
                                    ?disabled=${!e.goodbye_tts}
                                    @change=${e=>this._updateEntity(t,{goodbye_message:e.target.value})}
                                />
                            </div>
                            <div style="font-size: 11px; color: var(--secondary-text-color); margin-top: 4px;">
                                Select TTS service. Welcome plays on activate, Goodbye plays on deactivate.
                            </div>
                        </div>
                    `:""}
                `;case"switch":case"input_boolean":const m=void 0!==e.skip_if_entity;return F`
                    <!-- Toggle Smart Mode -->
                    <div class="control-row" style="margin-top: 8px; border-top: 1px solid var(--divider-color); padding-top: 8px;">
                        <label style="font-weight: 500;">Smart Mode</label>
                        <ha-switch
                            .checked=${m}
                            @change=${e=>{e.target.checked?this._updateEntity(t,{skip_if_entity:"",skip_if_state:""}):this._updateEntity(t,{skip_if_entity:void 0,skip_if_state:void 0})}}
                        ></ha-switch>
                    </div>

                    ${m?F`
                        <div style="background: rgba(0,0,0,0.1); padding: 12px; border-radius: 8px; margin-top: 8px;">
                            <div style="font-size: 12px; color: var(--secondary-text-color); margin-bottom: 8px;">
                                Skip this toggle if another entity is in a specific state
                            </div>
                            <div class="control-row" style="display: flex; align-items: center; gap: 8px;">
                                <label style="min-width: auto;">Skip if</label>
                                <ha-entity-picker
                                    .hass=${this.hass}
                                    .value=${e.skip_if_entity||""}
                                    @value-changed=${e=>{const i=e.detail.value;this._updateEntity(t,{skip_if_entity:i,skip_if_state:""})}}
                                    .includeDomains=${["light","switch","climate","cover","media_player","input_boolean","binary_sensor","sensor"]}
                                    style="flex: 1;"
                                ></ha-entity-picker>
                            </div>
                            ${e.skip_if_entity?F`
                                <div class="control-row" style="margin-top: 8px;">
                                    <label style="min-width: auto;">is</label>
                                    <select 
                                        style="flex: 1; padding: 8px; border-radius: 4px; border: 1px solid var(--divider-color); background: var(--card-background-color); color: var(--primary-text-color);"
                                        @change=${e=>this._updateEntity(t,{skip_if_state:e.target.value})}
                                    >
                                        <option value="" ?selected=${!e.skip_if_state}>Select state...</option>
                                        ${this._getEntityStateOptions(e.skip_if_entity).map(t=>F`
                                            <option value=${t.value} ?selected=${e.skip_if_state===t.value}>${t.label}</option>
                                        `)}
                                    </select>
                                </div>
                            `:""}
                        </div>
                    `:""}
                `;default:return F``}}_getEntityStateOptions(e){switch(e.split(".")[0]){case"climate":return[{value:"off",label:"Off"},{value:"cool",label:"Cool"},{value:"heat",label:"Heat"},{value:"heat_cool",label:"Heat/Cool"},{value:"auto",label:"Auto"},{value:"fan_only",label:"Fan Only"},{value:"dry",label:"Dry"}];case"cover":return[{value:"open",label:"Open"},{value:"closed",label:"Closed"},{value:"opening",label:"Opening"},{value:"closing",label:"Closing"}];case"media_player":return[{value:"off",label:"Off"},{value:"playing",label:"Playing"},{value:"paused",label:"Paused"},{value:"idle",label:"Idle"},{value:"standby",label:"Standby"}];case"binary_sensor":return[{value:"on",label:"On / Detected"},{value:"off",label:"Off / Clear"}];case"sensor":const t=this.hass.states[e];return t?[{value:t.state,label:`Current: ${t.state}`}]:[];default:return[{value:"on",label:"On"},{value:"off",label:"Off"}]}}_handleIconChange(e){e.stopPropagation(),this._updateConfig({icon:e.detail.value})}_handleEntitySelected(e){e.stopPropagation();const t=e.detail.value;if(!t)return;this._addEntity(t);const i=this.shadowRoot?.querySelector("ha-entity-picker");i&&(i.value="")}_handleNameChange(e){const t=e.target.value;this._updateConfig({name:t})}_addEntity(e){const t=e.split(".")[0],i=this.hass.states[e],s={entity_id:e};switch(t){case"light":s.brightness=i?.attributes.brightness?Math.round(i.attributes.brightness/255*100):100;break;case"climate":s.temperature=i?.attributes.temperature??22;const e=i?.attributes.hvac_modes||[];s.hvac_mode=e.includes("cool")?"cool":e.find(e=>"off"!==e)||"cool";break;case"cover":s.position=i?.attributes.current_position??100;break;case"media_player":s.volume=i?.attributes.volume_level?Math.round(100*i.attributes.volume_level):50}const o=[...this._config.entities||[],s];this._updateConfig({entities:o}),this._showEntityPicker=!1,this._searchQuery=""}_removeEntity(e){const t=(this._config.entities||[]).filter((t,i)=>i!==e);this._updateConfig({entities:t})}_updateEntity(e,t){const i=[...this._config.entities||[]];i[e]={...i[e],...t},this._updateConfig({entities:i})}_updateConfig(e){this._config={...this._config,...e},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}};ge.styles=a`
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
    `,e([pe({attribute:!1})],ge.prototype,"hass",void 0),e([ue()],ge.prototype,"_config",void 0),e([ue()],ge.prototype,"_showEntityPicker",void 0),e([ue()],ge.prototype,"_searchQuery",void 0),ge=e([ce("smart-scene-card-editor")],ge);const ve=["on","cool","heat","heat_cool","auto","fan_only","dry"];let me=class extends ne{static getConfigElement(){return document.createElement("smart-scene-card-editor")}static getStubConfig(){return{type:"custom:smart-scene-card",name:"My Scene",icon:"mdi:lightbulb-group",entities:[]}}static getLayoutOptions(){return{grid_columns:2,grid_min_columns:1,grid_rows:1,grid_min_rows:1}}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config=e}_isAnyEntityActive(){if(!this.hass||!this._config.entities)return!1;for(const e of this._config.entities){if(!1===e.include_in_active)continue;const t=this.hass.states[e.entity_id];if(!t)continue;const i=e.entity_id.split(".")[0],s=t.state;switch(i){case"light":case"switch":case"input_boolean":if("on"===s)return!0;break;case"climate":if(ve.includes(s))return!0;break;case"cover":if("open"===s)return!0;break;case"media_player":if("playing"===s)return!0}}return!1}render(){if(!this._config)return F`<ha-card><div class="empty">Loading...</div></ha-card>`;const e=this._config.name||"",t=this._config.icon||"mdi:lightbulb-group",i=(this._config.entities||[]).length>0,s=this._config.hide_name??!1,o=this._config.hide_icon??!1,r=this._config.icon_size||24;if(!i)return F`
                <ha-card>
                    <div class="empty">
                        <ha-icon icon="mdi:cog"></ha-icon>
                        <p>Configure this card</p>
                    </div>
                </ha-card>
            `;const a=this._isAnyEntityActive();return F`
            <ha-card>
                <button 
                    class="scene-button ${a?"active":""} ${s&&!o?"icon-only":""}" 
                    @click=${this._handleClick}
                >
                    ${o?"":F`
                        <ha-icon 
                            class="scene-icon" 
                            icon=${t}
                            style="--mdc-icon-size: ${r}px;"
                        ></ha-icon>
                    `}
                    ${!s&&e?F`
                        <span class="scene-name">${e}</span>
                    `:""}
                </button>
            </ha-card>
        `}async _handleClick(){if(!this.hass)return void console.error("Smart Scene Card: No hass object");const e=this._config.entities||[];if(0===e.length)return void console.warn("Smart Scene Card: No entities configured");const t=this._isAnyEntityActive();try{t?await this._turnOffAll(e):await this._activateScene(e)}catch(e){console.error("Smart Scene Card: Toggle failed:",e)}}async _activateScene(e){for(const t of e){const i=t.entity_id.split(".")[0];try{switch(i){case"light":if(t.skip_if_covers_open){const i=this.hass.states["sun.sun"],s=i&&"above_horizon"===i.state,o=e.some(e=>"cover"===e.entity_id.split(".")[0]&&(void 0===e.position||e.position>50));if(s&&o){console.log(`Smart Scene Card: Daytime + covers opening - skipping light ${t.entity_id}`);break}}const s={entity_id:t.entity_id};void 0!==t.brightness&&(s.brightness_pct=t.brightness),void 0!==t.rgb_color&&(s.rgb_color=t.rgb_color),void 0!==t.color_temp&&(s.color_temp=t.color_temp),await this.hass.callService("light","turn_on",s);break;case"switch":case"input_boolean":if(t.skip_if_entity&&t.skip_if_state){const e=this.hass.states[t.skip_if_entity];if(e&&e.state===t.skip_if_state){console.log(`Smart Scene Card: Skipping ${t.entity_id} because ${t.skip_if_entity} is ${t.skip_if_state}`);break}}await this.hass.callService(i,"turn_on",{entity_id:t.entity_id});break;case"climate":if(t.temperature_sensor){const e=this.hass.states[t.temperature_sensor];if(e){const i=parseFloat(e.state),s=t.min_temp_threshold??27,o=t.high_temp_threshold??30;if(i<s){console.log(`Smart Scene Card: Temp ${i}° < ${s}°, skipping AC`);break}const r=i>=o?t.fan_mode_high||"high":t.fan_mode_low||"low";console.log(`Smart Scene Card: Temp ${i}°, using fan mode: ${r}`);const a={entity_id:t.entity_id};t.hvac_mode&&(a.hvac_mode=t.hvac_mode),void 0!==t.temperature&&(a.temperature=t.temperature),void 0!==t.temperature?await this.hass.callService("climate","set_temperature",a):t.hvac_mode&&await this.hass.callService("climate","set_hvac_mode",{entity_id:t.entity_id,hvac_mode:t.hvac_mode}),await this.hass.callService("climate","set_fan_mode",{entity_id:t.entity_id,fan_mode:r})}else{console.warn(`Smart Scene Card: Sensor ${t.temperature_sensor} unavailable, using default`);const e={entity_id:t.entity_id};t.hvac_mode&&(e.hvac_mode=t.hvac_mode),void 0!==t.temperature&&(e.temperature=t.temperature),void 0!==t.temperature?await this.hass.callService("climate","set_temperature",e):t.hvac_mode&&await this.hass.callService("climate","set_hvac_mode",{entity_id:t.entity_id,hvac_mode:t.hvac_mode})}}else{const e={entity_id:t.entity_id};t.hvac_mode&&(e.hvac_mode=t.hvac_mode),void 0!==t.temperature&&(e.temperature=t.temperature),void 0!==t.temperature?await this.hass.callService("climate","set_temperature",e):t.hvac_mode&&await this.hass.callService("climate","set_hvac_mode",{entity_id:t.entity_id,hvac_mode:t.hvac_mode})}break;case"cover":if(t.only_daytime&&(void 0===t.position||t.position>50)){const e=this.hass.states["sun.sun"];if(e&&"below_horizon"===e.state){console.log(`Smart Scene Card: Night mode - skipping cover open for ${t.entity_id}`);break}}if(void 0!==t.position)if(0===t.position)await this.hass.callService("cover","close_cover",{entity_id:t.entity_id});else if(t.position>=100)await this.hass.callService("cover","open_cover",{entity_id:t.entity_id});else try{await this.hass.callService("cover","set_cover_position",{entity_id:t.entity_id,position:t.position})}catch{await this.hass.callService("cover","open_cover",{entity_id:t.entity_id})}else await this.hass.callService("cover","open_cover",{entity_id:t.entity_id});break;case"media_player":await this.hass.callService("media_player","turn_on",{entity_id:t.entity_id}),void 0!==t.volume&&await this.hass.callService("media_player","volume_set",{entity_id:t.entity_id,volume_level:t.volume/100}),t.welcome_tts&&t.welcome_message&&t.tts_service&&this.hass.callService("tts","speak",{entity_id:t.tts_service,media_player_entity_id:t.entity_id,message:t.welcome_message}).catch(e=>{console.warn("Smart Scene Card: TTS failed:",e)})}}catch(e){console.error(`Smart Scene Card: Failed to activate ${t.entity_id}:`,e)}}}async _turnOffAll(e){for(const t of e){const e=t.entity_id.split(".")[0];try{switch(e){case"light":if(t.exit_delay){const e=this.hass.states["sun.sun"];e&&"below_horizon"===e.state?(console.log(`Smart Scene Card: Night mode - delaying light off by ${t.exit_delay}s`),setTimeout(()=>{this.hass.callService("light","turn_off",{entity_id:t.entity_id})},1e3*t.exit_delay)):await this.hass.callService("light","turn_off",{entity_id:t.entity_id})}else await this.hass.callService("light","turn_off",{entity_id:t.entity_id});break;case"switch":case"input_boolean":await this.hass.callService(e,"turn_off",{entity_id:t.entity_id});break;case"climate":await this.hass.callService("climate","turn_off",{entity_id:t.entity_id});break;case"cover":void 0!==t.position&&t.position<=50?await this.hass.callService("cover","open_cover",{entity_id:t.entity_id}):await this.hass.callService("cover","close_cover",{entity_id:t.entity_id});break;case"media_player":t.goodbye_tts&&t.goodbye_message&&t.tts_service&&this.hass.callService("tts","speak",{entity_id:t.tts_service,media_player_entity_id:t.entity_id,message:t.goodbye_message}).catch(e=>{console.warn("Smart Scene Card: Goodbye TTS failed:",e)}),await this.hass.callService("media_player","turn_off",{entity_id:t.entity_id})}}catch(e){console.error(`Smart Scene Card: Failed to turn off ${t.entity_id}:`,e)}}}getCardSize(){return 1}};me.styles=a`
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
    `,e([pe({attribute:!1})],me.prototype,"hass",void 0),e([ue()],me.prototype,"_config",void 0),me=e([ce("smart-scene-card")],me),window.customCards=window.customCards||[],window.customCards.push({type:"smart-scene-card",name:"Smart Scene Card",description:"A card for creating and toggling smart scenes",preview:!0});export{me as SmartSceneCard};
