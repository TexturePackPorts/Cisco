"use strict";
(self.webpackChunkcdcreimagine = self.webpackChunkcdcreimagine || []).push([["ancillary"], {
    9035: (d,o,n)=>{
        n.d(o, {
            U8: ()=>g,
            ep: ()=>u
        });
        const l = a=>a instanceof Promise || a !== null && typeof a == "object" && typeof a.then == "function"
          , u = async a=>{
            let r = null
              , e = null;
            return l(a) && (e = await a,
            e && await e.isAuthenticated() && (r = e.client)),
            {
                authClient: r,
                manager: e
            }
        }
          , g = async(a,r)=>{
            const {authClient: e, manager: t} = await u(a);
            return {
                userInfo: await r(e),
                manager: t
            }
        }
    }
    ,
    2550: (d,o,n)=>{
        n.d(o, {
            a: ()=>u,
            c: ()=>g
        });
        var l = n(9035);
        const u = async()=>{
            try {
                return await Promise.all([n.e("ancillary/sso/manager").then(n.bind(n, 4503)), n.e("ancillary/user-info/user-info").then(n.bind(n, 4390))])
            } catch (a) {
                throw console.error("Failed to import module dependencies."),
                a
            }
        }
          , g = async()=>{
            const [{oktaManager: a},{userInfo: r}] = await u();
            return await (0,
            l.U8)(a, r)
        }
    }
    ,
    4069: (d,o,n)=>{
        n.r(o),
        n.d(o, {
            sso: ()=>l,
            userInfoDispatcher: ()=>u
        });
        const l = (()=>{
            let e = !1;
            const t = {
                get: ()=>t.self,
                set: i=>{
                    t.self = i
                }
                ,
                self: null
            }
              , c = []
              , w = Date.now()
              , y = (i,m)=>{
                t.get() ? i(!0) : Date.now() - w >= 3e3 ? (t.set(!1),
                i(!0)) : setTimeout(y.bind(void 0, i, m), 30)
            }
              , s = new Promise(y)
              , f = async i=>{
                typeof i == "function" && (t.get() && await t.get().isAuthenticated() ? i() : c.push(i))
            }
              , h = async()=>{
                await s;
                const i = t.get();
                return i && await i.isAuthenticated()
            }
            ;
            return {
                addSSOListener: f,
                checkAuth: h,
                hasAuthHeader: async()=>await h() ? `Bearer ${t.get().client.getAccessToken()}` : !1,
                init: i=>{
                    t.set(i),
                    c.forEach(m=>m()),
                    c.splice(0, c.length)
                }
                ,
                isAuthenticated: ()=>(t.get() && t.get().isAuthenticated().then(i=>{
                    e = i
                }
                ),
                e)
            }
        }
        )()
          , u = (()=>{
            const e = []
              , t = {
                get: ()=>t.self,
                set: s=>t.self = s,
                self: null
            }
              , c = s=>{
                s.serviceNames = s.listOfDataFields;
                const f = s.listOfDataFields instanceof Array && s.listOfDataFields.includes("contactInfo");
                f && s.serviceNames.push("cinf"),
                t.get() != null ? t.get().getProfile(s).then(h=>{
                    typeof s.callback == "function" && (f && (h.contactInfo = h.cinf),
                    s.callback(h))
                }
                ) : e.push(s)
            }
            ;
            return {
                clearCache: ()=>t.get().clearCache,
                getUserProfile: c,
                init: s=>{
                    t.set(s),
                    t.get() != null && (e.forEach(f=>{
                        c(f)
                    }
                    ),
                    e.splice(0, e.length))
                }
                ,
                request: c
            }
        }
        )();
        var g = n(9035);
        const a = async(e,t,c,w)=>{
            const {userInfo: y, manager: s} = await (0,
            g.U8)(e, t);
            c.init(s),
            w.init(y)
        }
        ;
        var r = n(2550);
        (async()=>{
            const [{oktaManager: e},{userInfo: t}] = await (0,
            r.a)();
            a(e, t, l, u)
        }
        )()
    }
}, d=>{
    var o = l=>d(d.s = l)
      , n = o(4069);
    (window.cdcreimagine = window.cdcreimagine || {}).ancillary = n
}
]);
