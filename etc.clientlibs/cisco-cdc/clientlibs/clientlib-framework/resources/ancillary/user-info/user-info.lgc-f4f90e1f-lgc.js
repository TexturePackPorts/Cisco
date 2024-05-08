"use strict";
(self.webpackChunkcdcreimagine = self.webpackChunkcdcreimagine || []).push([["ancillary/user-info/user-info"], {
    5956: (A,n)=>{
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.BLANK_URL = n.relativeFirstCharacters = n.urlSchemeRegex = n.ctrlCharactersRegex = n.htmlCtrlEntityRegex = n.htmlEntitiesRegex = n.invalidProtocolRegex = void 0,
        n.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im,
        n.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g,
        n.htmlCtrlEntityRegex = /&(newline|tab);/gi,
        n.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,
        n.urlSchemeRegex = /^.+(:|&colon;)/gim,
        n.relativeFirstCharacters = [".", "/"],
        n.BLANK_URL = "about:blank"
    }
    ,
    2605: (A,n,f)=>{
        var h;
        h = {
            value: !0
        },
        n.J = void 0;
        var o = f(5956);
        function g(l) {
            return o.relativeFirstCharacters.indexOf(l[0]) > -1
        }
        function w(l) {
            var m = l.replace(o.ctrlCharactersRegex, "");
            return m.replace(o.htmlEntitiesRegex, function(d, u) {
                return String.fromCharCode(u)
            })
        }
        function y(l) {
            if (!l)
                return o.BLANK_URL;
            var m, d = l;
            do
                d = w(d).replace(o.htmlCtrlEntityRegex, "").replace(o.ctrlCharactersRegex, "").trim(),
                m = d.match(o.ctrlCharactersRegex) || d.match(o.htmlEntitiesRegex) || d.match(o.htmlCtrlEntityRegex);
            while (m && m.length > 0);
            var u = d;
            if (!u)
                return o.BLANK_URL;
            if (g(u))
                return u;
            var C = u.match(o.urlSchemeRegex);
            if (!C)
                return u;
            var O = C[0];
            return o.invalidProtocolRegex.test(O) ? o.BLANK_URL : u
        }
        n.J = y
    }
    ,
    598: (A,n,f)=>{
        f.d(n, {
            o: ()=>h
        });
        class h {
            static millisecond = 1e3;
            static seconds = 60;
            static minutes = 60;
            static expirationLengthInHours = 1;
            static length = h.expirationLengthInHours * h.minutes * h.seconds * h.millisecond;
            static STORAGE_KEY = "okta-token-storage"
        }
    }
    ,
    4390: (A,n,f)=>{
        f.r(n),
        f.d(n, {
            userInfo: ()=>I
        });
        var h = f(5929)
          , o = f(598);
        class g {
            static STORAGE_KEY = "cdcUserInfo";
            static PROFILE = {
                profile: {},
                authState: "",
                created: ""
            };
            #e;
            #s = window.sessionStorage;
            get #t() {
                return JSON.parse(this.#s.getItem(g.STORAGE_KEY))
            }
            set #t(e) {
                this.#s.setItem(g.STORAGE_KEY, JSON.stringify(e))
            }
            constructor(e) {
                this.#e = e
            }
            async #i() {
                const e = this.#e && await this.#e.isAuthenticated()
                  , t = "anonymous"
                  , s = "loggedin";
                return e ? s : t
            }
            async createProfile() {
                const e = Object.assign({}, g.PROFILE);
                e.authState = await this.#i(),
                e.created = new Date().getTime(),
                this.#t = e
            }
            async getProfile() {
                let e = null;
                return await this.isStale() || (e = this.#t.profile),
                e
            }
            updateProfile(e, t) {
                if (t && Object.hasOwn(t, e)) {
                    const s = this.#t;
                    s.profile = Object.assign(s.profile, t),
                    this.#t = s
                }
            }
            clear() {
                this.#s.removeItem(g.STORAGE_KEY)
            }
            async isStale() {
                const e = this.#t;
                if (e != null) {
                    const t = await this.#i()
                      , s = e.created < new Date().getTime() - o.o.length
                      , i = e.authState !== t;
                    return s || i
                }
                return !0
            }
        }
        class w {
            static STATE = {
                params: {},
                requests: []
            };
            #e;
            #s = [];
            #t = null;
            constructor(e, t) {
                this.#e = e,
                this.#t = t
            }
            async #i(e) {
                for (const t of e.requests)
                    try {
                        this.#s[t] == null && (this.#s[t] = this.#e[t].invoke(e.params));
                        const s = await this.#s[t];
                        this.#t.updateProfile(t, s)
                    } catch (s) {
                        console.error("[User Info]: Error in service invocation"),
                        console.error(s)
                    }
            }
            async process(e) {
                const t = await this.#t.isStale()
                  , s = Object.assign({}, w.STATE);
                s.params = e;
                let i;
                return t ? (this.#t.clear(),
                s.requests = s.params.serviceNames.filter(r=>this.#e[r] != null)) : (i = await this.#t.getProfile(),
                s.requests = s.params.serviceNames.filter(r=>(i == null || i[r] == null) && this.#e[r] != null)),
                s.requests.length > 0 && (i == null && this.#t.createProfile(),
                await this.#i(s)),
                !0
            }
        }
        var y = f(2605);
        class l {
            static PROTOCOL = "https://";
            config = {};
            credentials = "include";
            constructor(e) {
                this.config = e
            }
            async isAuthenticated() {
                return this.config.authClient != null && await this.config.authClient.isAuthenticated()
            }
            sanitizeUrl(e) {
                return (0,
                y.J)(e)
            }
            hasValidUrl(e) {
                return e != null && e != "about:blank"
            }
            checkResponseKeys(e) {
                let t = e;
                if (t !== !1)
                    for (const s of this.config.attributeKeys)
                        t.hasOwnProperty(s) ? t = t[s] : t = !1;
                return t
            }
            async fetchData(e, t) {
                let s;
                const i = {
                    credentials: this.config.credentials || this.credentials
                }
                  , r = new Headers;
                if (this.config.headers != null) {
                    const c = this.config.headers;
                    for (const a in c)
                        r.append(a, c[a])
                }
                if (await this.isAuthenticated() && this.hasValidUrl((0,
                y.J)(this.config.url.auth)) && r.append("Authorization", `Bearer ${this.config.authClient.getAccessToken()}`),
                Array.from(r.entries()).length > 0 && (i.headers = r),
                t.timeout != null) {
                    const c = new AbortController
                      , a = c.signal;
                    s = window.setTimeout(()=>c.abort(), t.timeout),
                    i.signal = a
                }
                try {
                    const c = new Request(`${l.PROTOCOL}${e}`)
                      , a = await fetch(c, i);
                    return s != null && window.clearTimeout(s),
                    a.ok ? a : !1
                } catch (c) {
                    return s != null && window.clearTimeout(s),
                    console.error(`[User Info]: ${this.config.namespace} API call failed.`),
                    console.error(c),
                    !1
                }
            }
            invoke(e) {
                throw new Error("Method 'invoke()' must be implemented")
            }
        }
        class m extends l {
            async invoke(e) {
                let t;
                const s = this.sanitizeUrl(this.config.url.auth)
                  , i = this.sanitizeUrl(this.config.url.guest);
                if (await this.isAuthenticated() && this.hasValidUrl(s))
                    t = s;
                else if (this.hasValidUrl(i))
                    t = i;
                else
                    return !1;
                const r = await this.fetchData(t, e)
                  , c = r.json != null ? await r.json() : r
                  , a = Array.isArray(this.config.attributeKeys);
                let p;
                if (a && (p = this.checkResponseKeys(c)),
                p) {
                    const R = p.map(({name: P, value: T})=>[P, T]);
                    return {
                        [this.config.namespace]: Object.fromEntries(R)
                    }
                } else if (c)
                    return {
                        [this.config.namespace]: c
                    };
                return !1
            }
        }
        class d extends l {
            async invoke(e, t) {
                const s = await this.fetchData(e, t)
                  , i = s.headers;
                return i instanceof Headers && this.config.attributeKeys.some(r=>i.has(r)) ? i : !1
            }
        }
        var u = f(188);
        class C extends d {
            #e = {
                AE: "en",
                AR: "es",
                AT: "de",
                AU: "en",
                BE: "en",
                BR: "pt",
                CA: "en",
                CH: "de",
                CL: "es",
                CN: "zh",
                CO: "es",
                CR: "es",
                CU: "es",
                CZ: "cs",
                DE: "de",
                DK: "da",
                DO: "es",
                EC: "es",
                EG: "ar",
                ES: "es",
                FI: "fi",
                FR: "fr",
                GB: "en",
                GR: "en",
                GT: "es",
                HK: "en",
                HN: "es",
                HU: "hu",
                ID: "en",
                IL: "en",
                IN: "en",
                IT: "it",
                JP: "ja",
                KR: "ko",
                LU: "fr",
                MX: "es",
                MY: "en",
                NI: "es",
                NL: "nl",
                NO: "no",
                NZ: "en",
                PA: "es",
                PE: "es",
                PH: "en",
                PL: "pl",
                PR: "es",
                PT: "pt",
                PY: "es",
                RO: "ro",
                RU: "ru",
                SA: "en",
                SE: "sv",
                SG: "en",
                SV: "es",
                TH: "th",
                TR: "tr",
                TW: "zh",
                UA: "ru",
                US: "en",
                UY: "es",
                VE: "es",
                VN: "vi",
                ZA: "en"
            };
            credentials = "omit";
            async invoke(e) {
                const t = `${this.sanitizeUrl(this.config.url.guest)}?t=${Math.random()}`
                  , s = await super.invoke(t, e);
                if (s instanceof Headers) {
                    const i = s.get(this.config.attributeKeys[0])
                      , r = "country_code"
                      , c = "lang_code"
                      , a = new Map(u.U.stringToArray(i, ","));
                    if (a instanceof Map && a.has(r)) {
                        const p = a.get(r)
                          , R = this.#e[p]
                          , P = R || "en";
                        return R == null && a.set("lang_unknown", !0),
                        a.set(c, P),
                        {
                            [this.config.namespace]: Object.fromEntries(a)
                        }
                    }
                }
                return !1
            }
        }
        class O extends l {
            #e = !1;
            async invoke(e) {
                const t = this.config.namespace + "Callback";
                return window[t] = s=>{
                    const i = this.checkResponseKeys(s);
                    this.#e = {
                        [this.config.namespace]: i
                    },
                    delete window[t]
                }
                ,
                await import(`${l.PROTOCOL}${this.sanitizeUrl(this.config.url.guest)}${t}`),
                this.#e
            }
        }
        class v {
            static async instantiate(e) {
                const t = u.U.env !== "prod" ? `-${u.U.env}` : ""
                  , s = `ServicesUrls${t}.js`;
                try {
                    const {SERVICES_URLS: i} = await import(`${u.U.DAM_FRAMEWORK_PATH}js/user-info/${s}`);
                    return new v(i,e)
                } catch (i) {
                    console.error("[User Info]: Service URLs retrieval failed."),
                    console.error(i)
                }
            }
            static SERVICE_TYPE_MAP = new Map([["Service", m], ["Locale", C], ["JsonpRequest", O]]);
            #e;
            #s;
            #t = {};
            #i;
            #n;
            constructor(e, t) {
                this.#s = e,
                this.#e = t;
                const s = new Set(["type"]);
                for (const i in this.#s) {
                    const r = this.#s[i]
                      , c = r.type;
                    if (v.SERVICE_TYPE_MAP.has(c) && !this.#t.hasOwnProperty(i)) {
                        const a = {
                            namespace: i,
                            authClient: this.#e
                        }
                          , p = Object.fromEntries(Object.entries(r).filter(R=>!s.has(R[0])));
                        Object.assign(a, p),
                        this.#t[i] = new (v.SERVICE_TYPE_MAP.get(c))(a)
                    }
                }
                this.#i = new g(this.#e),
                this.#n = new w(this.#t,this.#i)
            }
            clearCache() {
                this.#i.clear()
            }
            async getProfile(e) {
                if (!e.hasOwnProperty("serviceNames"))
                    return console.warn("[User Info]: `getProfile` requires `serviceNames` property as part of parameters."),
                    !1;
                await this.#n.process(e);
                const t = await this.#i.getProfile();
                if (t != null) {
                    const s = Object.entries(t).filter(([i])=>e.serviceNames.includes(i));
                    return Object.fromEntries(s)
                }
                return !1
            }
        }
        const S = "userInfo";
        let U = !1;
        const I = async E=>(h.F.getInstance(S) == null && !U && (U = !0,
        h.F.instance = {
            namespace: S,
            instance: v.instantiate(E)
        }),
        h.F.getInstance(S))
    }
}]);
