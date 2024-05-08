"use strict";
(self.webpackChunkcdcreimagine = self.webpackChunkcdcreimagine || []).push([["search/stt"], {
    9706: (h,s,t)=>{
        t.r(s),
        t.d(s, {
            SpeechToText: ()=>i
        });
        class i {
            #e;
            #u;
            #i;
            #o;
            #n;
            #v;
            #h;
            #s;
            #c;
            #t;
            #d;
            #m;
            #r;
            #a;
            #p;
            #l() {
                this.#s.classList.toggle("--speech-to-text-active"),
                this.#t.classList.toggle("--active"),
                this.#d.classList.toggle("--visible")
            }
            #b() {
                this.#i = !0,
                this.#t.disabled = !0,
                this.#t.classList.add("--error"),
                this.#s.placeholder = this.#a,
                this.#l(),
                this.#r.classList.remove("--visible"),
                this.#m.classList.add("--visible")
            }
            #f() {
                this.#i = !0,
                this.#e.stop(),
                this.#s.placeholder = this.#a,
                this.#l(),
                this.#d.classList.remove("--visible"),
                this.#r.classList.add("--visible"),
                this.#c.disabled = !1
            }
            #g() {
                this.#s.value = "",
                this.#e.start()
            }
            #L() {
                this.#e = new webkitSpeechRecognition,
                this.#e.continuous = !0,
                this.#e.interimResults = !0,
                this.#e.lang = "en-us",
                this.#e.addEventListener("start", ()=>{
                    this.#n = setTimeout(this.#f.bind(this), 3e3),
                    clearTimeout(this.#o),
                    this.#t.disabled = !1,
                    this.#i = !1,
                    this.#u = !1,
                    this.#s.placeholder = this.#p,
                    this.#l(),
                    this.#m.classList.remove("--visible"),
                    this.#r.classList.remove("--visible"),
                    this.#c.disabled = !0
                }
                ),
                this.#e.addEventListener("result", e=>{
                    clearTimeout(this.#n),
                    clearTimeout(this.#o),
                    e.results.length > 0 ? (this.#s.value = e.results[0][0].transcript,
                    this.#s.scrollLeft = this.#s.scrollWidth,
                    this.#s.focus(),
                    this.#o = setTimeout(this.#e.stop.bind(this.#e), 2e3)) : this.#b.bind(this)
                }
                ),
                this.#e.error = this.#b,
                this.#e.addEventListener("end", ()=>{
                    this.#i || !this.#i && !this.#u && (this.#h.mode.value = "voice",
                    this.#h.cat.value = "",
                    this.#h.clktyp.value = "enter",
                    this.#h.autosuggest.value = "false",
                    this.#l(),
                    this.#v.submitSearch())
                }
                )
            }
            constructor(e) {
                this.#v = e,
                this.#h = e.querySelector(".fw-c-search__form"),
                this.#s = e.querySelector(".fw-c-search__form-phrase"),
                this.#c = e.querySelector(".fw-c-search__form-button.--submit"),
                this.#t = e.querySelector(".fw-c-search__form-button.--speech-to-text"),
                this.#d = e.querySelector(".fw-c-search__message.--speech-to-text-powered-by"),
                this.#m = e.querySelector(".fw-c-search__message.--speech-to-text-error"),
                this.#r = e.querySelector(".fw-c-search__message.--no-speech-to-text"),
                this.#a = this.#s.placeholder,
                this.#p = this.#t.dataset.placeholder
            }
            setEventListeners() {
                const e = "webkitSpeechRecognition"in window;
                this.#t != null && (e ? (this.#L(),
                this.#t.addEventListener("click", this.#g.bind(this)),
                this.#t.classList.remove("--hidden")) : this.#t.remove())
            }
            cancel() {
                this.#u = !0,
                clearTimeout(this.#n),
                clearTimeout(this.#o),
                this.#s.placeholder = this.#a,
                this.#c.disabled = !1,
                this.#l(),
                this.#r.classList.remove("--visible"),
                this.#e.stop()
            }
        }
    }
}]);
