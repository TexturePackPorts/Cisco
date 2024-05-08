"use strict";
(self.webpackChunkcdcreimagine = self.webpackChunkcdcreimagine || []).push([["ancillary/sso/manager"], {
    2151: (E,u,s)=>{
        s.d(u, {
            d: ()=>f
        });
        var i = s(188)
          , r = s(598);
        class d {
            static SSO_TIMER_COOKIE_NAME = "CDCSSOTimer";
            static TOKEN_PATHS = new Map([["/c/sso/token.html", i.U.WEM_KEY], ["/content/cdc/sso/token.html", i.U.CLOUD_KEY]]);
            get timerCookie() {
                const e = i.U.cookies[this.#t()];
                return e ? JSON.parse(e) : !1
            }
            set timerCookie(e) {
                let c = ""
                  , a = this.timerCookie;
                if (e) {
                    const m = {
                        expiry: null,
                        status: null
                    }
                      , n = "refresh"
                      , t = new Date
                      , l = r.o.minutes * r.o.seconds;
                    if (t.setTime(t.getTime() + r.o.length),
                    a || (a = Object.assign({}, m)),
                    (a.expiry == null || e === n) && (a.expiry = t.toUTCString()),
                    e !== n) {
                        const w = d.TOKEN_PATHS.get(window.location.pathname)
                          , h = new Set(a.status);
                        h.add(w),
                        a.status = [...h]
                    }
                    c = this.#e(JSON.stringify(a), t, l)
                } else if (a != !1) {
                    const m = new Date("Thu, 01 Jan 1970 00:00:00 GMT");
                    c = this.#e("", m, "0")
                }
                document.cookie = c
            }
            get isCookieAboutToExpire() {
                const e = this.timerCookie;
                if (e != !1) {
                    const c = new Date(e.expiry)
                      , a = new Date
                      , m = 5 * r.o.seconds * r.o.millisecond;
                    return c - a <= m
                } else
                    return !1
            }
            #t() {
                const e = i.U.env !== "prod" ? `-${i.U.env}` : "";
                return `${d.SSO_TIMER_COOKIE_NAME}${e}`
            }
            #e(e, c, a) {
                return `${this.#t()}=${e}; domain=.cisco.com; path=/; expires=${c.toUTCString()}; max-age=${a}; secure; samesite=strict`
            }
        }
        class f {
            #t = null;
            cookieManager = new d;
            get client() {
                return this.#t
            }
            set client(e) {
                this.#t = e
            }
        }
    }
    ,
    598: (E,u,s)=>{
        s.d(u, {
            o: ()=>i
        });
        class i {
            static millisecond = 1e3;
            static seconds = 60;
            static minutes = 60;
            static expirationLengthInHours = 1;
            static length = i.expirationLengthInHours * i.minutes * i.seconds * i.millisecond;
            static STORAGE_KEY = "okta-token-storage"
        }
    }
    ,
    4503: (E,u,s)=>{
        s.r(u),
        s.d(u, {
            oktaManager: ()=>a
        });
        var i = s(5929)
          , r = s(188)
          , d = s(2151)
          , f = s(598);
        class g extends d.d {
            static async instantiate() {
                const n = new g;
                return await n.initialize() ? n : !1
            }
            static async killSession(n, t) {
                n.timerCookie = !1;
                try {
                    await t.revokeRefreshToken(),
                    await t.revokeAccessToken(),
                    t.tokenManager.clear()
                } catch (l) {
                    l.xhr && l.xhr.status,
                    console.warn("[SSO]: Error in killing auth session"),
                    console.warn(l)
                }
            }
            async initialize() {
                try {
                    if (this.cookieManager.timerCookie != !1) {
                        if (await this.#s(),
                        this.client == null)
                            return this.cookieManager.timerCookie = !1,
                            !1;
                        if (!await this.client.isAuthenticated())
                            return this.#a()
                    }
                    return this.#t(),
                    !0
                } catch (n) {
                    return console.warn("[SSO]: Error in initializing auth client"),
                    console.warn(n),
                    !1
                }
            }
            async isAuthenticated() {
                return this.client != null && await this.client.isAuthenticated()
            }
            #t() {
                document.readyState !== "loading" ? this.#e() : window.addEventListener("load", this.#e.bind(this))
            }
            async #e() {
                this.cookieManager.isCookieAboutToExpire && await this.isAuthenticated() ? (this.cookieManager.timerCookie = "refresh",
                await this.client.tokenManager.renew("accessToken")) : !this.cookieManager.timerCookie && sessionStorage.hasOwnProperty(f.o.STORAGE_KEY) && sessionStorage.getItem(f.o.STORAGE_KEY) !== "{}" && (await this.#s(),
                g.killSession(this.cookieManager, this.client))
            }
            #i() {
                this.cookieManager.timerCookie = !1,
                this.client = null
            }
            async #a() {
                let n = null;
                const t = window.location.hostname.split(".")[0]
                  , l = r.U.host
                  , w = r.U.env !== "prod" ? `-${r.U.env}` : l === "internal" ? "-in" : "";
                try {
                    const {alternativeHosts: o} = await import(`${r.U.DAM_FRAMEWORK_PATH}js/sso/AlternativeHosts${w}.js`);
                    n = o
                } catch (o) {
                    return console.warn("[SSO]: Error in retrieving config"),
                    console.warn(o),
                    this.#i(),
                    !1
                }
                let h = {};
                if (t.length > 0 && n.some(o=>o.indexOf(t) !== -1)) {
                    let o = new URL(this.client.options.redirectUri)
                      , k = o.host.indexOf(".")
                      , S = o.host.substring(k);
                    o.host = `${t}${S}`,
                    h.redirectUri = o.toString()
                } else
                    h = void 0;
                if (document.body !== null)
                    return await this.#n(h);
                {
                    const o = (k,S)=>{
                        document.body != null ? k(!0) : setTimeout(o.bind(this, k, S), 200)
                    }
                    ;
                    return await new Promise(o),
                    await this.#n(h)
                }
            }
            async #n(n) {
                try {
                    const t = await this.client.token.getWithoutPrompt(n);
                    this.client.tokenManager.setTokens(t.tokens)
                } catch (t) {
                    return console.warn("[SSO]: Error in setting token"),
                    console.warn(t),
                    this.#i(),
                    !1
                }
                return !0
            }
            async #s() {
                const {OktaSetClient: n} = await s.e("ancillary/sso/set-client").then(s.bind(s, 6124))
                  , t = await n.instantiate();
                await t.initialize(),
                this.client = t.client
            }
        }
        const e = "sso";
        let c = !1;
        const a = (async()=>(i.F.getInstance(e) == null && !c && (c = !0,
        i.F.instance = {
            namespace: e,
            instance: g.instantiate()
        }),
        i.F.getInstance(e)))()
    }
}]);
