"use strict";
(self.webpackChunkcdcreimagine = self.webpackChunkcdcreimagine || []).push([["ancillary/bullseye/manager-v1"], {
    7199: (T,g,n)=>{
        n.d(g, {
            l: ()=>l
        });
        var y = n(188)
          , d = n(2550)
          , h = n(9651);
        class l extends h.x {
            static GLOBAL_MBOX = "target-global-mbox";
            get #e() {
                const e = window.targetPageParamsAll;
                return typeof e == "function" ? e() : {}
            }
            set #e(e) {
                window.targetPageParamsAll = ()=>e
            }
            get target() {
                return window.adobe.target
            }
            get mboxes() {
                return this.cpe.mboxes || new Map
            }
            #t() {
                throw new Error("Must implement method.")
            }
            async #n() {
                const e = "getUserData"
                  , t = `${e} userInfo instantiation`
                  , a = `${e} userInfo.getProfile`;
                this.perf(e);
                const {userInfo: c} = await (0,
                d.c)();
                this.perf(t),
                this.perfMeasure(`${t} duration`, e, t);
                const o = {
                    serviceNames: this.cpe.config,
                    timeout: this.tgs.timeout
                }
                  , i = await c.getProfile(o);
                if (this.perf(a),
                this.perfMeasure(`${a} duration`, t, a),
                i.cinf != null) {
                    const p = "accessLevel"
                      , E = Object.keys(i.cinf)
                      , r = E.filter(f=>f !== p);
                    for (const f of r)
                        delete i.cinf[f]
                }
                return i
            }
            #s(e) {
                this.perf(`revealElement (${e})`);
                const t = h.x.SELECTORS
                  , a = "hidden"
                  , c = "obscured"
                  , o = t.get("element")
                  , i = t.get(a)
                  , p = t.get(c)
                  , E = document.querySelector(`#${e}`);
                if (E != null) {
                    let r = E;
                    r.classList.contains(o) || (r = E.closest(`.${o}`)),
                    r != null && (r.classList.remove(o),
                    r.classList.remove(i),
                    r.classList.remove(p))
                }
            }
            #a(e) {
                this.perf("updatePageParams");
                const t = this.#e
                  , a = "journeyStep"
                  , c = new URL(window.location);
                if (t.mbox3rdPartyId = y.U.cookies.CP_GUTC,
                t.profile = this.setProfile(e),
                c.searchParams.has(a) && (t[a] = c.searchParams.get(a)),
                t.entity != null) {
                    const o = m=>m != null && m.content != null
                      , i = document.head.getElementsByTagName("meta")
                      , p = ["concept", "portfolio", "contenttype", "othertags", "contentmodel"]
                      , E = i.namedItem("title")
                      , r = i.namedItem("description")
                      , f = typeof t.entity == "string" ? JSON.parse(t.entity) : t.entity;
                    f.pageUrl = `${window.location.hostname}${window.location.pathname}`,
                    o(E) && (f.pageTitle = E.content),
                    o(r) && (f.pageDescription = r.content);
                    for (const m of p) {
                        const R = i.namedItem(m);
                        if (o(R)) {
                            const C = R.content.split(",").map(u=>{
                                const O = u.trim().split("/").filter(S=>S.length > 0)
                                  , A = O.filter((S,P)=>P !== 0);
                                return {
                                    [O[0]]: `/${A.join("/")}`
                                }
                            }
                            ).reduce((u,O)=>{
                                let A, S = Object.keys(O), P = S[0];
                                return u.hasOwnProperty(P) ? (u[P] = `${u[P]},${O[P]}`,
                                A = u) : A = Object.assign(u, O),
                                A
                            }
                            , {});
                            Object.assign(f, C)
                        }
                    }
                    t.entity = f
                }
                this.#e = t
            }
            #i(e) {
                this.perf("targetRequestFailedHandler"),
                this.log("request failed")
            }
            #r(e) {
                this.perf("targetRequestSuccessHandler");
                const t = e.detail.responseTokens
                  , a = this.cpe
                  , c = a.ttMETA;
                if (t != null && t.length > 0) {
                    const o = [...new Set(t)];
                    for (const i of o)
                        c.push({
                            CampaignName: i["activity.name"],
                            CampaignId: i["activity.id"],
                            RecipeName: i["experience.name"],
                            RecipeId: i["experience.id"],
                            OfferId: i["option.id"],
                            OfferName: i["option.name"],
                            MboxName: e.detail.mbox
                        })
                }
            }
            #o(e) {
                const t = e.detail.mbox;
                t != null && this.#s(t)
            }
            setProfile(e) {
                this.#t()
            }
            getAndApplyOffers() {
                this.#t()
            }
            async importATJS() {
                this.#t()
            }
            revealElement(e) {
                this.#s(e)
            }
            async initialize() {
                const e = "manager initialize"
                  , t = "at.js imported";
                this.perf(e);
                const a = await this.#n();
                this.#a(a);
                try {
                    await this.importATJS()
                } catch (r) {
                    throw this.error("[Bullseye]: Failed to import at.js."),
                    this.revealElements(),
                    this.perfReport(),
                    r
                }
                this.perf(t),
                this.perfMeasure(`${t} duration`, e, t);
                const c = "REQUEST_FAILED"
                  , o = "REQUEST_SUCCEEDED"
                  , i = "CONTENT_RENDERING_SUCCEEDED"
                  , p = "CONTENT_RENDERING_FAILED"
                  , E = r=>this.target.event[r];
                document.addEventListener(E(c), this.#i.bind(this)),
                document.addEventListener(E(o), this.#r.bind(this));
                for (const r of [c, i, p])
                    document.addEventListener(E(r), this.#o.bind(this));
                await this.getAndApplyOffers()
            }
            constructor() {
                super();
                const e = this.cpe;
                e.ttMETA = []
            }
        }
    }
    ,
    9306: (T,g,n)=>{
        n.d(g, {
            BullseyeManager1x: ()=>h
        });
        var y = n(9651)
          , d = n(7199);
        class h extends d.l {
            static async instantiate() {
                const s = new h;
                try {
                    return await s.initialize(),
                    s
                } catch (e) {
                    throw this.revealElements(),
                    this.perfReport(),
                    this.error("[Bullseye]: failed to initalize 1x manager"),
                    e
                }
            }
            #e = [];
            async #t(s) {
                const e = `getAndApplyOffer (${s})`
                  , t = `${e}`
                  , a = `${e} success`
                  , c = `${e} error`;
                this.perf(t);
                const o = this.target;
                return new Promise((i,p)=>{
                    const f = {
                        mbox: s,
                        success: m=>{
                            if (this.perf(a),
                            this.perfMeasure(`${a} duration`, t, a),
                            o.applyOffer({
                                mbox: s,
                                offer: m,
                                selector: `#${s}`
                            }),
                            s === d.l.GLOBAL_MBOX) {
                                const R = y.x.SELECTORS.get("element");
                                for (const {cssSelector: M} of m)
                                    if (!M.startsWith("$")) {
                                        const C = document.querySelector(M)
                                          , u = C != null ? C.closest(`.${R}`) : null;
                                        u != null && this.revealElement(u.id)
                                    }
                            }
                            i(!0)
                        }
                        ,
                        error: (m,R)=>{
                            this.perf(c),
                            this.perfMeasure(`${a} duration`, t, c),
                            this.log("Error", m, R),
                            p(!1)
                        }
                    };
                    if (this.mboxes.has(s)) {
                        const m = Object.assign(this.mboxes.get(s).parameters, this.mboxes.get(s).profileParameters);
                        f.params = m
                    }
                    o.getOffer(f)
                }
                )
            }
            setProfile(s) {
                return s
            }
            async getAndApplyOffers() {
                this.perf("getAndApplyOffers");
                const s = d.l.GLOBAL_MBOX
                  , e = this.mboxes
                  , t = e.keys();
                this.#e.push(this.#t(s));
                for (const a of t)
                    this.#e.push(this.#t(a));
                await Promise.allSettled(this.#e)
            }
            async importATJS() {
                return await n.e("ancillary/bullseye/at-1.8.3").then(n.t.bind(n, 6637, 23))
            }
        }
    }
    ,
    9035: (T,g,n)=>{
        n.d(g, {
            U8: ()=>h,
            ep: ()=>d
        });
        const y = l=>l instanceof Promise || l !== null && typeof l == "object" && typeof l.then == "function"
          , d = async l=>{
            let s = null
              , e = null;
            return y(l) && (e = await l,
            e && await e.isAuthenticated() && (s = e.client)),
            {
                authClient: s,
                manager: e
            }
        }
          , h = async(l,s)=>{
            const {authClient: e, manager: t} = await d(l);
            return {
                userInfo: await s(e),
                manager: t
            }
        }
    }
    ,
    2550: (T,g,n)=>{
        n.d(g, {
            a: ()=>d,
            c: ()=>h
        });
        var y = n(9035);
        const d = async()=>{
            try {
                return await Promise.all([n.e("ancillary/sso/manager").then(n.bind(n, 4503)), n.e("ancillary/user-info/user-info").then(n.bind(n, 4390))])
            } catch (l) {
                throw console.error("Failed to import module dependencies."),
                l
            }
        }
          , h = async()=>{
            const [{oktaManager: l},{userInfo: s}] = await d();
            return await (0,
            y.U8)(l, s)
        }
    }
}]);
