(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(t,e,n){var r=n("b622"),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},"0366":function(t,e,n){var r=n("e330"),i=n("59ed"),s=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:s?s(t,e):function(){return t.apply(e,arguments)}}},"04d1":function(t,e,n){var r=n("342f"),i=r.match(/firefox\/(\d+)/i);t.exports=!!i&&+i[1]},"06cf":function(t,e,n){var r=n("83ab"),i=n("c65b"),s=n("d1e7"),o=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!i(s.f,t,e),t[e])}},"07fa":function(t,e,n){var r=n("50c4");t.exports=function(t){return r(t.length)}},"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return ia})),n.d(e,"b",(function(){return Js})),n.d(e,"c",(function(){return Zs})),n.d(e,"d",(function(){return na})),n.d(e,"e",(function(){return ro})),n.d(e,"f",(function(){return Ko})),n.d(e,"g",(function(){return sa})),n.d(e,"h",(function(){return Wo})),n.d(e,"i",(function(){return $o})),n.d(e,"j",(function(){return ua})),n.d(e,"k",(function(){return qo}));var r=n("589b"),i=n("22e5"),s=n("e691"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.5.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new s["b"]("@firebase/firestore");function f(){return h.logLevel}function d(t,...e){if(h.logLevel<=s["a"].DEBUG){const n=e.map(g);h.debug(`Firestore (${l}): ${t}`,...n)}}function p(t,...e){if(h.logLevel<=s["a"].ERROR){const n=e.map(g);h.error(`Firestore (${l}): ${t}`,...n)}}function m(t,...e){if(h.logLevel<=s["a"].WARN){const n=e.map(g);h.warn(`Firestore (${l}): ${t}`,...n)}}function g(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t="Unexpected state"){const e=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+t;throw p(e),new Error(e)}function y(t,e){t||v()}function b(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+t}}class T{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class I{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new E;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new E,t.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{d("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(d("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new E)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(d("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(y("string"==typeof e.accessToken),new O(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return y(null===t||"string"==typeof t),new u(t)}}class S{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=u.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class A{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new S(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */k.T=-1;class C{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=N(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function j(t,e){return t<e?-1:t>e?1:0}function L(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new w(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new w(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new w(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return R.fromMillis(Date.now())}static fromDate(t){return R.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new R(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t){this.timestamp=t}static fromTimestamp(t){return new D(t)}static min(){return new D(new R(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function x(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function M(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t,e,n){void 0===e?e=0:e>t.length&&v(),void 0===n?n=t.length-e:n>t.length-e&&v(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===F.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof F?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class U extends F{construct(t,e,n){return new U(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new w(_.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new U(e)}static emptyPath(){return new U([])}}const V=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class B extends F{construct(t,e,n){return new B(t,e,n)}static isValidIdentifier(t){return V.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),B.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new B(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new w(_.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new w(_.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new w(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new w(_.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new B(e)}static emptyPath(){return new B([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.fields=t,t.sort(B.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return L(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class G{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new G(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new G(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}G.EMPTY_BYTE_STRING=new G("");const q=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function H(t){if(y(!!t),"string"==typeof t){let e=0;const n=q.exec(t);if(y(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:W(t.seconds),nanos:W(t.nanos)}}function W(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function z(t){return"string"==typeof t?G.fromBase64String(t):G.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function X(t){const e=t.mapValue.fields.__previous_value__;return K(e)?X(e):e}function Y(t){const e=H(t.mapValue.fields.__local_write_time__.timestampValue);return new R(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t){return null==t}function J(t){return 0===t&&1/t==-1/0}function Z(t){return"number"==typeof t&&Number.isInteger(t)&&!J(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.path=t}static fromPath(t){return new tt(U.fromString(t))}static fromName(t){return new tt(U.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===U.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return U.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new tt(new U(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?K(t)?4:10:v()}function nt(t,e){const n=et(t);if(n!==et(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Y(t).isEqual(Y(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=H(t.timestampValue),r=H(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return z(t.bytesValue).isEqual(z(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return W(t.geoPointValue.latitude)===W(e.geoPointValue.latitude)&&W(t.geoPointValue.longitude)===W(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return W(t.integerValue)===W(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=W(t.doubleValue),r=W(e.doubleValue);return n===r?J(n)===J(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return L(t.arrayValue.values||[],e.arrayValue.values||[],nt);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(P(n)!==P(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!nt(n[i],r[i])))return!1;return!0}(t,e);default:return v()}}function rt(t,e){return void 0!==(t.values||[]).find(t=>nt(t,e))}function it(t,e){const n=et(t),r=et(e);if(n!==r)return j(n,r);switch(n){case 0:return 0;case 1:return j(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=W(t.integerValue||t.doubleValue),r=W(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return st(t.timestampValue,e.timestampValue);case 4:return st(Y(t),Y(e));case 5:return j(t.stringValue,e.stringValue);case 6:return function(t,e){const n=z(t),r=z(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=j(n[i],r[i]);if(0!==t)return t}return j(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=j(W(t.latitude),W(e.latitude));return 0!==n?n:j(W(t.longitude),W(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=it(n[i],r[i]);if(t)return t}return j(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=j(r[o],s[o]);if(0!==t)return t;const e=it(n[r[o]],i[s[o]]);if(0!==e)return e}return j(r.length,s.length)}(t.mapValue,e.mapValue);default:throw v()}}function st(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return j(t,e);const n=H(t),r=H(e),i=j(n.seconds,r.seconds);return 0!==i?i:j(n.nanos,r.nanos)}function ot(t){return at(t)}function at(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=H(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?z(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,tt.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=at(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${at(t.fields[i])}`;return n+"}"}(t.mapValue):v();var e,n}function ct(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ut(t){return!!t&&"integerValue"in t}function lt(t){return!!t&&"arrayValue"in t}function ht(t){return!!t&&"nullValue"in t}function ft(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function dt(t){return!!t&&"mapValue"in t}function pt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return x(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=pt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=pt(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.value=t}static empty(){return new mt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!dt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=pt(e)}setAll(t){let e=B.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=pt(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());dt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return nt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];dt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){x(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new mt(pt(this.value))}}function gt(t){const e=[];return x(t.fields,(t,n)=>{const r=new B([t]);if(dt(n)){const t=gt(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new $(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class vt{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new vt(t,0,D.min(),mt.empty(),0)}static newFoundDocument(t,e,n){return new vt(t,1,e,n,0)}static newNoDocument(t,e){return new vt(t,2,e,mt.empty(),0)}static newUnknownDocument(t,e){return new vt(t,3,e,mt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof vt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new vt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.A=null}}function bt(t,e=null,n=[],r=[],i=null,s=null,o=null){return new yt(t,e,n,r,i,s,o)}function _t(t){const e=b(t);if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>It(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),Q(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Pt(e.startAt)),e.endAt&&(t+="|ub:",t+=Pt(e.endAt)),e.A=t}return e.A}function wt(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ot(e.value)}`;var e}).join(", ")}]`),Q(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Pt(t.startAt)),t.endAt&&(e+=", endAt: "+Pt(t.endAt)),`Target(${e})`}function Et(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Mt(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!nt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ut(t.startAt,e.startAt)&&Ut(t.endAt,e.endAt)}function Ot(t){return tt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Tt extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.R(t,e,n):new St(t,e,n):"array-contains"===e?new Ct(t,n):"in"===e?new jt(t,n):"not-in"===e?new Lt(t,n):"array-contains-any"===e?new Rt(t,n):new Tt(t,e,n)}static R(t,e,n){return"in"===e?new At(t,n):new kt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.P(it(e,this.value)):null!==e&&et(this.value)===et(e)&&this.P(it(e,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return v()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function It(t){return t.field.canonicalString()+t.op.toString()+ot(t.value)}class St extends Tt{constructor(t,e,n){super(t,e,n),this.key=tt.fromName(n.referenceValue)}matches(t){const e=tt.comparator(t.key,this.key);return this.P(e)}}class At extends Tt{constructor(t,e){super(t,"in",e),this.keys=Nt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class kt extends Tt{constructor(t,e){super(t,"not-in",e),this.keys=Nt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Nt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>tt.fromName(t.referenceValue))}class Ct extends Tt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return lt(e)&&rt(e.arrayValue,this.value)}}class jt extends Tt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&rt(this.value.arrayValue,e)}}class Lt extends Tt{constructor(t,e){super(t,"not-in",e)}matches(t){if(rt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!rt(this.value.arrayValue,e)}}class Rt extends Tt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!lt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>rt(this.value.arrayValue,t))}}class Dt{constructor(t,e){this.position=t,this.before=e}}function Pt(t){return`${t.before?"b":"a"}:${t.position.map(t=>ot(t)).join(",")}`}class xt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Mt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ft(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?tt.comparator(tt.fromName(o.referenceValue),n.key):it(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function Ut(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nt(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function Bt(t,e,n,r,i,s,o,a){return new Vt(t,e,n,r,i,s,o,a)}function $t(t){return new Vt(t)}function Gt(t){return!Q(t.limit)&&"F"===t.limitType}function qt(t){return!Q(t.limit)&&"L"===t.limitType}function Ht(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Wt(t){for(const e of t.filters)if(e.v())return e.field;return null}function zt(t){return null!==t.collectionGroup}function Kt(t){const e=b(t);if(null===e.V){e.V=[];const t=Wt(e),n=Ht(e);if(null!==t&&null===n)t.isKeyField()||e.V.push(new xt(t)),e.V.push(new xt(B.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.V.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new xt(B.keyField(),t))}}}return e.V}function Xt(t){const e=b(t);if(!e.S)if("F"===e.limitType)e.S=bt(e.path,e.collectionGroup,Kt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Kt(e)){const e="desc"===i.dir?"asc":"desc";t.push(new xt(i.field,e))}const n=e.endAt?new Dt(e.endAt.position,!e.endAt.before):null,r=e.startAt?new Dt(e.startAt.position,!e.startAt.before):null;e.S=bt(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.S}function Yt(t,e,n){return new Vt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qt(t,e){return Et(Xt(t),Xt(e))&&t.limitType===e.limitType}function Jt(t){return`${_t(Xt(t))}|lt:${t.limitType}`}function Zt(t){return`Query(target=${wt(Xt(t))}; limitType=${t.limitType})`}function te(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):tt.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!Ft(t.startAt,Kt(t),e))&&(!t.endAt||!Ft(t.endAt,Kt(t),e))}(t,e)}function ee(t){return(e,n)=>{let r=!1;for(const i of Kt(t)){const t=ne(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function ne(t,e,n){const r=t.field.isKeyField()?tt.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?it(r,i):v()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:J(e)?"-0":e}}function ie(t){return{integerValue:""+t}}function se(t,e){return Z(e)?ie(e):re(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this._=void 0}}function ae(t,e,n){return t instanceof le?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof he?fe(t,e):t instanceof de?pe(t,e):function(t,e){const n=ue(t,e),r=ge(n)+ge(t.C);return ut(n)&&ut(t.C)?ie(r):re(t.N,r)}(t,e)}function ce(t,e,n){return t instanceof he?fe(t,e):t instanceof de?pe(t,e):n}function ue(t,e){return t instanceof me?ut(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class le extends oe{}class he extends oe{constructor(t){super(),this.elements=t}}function fe(t,e){const n=ve(e);for(const r of t.elements)n.some(t=>nt(t,r))||n.push(r);return{arrayValue:{values:n}}}class de extends oe{constructor(t){super(),this.elements=t}}function pe(t,e){let n=ve(e);for(const r of t.elements)n=n.filter(t=>!nt(t,r));return{arrayValue:{values:n}}}class me extends oe{constructor(t,e){super(),this.N=t,this.C=e}}function ge(t){return W(t.integerValue||t.doubleValue)}function ve(t){return lt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof he&&e instanceof he||t instanceof de&&e instanceof de?L(t.elements,e.elements,nt):t instanceof me&&e instanceof me?nt(t.C,e.C):t instanceof le&&e instanceof le}(t.transform,e.transform)}class be{constructor(t,e){this.version=t,this.transformResults=e}}class _e{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new _e}static exists(t){return new _e(void 0,t)}static updateTime(t){return new _e(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function we(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ee{}function Oe(t,e,n){t instanceof ke?function(t,e,n){const r=t.value.clone(),i=je(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Ne?function(t,e,n){if(!we(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=je(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Ce(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Te(t,e,n){t instanceof ke?function(t,e,n){if(!we(t.precondition,e))return;const r=t.value.clone(),i=Le(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(Ae(e),r).setHasLocalMutations()}(t,e,n):t instanceof Ne?function(t,e,n){if(!we(t.precondition,e))return;const r=Le(t.fieldTransforms,n,e),i=e.data;i.setAll(Ce(t)),i.setAll(r),e.convertToFoundDocument(Ae(e),i).setHasLocalMutations()}(t,e,n):function(t,e){we(t.precondition,e)&&e.convertToNoDocument(D.min())}(t,e)}function Ie(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=ue(r.transform,t||null);null!=i&&(null==n&&(n=mt.empty()),n.set(r.field,i))}return n||null}function Se(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&L(t,e,(t,e)=>ye(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Ae(t){return t.isFoundDocument()?t.version:D.min()}class ke extends Ee{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Ne extends Ee{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Ce(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function je(t,e,n){const r=new Map;y(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ce(o,a,n[i]))}return r}function Le(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,ae(t,s,e))}return r}class Re extends Ee{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class De extends Ee{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe,Me;function Fe(t){switch(t){default:return v();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function Ue(t){if(void 0===t)return p("GRPC error has no .code"),_.UNKNOWN;switch(t){case xe.OK:return _.OK;case xe.CANCELLED:return _.CANCELLED;case xe.UNKNOWN:return _.UNKNOWN;case xe.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case xe.INTERNAL:return _.INTERNAL;case xe.UNAVAILABLE:return _.UNAVAILABLE;case xe.UNAUTHENTICATED:return _.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case xe.NOT_FOUND:return _.NOT_FOUND;case xe.ALREADY_EXISTS:return _.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return _.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case xe.ABORTED:return _.ABORTED;case xe.OUT_OF_RANGE:return _.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return _.UNIMPLEMENTED;case xe.DATA_LOSS:return _.DATA_LOSS;default:return v()}}(Me=xe||(xe={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ve{constructor(t,e){this.comparator=t,this.root=e||$e.EMPTY}insert(t,e){return new Ve(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(t){return new Ve(this.comparator,this.root.remove(t,this.comparator).copy(null,null,$e.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Be(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Be(this.root,t,this.comparator,!1)}getReverseIterator(){return new Be(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Be(this.root,t,this.comparator,!0)}}class Be{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class $e{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:$e.RED,this.left=null!=r?r:$e.EMPTY,this.right=null!=i?i:$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new $e(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return $e.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const t=this.left.check();if(t!==this.right.check())throw v();return t+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1,$e.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(t,e,n,r,i){return this}insert(t,e,n){return new $e(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge{constructor(t){this.comparator=t,this.data=new Ve(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new qe(this.data.getIterator())}getIteratorFrom(t){return new qe(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Ge))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ge(this.comparator);return e.data=t,e}}class qe{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=new Ve(tt.comparator);function We(){return He}const ze=new Ve(tt.comparator);function Ke(){return ze}const Xe=new Ve(tt.comparator);function Ye(){return Xe}const Qe=new Ge(tt.comparator);function Je(...t){let e=Qe;for(const n of t)e=e.add(n);return e}const Ze=new Ge(j);function tn(){return Ze}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,nn.createSynthesizedTargetChangeForCurrentChange(t,e)),new en(D.min(),n,tn(),We(),Je())}}class nn{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new nn(G.EMPTY_BYTE_STRING,e,Je(),Je(),Je())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t,e,n,r){this.k=t,this.removedTargetIds=e,this.key=n,this.$=r}}class sn{constructor(t,e){this.targetId=t,this.O=e}}class on{constructor(t,e,n=G.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class an{constructor(){this.F=0,this.M=ln(),this.L=G.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(t){t.approximateByteSize()>0&&(this.U=!0,this.L=t)}W(){let t=Je(),e=Je(),n=Je();return this.M.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:v()}}),new nn(this.L,this.B,t,e,n)}G(){this.U=!1,this.M=ln()}H(t,e){this.U=!0,this.M=this.M.insert(t,e)}J(t){this.U=!0,this.M=this.M.remove(t)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class cn{constructor(t){this.tt=t,this.et=new Map,this.nt=We(),this.st=un(),this.it=new Ge(j)}rt(t){for(const e of t.k)t.$&&t.$.isFoundDocument()?this.ot(e,t.$):this.ct(e,t.key,t.$);for(const e of t.removedTargetIds)this.ct(e,t.key,t.$)}at(t){this.forEachTarget(t,e=>{const n=this.ut(e);switch(t.state){case 0:this.ht(e)&&n.j(t.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(t.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(e);break;case 3:this.ht(e)&&(n.Z(),n.j(t.resumeToken));break;case 4:this.ht(e)&&(this.lt(e),n.j(t.resumeToken));break;default:v()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.et.forEach((t,n)=>{this.ht(n)&&e(n)})}ft(t){const e=t.targetId,n=t.O.count,r=this.dt(e);if(r){const t=r.target;if(Ot(t))if(0===n){const n=new tt(t.path);this.ct(e,n,vt.newNoDocument(n,D.min()))}else y(1===n);else this.wt(e)!==n&&(this.lt(e),this.it=this.it.add(e))}}_t(t){const e=new Map;this.et.forEach((n,r)=>{const i=this.dt(r);if(i){if(n.current&&Ot(i.target)){const e=new tt(i.target.path);null!==this.nt.get(e)||this.gt(r,e)||this.ct(r,e,vt.newNoDocument(e,t))}n.K&&(e.set(r,n.W()),n.G())}});let n=Je();this.st.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.dt(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))});const r=new en(t,e,this.it,this.nt,n);return this.nt=We(),this.st=un(),this.it=new Ge(j),r}ot(t,e){if(!this.ht(t))return;const n=this.gt(t,e.key)?2:0;this.ut(t).H(e.key,n),this.nt=this.nt.insert(e.key,e),this.st=this.st.insert(e.key,this.yt(e.key).add(t))}ct(t,e,n){if(!this.ht(t))return;const r=this.ut(t);this.gt(t,e)?r.H(e,1):r.J(e),this.st=this.st.insert(e,this.yt(e).delete(t)),n&&(this.nt=this.nt.insert(e,n))}removeTarget(t){this.et.delete(t)}wt(t){const e=this.ut(t).W();return this.tt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Y(t){this.ut(t).Y()}ut(t){let e=this.et.get(t);return e||(e=new an,this.et.set(t,e)),e}yt(t){let e=this.st.get(t);return e||(e=new Ge(j),this.st=this.st.insert(t,e)),e}ht(t){const e=null!==this.dt(t);return e||d("WatchChangeAggregator","Detected inactive target",t),e}dt(t){const e=this.et.get(t);return e&&e.q?null:this.tt.Tt(t)}lt(t){this.et.set(t,new an),this.tt.getRemoteKeysForTarget(t).forEach(e=>{this.ct(t,e,null)})}gt(t,e){return this.tt.getRemoteKeysForTarget(t).has(e)}}function un(){return new Ve(tt.comparator)}function ln(){return new Ve(tt.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),fn=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class dn{constructor(t,e){this.databaseId=t,this.D=e}}function pn(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mn(t,e){return t.D?e.toBase64():e.toUint8Array()}function gn(t,e){return pn(t,e.toTimestamp())}function vn(t){return y(!!t),D.fromTimestamp(function(t){const e=H(t);return new R(e.seconds,e.nanos)}(t))}function yn(t,e){return function(t){return new U(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function bn(t){const e=U.fromString(t);return y(Hn(e)),e}function _n(t,e){return yn(t.databaseId,e.path)}function wn(t,e){const n=bn(e);if(n.get(1)!==t.databaseId.projectId)throw new w(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new w(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new tt(In(n))}function En(t,e){return yn(t.databaseId,e)}function On(t){const e=bn(t);return 4===e.length?U.emptyPath():In(e)}function Tn(t){return new U(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function In(t){return y(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Sn(t,e,n){return{name:_n(t,e),fields:n.value.mapValue.fields}}function An(t,e){return"found"in e?function(t,e){y(!!e.found),e.found.name,e.found.updateTime;const n=wn(t,e.found.name),r=vn(e.found.updateTime),i=new mt({mapValue:{fields:e.found.fields}});return vt.newFoundDocument(n,r,i)}(t,e):"missing"in e?function(t,e){y(!!e.missing),y(!!e.readTime);const n=wn(t,e.missing),r=vn(e.readTime);return vt.newNoDocument(n,r)}(t,e):v()}function kn(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:v()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.D?(y(void 0===e||"string"==typeof e),G.fromBase64String(e||"")):(y(void 0===e||e instanceof Uint8Array),G.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?_.UNKNOWN:Ue(t.code);return new w(e,t.message||"")}(o);n=new on(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=wn(t,r.document.name),s=vn(r.document.updateTime),o=new mt({mapValue:{fields:r.document.fields}}),a=vt.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new rn(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=wn(t,r.document),s=r.readTime?vn(r.readTime):D.min(),o=vt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new rn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=wn(t,r.document),s=r.removedTargetIds||[];n=new rn([],s,i,null)}else{if(!("filter"in e))return v();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new Pe(r),s=t.targetId;n=new sn(s,i)}}return n}function Nn(t,e){let n;if(e instanceof ke)n={update:Sn(t,e.key,e.value)};else if(e instanceof Re)n={delete:_n(t,e.key)};else if(e instanceof Ne)n={update:Sn(t,e.key,e.data),updateMask:qn(e.fieldMask)};else{if(!(e instanceof De))return v();n={verify:_n(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof le)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof he)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof de)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof me)return{fieldPath:e.field.canonicalString(),increment:n.C};throw v()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:gn(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:v()}(t,e.precondition)),n}function Cn(t,e){return t&&t.length>0?(y(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?vn(t.updateTime):vn(e);return n.isEqual(D.min())&&(n=vn(e)),new be(n,t.transformResults||[])}(t,e))):[]}function jn(t,e){return{documents:[En(t,e.path)]}}function Ln(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=En(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=En(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(ft(t.value))return{unaryFilter:{field:Vn(t.field),op:"IS_NAN"}};if(ht(t.value))return{unaryFilter:{field:Vn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ft(t.value))return{unaryFilter:{field:Vn(t.field),op:"IS_NOT_NAN"}};if(ht(t.value))return{unaryFilter:{field:Vn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vn(t.field),op:Un(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Vn(t.field),direction:Fn(t.dir)}}(t))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.D||Q(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=xn(e.startAt)),e.endAt&&(n.structuredQuery.endAt=xn(e.endAt)),n}function Rn(t){let e=On(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){y(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=Pn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new xt(Bn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Q(e)?null:e}(n.limit));let c=null;n.startAt&&(c=Mn(n.startAt));let u=null;return n.endAt&&(u=Mn(n.endAt)),Bt(e,i,o,s,a,"F",c,u)}function Dn(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Pn(t){return t?void 0!==t.unaryFilter?[Gn(t)]:void 0!==t.fieldFilter?[$n(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>Pn(t)).reduce((t,e)=>t.concat(e)):v():[]}function xn(t){return{before:t.before,values:t.position}}function Mn(t){const e=!!t.before,n=t.values||[];return new Dt(n,e)}function Fn(t){return hn[t]}function Un(t){return fn[t]}function Vn(t){return{fieldPath:t.canonicalString()}}function Bn(t){return B.fromServerFormat(t.fieldPath)}function $n(t){return Tt.create(Bn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(t.fieldFilter.op),t.fieldFilter.value)}function Gn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Bn(t.unaryFilter.field);return Tt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Bn(t.unaryFilter.field);return Tt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Bn(t.unaryFilter.field);return Tt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Bn(t.unaryFilter.field);return Tt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}function qn(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Hn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Kn(e)),e=zn(t.get(n),e);return Kn(e)}function zn(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function Kn(t){return t+""}class Xn{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}Xn.store="owner",Xn.key="owner";class Yn{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}Yn.store="mutationQueues",Yn.keyPath="userId";class Qn{constructor(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}Qn.store="mutations",Qn.keyPath="batchId",Qn.userMutationsIndex="userMutationsIndex",Qn.userMutationsKeyPath=["userId","batchId"];class Jn{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,Wn(e)]}static key(t,e,n){return[t,Wn(e),n]}}Jn.store="documentMutations",Jn.PLACEHOLDER=new Jn;class Zn{constructor(t,e,n,r,i,s){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}Zn.store="remoteDocuments",Zn.readTimeIndex="readTimeIndex",Zn.readTimeIndexPath="readTime",Zn.collectionReadTimeIndex="collectionReadTimeIndex",Zn.collectionReadTimeIndexPath=["parentPath","readTime"];class tr{constructor(t){this.byteSize=t}}tr.store="remoteDocumentGlobal",tr.key="remoteDocumentGlobalKey";class er{constructor(t,e,n,r,i,s,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}er.store="targets",er.keyPath="targetId",er.queryTargetsIndexName="queryTargetsIndex",er.queryTargetsKeyPath=["canonicalId","targetId"];class nr{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}nr.store="targetDocuments",nr.keyPath=["targetId","path"],nr.documentTargetsIndex="documentTargetsIndex",nr.documentTargetsKeyPath=["path","targetId"];class rr{constructor(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}rr.key="targetGlobalKey",rr.store="targetGlobal";class ir{constructor(t,e){this.collectionId=t,this.parent=e}}ir.store="collectionParents",ir.keyPath=["collectionId","parent"];class sr{constructor(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}}sr.store="clientMetadata",sr.keyPath="clientId";class or{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}or.store="bundles",or.keyPath="bundleId";class ar{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}ar.store="namedQueries",ar.keyPath="name";Yn.store,Qn.store,Jn.store,Zn.store,er.store,Xn.store,rr.store,nr.store,sr.store,tr.store,ir.store,or.store,ar.store;const cr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ur{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new lr((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof lr?e:lr.resolve(e)}catch(t){return lr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):lr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):lr.reject(e)}static resolve(t){return new lr((e,n)=>{e(t)})}static reject(t){return new lr((e,n)=>{n(t)})}static waitFor(t){return new lr((e,n)=>{let r=0,i=0,s=!1;t.forEach(t=>{++r,t.next(()=>{++i,s&&i===r&&e()},t=>n(t))}),s=!0,i===r&&e()})}static or(t){let e=lr.resolve(!1);for(const n of t)e=e.next(t=>t?lr.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fr{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Oe(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Te(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Te(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(D.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Je())}isEqual(t){return this.batchId===t.batchId&&L(this.mutations,t.mutations,(t,e)=>Se(t,e))&&L(this.baseMutations,t.baseMutations,(t,e)=>Se(t,e))}}class dr{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){y(t.mutations.length===n.length);let r=Ye();const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new dr(t,e,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t,e,n,r,i=D.min(),s=D.min(),o=G.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new pr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t){this.Wt=t}}function gr(t){const e=Rn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Yt(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vr{constructor(){this.Gt=new yr}addToCollectionParentIndex(t,e){return this.Gt.add(e),lr.resolve()}getCollectionParents(t,e){return lr.resolve(this.Gt.getEntries(e))}}class yr{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Ge(U.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Ge(U.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new br(t,br.DEFAULT_COLLECTION_PERCENTILE,br.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */br.DEFAULT_COLLECTION_PERCENTILE=10,br.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,br.DEFAULT=new br(41943040,br.DEFAULT_COLLECTION_PERCENTILE,br.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),br.DISABLED=new br(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _r{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new _r(0)}static ie(){return new _r(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function wr(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==cr)throw t;d("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Er{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){x(this.inner,(e,n)=>{for(const[r,i]of n)t(r,i)})}isEmpty(){return M(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.changes=new Er(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:D.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:vt.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?lr.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tr{constructor(t,e,n){this.He=t,this.In=e,this.Ht=n}An(t,e){return this.In.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Rn(t,e,n))}Rn(t,e,n){return this.He.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}bn(t,e){t.forEach((t,n)=>{for(const r of e)r.applyToLocalView(n)})}Pn(t,e){return this.He.getEntries(t,e).next(e=>this.vn(t,e).next(()=>e))}vn(t,e){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.bn(e,t))}getDocumentsMatchingQuery(t,e,n){return function(t){return tt.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Vn(t,e.path):zt(e)?this.Sn(t,e,n):this.Dn(t,e,n)}Vn(t,e){return this.An(t,new tt(e)).next(t=>{let e=Ke();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Sn(t,e,n){const r=e.collectionGroup;let i=Ke();return this.Ht.getCollectionParents(t,r).next(s=>lr.forEach(s,s=>{const o=function(t,e){return new Vt(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.Dn(t,o,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}Dn(t,e,n){let r,i;return this.He.getDocumentsMatchingQuery(t,e,n).next(n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(i=e,this.Cn(t,i,r).next(t=>{r=t;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=vt.newInvalidDocument(n),r=r.insert(n,i)),Te(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))).next(()=>(r.forEach((t,n)=>{te(e,n)||(r=r.remove(t))}),r))}Cn(t,e,n){let r=Je();for(const s of e)for(const t of s.mutations)t instanceof Ne&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.He.getEntries(t,r).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))}),i))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Nn=n,this.xn=r}static kn(t,e){let n=Je(),r=Je();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ir(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{$n(t){this.On=t}getDocumentsMatchingQuery(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(D.min())?this.Fn(t,e):this.On.Pn(t,r).next(i=>{const o=this.Mn(e,i);return(Gt(e)||qt(e))&&this.Ln(e.limitType,o,r,n)?this.Fn(t,e):(f()<=s["a"].DEBUG&&d("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Zt(e)),this.On.getDocumentsMatchingQuery(t,e,n).next(t=>(o.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Mn(t,e){let n=new Ge(ee(t));return e.forEach((e,r)=>{te(t,r)&&(n=n.add(r))}),n}Ln(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(t,e){return f()<=s["a"].DEBUG&&d("QueryEngine","Using full collection scan to execute query:",Zt(e)),this.On.getDocumentsMatchingQuery(t,e,D.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t,e,n,r){this.persistence=t,this.Bn=e,this.N=r,this.Un=new Ve(j),this.qn=new Er(t=>_t(t),Et),this.Kn=D.min(),this.In=t.getMutationQueue(n),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new Tr(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Un))}}function kr(t,e,n,r){return new Ar(t,e,n,r)}async function Nr(t,e){const n=b(t);let r=n.In,i=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",t=>{let s;return n.In.getAllMutationBatches(t).next(o=>(s=o,r=n.persistence.getMutationQueue(e),i=new Tr(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t))).next(e=>{const n=[],r=[];let o=Je();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.Pn(t,o).next(t=>({Wn:t,removedBatchIds:n,addedBatchIds:r}))})});return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),s}function Cr(t,e){const n=b(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=lr.resolve();return s.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const s=n.docVersions.get(t);y(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&r.addEntry(e,n.commitVersion))})}),o.next(()=>t.In.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.Pn(t,r))})}function jr(t){const e=b(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ze.getLastRemoteSnapshotVersion(t))}function Lr(t,e){const n=b(t),r=e.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const s=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const o=[];e.targetChanges.forEach((e,s)=>{const a=i.get(s);if(!a)return;o.push(n.ze.removeMatchingKeys(t,e.removedDocuments,s).next(()=>n.ze.addMatchingKeys(t,e.addedDocuments,s)));const c=e.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);i=i.insert(s,u),function(t,e,n){return y(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,u,e)&&o.push(n.ze.updateTargetData(t,u))}});let a=We();if(e.documentUpdates.forEach((r,i)=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(Rr(t,s,e.documentUpdates,r,void 0).next(t=>{a=t})),!r.isEqual(D.min())){const e=n.ze.getLastRemoteSnapshotVersion(t).next(e=>n.ze.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return lr.waitFor(o).next(()=>s.apply(t)).next(()=>n.Qn.vn(t,a)).next(()=>a)}).then(t=>(n.Un=i,t))}function Rr(t,e,n,r,i){let s=Je();return n.forEach(t=>s=s.add(t)),e.getEntries(t,s).next(t=>{let s=We();return n.forEach((n,o)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(D.min())?(e.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),s=s.insert(n,o)):d("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),s})}function Dr(t,e){const n=b(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.In.getNextMutationBatchAfterBatchId(t,e)))}function Pr(t,e){const n=b(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.ze.getTargetData(t,e).next(i=>i?(r=i,lr.resolve(r)):n.ze.allocateTargetId(t).next(i=>(r=new pr(e,i,0,t.currentSequenceNumber),n.ze.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.Un.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(t.targetId,t),n.qn.set(e,t.targetId)),t})}async function xr(t,e,n){const r=b(t),i=r.Un.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!hr(t))throw t;d("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Un=r.Un.remove(e),r.qn.delete(i.target)}function Mr(t,e,n){const r=b(t);let i=D.min(),s=Je();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=b(t),i=r.qn.get(n);return void 0!==i?lr.resolve(r.Un.get(i)):r.ze.getTargetData(e,n)}(r,t,Xt(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(t,e.targetId).next(t=>{s=t})}).next(()=>r.Bn.getDocumentsMatchingQuery(t,e,n?i:D.min(),n?s:Je())).next(t=>({documents:t,Gn:s})))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fr{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return lr.resolve(this.Yn.get(e))}saveBundleMetadata(t,e){var n;return this.Yn.set(e.id,{id:(n=e).id,version:n.version,createTime:vn(n.createTime)}),lr.resolve()}getNamedQuery(t,e){return lr.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:gr(t.bundledQuery),readTime:vn(t.readTime)}}(e)),lr.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.Zn=new Ge(Vr.ts),this.es=new Ge(Vr.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new Vr(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.rs(new Vr(t,e))}os(t,e){t.forEach(t=>this.removeReference(t,e))}cs(t){const e=new tt(new U([])),n=new Vr(e,t),r=new Vr(e,t+1),i=[];return this.es.forEachInRange([n,r],t=>{this.rs(t),i.push(t.key)}),i}us(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new tt(new U([])),n=new Vr(e,t),r=new Vr(e,t+1);let i=Je();return this.es.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new Vr(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Vr{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return tt.comparator(t.key,e.key)||j(t.ls,e.ls)}static ns(t,e){return j(t.ls,e.ls)||tt.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(t,e){this.Ht=t,this.referenceDelegate=e,this.In=[],this.fs=1,this.ds=new Ge(Vr.ts)}checkEmpty(t){return lr.resolve(0===this.In.length)}addMutationBatch(t,e,n,r){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const s=new fr(i,e,n,r);this.In.push(s);for(const o of r)this.ds=this.ds.add(new Vr(o.key,i)),this.Ht.addToCollectionParentIndex(t,o.key.path.popLast());return lr.resolve(s)}lookupMutationBatch(t,e){return lr.resolve(this.ws(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this._s(n),i=r<0?0:r;return lr.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return lr.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(t){return lr.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Vr(e,0),r=new Vr(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],t=>{const e=this.ws(t.ls);i.push(e)}),lr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ge(j);return e.forEach(t=>{const e=new Vr(t,0),r=new Vr(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],t=>{n=n.add(t.ls)})}),lr.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;tt.isDocumentKey(i)||(i=i.child(""));const s=new Vr(new tt(i),0);let o=new Ge(j);return this.ds.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)},s),lr.resolve(this.gs(o))}gs(t){const e=[];return t.forEach(t=>{const n=this.ws(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){y(0===this.ys(e.batchId,"removed")),this.In.shift();let n=this.ds;return lr.forEach(e.mutations,r=>{const i=new Vr(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ds=n})}te(t){}containsKey(t,e){const n=new Vr(e,0),r=this.ds.firstAfterOrEqual(n);return lr.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.In.length,lr.resolve()}ys(t,e){return this._s(t)}_s(t){return 0===this.In.length?0:t-this.In[0].batchId}ws(t){const e=this._s(t);return e<0||e>=this.In.length?null:this.In[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,e){this.Ht=t,this.ps=e,this.docs=new Ve(tt.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:o,readTime:n}),this.size+=o-s,this.Ht.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return lr.resolve(n?n.document.clone():vt.newInvalidDocument(e))}getEntries(t,e){let n=We();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():vt.newInvalidDocument(t))}),lr.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=We();const i=new tt(e.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||te(e,i)&&(r=r.insert(i.key,i.clone()))}return lr.resolve(r)}Ts(t,e){return lr.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Gr(this)}getSize(t){return lr.resolve(this.size)}}class Gr extends Or{constructor(t){super(),this.Se=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.document.isValidDocument()?e.push(this.Se.addEntry(t,r.document,this.getReadTime(n))):this.Se.removeEntry(n)}),lr.waitFor(e)}getFromCache(t,e){return this.Se.getEntry(t,e)}getAllFromCache(t,e){return this.Se.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t){this.persistence=t,this.Es=new Er(t=>_t(t),Et),this.lastRemoteSnapshotVersion=D.min(),this.highestTargetId=0,this.Is=0,this.As=new Ur,this.targetCount=0,this.Rs=_r.se()}forEachTarget(t,e){return this.Es.forEach((t,n)=>e(n)),lr.resolve()}getLastRemoteSnapshotVersion(t){return lr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return lr.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),lr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Is&&(this.Is=e),lr.resolve()}ce(t){this.Es.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new _r(e),this.highestTargetId=e),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,e){return this.ce(e),this.targetCount+=1,lr.resolve()}updateTargetData(t,e){return this.ce(e),lr.resolve()}removeTargetData(t,e){return this.Es.delete(e.target),this.As.cs(e.targetId),this.targetCount-=1,lr.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Es.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Es.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),lr.waitFor(i).next(()=>r)}getTargetCount(t){return lr.resolve(this.targetCount)}getTargetData(t,e){const n=this.Es.get(e)||null;return lr.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),lr.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),lr.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.cs(e),lr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return lr.resolve(n)}containsKey(t,e){return lr.resolve(this.As.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(t,e){this.bs={},this.Le=new k(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new qr(this),this.Ht=new vr,this.He=function(t,e){return new $r(t,e)}(this.Ht,t=>this.referenceDelegate.Ps(t)),this.N=new mr(e),this.Je=new Fr(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new Br(this.Ht,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,e,n){d("MemoryPersistence","Starting transaction:",t);const r=new Wr(this.Le.next());return this.referenceDelegate.vs(),n(r).next(t=>this.referenceDelegate.Vs(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ss(t,e){return lr.or(Object.values(this.bs).map(n=>()=>n.containsKey(t,e)))}}class Wr extends ur{constructor(t){super(),this.currentSequenceNumber=t}}class zr{constructor(t){this.persistence=t,this.Ds=new Ur,this.Cs=null}static Ns(t){return new zr(t)}get xs(){if(this.Cs)return this.Cs;throw v()}addReference(t,e,n){return this.Ds.addReference(n,e),this.xs.delete(n.toString()),lr.resolve()}removeReference(t,e,n){return this.Ds.removeReference(n,e),this.xs.add(n.toString()),lr.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),lr.resolve()}removeTarget(t,e){this.Ds.cs(e.targetId).forEach(t=>this.xs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}vs(){this.Cs=new Set}Vs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return lr.forEach(this.xs,n=>{const r=tt.fromPath(n);return this.ks(t,r).next(t=>{t||e.removeEntry(r)})}).next(()=>(this.Cs=null,e.apply(t)))}updateLimboDocument(t,e){return this.ks(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}Ps(t){return 0}ks(t,e){return lr.or([()=>lr.resolve(this.Ds.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ss(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.activeTargetIds=tn()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Xr{constructor(){this.yi=new Kr,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,e,n){this.pi[t]=e}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new Kr,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{Ti(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){d("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Ri(){d("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,e,n,r){const i=this.Bi(t,e);d("RestConnection","Sending: ",i,n);const s={};return this.Ui(s,r),this.qi(t,i,s,n).then(t=>(d("RestConnection","Received: ",t),t),e=>{throw m("RestConnection",t+" failed with error: ",e,"url: ",i,"request:",n),e})}Ki(t,e,n,r){return this.Li(t,e,n,r)}Ui(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+l,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}Bi(t,e){const n=Jr[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,e,n,r){return new Promise((i,s)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const e=o.getResponseJson();d("Connection","XHR received:",JSON.stringify(e)),i(e);break;case a["a"].TIMEOUT:d("Connection",'RPC "'+t+'" timed out'),s(new w(_.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(d("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(e)>=0?e:_.UNKNOWN}(t.status);s(new w(e,t.message))}else s(new w(_.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new w(_.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{d("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);o.send(e,"POST",c,n,15)})}ji(t,e){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Object(a["h"])(),i=Object(a["i"])(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new a["d"]({})),this.Ui(s.initMessageHeaders,e),Object(o["p"])()||Object(o["q"])()||Object(o["l"])()||Object(o["n"])()||Object(o["s"])()||Object(o["k"])()||(s.httpHeadersOverwriteParam="$httpHeaders");const c=n.join("");d("Connection","Creating WebChannel: "+c,s);const u=r.createWebChannel(c,s);let l=!1,h=!1;const f=new Zr({vi:t=>{h?d("Connection","Not sending because WebChannel is closed:",t):(l||(d("Connection","Opening WebChannel transport."),u.open(),l=!0),d("Connection","WebChannel sending:",t),u.send(t))},Vi:()=>u.close()}),p=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return p(u,a["f"].EventType.OPEN,()=>{h||d("Connection","WebChannel transport opened.")}),p(u,a["f"].EventType.CLOSE,()=>{h||(h=!0,d("Connection","WebChannel transport closed"),f.$i())}),p(u,a["f"].EventType.ERROR,t=>{h||(h=!0,m("Connection","WebChannel transport errored:",t),f.$i(new w(_.UNAVAILABLE,"The operation could not be completed")))}),p(u,a["f"].EventType.MESSAGE,t=>{var e;if(!h){const n=t.data[0];y(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){d("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=xe[t];if(void 0!==e)return Ue(e)}(t),n=i.message;void 0===e&&(e=_.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,f.$i(new w(e,n)),u.close()}else d("Connection","WebChannel received:",n),f.Oi(n)}}),p(i,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?d("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&d("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.ki()},0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t){return new dn(t,!0)}class ri{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Oe=t,this.timerId=e,this.Qi=n,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,e-n);r>0&&d("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Ji=Date.now(),t())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,e,n,r,i,s,o){this.Oe=t,this.er=n,this.nr=r,this.sr=i,this.credentialsProvider=s,this.listener=o,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new ri(t,e)}ur(){return 1===this.state||5===this.state||this.hr()}hr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&null===this.rr&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(t){this.gr(),this.stream.send(t)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(t,e){this.gr(),this.yr(),this.ar.cancel(),this.ir++,4!==t?this.ar.reset():e&&e.code===_.RESOURCE_EXHAUSTED?(p(e.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):e&&e.code===_.UNAUTHENTICATED&&3!==this.state&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.pr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(e)}pr(){}auth(){this.state=1;const t=this.Tr(this.ir),e=this.ir;this.credentialsProvider.getToken().then(t=>{this.ir===e&&this.Er(t)},e=>{t(()=>{const t=new w(_.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ir(t)})})}Er(t){const e=this.Tr(this.ir);this.stream=this.Ar(t),this.stream.Si(()=>{e(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(t=>{e(()=>this.Ir(t))}),this.stream.onMessage(t=>{e(()=>this.onMessage(t))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(t){return d("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}Tr(t){return e=>{this.Oe.enqueueAndForget(()=>this.ir===t?e():(d("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class si extends ii{constructor(t,e,n,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i),this.N=r}Ar(t){return this.sr.ji("Listen",t)}onMessage(t){this.ar.reset();const e=kn(this.N,t),n=function(t){if(!("targetChange"in t))return D.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?D.min():e.readTime?vn(e.readTime):D.min()}(t);return this.listener.Rr(e,n)}br(t){const e={};e.database=Tn(this.N),e.addTarget=function(t,e){let n;const r=e.target;return n=Ot(r)?{documents:jn(t,r)}:{query:Ln(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=mn(t,e.resumeToken):e.snapshotVersion.compareTo(D.min())>0&&(n.readTime=pn(t,e.snapshotVersion.toTimestamp())),n}(this.N,t);const n=Dn(this.N,t);n&&(e.labels=n),this.mr(e)}Pr(t){const e={};e.database=Tn(this.N),e.removeTarget=t,this.mr(e)}}class oi extends ii{constructor(t,e,n,r,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i),this.N=r,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(t){return this.sr.ji("Write",t)}onMessage(t){if(y(!!t.streamToken),this.lastStreamToken=t.streamToken,this.vr){this.ar.reset();const e=Cn(t.writeResults,t.commitTime),n=vn(t.commitTime);return this.listener.Dr(n,e)}return y(!t.writeResults||0===t.writeResults.length),this.vr=!0,this.listener.Cr()}Nr(){const t={};t.database=Tn(this.N),this.mr(t)}Sr(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>Nn(this.N,t))};this.mr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends class{}{constructor(t,e,n){super(),this.credentials=t,this.sr=e,this.N=n,this.kr=!1}$r(){if(this.kr)throw new w(_.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,e,n){return this.$r(),this.credentials.getToken().then(r=>this.sr.Li(t,e,n,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===_.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new w(_.UNKNOWN,t.toString())})}Ki(t,e,n){return this.$r(),this.credentials.getToken().then(r=>this.sr.Ki(t,e,n,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===_.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new w(_.UNKNOWN,t.toString())})}terminate(){this.kr=!0}}class ci{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){0===this.Or&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(t){"Online"===this.state?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur("Connection failed 1 times. Most recent error: "+t.toString()),this.Br("Offline")))}set(t){this.Kr(),this.Or=0,"Online"===t&&(this.Mr=!1),this.Br(t)}Br(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Ur(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(p(e),this.Mr=!1):d("OnlineStateTracker",e)}Kr(){null!==this.Fr&&(this.Fr.cancel(),this.Fr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=i,this.zr.Ti(t=>{n.enqueueAndForget(async()=>{yi(this)&&(d("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=b(t);e.Wr.add(4),await hi(e),e.Hr.set("Unknown"),e.Wr.delete(4),await li(e)}(this))})}),this.Hr=new ci(n,r)}}async function li(t){if(yi(t))for(const e of t.Gr)await e(!0)}async function hi(t){for(const e of t.Gr)await e(!1)}function fi(t,e){const n=b(t);n.Qr.has(e.targetId)||(n.Qr.set(e.targetId,e),vi(n)?gi(n):Pi(n).hr()&&pi(n,e))}function di(t,e){const n=b(t),r=Pi(n);n.Qr.delete(e),r.hr()&&mi(n,e),0===n.Qr.size&&(r.hr()?r.wr():yi(n)&&n.Hr.set("Unknown"))}function pi(t,e){t.Jr.Y(e.targetId),Pi(t).br(e)}function mi(t,e){t.Jr.Y(e),Pi(t).Pr(e)}function gi(t){t.Jr=new cn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.Qr.get(e)||null}),Pi(t).start(),t.Hr.Lr()}function vi(t){return yi(t)&&!Pi(t).ur()&&t.Qr.size>0}function yi(t){return 0===b(t).Wr.size}function bi(t){t.Jr=void 0}async function _i(t){t.Qr.forEach((e,n)=>{pi(t,e)})}async function wi(t,e){bi(t),vi(t)?(t.Hr.qr(e),gi(t)):t.Hr.set("Unknown")}async function Ei(t,e,n){if(t.Hr.set("Online"),e instanceof on&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Qr.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Qr.delete(r),t.Jr.removeTarget(r))}(t,e)}catch(n){d("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Oi(t,n)}else if(e instanceof rn?t.Jr.rt(e):e instanceof sn?t.Jr.ft(e):t.Jr.at(e),!n.isEqual(D.min()))try{const e=await jr(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Jr._t(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Qr.get(r);i&&t.Qr.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.Qr.get(e);if(!n)return;t.Qr.set(e,n.withResumeToken(G.EMPTY_BYTE_STRING,n.snapshotVersion)),mi(t,e);const r=new pr(n.target,e,1,n.sequenceNumber);pi(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){d("RemoteStore","Failed to raise snapshot:",e),await Oi(t,e)}}async function Oi(t,e,n){if(!hr(e))throw e;t.Wr.add(1),await hi(t),t.Hr.set("Offline"),n||(n=()=>jr(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{d("RemoteStore","Retrying IndexedDB access"),await n(),t.Wr.delete(1),await li(t)})}function Ti(t,e){return e().catch(n=>Oi(t,n,e))}async function Ii(t){const e=b(t),n=xi(e);let r=e.jr.length>0?e.jr[e.jr.length-1].batchId:-1;for(;Si(e);)try{const t=await Dr(e.localStore,r);if(null===t){0===e.jr.length&&n.wr();break}r=t.batchId,Ai(e,t)}catch(t){await Oi(e,t)}ki(e)&&Ni(e)}function Si(t){return yi(t)&&t.jr.length<10}function Ai(t,e){t.jr.push(e);const n=xi(t);n.hr()&&n.Vr&&n.Sr(e.mutations)}function ki(t){return yi(t)&&!xi(t).ur()&&t.jr.length>0}function Ni(t){xi(t).start()}async function Ci(t){xi(t).Nr()}async function ji(t){const e=xi(t);for(const n of t.jr)e.Sr(n.mutations)}async function Li(t,e,n){const r=t.jr.shift(),i=dr.from(r,e,n);await Ti(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ii(t)}async function Ri(t,e){e&&xi(t).Vr&&await async function(t,e){if(n=e.code,Fe(n)&&n!==_.ABORTED){const n=t.jr.shift();xi(t).dr(),await Ti(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await Ii(t)}var n}(t,e),ki(t)&&Ni(t)}async function Di(t,e){const n=b(t);e?(n.Wr.delete(2),await li(n)):e||(n.Wr.add(2),await hi(n),n.Hr.set("Unknown"))}function Pi(t){return t.Yr||(t.Yr=function(t,e,n){const r=b(t);return r.$r(),new si(e,r.sr,r.credentials,r.N,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Si:_i.bind(null,t),Ci:wi.bind(null,t),Rr:Ei.bind(null,t)}),t.Gr.push(async e=>{e?(t.Yr.dr(),vi(t)?gi(t):t.Hr.set("Unknown")):(await t.Yr.stop(),bi(t))})),t.Yr}function xi(t){return t.Xr||(t.Xr=function(t,e,n){const r=b(t);return r.$r(),new oi(e,r.sr,r.credentials,r.N,n)}(t.datastore,t.asyncQueue,{Si:Ci.bind(null,t),Ci:Ri.bind(null,t),Cr:ji.bind(null,t),Dr:Li.bind(null,t)}),t.Gr.push(async e=>{e?(t.Xr.dr(),await Ii(t)):(await t.Xr.stop(),t.jr.length>0&&(d("RemoteStore",`Stopping write stream with ${t.jr.length} pending writes`),t.jr=[]))})),t.Xr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Mi{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new E,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Mi(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new w(_.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fi(t,e){if(p("AsyncQueue",`${e}: ${t}`),hr(t))return new w(_.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t){this.comparator=t?(e,n)=>t(e,n)||tt.comparator(e.key,n.key):(t,e)=>tt.comparator(t.key,e.key),this.keyedMap=Ke(),this.sortedSet=new Ve(this.comparator)}static emptySet(t){return new Ui(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ui))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Ui;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.Zr=new Ve(tt.comparator)}track(t){const e=t.doc.key,n=this.Zr.get(e);n?0!==t.type&&3===n.type?this.Zr=this.Zr.insert(e,t):3===t.type&&1!==n.type?this.Zr=this.Zr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Zr=this.Zr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Zr=this.Zr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Zr=this.Zr.remove(e):1===t.type&&2===n.type?this.Zr=this.Zr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Zr=this.Zr.insert(e,{type:2,doc:t.doc}):v():this.Zr=this.Zr.insert(e,t)}eo(){const t=[];return this.Zr.inorderTraversal((e,n)=>{t.push(n)}),t}}class Bi{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new Bi(t,e,Ui.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Qt(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(){this.no=void 0,this.listeners=[]}}class Gi{constructor(){this.queries=new Er(t=>Jt(t),Qt),this.onlineState="Unknown",this.so=new Set}}async function qi(t,e){const n=b(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new $i),i)try{s.no=await n.onListen(r)}catch(t){const n=Fi(t,`Initialization of query '${Zt(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.io(n.onlineState),s.no&&e.ro(s.no)&&Ki(n)}async function Hi(t,e){const n=b(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Wi(t,e){const n=b(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.ro(i)&&(r=!0);e.no=i}}r&&Ki(n)}function zi(t,e,n){const r=b(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Ki(t){t.so.forEach(t=>{t.next()})}class Xi{constructor(t,e,n){this.query=t,this.oo=e,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=n||{}}ro(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Bi(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.co?this.uo(t)&&(this.oo.next(t),e=!0):this.ho(t,this.onlineState)&&(this.lo(t),e=!0),this.ao=t,e}onError(t){this.oo.error(t)}io(t){this.onlineState=t;let e=!1;return this.ao&&!this.co&&this.ho(this.ao,t)&&(this.lo(this.ao),e=!0),e}ho(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.fo||!n)&&(!t.docs.isEmpty()||"Offline"===e)}uo(t){if(t.docChanges.length>0)return!0;const e=this.ao&&this.ao.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}lo(t){t=Bi.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.co=!0,this.oo.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yi{constructor(t){this.key=t}}class Qi{constructor(t){this.key=t}}class Ji{constructor(t,e){this.query=t,this.po=e,this.To=null,this.current=!1,this.Eo=Je(),this.mutatedKeys=Je(),this.Io=ee(t),this.Ao=new Ui(this.Io)}get Ro(){return this.po}bo(t,e){const n=e?e.Po:new Vi,r=e?e.Ao:this.Ao;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Gt(this.query)&&r.size===this.query.limit?r.last():null,c=qt(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),l=te(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.vo(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.Io(l,a)>0||c&&this.Io(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(s=s.add(l),i=f?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))}),Gt(this.query)||qt(this.query))for(;s.size>this.query.limit;){const t=Gt(this.query)?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Ao:s,Po:n,Ln:o,mutatedKeys:i}}vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Ao;this.Ao=t.Ao,this.mutatedKeys=t.mutatedKeys;const i=t.Po.eo();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Io(t.doc,e.doc)),this.Vo(n);const s=e?this.So():[],o=0===this.Eo.size&&this.current?1:0,a=o!==this.To;return this.To=o,0!==i.length||a?{snapshot:new Bi(this.query,t.Ao,r,i,t.mutatedKeys,0===o,a,!1),Do:s}:{Do:s}}io(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new Vi,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(t){return!this.po.has(t)&&!!this.Ao.has(t)&&!this.Ao.get(t).hasLocalMutations}Vo(t){t&&(t.addedDocuments.forEach(t=>this.po=this.po.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.po=this.po.delete(t)),this.current=t.current)}So(){if(!this.current)return[];const t=this.Eo;this.Eo=Je(),this.Ao.forEach(t=>{this.Co(t.key)&&(this.Eo=this.Eo.add(t.key))});const e=[];return t.forEach(t=>{this.Eo.has(t)||e.push(new Qi(t))}),this.Eo.forEach(n=>{t.has(n)||e.push(new Yi(n))}),e}No(t){this.po=t.Gn,this.Eo=Je();const e=this.bo(t.documents);return this.applyChanges(e,!0)}xo(){return Bi.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,0===this.To)}}class Zi{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class ts{constructor(t){this.key=t,this.ko=!1}}class es{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.$o={},this.Oo=new Er(t=>Jt(t),Qt),this.Fo=new Map,this.Mo=new Set,this.Lo=new Ve(tt.comparator),this.Bo=new Map,this.Uo=new Ur,this.qo={},this.Ko=new Map,this.jo=_r.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return!0===this.Qo}}async function ns(t,e){const n=ws(t);let r,i;const s=n.Oo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const t=await Pr(n.localStore,Xt(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await rs(n,e,r,"current"===s),n.isPrimaryClient&&fi(n.remoteStore,t)}return i}async function rs(t,e,n,r){t.Wo=(e,n,r)=>async function(t,e,n,r){let i=e.view.bo(n);i.Ln&&(i=await Mr(t.localStore,e.query,!1).then(({documents:t})=>e.view.bo(t,i)));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return ms(t,e.targetId,o.Do),o.snapshot}(t,e,n,r);const i=await Mr(t.localStore,e,!0),s=new Ji(e,i.Gn),o=s.bo(i.documents),a=nn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);ms(t,n,c.Do);const u=new Zi(e,n,s);return t.Oo.set(e,u),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),c.snapshot}async function is(t,e){const n=b(t),r=n.Oo.get(e),i=n.Fo.get(r.targetId);if(i.length>1)return n.Fo.set(r.targetId,i.filter(t=>!Qt(t,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await xr(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),di(n.remoteStore,r.targetId),ds(n,r.targetId)}).catch(wr)):(ds(n,r.targetId),await xr(n.localStore,r.targetId,!0))}async function ss(t,e,n){const r=Es(t);try{const t=await function(t,e){const n=b(t),r=R.now(),i=e.reduce((t,e)=>t.add(e.key),Je());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>n.Qn.Pn(t,i).next(i=>{s=i;const o=[];for(const t of e){const e=Ie(t,s.get(t.key));null!=e&&o.push(new Ne(t.key,e,gt(e.value.mapValue),_e.exists(!0)))}return n.In.addMutationBatch(t,r,o,e)})).then(t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.qo[t.currentUser.toKey()];r||(r=new Ve(j)),r=r.insert(e,n),t.qo[t.currentUser.toKey()]=r}(r,t.batchId,n),await ys(r,t.changes),await Ii(r.remoteStore)}catch(t){const e=Fi(t,"Failed to persist write");n.reject(e)}}async function os(t,e){const n=b(t);try{const t=await Lr(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Bo.get(e);r&&(y(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.ko=!0:t.modifiedDocuments.size>0?y(r.ko):t.removedDocuments.size>0&&(y(r.ko),r.ko=!1))}),await ys(n,t,e)}catch(t){await wr(t)}}function as(t,e,n){const r=b(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Oo.forEach((n,r)=>{const i=r.view.io(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=b(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const i of n.listeners)i.io(e)&&(r=!0)}),r&&Ki(n)}(r.eventManager,e),t.length&&r.$o.Rr(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function cs(t,e,n){const r=b(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Bo.get(e),s=i&&i.key;if(s){let t=new Ve(tt.comparator);t=t.insert(s,vt.newNoDocument(s,D.min()));const n=Je().add(s),i=new en(D.min(),new Map,new Ge(j),t,n);await os(r,i),r.Lo=r.Lo.remove(s),r.Bo.delete(e),vs(r)}else await xr(r.localStore,e,!1).then(()=>ds(r,e,n)).catch(wr)}async function us(t,e){const n=b(t),r=e.batch.batchId;try{const t=await Cr(n.localStore,e);fs(n,r,null),hs(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ys(n,t)}catch(t){await wr(t)}}async function ls(t,e,n){const r=b(t);try{const t=await function(t,e){const n=b(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.In.lookupMutationBatch(t,e).next(e=>(y(null!==e),r=e.keys(),n.In.removeMutationBatch(t,e))).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.Pn(t,r))})}(r.localStore,e);fs(r,e,n),hs(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ys(r,t)}catch(n){await wr(n)}}function hs(t,e){(t.Ko.get(e)||[]).forEach(t=>{t.resolve()}),t.Ko.delete(e)}function fs(t,e,n){const r=b(t);let i=r.qo[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.qo[r.currentUser.toKey()]=i}}function ds(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fo.get(e))t.Oo.delete(r),n&&t.$o.Go(r,n);t.Fo.delete(e),t.isPrimaryClient&&t.Uo.cs(e).forEach(e=>{t.Uo.containsKey(e)||ps(t,e)})}function ps(t,e){t.Mo.delete(e.path.canonicalString());const n=t.Lo.get(e);null!==n&&(di(t.remoteStore,n),t.Lo=t.Lo.remove(e),t.Bo.delete(n),vs(t))}function ms(t,e,n){for(const r of n)r instanceof Yi?(t.Uo.addReference(r.key,e),gs(t,r)):r instanceof Qi?(d("SyncEngine","Document no longer in limbo: "+r.key),t.Uo.removeReference(r.key,e),t.Uo.containsKey(r.key)||ps(t,r.key)):v()}function gs(t,e){const n=e.key,r=n.path.canonicalString();t.Lo.get(n)||t.Mo.has(r)||(d("SyncEngine","New document in limbo: "+n),t.Mo.add(r),vs(t))}function vs(t){for(;t.Mo.size>0&&t.Lo.size<t.maxConcurrentLimboResolutions;){const e=t.Mo.values().next().value;t.Mo.delete(e);const n=new tt(U.fromString(e)),r=t.jo.next();t.Bo.set(r,new ts(n)),t.Lo=t.Lo.insert(n,r),fi(t.remoteStore,new pr(Xt($t(n.path)),r,2,k.T))}}async function ys(t,e,n){const r=b(t),i=[],s=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach((t,a)=>{o.push(r.Wo(a,e,n).then(t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Ir.kn(a.targetId,t);s.push(e)}}))}),await Promise.all(o),r.$o.Rr(i),await async function(t,e){const n=b(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>lr.forEach(e,e=>lr.forEach(e.Nn,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>lr.forEach(e.xn,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!hr(t))throw t;d("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Un.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(t,i)}}}(r.localStore,s))}async function bs(t,e){const n=b(t);if(!n.currentUser.isEqual(e)){d("SyncEngine","User change. New user:",e.toKey());const t=await Nr(n.localStore,e);n.currentUser=e,function(t,e){t.Ko.forEach(t=>{t.forEach(t=>{t.reject(new w(_.CANCELLED,e))})}),t.Ko.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await ys(n,t.Wn)}}function _s(t,e){const n=b(t),r=n.Bo.get(e);if(r&&r.ko)return Je().add(r.key);{let t=Je();const r=n.Fo.get(e);if(!r)return t;for(const e of r){const r=n.Oo.get(e);t=t.unionWith(r.view.Ro)}return t}}function ws(t){const e=b(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=os.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_s.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cs.bind(null,e),e.$o.Rr=Wi.bind(null,e.eventManager),e.$o.Go=zi.bind(null,e.eventManager),e}function Es(t){const e=b(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=us.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ls.bind(null,e),e}class Os{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=ni(t.databaseInfo.databaseId),this.sharedClientState=this.Ho(t),this.persistence=this.Jo(t),await this.persistence.start(),this.gcScheduler=this.Yo(t),this.localStore=this.Xo(t)}Yo(t){return null}Xo(t){return kr(this.persistence,new Sr,t.initialUser,this.N)}Jo(t){return new Hr(zr.Ns,this.N)}Ho(t){return new Xr}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ts{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>as(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=bs.bind(null,this.syncEngine),await Di(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Gi}createDatastore(t){const e=ni(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new ti(r));var r;return function(t,e,n){return new ai(t,e,n)}(t.credentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>as(this.syncEngine,t,0),s=Qr.bt()?new Qr:new Yr,new ui(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new es(t,e,n,r,i,s);return o&&(a.Qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=b(t);d("RemoteStore","RemoteStore shutting down."),e.Wr.add(5),await hi(e),e.zr.shutdown(),e.Hr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Is{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.tc(this.observer.next,t)}error(t){this.observer.error?this.tc(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}ec(){this.muted=!0}tc(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ss{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new w(_.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(t,e){const n=b(t),r=Tn(n.N)+"/documents",i={documents:e.map(t=>_n(n.N,t))},s=await n.Ki("BatchGetDocuments",r,i),o=new Map;s.forEach(t=>{const e=An(n.N,t);o.set(e.key.toString(),e)});const a=[];return e.forEach(t=>{const e=o.get(t.toString());y(!!e),a.push(e)}),a}(this.datastore,t);return e.forEach(t=>this.recordVersion(t)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t){this.lastWriteError=t}this.writtenDocs.add(t.toString())}delete(t){this.write(new Re(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((t,e)=>{const n=tt.fromPath(e);this.mutations.push(new De(n,this.precondition(n)))}),await async function(t,e){const n=b(t),r=Tn(n.N)+"/documents",i={writes:e.map(t=>Nn(n.N,t))};await n.Li("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw v();e=D.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new w(_.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?_e.updateTime(e):_e.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(D.min()))throw new w(_.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return _e.updateTime(e)}return _e.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(t,e,n,r){this.asyncQueue=t,this.datastore=e,this.updateFunction=n,this.deferred=r,this.hc=5,this.ar=new ri(this.asyncQueue,"transaction_retry")}run(){this.hc-=1,this.lc()}lc(){this.ar.Xi(async()=>{const t=new Ss(this.datastore),e=this.fc(t);e&&e.then(e=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(e)}).catch(t=>{this.dc(t)}))}).catch(t=>{this.dc(t)})})}fc(t){try{const e=this.updateFunction(t);return!Q(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}dc(t){this.hc>0&&this.wc(t)?(this.hc-=1,this.asyncQueue.enqueueAndForget(()=>(this.lc(),Promise.resolve()))):this.deferred.reject(t)}wc(t){if("FirebaseError"===t.name){const e=t.code;return"aborted"===e||"failed-precondition"===e||!Fe(e)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=u.UNAUTHENTICATED,this.clientId=C.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,async t=>{d("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new E;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const n=Fi(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Ns(t,e){t.asyncQueue.verifyOperationInProgress(),d("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await Nr(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Cs(t,e){t.asyncQueue.verifyOperationInProgress();const n=await js(t);d("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>async function(t,e){const n=b(t);n.asyncQueue.verifyOperationInProgress(),d("RemoteStore","RemoteStore received new credentials");const r=yi(n);n.Wr.add(3),await hi(n),r&&n.Hr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Wr.delete(3),await li(n)}(e.remoteStore,t)),t.onlineComponents=e}async function js(t){return t.offlineComponents||(d("FirestoreClient","Using default OfflineComponentProvider"),await Ns(t,new Os)),t.offlineComponents}async function Ls(t){return t.onlineComponents||(d("FirestoreClient","Using default OnlineComponentProvider"),await Cs(t,new Ts)),t.onlineComponents}function Rs(t){return Ls(t).then(t=>t.syncEngine)}async function Ds(t){const e=await Ls(t),n=e.eventManager;return n.onListen=ns.bind(null,e.syncEngine),n.onUnlisten=is.bind(null,e.syncEngine),n}function Ps(t,e,n={}){const r=new E;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const s=new Is({next:s=>{e.enqueueAndForget(()=>Hi(t,o));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new w(_.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new w(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new Xi($t(n.path),s,{includeMetadataChanges:!0,fo:!0});return qi(t,o)}(await Ds(t),t.asyncQueue,e,n,r)),r.promise}function xs(t,e){const n=new E;return t.asyncQueue.enqueueAndForget(async()=>{const r=await function(t){return Ls(t).then(t=>t.datastore)}(t);new As(t.asyncQueue,r,e,n).run()}),n.promise}class Ms{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Fs{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Fs&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t,e,n){if(!n)throw new w(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Bs(t,e,n,r){if(!0===e&&!0===r)throw new w(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $s(t){if(!tt.isDocumentKey(t))throw new w(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gs(t){if(tt.isDocumentKey(t))throw new w(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function qs(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":v()}function Hs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new w(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qs(t);throw new w(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Ws(t,e){if(e<=0)throw new w(_.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new w(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new w(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Bs("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zs({}),this._settingsFrozen=!1,t instanceof Fs?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new w(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fs(t.options.projectId)}(t))}get app(){if(!this._app)throw new w(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new w(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zs(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new T;switch(t.type){case"gapi":const e=t.client;return y(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new A(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new w(_.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Us.get(t);e&&(d("ComponentProvider","Removing Datastore"),Us.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xs{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qs(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Xs(this.firestore,t,this._key)}}class Ys{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Ys(this.firestore,t,this._query)}}class Qs extends Ys{constructor(t,e,n){super(t,e,$t(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Xs(this.firestore,null,new tt(t))}withConverter(t){return new Qs(this.firestore,t,this._path)}}function Js(t,e,...n){if(t=Object(o["i"])(t),Vs("collection","path",e),t instanceof Ks){const r=U.fromString(e,...n);return Gs(r),new Qs(t,null,r)}{if(!(t instanceof Xs||t instanceof Qs))throw new w(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(U.fromString(e,...n));return Gs(r),new Qs(t.firestore,null,r)}}function Zs(t,e,...n){if(t=Object(o["i"])(t),1===arguments.length&&(e=C.I()),Vs("doc","path",e),t instanceof Ks){const r=U.fromString(e,...n);return $s(r),new Xs(t,null,new tt(r))}{if(!(t instanceof Xs||t instanceof Qs))throw new w(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(U.fromString(e,...n));return $s(r),new Xs(t.firestore,t instanceof Qs?t.converter:null,new tt(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class to{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new ri(this,"async_queue_retry"),this.Rc=()=>{const t=ei();t&&d("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ar.tr()};const t=ei();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.bc(),this.Pc(t)}enterRestrictedMode(t){if(!this.gc){this.gc=!0,this.Ic=t||!1;const e=ei();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Rc)}}enqueue(t){if(this.bc(),this.gc)return new Promise(()=>{});const e=new E;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.mc.push(t),this.vc()))}async vc(){if(0!==this.mc.length){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(t){if(!hr(t))throw t;d("AsyncQueue","Operation failed with retryable error: "+t)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(t){const e=this._c.then(()=>(this.Ec=!0,t().catch(t=>{this.Tc=t,this.Ec=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw p("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.Ec=!1,t))));return this._c=e,e}enqueueAfterDelay(t,e,n){this.bc(),this.Ac.indexOf(t)>-1&&(e=0);const r=Mi.createAndSchedule(this,t,e,n,t=>this.Vc(t));return this.yc.push(r),r}bc(){this.Tc&&v()}verifyOperationInProgress(){}async Sc(){let t;do{t=this._c,await t}while(t!==this._c)}Dc(t){for(const e of this.yc)if(e.timerId===t)return!0;return!1}Cc(t){return this.Sc().then(()=>{this.yc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.yc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Sc()})}Nc(t){this.Ac.push(t)}Vc(t){const e=this.yc.indexOf(t);this.yc.splice(e,1)}}function eo(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class no extends Ks{constructor(t,e){super(t,e),this.type="firestore",this._queue=new to,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||so(this),this._firestoreClient.terminate()}}function ro(t=Object(r["e"])()){return Object(r["b"])(t,"firestore").getImmediate()}function io(t){return t._firestoreClient||so(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function so(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Ms(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ks(t._credentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oo{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new w(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new B(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ao{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ao(G.fromBase64String(t))}catch(t){throw new w(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new ao(G.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new w(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new w(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=/^__.*__$/;class ho{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Ne(t,this.data,this.fieldMask,e,this.fieldTransforms):new ke(t,this.data,e,this.fieldTransforms)}}class fo{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Ne(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function po(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class mo{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.N=n,this.ignoreUndefinedProperties=r,void 0===i&&this.xc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(t){return new mo(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.$c({path:n,Fc:!1});return r.Mc(t),r}Lc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.$c({path:n,Fc:!1});return r.xc(),r}Bc(t){return this.$c({path:void 0,Fc:!0})}Uc(t){return Co(t,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.Mc(this.path.get(t))}Mc(t){if(0===t.length)throw this.Uc("Document fields must not be empty");if(po(this.kc)&&lo.test(t))throw this.Uc('Document fields cannot begin and end with "__"')}}class go{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.N=n||ni(t)}jc(t,e,n,r=!1){return new mo({kc:t,methodName:e,Kc:n,path:B.emptyPath(),Fc:!1,qc:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function vo(t){const e=t._freezeSettings(),n=ni(t._databaseId);return new go(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yo(t,e,n,r,i,s={}){const o=t.jc(s.merge||s.mergeFields?2:0,e,n,i);So("Data must be an object, but it was:",o,r);const a=To(r,o);let c,u;if(s.merge)c=new $(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Ao(e,r,n);if(!o.contains(i))throw new w(_.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);jo(t,i)||t.push(i)}c=new $(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new ho(new mt(a),c,u)}class bo extends co{_toFieldTransform(t){if(2!==t.kc)throw 1===t.kc?t.Uc(this._methodName+"() can only appear at the top level of your update data"):t.Uc(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof bo}}function _o(t,e,n,r){const i=t.jc(1,e,n);So("Data must be an object, but it was:",i,r);const s=[],a=mt.empty();x(r,(t,r)=>{const c=No(e,t,n);r=Object(o["i"])(r);const u=i.Lc(c);if(r instanceof bo)s.push(c);else{const t=Oo(r,u);null!=t&&(s.push(c),a.set(c,t))}});const c=new $(s);return new fo(a,c,i.fieldTransforms)}function wo(t,e,n,r,i,s){const a=t.jc(1,e,n),c=[Ao(e,r,n)],u=[i];if(s.length%2!=0)throw new w(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<s.length;o+=2)c.push(Ao(e,s[o])),u.push(s[o+1]);const l=[],h=mt.empty();for(let d=c.length-1;d>=0;--d)if(!jo(l,c[d])){const t=c[d];let e=u[d];e=Object(o["i"])(e);const n=a.Lc(t);if(e instanceof bo)l.push(t);else{const r=Oo(e,n);null!=r&&(l.push(t),h.set(t,r))}}const f=new $(l);return new fo(h,f,a.fieldTransforms)}function Eo(t,e,n,r=!1){return Oo(n,t.jc(r?4:3,e))}function Oo(t,e){if(Io(t=Object(o["i"])(t)))return So("Unsupported field value:",e,t),To(t,e);if(t instanceof co)return function(t,e){if(!po(e.kc))throw e.Uc(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.Uc(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&4!==e.kc)throw e.Uc("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Oo(i,e.Bc(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o["i"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return se(e.N,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=R.fromDate(t);return{timestampValue:pn(e.N,n)}}if(t instanceof R){const n=new R(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:pn(e.N,n)}}if(t instanceof uo)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof ao)return{bytesValue:mn(e.N,t._byteString)};if(t instanceof Xs){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Uc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:yn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Uc("Unsupported field value: "+qs(t))}(t,e)}function To(t,e){const n={};return M(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):x(t,(t,r)=>{const i=Oo(r,e.Oc(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function Io(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof R||t instanceof uo||t instanceof ao||t instanceof Xs||t instanceof co)}function So(t,e,n){if(!Io(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=qs(n);throw"an object"===r?e.Uc(t+" a custom object"):e.Uc(t+" "+r)}}function Ao(t,e,n){if((e=Object(o["i"])(e))instanceof oo)return e._internalPath;if("string"==typeof e)return No(t,e);throw Co("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const ko=new RegExp("[~\\*/\\[\\]]");function No(t,e,n){if(e.search(ko)>=0)throw Co(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new oo(...e.split("."))._internalPath}catch(r){throw Co(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Co(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+r),o&&(c+=" in document "+i),c+=")"),new w(_.INVALID_ARGUMENT,a+t+c)}function jo(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Xs(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Ro(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Do("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Ro extends Lo{data(){return super.data()}}function Do(t,e){return"string"==typeof e?No(t,e):e instanceof oo?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class xo extends Lo{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Mo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Do("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Mo extends xo{data(t={}){return super.data(t)}}class Fo{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Po(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Mo(this._firestore,this._userDataWriter,n.key,n,new Po(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new w(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new Mo(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Po(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new Mo(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Po(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:Uo(e.type),doc:r,oldIndex:i,newIndex:s}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Uo(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vo(t){if(qt(t)&&0===t.explicitOrderBy.length)throw new w(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bo{}function $o(t,...e){for(const n of e)t=n._apply(t);return t}class Go extends Bo{constructor(t,e,n){super(),this.Gc=t,this.zc=e,this.Hc=n,this.type="where"}_apply(t){const e=vo(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new w(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on FieldPath.documentId().`);if("in"===s||"not-in"===s){Yo(o,s);const e=[];for(const n of o)e.push(Xo(r,t,n));a={arrayValue:{values:e}}}else a=Xo(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Yo(o,s),a=Eo(n,e,o,"in"===s||"not-in"===s);const c=Tt.create(i,s,a);return function(t,e){if(e.v()){const n=Wt(t);if(null!==n&&!n.isEqual(e.field))throw new w(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=Ht(t);null!==r&&Qo(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new w(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new w(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.Gc,this.zc,this.Hc);return new Ys(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Vt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function qo(t,e,n){const r=e,i=Do("where",t);return new Go(i,r,n)}class Ho extends Bo{constructor(t,e){super(),this.Gc=t,this.Jc=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new w(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new w(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new xt(e,n);return function(t,e){if(null===Ht(t)){const n=Wt(t);null!==n&&Qo(t,n,e.field)}}(t,r),r}(t._query,this.Gc,this.Jc);return new Ys(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Vt(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Wo(t,e="asc"){const n=e,r=Do("orderBy",t);return new Ho(r,n)}class zo extends Bo{constructor(t,e,n){super(),this.type=t,this.Yc=e,this.Xc=n}_apply(t){return new Ys(t.firestore,t.converter,Yt(t._query,this.Yc,this.Xc))}}function Ko(t){return Ws("limit",t),new zo("limit",t,"F")}function Xo(t,e,n){if("string"==typeof(n=Object(o["i"])(n))){if(""===n)throw new w(_.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!zt(e)&&-1!==n.indexOf("/"))throw new w(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(U.fromString(n));if(!tt.isDocumentKey(r))throw new w(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ct(t,new tt(r))}if(n instanceof Xs)return ct(t,n._key);throw new w(_.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${qs(n)}.`)}function Yo(t,e){if(!Array.isArray(t)||0===t.length)throw new w(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new w(_.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Qo(t,e,n){if(!n.isEqual(e))throw new w(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{convertValue(t,e="none"){switch(et(t)){case 0:return null;case 1:return t.booleanValue;case 2:return W(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(z(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw v()}}convertObject(t,e){const n={};return x(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new uo(W(t.latitude),W(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=X(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Y(t));default:return null}}convertTimestamp(t){const e=H(t);return new R(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=U.fromString(t);y(Hn(n));const r=new Fs(n.get(1),n.get(3)),i=new tt(n.popFirst(5));return r.isEqual(e)||p(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class ta extends Jo{constructor(t){super(),this.firestore=t}convertBytes(t){return new ao(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Xs(this.firestore,null,e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(t,e){if((t=Object(o["i"])(t)).firestore!==e)throw new w(_.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(t){t=Hs(t,Xs);const e=Hs(t.firestore,no);return Ps(io(e),t._key).then(n=>aa(e,t,n))}class ra extends Jo{constructor(t){super(),this.firestore=t}convertBytes(t){return new ao(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Xs(this.firestore,null,e)}}function ia(t,e){const n=Hs(t.firestore,no),r=Zs(t),i=Zo(t.converter,e);return oa(n,[yo(vo(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,_e.exists(!1))]).then(()=>r)}function sa(t,...e){var n,r,i;t=Object(o["i"])(t);let s={includeMetadataChanges:!1},a=0;"object"!=typeof e[a]||eo(e[a])||(s=e[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges};if(eo(e[a])){const t=e[a];e[a]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[a+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[a+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let u,l,h;if(t instanceof Xs)l=Hs(t.firestore,no),h=$t(t._key.path),u={next:n=>{e[a]&&e[a](aa(l,t,n))},error:e[a+1],complete:e[a+2]};else{const n=Hs(t,Ys);l=Hs(n.firestore,no),h=n._query;const r=new ra(l);u={next:t=>{e[a]&&e[a](new Fo(l,r,n,t))},error:e[a+1],complete:e[a+2]},Vo(t._query)}return function(t,e,n,r){const i=new Is(r),s=new Xi(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>qi(await Ds(t),s)),()=>{i.ec(),t.asyncQueue.enqueueAndForget(async()=>Hi(await Ds(t),s))}}(io(l),h,c,u)}function oa(t,e){return function(t,e){const n=new E;return t.asyncQueue.enqueueAndForget(async()=>ss(await Rs(t),e,n)),n.promise}(io(t),e)}function aa(t,e,n){const r=n.docs.get(e._key),i=new ra(t);return new xo(t,i,e._key,r,new Po(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca extends class{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=vo(t)}get(t){const e=ea(t,this._firestore),n=new ta(this._firestore);return this._transaction.lookup([e._key]).then(t=>{if(!t||1!==t.length)return v();const r=t[0];if(r.isFoundDocument())return new Lo(this._firestore,n,r.key,r,e.converter);if(r.isNoDocument())return new Lo(this._firestore,n,e._key,null,e.converter);throw v()})}set(t,e,n){const r=ea(t,this._firestore),i=Zo(r.converter,e,n),s=yo(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(t,e,n,...r){const i=ea(t,this._firestore);let s;return s="string"==typeof(e=Object(o["i"])(e))||e instanceof oo?wo(this._dataReader,"Transaction.update",i._key,e,n,r):_o(this._dataReader,"Transaction.update",i._key,e),this._transaction.update(i._key,s),this}delete(t){const e=ea(t,this._firestore);return this._transaction.delete(e._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=ea(t,this._firestore),n=new ra(this._firestore);return super.get(t).then(t=>new xo(this._firestore,n,e._key,t._document,new Po(!1,!1),e.converter))}}function ua(t,e){return xs(io(t=Hs(t,no)),n=>e(new ca(t,n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){l=t}(r["a"]),Object(r["c"])(new i["a"]("firestore",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=new no(r,new I(t.getProvider("auth-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i},"PUBLIC")),Object(r["g"])(c,"3.3.1",t),Object(r["g"])(c,"3.3.1","esm2017")}()}).call(this,n("4362"))},"0b42":function(t,e,n){var r=n("da84"),i=n("e8b5"),s=n("68ee"),o=n("861d"),a=n("b622"),c=a("species"),u=r.Array;t.exports=function(t){var e;return i(t)&&(e=t.constructor,s(e)&&(e===u||i(e.prototype))?e=void 0:o(e)&&(e=e[c],null===e&&(e=void 0))),void 0===e?u:e}},"0cfb":function(t,e,n){var r=n("83ab"),i=n("d039"),s=n("cc12");t.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},"0d03":function(t,e,n){var r=n("e330"),i=n("6eeb"),s=Date.prototype,o="Invalid Date",a="toString",c=r(s[a]),u=r(s.getTime);String(new Date(NaN))!=o&&i(s,a,(function(){var t=u(this);return t===t?c(this):o}))},"0d51":function(t,e,n){var r=n("da84"),i=r.String;t.exports=function(t){try{return i(t)}catch(e){return"Object"}}},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),s=n("785a"),o=n("17c2"),a=n("9112"),c=function(t){if(t&&t.forEach!==o)try{a(t,"forEach",o)}catch(e){t.forEach=o}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(s)},1626:function(t,e){t.exports=function(t){return"function"==typeof t}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),s=i("forEach");t.exports=s?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"19aa":function(t,e,n){var r=n("da84"),i=n("3a9b"),s=r.TypeError;t.exports=function(t,e){if(i(e,t))return t;throw s("Incorrect invocation")}},"1a2d":function(t,e,n){var r=n("e330"),i=n("7b0b"),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c7e":function(t,e,n){var r=n("b622"),i=r("iterator"),s=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){s=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!s)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(c){}return n}},"1cdc":function(t,e,n){var r=n("342f");t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(t,e,n){var r=n("da84"),i=r.TypeError;t.exports=function(t){if(void 0==t)throw i("Can't call method on "+t);return t}},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d3b7");function r(t,e,n,r,i,s,o){try{var a=t[s](o),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,s){var o=t.apply(e,n);function a(t){r(o,i,s,a,c,"next",t)}function c(t){r(o,i,s,a,c,"throw",t)}a(void 0)}))}}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),s=n("2d00"),o=i("species");t.exports=function(t){return s>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1fd5":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return O})),n.d(e,"c",(function(){return E})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return L})),n.d(e,"g",(function(){return A})),n.d(e,"h",(function(){return j})),n.d(e,"i",(function(){return x})),n.d(e,"j",(function(){return h})),n.d(e,"k",(function(){return p})),n.d(e,"l",(function(){return g})),n.d(e,"m",(function(){return S})),n.d(e,"n",(function(){return v})),n.d(e,"o",(function(){return _})),n.d(e,"p",(function(){return f})),n.d(e,"q",(function(){return m})),n.d(e,"r",(function(){return b})),n.d(e,"s",(function(){return y})),n.d(e,"t",(function(){return N})),n.d(e,"u",(function(){return C}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,s||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=r(t);return s.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")},c=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function f(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())}function d(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function p(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function m(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function g(){return h().indexOf("Electron/")>=0}function v(){const t=h();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function y(){return h().indexOf("MSAppHost/")>=0}function b(){return!d()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _(){return"object"===typeof indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const w="FirebaseError";class E extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=w,Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?T(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new E(r,o,n);return a}}function T(t,e){return t.replace(I,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const I=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function A(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(k(n)&&k(s)){if(!A(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function k(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function C(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach(t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}}),e}function j(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e){const n=new R(t,e);return n.subscribe.bind(n)}class R{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=D(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=P),void 0===r.error&&(r.error=P),void 0===r.complete&&(r.complete=P);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}}),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function D(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function P(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function x(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},2266:function(t,e,n){var r=n("da84"),i=n("0366"),s=n("c65b"),o=n("825a"),a=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),h=n("9a1f"),f=n("35a1"),d=n("2a62"),p=r.TypeError,m=function(t,e){this.stopped=t,this.result=e},g=m.prototype;t.exports=function(t,e,n){var r,v,y,b,_,w,E,O=n&&n.that,T=!(!n||!n.AS_ENTRIES),I=!(!n||!n.IS_ITERATOR),S=!(!n||!n.INTERRUPTED),A=i(e,O),k=function(t){return r&&d(r,"normal",t),new m(!0,t)},N=function(t){return T?(o(t),S?A(t[0],t[1],k):A(t[0],t[1])):S?A(t,k):A(t)};if(I)r=t;else{if(v=f(t),!v)throw p(a(t)+" is not iterable");if(c(v)){for(y=0,b=u(t);b>y;y++)if(_=N(t[y]),_&&l(g,_))return _;return new m(!1)}r=h(t,v)}w=r.next;while(!(E=s(w,r)).done){try{_=N(E.value)}catch(C){d(r,"throw",C)}if("object"==typeof _&&_&&l(g,_))return _}return new m(!1)}},"22e5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u}));var r=n("1fd5");class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r["a"];if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(t,e,n){var r=n("5926"),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},"23e7":function(t,e,n){var r=n("da84"),i=n("06cf").f,s=n("9112"),o=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");t.exports=function(t,e){var n,l,h,f,d,p,m=t.target,g=t.global,v=t.stat;if(l=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in e){if(d=e[h],t.noTargetGet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(g?h:m+(v?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&s(d,"sham",!0),o(l,h,d,t)}}},"241c":function(t,e,n){var r=n("ca84"),i=n("7839"),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},"260b":function(t,e,n){"use strict";var r=n("589b");n.d(e,"a",(function(){return r["f"]}));var i="firebase",s="9.5.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["g"])(i,s,"app")},2626:function(t,e,n){"use strict";var r=n("d066"),i=n("9bf2"),s=n("b622"),o=n("83ab"),a=s("species");t.exports=function(t){var e=r(t),n=i.f;o&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},"2a62":function(t,e,n){var r=n("c65b"),i=n("825a"),s=n("dc4a");t.exports=function(t,e,n){var o,a;i(t);try{if(o=s(t,"return"),!o){if("throw"===e)throw n;return n}o=r(o,t)}catch(c){a=!0,o=c}if("throw"===e)throw n;if(a)throw o;return i(o),n}},"2ba4":function(t,e){var n=Function.prototype,r=n.apply,i=n.bind,s=n.call;t.exports="object"==typeof Reflect&&Reflect.apply||(i?s.bind(r):function(){return s.apply(r,arguments)})},"2cf4":function(t,e,n){var r,i,s,o,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),h=n("1a2d"),f=n("d039"),d=n("1be4"),p=n("f36a"),m=n("cc12"),g=n("1cdc"),v=n("605d"),y=a.setImmediate,b=a.clearImmediate,_=a.process,w=a.Dispatch,E=a.Function,O=a.MessageChannel,T=a.String,I=0,S={},A="onreadystatechange";try{r=a.location}catch(L){}var k=function(t){if(h(S,t)){var e=S[t];delete S[t],e()}},N=function(t){return function(){k(t)}},C=function(t){k(t.data)},j=function(t){a.postMessage(T(t),r.protocol+"//"+r.host)};y&&b||(y=function(t){var e=p(arguments,1);return S[++I]=function(){c(l(t)?t:E(t),void 0,e)},i(I),I},b=function(t){delete S[t]},v?i=function(t){_.nextTick(N(t))}:w&&w.now?i=function(t){w.now(N(t))}:O&&!g?(s=new O,o=s.port2,s.port1.onmessage=C,i=u(o.postMessage,o)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!f(j)?(i=j,a.addEventListener("message",C,!1)):i=A in m("script")?function(t){d.appendChild(m("script"))[A]=function(){d.removeChild(this),k(t)}}:function(t){setTimeout(N(t),0)}),t.exports={set:y,clear:b}},"2d00":function(t,e,n){var r,i,s=n("da84"),o=n("342f"),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},"342f":function(t,e,n){var r=n("d066");t.exports=r("navigator","userAgent")||""},"35a1":function(t,e,n){var r=n("f5df"),i=n("dc4a"),s=n("3f8c"),o=n("b622"),a=o("iterator");t.exports=function(t){if(void 0!=t)return i(t,a)||i(t,"@@iterator")||s[r(t)]}},"37e8":function(t,e,n){var r=n("83ab"),i=n("9bf2"),s=n("825a"),o=n("fc6a"),a=n("df75");t.exports=r?Object.defineProperties:function(t,e){s(t);var n,r=o(e),c=a(e),u=c.length,l=0;while(u>l)i.f(t,n=c[l++],r[n]);return t}},"3a9b":function(t,e,n){var r=n("e330");t.exports=r({}.isPrototypeOf)},"3bbe":function(t,e,n){var r=n("da84"),i=n("1626"),s=r.String,o=r.TypeError;t.exports=function(t){if("object"==typeof t||i(t))return t;throw o("Can't set "+s(t)+" as a prototype")}},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,i=n("577e"),s=n("69f3"),o=n("7dd0"),a="String Iterator",c=s.set,u=s.getterFor(a);o(String,"String",(function(t){c(this,{type:a,string:i(t),index:0})}),(function(){var t,e=u(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},"3f4e":function(t,e,n){"use strict";n.d(e,"setupDevtoolsPlugin",(function(){return o}));var r=n("abc5"),i=n("b774"),s=n("f30a");function o(t,e){const n=Object(r["b"])(),o=Object(r["a"])(),a=r["c"]&&t.enableEarlyProxy;if(!o||!n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&a){const r=a?new s["a"](t,o):null,i=n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[];i.push({pluginDescriptor:t,setupFn:e,proxy:r}),r&&e(r.proxiedTarget)}else o.emit(i["b"],t,e)}},"3f8c":function(t,e){t.exports={}},"408a":function(t,e,n){var r=n("e330");t.exports=r(1..valueOf)},4160:function(t,e,n){"use strict";var r=n("23e7"),i=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44ad":function(t,e,n){var r=n("da84"),i=n("e330"),s=n("d039"),o=n("c6b6"),a=r.Object,c=i("".split);t.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c(t,""):a(t)}:a},"44d2":function(t,e,n){var r=n("b622"),i=n("7c73"),s=n("9bf2"),o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:i(null)}),t.exports=function(t){a[o][t]=!0}},"44de":function(t,e,n){var r=n("da84");t.exports=function(t,e){var n=r.console;n&&n.error&&(1==arguments.length?n.error(t):n.error(t,e))}},"47e2":function(t,e,n){"use strict";n.d(e,"a",(function(){return ze}));var r=n("f83d");
/*!
  * message-compiler v9.2.0-beta.22
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const i={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,__EXTEND_POINT__:15};i.EXPECTED_TOKEN,i.INVALID_TOKEN_IN_PLACEHOLDER,i.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i.UNKNOWN_ESCAPE_SEQUENCE,i.INVALID_UNICODE_ESCAPE_SEQUENCE,i.UNBALANCED_CLOSING_BRACE,i.UNTERMINATED_CLOSING_BRACE,i.EMPTY_PLACEHOLDER,i.NOT_ALLOW_NEST_PLACEHOLDER,i.INVALID_LINKED_FORMAT,i.MUST_HAVE_MESSAGES_IN_PLURAL,i.UNEXPECTED_EMPTY_LINKED_MODIFIER,i.UNEXPECTED_EMPTY_LINKED_KEY,i.UNEXPECTED_LEXICAL_ANALYSIS;function s(t,e,n={}){const{domain:r,messages:i,args:s}=n,o=t,a=new SyntaxError(String(o));return a.code=t,e&&(a.location=e),a.domain=r,a}function o(t){throw t}function a(t,e,n){return{line:t,column:e,offset:n}}function c(t,e,n){const r={start:t,end:e};return null!=n&&(r.source=n),r}const u=" ",l="\r",h="\n",f=String.fromCharCode(8232),d=String.fromCharCode(8233);function p(t){const e=t;let n=0,r=1,i=1,s=0;const o=t=>e[t]===l&&e[t+1]===h,a=t=>e[t]===h,c=t=>e[t]===d,u=t=>e[t]===f,p=t=>o(t)||a(t)||c(t)||u(t),m=()=>n,g=()=>r,v=()=>i,y=()=>s,b=t=>o(t)||c(t)||u(t)?h:e[t],_=()=>b(n),w=()=>b(n+s);function E(){return s=0,p(n)&&(r++,i=0),o(n)&&n++,n++,i++,e[n]}function O(){return o(n+s)&&s++,s++,e[n+s]}function T(){n=0,r=1,i=1,s=0}function I(t=0){s=t}function S(){const t=n+s;while(t!==n)E();s=0}return{index:m,line:g,column:v,peekOffset:y,charAt:b,currentChar:_,currentPeek:w,next:E,peek:O,reset:T,resetPeek:I,skipToPeek:S}}const m=void 0,g="'",v="tokenizer";function y(t,e={}){const n=!1!==e.location,r=p(t),o=()=>r.index(),l=()=>a(r.line(),r.column(),r.index()),f=l(),d=o(),y={currentType:14,offset:d,startLoc:f,endLoc:f,lastType:14,lastOffset:d,lastStartLoc:f,lastEndLoc:f,braceNest:0,inLinked:!1,text:""},b=()=>y,{onError:_}=e;function w(t,e,n,...r){const i=b();if(e.column+=n,e.offset+=n,_){const n=c(i.startLoc,e),o=s(t,n,{domain:v,args:r});_(o)}}function E(t,e,r){t.endLoc=l(),t.currentType=e;const i={type:e};return n&&(i.loc=c(t.startLoc,t.endLoc)),null!=r&&(i.value=r),i}const O=t=>E(t,14);function T(t,e){return t.currentChar()===e?(t.next(),e):(w(i.EXPECTED_TOKEN,l(),0,e),"")}function I(t){let e="";while(t.currentPeek()===u||t.currentPeek()===h)e+=t.currentPeek(),t.peek();return e}function S(t){const e=I(t);return t.skipToPeek(),e}function A(t){if(t===m)return!1;const e=t.charCodeAt(0);return e>=97&&e<=122||e>=65&&e<=90||95===e}function k(t){if(t===m)return!1;const e=t.charCodeAt(0);return e>=48&&e<=57}function N(t,e){const{currentType:n}=e;if(2!==n)return!1;I(t);const r=A(t.currentPeek());return t.resetPeek(),r}function C(t,e){const{currentType:n}=e;if(2!==n)return!1;I(t);const r="-"===t.currentPeek()?t.peek():t.currentPeek(),i=k(r);return t.resetPeek(),i}function j(t,e){const{currentType:n}=e;if(2!==n)return!1;I(t);const r=t.currentPeek()===g;return t.resetPeek(),r}function L(t,e){const{currentType:n}=e;if(8!==n)return!1;I(t);const r="."===t.currentPeek();return t.resetPeek(),r}function R(t,e){const{currentType:n}=e;if(9!==n)return!1;I(t);const r=A(t.currentPeek());return t.resetPeek(),r}function D(t,e){const{currentType:n}=e;if(8!==n&&12!==n)return!1;I(t);const r=":"===t.currentPeek();return t.resetPeek(),r}function P(t,e){const{currentType:n}=e;if(10!==n)return!1;const r=()=>{const e=t.currentPeek();return"{"===e?A(t.peek()):!("@"===e||"%"===e||"|"===e||":"===e||"."===e||e===u||!e)&&(e===h?(t.peek(),r()):A(e))},i=r();return t.resetPeek(),i}function x(t){I(t);const e="|"===t.currentPeek();return t.resetPeek(),e}function M(t,e=!0){const n=(e=!1,r="",i=!1)=>{const s=t.currentPeek();return"{"===s?"%"!==r&&e:"@"!==s&&s?"%"===s?(t.peek(),n(e,"%",!0)):"|"===s?!("%"!==r&&!i)||!(r===u||r===h):s===u?(t.peek(),n(!0,u,i)):s!==h||(t.peek(),n(!0,h,i)):"%"===r||e},r=n();return e&&t.resetPeek(),r}function F(t,e){const n=t.currentChar();return n===m?m:e(n)?(t.next(),n):null}function U(t){const e=t=>{const e=t.charCodeAt(0);return e>=97&&e<=122||e>=65&&e<=90||e>=48&&e<=57||95===e||36===e};return F(t,e)}function V(t){const e=t=>{const e=t.charCodeAt(0);return e>=48&&e<=57};return F(t,e)}function B(t){const e=t=>{const e=t.charCodeAt(0);return e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102};return F(t,e)}function $(t){let e="",n="";while(e=V(t))n+=e;return n}function G(t){let e="";while(1){const n=t.currentChar();if("{"===n||"}"===n||"@"===n||"|"===n||!n)break;if("%"===n){if(!M(t))break;e+=n,t.next()}else if(n===u||n===h)if(M(t))e+=n,t.next();else{if(x(t))break;e+=n,t.next()}else e+=n,t.next()}return e}function q(t){S(t);let e="",n="";while(e=U(t))n+=e;return t.currentChar()===m&&w(i.UNTERMINATED_CLOSING_BRACE,l(),0),n}function H(t){S(t);let e="";return"-"===t.currentChar()?(t.next(),e+="-"+$(t)):e+=$(t),t.currentChar()===m&&w(i.UNTERMINATED_CLOSING_BRACE,l(),0),e}function W(t){S(t),T(t,"'");let e="",n="";const r=t=>t!==g&&t!==h;while(e=F(t,r))n+="\\"===e?z(t):e;const s=t.currentChar();return s===h||s===m?(w(i.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,l(),0),s===h&&(t.next(),T(t,"'")),n):(T(t,"'"),n)}function z(t){const e=t.currentChar();switch(e){case"\\":case"'":return t.next(),"\\"+e;case"u":return K(t,e,4);case"U":return K(t,e,6);default:return w(i.UNKNOWN_ESCAPE_SEQUENCE,l(),0,e),""}}function K(t,e,n){T(t,e);let r="";for(let s=0;s<n;s++){const n=B(t);if(!n){w(i.INVALID_UNICODE_ESCAPE_SEQUENCE,l(),0,`\\${e}${r}${t.currentChar()}`);break}r+=n}return`\\${e}${r}`}function X(t){S(t);let e="",n="";const r=t=>"{"!==t&&"}"!==t&&t!==u&&t!==h;while(e=F(t,r))n+=e;return n}function Y(t){let e="",n="";while(e=U(t))n+=e;return n}function Q(t){const e=(n=!1,r)=>{const i=t.currentChar();return"{"!==i&&"%"!==i&&"@"!==i&&"|"!==i&&i?i===u?r:i===h?(r+=i,t.next(),e(n,r)):(r+=i,t.next(),e(!0,r)):r};return e(!1,"")}function J(t){S(t);const e=T(t,"|");return S(t),e}function Z(t,e){let n=null;const r=t.currentChar();switch(r){case"{":return e.braceNest>=1&&w(i.NOT_ALLOW_NEST_PLACEHOLDER,l(),0),t.next(),n=E(e,2,"{"),S(t),e.braceNest++,n;case"}":return e.braceNest>0&&2===e.currentType&&w(i.EMPTY_PLACEHOLDER,l(),0),t.next(),n=E(e,3,"}"),e.braceNest--,e.braceNest>0&&S(t),e.inLinked&&0===e.braceNest&&(e.inLinked=!1),n;case"@":return e.braceNest>0&&w(i.UNTERMINATED_CLOSING_BRACE,l(),0),n=tt(t,e)||O(e),e.braceNest=0,n;default:let r=!0,s=!0,o=!0;if(x(t))return e.braceNest>0&&w(i.UNTERMINATED_CLOSING_BRACE,l(),0),n=E(e,1,J(t)),e.braceNest=0,e.inLinked=!1,n;if(e.braceNest>0&&(5===e.currentType||6===e.currentType||7===e.currentType))return w(i.UNTERMINATED_CLOSING_BRACE,l(),0),e.braceNest=0,et(t,e);if(r=N(t,e))return n=E(e,5,q(t)),S(t),n;if(s=C(t,e))return n=E(e,6,H(t)),S(t),n;if(o=j(t,e))return n=E(e,7,W(t)),S(t),n;if(!r&&!s&&!o)return n=E(e,13,X(t)),w(i.INVALID_TOKEN_IN_PLACEHOLDER,l(),0,n.value),S(t),n;break}return n}function tt(t,e){const{currentType:n}=e;let r=null;const s=t.currentChar();switch(8!==n&&9!==n&&12!==n&&10!==n||s!==h&&s!==u||w(i.INVALID_LINKED_FORMAT,l(),0),s){case"@":return t.next(),r=E(e,8,"@"),e.inLinked=!0,r;case".":return S(t),t.next(),E(e,9,".");case":":return S(t),t.next(),E(e,10,":");default:return x(t)?(r=E(e,1,J(t)),e.braceNest=0,e.inLinked=!1,r):L(t,e)||D(t,e)?(S(t),tt(t,e)):R(t,e)?(S(t),E(e,12,Y(t))):P(t,e)?(S(t),"{"===s?Z(t,e)||r:E(e,11,Q(t))):(8===n&&w(i.INVALID_LINKED_FORMAT,l(),0),e.braceNest=0,e.inLinked=!1,et(t,e))}}function et(t,e){let n={type:14};if(e.braceNest>0)return Z(t,e)||O(e);if(e.inLinked)return tt(t,e)||O(e);const r=t.currentChar();switch(r){case"{":return Z(t,e)||O(e);case"}":return w(i.UNBALANCED_CLOSING_BRACE,l(),0),t.next(),E(e,3,"}");case"@":return tt(t,e)||O(e);default:if(x(t))return n=E(e,1,J(t)),e.braceNest=0,e.inLinked=!1,n;if(M(t))return E(e,0,G(t));if("%"===r)return t.next(),E(e,4,"%");break}return n}function nt(){const{currentType:t,offset:e,startLoc:n,endLoc:i}=y;return y.lastType=t,y.lastOffset=e,y.lastStartLoc=n,y.lastEndLoc=i,y.offset=o(),y.startLoc=l(),r.currentChar()===m?E(y,14):et(r,y)}return{nextToken:nt,currentOffset:o,currentPosition:l,context:b}}const b="parser",_=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function w(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const t=parseInt(e||n,16);return t<=55295||t>=57344?String.fromCodePoint(t):"�"}}}function E(t={}){const e=!1!==t.location,{onError:n}=t;function o(t,e,r,i,...o){const a=t.currentPosition();if(a.offset+=i,a.column+=i,n){const t=c(r,a),i=s(e,t,{domain:b,args:o});n(i)}}function a(t,n,r){const i={type:t,start:n,end:n};return e&&(i.loc={start:r,end:r}),i}function u(t,n,r,i){t.end=n,i&&(t.type=i),e&&t.loc&&(t.loc.end=r)}function l(t,e){const n=t.context(),r=a(3,n.offset,n.startLoc);return r.value=e,u(r,t.currentOffset(),t.currentPosition()),r}function h(t,e){const n=t.context(),{lastOffset:r,lastStartLoc:i}=n,s=a(5,r,i);return s.index=parseInt(e,10),t.nextToken(),u(s,t.currentOffset(),t.currentPosition()),s}function f(t,e){const n=t.context(),{lastOffset:r,lastStartLoc:i}=n,s=a(4,r,i);return s.key=e,t.nextToken(),u(s,t.currentOffset(),t.currentPosition()),s}function d(t,e){const n=t.context(),{lastOffset:r,lastStartLoc:i}=n,s=a(9,r,i);return s.value=e.replace(_,w),t.nextToken(),u(s,t.currentOffset(),t.currentPosition()),s}function p(t){const e=t.nextToken(),n=t.context(),{lastOffset:r,lastStartLoc:s}=n,c=a(8,r,s);return 12!==e.type?(o(t,i.UNEXPECTED_EMPTY_LINKED_MODIFIER,n.lastStartLoc,0),c.value="",u(c,r,s),{nextConsumeToken:e,node:c}):(null==e.value&&o(t,i.UNEXPECTED_LEXICAL_ANALYSIS,n.lastStartLoc,0,O(e)),c.value=e.value||"",u(c,t.currentOffset(),t.currentPosition()),{node:c})}function m(t,e){const n=t.context(),r=a(7,n.offset,n.startLoc);return r.value=e,u(r,t.currentOffset(),t.currentPosition()),r}function g(t){const e=t.context(),n=a(6,e.offset,e.startLoc);let r=t.nextToken();if(9===r.type){const e=p(t);n.modifier=e.node,r=e.nextConsumeToken||t.nextToken()}switch(10!==r.type&&o(t,i.UNEXPECTED_LEXICAL_ANALYSIS,e.lastStartLoc,0,O(r)),r=t.nextToken(),2===r.type&&(r=t.nextToken()),r.type){case 11:null==r.value&&o(t,i.UNEXPECTED_LEXICAL_ANALYSIS,e.lastStartLoc,0,O(r)),n.key=m(t,r.value||"");break;case 5:null==r.value&&o(t,i.UNEXPECTED_LEXICAL_ANALYSIS,e.lastStartLoc,0,O(r)),n.key=f(t,r.value||"");break;case 6:null==r.value&&o(t,i.UNEXPECTED_LEXICAL_ANALYSIS,e.lastStartLoc,0,O(r)),n.key=h(t,r.value||"");break;case 7:null==r.value&&o(t,i.UNEXPECTED_LEXICAL_ANALYSIS,e.lastStartLoc,0,O(r)),n.key=d(t,r.value||"");break;default:o(t,i.UNEXPECTED_EMPTY_LINKED_KEY,e.lastStartLoc,0);const s=t.context(),c=a(7,s.offset,s.startLoc);return c.value="",u(c,s.offset,s.startLoc),n.key=c,u(n,s.offset,s.startLoc),{nextConsumeToken:r,node:n}}return u(n,t.currentOffset(),t.currentPosition()),{node:n}}function v(t){const e=t.context(),n=1===e.currentType?t.currentOffset():e.offset,r=1===e.currentType?e.endLoc:e.startLoc,s=a(2,n,r);s.items=[];let c=null;do{const n=c||t.nextToken();switch(c=null,n.type){case 0:null==n.value&&o(t,i.UNEXPECTED_LEXICAL_ANALYSIS,e.lastStartLoc,0,O(n)),s.items.push(l(t,n.value||""));break;case 6:null==n.value&&o(t,i.UNEXPECTED_LEXICAL_ANALYSIS,e.lastStartLoc,0,O(n)),s.items.push(h(t,n.value||""));break;case 5:null==n.value&&o(t,i.UNEXPECTED_LEXICAL_ANALYSIS,e.lastStartLoc,0,O(n)),s.items.push(f(t,n.value||""));break;case 7:null==n.value&&o(t,i.UNEXPECTED_LEXICAL_ANALYSIS,e.lastStartLoc,0,O(n)),s.items.push(d(t,n.value||""));break;case 8:const r=g(t);s.items.push(r.node),c=r.nextConsumeToken||null;break}}while(14!==e.currentType&&1!==e.currentType);const p=1===e.currentType?e.lastOffset:t.currentOffset(),m=1===e.currentType?e.lastEndLoc:t.currentPosition();return u(s,p,m),s}function E(t,e,n,r){const s=t.context();let c=0===r.items.length;const l=a(1,e,n);l.cases=[],l.cases.push(r);do{const e=v(t);c||(c=0===e.items.length),l.cases.push(e)}while(14!==s.currentType);return c&&o(t,i.MUST_HAVE_MESSAGES_IN_PLURAL,n,0),u(l,t.currentOffset(),t.currentPosition()),l}function T(t){const e=t.context(),{offset:n,startLoc:r}=e,i=v(t);return 14===e.currentType?i:E(t,n,r,i)}function I(n){const s=y(n,Object(r["a"])({},t)),c=s.context(),l=a(0,c.offset,c.startLoc);return e&&l.loc&&(l.loc.source=n),l.body=T(s),14!==c.currentType&&o(s,i.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,n[c.offset]||""),u(l,s.currentOffset(),s.currentPosition()),l}return{parse:I}}function O(t){if(14===t.type)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function T(t,e={}){const n={ast:t,helpers:new Set},r=()=>n,i=t=>(n.helpers.add(t),t);return{context:r,helper:i}}function I(t,e){for(let n=0;n<t.length;n++)S(t[n],e)}function S(t,e){switch(t.type){case 1:I(t.cases,e),e.helper("plural");break;case 2:I(t.items,e);break;case 6:const n=t;S(n.key,e),e.helper("linked");break;case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function A(t,e={}){const n=T(t);n.helper("normalize"),t.body&&S(t.body,n);const r=n.context();t.helpers=Array.from(r.helpers)}function k(t,e){const{sourceMap:n,filename:r,breakLineCode:i,needIndent:s}=e,o={source:t.loc.source,filename:r,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:s,indentLevel:0},a=()=>o;function c(t,e){o.code+=t}function u(t,e=!0){const n=e?i:"";c(s?n+"  ".repeat(t):n)}function l(t=!0){const e=++o.indentLevel;t&&u(e)}function h(t=!0){const e=--o.indentLevel;t&&u(e)}function f(){u(o.indentLevel)}const d=t=>"_"+t,p=()=>o.needIndent;return{context:a,push:c,indent:l,deindent:h,newline:f,helper:d,needIndent:p}}function N(t,e){const{helper:n}=t;t.push(n("linked")+"("),R(t,e.key),e.modifier&&(t.push(", "),R(t,e.modifier)),t.push(")")}function C(t,e){const{helper:n,needIndent:r}=t;t.push(n("normalize")+"(["),t.indent(r());const i=e.items.length;for(let s=0;s<i;s++){if(R(t,e.items[s]),s===i-1)break;t.push(", ")}t.deindent(r()),t.push("])")}function j(t,e){const{helper:n,needIndent:r}=t;if(e.cases.length>1){t.push(n("plural")+"(["),t.indent(r());const i=e.cases.length;for(let n=0;n<i;n++){if(R(t,e.cases[n]),n===i-1)break;t.push(", ")}t.deindent(r()),t.push("])")}}function L(t,e){e.body?R(t,e.body):t.push("null")}function R(t,e){const{helper:n}=t;switch(e.type){case 0:L(t,e);break;case 1:j(t,e);break;case 2:C(t,e);break;case 6:N(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break;default:0}}const D=(t,e={})=>{const n=Object(r["p"])(e.mode)?e.mode:"normal",i=Object(r["p"])(e.filename)?e.filename:"message.intl",s=!!e.sourceMap,o=null!=e.breakLineCode?e.breakLineCode:"arrow"===n?";":"\n",a=e.needIndent?e.needIndent:"arrow"!==n,c=t.helpers||[],u=k(t,{mode:n,filename:i,sourceMap:s,breakLineCode:o,needIndent:a});u.push("normal"===n?"function __msg__ (ctx) {":"(ctx) => {"),u.indent(a),c.length>0&&(u.push(`const { ${c.map(t=>`${t}: _${t}`).join(", ")} } = ctx`),u.newline()),u.push("return "),R(u,t),u.deindent(a),u.push("}");const{code:l,map:h}=u.context();return{ast:t,code:l,map:h?h.toJSON():void 0}};function P(t,e={}){const n=Object(r["a"])({},e),i=E(n),s=i.parse(t);return A(s,n),D(s,n)}
/*!
  * devtools-if v9.2.0-beta.22
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const x={I18nInit:"i18n:init",FunctionTranslate:"function:translate"},M=[];
/*!
  * core-base v9.2.0-beta.22
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */M[0]={["w"]:[0],["i"]:[3,0],["["]:[4],["o"]:[7]},M[1]={["w"]:[1],["."]:[2],["["]:[4],["o"]:[7]},M[2]={["w"]:[2],["i"]:[3,0],["0"]:[3,0]},M[3]={["i"]:[3,0],["0"]:[3,0],["w"]:[1,1],["."]:[2,1],["["]:[4,1],["o"]:[7,1]},M[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],["o"]:8,["l"]:[4,0]},M[5]={["'"]:[4,0],["o"]:8,["l"]:[5,0]},M[6]={['"']:[4,0],["o"]:8,["l"]:[6,0]};const F=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function U(t){return F.test(t)}function V(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e!==n||34!==e&&39!==e?t:t.slice(1,-1)}function B(t){if(void 0===t||null===t)return"o";const e=t.charCodeAt(0);switch(e){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function $(t){const e=t.trim();return("0"!==t.charAt(0)||!isNaN(parseInt(t)))&&(U(e)?V(e):"*"+e)}function G(t){const e=[];let n,r,i,s,o,a,c,u=-1,l=0,h=0;const f=[];function d(){const e=t[u+1];if(5===l&&"'"===e||6===l&&'"'===e)return u++,i="\\"+e,f[0](),!0}f[0]=()=>{void 0===r?r=i:r+=i},f[1]=()=>{void 0!==r&&(e.push(r),r=void 0)},f[2]=()=>{f[0](),h++},f[3]=()=>{if(h>0)h--,l=4,f[0]();else{if(h=0,void 0===r)return!1;if(r=$(r),!1===r)return!1;f[1]()}};while(null!==l)if(u++,n=t[u],"\\"!==n||!d()){if(s=B(n),c=M[l],o=c[s]||c["l"]||8,8===o)return;if(l=o[0],void 0!==o[1]&&(a=f[o[1]],a&&(i=n,!1===a())))return;if(7===l)return e}}const q=new Map;function H(t,e){return Object(r["m"])(t)?t[e]:null}function W(t,e){if(!Object(r["m"])(t))return null;let n=q.get(e);if(n||(n=G(e),n&&q.set(e,n)),!n)return null;const i=n.length;let s=t,o=0;while(o<i){const t=s[n[o]];if(void 0===t)return null;s=t,o++}return s}const z=t=>t,K=t=>"",X="text",Y=t=>0===t.length?"":t.join(""),Q=r["r"];function J(t,e){return t=Math.abs(t),2===e?t?t>1?1:0:1:t?Math.min(t,2):0}function Z(t){const e=Object(r["l"])(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(Object(r["l"])(t.named.count)||Object(r["l"])(t.named.n))?Object(r["l"])(t.named.count)?t.named.count:Object(r["l"])(t.named.n)?t.named.n:e:e}function tt(t,e){e.count||(e.count=t),e.n||(e.n=t)}function et(t={}){const e=t.locale,n=Z(t),i=Object(r["m"])(t.pluralRules)&&Object(r["p"])(e)&&Object(r["k"])(t.pluralRules[e])?t.pluralRules[e]:J,s=Object(r["m"])(t.pluralRules)&&Object(r["p"])(e)&&Object(r["k"])(t.pluralRules[e])?J:void 0,o=t=>t[i(n,t.length,s)],a=t.list||[],c=t=>a[t],u=t.named||{};Object(r["l"])(t.pluralIndex)&&tt(n,u);const l=t=>u[t];function h(e){const n=Object(r["k"])(t.messages)?t.messages(e):!!Object(r["m"])(t.messages)&&t.messages[e];return n||(t.parent?t.parent.message(e):K)}const f=e=>t.modifiers?t.modifiers[e]:z,d=Object(r["n"])(t.processor)&&Object(r["k"])(t.processor.normalize)?t.processor.normalize:Y,p=Object(r["n"])(t.processor)&&Object(r["k"])(t.processor.interpolate)?t.processor.interpolate:Q,m=Object(r["n"])(t.processor)&&Object(r["p"])(t.processor.type)?t.processor.type:X,g={["list"]:c,["named"]:l,["plural"]:o,["linked"]:(t,e)=>{const n=h(t)(g);return Object(r["p"])(e)?f(e)(n):n},["message"]:h,["type"]:m,["interpolate"]:p,["normalize"]:d};return g}let nt=null;function rt(t){nt=t}function it(t,e,n){nt&&nt.emit(x.I18nInit,{timestamp:Date.now(),i18n:t,version:e,meta:n})}const st=ot(x.FunctionTranslate);function ot(t){return e=>nt&&nt.emit(t,e)}const at={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,__EXTEND_POINT__:7};at.NOT_FOUND_KEY,at.FALLBACK_TO_TRANSLATE,at.CANNOT_FORMAT_NUMBER,at.FALLBACK_TO_NUMBER_FORMAT,at.CANNOT_FORMAT_DATE,at.FALLBACK_TO_DATE_FORMAT;function ct(t,e,n){return[...new Set([n,...Object(r["g"])(e)?e:Object(r["m"])(e)?Object.keys(e):Object(r["p"])(e)?[e]:[n]])]}function ut(t,e,n){const i=Object(r["p"])(n)?n:mt,s=t;s.__localeChainCache||(s.__localeChainCache=new Map);let o=s.__localeChainCache.get(i);if(!o){o=[];let t=[n];while(Object(r["g"])(t))t=lt(o,t,e);const a=Object(r["g"])(e)||!Object(r["n"])(e)?e:e["default"]?e["default"]:null;t=Object(r["p"])(a)?[a]:a,Object(r["g"])(t)&&lt(o,t,!1),s.__localeChainCache.set(i,o)}return o}function lt(t,e,n){let i=!0;for(let s=0;s<e.length&&Object(r["h"])(i);s++){const o=e[s];Object(r["p"])(o)&&(i=ht(t,e[s],n))}return i}function ht(t,e,n){let r;const i=e.split("-");do{const e=i.join("-");r=ft(t,e,n),i.splice(-1,1)}while(i.length&&!0===r);return r}function ft(t,e,n){let i=!1;if(!t.includes(e)&&(i=!0,e)){i="!"!==e[e.length-1];const s=e.replace(/!/g,"");t.push(s),(Object(r["g"])(n)||Object(r["n"])(n))&&n[s]&&(i=n[s])}return i}const dt="9.2.0-beta.22",pt=-1,mt="en-US",gt="";function vt(){return{upper:t=>Object(r["p"])(t)?t.toUpperCase():t,lower:t=>Object(r["p"])(t)?t.toLowerCase():t,capitalize:t=>Object(r["p"])(t)?`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`:t}}let yt,bt,_t;function wt(t){yt=t}function Et(t){bt=t}function Ot(t){_t=t}let Tt=null;const It=t=>{Tt=t},St=()=>Tt;let At=0;function kt(t={}){const e=Object(r["p"])(t.version)?t.version:dt,n=Object(r["p"])(t.locale)?t.locale:mt,i=Object(r["g"])(t.fallbackLocale)||Object(r["n"])(t.fallbackLocale)||Object(r["p"])(t.fallbackLocale)||!1===t.fallbackLocale?t.fallbackLocale:n,s=Object(r["n"])(t.messages)?t.messages:{[n]:{}},o=Object(r["n"])(t.datetimeFormats)?t.datetimeFormats:{[n]:{}},a=Object(r["n"])(t.numberFormats)?t.numberFormats:{[n]:{}},c=Object(r["a"])({},t.modifiers||{},vt()),u=t.pluralRules||{},l=Object(r["k"])(t.missing)?t.missing:null,h=!Object(r["h"])(t.missingWarn)&&!Object(r["o"])(t.missingWarn)||t.missingWarn,f=!Object(r["h"])(t.fallbackWarn)&&!Object(r["o"])(t.fallbackWarn)||t.fallbackWarn,d=!!t.fallbackFormat,p=!!t.unresolving,m=Object(r["k"])(t.postTranslation)?t.postTranslation:null,g=Object(r["n"])(t.processor)?t.processor:null,v=!Object(r["h"])(t.warnHtmlMessage)||t.warnHtmlMessage,y=!!t.escapeParameter,b=Object(r["k"])(t.messageCompiler)?t.messageCompiler:yt,_=Object(r["k"])(t.messageResolver)?t.messageResolver:bt||H,w=Object(r["k"])(t.localeFallbacker)?t.localeFallbacker:_t||ct,E=Object(r["k"])(t.onWarn)?t.onWarn:r["s"],O=t,T=Object(r["m"])(O.__datetimeFormatters)?O.__datetimeFormatters:new Map,I=Object(r["m"])(O.__numberFormatters)?O.__numberFormatters:new Map,S=Object(r["m"])(O.__meta)?O.__meta:{};At++;const A={version:e,cid:At,locale:n,fallbackLocale:i,messages:s,modifiers:c,pluralRules:u,missing:l,missingWarn:h,fallbackWarn:f,fallbackFormat:d,unresolving:p,postTranslation:m,processor:g,warnHtmlMessage:v,escapeParameter:y,messageCompiler:b,messageResolver:_,localeFallbacker:w,onWarn:E,__meta:S};return A.datetimeFormats=o,A.numberFormats=a,A.__datetimeFormatters=T,A.__numberFormatters=I,__INTLIFY_PROD_DEVTOOLS__&&it(A,e,S),A}function Nt(t,e,n,i,s){const{missing:o,onWarn:a}=t;if(null!==o){const i=o(t,n,e,s);return Object(r["p"])(i)?i:e}return e}function Ct(t,e,n){const r=t;r.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}const jt=t=>t;let Lt=Object.create(null);function Rt(t,e={}){{const n=e.onCacheKey||jt,r=n(t),i=Lt[r];if(i)return i;let s=!1;const a=e.onError||o;e.onError=t=>{s=!0,a(t)};const{code:c}=P(t,e),u=new Function("return "+c)();return s?u:Lt[r]=u}}let Dt=i.__EXTEND_POINT__;const Pt=()=>Dt++,xt={INVALID_ARGUMENT:Dt,INVALID_DATE_ARGUMENT:Pt(),INVALID_ISO_DATE_ARGUMENT:Pt(),__EXTEND_POINT__:Pt()};function Mt(t){return s(t,null,void 0)}xt.INVALID_ARGUMENT,xt.INVALID_DATE_ARGUMENT,xt.INVALID_ISO_DATE_ARGUMENT;const Ft=()=>"",Ut=t=>Object(r["k"])(t);function Vt(t,...e){const{fallbackFormat:n,postTranslation:i,unresolving:s,messageCompiler:o,fallbackLocale:a,messages:c}=t,[u,l]=Ht(...e),h=Object(r["h"])(l.missingWarn)?l.missingWarn:t.missingWarn,f=Object(r["h"])(l.fallbackWarn)?l.fallbackWarn:t.fallbackWarn,d=Object(r["h"])(l.escapeParameter)?l.escapeParameter:t.escapeParameter,p=!!l.resolvedMessage,m=Object(r["p"])(l.default)||Object(r["h"])(l.default)?Object(r["h"])(l.default)?u:l.default:n?o?u:()=>u:"",g=n||""!==m,v=Object(r["p"])(l.locale)?l.locale:t.locale;d&&Bt(l);let[y,b,_]=p?[u,v,c[v]||{}]:$t(t,u,v,a,f,h),w=y,E=u;if(p||Object(r["p"])(w)||Ut(w)||g&&(w=m,E=w),!p&&(!Object(r["p"])(w)&&!Ut(w)||!Object(r["p"])(b)))return s?pt:u;let O=!1;const T=()=>{O=!0},I=Ut(w)?w:Gt(t,u,b,w,E,T);if(O)return w;const S=zt(t,b,_,l),A=et(S),k=qt(t,I,A),N=i?i(k):k;if(__INTLIFY_PROD_DEVTOOLS__){const e={timestamp:Date.now(),key:Object(r["p"])(u)?u:Ut(w)?w.key:"",locale:b||(Ut(w)?w.locale:""),format:Object(r["p"])(w)?w:Ut(w)?w.source:"",message:N};e.meta=Object(r["a"])({},t.__meta,St()||{}),st(e)}return N}function Bt(t){Object(r["g"])(t.list)?t.list=t.list.map(t=>Object(r["p"])(t)?Object(r["b"])(t):t):Object(r["m"])(t.named)&&Object.keys(t.named).forEach(e=>{Object(r["p"])(t.named[e])&&(t.named[e]=Object(r["b"])(t.named[e]))})}function $t(t,e,n,i,s,o){const{messages:a,onWarn:c,messageResolver:u,localeFallbacker:l}=t,h=l(t,i,n);let f,d={},p=null,m=n,g=null;const v="translate";for(let y=0;y<h.length;y++){f=g=h[y],d=a[f]||{};if(null===(p=u(d,e))&&(p=d[e]),Object(r["p"])(p)||Object(r["k"])(p))break;const n=Nt(t,e,f,o,v);n!==e&&(p=n),m=g}return[p,f,d]}function Gt(t,e,n,r,i,s){const{messageCompiler:o,warnHtmlMessage:a}=t;if(Ut(r)){const t=r;return t.locale=t.locale||n,t.key=t.key||e,t}const c=o(r,Wt(t,n,i,r,a,s));return c.locale=n,c.key=e,c.source=r,c}function qt(t,e,n){const r=e(n);return r}function Ht(...t){const[e,n,i]=t,s={};if(!Object(r["p"])(e)&&!Object(r["l"])(e)&&!Ut(e))throw Mt(xt.INVALID_ARGUMENT);const o=Object(r["l"])(e)?String(e):(Ut(e),e);return Object(r["l"])(n)?s.plural=n:Object(r["p"])(n)?s.default=n:Object(r["n"])(n)&&!Object(r["j"])(n)?s.named=n:Object(r["g"])(n)&&(s.list=n),Object(r["l"])(i)?s.plural=i:Object(r["p"])(i)?s.default=i:Object(r["n"])(i)&&Object(r["a"])(s,i),[o,s]}function Wt(t,e,n,i,s,o){return{warnHtmlMessage:s,onError:t=>{throw o&&o(t),t},onCacheKey:t=>Object(r["d"])(e,n,t)}}function zt(t,e,n,i){const{modifiers:s,pluralRules:o,messageResolver:a}=t,c=i=>{const s=a(n,i);if(Object(r["p"])(s)){let n=!1;const r=()=>{n=!0},o=Gt(t,i,e,s,i,r);return n?Ft:o}return Ut(s)?s:Ft},u={locale:e,modifiers:s,pluralRules:o,messages:c};return t.processor&&(u.processor=t.processor),i.list&&(u.list=i.list),i.named&&(u.named=i.named),Object(r["l"])(i.plural)&&(u.pluralIndex=i.plural),u}const Kt="undefined"!==typeof Intl;Kt&&Intl.DateTimeFormat,Kt&&Intl.NumberFormat;function Xt(t,...e){const{datetimeFormats:n,unresolving:i,fallbackLocale:s,onWarn:o,localeFallbacker:a}=t,{__datetimeFormatters:c}=t;const[u,l,h,f]=Yt(...e),d=Object(r["h"])(h.missingWarn)?h.missingWarn:t.missingWarn,p=(Object(r["h"])(h.fallbackWarn)?h.fallbackWarn:t.fallbackWarn,!!h.part),m=Object(r["p"])(h.locale)?h.locale:t.locale,g=a(t,s,m);if(!Object(r["p"])(u)||""===u)return new Intl.DateTimeFormat(m).format(l);let v,y={},b=null,_=m,w=null;const E="datetime format";for(let I=0;I<g.length;I++){if(v=w=g[I],y=n[v]||{},b=y[u],Object(r["n"])(b))break;Nt(t,u,v,d,E),_=w}if(!Object(r["n"])(b)||!Object(r["p"])(v))return i?pt:u;let O=`${v}__${u}`;Object(r["j"])(f)||(O=`${O}__${JSON.stringify(f)}`);let T=c.get(O);return T||(T=new Intl.DateTimeFormat(v,Object(r["a"])({},b,f)),c.set(O,T)),p?T.formatToParts(l):T.format(l)}function Yt(...t){const[e,n,i,s]=t;let o,a={},c={};if(Object(r["p"])(e)){const t=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!t)throw Mt(xt.INVALID_ISO_DATE_ARGUMENT);const n=t[3]?t[3].trim().startsWith("T")?`${t[1].trim()}${t[3].trim()}`:`${t[1].trim()}T${t[3].trim()}`:t[1].trim();o=new Date(n);try{o.toISOString()}catch(u){throw Mt(xt.INVALID_ISO_DATE_ARGUMENT)}}else if(Object(r["i"])(e)){if(isNaN(e.getTime()))throw Mt(xt.INVALID_DATE_ARGUMENT);o=e}else{if(!Object(r["l"])(e))throw Mt(xt.INVALID_ARGUMENT);o=e}return Object(r["p"])(n)?a.key=n:Object(r["n"])(n)&&(a=n),Object(r["p"])(i)?a.locale=i:Object(r["n"])(i)&&(c=i),Object(r["n"])(s)&&(c=s),[a.key||"",o,a,c]}function Qt(t,e,n){const r=t;for(const i in n){const t=`${e}__${i}`;r.__datetimeFormatters.has(t)&&r.__datetimeFormatters.delete(t)}}function Jt(t,...e){const{numberFormats:n,unresolving:i,fallbackLocale:s,onWarn:o,localeFallbacker:a}=t,{__numberFormatters:c}=t;const[u,l,h,f]=Zt(...e),d=Object(r["h"])(h.missingWarn)?h.missingWarn:t.missingWarn,p=(Object(r["h"])(h.fallbackWarn)?h.fallbackWarn:t.fallbackWarn,!!h.part),m=Object(r["p"])(h.locale)?h.locale:t.locale,g=a(t,s,m);if(!Object(r["p"])(u)||""===u)return new Intl.NumberFormat(m).format(l);let v,y={},b=null,_=m,w=null;const E="number format";for(let I=0;I<g.length;I++){if(v=w=g[I],y=n[v]||{},b=y[u],Object(r["n"])(b))break;Nt(t,u,v,d,E),_=w}if(!Object(r["n"])(b)||!Object(r["p"])(v))return i?pt:u;let O=`${v}__${u}`;Object(r["j"])(f)||(O=`${O}__${JSON.stringify(f)}`);let T=c.get(O);return T||(T=new Intl.NumberFormat(v,Object(r["a"])({},b,f)),c.set(O,T)),p?T.formatToParts(l):T.format(l)}function Zt(...t){const[e,n,i,s]=t;let o={},a={};if(!Object(r["l"])(e))throw Mt(xt.INVALID_ARGUMENT);const c=e;return Object(r["p"])(n)?o.key=n:Object(r["n"])(n)&&(o=n),Object(r["p"])(i)?o.locale=i:Object(r["n"])(i)&&(a=i),Object(r["n"])(s)&&(a=s),[o.key||"",c,o,a]}function te(t,e,n){const r=t;for(const i in n){const t=`${e}__${i}`;r.__numberFormatters.has(t)&&r.__numberFormatters.delete(t)}}"boolean"!==typeof __INTLIFY_PROD_DEVTOOLS__&&(Object(r["e"])().__INTLIFY_PROD_DEVTOOLS__=!1);var ee=n("7a23");n("3f4e");
/*!
  * vue-devtools v9.2.0-beta.22
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */
const ne="9.2.0-beta.22";function re(){let t=!1;"boolean"!==typeof __VUE_I18N_FULL_INSTALL__&&(t=!0,Object(r["e"])().__VUE_I18N_FULL_INSTALL__=!0),"boolean"!==typeof __VUE_I18N_LEGACY_API__&&(t=!0,Object(r["e"])().__VUE_I18N_LEGACY_API__=!0),"boolean"!==typeof __INTLIFY_PROD_DEVTOOLS__&&(Object(r["e"])().__INTLIFY_PROD_DEVTOOLS__=!1)}let ie=at.__EXTEND_POINT__;const se=()=>ie++,oe={FALLBACK_TO_ROOT:ie,NOT_SUPPORTED_PRESERVE:se(),NOT_SUPPORTED_FORMATTER:se(),NOT_SUPPORTED_PRESERVE_DIRECTIVE:se(),NOT_SUPPORTED_GET_CHOICE_INDEX:se(),COMPONENT_NAME_LEGACY_COMPATIBLE:se(),NOT_FOUND_PARENT_SCOPE:se(),NOT_SUPPORT_MULTI_I18N_INSTANCE:se()};oe.FALLBACK_TO_ROOT,oe.NOT_SUPPORTED_PRESERVE,oe.NOT_SUPPORTED_FORMATTER,oe.NOT_SUPPORTED_PRESERVE_DIRECTIVE,oe.NOT_SUPPORTED_GET_CHOICE_INDEX,oe.COMPONENT_NAME_LEGACY_COMPATIBLE,oe.NOT_FOUND_PARENT_SCOPE,oe.NOT_SUPPORT_MULTI_I18N_INSTANCE;let ae=i.__EXTEND_POINT__;const ce=()=>ae++,ue={UNEXPECTED_RETURN_TYPE:ae,INVALID_ARGUMENT:ce(),MUST_BE_CALL_SETUP_TOP:ce(),NOT_INSLALLED:ce(),NOT_AVAILABLE_IN_LEGACY_MODE:ce(),REQUIRED_VALUE:ce(),INVALID_VALUE:ce(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:ce(),NOT_INSLALLED_WITH_PROVIDE:ce(),UNEXPECTED_ERROR:ce(),NOT_COMPATIBLE_LEGACY_VUE_I18N:ce(),BRIDGE_SUPPORT_VUE_2_ONLY:ce(),__EXTEND_POINT__:ce()};function le(t,...e){return s(t,null,void 0)}ue.UNEXPECTED_RETURN_TYPE,ue.INVALID_ARGUMENT,ue.MUST_BE_CALL_SETUP_TOP,ue.NOT_INSLALLED,ue.UNEXPECTED_ERROR,ue.NOT_AVAILABLE_IN_LEGACY_MODE,ue.REQUIRED_VALUE,ue.INVALID_VALUE,ue.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN,ue.NOT_INSLALLED_WITH_PROVIDE,ue.NOT_COMPATIBLE_LEGACY_VUE_I18N,ue.BRIDGE_SUPPORT_VUE_2_ONLY;const he=Object(r["q"])("__transrateVNode"),fe=Object(r["q"])("__datetimeParts"),de=Object(r["q"])("__numberParts"),pe=Object(r["q"])("__setPluralRules");Object(r["q"])("__intlifyMeta");const me=Object(r["q"])("__injectWithOption");function ge(t){if(!Object(r["m"])(t))return t;for(const e in t)if(Object(r["f"])(t,e))if(e.includes(".")){const n=e.split("."),i=n.length-1;let s=t;for(let t=0;t<i;t++)n[t]in s||(s[n[t]]={}),s=s[n[t]];s[n[i]]=t[e],delete t[e],Object(r["m"])(s[n[i]])&&ge(s[n[i]])}else Object(r["m"])(t[e])&&ge(t[e]);return t}function ve(t,e){const{messages:n,__i18n:i,messageResolver:s,flatJson:o}=e,a=Object(r["n"])(n)?n:Object(r["g"])(i)?{}:{[t]:{}};if(Object(r["g"])(i)&&i.forEach(t=>{if("locale"in t&&"resource"in t){const{locale:e,resource:n}=t;e?(a[e]=a[e]||{},be(n,a[e])):be(n,a)}else Object(r["p"])(t)&&be(JSON.parse(t),a)}),null==s&&o)for(const c in a)Object(r["f"])(a,c)&&ge(a[c]);return a}const ye=t=>!Object(r["m"])(t)||Object(r["g"])(t);function be(t,e){if(ye(t)||ye(e))throw le(ue.INVALID_VALUE);for(const n in t)Object(r["f"])(t,n)&&(ye(t[n])||ye(e[n])?e[n]=t[n]:be(t[n],e[n]))}function _e(t){return t.type}function we(t,e,n){let i=Object(r["m"])(e.messages)?e.messages:{};"__i18nGlobal"in n&&(i=ve(t.locale.value,{messages:i,__i18n:n.__i18nGlobal}));const s=Object.keys(i);if(s.length&&s.forEach(e=>{t.mergeLocaleMessage(e,i[e])}),Object(r["m"])(e.datetimeFormats)){const n=Object.keys(e.datetimeFormats);n.length&&n.forEach(n=>{t.mergeDateTimeFormat(n,e.datetimeFormats[n])})}if(Object(r["m"])(e.numberFormats)){const n=Object.keys(e.numberFormats);n.length&&n.forEach(n=>{t.mergeNumberFormat(n,e.numberFormats[n])})}}function Ee(t){return Object(ee["k"])(ee["b"],null,t,0)}const Oe="__INTLIFY_META__";let Te=0;function Ie(t){return(e,n,r,i)=>t(n,r,Object(ee["m"])()||void 0,i)}const Se=()=>{const t=Object(ee["m"])();let e=null;return t&&(e=_e(t)[Oe])?{[Oe]:e}:null};function Ae(t={},e){const{__root:n}=t,i=void 0===n;let s=!Object(r["h"])(t.inheritLocale)||t.inheritLocale;const o=Object(ee["C"])(n&&s?n.locale.value:Object(r["p"])(t.locale)?t.locale:mt),a=Object(ee["C"])(n&&s?n.fallbackLocale.value:Object(r["p"])(t.fallbackLocale)||Object(r["g"])(t.fallbackLocale)||Object(r["n"])(t.fallbackLocale)||!1===t.fallbackLocale?t.fallbackLocale:o.value),c=Object(ee["C"])(ve(o.value,t)),u=Object(ee["C"])(Object(r["n"])(t.datetimeFormats)?t.datetimeFormats:{[o.value]:{}}),l=Object(ee["C"])(Object(r["n"])(t.numberFormats)?t.numberFormats:{[o.value]:{}});let h=n?n.missingWarn:!Object(r["h"])(t.missingWarn)&&!Object(r["o"])(t.missingWarn)||t.missingWarn,f=n?n.fallbackWarn:!Object(r["h"])(t.fallbackWarn)&&!Object(r["o"])(t.fallbackWarn)||t.fallbackWarn,d=n?n.fallbackRoot:!Object(r["h"])(t.fallbackRoot)||t.fallbackRoot,p=!!t.fallbackFormat,m=Object(r["k"])(t.missing)?t.missing:null,g=Object(r["k"])(t.missing)?Ie(t.missing):null,v=Object(r["k"])(t.postTranslation)?t.postTranslation:null,y=!Object(r["h"])(t.warnHtmlMessage)||t.warnHtmlMessage,b=!!t.escapeParameter;const _=n?n.modifiers:Object(r["n"])(t.modifiers)?t.modifiers:{};let w,E=t.pluralRules||n&&n.pluralRules;function O(){const e={version:ne,locale:o.value,fallbackLocale:a.value,messages:c.value,modifiers:_,pluralRules:E,missing:null===g?void 0:g,missingWarn:h,fallbackWarn:f,fallbackFormat:p,unresolving:!0,postTranslation:null===v?void 0:v,warnHtmlMessage:y,escapeParameter:b,messageResolver:t.messageResolver,__meta:{framework:"vue"}};return e.datetimeFormats=u.value,e.numberFormats=l.value,e.__datetimeFormatters=Object(r["n"])(w)?w.__datetimeFormatters:void 0,e.__numberFormatters=Object(r["n"])(w)?w.__numberFormatters:void 0,kt(e)}function T(){return[o.value,a.value,c.value,u.value,l.value]}w=O(),Ct(w,o.value,a.value);const I=Object(ee["d"])({get:()=>o.value,set:t=>{o.value=t,w.locale=o.value}}),S=Object(ee["d"])({get:()=>a.value,set:t=>{a.value=t,w.fallbackLocale=a.value,Ct(w,o.value,t)}}),A=Object(ee["d"])(()=>c.value),k=Object(ee["d"])(()=>u.value),N=Object(ee["d"])(()=>l.value);function C(){return Object(r["k"])(v)?v:null}function j(t){v=t,w.postTranslation=t}function L(){return m}function R(t){null!==t&&(g=Ie(t)),m=t,w.missing=g}function D(t,e,i,s,o,a){let c;if(T(),__INTLIFY_PROD_DEVTOOLS__)try{It(Se()),c=t(w)}finally{It(null)}else c=t(w);if(Object(r["l"])(c)&&c===pt){const[t,r]=e();return n&&d?s(n):o(t)}if(a(c))return c;throw le(ue.UNEXPECTED_RETURN_TYPE)}function P(...t){return D(e=>Reflect.apply(Vt,null,[e,...t]),()=>Ht(...t),"translate",e=>Reflect.apply(e.t,e,[...t]),t=>t,t=>Object(r["p"])(t))}function x(...t){const[e,n,i]=t;if(i&&!Object(r["m"])(i))throw le(ue.INVALID_ARGUMENT);return P(e,n,Object(r["a"])({resolvedMessage:!0},i||{}))}function M(...t){return D(e=>Reflect.apply(Xt,null,[e,...t]),()=>Yt(...t),"datetime format",e=>Reflect.apply(e.d,e,[...t]),()=>gt,t=>Object(r["p"])(t))}function F(...t){return D(e=>Reflect.apply(Jt,null,[e,...t]),()=>Zt(...t),"number format",e=>Reflect.apply(e.n,e,[...t]),()=>gt,t=>Object(r["p"])(t))}function U(t){return t.map(t=>Object(r["p"])(t)?Ee(t):t)}const V=t=>t,B={normalize:U,interpolate:V,type:"vnode"};function $(...t){return D(e=>{let n;const r=e;try{r.processor=B,n=Reflect.apply(Vt,null,[r,...t])}finally{r.processor=null}return n},()=>Ht(...t),"translate",e=>e[he](...t),t=>[Ee(t)],t=>Object(r["g"])(t))}function G(...t){return D(e=>Reflect.apply(Jt,null,[e,...t]),()=>Zt(...t),"number format",e=>e[de](...t),()=>[],t=>Object(r["p"])(t)||Object(r["g"])(t))}function q(...t){return D(e=>Reflect.apply(Xt,null,[e,...t]),()=>Yt(...t),"datetime format",e=>e[fe](...t),()=>[],t=>Object(r["p"])(t)||Object(r["g"])(t))}function H(t){E=t,w.pluralRules=E}function W(t,e){const n=Object(r["p"])(e)?e:o.value,i=X(n);return null!==w.messageResolver(i,t)}function z(t){let e=null;const n=ut(w,a.value,o.value);for(let r=0;r<n.length;r++){const i=c.value[n[r]]||{},s=w.messageResolver(i,t);if(null!=s){e=s;break}}return e}function K(t){const e=z(t);return null!=e?e:n&&n.tm(t)||{}}function X(t){return c.value[t]||{}}function Y(t,e){c.value[t]=e,w.messages=c.value}function Q(t,e){c.value[t]=c.value[t]||{},be(e,c.value[t]),w.messages=c.value}function J(t){return u.value[t]||{}}function Z(t,e){u.value[t]=e,w.datetimeFormats=u.value,Qt(w,t,e)}function tt(t,e){u.value[t]=Object(r["a"])(u.value[t]||{},e),w.datetimeFormats=u.value,Qt(w,t,e)}function et(t){return l.value[t]||{}}function nt(t,e){l.value[t]=e,w.numberFormats=l.value,te(w,t,e)}function rt(t,e){l.value[t]=Object(r["a"])(l.value[t]||{},e),w.numberFormats=l.value,te(w,t,e)}Te++,n&&(Object(ee["L"])(n.locale,t=>{s&&(o.value=t,w.locale=t,Ct(w,o.value,a.value))}),Object(ee["L"])(n.fallbackLocale,t=>{s&&(a.value=t,w.fallbackLocale=t,Ct(w,o.value,a.value))}));const it={id:Te,locale:I,fallbackLocale:S,get inheritLocale(){return s},set inheritLocale(t){s=t,t&&n&&(o.value=n.locale.value,a.value=n.fallbackLocale.value,Ct(w,o.value,a.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:A,get modifiers(){return _},get pluralRules(){return E||{}},get isGlobal(){return i},get missingWarn(){return h},set missingWarn(t){h=t,w.missingWarn=h},get fallbackWarn(){return f},set fallbackWarn(t){f=t,w.fallbackWarn=f},get fallbackRoot(){return d},set fallbackRoot(t){d=t},get fallbackFormat(){return p},set fallbackFormat(t){p=t,w.fallbackFormat=p},get warnHtmlMessage(){return y},set warnHtmlMessage(t){y=t,w.warnHtmlMessage=t},get escapeParameter(){return b},set escapeParameter(t){b=t,w.escapeParameter=t},t:P,getLocaleMessage:X,setLocaleMessage:Y,mergeLocaleMessage:Q,getPostTranslationHandler:C,setPostTranslationHandler:j,getMissingHandler:L,setMissingHandler:R,[pe]:H};return it.datetimeFormats=k,it.numberFormats=N,it.rt=x,it.te=W,it.tm=K,it.d=M,it.n=F,it.getDateTimeFormat=J,it.setDateTimeFormat=Z,it.mergeDateTimeFormat=tt,it.getNumberFormat=et,it.setNumberFormat=nt,it.mergeNumberFormat=rt,it[me]=t.__injectWithOption,it[he]=$,it[fe]=q,it[de]=G,it}function ke(t){const e=Object(r["p"])(t.locale)?t.locale:mt,n=Object(r["p"])(t.fallbackLocale)||Object(r["g"])(t.fallbackLocale)||Object(r["n"])(t.fallbackLocale)||!1===t.fallbackLocale?t.fallbackLocale:e,i=Object(r["k"])(t.missing)?t.missing:void 0,s=!Object(r["h"])(t.silentTranslationWarn)&&!Object(r["o"])(t.silentTranslationWarn)||!t.silentTranslationWarn,o=!Object(r["h"])(t.silentFallbackWarn)&&!Object(r["o"])(t.silentFallbackWarn)||!t.silentFallbackWarn,a=!Object(r["h"])(t.fallbackRoot)||t.fallbackRoot,c=!!t.formatFallbackMessages,u=Object(r["n"])(t.modifiers)?t.modifiers:{},l=t.pluralizationRules,h=Object(r["k"])(t.postTranslation)?t.postTranslation:void 0,f=!Object(r["p"])(t.warnHtmlInMessage)||"off"!==t.warnHtmlInMessage,d=!!t.escapeParameterHtml,p=!Object(r["h"])(t.sync)||t.sync;let m=t.messages;if(Object(r["n"])(t.sharedMessages)){const e=t.sharedMessages,n=Object.keys(e);m=n.reduce((t,n)=>{const i=t[n]||(t[n]={});return Object(r["a"])(i,e[n]),t},m||{})}const{__i18n:g,__root:v,__injectWithOption:y}=t,b=t.datetimeFormats,_=t.numberFormats,w=t.flatJson;return{locale:e,fallbackLocale:n,messages:m,flatJson:w,datetimeFormats:b,numberFormats:_,missing:i,missingWarn:s,fallbackWarn:o,fallbackRoot:a,fallbackFormat:c,modifiers:u,pluralRules:l,postTranslation:h,warnHtmlMessage:f,escapeParameter:d,messageResolver:t.messageResolver,inheritLocale:p,__i18n:g,__root:v,__injectWithOption:y}}function Ne(t={},e){{const e=Ae(ke(t)),n={id:e.id,get locale(){return e.locale.value},set locale(t){e.locale.value=t},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(t){e.fallbackLocale.value=t},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(t){},get missing(){return e.getMissingHandler()},set missing(t){e.setMissingHandler(t)},get silentTranslationWarn(){return Object(r["h"])(e.missingWarn)?!e.missingWarn:e.missingWarn},set silentTranslationWarn(t){e.missingWarn=Object(r["h"])(t)?!t:t},get silentFallbackWarn(){return Object(r["h"])(e.fallbackWarn)?!e.fallbackWarn:e.fallbackWarn},set silentFallbackWarn(t){e.fallbackWarn=Object(r["h"])(t)?!t:t},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(t){e.fallbackFormat=t},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(t){e.setPostTranslationHandler(t)},get sync(){return e.inheritLocale},set sync(t){e.inheritLocale=t},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(t){e.warnHtmlMessage="off"!==t},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(t){e.escapeParameter=t},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(t){},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...t){const[n,i,s]=t,o={};let a=null,c=null;if(!Object(r["p"])(n))throw le(ue.INVALID_ARGUMENT);const u=n;return Object(r["p"])(i)?o.locale=i:Object(r["g"])(i)?a=i:Object(r["n"])(i)&&(c=i),Object(r["g"])(s)?a=s:Object(r["n"])(s)&&(c=s),Reflect.apply(e.t,e,[u,a||c||{},o])},rt(...t){return Reflect.apply(e.rt,e,[...t])},tc(...t){const[n,i,s]=t,o={plural:1};let a=null,c=null;if(!Object(r["p"])(n))throw le(ue.INVALID_ARGUMENT);const u=n;return Object(r["p"])(i)?o.locale=i:Object(r["l"])(i)?o.plural=i:Object(r["g"])(i)?a=i:Object(r["n"])(i)&&(c=i),Object(r["p"])(s)?o.locale=s:Object(r["g"])(s)?a=s:Object(r["n"])(s)&&(c=s),Reflect.apply(e.t,e,[u,a||c||{},o])},te(t,n){return e.te(t,n)},tm(t){return e.tm(t)},getLocaleMessage(t){return e.getLocaleMessage(t)},setLocaleMessage(t,n){e.setLocaleMessage(t,n)},mergeLocaleMessage(t,n){e.mergeLocaleMessage(t,n)},d(...t){return Reflect.apply(e.d,e,[...t])},getDateTimeFormat(t){return e.getDateTimeFormat(t)},setDateTimeFormat(t,n){e.setDateTimeFormat(t,n)},mergeDateTimeFormat(t,n){e.mergeDateTimeFormat(t,n)},n(...t){return Reflect.apply(e.n,e,[...t])},getNumberFormat(t){return e.getNumberFormat(t)},setNumberFormat(t,n){e.setNumberFormat(t,n)},mergeNumberFormat(t,n){e.mergeNumberFormat(t,n)},getChoiceIndex(t,e){return-1},__onComponentInstanceCreated(e){const{componentInstanceCreatedListener:r}=t;r&&r(e,n)}};return n}}const Ce={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>"parent"===t||"global"===t,default:"parent"},i18n:{type:Object}};function je({slots:t},e){return 1===e.length&&"default"===e[0]?t.default?t.default():[]:e.reduce((e,n)=>{const r=t[n];return r&&(e[n]=r()),e},{})}function Le(t){return ee["a"]}const Re={name:"i18n-t",props:Object(r["a"])({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>Object(r["l"])(t)||!isNaN(t)}},Ce),setup(t,e){const{slots:n,attrs:i}=e,s=t.i18n||Ke({useScope:t.scope,__useComponent:!0}),o=Object.keys(n).filter(t=>"_"!==t);return()=>{const n={};t.locale&&(n.locale=t.locale),void 0!==t.plural&&(n.plural=Object(r["p"])(t.plural)?+t.plural:t.plural);const a=je(e,o),c=s[he](t.keypath,a,n),u=Object(r["a"])({},i),l=Object(r["p"])(t.tag)||Object(r["m"])(t.tag)?t.tag:Le();return Object(ee["n"])(l,u,c)}}};function De(t,e,n,i){const{slots:s,attrs:o}=e;return()=>{const e={part:!0};let a={};t.locale&&(e.locale=t.locale),Object(r["p"])(t.format)?e.key=t.format:Object(r["m"])(t.format)&&(Object(r["p"])(t.format.key)&&(e.key=t.format.key),a=Object.keys(t.format).reduce((e,i)=>n.includes(i)?Object(r["a"])({},e,{[i]:t.format[i]}):e,{}));const c=i(t.value,e,a);let u=[e.key];Object(r["g"])(c)?u=c.map((t,e)=>{const n=s[t.type];return n?n({[t.type]:t.value,index:e,parts:c}):[t.value]}):Object(r["p"])(c)&&(u=[c]);const l=Object(r["a"])({},o),h=Object(r["p"])(t.tag)||Object(r["m"])(t.tag)?t.tag:Le();return Object(ee["n"])(h,l,u)}}const Pe=["localeMatcher","style","unit","unitDisplay","currency","currencyDisplay","useGrouping","numberingSystem","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","notation","formatMatcher"],xe={name:"i18n-n",props:Object(r["a"])({value:{type:Number,required:!0},format:{type:[String,Object]}},Ce),setup(t,e){const n=t.i18n||Ke({useScope:"parent",__useComponent:!0});return De(t,e,Pe,(...t)=>n[de](...t))}},Me=["dateStyle","timeStyle","fractionalSecondDigits","calendar","dayPeriod","numberingSystem","localeMatcher","timeZone","hour12","hourCycle","formatMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName"],Fe={name:"i18n-d",props:Object(r["a"])({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Ce),setup(t,e){const n=t.i18n||Ke({useScope:"parent",__useComponent:!0});return De(t,e,Me,(...t)=>n[fe](...t))}};function Ue(t,e){const n=t;if("composition"===t.mode)return n.__getInstance(e)||t.global;{const r=n.__getInstance(e);return null!=r?r.__composer:t.global.__composer}}function Ve(t){const e=(e,{instance:n,value:r,modifiers:i})=>{if(!n||!n.$)throw le(ue.UNEXPECTED_ERROR);const s=Ue(t,n.$);const o=Be(r);e.textContent=Reflect.apply(s.t,s,[...$e(o)])};return{beforeMount:e,beforeUpdate:e}}function Be(t){if(Object(r["p"])(t))return{path:t};if(Object(r["n"])(t)){if(!("path"in t))throw le(ue.REQUIRED_VALUE,"path");return t}throw le(ue.INVALID_VALUE)}function $e(t){const{path:e,locale:n,args:i,choice:s,plural:o}=t,a={},c=i||{};return Object(r["p"])(n)&&(a.locale=n),Object(r["l"])(s)&&(a.plural=s),Object(r["l"])(o)&&(a.plural=o),[e,c,a]}function Ge(t,e,...n){const i=Object(r["n"])(n[0])?n[0]:{},s=!!i.useI18nComponentName,o=!Object(r["h"])(i.globalInstall)||i.globalInstall;o&&(t.component(s?"i18n":Re.name,Re),t.component(xe.name,xe),t.component(Fe.name,Fe)),t.directive("t",Ve(e))}function qe(t,e,n){return{beforeCreate(){const r=Object(ee["m"])();if(!r)throw le(ue.UNEXPECTED_ERROR);const i=this.$options;if(i.i18n){const n=i.i18n;i.__i18n&&(n.__i18n=i.__i18n),n.__root=e,this===this.$root?this.$i18n=He(t,n):(n.__injectWithOption=!0,this.$i18n=Ne(n))}else i.__i18n?this===this.$root?this.$i18n=He(t,i):this.$i18n=Ne({__i18n:i.__i18n,__injectWithOption:!0,__root:e}):this.$i18n=t;i.__i18nGlobal&&we(e,i,i),t.__onComponentInstanceCreated(this.$i18n),n.__setInstance(r,this.$i18n),this.$t=(...t)=>this.$i18n.t(...t),this.$rt=(...t)=>this.$i18n.rt(...t),this.$tc=(...t)=>this.$i18n.tc(...t),this.$te=(t,e)=>this.$i18n.te(t,e),this.$d=(...t)=>this.$i18n.d(...t),this.$n=(...t)=>this.$i18n.n(...t),this.$tm=t=>this.$i18n.tm(t)},mounted(){0},unmounted(){const t=Object(ee["m"])();if(!t)throw le(ue.UNEXPECTED_ERROR);Object(ee["q"])(()=>{delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,n.__deleteInstance(t),delete this.$i18n})}}}function He(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[pe](e.pluralizationRules||t.pluralizationRules);const n=ve(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(e=>t.mergeLocaleMessage(e,n[e])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(n=>t.mergeDateTimeFormat(n,e.datetimeFormats[n])),e.numberFormats&&Object.keys(e.numberFormats).forEach(n=>t.mergeNumberFormat(n,e.numberFormats[n])),t}const We=Object(r["q"])("global-vue-i18n");function ze(t={},e){const n=__VUE_I18N_LEGACY_API__&&Object(r["h"])(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,i=!!t.globalInjection,s=new Map,o=Xe(t,n),a=Object(r["q"])("");function c(t){return s.get(t)||null}function u(t,e){s.set(t,e)}function l(t){s.delete(t)}{const t={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},async install(e,...r){e.__VUE_I18N_SYMBOL__=a,e.provide(e.__VUE_I18N_SYMBOL__,t),!n&&i&&rn(e,t.global),__VUE_I18N_FULL_INSTALL__&&Ge(e,t,...r),__VUE_I18N_LEGACY_API__&&n&&e.mixin(qe(o,o.__composer,t))},get global(){return o},__instances:s,__getInstance:c,__setInstance:u,__deleteInstance:l};return t}}function Ke(t={}){const e=Object(ee["m"])();if(null==e)throw le(ue.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&null!=e.appContext.app&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw le(ue.NOT_INSLALLED);const n=Ye(e),i=Je(n),s=_e(e),o=Qe(t,s);if("global"===o)return we(i,t,s),i;if("parent"===o){let r=Ze(n,e,t.__useComponent);return null==r&&(r=i),r}if("legacy"===n.mode)throw le(ue.NOT_AVAILABLE_IN_LEGACY_MODE);const a=n;let c=a.__getInstance(e);if(null==c){const n=Object(r["a"])({},t);"__i18n"in s&&(n.__i18n=s.__i18n),i&&(n.__root=i),c=Ae(n),tn(a,e,c),a.__setInstance(e,c)}return c}function Xe(t,e,n){return __VUE_I18N_LEGACY_API__&&e?Ne(t):Ae(t)}function Ye(t){{const e=Object(ee["o"])(t.isCE?We:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw le(t.isCE?ue.NOT_INSLALLED_WITH_PROVIDE:ue.UNEXPECTED_ERROR);return e}}function Qe(t,e){return Object(r["j"])(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function Je(t){return"composition"===t.mode?t.global:t.global.__composer}function Ze(t,e,n=!1){let r=null;const i=e.root;let s=e.parent;while(null!=s){const e=t;if("composition"===t.mode)r=e.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const t=e.__getInstance(s);null!=t&&(r=t.__composer,n&&r&&!r[me]&&(r=null))}if(null!=r)break;if(i===s)break;s=s.parent}return r}function tn(t,e,n){Object(ee["v"])(()=>{0},e),Object(ee["w"])(()=>{t.__deleteInstance(e)},e)}const en=["locale","fallbackLocale","availableLocales"],nn=["t","rt","d","n","tm"];function rn(t,e){const n=Object.create(null);en.forEach(t=>{const r=Object.getOwnPropertyDescriptor(e,t);if(!r)throw le(ue.UNEXPECTED_ERROR);const i=Object(ee["p"])(r.value)?{get(){return r.value.value},set(t){r.value.value=t}}:{get(){return r.get&&r.get()}};Object.defineProperty(n,t,i)}),t.config.globalProperties.$i18n=n,nn.forEach(n=>{const r=Object.getOwnPropertyDescriptor(e,n);if(!r||!r.value)throw le(ue.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,"$"+n,r)})}if(wt(Rt),Et(W),Ot(ut),re(),__INTLIFY_PROD_DEVTOOLS__){const t=Object(r["e"])();t.__INTLIFY__=!0,rt(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}},4840:function(t,e,n){var r=n("825a"),i=n("5087"),s=n("b622"),o=s("species");t.exports=function(t,e){var n,s=r(t).constructor;return void 0===s||void 0==(n=r(s)[o])?e:i(n)}},"485a":function(t,e,n){var r=n("da84"),i=n("c65b"),s=n("1626"),o=n("861d"),a=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&s(n=t.toString)&&!o(r=i(n,t)))return r;if(s(n=t.valueOf)&&!o(r=i(n,t)))return r;if("string"!==e&&s(n=t.toString)&&!o(r=i(n,t)))return r;throw a("Can't convert object to primitive value")}},4930:function(t,e,n){var r=n("2d00"),i=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(t,e,n){var r=n("fc6a"),i=n("23cb"),s=n("07fa"),o=function(t){return function(e,n,o){var a,c=r(e),u=s(c),l=i(o,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},"4e82":function(t,e,n){"use strict";var r=n("23e7"),i=n("e330"),s=n("59ed"),o=n("7b0b"),a=n("07fa"),c=n("577e"),u=n("d039"),l=n("addb"),h=n("a640"),f=n("04d1"),d=n("d998"),p=n("2d00"),m=n("512c"),g=[],v=i(g.sort),y=i(g.push),b=u((function(){g.sort(void 0)})),_=u((function(){g.sort(null)})),w=h("sort"),E=!u((function(){if(p)return p<70;if(!(f&&f>3)){if(d)return!0;if(m)return m<603;var t,e,n,r,i="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)g.push({k:e+r,v:n})}for(g.sort((function(t,e){return e.v-t.v})),r=0;r<g.length;r++)e=g[r].k.charAt(0),i.charAt(i.length-1)!==e&&(i+=e);return"DGBEFHACIJK"!==i}})),O=b||!_||!w||!E,T=function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:c(e)>c(n)?1:-1}};r({target:"Array",proto:!0,forced:O},{sort:function(t){void 0!==t&&s(t);var e=o(this);if(E)return void 0===t?v(e):v(e,t);var n,r,i=[],c=a(e);for(r=0;r<c;r++)r in e&&y(i,e[r]);l(i,T(t)),n=i.length,r=0;while(r<n)e[r]=i[r++];while(r<c)delete e[r++];return e}})},5087:function(t,e,n){var r=n("da84"),i=n("68ee"),s=n("0d51"),o=r.TypeError;t.exports=function(t){if(i(t))return t;throw o(s(t)+" is not a constructor")}},"50c4":function(t,e,n){var r=n("5926"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},"512c":function(t,e,n){var r=n("342f"),i=r.match(/AppleWebKit\/(\d+)\./);t.exports=!!i&&+i[1]},5502:function(t,e,n){"use strict";n.d(e,"a",(function(){return Y})),n.d(e,"b",(function(){return o}));var r=n("7a23"),i=n("3f4e"),s="store";function o(t){return void 0===t&&(t=null),Object(r["o"])(null!==t?t:s)}function a(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function c(t){return null!==t&&"object"===typeof t}function u(t){return t&&"function"===typeof t.then}function l(t,e){if(!t)throw new Error("[vuex] "+e)}function h(t,e){return function(){return t(e)}}function f(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function d(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;m(t,n,[],t._modules.root,!0),p(t,n,e)}function p(t,e,n){var i=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,o={};a(s,(function(e,n){o[n]=h(e,t),Object.defineProperty(t.getters,n,{get:function(){return o[n]()},enumerable:!0})})),t._state=Object(r["B"])({data:e}),t.strict&&w(t),i&&n&&t._withCommit((function(){i.data=null}))}function m(t,e,n,r,i){var s=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o]&&console.error("[vuex] duplicate namespace "+o+" for the namespaced module "+n.join("/")),t._modulesNamespaceMap[o]=r),!s&&!i){var a=E(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){c in a&&console.warn('[vuex] state field "'+c+'" was overridden by a module with the same name at "'+n.join(".")+'"'),a[c]=r.state}))}var u=r.context=g(t,o,n);r.forEachMutation((function(e,n){var r=o+n;y(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:o+n,i=e.handler||e;b(t,r,i,u)})),r.forEachGetter((function(e,n){var r=o+n;_(t,r,e,u)})),r.forEachChild((function(r,s){m(t,e,n.concat(s),r,i)}))}function g(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var s=O(n,r,i),o=s.payload,a=s.options,c=s.type;if(a&&a.root||(c=e+c,t._actions[c]))return t.dispatch(c,o);console.error("[vuex] unknown local action type: "+s.type+", global type: "+c)},commit:r?t.commit:function(n,r,i){var s=O(n,r,i),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=e+c,t._mutations[c])?t.commit(c,o,a):console.error("[vuex] unknown local mutation type: "+s.type+", global type: "+c)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return v(t,e)}},state:{get:function(){return E(t.state,n)}}}),i}function v(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function y(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function b(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return u(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function _(t,e,n,r){t._wrappedGetters[e]?console.error("[vuex] duplicate getter key: "+e):t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)}}function w(t){Object(r["L"])((function(){return t._state.data}),(function(){l(t._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function E(t,e){return e.reduce((function(t,e){return t[e]}),t)}function O(t,e,n){return c(t)&&t.type&&(n=e,e=t,t=t.type),l("string"===typeof t,"expects string as the type, but found "+typeof t+"."),{type:t,payload:e,options:n}}var T="vuex bindings",I="vuex:mutations",S="vuex:actions",A="vuex",k=0;function N(t,e){Object(i["setupDevtoolsPlugin"])({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[T]},(function(n){n.addTimelineLayer({id:I,label:"Vuex Mutations",color:C}),n.addTimelineLayer({id:S,label:"Vuex Actions",color:C}),n.addInspector({id:A,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===t&&n.inspectorId===A)if(n.filter){var r=[];x(r,e._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[P(e._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===t&&n.inspectorId===A){var r=n.nodeId;v(e,r),n.state=M(U(e._modules,r),"root"===r?e.getters:e._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===t&&n.inspectorId===A){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit((function(){n.set(e._state.data,i,n.state.value)}))}})),e.subscribe((function(t,e){var r={};t.payload&&(r.payload=t.payload),r.state=e,n.notifyComponentUpdate(),n.sendInspectorTree(A),n.sendInspectorState(A),n.addTimelineEvent({layerId:I,event:{time:Date.now(),title:t.type,data:r}})})),e.subscribeAction({before:function(t,e){var r={};t.payload&&(r.payload=t.payload),t._id=k++,t._time=Date.now(),r.state=e,n.addTimelineEvent({layerId:S,event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:r}})},after:function(t,e){var r={},i=Date.now()-t._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},t.payload&&(r.payload=t.payload),r.state=e,n.addTimelineEvent({layerId:S,event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:r}})}})}))}var C=8702998,j=6710886,L=16777215,R={label:"namespaced",textColor:L,backgroundColor:j};function D(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function P(t,e){return{id:e||"root",label:D(e),tags:t.namespaced?[R]:[],children:Object.keys(t._children).map((function(n){return P(t._children[n],e+n+"/")}))}}function x(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[R]:[]}),Object.keys(e._children).forEach((function(i){x(t,e._children[i],n,r+i+"/")}))}function M(t,e,n){e="root"===n?e:e[n];var r=Object.keys(e),i={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(r.length){var s=F(e);i.getters=Object.keys(s).map((function(t){return{key:t.endsWith("/")?D(t):t,editable:!1,value:V((function(){return s[t]}))}}))}return i}function F(t){var e={};return Object.keys(t).forEach((function(n){var r=n.split("/");if(r.length>1){var i=e,s=r.pop();r.forEach((function(t){i[t]||(i[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),i=i[t]._custom.value})),i[s]=V((function(){return t[n]}))}else e[n]=V((function(){return t[n]}))})),e}function U(t,e){var n=e.split("/").filter((function(t){return t}));return n.reduce((function(t,r,i){var s=t[r];if(!s)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?s:s._children}),"root"===e?t:t.root._children)}function V(t){try{return t()}catch(e){return e}}var B=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},$={namespaced:{configurable:!0}};$.namespaced.get=function(){return!!this._rawModule.namespaced},B.prototype.addChild=function(t,e){this._children[t]=e},B.prototype.removeChild=function(t){delete this._children[t]},B.prototype.getChild=function(t){return this._children[t]},B.prototype.hasChild=function(t){return t in this._children},B.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},B.prototype.forEachChild=function(t){a(this._children,t)},B.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},B.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},B.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(B.prototype,$);var G=function(t){this.register([],t,!1)};function q(t,e,n){if(K(t,n),e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");q(t.concat(r),e.getChild(r),n.modules[r])}}G.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},G.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},G.prototype.update=function(t){q([],this.root,t)},G.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0),K(t,e);var i=new B(e,n);if(0===t.length)this.root=i;else{var s=this.get(t.slice(0,-1));s.addChild(t[t.length-1],i)}e.modules&&a(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},G.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r?r.runtime&&e.removeChild(n):console.warn("[vuex] trying to unregister module '"+n+"', which is not registered")},G.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var H={assert:function(t){return"function"===typeof t},expected:"function"},W={assert:function(t){return"function"===typeof t||"object"===typeof t&&"function"===typeof t.handler},expected:'function or object with "handler" function'},z={getters:H,mutations:H,actions:W};function K(t,e){Object.keys(z).forEach((function(n){if(e[n]){var r=z[n];a(e[n],(function(e,i){l(r.assert(e),X(t,n,i,e,r.expected))}))}}))}function X(t,e,n,r,i){var s=e+" should be "+i+' but "'+e+"."+n+'"';return t.length>0&&(s+=' in module "'+t.join(".")+'"'),s+=" is "+JSON.stringify(r)+".",s}function Y(t){return new Q(t)}var Q=function t(e){var n=this;void 0===e&&(e={}),l("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),l(this instanceof t,"store must be called with the new operator.");var r=e.plugins;void 0===r&&(r=[]);var i=e.strict;void 0===i&&(i=!1);var s=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new G(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var o=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(t,e){return c.call(o,t,e)},this.commit=function(t,e,n){return u.call(o,t,e,n)},this.strict=i;var h=this._modules.root.state;m(this,h,[],this._modules.root),p(this,h),r.forEach((function(t){return t(n)}))},J={state:{configurable:!0}};Q.prototype.install=function(t,e){t.provide(e||s,this),t.config.globalProperties.$store=this;var n=void 0===this._devtools||this._devtools;n&&N(t,this)},J.state.get=function(){return this._state.data},J.state.set=function(t){l(!1,"use store.replaceState() to explicit replace store state.")},Q.prototype.commit=function(t,e,n){var r=this,i=O(t,e,n),s=i.type,o=i.payload,a=i.options,c={type:s,payload:o},u=this._mutations[s];u?(this._withCommit((function(){u.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(c,r.state)})),a&&a.silent&&console.warn("[vuex] mutation type: "+s+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+s)},Q.prototype.dispatch=function(t,e){var n=this,r=O(t,e),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(u){console.warn("[vuex] error in before action subscribers: "),console.error(u)}var c=a.length>1?Promise.all(a.map((function(t){return t(s)}))):a[0](s);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(u){console.warn("[vuex] error in after action subscribers: "),console.error(u)}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(u){console.warn("[vuex] error in error action subscribers: "),console.error(u)}e(t)}))}))}console.error("[vuex] unknown action type: "+i)},Q.prototype.subscribe=function(t,e){return f(t,this._subscribers,e)},Q.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return f(n,this._actionSubscribers,e)},Q.prototype.watch=function(t,e,n){var i=this;return l("function"===typeof t,"store.watch only accepts a function."),Object(r["L"])((function(){return t(i.state,i.getters)}),e,Object.assign({},n))},Q.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},Q.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),l(Array.isArray(t),"module path must be a string or an Array."),l(t.length>0,"cannot register the root module by using registerModule."),this._modules.register(t,e),m(this,this.state,t,this._modules.get(t),n.preserveState),p(this,this.state)},Q.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),l(Array.isArray(t),"module path must be a string or an Array."),this._modules.unregister(t),this._withCommit((function(){var n=E(e.state,t.slice(0,-1));delete n[t[t.length-1]]})),d(this)},Q.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),l(Array.isArray(t),"module path must be a string or an Array."),this._modules.isRegistered(t)},Q.prototype.hotUpdate=function(t){this._modules.update(t),d(this,!0)},Q.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(Q.prototype,J);et((function(t,e){var n={};return tt(e)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),Z(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=nt(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),et((function(t,e){var n={};return tt(e)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),Z(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var s=nt(this.$store,"mapMutations",t);if(!s)return;r=s.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),et((function(t,e){var n={};return tt(e)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),Z(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||nt(this.$store,"mapGetters",t)){if(i in this.$store.getters)return this.$store.getters[i];console.error("[vuex] unknown getter: "+i)}},n[r].vuex=!0})),n})),et((function(t,e){var n={};return tt(e)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),Z(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var s=nt(this.$store,"mapActions",t);if(!s)return;r=s.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n}));function Z(t){return tt(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function tt(t){return Array.isArray(t)||c(t)}function et(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function nt(t,e,n){var r=t._modulesNamespaceMap[n];return r||console.error("[vuex] module namespace not found in "+e+"(): "+n),r}},5692:function(t,e,n){var r=n("c430"),i=n("c6cd");(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.19.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),i=n("e330"),s=n("241c"),o=n("7418"),a=n("825a"),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},"577e":function(t,e,n){var r=n("da84"),i=n("f5df"),s=r.String;t.exports=function(t){if("Symbol"===i(t))throw TypeError("Cannot convert a Symbol value to a string");return s(t)}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"589b":function(t,e,n){"use strict";n.d(e,"a",(function(){return z})),n.d(e,"b",(function(){return $})),n.d(e,"c",(function(){return B})),n.d(e,"d",(function(){return G})),n.d(e,"e",(function(){return X})),n.d(e,"f",(function(){return K})),n.d(e,"g",(function(){return Y}));var r=n("22e5"),i=n("e691"),s=n("1fd5");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.7.9",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",f="@firebase/analytics-compat",d="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",v="@firebase/auth-compat",y="@firebase/database",b="@firebase/database-compat",_="@firebase/functions",w="@firebase/functions-compat",E="@firebase/installations",O="@firebase/installations-compat",T="@firebase/messaging",I="@firebase/messaging-compat",S="@firebase/performance",A="@firebase/performance-compat",k="@firebase/remote-config",N="@firebase/remote-config-compat",C="@firebase/storage",j="@firebase/storage-compat",L="@firebase/firestore",R="@firebase/firestore-compat",D="firebase",P="9.5.0",x="[DEFAULT]",M={[c]:"fire-core",[h]:"fire-core-compat",[d]:"fire-analytics",[f]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[v]:"fire-auth-compat",[y]:"fire-rtdb",[b]:"fire-rtdb-compat",[_]:"fire-fn",[w]:"fire-fn-compat",[E]:"fire-iid",[O]:"fire-iid-compat",[T]:"fire-fcm",[I]:"fire-fcm-compat",[S]:"fire-perf",[A]:"fire-perf-compat",[k]:"fire-rc",[N]:"fire-rc-compat",[C]:"fire-gcs",[j]:"fire-gcs-compat",[L]:"fire-fst",[R]:"fire-fst-compat","fire-js":"fire-js",[D]:"fire-js-all"},F=new Map,U=new Map;function V(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function B(t){const e=t.name;if(U.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;U.set(e,t);for(const n of F.values())V(n,t);return!0}function $(t,e){return t.container.getProvider(e)}function G(t,e,n=x){$(t,e).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const q={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},H=new s["b"]("app","Firebase",q);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw H.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=P;function K(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:x,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw H.create("bad-app-name",{appName:String(i)});const o=F.get(i);if(o){if(Object(s["g"])(t,o.options)&&Object(s["g"])(n,o.config))return o;throw H.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of U.values())a.addComponent(r);const c=new W(t,n,a);return F.set(i,c),c}function X(t=x){const e=F.get(t);if(!e)throw H.create("no-app",{appName:t});return e}function Y(t,e,n){var i;let s=null!==(i=M[t])&&void 0!==i?i:t;n&&(s+="-"+n);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}B(new r["a"](s+"-version",()=>({library:s,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(t){B(new r["a"]("platform-logger",t=>new o(t),"PRIVATE")),Y(c,u,t),Y(c,u,"esm2017"),Y("fire-js","")}Q("")},"58a8":function(t,e,n){var r=n("e330"),i=n("1d80"),s=n("577e"),o=n("5899"),a=r("".replace),c="["+o+"]",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),h=function(t){return function(e){var n=s(i(e));return 1&t&&(n=a(n,u,"")),2&t&&(n=a(n,l,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},5926:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){var e=+t;return e!==e||0===e?0:(e>0?r:n)(e)}},"59ed":function(t,e,n){var r=n("da84"),i=n("1626"),s=n("0d51"),o=r.TypeError;t.exports=function(t){if(i(t))return t;throw o(s(t)+" is not a function")}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"5e77":function(t,e,n){var r=n("83ab"),i=n("1a2d"),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"605d":function(t,e,n){var r=n("c6b6"),i=n("da84");t.exports="process"==r(i.process)},6069:function(t,e){t.exports="object"==typeof window},"60da":function(t,e,n){"use strict";var r=n("83ab"),i=n("e330"),s=n("c65b"),o=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),h=n("44ad"),f=Object.assign,d=Object.defineProperty,p=i([].concat);t.exports=!f||o((function(){if(r&&1!==f({b:1},f(d({},"a",{enumerable:!0,get:function(){d(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach((function(t){e[t]=t})),7!=f({},t)[n]||a(f({},e)).join("")!=i}))?function(t,e){var n=l(t),i=arguments.length,o=1,f=c.f,d=u.f;while(i>o){var m,g=h(arguments[o++]),v=f?p(a(g),f(g)):a(g),y=v.length,b=0;while(y>b)m=v[b++],r&&!s(d,g,m)||(n[m]=g[m])}return n}:f},6547:function(t,e,n){var r=n("e330"),i=n("5926"),s=n("577e"),o=n("1d80"),a=r("".charAt),c=r("".charCodeAt),u=r("".slice),l=function(t){return function(e,n){var r,l,h=s(o(e)),f=i(n),d=h.length;return f<0||f>=d?t?"":void 0:(r=c(h,f),r<55296||r>56319||f+1===d||(l=c(h,f+1))<56320||l>57343?t?a(h,f):r:t?u(h,f,f+2):l-56320+(r-55296<<10)+65536)}};t.exports={codeAt:l(!1),charAt:l(!0)}},"65f0":function(t,e,n){var r=n("0b42");t.exports=function(t,e){return new(r(t))(0===e?0:e)}},"68ee":function(t,e,n){var r=n("e330"),i=n("d039"),s=n("1626"),o=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],h=a("Reflect","construct"),f=/^\s*(?:class|function)\b/,d=r(f.exec),p=!f.exec(u),m=function(t){if(!s(t))return!1;try{return h(u,l,t),!0}catch(e){return!1}},g=function(t){if(!s(t))return!1;switch(o(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return p||!!d(f,c(t))};t.exports=!h||i((function(){var t;return m(m.call)||!m(Object)||!m((function(){t=!0}))||t}))?g:m},"69f3":function(t,e,n){var r,i,s,o=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),h=n("1a2d"),f=n("c6cd"),d=n("f772"),p=n("d012"),m="Object already initialized",g=a.TypeError,v=a.WeakMap,y=function(t){return s(t)?i(t):r(t,{})},b=function(t){return function(e){var n;if(!u(e)||(n=i(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return n}};if(o||f.state){var _=f.state||(f.state=new v),w=c(_.get),E=c(_.has),O=c(_.set);r=function(t,e){if(E(_,t))throw new g(m);return e.facade=t,O(_,t,e),e},i=function(t){return w(_,t)||{}},s=function(t){return E(_,t)}}else{var T=d("state");p[T]=!0,r=function(t,e){if(h(t,T))throw new g(m);return e.facade=t,l(t,T,e),e},i=function(t){return h(t,T)?t[T]:{}},s=function(t){return h(t,T)}}t.exports={set:r,get:i,has:s,enforce:y,getterFor:b}},"6b0d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},"6c02":function(t,e,n){"use strict";n.d(e,"a",(function(){return Zt})),n.d(e,"b",(function(){return q})),n.d(e,"c",(function(){return re})),n.d(e,"d",(function(){return ne}));var r=n("7a23");n("3f4e");
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,s=t=>i?Symbol(t):"_vr_"+t,o=s("rvlm"),a=s("rvd"),c=s("r"),u=s("rl"),l=s("rvl"),h="undefined"!==typeof window;function f(t){return t.__esModule||i&&"Module"===t[Symbol.toStringTag]}const d=Object.assign;function p(t,e){const n={};for(const r in e){const i=e[r];n[r]=Array.isArray(i)?i.map(t):t(i)}return n}const m=()=>{};const g=/\/$/,v=t=>t.replace(g,"");function y(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),s=e.slice(a+1,c>-1?c:e.length),i=t(s)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=S(null!=r?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function b(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function _(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function w(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&E(e.matched[r],n.matched[i])&&O(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function E(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function O(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!T(t[n],e[n]))return!1;return!0}function T(t,e){return Array.isArray(t)?I(t,e):Array.isArray(e)?I(e,t):t===e}function I(t,e){return Array.isArray(e)?t.length===e.length&&t.every((t,n)=>t===e[n]):1===t.length&&t[0]===e}function S(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var A,k;(function(t){t["pop"]="pop",t["push"]="push"})(A||(A={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(k||(k={}));function N(t){if(!t)if(h){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),v(t)}const C=/^[^#]+#/;function j(t,e){return t.replace(C,"#")+e}function L(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const R=()=>({left:window.pageXOffset,top:window.pageYOffset});function D(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=L(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function P(t,e){const n=history.state?history.state.position-e:-1;return n+t}const x=new Map;function M(t,e){x.set(t,e)}function F(t){const e=x.get(t);return x.delete(t),e}let U=()=>location.protocol+"//"+location.host;function V(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let e=i.includes(t.slice(s))?t.slice(s).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),_(n,"")}const o=_(n,t);return o+r+i}function B(t,e,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=V(t,location),c=n.value,u=e.value;let l=0;if(s){if(n.value=a,e.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach(t=>{t(n.value,c,{delta:l,type:A.pop,direction:l?l>0?k.forward:k.back:k.unknown})})};function c(){o=n.value}function u(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return s.push(e),e}function l(){const{history:t}=window;t.state&&t.replaceState(d({},t.state,{scroll:R()}),"")}function h(){for(const t of s)t();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function $(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?R():null}}function G(t){const{history:e,location:n}=window,r={value:V(t,n)},i={value:e.state};function s(r,s,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:U()+t+r;try{e[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(t,n){const o=d({},e.state,$(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});s(t,o,!0),r.value=t}function a(t,n){const o=d({},i.value,e.state,{forward:t,scroll:R()});s(o.current,o,!0);const a=d({},$(r.value,t,null),{position:o.position+1},n);s(t,a,!1),r.value=t}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:o}}function q(t){t=N(t);const e=G(t),n=B(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=d({location:"",base:t,go:r,createHref:j.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function H(t){return"string"===typeof t||t&&"object"===typeof t}function W(t){return"string"===typeof t||"symbol"===typeof t}const z={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},K=s("nf");var X;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(X||(X={}));function Y(t,e){return d(new Error,{type:t,[K]:!0},e)}function Q(t,e){return t instanceof Error&&K in t&&(null==e||!!(t.type&e))}const J="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},tt=/[.+*?^${}()[\]/\\]/g;function et(t,e){const n=d({},Z,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const t=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let e=0;e<l.length;e++){const r=l[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(tt,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:a,regexp:c}=r;s.push({name:t,repeatable:n,optional:a});const h=c||J;if(h!==J){o+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${t}" (${h}): `+u.message)}}let f=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;e||(f=a&&l.length<2?`(?:/${f})`:"/"+f),a&&(f+="?"),i+=f,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=s[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function c(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:s,repeatable:o,optional:a}=t,c=s in e?e[s]:"";if(Array.isArray(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:o,score:r,keys:s,parse:a,stringify:c}}function nt(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function rt(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=nt(r[n],i[n]);if(t)return t;n++}return i.length-r.length}const it={type:0,value:""},st=/[a-zA-Z0-9_]/;function ot(t){if(!t)return[[]];if("/"===t)return[[it]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:st.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function at(t,e,n){const r=et(ot(t.path),n);const i=d(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function ct(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function s(t,n,r){const i=!r,a=lt(t);a.aliasOf=r&&r.record;const u=pt(e,t),l=[a];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)l.push(d({},a,{components:r?r.record.components:a.components,path:t,aliasOf:r?r.record:a}))}let h,f;for(const e of l){const{path:l}=e;if(n&&"/"!==l[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(l&&r+l)}if(h=at(e,n,u),r?r.alias.push(h):(f=f||h,f!==h&&f.alias.push(h),i&&t.name&&!ft(h)&&o(t.name)),"children"in a){const t=a.children;for(let e=0;e<t.length;e++)s(t[e],h,r&&r.children[e])}r=r||h,c(h)}return f?()=>{o(f)}:m}function o(t){if(W(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function a(){return n}function c(t){let e=0;while(e<n.length&&rt(t,n[e])>=0)e++;n.splice(e,0,t),t.record.name&&!ft(t)&&r.set(t.record.name,t)}function u(t,e){let i,s,o,a={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw Y(1,{location:t});o=i.record.name,a=d(ut(e.params,i.keys.filter(t=>!t.optional).map(t=>t.name)),t.params),s=i.stringify(a)}else if("path"in t)s=t.path,i=n.find(t=>t.re.test(s)),i&&(a=i.parse(s),o=i.record.name);else{if(i=e.name?r.get(e.name):n.find(t=>t.re.test(e.path)),!i)throw Y(1,{location:t,currentLocation:e});o=i.record.name,a=d({},e.params,t.params),s=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:o,path:s,params:a,matched:c,meta:dt(c)}}return e=pt({strict:!1,end:!0,sensitive:!1},e),t.forEach(t=>s(t)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function ut(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function lt(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ht(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function ht(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function ft(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function dt(t){return t.reduce((t,e)=>d(t,e.meta),{})}function pt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const mt=/#/g,gt=/&/g,vt=/\//g,yt=/=/g,bt=/\?/g,_t=/\+/g,wt=/%5B/g,Et=/%5D/g,Ot=/%5E/g,Tt=/%60/g,It=/%7B/g,St=/%7C/g,At=/%7D/g,kt=/%20/g;function Nt(t){return encodeURI(""+t).replace(St,"|").replace(wt,"[").replace(Et,"]")}function Ct(t){return Nt(t).replace(It,"{").replace(At,"}").replace(Ot,"^")}function jt(t){return Nt(t).replace(_t,"%2B").replace(kt,"+").replace(mt,"%23").replace(gt,"%26").replace(Tt,"`").replace(It,"{").replace(At,"}").replace(Ot,"^")}function Lt(t){return jt(t).replace(yt,"%3D")}function Rt(t){return Nt(t).replace(mt,"%23").replace(bt,"%3F")}function Dt(t){return null==t?"":Rt(t).replace(vt,"%2F")}function Pt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function xt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(_t," "),n=t.indexOf("="),s=Pt(n<0?t:t.slice(0,n)),o=n<0?null:Pt(t.slice(n+1));if(s in e){let t=e[s];Array.isArray(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function Mt(t){let e="";for(let n in t){const r=t[n];if(n=Lt(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map(t=>t&&jt(t)):[r&&jt(r)];i.forEach(t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))})}return e}function Ft(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=Array.isArray(r)?r.map(t=>null==t?null:""+t):null==r?r:""+r)}return e}function Ut(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Vt(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=t=>{!1===t?a(Y(4,{from:n,to:e})):t instanceof Error?a(t):H(t)?a(Y(2,{from:e,to:t})):(s&&r.enterCallbacks[i]===s&&"function"===typeof t&&s.push(t),o())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(t=>a(t))})}function Bt(t,e,n,r){const i=[];for(const s of t)for(const t in s.components){let o=s.components[t];if("beforeRouteEnter"===e||s.instances[t])if($t(o)){const a=o.__vccOpts||o,c=a[e];c&&i.push(Vt(c,n,r,s,t))}else{let a=o();0,i.push(()=>a.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${s.path}"`));const o=f(i)?i.default:i;s.components[t]=o;const a=o.__vccOpts||o,c=a[e];return c&&Vt(c,n,r,s,t)()}))}}return i}function $t(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Gt(t){const e=Object(r["o"])(c),n=Object(r["o"])(u),i=Object(r["d"])(()=>e.resolve(Object(r["I"])(t.to))),s=Object(r["d"])(()=>{const{matched:t}=i.value,{length:e}=t,r=t[e-1],s=n.matched;if(!r||!s.length)return-1;const o=s.findIndex(E.bind(null,r));if(o>-1)return o;const a=Kt(t[e-2]);return e>1&&Kt(r)===a&&s[s.length-1].path!==a?s.findIndex(E.bind(null,t[e-2])):o}),o=Object(r["d"])(()=>s.value>-1&&zt(n.params,i.value.params)),a=Object(r["d"])(()=>s.value>-1&&s.value===n.matched.length-1&&O(n.params,i.value.params));function l(n={}){return Wt(n)?e[Object(r["I"])(t.replace)?"replace":"push"](Object(r["I"])(t.to)).catch(m):Promise.resolve()}return{route:i,href:Object(r["d"])(()=>i.value.href),isActive:o,isExactActive:a,navigate:l}}const qt=Object(r["l"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Gt,setup(t,{slots:e}){const n=Object(r["B"])(Gt(t)),{options:i}=Object(r["o"])(c),s=Object(r["d"])(()=>({[Xt(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Xt(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Object(r["n"])("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ht=qt;function Wt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function zt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((t,e)=>t!==i[e]))return!1}return!0}function Kt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xt=(t,e,n)=>null!=t?t:null!=e?e:n,Yt=Object(r["l"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const i=Object(r["o"])(l),s=Object(r["d"])(()=>t.route||i.value),c=Object(r["o"])(a,0),u=Object(r["d"])(()=>s.value.matched[c]);Object(r["z"])(a,c+1),Object(r["z"])(o,u),Object(r["z"])(l,s);const h=Object(r["C"])();return Object(r["L"])(()=>[h.value,u.value,t.name],([t,e,n],[r,i,s])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&E(e,i)&&r||(e.enterCallbacks[n]||[]).forEach(e=>e(t))},{flush:"post"}),()=>{const i=s.value,o=u.value,a=o&&o.components[t.name],c=t.name;if(!a)return Qt(n.default,{Component:a,route:i});const l=o.props[t.name],f=l?!0===l?i.params:"function"===typeof l?l(i):l:null,p=t=>{t.component.isUnmounted&&(o.instances[c]=null)},m=Object(r["n"])(a,d({},f,e,{onVnodeUnmounted:p,ref:h}));return Qt(n.default,{Component:m,route:i})||m}}});function Qt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const Jt=Yt;function Zt(t){const e=ct(t.routes,t),n=t.parseQuery||xt,i=t.stringifyQuery||Mt,s=t.history;const o=Ut(),a=Ut(),f=Ut(),g=Object(r["G"])(z);let v=z;h&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=p.bind(null,t=>""+t),E=p.bind(null,Dt),O=p.bind(null,Pt);function T(t,n){let r,i;return W(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function I(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function S(){return e.getRoutes().map(t=>t.record)}function k(t){return!!e.getRecordMatcher(t)}function N(t,r){if(r=d({},r||g.value),"string"===typeof t){const i=y(n,t,r.path),o=e.resolve({path:i.path},r),a=s.createHref(i.fullPath);return d(i,o,{params:O(o.params),hash:Pt(i.hash),redirectedFrom:void 0,href:a})}let o;if("path"in t)o=d({},t,{path:y(n,t.path,r.path).path});else{const e=d({},t.params);for(const t in e)null==e[t]&&delete e[t];o=d({},t,{params:E(t.params)}),r.params=E(r.params)}const a=e.resolve(o,r),c=t.hash||"";a.params=_(O(a.params));const u=b(i,d({},t,{hash:Ct(c),path:a.path})),l=s.createHref(u);return d({fullPath:u,hash:c,query:i===Mt?Ft(t.query):t.query||{}},a,{redirectedFrom:void 0,href:l})}function C(t){return"string"===typeof t?y(n,t,g.value.path):d({},t)}function j(t,e){if(v!==t)return Y(8,{from:e,to:t})}function L(t){return V(t)}function x(t){return L(d(C(t),{replace:!0}))}function U(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=C(r):{path:r},r.params={}),d({query:t.query,hash:t.hash,params:t.params},r)}}function V(t,e){const n=v=N(t),r=g.value,s=t.state,o=t.force,a=!0===t.replace,c=U(n);if(c)return V(d(C(c),{state:s,force:o,replace:a}),e||n);const u=n;let l;return u.redirectedFrom=e,!o&&w(i,r,n)&&(l=Y(16,{to:u,from:r}),rt(r,r,!0,!1)),(l?Promise.resolve(l):$(u,r)).catch(t=>Q(t)?t:tt(t,u,r)).then(t=>{if(t){if(Q(t,2))return V(d(C(t.to),{state:s,force:o,replace:a}),e||u)}else t=q(u,r,!0,a,s);return G(u,r,t),t})}function B(t,e){const n=j(t,e);return n?Promise.reject(n):Promise.resolve()}function $(t,e){let n;const[r,i,s]=ee(t,e);n=Bt(r.reverse(),"beforeRouteLeave",t,e);for(const o of r)o.leaveGuards.forEach(r=>{n.push(Vt(r,t,e))});const c=B.bind(null,t,e);return n.push(c),te(n).then(()=>{n=[];for(const r of o.list())n.push(Vt(r,t,e));return n.push(c),te(n)}).then(()=>{n=Bt(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach(r=>{n.push(Vt(r,t,e))});return n.push(c),te(n)}).then(()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&!e.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(Vt(i,t,e));else n.push(Vt(r.beforeEnter,t,e));return n.push(c),te(n)}).then(()=>(t.matched.forEach(t=>t.enterCallbacks={}),n=Bt(s,"beforeRouteEnter",t,e),n.push(c),te(n))).then(()=>{n=[];for(const r of a.list())n.push(Vt(r,t,e));return n.push(c),te(n)}).catch(t=>Q(t,8)?t:Promise.reject(t))}function G(t,e,n){for(const r of f.list())r(t,e,n)}function q(t,e,n,r,i){const o=j(t,e);if(o)return o;const a=e===z,c=h?history.state:{};n&&(r||a?s.replace(t.fullPath,d({scroll:a&&c&&c.scroll},i)):s.push(t.fullPath,i)),g.value=t,rt(t,e,n,a),nt()}let H;function K(){H=s.listen((t,e,n)=>{const r=N(t),i=U(r);if(i)return void V(d(i,{replace:!0}),r).catch(m);v=r;const o=g.value;h&&M(P(o.fullPath,n.delta),R()),$(r,o).catch(t=>Q(t,12)?t:Q(t,2)?(V(t.to,r).then(t=>{Q(t,20)&&!n.delta&&n.type===A.pop&&s.go(-1,!1)}).catch(m),Promise.reject()):(n.delta&&s.go(-n.delta,!1),tt(t,r,o))).then(t=>{t=t||q(r,o,!1),t&&(n.delta?s.go(-n.delta,!1):n.type===A.pop&&Q(t,20)&&s.go(-1,!1)),G(r,o,t)}).catch(m)})}let X,J=Ut(),Z=Ut();function tt(t,e,n){nt(t);const r=Z.list();return r.length?r.forEach(r=>r(t,e,n)):console.error(t),Promise.reject(t)}function et(){return X&&g.value!==z?Promise.resolve():new Promise((t,e)=>{J.add([t,e])})}function nt(t){X||(X=!0,K(),J.list().forEach(([e,n])=>t?n(t):e()),J.reset())}function rt(e,n,i,s){const{scrollBehavior:o}=t;if(!h||!o)return Promise.resolve();const a=!i&&F(P(e.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return Object(r["q"])().then(()=>o(e,n,a)).then(t=>t&&D(t)).catch(t=>tt(t,e,n))}const it=t=>s.go(t);let st;const ot=new Set,at={currentRoute:g,addRoute:T,removeRoute:I,hasRoute:k,getRoutes:S,resolve:N,options:t,push:L,replace:x,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:o.add,beforeResolve:a.add,afterEach:f.add,onError:Z.add,isReady:et,install(t){const e=this;t.component("RouterLink",Ht),t.component("RouterView",Jt),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["I"])(g)}),h&&!st&&g.value===z&&(st=!0,L(s.location).catch(t=>{0}));const n={};for(const s in z)n[s]=Object(r["d"])(()=>g.value[s]);t.provide(c,e),t.provide(u,Object(r["B"])(n)),t.provide(l,g);const i=t.unmount;ot.add(t),t.unmount=function(){ot.delete(t),ot.size<1&&(v=z,H&&H(),g.value=z,st=!1,X=!1),i()}}};return at}function te(t){return t.reduce((t,e)=>t.then(()=>e()),Promise.resolve())}function ee(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find(t=>E(t,s))?r.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find(t=>E(t,a))||i.push(a))}return[n,r,i]}function ne(){return Object(r["o"])(c)}function re(){return Object(r["o"])(u)}},"6eeb":function(t,e,n){var r=n("da84"),i=n("1626"),s=n("1a2d"),o=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,h=u.get,f=u.enforce,d=String(String).split("String");(t.exports=function(t,e,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,g=c&&void 0!==c.name?c.name:e;i(n)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||l&&n.name!==g)&&o(n,"name",g),u=f(n),u.source||(u.source=d.join("string"==typeof g?g:""))),t!==r?(h?!m&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},7156:function(t,e,n){var r=n("1626"),i=n("861d"),s=n("d2bb");t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},7418:function(t,e){e.f=Object.getOwnPropertySymbols},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(t,e,n){var r=n("cc12"),i=r("span").classList,s=i&&i.constructor&&i.constructor.prototype;t.exports=s===Object.prototype?void 0:s},"7a23":function(t,e,n){"use strict";n.d(e,"d",(function(){return Ht})),n.d(e,"p",(function(){return xt})),n.d(e,"B",(function(){return Ot})),n.d(e,"C",(function(){return Mt})),n.d(e,"G",(function(){return Ft})),n.d(e,"I",(function(){return Bt})),n.d(e,"r",(function(){return r["I"]})),n.d(e,"s",(function(){return r["J"]})),n.d(e,"H",(function(){return r["L"]})),n.d(e,"a",(function(){return Un})),n.d(e,"b",(function(){return Vn})),n.d(e,"f",(function(){return Qn})),n.d(e,"g",(function(){return ur})),n.d(e,"h",(function(){return Yn})),n.d(e,"i",(function(){return rr})),n.d(e,"j",(function(){return cr})),n.d(e,"k",(function(){return ir})),n.d(e,"l",(function(){return we})),n.d(e,"m",(function(){return Tr})),n.d(e,"n",(function(){return wi})),n.d(e,"o",(function(){return le})),n.d(e,"q",(function(){return ri})),n.d(e,"t",(function(){return Ie})),n.d(e,"u",(function(){return Se})),n.d(e,"v",(function(){return De})),n.d(e,"w",(function(){return Fe})),n.d(e,"x",(function(){return Hn})),n.d(e,"y",(function(){return Zt})),n.d(e,"z",(function(){return ue})),n.d(e,"A",(function(){return Jt})),n.d(e,"D",(function(){return pr})),n.d(e,"E",(function(){return mr})),n.d(e,"F",(function(){return Pn})),n.d(e,"L",(function(){return gi})),n.d(e,"M",(function(){return te})),n.d(e,"N",(function(){return _n})),n.d(e,"c",(function(){return es})),n.d(e,"e",(function(){return Cs})),n.d(e,"J",(function(){return ws})),n.d(e,"K",(function(){return Is})),n.d(e,"O",(function(){return Ts}));var r=n("9ff4");let i;const s=[];class o{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(t){if(this.active)try{return this.on(),t()}finally{this.off()}else 0}on(){this.active&&(s.push(this),i=this)}off(){this.active&&(s.pop(),i=s[s.length-1])}stop(t){if(this.active){if(this.effects.forEach(t=>t.stop()),this.cleanups.forEach(t=>t()),this.scopes&&this.scopes.forEach(t=>t.stop(!0)),this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function a(t,e){e=e||i,e&&e.active&&e.effects.push(t)}const c=t=>{const e=new Set(t);return e.w=0,e.n=0,e},u=t=>(t.w&m)>0,l=t=>(t.n&m)>0,h=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=m},f=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];u(i)&&!l(i)?i.delete(t):e[n++]=i,i.w&=~m,i.n&=~m}e.length=n}},d=new WeakMap;let p=0,m=1;const g=30,v=[];let y;const b=Symbol(""),_=Symbol("");class w{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],a(this,n)}run(){if(!this.active)return this.fn();if(!v.includes(this))try{return v.push(y=this),S(),m=1<<++p,p<=g?h(this):E(this),this.fn()}finally{p<=g&&f(this),m=1<<--p,A(),v.pop();const t=v.length;y=t>0?v[t-1]:void 0}}stop(){this.active&&(E(this),this.onStop&&this.onStop(),this.active=!1)}}function E(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let O=!0;const T=[];function I(){T.push(O),O=!1}function S(){T.push(O),O=!0}function A(){const t=T.pop();O=void 0===t||t}function k(t,e,n){if(!N())return;let r=d.get(t);r||d.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=c());const s=void 0;C(i,s)}function N(){return O&&void 0!==y}function C(t,e){let n=!1;p<=g?l(t)||(t.n|=m,n=!u(t)):n=!t.has(y),n&&(t.add(y),y.deps.push(t))}function j(t,e,n,i,s,o){const a=d.get(t);if(!a)return;let u=[];if("clear"===e)u=[...a.values()];else if("length"===n&&Object(r["o"])(t))a.forEach((t,e)=>{("length"===e||e>=i)&&u.push(t)});else switch(void 0!==n&&u.push(a.get(n)),e){case"add":Object(r["o"])(t)?Object(r["s"])(n)&&u.push(a.get("length")):(u.push(a.get(b)),Object(r["t"])(t)&&u.push(a.get(_)));break;case"delete":Object(r["o"])(t)||(u.push(a.get(b)),Object(r["t"])(t)&&u.push(a.get(_)));break;case"set":Object(r["t"])(t)&&u.push(a.get(b));break}if(1===u.length)u[0]&&L(u[0]);else{const t=[];for(const e of u)e&&t.push(...e);L(c(t))}}function L(t,e){for(const n of Object(r["o"])(t)?t:[...t])(n!==y||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const R=Object(r["H"])("__proto__,__v_isRef,__isVue"),D=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(r["E"])),P=V(),x=V(!1,!0),M=V(!0),F=U();function U(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...t){const n=Ct(this);for(let e=0,i=this.length;e<i;e++)k(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(Ct)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...t){I();const n=Ct(this)[e].apply(this,t);return A(),n}}),t}function V(t=!1,e=!1){return function(n,i,s){if("__v_isReactive"===i)return!t;if("__v_isReadonly"===i)return t;if("__v_raw"===i&&s===(t?e?_t:bt:e?yt:vt).get(n))return n;const o=Object(r["o"])(n);if(!t&&o&&Object(r["k"])(F,i))return Reflect.get(F,i,s);const a=Reflect.get(n,i,s);if(Object(r["E"])(i)?D.has(i):R(i))return a;if(t||k(n,"get",i),e)return a;if(xt(a)){const t=!o||!Object(r["s"])(i);return t?a.value:a}return Object(r["v"])(a)?t?It(a):Ot(a):a}}const B=G(),$=G(!0);function G(t=!1){return function(e,n,i,s){let o=e[n];if(!t&&(i=Ct(i),o=Ct(o),!Object(r["o"])(e)&&xt(o)&&!xt(i)))return o.value=i,!0;const a=Object(r["o"])(e)&&Object(r["s"])(n)?Number(n)<e.length:Object(r["k"])(e,n),c=Reflect.set(e,n,i,s);return e===Ct(s)&&(a?Object(r["j"])(i,o)&&j(e,"set",n,i,o):j(e,"add",n,i)),c}}function q(t,e){const n=Object(r["k"])(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&j(t,"delete",e,void 0,i),s}function H(t,e){const n=Reflect.has(t,e);return Object(r["E"])(e)&&D.has(e)||k(t,"has",e),n}function W(t){return k(t,"iterate",Object(r["o"])(t)?"length":b),Reflect.ownKeys(t)}const z={get:P,set:B,deleteProperty:q,has:H,ownKeys:W},K={get:M,set(t,e){return!0},deleteProperty(t,e){return!0}},X=Object(r["h"])({},z,{get:x,set:$}),Y=t=>t,Q=t=>Reflect.getPrototypeOf(t);function J(t,e,n=!1,r=!1){t=t["__v_raw"];const i=Ct(t),s=Ct(e);e!==s&&!n&&k(i,"get",e),!n&&k(i,"get",s);const{has:o}=Q(i),a=r?Y:n?Rt:Lt;return o.call(i,e)?a(t.get(e)):o.call(i,s)?a(t.get(s)):void(t!==i&&t.get(e))}function Z(t,e=!1){const n=this["__v_raw"],r=Ct(n),i=Ct(t);return t!==i&&!e&&k(r,"has",t),!e&&k(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function tt(t,e=!1){return t=t["__v_raw"],!e&&k(Ct(t),"iterate",b),Reflect.get(t,"size",t)}function et(t){t=Ct(t);const e=Ct(this),n=Q(e),r=n.has.call(e,t);return r||(e.add(t),j(e,"add",t,t)),this}function nt(t,e){e=Ct(e);const n=Ct(this),{has:i,get:s}=Q(n);let o=i.call(n,t);o||(t=Ct(t),o=i.call(n,t));const a=s.call(n,t);return n.set(t,e),o?Object(r["j"])(e,a)&&j(n,"set",t,e,a):j(n,"add",t,e),this}function rt(t){const e=Ct(this),{has:n,get:r}=Q(e);let i=n.call(e,t);i||(t=Ct(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&j(e,"delete",t,void 0,s),o}function it(){const t=Ct(this),e=0!==t.size,n=void 0,r=t.clear();return e&&j(t,"clear",void 0,void 0,n),r}function st(t,e){return function(n,r){const i=this,s=i["__v_raw"],o=Ct(s),a=e?Y:t?Rt:Lt;return!t&&k(o,"iterate",b),s.forEach((t,e)=>n.call(r,a(t),a(e),i))}}function ot(t,e,n){return function(...i){const s=this["__v_raw"],o=Ct(s),a=Object(r["t"])(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=s[t](...i),h=n?Y:e?Rt:Lt;return!e&&k(o,"iterate",u?_:b),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function at(t){return function(...e){return"delete"!==t&&this}}function ct(){const t={get(t){return J(this,t)},get size(){return tt(this)},has:Z,add:et,set:nt,delete:rt,clear:it,forEach:st(!1,!1)},e={get(t){return J(this,t,!1,!0)},get size(){return tt(this)},has:Z,add:et,set:nt,delete:rt,clear:it,forEach:st(!1,!0)},n={get(t){return J(this,t,!0)},get size(){return tt(this,!0)},has(t){return Z.call(this,t,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:st(!0,!1)},r={get(t){return J(this,t,!0,!0)},get size(){return tt(this,!0)},has(t){return Z.call(this,t,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:st(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{t[i]=ot(i,!1,!1),n[i]=ot(i,!0,!1),e[i]=ot(i,!1,!0),r[i]=ot(i,!0,!0)}),[t,n,e,r]}const[ut,lt,ht,ft]=ct();function dt(t,e){const n=e?t?ft:ht:t?lt:ut;return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get(Object(r["k"])(n,i)&&i in e?n:e,i,s)}const pt={get:dt(!1,!1)},mt={get:dt(!1,!0)},gt={get:dt(!0,!1)};const vt=new WeakMap,yt=new WeakMap,bt=new WeakMap,_t=new WeakMap;function wt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Et(t){return t["__v_skip"]||!Object.isExtensible(t)?0:wt(Object(r["O"])(t))}function Ot(t){return t&&t["__v_isReadonly"]?t:St(t,!1,z,pt,vt)}function Tt(t){return St(t,!1,X,mt,yt)}function It(t){return St(t,!0,K,gt,bt)}function St(t,e,n,i,s){if(!Object(r["v"])(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=s.get(t);if(o)return o;const a=Et(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return s.set(t,c),c}function At(t){return kt(t)?At(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function kt(t){return!(!t||!t["__v_isReadonly"])}function Nt(t){return At(t)||kt(t)}function Ct(t){const e=t&&t["__v_raw"];return e?Ct(e):t}function jt(t){return Object(r["g"])(t,"__v_skip",!0),t}const Lt=t=>Object(r["v"])(t)?Ot(t):t,Rt=t=>Object(r["v"])(t)?It(t):t;function Dt(t){N()&&(t=Ct(t),t.dep||(t.dep=c()),C(t.dep))}function Pt(t,e){t=Ct(t),t.dep&&L(t.dep)}function xt(t){return Boolean(t&&!0===t.__v_isRef)}function Mt(t){return Ut(t,!1)}function Ft(t){return Ut(t,!0)}function Ut(t,e){return xt(t)?t:new Vt(t,e)}class Vt{constructor(t,e){this._shallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Ct(t),this._value=e?t:Lt(t)}get value(){return Dt(this),this._value}set value(t){t=this._shallow?t:Ct(t),Object(r["j"])(t,this._rawValue)&&(this._rawValue=t,this._value=this._shallow?t:Lt(t),Pt(this,t))}}function Bt(t){return xt(t)?t.value:t}const $t={get:(t,e,n)=>Bt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return xt(i)&&!xt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Gt(t){return At(t)?t:new Proxy(t,$t)}class qt{constructor(t,e,n){this._setter=e,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new w(t,()=>{this._dirty||(this._dirty=!0,Pt(this))}),this["__v_isReadonly"]=n}get value(){const t=Ct(this);return Dt(t),t._dirty&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ht(t,e){let n,i;const s=Object(r["p"])(t);s?(n=t,i=r["d"]):(n=t.get,i=t.set);const o=new qt(n,i,s||!i);return o}Promise.resolve();new Set;new Map;function Wt(t,e,...n){const i=t.vnode.props||r["b"];let s=n;const o=e.startsWith("update:"),a=o&&e.slice(7);if(a&&a in i){const t=("modelValue"===a?"model":a)+"Modifiers",{number:e,trim:o}=i[t]||r["b"];o?s=n.map(t=>t.trim()):e&&(s=n.map(r["N"]))}let c;let u=i[c=Object(r["M"])(e)]||i[c=Object(r["M"])(Object(r["e"])(e))];!u&&o&&(u=i[c=Object(r["M"])(Object(r["l"])(e))]),u&&Br(u,t,6,s);const l=i[c+"Once"];if(l){if(t.emitted){if(t.emitted[c])return}else t.emitted={};t.emitted[c]=!0,Br(l,t,6,s)}}function zt(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(void 0!==s)return s;const o=t.emits;let a={},c=!1;if(!Object(r["p"])(t)){const i=t=>{const n=zt(t,e,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}return o||c?(Object(r["o"])(o)?o.forEach(t=>a[t]=null):Object(r["h"])(a,o),i.set(t,a),a):(i.set(t,null),null)}function Kt(t,e){return!(!t||!Object(r["w"])(e))&&(e=e.slice(2).replace(/Once$/,""),Object(r["k"])(t,e[0].toLowerCase()+e.slice(1))||Object(r["k"])(t,Object(r["l"])(e))||Object(r["k"])(t,e))}let Xt=null,Yt=null;function Qt(t){const e=Xt;return Xt=t,Yt=t&&t.type.__scopeId||null,e}function Jt(t){Yt=t}function Zt(){Yt=null}function te(t,e=Xt,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Kn(-1);const i=Qt(e),s=t(...n);return Qt(i),r._d&&Kn(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function ee(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:o,propsOptions:[a],slots:c,attrs:u,emit:l,render:h,renderCache:f,data:d,setupState:p,ctx:m,inheritAttrs:g}=t;let v,y;const b=Qt(t);try{if(4&n.shapeFlag){const t=s||i;v=lr(h.call(t,t,f,o,p,d,m)),y=u}else{const t=e;0,v=lr(t.length>1?t(o,{attrs:u,slots:c,emit:l}):t(o,null)),y=e.props?u:ne(u)}}catch(w){Gn.length=0,$r(w,t,1),v=ir(Bn)}let _=v;if(y&&!1!==g){const t=Object.keys(y),{shapeFlag:e}=_;t.length&&7&e&&(a&&t.some(r["u"])&&(y=re(y,a)),_=ar(_,y))}return n.dirs&&(_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),v=_,Qt(b),v}const ne=t=>{let e;for(const n in t)("class"===n||"style"===n||Object(r["w"])(n))&&((e||(e={}))[n]=t[n]);return e},re=(t,e)=>{const n={};for(const i in t)Object(r["u"])(i)&&i.slice(9)in e||(n[i]=t[i]);return n};function ie(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||se(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?se(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!Kt(u,n))return!0}}return!1}function se(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Kt(n,s))return!0}return!1}function oe({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const ae=t=>t.__isSuspense;function ce(t,e){e&&e.pendingBranch?Object(r["o"])(t)?e.effects.push(...t):e.effects.push(t):li(t)}function ue(t,e){if(Or){let n=Or.provides;const r=Or.parent&&Or.parent.provides;r===n&&(n=Or.provides=Object.create(r)),n[t]=e}else 0}function le(t,e,n=!1){const i=Or||Xt;if(i){const s=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Object(r["p"])(e)?e.call(i.proxy):e}else 0}function he(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return De(()=>{t.isMounted=!0}),Me(()=>{t.isUnmounting=!0}),t}const fe=[Function,Array],de={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:fe,onEnter:fe,onAfterEnter:fe,onEnterCancelled:fe,onBeforeLeave:fe,onLeave:fe,onAfterLeave:fe,onLeaveCancelled:fe,onBeforeAppear:fe,onAppear:fe,onAfterAppear:fe,onAppearCancelled:fe},setup(t,{slots:e}){const n=Tr(),r=he();let i;return()=>{const s=e.default&&_e(e.default(),!0);if(!s||!s.length)return;const o=Ct(t),{mode:a}=o;const c=s[0];if(r.isLeaving)return ve(c);const u=ye(c);if(!u)return ve(c);const l=ge(u,o,r,n);be(u,l);const h=n.subTree,f=h&&ye(h);let d=!1;const{getTransitionKey:p}=u.type;if(p){const t=p();void 0===i?i=t:t!==i&&(i=t,d=!0)}if(f&&f.type!==Bn&&(!Zn(u,f)||d)){const t=ge(f,o,r,n);if(be(f,t),"out-in"===a)return r.isLeaving=!0,t.afterLeave=()=>{r.isLeaving=!1,n.update()},ve(c);"in-out"===a&&u.type!==Bn&&(t.delayLeave=(t,e,n)=>{const i=me(r,f);i[String(f.key)]=f,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return c}}},pe=de;function me(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ge(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:p,onBeforeAppear:m,onAppear:g,onAfterAppear:v,onAppearCancelled:y}=e,b=String(t.key),_=me(n,t),w=(t,e)=>{t&&Br(t,r,9,e)},E={mode:s,persisted:o,beforeEnter(e){let r=a;if(!n.isMounted){if(!i)return;r=m||a}e._leaveCb&&e._leaveCb(!0);const s=_[b];s&&Zn(t,s)&&s.el._leaveCb&&s.el._leaveCb(),w(r,[e])},enter(t){let e=c,r=u,s=l;if(!n.isMounted){if(!i)return;e=g||c,r=v||u,s=y||l}let o=!1;const a=t._enterCb=e=>{o||(o=!0,w(e?s:r,[t]),E.delayedLeave&&E.delayedLeave(),t._enterCb=void 0)};e?(e(t,a),e.length<=1&&a()):a()},leave(e,r){const i=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();w(h,[e]);let s=!1;const o=e._leaveCb=n=>{s||(s=!0,r(),w(n?p:d,[e]),e._leaveCb=void 0,_[i]===t&&delete _[i])};_[i]=t,f?(f(e,o),f.length<=1&&o()):o()},clone(t){return ge(t,e,n,r)}};return E}function ve(t){if(Oe(t))return t=ar(t),t.children=null,t}function ye(t){return Oe(t)?t.children?t.children[0]:void 0:t}function be(t,e){6&t.shapeFlag&&t.component?be(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function _e(t,e=!1){let n=[],r=0;for(let i=0;i<t.length;i++){const s=t[i];s.type===Un?(128&s.patchFlag&&r++,n=n.concat(_e(s.children,e))):(e||s.type!==Bn)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function we(t){return Object(r["p"])(t)?{setup:t,name:t.name}:t}const Ee=t=>!!t.type.__asyncLoader;const Oe=t=>t.type.__isKeepAlive;RegExp,RegExp;function Te(t,e){return Object(r["o"])(t)?t.some(t=>Te(t,e)):Object(r["D"])(t)?t.split(",").indexOf(e)>-1:!!t.test&&t.test(e)}function Ie(t,e){Ae(t,"a",e)}function Se(t,e){Ae(t,"da",e)}function Ae(t,e,n=Or){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}t()});if(je(e,r,n),n){let t=n.parent;while(t&&t.parent)Oe(t.parent.vnode)&&ke(r,e,n,t),t=t.parent}}function ke(t,e,n,i){const s=je(e,t,i,!0);Fe(()=>{Object(r["K"])(i[e],s)},n)}function Ne(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function Ce(t){return 128&t.shapeFlag?t.ssContent:t}function je(t,e,n=Or,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...r)=>{if(n.isUnmounted)return;I(),Ir(n);const i=Br(e,n,t,r);return Sr(),A(),i});return r?i.unshift(s):i.push(s),s}}const Le=t=>(e,n=Or)=>(!Cr||"sp"===t)&&je(t,e,n),Re=Le("bm"),De=Le("m"),Pe=Le("bu"),xe=Le("u"),Me=Le("bum"),Fe=Le("um"),Ue=Le("sp"),Ve=Le("rtg"),Be=Le("rtc");function $e(t,e=Or){je("ec",t,e)}let Ge=!0;function qe(t){const e=Ke(t),n=t.proxy,i=t.ctx;Ge=!1,e.beforeCreate&&We(e.beforeCreate,t,"bc");const{data:s,computed:o,methods:a,watch:c,provide:u,inject:l,created:h,beforeMount:f,mounted:d,beforeUpdate:p,updated:m,activated:g,deactivated:v,beforeDestroy:y,beforeUnmount:b,destroyed:_,unmounted:w,render:E,renderTracked:O,renderTriggered:T,errorCaptured:I,serverPrefetch:S,expose:A,inheritAttrs:k,components:N,directives:C,filters:j}=e,L=null;if(l&&He(l,i,L,t.appContext.config.unwrapInjectedRef),a)for(const D in a){const t=a[D];Object(r["p"])(t)&&(i[D]=t.bind(n))}if(s){0;const e=s.call(n,n);0,Object(r["v"])(e)&&(t.data=Ot(e))}if(Ge=!0,o)for(const D in o){const t=o[D],e=Object(r["p"])(t)?t.bind(n,n):Object(r["p"])(t.get)?t.get.bind(n,n):r["d"];0;const s=!Object(r["p"])(t)&&Object(r["p"])(t.set)?t.set.bind(n):r["d"],a=Ht({get:e,set:s});Object.defineProperty(i,D,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t})}if(c)for(const r in c)ze(c[r],i,n,r);if(u){const t=Object(r["p"])(u)?u.call(n):u;Reflect.ownKeys(t).forEach(e=>{ue(e,t[e])})}function R(t,e){Object(r["o"])(e)?e.forEach(e=>t(e.bind(n))):e&&t(e.bind(n))}if(h&&We(h,t,"c"),R(Re,f),R(De,d),R(Pe,p),R(xe,m),R(Ie,g),R(Se,v),R($e,I),R(Be,O),R(Ve,T),R(Me,b),R(Fe,w),R(Ue,S),Object(r["o"])(A))if(A.length){const e=t.exposed||(t.exposed={});A.forEach(t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})})}else t.exposed||(t.exposed={});E&&t.render===r["d"]&&(t.render=E),null!=k&&(t.inheritAttrs=k),N&&(t.components=N),C&&(t.directives=C)}function He(t,e,n=r["d"],i=!1){Object(r["o"])(t)&&(t=Ze(t));for(const s in t){const n=t[s];let o;o=Object(r["v"])(n)?"default"in n?le(n.from||s,n.default,!0):le(n.from||s):le(n),xt(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[s]=o}}function We(t,e,n){Br(Object(r["o"])(t)?t.map(t=>t.bind(e.proxy)):t.bind(e.proxy),e,n)}function ze(t,e,n,i){const s=i.includes(".")?bi(n,i):()=>n[i];if(Object(r["D"])(t)){const n=e[t];Object(r["p"])(n)&&gi(s,n)}else if(Object(r["p"])(t))gi(s,t.bind(n));else if(Object(r["v"])(t))if(Object(r["o"])(t))t.forEach(t=>ze(t,e,n,i));else{const i=Object(r["p"])(t.handler)?t.handler.bind(n):e[t.handler];Object(r["p"])(i)&&gi(s,i,t)}else 0}function Ke(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach(t=>Xe(c,t,o,!0)),Xe(c,e,o)):c=e,s.set(e,c),c}function Xe(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Xe(t,s,n,!0),i&&i.forEach(e=>Xe(t,e,n,!0));for(const o in e)if(r&&"expose"===o);else{const r=Ye[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const Ye={data:Qe,props:en,emits:en,methods:en,computed:en,beforeCreate:tn,created:tn,beforeMount:tn,mounted:tn,beforeUpdate:tn,updated:tn,beforeDestroy:tn,beforeUnmount:tn,destroyed:tn,unmounted:tn,activated:tn,deactivated:tn,errorCaptured:tn,serverPrefetch:tn,components:en,directives:en,watch:nn,provide:Qe,inject:Je};function Qe(t,e){return e?t?function(){return Object(r["h"])(Object(r["p"])(t)?t.call(this,this):t,Object(r["p"])(e)?e.call(this,this):e)}:e:t}function Je(t,e){return en(Ze(t),Ze(e))}function Ze(t){if(Object(r["o"])(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function tn(t,e){return t?[...new Set([].concat(t,e))]:e}function en(t,e){return t?Object(r["h"])(Object(r["h"])(Object.create(null),t),e):e}function nn(t,e){if(!t)return e;if(!e)return t;const n=Object(r["h"])(Object.create(null),t);for(const r in e)n[r]=tn(t[r],e[r]);return n}function rn(t,e,n,i=!1){const s={},o={};Object(r["g"])(o,tr,1),t.propsDefaults=Object.create(null),on(t,e,s,o);for(const r in t.propsOptions[0])r in s||(s[r]=void 0);n?t.props=i?s:Tt(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function sn(t,e,n,i){const{props:s,attrs:o,vnode:{patchFlag:a}}=t,c=Ct(s),[u]=t.propsOptions;let l=!1;if(!(i||a>0)||16&a){let i;on(t,e,s,o)&&(l=!0);for(const o in c)e&&(Object(r["k"])(e,o)||(i=Object(r["l"])(o))!==o&&Object(r["k"])(e,i))||(u?!n||void 0===n[o]&&void 0===n[i]||(s[o]=an(u,c,o,void 0,t,!0)):delete s[o]);if(o!==c)for(const t in o)e&&Object(r["k"])(e,t)||(delete o[t],l=!0)}else if(8&a){const n=t.vnode.dynamicProps;for(let i=0;i<n.length;i++){let a=n[i];const h=e[a];if(u)if(Object(r["k"])(o,a))h!==o[a]&&(o[a]=h,l=!0);else{const e=Object(r["e"])(a);s[e]=an(u,c,e,h,t,!1)}else h!==o[a]&&(o[a]=h,l=!0)}}l&&j(t,"set","$attrs")}function on(t,e,n,i){const[s,o]=t.propsOptions;let a,c=!1;if(e)for(let u in e){if(Object(r["z"])(u))continue;const l=e[u];let h;s&&Object(r["k"])(s,h=Object(r["e"])(u))?o&&o.includes(h)?(a||(a={}))[h]=l:n[h]=l:Kt(t.emitsOptions,u)||l!==i[u]&&(i[u]=l,c=!0)}if(o){const e=Ct(n),i=a||r["b"];for(let a=0;a<o.length;a++){const c=o[a];n[c]=an(s,e,c,i[c],t,!Object(r["k"])(i,c))}}return c}function an(t,e,n,i,s,o){const a=t[n];if(null!=a){const t=Object(r["k"])(a,"default");if(t&&void 0===i){const t=a.default;if(a.type!==Function&&Object(r["p"])(t)){const{propsDefaults:r}=s;n in r?i=r[n]:(Ir(s),i=r[n]=t.call(null,e),Sr())}else i=t}a[0]&&(o&&!t?i=!1:!a[1]||""!==i&&i!==Object(r["l"])(n)||(i=!0))}return i}function cn(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const o=t.props,a={},c=[];let u=!1;if(!Object(r["p"])(t)){const i=t=>{u=!0;const[n,i]=cn(t,e,!0);Object(r["h"])(a,n),i&&c.push(...i)};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}if(!o&&!u)return i.set(t,r["a"]),r["a"];if(Object(r["o"])(o))for(let h=0;h<o.length;h++){0;const t=Object(r["e"])(o[h]);un(t)&&(a[t]=r["b"])}else if(o){0;for(const t in o){const e=Object(r["e"])(t);if(un(e)){const n=o[t],i=a[e]=Object(r["o"])(n)||Object(r["p"])(n)?{type:n}:n;if(i){const t=fn(Boolean,i.type),n=fn(String,i.type);i[0]=t>-1,i[1]=n<0||t<n,(t>-1||Object(r["k"])(i,"default"))&&c.push(e)}}}}const l=[a,c];return i.set(t,l),l}function un(t){return"$"!==t[0]}function ln(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function hn(t,e){return ln(t)===ln(e)}function fn(t,e){return Object(r["o"])(e)?e.findIndex(e=>hn(e,t)):Object(r["p"])(e)&&hn(e,t)?0:-1}const dn=t=>"_"===t[0]||"$stable"===t,pn=t=>Object(r["o"])(t)?t.map(lr):[lr(t)],mn=(t,e,n)=>{const r=te((...t)=>pn(e(...t)),n);return r._c=!1,r},gn=(t,e,n)=>{const i=t._ctx;for(const s in t){if(dn(s))continue;const n=t[s];if(Object(r["p"])(n))e[s]=mn(s,n,i);else if(null!=n){0;const t=pn(n);e[s]=()=>t}}},vn=(t,e)=>{const n=pn(e);t.slots.default=()=>n},yn=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=Ct(e),Object(r["g"])(e,"_",n)):gn(e,t.slots={})}else t.slots={},e&&vn(t,e);Object(r["g"])(t.slots,tr,1)},bn=(t,e,n)=>{const{vnode:i,slots:s}=t;let o=!0,a=r["b"];if(32&i.shapeFlag){const t=e._;t?n&&1===t?o=!1:(Object(r["h"])(s,e),n||1!==t||delete s._):(o=!e.$stable,gn(e,s)),a=e}else e&&(vn(t,e),a={default:1});if(o)for(const r in s)dn(r)||r in a||delete s[r]};function _n(t,e){const n=Xt;if(null===n)return t;const i=n.proxy,s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,c=r["b"]]=e[o];Object(r["p"])(t)&&(t={mounted:t,updated:t}),t.deep&&_i(n),s.push({dir:t,instance:i,value:n,oldValue:void 0,arg:a,modifiers:c})}return t}function wn(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(I(),Br(c,n,8,[t.el,a,t,e]),A())}}function En(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let On=0;function Tn(t,e){return function(n,i=null){null==i||Object(r["v"])(i)||(i=null);const s=En(),o=new Set;let a=!1;const c=s.app={_uid:On++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:Ei,get config(){return s.config},set config(t){0},use(t,...e){return o.has(t)||(t&&Object(r["p"])(t.install)?(o.add(t),t.install(c,...e)):Object(r["p"])(t)&&(o.add(t),t(c,...e))),c},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),c},component(t,e){return e?(s.components[t]=e,c):s.components[t]},directive(t,e){return e?(s.directives[t]=e,c):s.directives[t]},mount(r,o,u){if(!a){const l=ir(n,i);return l.appContext=s,o&&e?e(l,r):t(l,r,u),a=!0,c._container=r,r.__vue_app__=c,Mr(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return s.provides[t]=e,c}};return c}}function In(){}const Sn=ce;function An(t){return kn(t)}function kn(t,e){In();const n=Object(r["i"])();n.__VUE__=!0;const{insert:i,remove:s,patchProp:o,createElement:a,createText:c,createComment:u,setText:l,setElementText:h,parentNode:f,nextSibling:d,setScopeId:p=r["d"],cloneNode:m,insertStaticContent:g}=t,v=(t,e,n,r=null,i=null,s=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!Zn(t,e)&&(r=K(t),G(t,i,s,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Vn:y(t,e,n,r);break;case Bn:b(t,e,n,r);break;case $n:null==t&&_(e,n,r,o);break;case Un:R(t,e,n,r,i,s,o,a,c);break;default:1&h?T(t,e,n,r,i,s,o,a,c):6&h?D(t,e,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,s,o,a,c,Y)}null!=l&&i&&Nn(l,t&&t.ref,s,e||t,!e)},y=(t,e,n,r)=>{if(null==t)i(e.el=c(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&l(n,e.children)}},b=(t,e,n,r)=>{null==t?i(e.el=u(e.children||""),n,r):e.el=t.el},_=(t,e,n,r)=>{[t.el,t.anchor]=g(t.children,e,n,r)},E=({el:t,anchor:e},n,r)=>{let s;while(t&&t!==e)s=d(t),i(t,n,r),t=s;i(e,n,r)},O=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=d(t),s(t),t=n;s(e)},T=(t,e,n,r,i,s,o,a,c)=>{o=o||"svg"===e.type,null==t?S(e,n,r,i,s,o,a,c):C(t,e,i,s,o,a,c)},S=(t,e,n,s,c,u,l,f)=>{let d,p;const{type:g,props:v,shapeFlag:y,transition:b,patchFlag:_,dirs:w}=t;if(t.el&&void 0!==m&&-1===_)d=t.el=m(t.el);else{if(d=t.el=a(t.type,u,v&&v.is,v),8&y?h(d,t.children):16&y&&N(t.children,d,null,s,c,u&&"foreignObject"!==g,l,f),w&&wn(t,null,s,"created"),v){for(const e in v)"value"===e||Object(r["z"])(e)||o(d,e,null,v[e],u,t.children,s,c,z);"value"in v&&o(d,"value",null,v.value),(p=v.onVnodeBeforeMount)&&Cn(p,s,t)}k(d,t,t.scopeId,l,s)}w&&wn(t,null,s,"beforeMount");const E=(!c||c&&!c.pendingBranch)&&b&&!b.persisted;E&&b.beforeEnter(d),i(d,e,n),((p=v&&v.onVnodeMounted)||E||w)&&Sn(()=>{p&&Cn(p,s,t),E&&b.enter(d),w&&wn(t,null,s,"mounted")},c)},k=(t,e,n,r,i)=>{if(n&&p(t,n),r)for(let s=0;s<r.length;s++)p(t,r[s]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;k(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},N=(t,e,n,r,i,s,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?hr(t[u]):lr(t[u]);v(null,c,e,n,r,i,s,o,a)}},C=(t,e,n,i,s,a,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:f,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||r["b"],m=e.props||r["b"];let g;(g=m.onVnodeBeforeUpdate)&&Cn(g,n,e,t),d&&wn(e,t,n,"beforeUpdate");const v=s&&"foreignObject"!==e.type;if(f?j(t.dynamicChildren,f,u,n,i,v,a):c||U(t,e,u,null,n,i,v,a,!1),l>0){if(16&l)L(u,e,p,m,n,i,s);else if(2&l&&p.class!==m.class&&o(u,"class",null,m.class,s),4&l&&o(u,"style",p.style,m.style,s),8&l){const r=e.dynamicProps;for(let e=0;e<r.length;e++){const a=r[e],c=p[a],l=m[a];l===c&&"value"!==a||o(u,a,c,l,s,t.children,n,i,z)}}1&l&&t.children!==e.children&&h(u,e.children)}else c||null!=f||L(u,e,p,m,n,i,s);((g=m.onVnodeUpdated)||d)&&Sn(()=>{g&&Cn(g,n,e,t),d&&wn(e,t,n,"updated")},i)},j=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Un||!Zn(c,u)||70&c.shapeFlag)?f(c.el):n;v(c,u,l,null,r,i,s,o,!0)}},L=(t,e,n,i,s,a,c)=>{if(n!==i){for(const u in i){if(Object(r["z"])(u))continue;const l=i[u],h=n[u];l!==h&&"value"!==u&&o(t,u,h,l,c,e.children,s,a,z)}if(n!==r["b"])for(const u in n)Object(r["z"])(u)||u in i||o(t,u,n[u],null,c,e.children,s,a,z);"value"in i&&o(t,"value",n.value,i.value)}},R=(t,e,n,r,s,o,a,u,l)=>{const h=e.el=t?t.el:c(""),f=e.anchor=t?t.anchor:c("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:m}=e;m&&(u=u?u.concat(m):m),null==t?(i(h,n,r),i(f,n,r),N(e.children,n,f,s,o,a,u,l)):d>0&&64&d&&p&&t.dynamicChildren?(j(t.dynamicChildren,p,n,s,o,a,u),(null!=e.key||s&&e===s.subTree)&&jn(t,e,!0)):U(t,e,n,f,s,o,a,u,l)},D=(t,e,n,r,i,s,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,c):P(e,n,r,i,s,o,c):x(t,e,c)},P=(t,e,n,r,i,s,o)=>{const a=t.component=Er(t,r,i);if(Oe(t)&&(a.ctx.renderer=Y),jr(a),a.asyncDep){if(i&&i.registerDep(a,M),!t.el){const t=a.subTree=ir(Bn);b(null,t,e,n)}}else M(a,t,e,n,i,s,o)},x=(t,e,n)=>{const r=e.component=t.component;if(ie(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void F(r,e,n);r.next=e,ai(r.update),r.update()}else e.component=t.component,e.el=t.el,r.vnode=e},M=(t,e,n,i,s,o,a)=>{const c=()=>{if(t.isMounted){let e,{next:n,bu:i,u:c,parent:l,vnode:h}=t,d=n;0,u.allowRecurse=!1,n?(n.el=h.el,F(t,n,a)):n=h,i&&Object(r["n"])(i),(e=n.props&&n.props.onVnodeBeforeUpdate)&&Cn(e,l,n,h),u.allowRecurse=!0;const p=ee(t);0;const m=t.subTree;t.subTree=p,v(m,p,f(m.el),K(m),t,s,o),n.el=p.el,null===d&&oe(t,p.el),c&&Sn(c,s),(e=n.props&&n.props.onVnodeUpdated)&&Sn(()=>Cn(e,l,n,h),s)}else{let a;const{el:c,props:l}=e,{bm:h,m:f,parent:d}=t,p=Ee(e);if(u.allowRecurse=!1,h&&Object(r["n"])(h),!p&&(a=l&&l.onVnodeBeforeMount)&&Cn(a,d,e),u.allowRecurse=!0,c&&J){const n=()=>{t.subTree=ee(t),J(c,t.subTree,t,s,null)};p?e.type.__asyncLoader().then(()=>!t.isUnmounted&&n()):n()}else{0;const r=t.subTree=ee(t);0,v(null,r,n,i,t,s,o),e.el=r.el}if(f&&Sn(f,s),!p&&(a=l&&l.onVnodeMounted)){const t=e;Sn(()=>Cn(a,d,t),s)}256&e.shapeFlag&&t.a&&Sn(t.a,s),t.isMounted=!0,e=n=i=null}},u=new w(c,()=>si(t.update),t.scope),l=t.update=u.run.bind(u);l.id=t.uid,u.allowRecurse=l.allowRecurse=!0,l()},F=(t,e,n)=>{e.component=t;const r=t.vnode.props;t.vnode=e,t.next=null,sn(t,e.props,r,n),bn(t,e.children,n),I(),hi(void 0,t.update),A()},U=(t,e,n,r,i,s,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,f=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void B(u,f,n,r,i,s,o,a,c);if(256&d)return void V(u,f,n,r,i,s,o,a,c)}8&p?(16&l&&z(u,i,s),f!==u&&h(n,f)):16&l?16&p?B(u,f,n,r,i,s,o,a,c):z(u,i,s,!0):(8&l&&h(n,""),16&p&&N(f,n,r,i,s,o,a,c))},V=(t,e,n,i,s,o,a,c,u)=>{t=t||r["a"],e=e||r["a"];const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=u?hr(e[d]):lr(e[d]);v(t[d],r,n,null,s,o,a,c,u)}l>h?z(t,s,o,!0,!1,f):N(e,n,i,s,o,a,c,u,f)},B=(t,e,n,i,s,o,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],i=e[l]=u?hr(e[l]):lr(e[l]);if(!Zn(r,i))break;v(r,i,n,null,s,o,a,c,u),l++}while(l<=f&&l<=d){const r=t[f],i=e[d]=u?hr(e[d]):lr(e[d]);if(!Zn(r,i))break;v(r,i,n,null,s,o,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,r=t<h?e[t].el:i;while(l<=d)v(null,e[l]=u?hr(e[l]):lr(e[l]),n,r,s,o,a,c,u),l++}}else if(l>d)while(l<=f)G(t[l],s,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=d;l++){const t=e[l]=u?hr(e[l]):lr(e[l]);null!=t.key&&g.set(t.key,l)}let y,b=0;const _=d-m+1;let w=!1,E=0;const O=new Array(_);for(l=0;l<_;l++)O[l]=0;for(l=p;l<=f;l++){const r=t[l];if(b>=_){G(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(y=m;y<=d;y++)if(0===O[y-m]&&Zn(r,e[y])){i=y;break}void 0===i?G(r,s,o,!0):(O[i-m]=l+1,i>=E?E=i:w=!0,v(r,e[i],n,null,s,o,a,c,u),b++)}const T=w?Ln(O):r["a"];for(y=T.length-1,l=_-1;l>=0;l--){const t=m+l,r=e[t],f=t+1<h?e[t+1].el:i;0===O[l]?v(null,r,n,f,s,o,a,c,u):w&&(y<0||l!==T[y]?$(r,n,f,2):y--)}}},$=(t,e,n,r,s=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void $(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,Y);if(a===Un){i(o,e,n);for(let t=0;t<u.length;t++)$(u[t],e,n,r);return void i(t.anchor,e,n)}if(a===$n)return void E(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),i(o,e,n),Sn(()=>c.enter(o),s);else{const{leave:t,delayLeave:r,afterLeave:s}=c,a=()=>i(o,e,n),u=()=>{t(o,()=>{a(),s&&s()})};r?r(o,a,u):u()}else i(o,e,n)},G=(t,e,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:f}=t;if(null!=a&&Nn(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const d=1&l&&f,p=!Ee(t);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&Cn(m,e,t),6&l)W(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);d&&wn(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,i,Y,r):u&&(s!==Un||h>0&&64&h)?z(u,e,n,!1,!0):(s===Un&&384&h||!i&&16&l)&&z(c,e,n),r&&q(t)}(p&&(m=o&&o.onVnodeUnmounted)||d)&&Sn(()=>{m&&Cn(m,e,t),d&&wn(t,null,e,"unmounted")},n)},q=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===Un)return void H(n,r);if(e===$n)return void O(t);const o=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,s=()=>e(n,o);r?r(t.el,o,s):s()}else o()},H=(t,e)=>{let n;while(t!==e)n=d(t),s(t),t=n;s(e)},W=(t,e,n)=>{const{bum:i,scope:s,update:o,subTree:a,um:c}=t;i&&Object(r["n"])(i),s.stop(),o&&(o.active=!1,G(a,t,e,n)),c&&Sn(c,e),Sn(()=>{t.isUnmounted=!0},e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},z=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)G(t[o],e,n,r,i)},K=t=>6&t.shapeFlag?K(t.component.subTree):128&t.shapeFlag?t.suspense.next():d(t.anchor||t.el),X=(t,e,n)=>{null==t?e._vnode&&G(e._vnode,null,null,!0):v(e._vnode||null,t,e,null,null,null,n),fi(),e._vnode=t},Y={p:v,um:G,m:$,r:q,mt:P,mc:N,pc:U,pbc:j,n:K,o:t};let Q,J;return e&&([Q,J]=e(Y)),{render:X,hydrate:Q,createApp:Tn(X,Q)}}function Nn(t,e,n,i,s=!1){if(Object(r["o"])(t))return void t.forEach((t,o)=>Nn(t,e&&(Object(r["o"])(e)?e[o]:e),n,i,s));if(Ee(i)&&!s)return;const o=4&i.shapeFlag?Mr(i.component)||i.component.proxy:i.el,a=s?null:o,{i:c,r:u}=t;const l=e&&e.r,h=c.refs===r["b"]?c.refs={}:c.refs,f=c.setupState;if(null!=l&&l!==u&&(Object(r["D"])(l)?(h[l]=null,Object(r["k"])(f,l)&&(f[l]=null)):xt(l)&&(l.value=null)),Object(r["D"])(u)){const t=()=>{h[u]=a,Object(r["k"])(f,u)&&(f[u]=a)};a?(t.id=-1,Sn(t,n)):t()}else if(xt(u)){const t=()=>{u.value=a};a?(t.id=-1,Sn(t,n)):t()}else Object(r["p"])(u)&&Vr(u,c,12,[a,h])}function Cn(t,e,n,r=null){Br(t,e,7,[n,r])}function jn(t,e,n=!1){const i=t.children,s=e.children;if(Object(r["o"])(i)&&Object(r["o"])(s))for(let r=0;r<i.length;r++){const t=i[r];let e=s[r];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[r]=hr(s[r]),e.el=t.el),n||jn(t,e))}}function Ln(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}const Rn=t=>t.__isTeleport;const Dn="components";function Pn(t,e){return Mn(Dn,t,!0,e)||t}const xn=Symbol();function Mn(t,e,n=!0,i=!1){const s=Xt||Or;if(s){const n=s.type;if(t===Dn){const t=Fr(n);if(t&&(t===e||t===Object(r["e"])(e)||t===Object(r["f"])(Object(r["e"])(e))))return n}const o=Fn(s[t]||n[t],e)||Fn(s.appContext[t],e);return!o&&i?n:o}}function Fn(t,e){return t&&(t[e]||t[Object(r["e"])(e)]||t[Object(r["f"])(Object(r["e"])(e))])}const Un=Symbol(void 0),Vn=Symbol(void 0),Bn=Symbol(void 0),$n=Symbol(void 0),Gn=[];let qn=null;function Hn(t=!1){Gn.push(qn=t?null:[])}function Wn(){Gn.pop(),qn=Gn[Gn.length-1]||null}let zn=1;function Kn(t){zn+=t}function Xn(t){return t.dynamicChildren=zn>0?qn||r["a"]:null,Wn(),zn>0&&qn&&qn.push(t),t}function Yn(t,e,n,r,i,s){return Xn(rr(t,e,n,r,i,s,!0))}function Qn(t,e,n,r,i){return Xn(ir(t,e,n,r,i,!0))}function Jn(t){return!!t&&!0===t.__v_isVNode}function Zn(t,e){return t.type===e.type&&t.key===e.key}const tr="__vInternal",er=({key:t})=>null!=t?t:null,nr=({ref:t})=>null!=t?Object(r["D"])(t)||xt(t)||Object(r["p"])(t)?{i:Xt,r:t}:t:null;function rr(t,e=null,n=null,i=0,s=null,o=(t===Un?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&er(e),ref:e&&nr(e),scopeId:Yt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(fr(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=Object(r["D"])(n)?8:16),zn>0&&!a&&qn&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&qn.push(u),u}const ir=sr;function sr(t,e=null,n=null,i=0,s=null,o=!1){if(t&&t!==xn||(t=Bn),Jn(t)){const r=ar(t,e,!0);return n&&fr(r,n),r}if(Ur(t)&&(t=t.__vccOpts),e){e=or(e);let{class:t,style:n}=e;t&&!Object(r["D"])(t)&&(e.class=Object(r["I"])(t)),Object(r["v"])(n)&&(Nt(n)&&!Object(r["o"])(n)&&(n=Object(r["h"])({},n)),e.style=Object(r["J"])(n))}const a=Object(r["D"])(t)?1:ae(t)?128:Rn(t)?64:Object(r["v"])(t)?4:Object(r["p"])(t)?2:0;return rr(t,e,n,i,s,a,o,!0)}function or(t){return t?Nt(t)||tr in t?Object(r["h"])({},t):t:null}function ar(t,e,n=!1){const{props:i,ref:s,patchFlag:o,children:a}=t,c=e?dr(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&er(c),ref:e&&e.ref?n&&s?Object(r["o"])(s)?s.concat(nr(e)):[s,nr(e)]:nr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Un?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ar(t.ssContent),ssFallback:t.ssFallback&&ar(t.ssFallback),el:t.el,anchor:t.anchor};return u}function cr(t=" ",e=0){return ir(Vn,null,t,e)}function ur(t="",e=!1){return e?(Hn(),Qn(Bn,null,t)):ir(Bn,null,t)}function lr(t){return null==t||"boolean"===typeof t?ir(Bn):Object(r["o"])(t)?ir(Un,null,t.slice()):"object"===typeof t?hr(t):ir(Vn,null,String(t))}function hr(t){return null===t.el||t.memo?t:ar(t)}function fr(t,e){let n=0;const{shapeFlag:i}=t;if(null==e)e=null;else if(Object(r["o"])(e))n=16;else if("object"===typeof e){if(65&i){const n=e.default;return void(n&&(n._c&&(n._d=!1),fr(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||tr in e?3===r&&Xt&&(1===Xt.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=Xt}}else Object(r["p"])(e)?(e={default:e,_ctx:Xt},n=32):(e=String(e),64&i?(n=16,e=[cr(e)]):n=8);t.children=e,t.shapeFlag|=n}function dr(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const t in i)if("class"===t)e.class!==i.class&&(e.class=Object(r["I"])([e.class,i.class]));else if("style"===t)e.style=Object(r["J"])([e.style,i.style]);else if(Object(r["w"])(t)){const n=e[t],s=i[t];n===s||Object(r["o"])(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=i[t])}return e}function pr(t,e,n,i){let s;const o=n&&n[i];if(Object(r["o"])(t)||Object(r["D"])(t)){s=new Array(t.length);for(let n=0,r=t.length;n<r;n++)s[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,s=new Array(t);for(let n=0;n<t;n++)s[n]=e(n+1,n,void 0,o&&o[n])}else if(Object(r["v"])(t))if(t[Symbol.iterator])s=Array.from(t,(t,n)=>e(t,n,void 0,o&&o[n]));else{const n=Object.keys(t);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=e(t[i],i,r,o&&o[r])}}else s=[];return n&&(n[i]=s),s}function mr(t,e,n={},r,i){if(Xt.isCE)return ir("slot","default"===e?null:{name:e},r&&r());let s=t[e];s&&s._c&&(s._d=!1),Hn();const o=s&&gr(s(n)),a=Qn(Un,{key:n.key||"_"+e},o||(r?r():[]),o&&1===t._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function gr(t){return t.some(t=>!Jn(t)||t.type!==Bn&&!(t.type===Un&&!gr(t.children)))?t:null}const vr=t=>t?Ar(t)?Mr(t)||t.proxy:vr(t.parent):null,yr=Object(r["h"])(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vr(t.parent),$root:t=>vr(t.root),$emit:t=>t.emit,$options:t=>Ke(t),$forceUpdate:t=>()=>si(t.update),$nextTick:t=>ri.bind(t.proxy),$watch:t=>yi.bind(t)}),br={get({_:t},e){const{ctx:n,setupState:i,data:s,props:o,accessCache:a,type:c,appContext:u}=t;let l;if("$"!==e[0]){const c=a[e];if(void 0!==c)switch(c){case 0:return i[e];case 1:return s[e];case 3:return n[e];case 2:return o[e]}else{if(i!==r["b"]&&Object(r["k"])(i,e))return a[e]=0,i[e];if(s!==r["b"]&&Object(r["k"])(s,e))return a[e]=1,s[e];if((l=t.propsOptions[0])&&Object(r["k"])(l,e))return a[e]=2,o[e];if(n!==r["b"]&&Object(r["k"])(n,e))return a[e]=3,n[e];Ge&&(a[e]=4)}}const h=yr[e];let f,d;return h?("$attrs"===e&&k(t,"get",e),h(t)):(f=c.__cssModules)&&(f=f[e])?f:n!==r["b"]&&Object(r["k"])(n,e)?(a[e]=3,n[e]):(d=u.config.globalProperties,Object(r["k"])(d,e)?d[e]:void 0)},set({_:t},e,n){const{data:i,setupState:s,ctx:o}=t;if(s!==r["b"]&&Object(r["k"])(s,e))s[e]=n;else if(i!==r["b"]&&Object(r["k"])(i,e))i[e]=n;else if(Object(r["k"])(t.props,e))return!1;return("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:o}},a){let c;return void 0!==n[a]||t!==r["b"]&&Object(r["k"])(t,a)||e!==r["b"]&&Object(r["k"])(e,a)||(c=o[0])&&Object(r["k"])(c,a)||Object(r["k"])(i,a)||Object(r["k"])(yr,a)||Object(r["k"])(s.config.globalProperties,a)}};const _r=En();let wr=0;function Er(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||_r,a={uid:wr++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,update:null,scope:new o(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cn(i,s),emitsOptions:zt(i,s),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:i.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=Wt.bind(null,a),t.ce&&t.ce(a),a}let Or=null;const Tr=()=>Or||Xt,Ir=t=>{Or=t,t.scope.on()},Sr=()=>{Or&&Or.scope.off(),Or=null};function Ar(t){return 4&t.vnode.shapeFlag}let kr,Nr,Cr=!1;function jr(t,e=!1){Cr=e;const{props:n,children:r}=t.vnode,i=Ar(t);rn(t,n,i,e),yn(t,r);const s=i?Lr(t,e):void 0;return Cr=!1,s}function Lr(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=jt(new Proxy(t.ctx,br));const{setup:i}=n;if(i){const n=t.setupContext=i.length>1?xr(t):null;Ir(t),I();const s=Vr(i,t,0,[t.props,n]);if(A(),Sr(),Object(r["y"])(s)){if(s.then(Sr,Sr),e)return s.then(n=>{Rr(t,n,e)}).catch(e=>{$r(e,t,0)});t.asyncDep=s}else Rr(t,s,e)}else Dr(t,e)}function Rr(t,e,n){Object(r["p"])(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Object(r["v"])(e)&&(t.setupState=Gt(e)),Dr(t,n)}function Dr(t,e,n){const i=t.type;if(!t.render){if(!e&&kr&&!i.render){const e=i.template;if(e){0;const{isCustomElement:n,compilerOptions:s}=t.appContext.config,{delimiters:o,compilerOptions:a}=i,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:o},s),a);i.render=kr(e,c)}}t.render=i.render||r["d"],Nr&&Nr(t)}Ir(t),I(),qe(t),A(),Sr()}function Pr(t){return new Proxy(t.attrs,{get(e,n){return k(t,"get","$attrs"),e[n]}})}function xr(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=Pr(t))},slots:t.slots,emit:t.emit,expose:e}}function Mr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Gt(jt(t.exposed)),{get(e,n){return n in e?e[n]:n in yr?yr[n](t):void 0}}))}function Fr(t){return Object(r["p"])(t)&&t.displayName||t.name}function Ur(t){return Object(r["p"])(t)&&"__vccOpts"in t}function Vr(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){$r(s,e,n)}return i}function Br(t,e,n,i){if(Object(r["p"])(t)){const s=Vr(t,e,n,i);return s&&Object(r["y"])(s)&&s.catch(t=>{$r(t,e,n)}),s}const s=[];for(let r=0;r<t.length;r++)s.push(Br(t[r],e,n,i));return s}function $r(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,s=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,i,s))return;r=r.parent}const o=e.appContext.config.errorHandler;if(o)return void Vr(o,null,10,[t,i,s])}Gr(t,n,i,r)}function Gr(t,e,n,r=!0){console.error(t)}let qr=!1,Hr=!1;const Wr=[];let zr=0;const Kr=[];let Xr=null,Yr=0;const Qr=[];let Jr=null,Zr=0;const ti=Promise.resolve();let ei=null,ni=null;function ri(t){const e=ei||ti;return t?e.then(this?t.bind(this):t):e}function ii(t){let e=zr+1,n=Wr.length;while(e<n){const r=e+n>>>1,i=di(Wr[r]);i<t?e=r+1:n=r}return e}function si(t){Wr.length&&Wr.includes(t,qr&&t.allowRecurse?zr+1:zr)||t===ni||(null==t.id?Wr.push(t):Wr.splice(ii(t.id),0,t),oi())}function oi(){qr||Hr||(Hr=!0,ei=ti.then(pi))}function ai(t){const e=Wr.indexOf(t);e>zr&&Wr.splice(e,1)}function ci(t,e,n,i){Object(r["o"])(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?i+1:i)||n.push(t),oi()}function ui(t){ci(t,Xr,Kr,Yr)}function li(t){ci(t,Jr,Qr,Zr)}function hi(t,e=null){if(Kr.length){for(ni=e,Xr=[...new Set(Kr)],Kr.length=0,Yr=0;Yr<Xr.length;Yr++)Xr[Yr]();Xr=null,Yr=0,ni=null,hi(t,e)}}function fi(t){if(Qr.length){const t=[...new Set(Qr)];if(Qr.length=0,Jr)return void Jr.push(...t);for(Jr=t,Jr.sort((t,e)=>di(t)-di(e)),Zr=0;Zr<Jr.length;Zr++)Jr[Zr]();Jr=null,Zr=0}}const di=t=>null==t.id?1/0:t.id;function pi(t){Hr=!1,qr=!0,hi(t),Wr.sort((t,e)=>di(t)-di(e));r["d"];try{for(zr=0;zr<Wr.length;zr++){const t=Wr[zr];t&&!1!==t.active&&Vr(t,null,14)}}finally{zr=0,Wr.length=0,fi(t),qr=!1,ei=null,(Wr.length||Kr.length||Qr.length)&&pi(t)}}const mi={};function gi(t,e,n){return vi(t,e,n)}function vi(t,e,{immediate:n,deep:i,flush:s,onTrack:o,onTrigger:a}=r["b"]){const c=Or;let u,l,h=!1,f=!1;if(xt(t)?(u=()=>t.value,h=!!t._shallow):At(t)?(u=()=>t,i=!0):Object(r["o"])(t)?(f=!0,h=t.some(At),u=()=>t.map(t=>xt(t)?t.value:At(t)?_i(t):Object(r["p"])(t)?Vr(t,c,2):void 0)):u=Object(r["p"])(t)?e?()=>Vr(t,c,2):()=>{if(!c||!c.isUnmounted)return l&&l(),Br(t,c,3,[d])}:r["d"],e&&i){const t=u;u=()=>_i(t())}let d=t=>{l=v.onStop=()=>{Vr(t,c,4)}};if(Cr)return d=r["d"],e?n&&Br(e,c,3,[u(),f?[]:void 0,d]):u(),r["d"];let p=f?[]:mi;const m=()=>{if(v.active)if(e){const t=v.run();(i||h||(f?t.some((t,e)=>Object(r["j"])(t,p[e])):Object(r["j"])(t,p)))&&(l&&l(),Br(e,c,3,[t,p===mi?void 0:p,d]),p=t)}else v.run()};let g;m.allowRecurse=!!e,g="sync"===s?m:"post"===s?()=>Sn(m,c&&c.suspense):()=>{!c||c.isMounted?ui(m):m()};const v=new w(u,g);return e?n?m():p=v.run():"post"===s?Sn(v.run.bind(v),c&&c.suspense):v.run(),()=>{v.stop(),c&&c.scope&&Object(r["K"])(c.scope.effects,v)}}function yi(t,e,n){const i=this.proxy,s=Object(r["D"])(t)?t.includes(".")?bi(i,t):()=>i[t]:t.bind(i,i);let o;Object(r["p"])(e)?o=e:(o=e.handler,n=e);const a=Or;Ir(this);const c=vi(s,o.bind(i),n);return a?Ir(a):Sr(),c}function bi(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function _i(t,e){if(!Object(r["v"])(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),xt(t))_i(t.value,e);else if(Object(r["o"])(t))for(let n=0;n<t.length;n++)_i(t[n],e);else if(Object(r["B"])(t)||Object(r["t"])(t))t.forEach(t=>{_i(t,e)});else if(Object(r["x"])(t))for(const n in t)_i(t[n],e);return t}function wi(t,e,n){const i=arguments.length;return 2===i?Object(r["v"])(e)&&!Object(r["o"])(e)?Jn(e)?ir(t,null,[e]):ir(t,e):ir(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Jn(n)&&(n=[n]),ir(t,e,n))}Symbol("");const Ei="3.2.22",Oi="http://www.w3.org/2000/svg",Ti="undefined"!==typeof document?document:null,Ii=new Map,Si={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Ti.createElementNS(Oi,t):Ti.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>Ti.createTextNode(t),createComment:t=>Ti.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ti.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r){const i=n?n.previousSibling:e.lastChild;let s=Ii.get(t);if(!s){const e=Ti.createElement("template");if(e.innerHTML=r?`<svg>${t}</svg>`:t,s=e.content,r){const t=s.firstChild;while(t.firstChild)s.appendChild(t.firstChild);s.removeChild(t)}Ii.set(t,s)}return e.insertBefore(s.cloneNode(!0),n),[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ai(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ki(t,e,n){const i=t.style,s=Object(r["D"])(n);if(n&&!s){for(const t in n)Ci(i,t,n[t]);if(e&&!Object(r["D"])(e))for(const t in e)null==n[t]&&Ci(i,t,"")}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const Ni=/\s*!important$/;function Ci(t,e,n){if(Object(r["o"])(n))n.forEach(n=>Ci(t,e,n));else if(e.startsWith("--"))t.setProperty(e,n);else{const i=Ri(t,e);Ni.test(n)?t.setProperty(Object(r["l"])(i),n.replace(Ni,""),"important"):t[i]=n}}const ji=["Webkit","Moz","ms"],Li={};function Ri(t,e){const n=Li[e];if(n)return n;let i=Object(r["e"])(e);if("filter"!==i&&i in t)return Li[e]=i;i=Object(r["f"])(i);for(let r=0;r<ji.length;r++){const n=ji[r]+i;if(n in t)return Li[e]=n}return e}const Di="http://www.w3.org/1999/xlink";function Pi(t,e,n,i,s){if(i&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(Di,e.slice(6,e.length)):t.setAttributeNS(Di,e,n);else{const i=Object(r["C"])(e);null==n||i&&!Object(r["m"])(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function xi(t,e,n,i,s,o,a){if("innerHTML"===e||"textContent"===e)return i&&a(i,s,o),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName){t._value=n;const r=null==n?"":n;return t.value!==r&&(t.value=r),void(null==n&&t.removeAttribute(e))}if(""===n||null==n){const i=typeof t[e];if("boolean"===i)return void(t[e]=Object(r["m"])(n));if(null==n&&"string"===i)return t[e]="",void t.removeAttribute(e);if("number"===i){try{t[e]=0}catch(c){}return void t.removeAttribute(e)}}try{t[e]=n}catch(u){0}}let Mi=Date.now,Fi=!1;if("undefined"!==typeof window){Mi()>document.createEvent("Event").timeStamp&&(Mi=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Fi=!!(t&&Number(t[1])<=53)}let Ui=0;const Vi=Promise.resolve(),Bi=()=>{Ui=0},$i=()=>Ui||(Vi.then(Bi),Ui=Mi());function Gi(t,e,n,r){t.addEventListener(e,n,r)}function qi(t,e,n,r){t.removeEventListener(e,n,r)}function Hi(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=zi(e);if(r){const o=s[e]=Ki(r,i);Gi(t,n,o,a)}else o&&(qi(t,n,o,a),s[e]=void 0)}}const Wi=/(?:Once|Passive|Capture)$/;function zi(t){let e;if(Wi.test(t)){let n;e={};while(n=t.match(Wi))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Object(r["l"])(t.slice(2)),e]}function Ki(t,e){const n=t=>{const r=t.timeStamp||Mi();(Fi||r>=n.attached-1)&&Br(Xi(t,n.value),e,5,[t])};return n.value=t,n.attached=$i(),n}function Xi(t,e){if(Object(r["o"])(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(t=>e=>!e._stopped&&t(e))}return e}const Yi=/^on[a-z]/,Qi=(t,e,n,i,s=!1,o,a,c,u)=>{"class"===e?Ai(t,i,s):"style"===e?ki(t,n,i):Object(r["w"])(e)?Object(r["u"])(e)||Hi(t,e,n,i,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):Ji(t,e,i,s))?xi(t,e,i,o,a,c,u):("true-value"===e?t._trueValue=i:"false-value"===e&&(t._falseValue=i),Pi(t,e,i,s))};function Ji(t,e,n,i){return i?"innerHTML"===e||"textContent"===e||!!(e in t&&Yi.test(e)&&Object(r["p"])(n)):"spellcheck"!==e&&"draggable"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!Yi.test(e)||!Object(r["D"])(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const Zi="transition",ts="animation",es=(t,{slots:e})=>wi(pe,ss(t),e);es.displayName="Transition";const ns={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},rs=(es.props=Object(r["h"])({},pe.props,ns),(t,e=[])=>{Object(r["o"])(t)?t.forEach(t=>t(...e)):t&&t(...e)}),is=t=>!!t&&(Object(r["o"])(t)?t.some(t=>t.length>1):t.length>1);function ss(t){const e={};for(const r in t)r in ns||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:i,duration:s,enterFromClass:o=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:f=n+"-leave-from",leaveActiveClass:d=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=t,m=os(s),g=m&&m[0],v=m&&m[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:_,onLeave:w,onLeaveCancelled:E,onBeforeAppear:O=y,onAppear:T=b,onAppearCancelled:I=_}=e,S=(t,e,n)=>{us(t,e?h:c),us(t,e?l:a),n&&n()},A=(t,e)=>{us(t,p),us(t,d),e&&e()},k=t=>(e,n)=>{const r=t?T:b,s=()=>S(e,t,n);rs(r,[e,s]),ls(()=>{us(e,t?u:o),cs(e,t?h:c),is(r)||fs(e,i,g,s)})};return Object(r["h"])(e,{onBeforeEnter(t){rs(y,[t]),cs(t,o),cs(t,a)},onBeforeAppear(t){rs(O,[t]),cs(t,u),cs(t,l)},onEnter:k(!1),onAppear:k(!0),onLeave(t,e){const n=()=>A(t,e);cs(t,f),gs(),cs(t,d),ls(()=>{us(t,f),cs(t,p),is(w)||fs(t,i,v,n)}),rs(w,[t,n])},onEnterCancelled(t){S(t,!1),rs(_,[t])},onAppearCancelled(t){S(t,!0),rs(I,[t])},onLeaveCancelled(t){A(t),rs(E,[t])}})}function os(t){if(null==t)return null;if(Object(r["v"])(t))return[as(t.enter),as(t.leave)];{const e=as(t);return[e,e]}}function as(t){const e=Object(r["N"])(t);return e}function cs(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.add(e)),(t._vtc||(t._vtc=new Set)).add(e)}function us(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.remove(e));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function ls(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let hs=0;function fs(t,e,n,r){const i=t._endId=++hs,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=ds(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,f),s()},f=e=>{e.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,f)}function ds(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(Zi+"Delay"),s=r(Zi+"Duration"),o=ps(i,s),a=r(ts+"Delay"),c=r(ts+"Duration"),u=ps(a,c);let l=null,h=0,f=0;e===Zi?o>0&&(l=Zi,h=o,f=s.length):e===ts?u>0&&(l=ts,h=u,f=c.length):(h=Math.max(o,u),l=h>0?o>u?Zi:ts:null,f=l?l===Zi?s.length:c.length:0);const d=l===Zi&&/\b(transform|all)(,|$)/.test(n[Zi+"Property"]);return{type:l,timeout:h,propCount:f,hasTransform:d}}function ps(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map((e,n)=>ms(e)+ms(t[n])))}function ms(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function gs(){return document.body.offsetHeight}new WeakMap,new WeakMap;const vs=t=>{const e=t.props["onUpdate:modelValue"];return Object(r["o"])(e)?t=>Object(r["n"])(e,t):e};function ys(t){t.target.composing=!0}function bs(t){const e=t.target;e.composing&&(e.composing=!1,_s(e,"input"))}function _s(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const ws={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=vs(s);const o=i||s.props&&"number"===s.props.type;Gi(t,e?"change":"input",e=>{if(e.target.composing)return;let i=t.value;n?i=i.trim():o&&(i=Object(r["N"])(i)),t._assign(i)}),n&&Gi(t,"change",()=>{t.value=t.value.trim()}),e||(Gi(t,"compositionstart",ys),Gi(t,"compositionend",bs),Gi(t,"change",bs))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},o){if(t._assign=vs(o),t.composing)return;if(document.activeElement===t){if(n)return;if(i&&t.value.trim()===e)return;if((s||"number"===t.type)&&Object(r["N"])(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}};const Es=["ctrl","shift","alt","meta"],Os={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>Es.some(n=>t[n+"Key"]&&!e.includes(n))},Ts=(t,e)=>(n,...r)=>{for(let t=0;t<e.length;t++){const r=Os[e[t]];if(r&&r(n,e))return}return t(n,...r)},Is={beforeMount(t,{value:e},{transition:n}){t._vod="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):Ss(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!==!n&&(r?e?(r.beforeEnter(t),Ss(t,!0),r.enter(t)):r.leave(t,()=>{Ss(t,!1)}):Ss(t,e))},beforeUnmount(t,{value:e}){Ss(t,e)}};function Ss(t,e){t.style.display=e?t._vod:"none"}const As=Object(r["h"])({patchProp:Qi},Si);let ks;function Ns(){return ks||(ks=An(As))}const Cs=(...t)=>{const e=Ns().createApp(...t);const{mount:n}=e;return e.mount=t=>{const i=js(t);if(!i)return;const s=e._component;Object(r["p"])(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function js(t){if(Object(r["D"])(t)){const e=document.querySelector(t);return e}return t}},"7b0b":function(t,e,n){var r=n("da84"),i=n("1d80"),s=r.Object;t.exports=function(t){return s(i(t))}},"7c73":function(t,e,n){var r,i=n("825a"),s=n("37e8"),o=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",f="<",d="prototype",p="script",m=l("IE_PROTO"),g=function(){},v=function(t){return f+p+h+t+f+"/"+p+h},y=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},b=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(v("document.F=Object")),t.close(),t.F},_=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}_="undefined"!=typeof document?document.domain&&r?y(r):b():y(r);var t=o.length;while(t--)delete _[d][o[t]];return _()};a[m]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(g[d]=i(t),n=new g,g[d]=null,n[m]=t):n=_(),void 0===e?n:s(n,e)}},"7dd0":function(t,e,n){"use strict";var r=n("23e7"),i=n("c65b"),s=n("c430"),o=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),h=n("d44e"),f=n("9112"),d=n("6eeb"),p=n("b622"),m=n("3f8c"),g=n("ae93"),v=o.PROPER,y=o.CONFIGURABLE,b=g.IteratorPrototype,_=g.BUGGY_SAFARI_ITERATORS,w=p("iterator"),E="keys",O="values",T="entries",I=function(){return this};t.exports=function(t,e,n,o,p,g,S){c(n,e,o);var A,k,N,C=function(t){if(t===p&&P)return P;if(!_&&t in R)return R[t];switch(t){case E:return function(){return new n(this,t)};case O:return function(){return new n(this,t)};case T:return function(){return new n(this,t)}}return function(){return new n(this)}},j=e+" Iterator",L=!1,R=t.prototype,D=R[w]||R["@@iterator"]||p&&R[p],P=!_&&D||C(p),x="Array"==e&&R.entries||D;if(x&&(A=u(x.call(new t)),A!==Object.prototype&&A.next&&(s||u(A)===b||(l?l(A,b):a(A[w])||d(A,w,I)),h(A,j,!0,!0),s&&(m[j]=I))),v&&p==O&&D&&D.name!==O&&(!s&&y?f(R,"name",O):(L=!0,P=function(){return i(D,this)})),p)if(k={values:C(O),keys:g?P:C(E),entries:C(T)},S)for(N in k)(_||L||!(N in R))&&d(R,N,k[N]);else r({target:e,proto:!0,forced:_||L},k);return s&&!S||R[w]===P||d(R,w,P,{name:p}),m[e]=P,k}},"7f9a":function(t,e,n){var r=n("da84"),i=n("1626"),s=n("8925"),o=r.WeakMap;t.exports=i(o)&&/native code/.test(s(o))},"825a":function(t,e,n){var r=n("da84"),i=n("861d"),s=r.String,o=r.TypeError;t.exports=function(t){if(i(t))return t;throw o(s(t)+" is not an object")}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(t,e,n){"use strict";var r=n("a04b"),i=n("9bf2"),s=n("5c6c");t.exports=function(t,e,n){var o=r(e);o in t?i.f(t,o,s(0,n)):t[o]=n}},"857a":function(t,e,n){var r=n("e330"),i=n("1d80"),s=n("577e"),o=/"/g,a=r("".replace);t.exports=function(t,e,n,r){var c=s(i(t)),u="<"+e;return""!==n&&(u+=" "+n+'="'+a(s(r),o,"&quot;")+'"'),u+">"+c+"</"+e+">"}},"861d":function(t,e,n){var r=n("1626");t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},8925:function(t,e,n){var r=n("e330"),i=n("1626"),s=n("c6cd"),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},"8f6b":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return kr})),n.d(e,"b",(function(){return Cr})),n.d(e,"c",(function(){return Nr})),n.d(e,"d",(function(){return Lr})),n.d(e,"e",(function(){return jr})),n.d(e,"f",(function(){return Rr})),n.d(e,"g",(function(){return Dr})),n.d(e,"h",(function(){return Sr})),n.d(e,"i",(function(){return Ar}));var r,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},s={},o=o||{},a=i||self;function c(){}function u(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function l(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function h(t){return Object.prototype.hasOwnProperty.call(t,f)&&t[f]||(t[f]=++d)}var f="closure_uid_"+(1e9*Math.random()>>>0),d=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function m(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function g(t,e,n){return g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:m,g.apply(null,arguments)}function v(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function y(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function b(){this.s=this.s,this.o=this.o}var _=0,w={};b.prototype.s=!1,b.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=_)){var t=h(this);delete w[t]}},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const E=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},O=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"===typeof t?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function T(t){t:{var e=$n;const n=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function I(t){return Array.prototype.concat.apply([],arguments)}function S(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function A(t){return/^[\s\xa0]*$/.test(t)}var k,N=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function C(t,e){return-1!=t.indexOf(e)}function j(t,e){return t<e?-1:t>e?1:0}t:{var L=a.navigator;if(L){var R=L.userAgent;if(R){k=R;break t}}k=""}function D(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function P(t){const e={};for(const n in t)e[n]=t[n];return e}var x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<x.length;e++)n=x[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function F(t){return F[" "](t),t}function U(t){var e=J;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}F[" "]=c;var V,B=C(k,"Opera"),$=C(k,"Trident")||C(k,"MSIE"),G=C(k,"Edge"),q=G||$,H=C(k,"Gecko")&&!(C(k.toLowerCase(),"webkit")&&!C(k,"Edge"))&&!(C(k,"Trident")||C(k,"MSIE"))&&!C(k,"Edge"),W=C(k.toLowerCase(),"webkit")&&!C(k,"Edge");function z(){var t=a.document;return t?t.documentMode:void 0}t:{var K="",X=function(){var t=k;return H?/rv:([^\);]+)(\)|;)/.exec(t):G?/Edge\/([\d\.]+)/.exec(t):$?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):W?/WebKit\/(\S+)/.exec(t):B?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(X&&(K=X?X[1]:""),$){var Y=z();if(null!=Y&&Y>parseFloat(K)){V=String(Y);break t}}V=K}var Q,J={};function Z(){return U((function(){let t=0;const e=N(String(V)).split("."),n=N("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=j(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||j(0==i[2].length,0==s[2].length)||j(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(a.document&&$){var tt=z();Q=tt||(parseInt(V,10)||void 0)}else Q=void 0;var et=Q,nt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(n){}return t}();function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function it(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(H){t:{try{F(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:st[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&it.Z.h.call(this)}}rt.prototype.h=function(){this.defaultPrevented=!0},y(it,rt);var st={2:"touch",3:"pen",4:"mouse"};it.prototype.h=function(){it.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ot="closure_listenable_"+(1e6*Math.random()|0),at=0;function ct(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++at,this.ca=this.fa=!1}function ut(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function lt(t){this.src=t,this.g={},this.h=0}function ht(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=E(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ut(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ft(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}lt.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=ft(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ct(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var dt="closure_lm_"+(1e6*Math.random()|0),pt={};function mt(t,e,n,r,i){if(r&&r.once)return yt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)mt(t,e[s],n,r,i);return null}return n=It(n),t&&t[ot]?t.N(e,n,l(r)?!!r.capture:!!r,i):gt(t,e,n,!1,r,i)}function gt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=l(i)?!!i.capture:!!i,a=Ot(t);if(a||(t[dt]=a=new lt(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=vt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nt||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(wt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function vt(){function t(n){return e.call(t.src,t.listener,n)}var e=Et;return t}function yt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)yt(t,e[s],n,r,i);return null}return n=It(n),t&&t[ot]?t.O(e,n,l(r)?!!r.capture:!!r,i):gt(t,e,n,!0,r,i)}function bt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)bt(t,e[s],n,r,i);else r=l(r)?!!r.capture:!!r,n=It(n),t&&t[ot]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=ft(s,n,r,i),-1<n&&(ut(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Ot(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ft(e,n,r,i)),(n=-1<t?e[t]:null)&&_t(n))}function _t(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ot])ht(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(wt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ot(e))?(ht(n,t),0==n.h&&(n.src=null,e[dt]=null)):ut(t)}}}function wt(t){return t in pt?pt[t]:pt[t]="on"+t}function Et(t,e){if(t.ca)t=!0;else{e=new it(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&_t(t),t=n.call(r,e)}return t}function Ot(t){return t=t[dt],t instanceof lt?t:null}var Tt="__closure_events_fn_"+(1e9*Math.random()>>>0);function It(t){return"function"===typeof t?t:(t[Tt]||(t[Tt]=function(e){return t.handleEvent(e)}),t[Tt])}function St(){b.call(this),this.i=new lt(this),this.P=this,this.I=null}function At(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var i=e;e=new rt(r,t),M(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=kt(o,r,!0,e)&&i}if(o=e.g=t,i=kt(o,r,!0,e)&&i,i=kt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=kt(o,r,!1,e)&&i}function kt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ht(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}y(St,b),St.prototype[ot]=!0,St.prototype.removeEventListener=function(t,e,n,r){bt(this,t,e,n,r)},St.prototype.M=function(){if(St.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ut(n[r]);delete e.g[t],e.h--}}this.I=null},St.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},St.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Nt=a.JSON.stringify;function Ct(){var t=Ut;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class jt{constructor(){this.h=this.g=null}add(t,e){const n=Rt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Lt,Rt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Dt,t=>t.reset());class Dt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Pt(t){a.setTimeout(()=>{throw t},0)}function xt(t,e){Lt||Mt(),Ft||(Lt(),Ft=!0),Ut.add(t,e)}function Mt(){var t=a.Promise.resolve(void 0);Lt=function(){t.then(Vt)}}var Ft=!1,Ut=new jt;function Vt(){for(var t;t=Ct();){try{t.h.call(t.g)}catch(n){Pt(n)}var e=Rt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ft=!1}function Bt(t,e){St.call(this),this.h=t||1,this.g=e||a,this.j=g(this.kb,this),this.l=Date.now()}function $t(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Gt(t,e,n){if("function"===typeof t)n&&(t=g(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=g(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function qt(t){t.g=Gt(()=>{t.g=null,t.i&&(t.i=!1,qt(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}y(Bt,St),r=Bt.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),At(this,"tick"),this.da&&($t(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Bt.Z.M.call(this),$t(this),delete this.g};class Ht extends b{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:qt(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wt(t){b.call(this),this.h=t,this.g={}}y(Wt,b);var zt=[];function Kt(t,e,n,r){Array.isArray(n)||(n&&(zt[0]=n.toString()),n=zt);for(var i=0;i<n.length;i++){var s=mt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Xt(t){D(t.g,(function(t,e){this.g.hasOwnProperty(e)&&_t(t)}),t),t.g={}}function Yt(){this.g=!0}function Qt(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Jt(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Zt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(r?" "+r:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Nt(n)}catch(a){return e}}Wt.prototype.M=function(){Wt.Z.M.call(this),Xt(this)},Wt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Yt.prototype.Aa=function(){this.g=!1},Yt.prototype.info=function(){};var ne={},re=null;function ie(){return re=re||new St}function se(t){rt.call(this,ne.Ma,t)}function oe(t){const e=ie();At(e,new se(e,t))}function ae(t,e){rt.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=ie();At(e,new ae(e,t))}function ue(t,e){rt.call(this,ne.Na,t),this.size=e}function le(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}ne.Ma="serverreachability",y(se,rt),ne.STAT_EVENT="statevent",y(ae,rt),ne.Na="timingevent",y(ue,rt);var he={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},fe={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function de(){}function pe(t){return t.h||(t.h=t.i())}function me(){}de.prototype.h=null;var ge,ve={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ye(){rt.call(this,"d")}function be(){rt.call(this,"c")}function _e(){}function we(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Wt(this),this.P=Oe,t=q?125:void 0,this.W=new Bt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ee}function Ee(){this.i=null,this.g="",this.h=!1}y(ye,rt),y(be,rt),y(_e,de),_e.prototype.g=function(){return new XMLHttpRequest},_e.prototype.i=function(){return{}},ge=new _e;var Oe=45e3,Te={},Ie={};function Se(t,e,n){t.K=1,t.v=Qe(He(e)),t.s=n,t.U=!0,Ae(t,null)}function Ae(t,e){t.F=Date.now(),je(t),t.A=He(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),dn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ee,t.g=br(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Ht(g(t.Ia,t,t.g),t.O)),Kt(t.V,t.g,"readystatechange",t.gb),e=t.H?P(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),oe(1),Qt(t.j,t.u,t.A,t.m,t.X,t.s)}function ke(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Ne(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=Ce(t,n),r==Ie){4==e&&(t.o=4,ce(14),i=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(r==Te){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Zt(t.j,t.m,r,null),xe(t,r)}ke(t)&&r!=Ie&&r!=Te&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hr(e),e.L=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Pe(t),De(t))}function Ce(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Ie:(n=Number(e.substring(n,r)),isNaN(n)?Te:(r+=1,r+n>e.length?Ie:(e=e.substr(r,n),t.C=r+n,e)))}function je(t){t.Y=Date.now()+t.P,Le(t,t.P)}function Le(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=le(g(t.eb,t),e)}function Re(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function De(t){0==t.l.G||t.I||pr(t.l,t)}function Pe(t){Re(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,$t(t.W),Xt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function xe(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||wn(n.i,t)))if(n.I=t.N,!t.J&&wn(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;dr(n),er(n)}lr(n),ce(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=le(g(n.ab,n),6e3));if(1>=_n(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else gr(n,11)}else if((t.J||n.g==t)&&dr(n),!A(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;!s.g&&(C(t,"spdy")||C(t,"quic")||C(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(En(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,Ye(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=yr(r,r.H?r.la:null,r.W),o.J){On(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Re(a),je(a)),r.g=o}else ur(r);0<n.l.length&&ir(n)}else"stop"!=u[0]&&"close"!=u[0]||gr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?gr(n,7):tr(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}oe(4)}catch(u){}}function Me(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Fe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"===typeof t)O(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(u(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=Me(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Ue(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ue)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Ve(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Be(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Be(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function Be(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=we.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Kn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const h=Kn(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>h)&&(3!=h||q||this.g&&(this.h.h||this.g.ga()||Xn(this.g)))){this.I||4!=h||7==e||oe(8==e||0>=f?3:2),Re(this);var n=this.g.ba();this.N=n;e:if(ke(this)){var r=Xn(this.g);t="";var i=r.length,s=4==Kn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Pe(this),De(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Jt(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(c)){var l=c;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,ce(12),Pe(this),De(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,xe(this,n)}this.U?(Ne(this,h,o),q&&this.i&&3==h&&(Kt(this.V,this.W,"tick",this.fb),this.W.start())):(Zt(this.j,this.m,o,null),xe(this,o)),4==h&&Pe(this),this.i&&!this.I&&(4==h?pr(this.l,this):(this.i=!1,je(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Pe(this),De(this)}}}catch(h){}},r.fb=function(){if(this.g){var t=Kn(this.g),e=this.g.ga();this.C<e.length&&(Re(this),Ne(this,t,e),this.i&&4!=t&&je(this))}},r.cancel=function(){this.I=!0,Pe(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(te(this.j,this.A),2!=this.K&&(oe(3),ce(17)),Pe(this),this.o=2,De(this)):Le(this,this.Y-t)},r=Ue.prototype,r.R=function(){Ve(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return Ve(this),this.g.concat()},r.get=function(t,e){return Be(this.h,t)?this.h[t]:e},r.set=function(t,e){Be(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var $e=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ge(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function qe(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof qe){this.g=void 0!==e?e:t.g,We(this,t.j),this.s=t.s,ze(this,t.i),Ke(this,t.m),this.l=t.l,e=t.h;var n=new un;n.i=e.i,e.g&&(n.g=new Ue(e.g),n.h=e.h),Xe(this,n),this.o=t.o}else t&&(n=String(t).match($e))?(this.g=!!e,We(this,n[1]||"",!0),this.s=tn(n[2]||""),ze(this,n[3]||"",!0),Ke(this,n[4]),this.l=tn(n[5]||"",!0),Xe(this,n[6]||"",!0),this.o=tn(n[7]||"")):(this.g=!!e,this.h=new un(null,this.g))}function He(t){return new qe(t)}function We(t,e,n){t.j=n?tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ze(t,e,n){t.i=n?tn(e,!0):e}function Ke(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Xe(t,e,n){e instanceof un?(t.h=e,mn(t.h,t.g)):(n||(e=en(e,an)),t.h=new un(e,t.g))}function Ye(t,e,n){t.h.set(e,n)}function Qe(t){return Ye(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Je(t){return t instanceof qe?He(t):new qe(t,void 0)}function Ze(t,e,n,r){var i=new qe(null,void 0);return t&&We(i,t),e&&ze(i,e),n&&Ke(i,n),r&&(i.l=r),i}function tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function en(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,nn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}qe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(en(e,rn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(en(e,rn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(en(n,"/"==n.charAt(0)?on:sn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",en(n,cn)),t.join("")};var rn=/[#\/\?@]/g,sn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ln(t){t.g||(t.g=new Ue,t.h=0,t.i&&Ge(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function hn(t,e){ln(t),e=pn(t,e),Be(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Be(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ve(t)))}function fn(t,e){return ln(t),e=pn(t,e),Be(t.g.h,e)}function dn(t,e,n){hn(t,e),0<n.length&&(t.i=null,t.g.set(pn(t,e),S(n)),t.h+=n.length)}function pn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function mn(t,e){e&&!t.j&&(ln(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(hn(this,e),dn(this,n,t))}),t)),t.j=e}r=un.prototype,r.add=function(t,e){ln(this),this.i=null,t=pn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){ln(this),this.g.forEach((function(n,r){O(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){ln(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},r.R=function(t){ln(this);var e=[];if("string"===typeof t)fn(this,t)&&(e=I(e,this.g.get(pn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=I(e,t[n])}return e},r.set=function(t,e){return ln(this),this.i=null,t=pn(this,t),fn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};var gn=class{constructor(t,e){this.h=t,this.g=e}};function vn(t){this.l=t||yn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yn=10;function bn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function _n(t){return t.h?1:t.g?t.g.size:0}function wn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function En(t,e){t.g?t.g.add(e):t.h=e}function On(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Tn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return S(t.i)}function In(){}function Sn(){this.g=new In}function An(t,e,n){const r=n||"";try{Fe(t,(function(t,n){let i=t;l(t)&&(i=Nt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function kn(t,e){const n=new Yt;if(a.Image){const r=new Image;r.onload=v(Nn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=v(Nn,n,r,"TestLoadImage: error",!1,e),r.onabort=v(Nn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=v(Nn,n,r,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Nn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function Cn(t){this.l=t.$b||null,this.j=t.ib||!1}function jn(t,e){St.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ln,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}vn.prototype.cancel=function(){if(this.i=Tn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},In.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},In.prototype.parse=function(t){return a.JSON.parse(t,void 0)},y(Cn,de),Cn.prototype.g=function(){return new jn(this.l,this.j)},Cn.prototype.i=function(t){return function(){return t}}({}),y(jn,St);var Ln=0;function Rn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Dn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Pn(t)}function Pn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=jn.prototype,r.open=function(t,e){if(this.readyState!=Ln)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Pn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Dn(this)),this.readyState=Ln},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Rn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Dn(this):Pn(this),3==this.readyState&&Rn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,Dn(this))},r.Ta=function(t){this.g&&(this.response=t,Dn(this))},r.ha=function(){this.g&&Dn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(jn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var xn=a.JSON.parse;function Mn(t){St.call(this),this.headers=new Ue,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fn,this.K=this.L=!1}y(Mn,St);var Fn="",Un=/^https?$/i,Vn=["POST","PUT"];function Bn(t){return $&&Z()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function $n(t){return"content-type"==t.toLowerCase()}function Gn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,qn(t),Wn(t)}function qn(t){t.D||(t.D=!0,At(t,"complete"),At(t,"error"))}function Hn(t){if(t.h&&"undefined"!=typeof o&&(!t.C[1]||4!=Kn(t)||2!=t.ba()))if(t.v&&4==Kn(t))Gt(t.Fa,0,t);else if(At(t,"readystatechange"),4==Kn(t)){t.h=!1;try{const o=t.ba();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var i=String(t.H).match($e)[1]||null;if(!i&&a.self&&a.self.location){var s=a.self.location.protocol;i=s.substr(0,s.length-1)}r=!Un.test(i?i.toLowerCase():"")}n=r}if(n)At(t,"complete"),At(t,"success");else{t.m=6;try{var c=2<Kn(t)?t.g.statusText:""}catch(u){c=""}t.j=c+" ["+t.ba()+"]",qn(t)}}finally{Wn(t)}}}function Wn(t,e){if(t.g){zn(t);const r=t.g,i=t.C[0]?c:null;t.g=null,t.C=null,e||At(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function zn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Kn(t){return t.g?t.g.readyState:0}function Xn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Fn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Yn(t){let e="";return D(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Qn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Yn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Ye(t,e,n))}function Jn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zn(t){this.za=0,this.l=[],this.h=new Yt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Jn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Jn("baseRetryDelayMs",5e3,t),this.$a=Jn("retryDelaySeedMs",1e4,t),this.Ya=Jn("forwardChannelMaxRetries",2,t),this.ra=Jn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new vn(t&&t.concurrentRequestLimit),this.Ca=new Sn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function tr(t){if(nr(t),3==t.G){var e=t.V++,n=He(t.F);Ye(n,"SID",t.J),Ye(n,"RID",e),Ye(n,"TYPE","terminate"),ar(t,n),e=new we(t,t.h,e,void 0),e.K=2,e.v=Qe(He(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=br(e.l,null),e.g.ea(e.v)),e.F=Date.now(),je(e)}vr(t)}function er(t){t.g&&(hr(t),t.g.cancel(),t.g=null)}function nr(t){er(t),t.u&&(a.clearTimeout(t.u),t.u=null),dr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function rr(t,e){t.l.push(new gn(t.Za++,e)),3==t.G&&ir(t)}function ir(t){bn(t.i)||t.m||(t.m=!0,xt(t.Ha,t),t.C=0)}function sr(t,e){return!(_n(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=le(g(t.Ha,t,e),mr(t,t.C)),t.C++,!0))}function or(t,e){var n;n=e?e.m:t.V++;const r=He(t.F);Ye(r,"SID",t.J),Ye(r,"RID",n),Ye(r,"AID",t.U),ar(t,r),t.o&&t.s&&Qn(r,t.o,t.s),n=new we(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=cr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),En(t.i,n),Se(n,r,e)}function ar(t,e){t.j&&Fe({},(function(t,n){Ye(e,n,t)}))}function cr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?g(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=e,0>n)e=Math.max(0,i[a].h-100),o=!1;else try{An(c,t,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function ur(t){t.g||t.u||(t.Y=1,xt(t.Ga,t),t.A=0)}function lr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=le(g(t.Ga,t),mr(t,t.A)),t.A++,!0)}function hr(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function fr(t){t.g=new we(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=He(t.oa);Ye(e,"RID","rpc"),Ye(e,"SID",t.J),Ye(e,"CI",t.N?"0":"1"),Ye(e,"AID",t.U),ar(t,e),Ye(e,"TYPE","xmlhttp"),t.o&&t.s&&Qn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Qe(He(e)),n.s=null,n.U=!0,Ae(n,t)}function dr(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function pr(t,e){var n=null;if(t.g==e){dr(t),hr(t),t.g=null;var r=2}else{if(!wn(t.i,e))return;n=e.D,On(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ie(),At(r,new ue(r,n,e,i)),ir(t)}else ur(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==r&&sr(t,e)||2==r&&lr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:gr(t,5);break;case 4:gr(t,10);break;case 3:gr(t,6);break;default:gr(t,2)}}function mr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function gr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=g(t.jb,t);n||(n=new qe("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||We(n,"https"),Qe(n)),kn(n.toString(),r)}else ce(2);t.G=0,t.j&&t.j.va(e),vr(t),nr(t)}function vr(t){t.G=0,t.I=-1,t.j&&(0==Tn(t.i).length&&0==t.l.length||(t.i.i.length=0,S(t.l),t.l.length=0),t.j.ua())}function yr(t,e,n){let r=Je(n);if(""!=r.i)e&&ze(r,e+"."+r.i),Ke(r,r.m);else{const t=a.location;r=Ze(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&D(t.aa,(function(t,e){Ye(r,e,t)})),e=t.D,n=t.sa,e&&n&&Ye(r,e,n),Ye(r,"VER",t.ma),ar(t,r),r}function br(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Mn(new Cn({ib:!0})):new Mn(t.qa),e.L=t.H,e}function _r(){}function wr(){if($&&!(10<=Number(et)))throw Error("Environmental error: no available transport.")}function Er(t,e){St.call(this),this.g=new Zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!A(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!A(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ir(this)}function Or(t){ye.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Tr(){be.call(this),this.status=1}function Ir(t){this.g=t}r=Mn.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ge.g(),this.C=this.u?pe(this.u):pe(ge),this.g.onreadystatechange=g(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void Gn(this,s)}t=n||"";const i=new Ue(this.headers);r&&Fe(r,(function(t,e){i.set(e,t)})),r=T(i.T()),n=a.FormData&&t instanceof a.FormData,!(0<=E(Vn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{zn(this),0<this.B&&((this.K=Bn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g(this.pa,this)):this.A=Gt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Gn(this,s)}},r.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,At(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,At(this,"complete"),At(this,"abort"),Wn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wn(this,!0)),Mn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Hn(this):this.cb())},r.cb=function(){Hn(this)},r.ba=function(){try{return 2<Kn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),xn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new we(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=P(s),M(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=cr(this,i,e),n=He(this.F),Ye(n,"RID",t),Ye(n,"CVER",22),this.D&&Ye(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&s&&Qn(n,this.o,s),En(this.i,i),this.Ra&&Ye(n,"TYPE","init"),this.ja?(Ye(n,"$req",e),Ye(n,"SID","null"),i.$=!0,Se(i,n,null)):Se(i,n,e),this.G=2}}else 3==this.G&&(t?or(this,t):0==this.l.length||bn(this.i)||or(this))},r.Ga=function(){if(this.u=null,fr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=le(g(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ce(10),er(this),fr(this))},r.ab=function(){null!=this.v&&(this.v=null,er(this),lr(this),ce(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ce(2)):(this.h.info("Failed to ping google.com"),ce(1))},r=_r.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},wr.prototype.g=function(t,e){return new Er(t,e)},y(Er,St),Er.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),xt(g(t.hb,t,e))),ce(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=yr(t,null,t.W),ir(t)},Er.prototype.close=function(){tr(this.g)},Er.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,rr(this.g,e)}else this.v?(e={},e.__data__=Nt(t),rr(this.g,e)):rr(this.g,t)},Er.prototype.M=function(){this.g.j=null,delete this.j,tr(this.g),delete this.g,Er.Z.M.call(this)},y(Or,ye),y(Tr,be),y(Ir,_r),Ir.prototype.xa=function(){At(this.g,"a")},Ir.prototype.wa=function(t){At(this.g,new Or(t))},Ir.prototype.va=function(t){At(this.g,new Tr(t))},Ir.prototype.ua=function(){At(this.g,"b")},wr.prototype.createWebChannel=wr.prototype.g,Er.prototype.send=Er.prototype.u,Er.prototype.open=Er.prototype.m,Er.prototype.close=Er.prototype.close,he.NO_ERROR=0,he.TIMEOUT=8,he.HTTP_ERROR=6,fe.COMPLETE="complete",me.EventType=ve,ve.OPEN="a",ve.CLOSE="b",ve.ERROR="c",ve.MESSAGE="d",St.prototype.listen=St.prototype.N,Mn.prototype.listenOnce=Mn.prototype.O,Mn.prototype.getLastError=Mn.prototype.La,Mn.prototype.getLastErrorCode=Mn.prototype.Da,Mn.prototype.getStatus=Mn.prototype.ba,Mn.prototype.getResponseJson=Mn.prototype.Qa,Mn.prototype.getResponseText=Mn.prototype.ga,Mn.prototype.send=Mn.prototype.ea;var Sr=s.createWebChannelTransport=function(){return new wr},Ar=s.getStatEventTarget=function(){return ie()},kr=s.ErrorCode=he,Nr=s.EventType=fe,Cr=s.Event=ne,jr=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Lr=s.FetchXmlHttpFactory=Cn,Rr=s.WebChannel=me,Dr=s.XhrIo=Mn}).call(this,n("c8ba"))},"90e3":function(t,e,n){var r=n("e330"),i=0,s=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},9112:function(t,e,n){var r=n("83ab"),i=n("9bf2"),s=n("5c6c");t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},"94ca":function(t,e,n){var r=n("d039"),i=n("1626"),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(L){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,s=Object.create(i.prototype),o=new N(r||[]);return s._invoke=I(t,n,o),s}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(L){return{type:"throw",arg:L}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",m={};function g(){}function v(){}function y(){}var b={};c(b,s,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(C([])));w&&w!==n&&r.call(w,s)&&(b=w);var E=y.prototype=g.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function n(i,s,o,a){var c=l(t[i],t,s);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,o,a)}),(function(t){n("throw",t,o,a)})):e.resolve(h).then((function(t){u.value=t,o(u)}),(function(t){return n("throw",t,o,a)}))}a(c.arg)}var i;function s(t,r){function s(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(s,s):s()}this._invoke=s}function I(t,e,n){var r=h;return function(i,s){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw s;return j()}n.method=i,n.arg=s;while(1){var o=n.delegate;if(o){var a=S(o,n);if(a){if(a===m)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function S(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var s=i.arg;return s?s.done?(n[t.resultName]=s.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function C(t){if(t){var n=t[s];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:j}}function j(){return{value:e,done:!0}}return v.prototype=y,c(E,"constructor",y),c(y,"constructor",v),v.displayName=c(y,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,a,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},O(T.prototype),c(T.prototype,o,(function(){return this})),t.AsyncIterator=T,t.async=function(e,n,r,i,s){void 0===s&&(s=Promise);var o=new T(u(e,n,r,i),s);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},O(E),c(E,a,"Generator"),c(E,s,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=C,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return a.type="throw",a.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],a=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var s=i;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=t,o.arg=e,s?(this.method="next",this.next=s.finallyLoc,m):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;k(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:C(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},9911:function(t,e,n){"use strict";var r=n("23e7"),i=n("857a"),s=n("af03");r({target:"String",proto:!0,forced:s("link")},{link:function(t){return i(this,"a","href",t)}})},"9a1f":function(t,e,n){var r=n("da84"),i=n("c65b"),s=n("59ed"),o=n("825a"),a=n("0d51"),c=n("35a1"),u=r.TypeError;t.exports=function(t,e){var n=arguments.length<2?c(t):e;if(s(n))return o(i(n,t));throw u(a(t)+" is not iterable")}},"9bf2":function(t,e,n){var r=n("da84"),i=n("83ab"),s=n("0cfb"),o=n("825a"),a=n("a04b"),c=r.TypeError,u=Object.defineProperty;e.f=i?u:function(t,e,n){if(o(t),e=a(e),o(n),s)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9ed3":function(t,e,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),s=n("5c6c"),o=n("d44e"),a=n("3f8c"),c=function(){return this};t.exports=function(t,e,n){var u=e+" Iterator";return t.prototype=i(r,{next:s(1,n)}),o(t,u,!1,!0),a[u]=c,t}},"9ff4":function(t,e,n){"use strict";(function(t){function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,"a",(function(){return T})),n.d(e,"b",(function(){return O})),n.d(e,"c",(function(){return S})),n.d(e,"d",(function(){return I})),n.d(e,"e",(function(){return Q})),n.d(e,"f",(function(){return tt})),n.d(e,"g",(function(){return it})),n.d(e,"h",(function(){return C})),n.d(e,"i",(function(){return at})),n.d(e,"j",(function(){return nt})),n.d(e,"k",(function(){return R})),n.d(e,"l",(function(){return Z})),n.d(e,"m",(function(){return c})),n.d(e,"n",(function(){return rt})),n.d(e,"o",(function(){return D})),n.d(e,"p",(function(){return F})),n.d(e,"q",(function(){return s})),n.d(e,"r",(function(){return g})),n.d(e,"s",(function(){return z})),n.d(e,"t",(function(){return P})),n.d(e,"u",(function(){return N})),n.d(e,"v",(function(){return B})),n.d(e,"w",(function(){return k})),n.d(e,"x",(function(){return W})),n.d(e,"y",(function(){return $})),n.d(e,"z",(function(){return K})),n.d(e,"A",(function(){return v})),n.d(e,"B",(function(){return x})),n.d(e,"C",(function(){return a})),n.d(e,"D",(function(){return U})),n.d(e,"E",(function(){return V})),n.d(e,"F",(function(){return b})),n.d(e,"G",(function(){return _})),n.d(e,"H",(function(){return r})),n.d(e,"I",(function(){return d})),n.d(e,"J",(function(){return u})),n.d(e,"K",(function(){return j})),n.d(e,"L",(function(){return w})),n.d(e,"M",(function(){return et})),n.d(e,"N",(function(){return st})),n.d(e,"O",(function(){return H}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(t){return!!t||""===t}function u(t){if(D(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=U(r)?f(r):u(r);if(i)for(const t in i)e[t]=i[t]}return e}return U(t)||B(t)?t:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function f(t){const e={};return t.split(l).forEach(t=>{if(t){const n=t.split(h);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function d(t){let e="";if(U(t))e=t;else if(D(t))for(let n=0;n<t.length;n++){const r=d(t[n]);r&&(e+=r+" ")}else if(B(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",m="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",g=r(p),v=r(m);function y(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=b(t[r],e[r]);return n}function b(t,e){if(t===e)return!0;let n=M(t),r=M(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=D(t),r=D(e),n||r)return!(!n||!r)&&y(t,e);if(n=B(t),r=B(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!b(t[n],e[n]))return!1}}return String(t)===String(e)}function _(t,e){return t.findIndex(t=>b(t,e))}const w=t=>null==t?"":D(t)||B(t)&&(t.toString===G||!F(t.toString))?JSON.stringify(t,E,2):String(t),E=(t,e)=>e&&e.__v_isRef?E(t,e.value):P(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[e,n])=>(t[e+" =>"]=n,t),{})}:x(e)?{[`Set(${e.size})`]:[...e.values()]}:!B(e)||D(e)||W(e)?e:String(e),O={},T=[],I=()=>{},S=()=>!1,A=/^on[^a-z]/,k=t=>A.test(t),N=t=>t.startsWith("onUpdate:"),C=Object.assign,j=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},L=Object.prototype.hasOwnProperty,R=(t,e)=>L.call(t,e),D=Array.isArray,P=t=>"[object Map]"===q(t),x=t=>"[object Set]"===q(t),M=t=>t instanceof Date,F=t=>"function"===typeof t,U=t=>"string"===typeof t,V=t=>"symbol"===typeof t,B=t=>null!==t&&"object"===typeof t,$=t=>B(t)&&F(t.then)&&F(t.catch),G=Object.prototype.toString,q=t=>G.call(t),H=t=>q(t).slice(8,-1),W=t=>"[object Object]"===q(t),z=t=>U(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,K=r(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),X=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},Y=/-(\w)/g,Q=X(t=>t.replace(Y,(t,e)=>e?e.toUpperCase():"")),J=/\B([A-Z])/g,Z=X(t=>t.replace(J,"-$1").toLowerCase()),tt=X(t=>t.charAt(0).toUpperCase()+t.slice(1)),et=X(t=>t?"on"+tt(t):""),nt=(t,e)=>!Object.is(t,e),rt=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},it=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},st=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ot;const at=()=>ot||(ot="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof t?t:{})}).call(this,n("c8ba"))},a04b:function(t,e,n){var r=n("c04e"),i=n("d9b5");t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},a434:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),s=n("23cb"),o=n("5926"),a=n("07fa"),c=n("7b0b"),u=n("65f0"),l=n("8418"),h=n("1dde"),f=h("splice"),d=i.TypeError,p=Math.max,m=Math.min,g=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f},{splice:function(t,e){var n,r,i,h,f,y,b=c(this),_=a(b),w=s(t,_),E=arguments.length;if(0===E?n=r=0:1===E?(n=0,r=_-w):(n=E-2,r=m(p(o(e),0),_-w)),_+n-r>g)throw d(v);for(i=u(b,r),h=0;h<r;h++)f=w+h,f in b&&l(i,h,b[f]);if(i.length=r,n<r){for(h=w;h<_-r;h++)f=h+r,y=h+n,f in b?b[y]=b[f]:delete b[y];for(h=_;h>_-r+n;h--)delete b[h-1]}else if(n>r)for(h=_-r;h>w;h--)f=h+r-1,y=h+n-1,f in b?b[y]=b[f]:delete b[y];for(h=0;h<n;h++)b[h+w]=arguments[h+2];return b.length=_-r+n,i}})},a4b4:function(t,e,n){var r=n("342f");t.exports=/web0s(?!.*chrome)/i.test(r)},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},a79d:function(t,e,n){"use strict";var r=n("23e7"),i=n("c430"),s=n("fea9"),o=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),h=n("6eeb"),f=!!s&&o((function(){s.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:f},{finally:function(t){var e=u(this,a("Promise")),n=c(t);return this.then(n?function(n){return l(e,t()).then((function(){return n}))}:t,n?function(n){return l(e,t()).then((function(){throw n}))}:t)}}),!i&&c(s)){var d=a("Promise").prototype["finally"];s.prototype["finally"]!==d&&h(s.prototype,"finally",d,{unsafe:!0})}},a9e3:function(t,e,n){"use strict";var r=n("83ab"),i=n("da84"),s=n("e330"),o=n("94ca"),a=n("6eeb"),c=n("1a2d"),u=n("7156"),l=n("3a9b"),h=n("d9b5"),f=n("c04e"),d=n("d039"),p=n("241c").f,m=n("06cf").f,g=n("9bf2").f,v=n("408a"),y=n("58a8").trim,b="Number",_=i[b],w=_.prototype,E=i.TypeError,O=s("".slice),T=s("".charCodeAt),I=function(t){var e=f(t,"number");return"bigint"==typeof e?e:S(e)},S=function(t){var e,n,r,i,s,o,a,c,u=f(t,"number");if(h(u))throw E("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=y(u),e=T(u,0),43===e||45===e){if(n=T(u,2),88===n||120===n)return NaN}else if(48===e){switch(T(u,1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(s=O(u,2),o=s.length,a=0;a<o;a++)if(c=T(s,a),c<48||c>i)return NaN;return parseInt(s,r)}return+u};if(o(b,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var A,k=function(t){var e=arguments.length<1?0:_(I(t)),n=this;return l(w,n)&&d((function(){v(n)}))?u(Object(e),n,k):e},N=r?p(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),C=0;N.length>C;C++)c(_,A=N[C])&&!c(k,A)&&g(k,A,m(_,A));k.prototype=w,w.constructor=k,a(i,b,k)}},abc5:function(t,e,n){"use strict";(function(t){function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof t?t:{}}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s}));const s="function"===typeof Proxy}).call(this,n("c8ba"))},addb:function(t,e,n){var r=n("f36a"),i=Math.floor,s=function(t,e){var n=t.length,c=i(n/2);return n<8?o(t,e):a(t,s(r(t,0,c),e),s(r(t,c),e),e)},o=function(t,e){var n,r,i=t.length,s=1;while(s<i){r=s,n=t[s];while(r&&e(t[r-1],n)>0)t[r]=t[--r];r!==s++&&(t[r]=n)}return t},a=function(t,e,n,r){var i=e.length,s=n.length,o=0,a=0;while(o<i||a<s)t[o+a]=o<i&&a<s?r(e[o],n[a])<=0?e[o++]:n[a++]:o<i?e[o++]:n[a++];return t};t.exports=s},ae93:function(t,e,n){"use strict";var r,i,s,o=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),h=n("b622"),f=n("c430"),d=h("iterator"),p=!1;[].keys&&(s=[].keys(),"next"in s?(i=u(u(s)),i!==Object.prototype&&(r=i)):p=!0);var m=void 0==r||o((function(){var t={};return r[d].call(t)!==t}));m?r={}:f&&(r=c(r)),a(r[d])||l(r,d,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},af03:function(t,e,n){var r=n("d039");t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b041:function(t,e,n){"use strict";var r=n("00ee"),i=n("f5df");t.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b0c0:function(t,e,n){var r=n("83ab"),i=n("5e77").EXISTS,s=n("e330"),o=n("9bf2").f,a=Function.prototype,c=s(a.toString),u=/^\s*function ([^ (]*)/,l=s(u.exec),h="name";r&&!i&&o(a,h,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(t){return""}}})},b575:function(t,e,n){var r,i,s,o,a,c,u,l,h=n("da84"),f=n("0366"),d=n("06cf").f,p=n("2cf4").set,m=n("1cdc"),g=n("d4c3"),v=n("a4b4"),y=n("605d"),b=h.MutationObserver||h.WebKitMutationObserver,_=h.document,w=h.process,E=h.Promise,O=d(h,"queueMicrotask"),T=O&&O.value;T||(r=function(){var t,e;y&&(t=w.domain)&&t.exit();while(i){e=i.fn,i=i.next;try{e()}catch(n){throw i?o():s=void 0,n}}s=void 0,t&&t.enter()},m||y||v||!b||!_?!g&&E&&E.resolve?(u=E.resolve(void 0),u.constructor=E,l=f(u.then,u),o=function(){l(r)}):y?o=function(){w.nextTick(r)}:(p=f(p,h),o=function(){p(r)}):(a=!0,c=_.createTextNode(""),new b(r).observe(c,{characterData:!0}),o=function(){c.data=a=!a})),t.exports=T||function(t){var e={fn:t,next:void 0};s&&(s.next=e),i||(i=e,o()),s=e}},b622:function(t,e,n){var r=n("da84"),i=n("5692"),s=n("1a2d"),o=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=l&&l["for"],f=c?l:l&&l.withoutSetter||o;t.exports=function(t){if(!s(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&s(l,t)?u[t]=l[t]:u[t]=c&&h?h(e):f(e)}return u[t]}},b727:function(t,e,n){var r=n("0366"),i=n("e330"),s=n("44ad"),o=n("7b0b"),a=n("07fa"),c=n("65f0"),u=i([].push),l=function(t){var e=1==t,n=2==t,i=3==t,l=4==t,h=6==t,f=7==t,d=5==t||h;return function(p,m,g,v){for(var y,b,_=o(p),w=s(_),E=r(m,g),O=a(w),T=0,I=v||c,S=e?I(p,O):n||f?I(p,0):void 0;O>T;T++)if((d||T in w)&&(y=w[T],b=E(y,T,_),t))if(e)S[T]=b;else if(b)switch(t){case 3:return!0;case 5:return y;case 6:return T;case 2:u(S,y)}else switch(t){case 4:return!1;case 7:u(S,y)}return h?-1:i||l?l:S}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},b774:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i}));const r="devtools-plugin:setup",i="plugin:settings:set"},c04e:function(t,e,n){var r=n("da84"),i=n("c65b"),s=n("861d"),o=n("d9b5"),a=n("dc4a"),c=n("485a"),u=n("b622"),l=r.TypeError,h=u("toPrimitive");t.exports=function(t,e){if(!s(t)||o(t))return t;var n,r=a(t,h);if(r){if(void 0===e&&(e="default"),n=i(r,t,e),!s(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},c20d:function(t,e,n){var r=n("da84"),i=n("d039"),s=n("e330"),o=n("577e"),a=n("58a8").trim,c=n("5899"),u=r.parseInt,l=r.Symbol,h=l&&l.iterator,f=/^[+-]?0x/i,d=s(f.exec),p=8!==u(c+"08")||22!==u(c+"0x16")||h&&!i((function(){u(Object(h))}));t.exports=p?function(t,e){var n=a(o(t));return u(n,e>>>0||(d(f,n)?16:10))}:u},c430:function(t,e){t.exports=!1},c65b:function(t,e){var n=Function.prototype.call;t.exports=n.bind?n.bind(n):function(){return n.apply(n,arguments)}},c6b6:function(t,e,n){var r=n("e330"),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},c6cd:function(t,e,n){var r=n("da84"),i=n("ce4e"),s="__core-js_shared__",o=r[s]||i(s,{});t.exports=o},c740:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").findIndex,s=n("44d2"),o="findIndex",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),r({target:"Array",proto:!0,forced:a},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),s(o)},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("e330"),i=n("1a2d"),s=n("fc6a"),o=n("4d64").indexOf,a=n("d012"),c=r([].push);t.exports=function(t,e){var n,r=s(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},cc12:function(t,e,n){var r=n("da84"),i=n("861d"),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},cca6:function(t,e,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(t,e,n){var r=n("825a"),i=n("861d"),s=n("f069");t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=s.f(t),o=n.resolve;return o(e),n.promise}},ce4e:function(t,e,n){var r=n("da84"),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("da84"),i=n("1626"),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,s=i&&!r.call({1:2},1);e.f=s?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},d2bb:function(t,e,n){var r=n("e330"),i=n("825a"),s=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),e?t(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(t,e,n){var r=n("00ee"),i=n("6eeb"),s=n("b041");r||i(Object.prototype,"toString",s,{unsafe:!0})},d44e:function(t,e,n){var r=n("9bf2").f,i=n("1a2d"),s=n("b622"),o=s("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},d4c3:function(t,e,n){var r=n("342f"),i=n("da84");t.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d998:function(t,e,n){var r=n("342f");t.exports=/MSIE|Trident/.test(r)},d9b5:function(t,e,n){var r=n("da84"),i=n("d066"),s=n("1626"),o=n("3a9b"),a=n("fdbf"),c=r.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=i("Symbol");return s(e)&&o(e.prototype,c(t))}},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dc4a:function(t,e,n){var r=n("59ed");t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},ddb0:function(t,e,n){var r=n("da84"),i=n("fdbc"),s=n("785a"),o=n("e260"),a=n("9112"),c=n("b622"),u=c("iterator"),l=c("toStringTag"),h=o.values,f=function(t,e){if(t){if(t[u]!==h)try{a(t,u,h)}catch(r){t[u]=h}if(t[l]||a(t,l,e),i[e])for(var n in o)if(t[n]!==o[n])try{a(t,n,o[n])}catch(r){t[n]=o[n]}}};for(var d in i)f(r[d]&&r[d].prototype,d);f(s,"DOMTokenList")},df75:function(t,e,n){var r=n("ca84"),i=n("7839");t.exports=Object.keys||function(t){return r(t,i)}},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var o=s>=0?arguments[s]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,r="/"===o.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===s(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),s=r(n.split("/")),o=Math.min(i.length,s.length),a=o,c=0;c<o;c++)if(i[c]!==s[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(s.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,s=t.length-1;s>=1;--s)if(e=t.charCodeAt(s),47===e){if(!i){r=s;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,s=0,o=t.length-1;o>=0;--o){var a=t.charCodeAt(o);if(47!==a)-1===r&&(i=!1,r=o+1),46===a?-1===e?e=o:1!==s&&(s=1):-1!==e&&(s=-1);else if(!i){n=o+1;break}}return-1===e||-1===r||0===s||1===s&&e===r-1&&e===n+1?"":t.slice(e,r)};var s="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e163:function(t,e,n){var r=n("da84"),i=n("1a2d"),s=n("1626"),o=n("7b0b"),a=n("f772"),c=n("e177"),u=a("IE_PROTO"),l=r.Object,h=l.prototype;t.exports=c?l.getPrototypeOf:function(t){var e=o(t);if(i(e,u))return e[u];var n=e.constructor;return s(n)&&e instanceof n?n.prototype:e instanceof l?h:null}},e177:function(t,e,n){var r=n("d039");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},e25e:function(t,e,n){var r=n("23e7"),i=n("c20d");r({global:!0,forced:parseInt!=i},{parseInt:i})},e260:function(t,e,n){"use strict";var r=n("fc6a"),i=n("44d2"),s=n("3f8c"),o=n("69f3"),a=n("7dd0"),c="Array Iterator",u=o.set,l=o.getterFor(c);t.exports=a(Array,"Array",(function(t,e){u(this,{type:c,target:r(t),index:0,kind:e})}),(function(){var t=l(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),s.Arguments=s.Array,i("keys"),i("values"),i("entries")},e2cc:function(t,e,n){var r=n("6eeb");t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},e330:function(t,e){var n=Function.prototype,r=n.bind,i=n.call,s=r&&r.bind(i);t.exports=r?function(t){return t&&s(i,t)}:function(t){return t&&function(){return i.apply(t,arguments)}}},e667:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(e){return{error:!0,value:e}}}},e691:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}function l(t){r.forEach(e=>{e.setLogLevel(t)})}function h(t,e){for(const n of r){let r=null;e&&e.level&&(r=s[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:o,args:s,type:e.name})}}}},e6cf:function(t,e,n){"use strict";var r,i,s,o,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("c65b"),f=n("fea9"),d=n("6eeb"),p=n("e2cc"),m=n("d2bb"),g=n("d44e"),v=n("2626"),y=n("59ed"),b=n("1626"),_=n("861d"),w=n("19aa"),E=n("8925"),O=n("2266"),T=n("1c7e"),I=n("4840"),S=n("2cf4").set,A=n("b575"),k=n("cdf9"),N=n("44de"),C=n("f069"),j=n("e667"),L=n("69f3"),R=n("94ca"),D=n("b622"),P=n("6069"),x=n("605d"),M=n("2d00"),F=D("species"),U="Promise",V=L.get,B=L.set,$=L.getterFor(U),G=f&&f.prototype,q=f,H=G,W=u.TypeError,z=u.document,K=u.process,X=C.f,Y=X,Q=!!(z&&z.createEvent&&u.dispatchEvent),J=b(u.PromiseRejectionEvent),Z="unhandledrejection",tt="rejectionhandled",et=0,nt=1,rt=2,it=1,st=2,ot=!1,at=R(U,(function(){var t=E(q),e=t!==String(q);if(!e&&66===M)return!0;if(c&&!H["finally"])return!0;if(M>=51&&/native code/.test(t))return!1;var n=new q((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))},i=n.constructor={};return i[F]=r,ot=n.then((function(){}))instanceof r,!ot||!e&&P&&!J})),ct=at||!T((function(t){q.all(t)["catch"]((function(){}))})),ut=function(t){var e;return!(!_(t)||!b(e=t.then))&&e},lt=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;A((function(){var r=t.value,i=t.state==nt,s=0;while(n.length>s){var o,a,c,u=n[s++],l=i?u.ok:u.fail,f=u.resolve,d=u.reject,p=u.domain;try{l?(i||(t.rejection===st&&pt(t),t.rejection=it),!0===l?o=r:(p&&p.enter(),o=l(r),p&&(p.exit(),c=!0)),o===u.promise?d(W("Promise-chain cycle")):(a=ut(o))?h(a,o,f,d):f(o)):d(r)}catch(m){p&&!c&&p.exit(),d(m)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&ft(t)}))}},ht=function(t,e,n){var r,i;Q?(r=z.createEvent("Event"),r.promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},!J&&(i=u["on"+t])?i(r):t===Z&&N("Unhandled promise rejection",n)},ft=function(t){h(S,u,(function(){var e,n=t.facade,r=t.value,i=dt(t);if(i&&(e=j((function(){x?K.emit("unhandledRejection",r,n):ht(Z,n,r)})),t.rejection=x||dt(t)?st:it,e.error))throw e.value}))},dt=function(t){return t.rejection!==it&&!t.parent},pt=function(t){h(S,u,(function(){var e=t.facade;x?K.emit("rejectionHandled",e):ht(tt,e,t.value)}))},mt=function(t,e,n){return function(r){t(e,r,n)}},gt=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=rt,lt(t,!0))},vt=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw W("Promise can't be resolved itself");var r=ut(e);r?A((function(){var n={done:!1};try{h(r,e,mt(vt,n,t),mt(gt,n,t))}catch(i){gt(n,i,t)}})):(t.value=e,t.state=nt,lt(t,!1))}catch(i){gt({done:!1},i,t)}}};if(at&&(q=function(t){w(this,H),y(t),h(r,this);var e=V(this);try{t(mt(vt,e),mt(gt,e))}catch(n){gt(e,n)}},H=q.prototype,r=function(t){B(this,{type:U,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:et,value:void 0})},r.prototype=p(H,{then:function(t,e){var n=$(this),r=n.reactions,i=X(I(this,q));return i.ok=!b(t)||t,i.fail=b(e)&&e,i.domain=x?K.domain:void 0,n.parent=!0,r[r.length]=i,n.state!=et&&lt(n,!1),i.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r,e=V(t);this.promise=t,this.resolve=mt(vt,e),this.reject=mt(gt,e)},C.f=X=function(t){return t===q||t===s?new i(t):Y(t)},!c&&b(f)&&G!==Object.prototype)){o=G.then,ot||(d(G,"then",(function(t,e){var n=this;return new q((function(t,e){h(o,n,t,e)})).then(t,e)}),{unsafe:!0}),d(G,"catch",H["catch"],{unsafe:!0}));try{delete G.constructor}catch(yt){}m&&m(G,H)}a({global:!0,wrap:!0,forced:at},{Promise:q}),g(q,U,!1,!0),v(U),s=l(U),a({target:U,stat:!0,forced:at},{reject:function(t){var e=X(this);return h(e.reject,void 0,t),e.promise}}),a({target:U,stat:!0,forced:c||at},{resolve:function(t){return k(c&&this===s?q:this,t)}}),a({target:U,stat:!0,forced:ct},{all:function(t){var e=this,n=X(e),r=n.resolve,i=n.reject,s=j((function(){var n=y(e.resolve),s=[],o=0,a=1;O(t,(function(t){var c=o++,u=!1;a++,h(n,e,t).then((function(t){u||(u=!0,s[c]=t,--a||r(s))}),i)})),--a||r(s)}));return s.error&&i(s.value),n.promise},race:function(t){var e=this,n=X(e),r=n.reject,i=j((function(){var i=y(e.resolve);O(t,(function(t){h(i,e,t).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e71f:function(t,e,n){"use strict";var r=n("0829");n.d(e,"a",(function(){return r["a"]})),n.d(e,"b",(function(){return r["b"]})),n.d(e,"c",(function(){return r["c"]})),n.d(e,"d",(function(){return r["d"]})),n.d(e,"e",(function(){return r["e"]})),n.d(e,"f",(function(){return r["f"]})),n.d(e,"g",(function(){return r["g"]})),n.d(e,"h",(function(){return r["h"]})),n.d(e,"i",(function(){return r["i"]})),n.d(e,"j",(function(){return r["j"]})),n.d(e,"k",(function(){return r["k"]}))},e893:function(t,e,n){var r=n("1a2d"),i=n("56ef"),s=n("06cf"),o=n("9bf2");t.exports=function(t,e){for(var n=i(e),a=o.f,c=s.f,u=0;u<n.length;u++){var l=n[u];r(t,l)||a(t,l,c(e,l))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},e95a:function(t,e,n){var r=n("b622"),i=n("3f8c"),s=r("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[s]===t)}},ea7b:function(t,e,n){"use strict";n.d(e,"a",(function(){return ir})),n.d(e,"b",(function(){return ee}));var r=n("1fd5"),i=n("589b");function s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;var o=n("e691"),a=n("22e5");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r["b"]("auth","Firebase",c()),h=new o["b"]("@firebase/auth");function f(t,...e){h.logLevel<=o["a"].ERROR&&h.error(`Auth (${i["a"]}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(t,...e){throw g(t,...e)}function p(t,...e){return g(t,...e)}function m(t,e,n){const i=Object.assign(Object.assign({},u()),{[e]:n}),s=new r["b"]("auth","Firebase",i);return s.create(e,{appName:t.name})}function g(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function v(t,e,...n){if(!t)throw g(e,...n)}function y(t){const e="INTERNAL ASSERTION FAILED: "+t;throw f(e),new Error(e)}function b(t,e){t||y(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=new Map;function w(t){b(t instanceof Function,"Expected a class definition");let e=_.get(t);return e?(b(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t,e){const n=Object(i["b"])(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if(Object(r["g"])(i,null!==e&&void 0!==e?e:{}))return t;d(t,"already-initialized")}const s=n.initialize({options:e});return s}function O(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function I(){return"http:"===S()||"https:"===S()}function S(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||Object(r["k"])()||"connection"in navigator))||navigator.onLine}function k(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t,e){this.shortDelay=t,this.longDelay=e,b(e>t,"Short delay should be less than long delay!"),this.isMobile=Object(r["p"])()||Object(r["q"])()}get(){return A()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t,e){b(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},R=new N(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function P(t,e,n,i,s={}){return x(t,s,()=>{let s={},o={};i&&("GET"===e?o=i:s={body:JSON.stringify(i)});const a=Object(r["t"])(Object.assign({key:t.config.apiKey},o)).slice(1),c=new(j.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),j.fetch()(F(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function x(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},L),e);try{const e=new U(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw V(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw V(t,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(t,a,o);d(t,a)}}catch(s){if(s instanceof r["c"])throw s;d(t,"network-request-failed")}}async function M(t,e,n,r,i={}){const s=await P(t,e,n,r,i);return"mfaPendingCredential"in s&&d(t,"multi-factor-auth-required",{_serverResponse:s}),s}function F(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?C(t.config,i):`${t.config.apiScheme}://${i}`}class U{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(p(this.auth,"timeout")),R.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(t,e){return P(t,"POST","/v1/accounts:delete",e)}async function $(t,e){return P(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q(t,e=!1){const n=Object(r["i"])(t),i=await n.getIdToken(e),s=W(i);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:G(H(s.auth_time)),issuedAtTime:G(H(s.iat)),expirationTime:G(H(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function H(t){return 1e3*Number(t)}function W(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const t=Object(r["d"])(n);return t?JSON.parse(t):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",s),null}}function z(t){const e=W(t);return v(e,"internal-error"),v("undefined"!==typeof e.exp,"internal-error"),v("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r["c"]&&X(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function X({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=G(this.lastLoginAt),this.creationTime=G(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(t){var e;const n=t.auth,r=await t.getIdToken(),i=await K(t,$(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?et(s.providerUserInfo):[],a=tt(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Q(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Z(t){const e=Object(r["i"])(t);await J(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tt(t,e){const n=t.filter(t=>!e.some(e=>e.providerId===t.providerId));return[...n,...e]}function et(t){return t.map(t=>{var{providerId:e}=t,n=s(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(t,e){const n=await x(t,{},()=>{const n=Object(r["t"])({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=F(t,i,"/v1/token","key="+s);return j.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){v(t.idToken,"internal-error"),v("undefined"!==typeof t.idToken,"internal-error"),v("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):z(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return v(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await nt(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new rt;return n&&(v("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new rt,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t,e){v("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class st{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=s(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new Q(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await K(this,this.stsTokenManager.getToken(this.auth,t));return v(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return q(this,t)}reload(){return Z(this)}_assign(t){this!==t&&(v(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new st(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await J(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await K(this,B(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,f=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,d=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:_,isAnonymous:w,providerData:E,stsTokenManager:O}=e;v(b&&O,t,"internal-error");const T=rt.fromJSON(this.name,O);v("string"===typeof b,t,"internal-error"),it(l,t.name),it(h,t.name),v("boolean"===typeof _,t,"internal-error"),v("boolean"===typeof w,t,"internal-error"),it(f,t.name),it(d,t.name),it(p,t.name),it(m,t.name),it(g,t.name),it(y,t.name);const I=new st({uid:b,auth:t,email:h,emailVerified:_,displayName:l,isAnonymous:w,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return E&&Array.isArray(E)&&(I.providerData=E.map(t=>Object.assign({},t))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(t,e,n=!1){const r=new rt;r.updateFromServerResponse(e);const i=new st({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await J(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ot.type="NONE";const at=ot;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e,n){return`firebase:${t}:${e}:${n}`}class ut{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ct(this.userKey,r.apiKey,i),this.fullPersistenceKey=ct("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?st._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ut(w(at),t,n);const r=(await Promise.all(e.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let i=r[0]||w(at);const s=ct(n,t.config.apiKey,t.name);let o=null;for(const u of e)try{const e=await u._get(s);if(e){const n=st._fromJSON(t,e);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter(t=>t._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map(async t=>{if(t!==i)try{await t._remove(s)}catch(c){}})),new ut(i,t,n)):new ut(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ht(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gt(e))return"Blackberry";if(vt(e))return"Webos";if(ft(e))return"Safari";if((e.includes("chrome/")||dt(e))&&!e.includes("edge/"))return"Chrome";if(mt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ht(t=Object(r["j"])()){return/firefox\//i.test(t)}function ft(t=Object(r["j"])()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dt(t=Object(r["j"])()){return/crios\//i.test(t)}function pt(t=Object(r["j"])()){return/iemobile/i.test(t)}function mt(t=Object(r["j"])()){return/android/i.test(t)}function gt(t=Object(r["j"])()){return/blackberry/i.test(t)}function vt(t=Object(r["j"])()){return/webos/i.test(t)}function yt(t=Object(r["j"])()){return/iphone|ipad|ipod/i.test(t)}function bt(t=Object(r["j"])()){var e;return yt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function _t(){return Object(r["n"])()&&10===document.documentMode}function wt(t=Object(r["j"])()){return yt(t)||mt(t)||vt(t)||gt(t)||/windows phone/i.test(t)||pt(t)}function Et(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t,e=[]){let n;switch(t){case"Browser":n=lt(Object(r["j"])());break;case"Worker":n=`${lt(Object(r["j"])())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["a"]}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new St(this),this.idTokenSubscription=new St(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=w(e)),this._initializationPromise=this.queue(async()=>{var n,r;this._deleted||(this.persistenceManager=await ut.create(this,t),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(t);r&&r!==i||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await J(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=k()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Object(r["i"])(t):null;return e&&v(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&v(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(w(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r["b"]("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&w(t)||this._popupRedirectResolver;v(e,this,"argument-error"),this.redirectPersistenceManager=await ut.create(this,[w(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then(()=>i(this.currentUser)),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ot(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function It(t){return Object(r["i"])(t)}class St{constructor(t){this.auth=t,this.observer=null,this.addObserver=Object(r["f"])(t=>this.observer=t)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class At{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return y("not implemented")}_getIdTokenResponse(t){return y("not implemented")}_linkToIdToken(t,e){return y("not implemented")}_getReauthenticationResolver(t){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(t,e){return P(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Nt(t,e){return M(t,"POST","/v1/accounts:signInWithPassword",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ct(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",D(t,e))}async function jt(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends At{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Lt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Lt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return Nt(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ct(t,{email:this._email,oobCode:this._password});default:d(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return kt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jt(t,{idToken:e,email:this._email,oobCode:this._password});default:d(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(t,e){return M(t,"POST","/v1/accounts:signInWithIdp",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="http://localhost";class Pt extends At{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Pt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):d("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=s(e,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Pt(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Rt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Rt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Rt(t,e)}buildRequest(){const t={requestUri:Dt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=Object(r["t"])(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(t,e){return P(t,"POST","/v1/accounts:sendVerificationCode",D(t,e))}async function Mt(t,e){return M(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,e))}async function Ft(t,e){const n=await M(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,e));if(n.temporaryProof)throw V(t,"account-exists-with-different-credential",n);return n}const Ut={["USER_NOT_FOUND"]:"user-not-found"};async function Vt(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return M(t,"POST","/v1/accounts:signInWithPhoneNumber",D(t,n),Ut)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends At{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new Bt({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Bt({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Mt(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Ft(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Vt(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new Bt({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Gt(t){const e=Object(r["u"])(Object(r["h"])(t))["link"],n=e?Object(r["u"])(Object(r["h"])(e))["deep_link_id"]:null,i=Object(r["u"])(Object(r["h"])(t))["deep_link_id"],s=i?Object(r["u"])(Object(r["h"])(i))["link"]:null;return s||i||n||e||t}class qt{constructor(t){var e,n,i,s,o,a;const c=Object(r["u"])(Object(r["h"])(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=$t(null!==(i=c["mode"])&&void 0!==i?i:null);v(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=Gt(t);try{return new qt(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ht{constructor(){this.providerId=Ht.PROVIDER_ID}static credential(t,e){return Lt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=qt.parseLink(e);return v(n,"argument-error"),Lt._fromEmailAndCode(t,n.code,n.tenantId)}}Ht.PROVIDER_ID="password",Ht.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ht.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Wt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kt extends zt{constructor(){super("facebook.com")}static credential(t){return Pt._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Kt.credentialFromTaggedObject(t)}static credentialFromError(t){return Kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Kt.credential(t.oauthAccessToken)}catch(e){return null}}}Kt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Kt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt extends zt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Pt._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Xt.credential(e,n)}catch(r){return null}}}Xt.GOOGLE_SIGN_IN_METHOD="google.com",Xt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt extends zt{constructor(){super("github.com")}static credential(t){return Pt._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Yt.credentialFromTaggedObject(t)}static credentialFromError(t){return Yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Yt.credential(t.oauthAccessToken)}catch(e){return null}}}Yt.GITHUB_SIGN_IN_METHOD="github.com",Yt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt extends zt{constructor(){super("twitter.com")}static credential(t,e){return Pt._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Qt.credentialFromTaggedObject(t)}static credentialFromError(t){return Qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Qt.credential(e,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Jt(t,e){return M(t,"POST","/v1/accounts:signUp",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt.TWITTER_SIGN_IN_METHOD="twitter.com",Qt.PROVIDER_ID="twitter.com";class Zt{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await st._fromIdTokenResponse(t,n,r),s=te(n),o=new Zt({user:i,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=te(n);return new Zt({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function te(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(t){var e;const n=It(t);if(await n._initializationPromise,null===(e=n.currentUser)||void 0===e?void 0:e.isAnonymous)return new Zt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Jt(n,{returnSecureToken:!0}),i=await Zt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne extends r["c"]{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ne.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new ne(t,e,n,r)}}function re(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw ne._fromErrorAndOperation(t,n,e,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(t,e,n=!1){const r=await K(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zt._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function se(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await K(t,re(r,i,e,t),n);v(s.idToken,r,"internal-error");const o=W(s.idToken);v(o,r,"internal-error");const{sub:a}=o;return v(t.uid===a,r,"user-mismatch"),Zt._forOperation(t,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&d(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(t,e,n=!1){const r="signIn",i=await re(t,r,e),s=await Zt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ae(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:start",D(t,e))}function ce(t,e){return P(t,"POST","/v2/accounts/mfaEnrollment:finalize",D(t,e))}new WeakMap;const ue="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(ue,"1"),this.storage.removeItem(ue),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(){const t=Object(r["j"])();return ft(t)||yt(t)}const fe=1e3,de=10;class pe extends le{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=he()&&Et(),this.fallbackToPolling=wt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,n)=>{this.notifyListeners(t,n)});const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);_t()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,de):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},fe)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}pe.type="LOCAL";const me=pe;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge extends le{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}ge.type="SESSION";const ve=ge;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t){return Promise.all(t.map(async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const n=new be(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async t=>t(e.origin,i)),a=await ye(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _e(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */be.receivers=[];class we{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const c=_e("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return window}function Oe(t){Ee().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return"undefined"!==typeof Ee()["WorkerGlobalScope"]&&"function"===typeof Ee()["importScripts"]}async function Ie(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Se(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Ae(){return Te()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="firebaseLocalStorageDb",Ne=1,Ce="firebaseLocalStorage",je="fbase_key";class Le{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Re(t,e){return t.transaction([Ce],e?"readwrite":"readonly").objectStore(Ce)}function De(){const t=indexedDB.deleteDatabase(ke);return new Le(t).toPromise()}function Pe(){const t=indexedDB.open(ke,Ne);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore(Ce,{keyPath:je})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Ce)?e(n):(n.close(),await De(),e(await Pe()))})})}async function xe(t,e,n){const r=Re(t,!0).put({[je]:e,value:n});return new Le(r).toPromise()}async function Me(t,e){const n=Re(t,!1).get(e),r=await new Le(n).toPromise();return void 0===r?null:r.value}function Fe(t,e){const n=Re(t,!0).delete(e);return new Le(n).toPromise()}const Ue=800,Ve=3;class Be{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Pe()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>Ve)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Te()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=be._getInstance(Ae()),this.receiver._subscribe("keyChanged",async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}}),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await Ie(),!this.activeServiceWorker)return;this.sender=new we(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Se()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Pe();return await xe(t,ue,"1"),await Fe(t,ue),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xe(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>Me(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Fe(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=Re(t,!1).getAll();return new Le(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ue)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Be.type="LOCAL";const $e=Be;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:start",D(t,e))}function qe(t,e){return P(t,"POST","/v2/accounts/mfaSignIn:finalize",D(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function He(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function We(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=p("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",He().appendChild(r)})}function ze(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ze("rcb"),new N(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ke="recaptcha";async function Xe(t,e,n){var r;const i=await n.verify();try{let s;if(v("string"===typeof i,t,"argument-error"),v(n.type===Ke,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){v("enroll"===e.type,t,"internal-error");const n=await ae(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===e.type,t,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;v(n,t,"missing-multi-factor-info");const o=await Ge(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await xt(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{constructor(t){this.providerId=Ye.PROVIDER_ID,this.auth=It(t)}verifyPhoneNumber(t,e){return Xe(this.auth,t,Object(r["i"])(e))}static credential(t,e){return Bt._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Ye.credentialFromTaggedObject(e)}static credentialFromError(t){return Ye.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Bt._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qe(t,e){return e?w(e):(v(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye.PROVIDER_ID="phone",Ye.PHONE_SIGN_IN_METHOD="phone";class Je extends At{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Rt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Rt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Rt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Ze(t){return oe(t.auth,new Je(t),t.bypassAuthState)}function tn(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),se(n,new Je(t),t.bypassAuthState)}async function en(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),ie(n,new Je(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Ze;case"linkViaPopup":case"linkViaRedirect":return en;case"reauthViaPopup":case"reauthViaRedirect":return tn;default:d(this.auth,"internal-error")}}resolve(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new N(2e3,1e4);class sn extends nn{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,sn.currentPopupAction&&sn.currentPopupAction.cancel(),sn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return v(t,this.auth,"internal-error"),t}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const t=_e();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(t,rn.get())};t()}}sn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const on="pendingRedirect",an=new Map;class cn extends nn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=an.get(this.auth._key());if(!t){try{const e=await un(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}an.set(this.auth._key(),t)}return this.bypassAuthState||an.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function un(t,e){const n=hn(e),r=ln(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function ln(t){return w(t._redirectPersistence)}function hn(t){return ct(on,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(t,e,n=!1){const r=It(t),i=Qe(r,e),s=new cn(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dn=6e5;class pn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!vn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!gn(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(p(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=dn&&this.cachedEventUids.clear(),this.cachedEventUids.has(mn(t))}saveEventToCache(t){this.cachedEventUids.add(mn(t)),this.lastProcessedEventTime=Date.now()}}function mn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(t=>t).join("-")}function gn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function vn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yn(t,e={}){return P(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_n=/^https?/;async function wn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await yn(t);for(const r of e)try{if(En(r))return}catch(n){}d(t,"unauthorized-domain")}function En(t){const e=T(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!_n.test(n))return!1;if(bn.test(t))return r===t;const i=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=new N(3e4,6e4);function Tn(){const t=Ee().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function In(t){return new Promise((e,n)=>{var r,i,s;function o(){Tn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tn(),n(p(t,"network-request-failed"))},timeout:On.get()})}if(null===(i=null===(r=Ee().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Ee().gapi)||void 0===s?void 0:s.load)){const e=ze("iframefcb");return Ee()[e]=()=>{gapi.load?o():n(p(t,"network-request-failed"))},We("https://apis.google.com/js/api.js?onload="+e)}o()}}).catch(t=>{throw Sn=null,t})}let Sn=null;function An(t){return Sn=Sn||In(t),Sn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new N(5e3,15e3),Nn="__/auth/iframe",Cn="emulator/auth/iframe",jn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ln=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rn(t){const e=t.config;v(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?C(e,Cn):`https://${t.config.authDomain}/${Nn}`,s={apiKey:e.apiKey,appName:t.name,v:i["a"]},o=Ln.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(r["t"])(s).slice(1)}`}async function Dn(t){const e=await An(t),n=Ee().gapi;return v(n,t,"internal-error"),e.open({where:document.body,url:Rn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jn,dontclear:!0},e=>new Promise(async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=p(t,"network-request-failed"),s=Ee().setTimeout(()=>{r(i)},kn.get());function o(){Ee().clearTimeout(s),n(e)}e.ping(o).then(o,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xn=500,Mn=600,Fn="_blank",Un="http://localhost";class Vn{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Bn(t,e,n,i=xn,s=Mn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Pn),{width:i.toString(),height:s.toString(),top:o,left:a}),l=Object(r["j"])().toLowerCase();n&&(c=dt(l)?Fn:n),ht(l)&&(e=e||Un,u.scrollbars="yes");const h=Object.entries(u).reduce((t,[e,n])=>`${t}${e}=${n},`,"");if(bt(l)&&"_self"!==c)return $n(e||"",c),new Vn(null);const f=window.open(e||"",c,h);v(f,t,"popup-blocked");try{f.focus()}catch(d){}return new Vn(f)}function $n(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="__/auth/handler",qn="emulator/auth/handler";function Hn(t,e,n,s,o,a){v(t.config.authDomain,t,"auth-domain-config-required"),v(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:i["a"],eventId:o};if(e instanceof Wt){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",Object(r["m"])(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof zt){const t=e.getScopes().filter(t=>""!==t);t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Wn(t)}?${Object(r["t"])(u).slice(1)}`}function Wn({config:t}){return t.emulator?C(t,qn):`https://${t.authDomain}/${Gn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="webStorageSupport";class Kn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ve,this._completeRedirectFn=fn}async _openPopup(t,e,n,r){var i;b(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=Hn(t,e,n,T(),r);return Bn(t,s,_e())}async _openRedirect(t,e,n,r){return await this._originValidation(t),Oe(Hn(t,e,n,T(),r)),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n}async initAndGetManager(t){const e=await Dn(t),n=new pn(t);return e.register("authEvent",e=>{v(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(zn,{type:zn},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[zn];void 0!==i&&e(!!i),d(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=wn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return wt()||ft()||yt()}}const Xn=Kn;class Yn{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return y("unexpected MultiFactorSessionType")}}}class Qn extends Yn{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new Qn(t)}_finalizeEnroll(t,e,n){return ce(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return qe(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Jn{constructor(){}static assertion(t){return Qn._fromCredential(t)}}Jn.FACTOR_ID="phone";var Zn="@firebase/auth",tr="0.19.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class er{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function rr(t){Object(i["c"])(new a["a"]("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(e=>{v(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),v(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ot(t)},o=new Tt(e,r);return O(o,n),o})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()})),Object(i["c"])(new a["a"]("auth-internal",t=>{const e=It(t.getProvider("auth").getImmediate());return(t=>new er(t))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["g"])(Zn,tr,nr(t)),Object(i["g"])(Zn,tr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t=Object(i["e"])()){const e=Object(i["b"])(t,"auth");return e.isInitialized()?e.getImmediate():E(t,{popupRedirectResolver:Xn,persistence:[$e,me,ve]})}rr("Browser")},f069:function(t,e,n){"use strict";var r=n("59ed"),i=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new i(t)}},f30a:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("b774");class i{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const r in t.settings){const e=t.settings[r];n[r]=e.defaultValue}const i="__vue-devtools-plugin-settings__"+t.id;let s={...n};try{const t=localStorage.getItem(i),e=JSON.parse(t);Object.assign(s,e)}catch(o){}this.fallbacks={getSettings(){return s},setSettings(t){try{localStorage.setItem(i,JSON.stringify(t))}catch(o){}s=t}},e.on(r["a"],(t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)}),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise(n=>{this.targetQueue.push({method:e,args:t,resolve:n})})})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}},f36a:function(t,e,n){var r=n("e330");t.exports=r([].slice)},f5df:function(t,e,n){var r=n("da84"),i=n("00ee"),s=n("1626"),o=n("c6b6"),a=n("b622"),c=a("toStringTag"),u=r.Object,l="Arguments"==o(function(){return arguments}()),h=function(t,e){try{return t[e]}catch(n){}};t.exports=i?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=h(e=u(t),c))?n:l?o(e):"Object"==(r=o(e))&&s(e.callee)?"Arguments":r}},f772:function(t,e,n){var r=n("5692"),i=n("90e3"),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},f83d:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return v})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return g})),n.d(e,"f",(function(){return b})),n.d(e,"g",(function(){return _})),n.d(e,"h",(function(){return O})),n.d(e,"i",(function(){return l})),n.d(e,"j",(function(){return f})),n.d(e,"k",(function(){return w})),n.d(e,"l",(function(){return u})),n.d(e,"m",(function(){return T})),n.d(e,"n",(function(){return A})),n.d(e,"o",(function(){return h})),n.d(e,"p",(function(){return E})),n.d(e,"q",(function(){return o})),n.d(e,"r",(function(){return k})),n.d(e,"s",(function(){return d}));const r=/\{([0-9a-zA-Z]+)\}/g;function i(t,...e){return 1===e.length&&T(e[0])&&(e=e[0]),e&&e.hasOwnProperty||(e={}),t.replace(r,(t,n)=>e.hasOwnProperty(n)?e[n]:"")}const s="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=t=>s?Symbol(t):t,a=(t,e,n)=>c({l:t,k:e,s:n}),c=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),u=t=>"number"===typeof t&&isFinite(t),l=t=>"[object Date]"===S(t),h=t=>"[object RegExp]"===S(t),f=t=>A(t)&&0===Object.keys(t).length;function d(t,e){"undefined"!==typeof console&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const p=Object.assign;let m;const g=()=>m||(m="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof t?t:{});function v(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const y=Object.prototype.hasOwnProperty;function b(t,e){return y.call(t,e)}const _=Array.isArray,w=t=>"function"===typeof t,E=t=>"string"===typeof t,O=t=>"boolean"===typeof t,T=t=>null!==t&&"object"===typeof t,I=Object.prototype.toString,S=t=>I.call(t),A=t=>"[object Object]"===S(t),k=t=>null==t?"":_(t)||A(t)&&t.toString===I?JSON.stringify(t,null,2):String(t)}).call(this,n("c8ba"))},fc6a:function(t,e,n){var r=n("44ad"),i=n("1d80");t.exports=function(t){return r(i(t))}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(t,e,n){var r=n("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(t,e,n){var r=n("da84");t.exports=r.Promise}}]);
//# sourceMappingURL=chunk-vendors.a975bbb9.js.map