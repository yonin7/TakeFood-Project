(this.webpackJsonpreact = this.webpackJsonpreact || []).push([
  [0],
  {
    102: function (e, t, a) {
      e.exports = a.p + 'static/media/noItem.a8f6abbb.png';
    },
    134: function (e, t, a) {
      e.exports = a(175);
    },
    164: function (e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABmJLR0QA/wD/AP+gvaeTAAABSklEQVQ4jdXTS0rDUBTG8f+NGXToTqyCmmIK3UTBV+eiiDZuIBswtWB1AT6KdhMFI42CpSPX4TBg6HGShhaa5CYOxAOBPM734xDOhf9WanbT6DRWQ6Lqb7AK5mTYHn4BmLOXIVEV4U5BUAYVsEIVtYDhAgygIBg5frMMXPPsgcw9G9pJFwNXv9/Ma7A6OwdMjTOUrAPgMVbQHTn+Y1YucwLLq98i6h4lm/EQJrAl8GB5dq8UvH1ZPwQ5ysge1zr2XmFYGXKeNRGACKk9y2EXA2EtDwY2ms/NFX1Yv2TwubBlObDLFBhrwB9xryYMKOjmsiJXaZ9S4XhPb9JVdR1cvD4VhgECxz9Rin3gHfiOrzdEdgPn5TQrm3vyRm2/D/ST45zyTwvDSWmCS2EBq+bZgyLAfBZIjnkCVzAnoYpaS5dSr3oVzEn5+F/XD1KpYXHQGxsPAAAAAElFTkSuQmCC';
    },
    165: function (e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABmJLR0QA/wD/AP+gvaeTAAABSElEQVQ4jdWUT07CUBCHv6ldkMCCm4gmVJaUO5D4d280Ro/QI0giegAVohyiXUKNhJXnYFESEknHRQEVbWnLwvhLXvLem5kvv7yXGfhvksXGrZTLFGaVjWhTc2SPxmMAc3lZmFUIuQf6ObE1CrMTwPsOjtS3/aCZh+papd7Xs5G20AHDyZC/6vink2rxCDEuQXcAPNFhqLQa/qSTVJfowLVKd4g8gFbnJkxVsQR59PZK7Vxgt1o8Bk7j4qqceVbxILtjMa6SHEU5xOb8Co4+SbfXcVVl97nJVmpwBulbD00NdiAU0WEK8KsDYWowQKi01mKV67hQLLjhTzoi3CZgb+yX4CkzGKA+CM4FPRRRH3iPlg5Q9m0/uEiqXdt5dX/SBbqLdo5708zghdIC48C11SmVQTVg2eaf4Kk5ms/TvGozNUcb1P+xPgCGeGC1p4fFUgAAAABJRU5ErkJggg==';
    },
    167: function (e, t, a) {
      e.exports = a.p + 'static/media/empty.9f3dc705.png';
    },
    168: function (e, t, a) {},
    169: function (e, t, a) {
      e.exports = a.p + 'static/media/register.e68df70e.svg';
    },
    170: function (e, t, a) {
      e.exports = a.p + 'static/media/logo.814ff8ff.svg';
    },
    171: function (e, t, a) {
      e.exports = a.p + 'static/media/close.4536ae5a.png';
    },
    172: function (e, t, a) {
      e.exports = a.p + 'static/media/check.41c2a18b.png';
    },
    173: function (e, t, a) {
      e.exports = a.p + 'static/media/404.bfb9ef34.jpg';
    },
    174: function (e, t, a) {
      e.exports = a.p + 'static/media/Mihir.96cf34d3.jpeg';
    },
    175: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        r = a.n(n),
        l = a(17),
        c = a.n(l),
        i = a(11),
        s = a.n(i),
        o = a(13),
        m = a(9),
        u = Object(n.createContext)(),
        d = a(10),
        p = function (e, t) {
          switch (t.type) {
            case 'REGISTER_SUCCESS':
              return Object(d.a)(
                Object(d.a)({}, e),
                {},
                { isAuthenticated: !0, loading: !1 }
              );
            case 'REGISTER_FAIL':
              var a = [];
              return (
                t.payload.data.msg && a.push(t.payload.data.msg),
                t.payload.data.errors &&
                  t.payload.data.errors.forEach(function (e) {
                    a.push(e.msg);
                  }),
                Object(d.a)(
                  Object(d.a)({}, e),
                  {},
                  { isAuthenticated: !1, loading: !1, user: null, errors: a }
                )
              );
            case 'USER_LOADED':
              return Object(d.a)(
                Object(d.a)({}, e),
                {},
                {
                  isAuthenticated: !0,
                  user: t.payload,
                  loading: !1,
                  verified: t.payload.verify,
                }
              );
            case 'LOGIN_SUCCESS':
              return Object(d.a)(
                Object(d.a)({}, e),
                {},
                { isAuthenticated: !0, current: 1, loading: !0 }
              );
            case 'LOGIN_FAIL':
              var n = [];
              return (
                t.payload.data.msg && n.push(t.payload.data.msg),
                t.payload.data.errors &&
                  t.payload.data.errors.forEach(function (e) {
                    n.push(e.msg);
                  }),
                Object(d.a)(
                  Object(d.a)({}, e),
                  {},
                  { isAuthenticated: !1, errors: n, loading: !1, user: null }
                )
              );
            case 'AUTH_ERROR':
              return Object(d.a)(
                Object(d.a)({}, e),
                {},
                { isAuthenticated: !1, user: null }
              );
            case 'LOGOUT':
              return Object(d.a)(
                Object(d.a)({}, e),
                {},
                { isAuthenticated: !1, loading: !1, user: null }
              );
            case 'REMOVE_ALERT':
              return Object(d.a)(Object(d.a)({}, e), {}, { errors: [] });
            case 'SET_LOADING':
              return Object(d.a)(Object(d.a)({}, e), {}, { loading: !0 });
            case 'REMOVE_LOADING':
              return Object(d.a)(Object(d.a)({}, e), {}, { loading: !1 });
            case 'REMOVE_CURRENT':
              return Object(d.a)(Object(d.a)({}, e), {}, { current: 0 });
            default:
              return e;
          }
        },
        E = a(12),
        g = a.n(E),
        f = function (e) {
          e
            ? (g.a.defaults.headers.common['x-auth-token'] = e)
            : delete g.a.defaults.headers.common['x-auth-token'];
        },
        h = function () {
          delete g.a.defaults.headers.common['x-auth-token'];
        },
        y = function (e) {
          var t = Object(n.useReducer)(p, {
              isAuthenticated: !1,
              user: null,
              loading: !1,
              current: 0,
              errors: [],
              verified: !1,
              displayVerified: !1,
            }),
            a = Object(m.a)(t, 2),
            l = a[0],
            c = a[1],
            i = (function () {
              var e = Object(o.a)(
                s.a.mark(function e() {
                  var t, a;
                  return s.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              localStorage.token && f(localStorage.token),
                              (e.prev = 1),
                              (t = {
                                headers: { 'Content-Type': 'application/json' },
                              }),
                              (e.next = 5),
                              g.a.get('/api/login', t)
                            );
                          case 5:
                            return (
                              (a = e.sent),
                              c({ type: 'USER_LOADED', payload: a.data }),
                              c({ type: 'REMOVE_LOADING' }),
                              setTimeout(function () {
                                c({ type: 'REMOVE_DISPLAY_VERIFIED' });
                              }, 3e3),
                              e.abrupt('return', 0)
                            );
                          case 12:
                            return (
                              (e.prev = 12),
                              (e.t0 = e.catch(1)),
                              localStorage.removeItem('token'),
                              c({ type: 'AUTH_ERROR' }),
                              c({ type: 'REMOVE_LOADING' }),
                              e.abrupt('return', 0)
                            );
                          case 18:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 12]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            d = (function () {
              var e = Object(o.a)(
                s.a.mark(function e(t) {
                  var a, n;
                  return s.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = {
                                headers: { 'Content-Type': 'application/json' },
                              }),
                              (e.prev = 1),
                              (e.next = 4),
                              g.a.post('/api/register', t, a)
                            );
                          case 4:
                            (n = e.sent),
                              c({ type: 'REGISTER_SUCCESS', payload: n.data }),
                              localStorage.setItem('token', n.data),
                              i(),
                              (e.next = 14);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(1)),
                              c({
                                type: 'REGISTER_FAIL',
                                payload: e.t0.response,
                              }),
                              setTimeout(function () {
                                return c({ type: 'REMOVE_ALERT' });
                              }, 3500);
                          case 14:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 10]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            E = (function () {
              var e = Object(o.a)(
                s.a.mark(function e(t) {
                  var a, n;
                  return s.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = {
                                headers: { 'Content-Type': 'application/json' },
                              }),
                              (e.prev = 1),
                              (e.next = 4),
                              g.a.post(
                                'https://foodeazy-web.herokuapp.com/api/login',
                                t,
                                a
                              )
                            );
                          case 4:
                            return (
                              (n = e.sent),
                              localStorage.setItem('token', n.data),
                              c({ type: 'LOGIN_SUCCESS', payload: n.data }),
                              i(),
                              setTimeout(function () {
                                c({ type: 'REMOVE_CURRENT' });
                              }, 3e3),
                              e.abrupt('return', 0)
                            );
                          case 12:
                            (e.prev = 12),
                              (e.t0 = e.catch(1)),
                              e.t0.response
                                ? (c({
                                    type: 'LOGIN_FAIL',
                                    payload: e.t0.response,
                                  }),
                                  c({ type: 'REMOVE_LOADING' }),
                                  setTimeout(function () {
                                    return c({ type: 'REMOVE_ALERT' });
                                  }, 3500))
                                : alert('Connection Cannot Be Made to Server');
                          case 15:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 12]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return r.a.createElement(
            u.Provider,
            {
              value: {
                register: d,
                login: E,
                logout: function () {
                  localStorage.removeItem('token'), c({ type: 'LOGOUT' }), h();
                },
                isAuthenticated: l.isAuthenticated,
                loading: l.loading,
                userLoaded: i,
                user: l.user,
                set_loading: function () {
                  c({ type: 'SET_LOADING' });
                },
                errors: l.errors,
                current: l.current,
                verified: l.verified,
                displayVerified: l.displayVerified,
              },
            },
            ' ',
            e.children,
            ' '
          );
        },
        A = Object(n.createContext)(),
        v = function (e, t) {
          var a = 0;
          switch (t.type) {
            case 'LOAD_CART':
              return t.payload.data;
            case 'ADD_PRODUCT':
              var n = [];
              e.items.forEach(function (e) {
                e.name == t.payload.name
                  ? ((a = 1), n.push(t.payload))
                  : n.push(e);
              }),
                0 == a && n.push(t.payload);
              var r = 0,
                l = 0;
              return (
                n.forEach(function (e) {
                  (r += e.price * Number(e.q)), (l += e.q);
                }),
                { total_quantity: l, total_price: r, items: n }
              );
            case 'REMOVE_PRODUCT':
              var c = [];
              e.items.forEach(function (e) {
                e.name == t.payload.name
                  ? ((a = 1), t.payload.q > 0 && c.push(t.payload))
                  : c.push(e);
              }),
                0 == a && c.push(t.payload);
              var i = 0,
                s = 0;
              return (
                c.forEach(function (e) {
                  (i += e.price * Number(e.q)), (s += e.q);
                }),
                { total_quantity: s, total_price: i, items: c }
              );
            case 'CLEAR_CART':
              return {
                total_quantity: 0,
                total_price: 0,
                items: [],
                current: 0,
              };
            case 'DELETE_CLICK':
              var o = [];
              e.items.map(function (e) {
                e.name !== t.payload && o.push(e);
              });
              var m = 0,
                u = 0;
              return (
                o.forEach(function (e) {
                  (m += e.price * Number(e.q)), (u += e.q);
                }),
                { total_quantity: u, total_price: m, items: o }
              );
            case 'SetLoading':
              return Object(d.a)(Object(d.a)({}, e), {}, { loading2: !0 });
            case 'UnsetLoading':
              return Object(d.a)(Object(d.a)({}, e), {}, { loading2: !1 });
            default:
              return e;
          }
        },
        b = function (e) {
          var t = Object(n.useReducer)(v, {
              total_quantity: 0,
              total_price: 0,
              items: [],
              current: 0,
              loading2: !1,
              clicked: 0,
            }),
            a = Object(m.a)(t, 2),
            l = a[0],
            c = a[1],
            i = (function () {
              var e = Object(o.a)(
                s.a.mark(function e() {
                  var t;
                  return s.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              c({ type: 'SetLoading' }),
                              (e.next = 4),
                              g.a.get('/api/cart')
                            );
                          case 4:
                            return (
                              (t = e.sent),
                              (e.next = 7),
                              c({ type: 'LOAD_CART', payload: t.data })
                            );
                          case 7:
                            c({ type: 'UnsetLoading' }), (e.next = 12);
                            break;
                          case 10:
                            (e.prev = 10), (e.t0 = e.catch(0));
                          case 12:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 10]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            u = (function () {
              var e = Object(o.a)(
                s.a.mark(function e() {
                  var t;
                  return s.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = {
                                headers: { 'Content-Type': 'application/json' },
                              }),
                              (e.prev = 1),
                              (e.next = 4),
                              g.a.put('/api/cart', t)
                            );
                          case 4:
                            e.sent, c({ type: 'CLEAR_CART' }), (e.next = 10);
                            break;
                          case 8:
                            (e.prev = 8), (e.t0 = e.catch(1));
                          case 10:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 8]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            d = (function () {
              var e = Object(o.a)(
                s.a.mark(function e(t, a) {
                  var n, r;
                  return s.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = { user_id: t, cart: a }),
                              (r = {
                                headers: { 'Content-Type': 'application/json' },
                              }),
                              (e.prev = 2),
                              (e.next = 5),
                              g.a.post('/api/cart', n, r)
                            );
                          case 5:
                            if (200 !== e.sent.status) {
                              e.next = 10;
                              break;
                            }
                            return e.abrupt('return', 1);
                          case 10:
                            return e.abrupt('return', 0);
                          case 11:
                            e.next = 16;
                            break;
                          case 13:
                            return (
                              (e.prev = 13),
                              (e.t0 = e.catch(2)),
                              e.abrupt('return', 0)
                            );
                          case 16:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 13]]
                  );
                })
              );
              return function (t, a) {
                return e.apply(this, arguments);
              };
            })();
          return r.a.createElement(
            A.Provider,
            {
              value: {
                addProduct: function (e) {
                  c({ type: 'ADD_PRODUCT', payload: e });
                },
                items: l.items,
                total_q: l.total_quantity,
                total_price: l.total_price,
                removeProduct: function (e) {
                  c({ type: 'REMOVE_PRODUCT', payload: e });
                },
                saveCart: d,
                state: l,
                loadCart: i,
                deleteClick: function (e) {
                  c({ type: 'DELETE_CLICK', payload: e });
                },
                clearCart: u,
                loading2: l.loading2,
              },
            },
            ' ',
            e.children,
            ' '
          );
        },
        C = Object(n.createContext)(),
        O = function (e, t) {
          switch (t.type) {
            case 'LOAD_PRODUCTS':
              var a = [];
              return (
                t.payload.forEach(function (e) {
                  var t = {};
                  (t.name = e.name),
                    (t.price = e.price),
                    (t.url = e.url),
                    (t.type = e.type),
                    (t.q = 0),
                    a.push(t);
                }),
                Object(d.a)(Object(d.a)({}, e), {}, { items: a })
              );
            case 'SEARCH_PRODUCTS':
              var n = [],
                r = new RegExp(''.concat(t.payload), 'gi');
              return (
                e.items.forEach(function (e) {
                  e.name.match(r) && n.push(e);
                }),
                Object(d.a)(Object(d.a)({}, e), {}, { filtered: n })
              );
            case 'CLEAR_FILTER':
              return Object(d.a)(Object(d.a)({}, e), {}, { filtered: [] });
            case 'SORT_BY_PRICE':
              var l = e.items;
              return (
                l.sort(function (e, t) {
                  return e.price - t.price;
                }),
                Object(d.a)(Object(d.a)({}, e), {}, { items: l })
              );
            case 'SORT_BY_NAME':
              var c = e.items;
              return (
                c.sort(function (e, t) {
                  return e.name > t.name ? 1 : -1;
                }),
                Object(d.a)(Object(d.a)({}, e), {}, { items: c })
              );
            case 'SetLoading':
              return Object(d.a)(Object(d.a)({}, e), {}, { loading1: !0 });
            case 'UnsetLoading':
              return Object(d.a)(Object(d.a)({}, e), {}, { loading1: !1 });
            default:
              return e;
          }
        },
        w = function (e) {
          var t = (function () {
              var e = Object(o.a)(
                s.a.mark(function e() {
                  var t;
                  return s.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              i({ type: 'SetLoading' }),
                              (e.next = 4),
                              g.a.get('api/items')
                            );
                          case 4:
                            return (
                              (t = e.sent),
                              (e.next = 7),
                              i({ type: 'LOAD_PRODUCTS', payload: t.data })
                            );
                          case 7:
                            return (
                              i({ type: 'UnsetLoading' }), e.abrupt('return', 0)
                            );
                          case 11:
                            (e.prev = 11), (e.t0 = e.catch(0));
                          case 13:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 11]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            a = Object(n.useReducer)(O, {
              total_quanity: 0,
              items: [],
              filtered: [],
              loading1: !1,
            }),
            l = Object(m.a)(a, 2),
            c = l[0],
            i = l[1];
          return r.a.createElement(
            C.Provider,
            {
              value: {
                items: c.items,
                total_quantity: c.total_quanity,
                search: function (e) {
                  i({ type: 'SEARCH_PRODUCTS', payload: e });
                },
                filtered: c.filtered,
                clearFilter: function () {
                  i({ type: 'CLEAR_FILTER' });
                },
                loadItems: t,
                sortByName: function () {
                  i({ type: 'SORT_BY_NAME' });
                },
                sortByPrice: function () {
                  i({ type: 'SORT_BY_PRICE' });
                },
                laoding1: c.loading,
              },
            },
            ' ',
            e.children
          );
        },
        j = Object(n.createContext)(),
        x = a(52),
        N = a.n(x),
        I = function (e) {
          var t = Object(n.useState)(1),
            a = Object(m.a)(t, 2),
            l = a[0],
            c = a[1];
          return r.a.createElement(
            j.Provider,
            {
              value: {
                loading: l,
                setLoading: c,
                Loader: function () {
                  return (
                    console.log('YES'),
                    r.a.createElement(
                      'div',
                      {
                        style: {
                          width: '100%',
                          display: 'flex',
                          height: '100vh',
                          alignItems: 'center',
                          justifyContent: 'center',
                          zIndex: '23444898429',
                        },
                      },
                      r.a.createElement('img', { src: N.a, alt: 'loader' })
                    )
                  );
                },
              },
            },
            e.children
          );
        },
        k = (a(51), a(85), a(104)),
        S = a.n(k),
        F = a(16),
        _ = a(232),
        B = a(231);
      function Q(e) {
        var t = Object(n.useContext)(u),
          a = t.logout,
          l = t.isAuthenticated,
          c = (t.userLoaded, t.verified);
        Object(n.useEffect)(function () {}, []);
        return r.a.createElement(
          _.a,
          {
            style: {
              position: 'sticky',
              top: '0',
              zIndex: '100000',
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'Mulish',
            },
            bg: 'primary',
            variant: 'dark',
          },
          r.a.createElement(
            _.a.Brand,
            { className: 'navbar titl' },
            r.a.createElement(
              F.a,
              null,
              r.a.createElement(
                'a',
                { href: '/', style: { color: 'white', fontFamily: 'Mulish' } },
                'TakeBis ',
                r.a.createElement('i', { className: 'fas fa-utensils' })
              ),
              ' '
            )
          ),
          r.a.createElement(
            B.a,
            null,
            r.a.createElement(
              'div',
              { className: 'navLogout' },
              r.a.createElement(
                F.b,
                { to: '/', style: { color: 'white', textDecoration: 'none' } },
                r.a.createElement('span', { className: 'bg_grey' }, 'Home')
              )
            ),
            l &&
              c &&
              r.a.createElement(
                'div',
                { className: 'navLogout' },
                r.a.createElement(
                  F.b,
                  {
                    style: { color: 'white', textDecoration: 'none' },
                    to: '/order',
                    className: 'bg_grey',
                  },
                  r.a.createElement('span', { className: 'bg_grey' }, 'Orders')
                )
              ),
            l &&
              c &&
              r.a.createElement(
                'div',
                { className: 'navLogout' },
                r.a.createElement(
                  F.b,
                  {
                    style: { color: 'white', textDecoration: 'none' },
                    to: '/addproduct',
                    className: 'bg_grey',
                  },
                  r.a.createElement(
                    'span',
                    { className: 'bg_grey' },
                    'Add Items'
                  )
                )
              ),
            l &&
              c &&
              r.a.createElement(
                'div',
                { className: 'navLogout' },
                r.a.createElement(
                  F.b,
                  {
                    style: { color: 'white', textDecoration: 'none' },
                    to: '/deleteitems',
                    className: 'bg_grey',
                  },
                  r.a.createElement(
                    'span',
                    { className: 'bg_grey' },
                    'Delete Items'
                  )
                )
              ),
            r.a.createElement(
              'div',
              { className: 'navLogout' },
              r.a.createElement(
                F.b,
                {
                  style: { color: 'white', textDecoration: 'none' },
                  to: '/contact',
                  className: 'bg_grey',
                },
                r.a.createElement(
                  'span',
                  { className: 'bg_grey' },
                  'Contact Us'
                )
              )
            ),
            !0 === l &&
              r.a.createElement(
                'div',
                { className: 'navLogout' },
                ' ',
                r.a.createElement(
                  'button',
                  {
                    type: 'button',
                    onClick: function (e) {
                      a();
                    },
                    style: { border: 'none', outline: 'none' },
                  },
                  'Logout ',
                  r.a.createElement(S.a, null)
                )
              ),
            r.a.createElement(
              'span',
              { className: 'hamburger' },
              r.a.createElement('i', {
                onClick: e.changeDisplay,
                className: 'fa fa-bars',
                'aria-hidden': 'true',
              })
            )
          )
        );
      }
      a(30);
      var R = a(108),
        T = a(233),
        D = a(109),
        L = function (e) {
          var t = Object(n.useContext)(A),
            l = t.addProduct,
            c = t.items,
            i = t.total_q,
            s = t.removeProduct,
            o = Object(n.useState)(0),
            u = Object(m.a)(o, 2),
            d = u[0],
            p = u[1];
          Object(n.useEffect)(
            function () {
              c &&
                c.forEach(function (e) {
                  e.name === g && p(e.q);
                });
            },
            [i]
          );
          var E = function (e) {
              p(d + 1), l({ name: g, price: f, q: d + 1, url: h, type: y });
            },
            g = e.name,
            f = e.price,
            h = (e.q, e.url),
            y = e.type;
          return r.a.createElement(
            R.a,
            { className: 'parCart', sm: 6, md: 4, xs: 12 },
            r.a.createElement(
              T.a,
              {
                className: 'Card animate__animated animate__fadeInLeft',
                style: { width: '13.8rem' },
              },
              r.a.createElement(T.a.Img, {
                className: 'menuImage',
                variant: 'top',
                src: h,
              }),
              r.a.createElement(
                T.a.Body,
                null,
                r.a.createElement(
                  T.a.Title,
                  {
                    className: 'food',
                    style: {
                      fontFamily: 'Mulish',
                      fontWeight: '300',
                      fontSize: '1.25rem',
                    },
                  },
                  g
                ),
                'Veg' === y || 'veg' === y
                  ? r.a.createElement('img', { src: a(164), alt: 'Veg' })
                  : r.a.createElement('img', { src: a(165), alt: 'non-veg' }),
                r.a.createElement(
                  'span',
                  { className: 'numbers' },
                  ' ',
                  r.a.createElement(
                    'span',
                    { className: 'WebRupee' },
                    '\u20b9'
                  ),
                  ' ',
                  f
                ),
                r.a.createElement(T.a.Text, null),
                r.a.createElement(
                  'div',
                  { className: 'buttons' },
                  d > 0
                    ? r.a.createElement(
                        n.Fragment,
                        null,
                        r.a.createElement(
                          'button',
                          {
                            id: 'minus',
                            className: 'btn2',
                            onClick: function (e) {
                              p(d - 1),
                                s({
                                  name: g,
                                  price: f,
                                  q: d - 1,
                                  url: h,
                                  type: y,
                                });
                            },
                          },
                          r.a.createElement('i', {
                            className: 'fa fa-minus-circle fa-lg',
                            'aria-hidden': 'true',
                          })
                        ),
                        r.a.createElement(
                          'span',
                          { className: 'numbers' },
                          d,
                          ' '
                        ),
                        r.a.createElement(
                          'button',
                          { className: 'btn2', onClick: E },
                          r.a.createElement('i', {
                            class: 'fa fa-plus-circle fa-lg',
                            'aria-hidden': 'true',
                          })
                        )
                      )
                    : r.a.createElement(
                        D.a,
                        {
                          variant: 'outline-primary',
                          onClick: E,
                          style: {
                            width: '5rem',
                            height: '1.7rem',
                            fontFamily: 'Mulish',
                            lineHeight: '100%',
                            fontSize: '0.9rem',
                            marginTop: '0.2rem',
                          },
                        },
                        'Add'
                      )
                )
              )
            )
          );
        },
        P = a(114),
        G = a.n(P),
        M = a(115),
        q = a.n(M),
        U = a(214),
        H = a(229),
        K = a(110),
        V = a(227),
        J = a(215),
        Y = a(216),
        W = function (e) {
          var t = Object(n.useContext)(j),
            l = (t.Loader, t.loading, t.setLoading),
            c = Object(n.useContext)(C),
            i = c.items,
            s = c.search,
            o = c.clearFilter,
            d = c.filtered,
            p = c.sortByName,
            E = c.sortByPrice,
            g = c.loadItems,
            f = c.loading1,
            h = Object(n.useState)([]),
            y = Object(m.a)(h, 2),
            v = y[0],
            b = y[1],
            O = Object(n.useState)(''),
            w = Object(m.a)(O, 2),
            x = w[0],
            N = w[1],
            I = Object(n.useContext)(A),
            k = I.total_q,
            S = I.loading2,
            _ = Object(n.useContext)(u),
            B = _.isAuthenticated,
            Q = _.current,
            R = _.displayVerified,
            T = Object(n.useState)(!1),
            D = Object(m.a)(T, 2),
            P = D[0],
            M = D[1];
          Object(n.useEffect)(
            function () {
              B && l(g());
            },
            [B]
          ),
            Object(n.useEffect)(
              function () {
                b('' === x ? i : d);
              },
              [d, i, B, W]
            ),
            Object(n.useEffect)(function () {
              R &&
                (M(!0),
                setTimeout(
                  function () {
                    M(!1);
                  },
                  [4e3]
                ));
            }, []);
          var W = function (e) {
            N('');
          };
          return r.a.createElement(
            r.a.Fragment,
            null,
            1 === Q
              ? r.a.createElement(
                  H.a,
                  {
                    className: 'animate__animated animate__fadeInRight',
                    autohide: !0,
                    style: { position: 'fixed', right: '0', zIndex: '9899899' },
                  },
                  r.a.createElement(
                    H.a.Header,
                    {
                      style: {
                        background: 'darkGreen',
                        color: 'white',
                        fontWeight: 'bold',
                      },
                    },
                    r.a.createElement(
                      'strong',
                      { className: 'mr-auto' },
                      'Success'
                    )
                  ),
                  r.a.createElement(
                    H.a.Body,
                    null,
                    'You Are Successfully Logged In'
                  )
                )
              : '',
            !0 === P
              ? r.a.createElement(
                  H.a,
                  {
                    className: 'animate__animated animate__fadeInRight',
                    autohide: !0,
                    style: { position: 'fixed', right: '0', zIndex: '9899899' },
                  },
                  r.a.createElement(
                    H.a.Header,
                    {
                      style: {
                        background: 'red',
                        color: 'white',
                        fontWeight: 'bold',
                      },
                    },
                    r.a.createElement(
                      'strong',
                      { className: 'mr-auto' },
                      'Not Verified'
                    )
                  ),
                  r.a.createElement(
                    H.a.Body,
                    null,
                    'Your Email Is Not Verified'
                  )
                )
              : '',
            r.a.createElement(
              'div',
              {
                className: 'mobileNav',
                style: { position: 'sticky', top: '55px', zIndex: '100' },
              },
              r.a.createElement(
                U.a,
                {
                  style: { margin: 'auto', position: 'sticky', top: '70px' },
                  className: 'mb-3 text1',
                  onChange: function (e) {
                    N(e.target.value),
                      '' !== e.target.value
                        ? (s(e.target.value), N(e.target.value), b(d))
                        : (o(), N(''), b(i));
                  },
                },
                r.a.createElement(
                  U.a.Prepend,
                  null,
                  r.a.createElement(
                    U.a.Text,
                    null,
                    r.a.createElement('i', { className: 'fas fa-search' })
                  )
                ),
                r.a.createElement(K.a, {
                  placeholder: 'Search Food Items',
                  'aria-label': 'Username',
                  'aria-describedby': 'basic-addon1',
                  value: x,
                  className: 'searchbar',
                })
              )
            ),
            f || S
              ? r.a.createElement(
                  'div',
                  {
                    style: {
                      width: '100%',
                      display: 'flex',
                      height: '100vh',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: '23444898429',
                    },
                  },
                  r.a.createElement('img', { src: a(52), alt: 'loader' })
                )
              : r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    'div',
                    { className: 'sortButton' },
                    r.a.createElement(
                      V.a,
                      null,
                      r.a.createElement(
                        V.a.Toggle,
                        {
                          variant: 'primary',
                          id: 'dropdown-basic',
                          style: { fontFamily: 'Mulish' },
                        },
                        'Sort ',
                        r.a.createElement(G.a, null)
                      ),
                      r.a.createElement(
                        V.a.Menu,
                        { style: { fontFamily: 'Mulish' } },
                        r.a.createElement(
                          V.a.Item,
                          { onSelect: p, style: { fontFamily: 'Mulish' } },
                          'By Name ',
                          r.a.createElement(q.a, null)
                        ),
                        r.a.createElement(
                          V.a.Item,
                          { onSelect: E, style: { fontFamily: 'Mulish' } },
                          'By Price'
                        )
                      )
                    )
                  ),
                  r.a.createElement(
                    J.a,
                    null,
                    r.a.createElement(
                      Y.a,
                      null,
                      0 === v.length
                        ? r.a.createElement('img', {
                            style: {
                              width: '50vw',
                              display: 'block',
                              margin: 'auto',
                              height: 'auto',
                              maxWidth: '100%',
                              verticalAlign: 'middle',
                              maxHeight: '100%',
                            },
                            className: 'noItem',
                            src: a(102),
                            alt: 'noItem',
                          })
                        : v.map(function (e) {
                            return r.a.createElement(L, {
                              name: e.name,
                              price: e.price,
                              q: e.q,
                              url: e.url,
                              type: e.type,
                            });
                          })
                    )
                  ),
                  r.a.createElement(
                    'div',
                    {
                      id: 'ex2',
                      style: {
                        position: 'fixed',
                        right: '1px',
                        bottom: '10px',
                        zIndex: '100',
                      },
                    },
                    r.a.createElement(
                      'span',
                      {
                        className: 'fa-stack fa-5x has-badge fa-sm',
                        'data-count': k,
                        style: {
                          marginRight: '0.5rem',
                          marginBottom: '0.5rem',
                        },
                      },
                      r.a.createElement(
                        F.b,
                        { to: '/cart', className: 'cart-icon' },
                        r.a.createElement('img', {
                          src: 'https://image.flaticon.com/icons/svg/630/630746.svg',
                          alt: 'cart',
                        })
                      )
                    )
                  )
                )
          );
        },
        z = function (e) {
          var t = e.err;
          return r.a.createElement(
            'div',
            { style: { position: 'fixed', right: '0', zIndex: '20180210' } },
            t.map(function (e, t) {
              return r.a.createElement(
                H.a,
                { className: 'animate__animated animate__shakeX' },
                r.a.createElement(
                  H.a.Header,
                  {
                    style: {
                      background: 'red',
                      color: 'white',
                      fontWeight: 'bold',
                    },
                  },
                  r.a.createElement(
                    'strong',
                    { className: 'mr-auto' },
                    'Auth Error'
                  )
                ),
                r.a.createElement(H.a.Body, null, e)
              );
            })
          );
        },
        X = function () {
          var e = Object(n.useContext)(u),
            t = e.errors;
          e.isAuthenticated;
          return t.length > 0
            ? r.a.createElement(z, {
                className: 'animate__animated animate__shakeX',
                err: t,
              })
            : null;
        },
        Z = a(21),
        $ = function (e) {
          var t = Object(n.useState)(0),
            a = Object(m.a)(t, 2),
            l = a[0],
            c = a[1],
            i = e.item,
            s = i.name,
            o = i.price,
            u = (i.q, i.url),
            d = i.type,
            p = Object(n.useContext)(A),
            E = p.addProduct,
            g = p.items,
            f = (p.state, p.total_q),
            h = p.removeProduct,
            y = p.deleteClick,
            v = Object(n.useState)(0),
            b = Object(m.a)(v, 2),
            C = b[0],
            O = b[1];
          Object(n.useEffect)(
            function () {
              g.forEach(function (e) {
                e.name === s && O(e.q);
              });
            },
            [f]
          );
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              'div',
              {
                className: 'itemlist '.concat(
                  1 !== l
                    ? 'animate__animated animate__fadeIn cartContainer'
                    : 'animate__animated animate__fadeOut'
                ),
              },
              r.a.createElement(
                'div',
                { className: 'img_show' },
                r.a.createElement('img', { src: u, alt: 'food' })
              ),
              r.a.createElement(
                'div',
                { className: 'details' },
                r.a.createElement(
                  'h1',
                  {
                    className: 'food',
                    style: {
                      textAlign: 'center',
                      fontFamily: 'Mulish',
                      fontWeight: '300',
                      fontSize: '1.3rem',
                    },
                  },
                  ' ',
                  s,
                  ' '
                ),
                r.a.createElement(
                  'div',
                  { className: 'buttonsCart' },
                  r.a.createElement(
                    'button',
                    { className: 'btn1' },
                    ' ',
                    ' ',
                    r.a.createElement('i', {
                      className: 'fa fa-trash',
                      onClick: function (e) {
                        y(s), c(1);
                      },
                      style: { 'font-size': '1.2rem', color: 'red' },
                    }),
                    ' '
                  ),
                  ' ',
                  C > 0
                    ? r.a.createElement(
                        'button',
                        {
                          className: 'btn1',
                          onClick: function (e) {
                            O(C - 1),
                              h({
                                name: s,
                                price: o,
                                q: C - 1,
                                url: u,
                                type: d,
                              });
                          },
                        },
                        r.a.createElement('i', {
                          className: 'fa fa-minus-circle fa-lg',
                        })
                      )
                    : r.a.createElement(
                        'button',
                        { className: 'btn1  disabled' },
                        r.a.createElement('i', {
                          className: 'fa fa-minus-circle fa-lg',
                        })
                      ),
                  r.a.createElement('span', { className: 'numbers1' }, C, ' '),
                  ' ',
                  r.a.createElement(
                    'button',
                    {
                      className: 'btn1',
                      onClick: function (e) {
                        O(C + 1),
                          E({ name: s, price: o, q: C + 1, url: u, type: d });
                      },
                    },
                    r.a.createElement('i', {
                      className: 'fa fa-plus-circle fa-lg',
                    })
                  )
                )
              )
            )
          );
        },
        ee = a(116),
        te = a.n(ee),
        ae = a(217),
        ne = a(117),
        re = a.n(ne),
        le = a(218),
        ce = a(118),
        ie = a.n(ce),
        se = Object(ae.a)(function (e) {
          return { button: { margin: e.spacing(1) } };
        }),
        oe = function (e) {
          return r.a.createElement(
            H.a,
            { style: { position: 'fixed', right: '0', zIndex: '9899899' } },
            r.a.createElement(
              H.a.Header,
              {
                style: {
                  background: 'darkGreen',
                  color: 'white',
                  fontWeight: 'bold',
                },
              },
              r.a.createElement('strong', { className: 'mr-auto' }, 'Success')
            ),
            r.a.createElement(H.a.Body, null, 'Cart Saved Successfully!')
          );
        },
        me = function () {
          var e = se(),
            t = Object(n.useState)(0),
            l = Object(m.a)(t, 2),
            c = l[0],
            i = l[1],
            d = Object(n.useContext)(A),
            p = d.items,
            E = (d.loadCart, d.total_price),
            g = (d.total_quantity, d.saveCart),
            f = d.state,
            h = d.clearCart,
            y = Object(n.useContext)(u).user,
            v = (function () {
              var e = Object(o.a)(
                s.a.mark(function e() {
                  return s.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), g(y._id, f);
                        case 2:
                          e.sent && i(1),
                            setTimeout(function () {
                              i(0);
                            }, 3e3);
                        case 5:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return r.a.createElement(
            r.a.Fragment,
            null,
            1 === c ? r.a.createElement(oe, null) : '',
            r.a.createElement(
              F.b,
              { className: 'left_align', to: '/' },
              r.a.createElement('i', {
                class: 'fa fa-arrow-circle-left',
                'aria-hidden': 'true',
                style: {
                  marginLeft: '0.3rem',
                  marginTop: '0.5rem',
                  fontSize: '2rem',
                  position: 'fixed',
                  left: '0.3rem',
                },
              })
            ),
            p && 0 !== p.length
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement('img', {
                    className: 'hungryImage',
                    src: 'https://i.etsystatic.com/17234112/r/il/d3df86/1737397372/il_794xN.1737397372_mczx.jpg',
                    alt: 'punchy',
                    style: { height: '50vh', width: '100%' },
                  }),
                  r.a.createElement(
                    'div',
                    { className: 'cartItems' },
                    r.a.createElement(
                      'div',
                      { className: 'cartContainer' },
                      r.a.createElement(
                        'h1',
                        { style: { fontWeight: '500', fontFamily: 'Alata' } },
                        'Items',
                        ' ',
                        r.a.createElement('img', {
                          src: 'https://image.flaticon.com/icons/svg/2922/2922037.svg',
                          alt: 'items',
                          style: { height: '6rem' },
                        })
                      ),
                      p.map(function (e) {
                        return r.a.createElement($, { item: e });
                      })
                    ),
                    r.a.createElement(
                      'div',
                      { className: 'summary' },
                      r.a.createElement(
                        'div',
                        null,
                        r.a.createElement(
                          'span',
                          { className: 'amount' },
                          'Amount Payable : ',
                          r.a.createElement(
                            'span',
                            { className: 'WebRupee' },
                            '\u20b9'
                          ),
                          E
                        )
                      ),
                      r.a.createElement(
                        le.a,
                        {
                          variant: 'contained',
                          className: e.button,
                          onClick: v,
                          startIcon: r.a.createElement(te.a, null),
                          style: {
                            fontFamily: 'Mulish',
                            color: 'white',
                            backgroundColor: '#5995FD',
                            border: 'none',
                            outline: 'none',
                          },
                        },
                        'Save Cart'
                      ),
                      r.a.createElement('br', null),
                      r.a.createElement(
                        le.a,
                        {
                          variant: 'contained',
                          className: e.button,
                          startIcon: r.a.createElement(re.a, null),
                          onClick: function (e) {
                            return h();
                          },
                          style: {
                            fontFamily: 'Mulish',
                            color: 'white',
                            backgroundColor: '#DC3545',
                            border: 'none',
                            outline: 'none',
                          },
                        },
                        'Clear Cart'
                      ),
                      r.a.createElement(
                        F.b,
                        { to: '/checkout', style: { textDecoration: 'none' } },
                        r.a.createElement(
                          le.a,
                          {
                            variant: 'contained',
                            className: e.button,
                            startIcon: r.a.createElement(ie.a, null),
                            style: {
                              fontFamily: 'Mulish',
                              color: 'white',
                              backgroundColor: '#007BFF',
                              border: 'none',
                              outline: 'none',
                            },
                          },
                          'Checkout'
                        )
                      )
                    )
                  )
                )
              : r.a.createElement('img', {
                  className: 'empty',
                  src: a(167),
                  alt: 'empty',
                })
          );
        },
        ue =
          (a(168),
          function (e) {
            var t = Object(n.useContext)(u),
              l = t.register,
              c = t.login,
              i = t.userLoaded,
              p = t.isAuthenticated,
              E = Object(n.useContext)(u).loading;
            Object(n.useEffect)(
              function () {
                return E ? v(1) : (h(), v(0));
              },
              [E]
            ),
              Object(n.useEffect)(
                function () {
                  return (
                    !p && localStorage.getItem('token') && (v(i()), v(0)),
                    p
                      ? !0 === p
                        ? (v(1), e.history.push('/'), T(), v(0), v(0))
                        : void 0
                      : v(0)
                  );
                },
                [p, e.history]
              );
            var g = Object(n.useState)(1),
              f = Object(m.a)(g, 2),
              y = f[0],
              v = f[1],
              b = (Object(n.useContext)(j).Loader, Object(n.useState)(0)),
              C = Object(m.a)(b, 2),
              O = C[0],
              w = C[1],
              x = Object(n.useState)({
                name: '',
                password: '',
                confirmPassword: '',
                email: '',
                number: null,
              }),
              N = Object(m.a)(x, 2),
              I = N[0],
              k = N[1],
              S = Object(n.useState)({ email: '', password: '' }),
              _ = Object(m.a)(S, 2),
              B = _[0],
              Q = _[1];
            Object(n.useEffect)(function () {
              v(1),
                document.addEventListener('load', function () {
                  v(0);
                });
            }, []);
            var R = (function () {
              var e = Object(o.a)(
                s.a.mark(function e(t) {
                  return s.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t.preventDefault(), v(1), v(c(B));
                        case 3:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
            Object(n.useEffect)(function () {
              if (!localStorage.getItem('token')) return v(0);
            });
            var T = Object(n.useContext)(A).loadCart,
              D = function (e) {
                k(
                  Object(d.a)(
                    Object(d.a)({}, I),
                    {},
                    { [e.target.name]: e.target.value }
                  )
                );
              },
              L = function (e) {
                Q(
                  Object(d.a)(
                    Object(d.a)({}, B),
                    {},
                    { [e.target.name]: e.target.value }
                  )
                );
              },
              P = Object(n.useState)('password'),
              G = Object(m.a)(P, 2),
              M = G[0],
              q =
                (G[1],
                function (e) {
                  w(function (e) {
                    return 1 ^ e;
                  });
                }),
              U = (function () {
                var e = Object(o.a)(
                  s.a.mark(function e(t) {
                    return s.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            t.preventDefault(),
                              !I.name ||
                                !I.password ||
                                !I.confirmPassword ||
                                !I.email ||
                                I.number,
                              l(I);
                          case 3:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })();
            return r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(X, null),
              1 === y
                ? r.a.createElement(
                    'div',
                    {
                      style: {
                        width: '100%',
                        display: 'flex',
                        height: '100vh',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: '23444898429',
                      },
                    },
                    r.a.createElement('img', { src: a(52), alt: 'loader' })
                  )
                : r.a.createElement(
                    'div',
                    {
                      className:
                        0 === O ? 'container1' : 'container1 sign-up-mode',
                    },
                    r.a.createElement(
                      'div',
                      {
                        className: 'forms-container',
                        style: { width: '100%' },
                      },
                      r.a.createElement(
                        'div',
                        { className: 'signin-signup' },
                        r.a.createElement(
                          'form',
                          { className: 'sign-in-form', onSubmit: R },
                          r.a.createElement(
                            'h2',
                            {
                              className: 'title',
                              style: { fontFamily: 'poppins' },
                            },
                            'Sign in'
                          ),
                          r.a.createElement(
                            'div',
                            { className: 'input-field' },
                            r.a.createElement('i', {
                              className: 'fas fa-user',
                            }),
                            r.a.createElement('input', {
                              name: 'email',
                              type: 'email',
                              placeholder: 'Email',
                              onChange: L,
                            })
                          ),
                          r.a.createElement(
                            'div',
                            { className: 'input-field' },
                            r.a.createElement('i', {
                              className: 'fas fa-lock',
                            }),
                            r.a.createElement('input', {
                              name: 'password',
                              type: M,
                              placeholder: 'Password',
                              onChange: L,
                            })
                          ),
                          r.a.createElement('input', {
                            type: 'submit',
                            value: 'Login',
                            className: 'btn solid',
                          }),
                          r.a.createElement(
                            F.b,
                            { to: '/forget', style: { fontFamily: 'Poppins' } },
                            'Forgot Password?'
                          )
                        ),
                        r.a.createElement(
                          'form',
                          { onSubmit: U, class: 'sign-up-form' },
                          r.a.createElement(
                            'h2',
                            {
                              className: 'title',
                              style: { fontFamily: 'poppins' },
                            },
                            'Sign up'
                          ),
                          r.a.createElement(
                            'div',
                            { className: 'input-field' },
                            r.a.createElement('i', {
                              className: 'fas fa-user',
                            }),
                            r.a.createElement('input', {
                              onChange: D,
                              value: I.name,
                              name: 'name',
                              type: 'text',
                              placeholder: 'Name',
                            })
                          ),
                          r.a.createElement(
                            'div',
                            { className: 'input-field' },
                            r.a.createElement('i', {
                              className: 'fas fa-envelope',
                            }),
                            r.a.createElement('input', {
                              onChange: D,
                              value: I.email,
                              name: 'email',
                              type: 'email',
                              placeholder: 'Email',
                            })
                          ),
                          r.a.createElement(
                            'div',
                            { className: 'input-field' },
                            r.a.createElement('i', {
                              className: 'fas fa-phone',
                            }),
                            r.a.createElement('input', {
                              onChange: D,
                              value: I.number,
                              type: 'text',
                              name: 'number',
                              placeholder: 'Contact Number',
                            })
                          ),
                          r.a.createElement(
                            'div',
                            { className: 'input-field' },
                            r.a.createElement('i', {
                              className: 'fas fa-lock',
                            }),
                            r.a.createElement('input', {
                              onChange: D,
                              value: I.password,
                              name: 'password',
                              type: 'password',
                              placeholder: 'Password',
                            })
                          ),
                          r.a.createElement(
                            'div',
                            { className: 'input-field' },
                            r.a.createElement('i', {
                              className: 'fas fa-lock',
                            }),
                            r.a.createElement('input', {
                              onChange: D,
                              value: I.confirmPassword,
                              type: 'password',
                              name: 'confirmPassword',
                              placeholder: 'Confirm Password',
                            })
                          ),
                          r.a.createElement('input', {
                            type: 'submit',
                            class: 'btn',
                            value: 'Sign up',
                          })
                        )
                      )
                    ),
                    r.a.createElement(
                      'div',
                      { className: 'panels-container' },
                      r.a.createElement(
                        'div',
                        { className: 'panel left-panel' },
                        r.a.createElement(
                          'div',
                          { className: 'content' },
                          r.a.createElement(
                            'h3',
                            { style: { fontFamily: 'poppins' } },
                            'New here ?'
                          ),
                          r.a.createElement(
                            'p',
                            { style: { fontFamily: 'poppins' } },
                            'Then Sign Up and Start Ordering!'
                          ),
                          r.a.createElement(
                            'button',
                            {
                              className: 'btn transparent',
                              id: 'sign-up-btn',
                              onClick: q,
                              style: { fontFamily: 'poppins' },
                            },
                            'Sign up'
                          )
                        ),
                        r.a.createElement('img', {
                          src: a(169),
                          className: 'image',
                          alt: '',
                        })
                      ),
                      r.a.createElement(
                        'div',
                        { className: 'panel right-panel' },
                        r.a.createElement(
                          'div',
                          { className: 'content' },
                          r.a.createElement(
                            'h3',
                            { style: { fontFamily: 'poppins' } },
                            'One of us ?'
                          ),
                          r.a.createElement(
                            'p',
                            { style: { fontFamily: 'poppins' } },
                            'Then Sign In and get Started!'
                          ),
                          r.a.createElement(
                            'button',
                            {
                              className: 'btn transparent',
                              onClick: q,
                              id: 'sign-in-btn',
                              style: { fontFamily: 'poppins' },
                            },
                            'Sign in'
                          )
                        ),
                        r.a.createElement('img', {
                          src: a(170),
                          className: 'image',
                          alt: '',
                        })
                      )
                    )
                  )
            );
          }),
        de = function (e) {
          var t = Object(n.useContext)(u),
            a = t.logout,
            l = t.isAuthenticated,
            c = t.user,
            i = t.verified,
            s = Object(n.useState)(1),
            o = Object(m.a)(s, 2),
            d = o[0],
            p = o[1];
          Object(n.useEffect)(
            function () {
              function e() {
                window.scrollTo(0, 0);
              }
              return (
                1 == d &&
                  (console.log('yes'), window.addEventListener('scroll', e)),
                window.removeEventListener('scroll', e)
              );
            },
            [d]
          );
          return r.a.createElement(
            'div',
            {
              className:
                0 === e.display
                  ? 'mainSide'
                  : 'mainSide minus animate__animated animate__fadeInRight',
            },
            r.a.createElement(
              'div',
              { className: 'left' },
              l
                ? r.a.createElement(
                    'div',
                    { className: 'name', style: { fontFamily: 'Mulish' } },
                    'Hey, ',
                    c.name,
                    r.a.createElement('br', null)
                  )
                : '',
              r.a.createElement(
                'ul',
                { style: { fontFamily: 'Mulish' } },
                r.a.createElement(
                  'li',
                  { onClick: e.changeDisplay },
                  ' ',
                  r.a.createElement(
                    F.b,
                    {
                      style: { textDecoration: 'none', color: 'white' },
                      to: '/',
                    },
                    'Home'
                  )
                ),
                l
                  ? r.a.createElement(
                      'li',
                      {
                        style: { cursor: 'pointer' },
                        onClick: function (t) {
                          a(), e.changeDisplay();
                        },
                      },
                      'Logout'
                    )
                  : r.a.createElement(
                      'li',
                      {
                        onClick: function (t) {
                          p(0), e.changeDisplay();
                        },
                      },
                      r.a.createElement(
                        F.b,
                        {
                          style: { textDecoration: 'none', color: 'white' },
                          to: '/auth',
                        },
                        'SignUp/Login'
                      )
                    ),
                l &&
                  i &&
                  r.a.createElement(
                    'li',
                    { onClick: e.changeDisplay },
                    r.a.createElement(
                      F.b,
                      {
                        style: { textDecoration: 'none', color: 'white' },
                        to: '/addProduct',
                      },
                      'Add Items'
                    )
                  ),
                l && i
                  ? r.a.createElement(
                      'li',
                      { onClick: e.changeDisplay },
                      ' ',
                      r.a.createElement(
                        F.b,
                        {
                          style: { textDecoration: 'none', color: 'white' },
                          to: '/deleteitems',
                        },
                        'Delete Items'
                      )
                    )
                  : '',
                l &&
                  i &&
                  r.a.createElement(
                    'li',
                    { onClick: e.changeDisplay },
                    ' ',
                    r.a.createElement(
                      F.b,
                      {
                        style: { textDecoration: 'none', color: 'white' },
                        to: '/order',
                      },
                      'Orders'
                    )
                  ),
                r.a.createElement(
                  'li',
                  { onClick: e.changeDisplay },
                  ' ',
                  r.a.createElement(
                    F.b,
                    {
                      style: { textDecoration: 'none', color: 'white' },
                      to: '/contact',
                    },
                    'Contact Us'
                  )
                ),
                l &&
                  i &&
                  r.a.createElement(
                    'li',
                    { onClick: e.changeDisplay },
                    ' ',
                    r.a.createElement(
                      F.b,
                      {
                        style: { textDecoration: 'none', color: 'white' },
                        to: '/cart',
                      },
                      'Cart'
                    )
                  )
              )
            ),
            r.a.createElement(
              'div',
              { className: 'right', onClick: e.changeDisplay },
              r.a.createElement('i', {
                class: 'fa fa-times',
                'aria-hidden': 'true',
                style: { fontSize: '1.5rem' },
              })
            )
          );
        },
        pe = a(83),
        Ee = function (e) {
          var t = e.component,
            a = Object(pe.a)(e, ['component']),
            l = Object(n.useContext)(u),
            c = l.isAuthenticated,
            i = (l.loading, l.verified);
          return r.a.createElement(
            Z.b,
            Object.assign({}, a, {
              render: function (e) {
                return c
                  ? i
                    ? r.a.createElement(t, e)
                    : r.a.createElement(Z.a, { to: '/verify' })
                  : r.a.createElement(Z.a, { to: '/auth' });
              },
            })
          );
        },
        ge = function (e) {
          var t = e.item,
            a = (e.loading, e.setLoading, e.state, e.display, e.setDisplay),
            n = e.increaseCount,
            l = (function () {
              var e = Object(o.a)(
                s.a.mark(function e(r) {
                  var l, c, i, o;
                  return s.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (l = { name: t.name }),
                              (c = {
                                headers: { 'Content-Type': 'application/json' },
                              }),
                              (e.prev = 2),
                              (e.next = 5),
                              g.a.post('/api/admin/items', l, c)
                            );
                          case 5:
                            e.sent,
                              a({
                                val: 1,
                                msg: 'Successfully Deleted',
                                color: 'darkGreen',
                              }),
                              n(),
                              (i = setTimeout(function () {
                                a({ val: 0, msg: '', type: '', color: '' }),
                                  clearTimeout(i);
                              }, 3e3)),
                              (e.next = 15);
                            break;
                          case 11:
                            (e.prev = 11),
                              (e.t0 = e.catch(2)),
                              a({
                                val: 1,
                                msg: e.t0.response.data,
                                type: 'fail',
                                color: 'red',
                              }),
                              (o = setTimeout(function () {
                                a({ val: 0, msg: '', type: '', color: '' }),
                                  clearTimeout(o);
                              }, 3e3));
                          case 15:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 11]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              'div',
              {
                className: 'itemlist animate__animated animate__fadeIn',
                style: {
                  borderBottom: '1px solid #007bff',
                  margin: '0 auto',
                  borderRadius: '0',
                },
              },
              r.a.createElement(
                'div',
                { className: 'img_show2' },
                r.a.createElement('img', {
                  style: { width: '100%', height: '90%', borderRadius: '25%' },
                  src: t.url,
                  alt: 'food',
                })
              ),
              r.a.createElement(
                'div',
                { className: 'details' },
                r.a.createElement(
                  'h2',
                  { style: { fontFamily: 'Mulish', fontWeight: 'bold' } },
                  t.name
                ),
                r.a.createElement(
                  'button',
                  { className: 'btn1', onClick: l },
                  r.a.createElement('i', {
                    class: 'fas fa-trash',
                    style: { color: 'red', fontSize: '2rem' },
                  })
                )
              )
            )
          );
        },
        fe = function () {
          var e = Object(n.useState)(1),
            t = Object(m.a)(e, 2),
            l = t[0],
            c = t[1],
            i = Object(n.useContext)(j).Loader;
          Object(n.useEffect)(function () {
            console.log(p);
          });
          var u = Object(n.useState)({ val: 0, msg: '', type: '', color: '' }),
            d = Object(m.a)(u, 2),
            p = d[0],
            E = d[1],
            f = Object(n.useState)(null),
            h = Object(m.a)(f, 2),
            y = h[0],
            A = h[1],
            v = (function () {
              var e = Object(o.a)(
                s.a.mark(function e() {
                  var t, a, n;
                  return s.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = {
                              headers: { 'Content-Type': 'multipart/formdata' },
                            }),
                            c(1),
                            (e.next = 4),
                            g.a.get('/api/admin/items', t)
                          );
                        case 4:
                          (a = e.sent),
                            (n = a.data).sort(function (e, t) {
                              return e.name > t.name ? 1 : -1;
                            }),
                            console.log(n),
                            A(n),
                            c(0);
                        case 10:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            b = function () {
              x(w + 1);
            },
            C = Object(n.useState)(0),
            O = Object(m.a)(C, 2),
            w = O[0],
            x = O[1];
          Object(n.useEffect)(
            function () {
              c(1), v(), c(0);
            },
            [w]
          );
          var N = function () {
            return r.a.createElement('img', {
              style: {
                width: '50vw',
                display: 'block',
                margin: 'auto',
                height: '80%',
                padding: '1 rem 0.8rem',
              },
              className: 'noItem',
              src: a(102),
              alt: 'noItem',
            });
          };
          return r.a.createElement(
            r.a.Fragment,
            null,
            1 === p.val
              ? r.a.createElement(
                  H.a,
                  {
                    className: 'animate__animated animate__fadeInRight',
                    style: { position: 'fixed', right: '0', zIndex: '9899899' },
                  },
                  r.a.createElement(
                    H.a.Header,
                    {
                      style: {
                        background: p.color,
                        color: 'white',
                        fontWeight: 'bold',
                      },
                    },
                    r.a.createElement(
                      'strong',
                      { className: 'mr-auto' },
                      'fail' === p.type ? 'Fail' : 'Success'
                    )
                  ),
                  r.a.createElement(H.a.Body, null, p.msg)
                )
              : '',
            y && 0 !== y.length && 1 != l
              ? y && 0 !== y.length
                ? r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      'div',
                      { className: 'deleteTitle' },
                      r.a.createElement('h1', null, 'Delete Items'),
                      r.a.createElement(
                        'div',
                        null,
                        r.a.createElement('img', {
                          src: 'https://image.flaticon.com/icons/svg/3221/3221897.svg',
                          style: { height: '15vh' },
                        })
                      )
                    ),
                    y.map(function (e, t) {
                      return r.a.createElement(ge, {
                        loading: l,
                        setLoading: c,
                        increaseCount: b,
                        dispaly: p,
                        setDisplay: E,
                        key: t,
                        item: e,
                        state: y,
                      });
                    })
                  )
                : r.a.createElement(N, null)
              : r.a.createElement(i, null)
          );
        },
        he = a(119),
        ye = a.n(he),
        Ae = a(228),
        ve =
          (Object(ae.a)(function (e) {
            return {
              root: {
                '& .MuiTextField-root': { margin: e.spacing(1), width: '25ch' },
              },
            };
          }),
          function () {
            var e = Object(n.useState)({ val: 0, msg: '', type: '' }),
              t = Object(m.a)(e, 2),
              a = t[0],
              l = t[1],
              c = Object(n.useContext)(j).Loader,
              i = Object(n.useState)(0),
              u = Object(m.a)(i, 2),
              p = u[0],
              E = u[1],
              f = Object(n.useState)({ name: '', price: 0, type: 'veg' }),
              h = Object(m.a)(f, 2),
              y = h[0],
              A = h[1],
              v = function (e, t) {
                return (
                  'Success' === a.type
                    ? 'animate__animated animate__fadeRight'
                    : 'Fail' === a.type && 'animate__animated animate__shakeX',
                  r.a.createElement(
                    H.a,
                    {
                      style: {
                        position: 'fixed',
                        right: '0',
                        zIndex: '9899899',
                      },
                      className:
                        'red' === a.type
                          ? 'animate__animated animate__shakeX class1'
                          : 'animate__animated animate__fadeRight',
                    },
                    r.a.createElement(
                      H.a.Header,
                      {
                        style: {
                          background: a.type,
                          color: 'white',
                          fontWeight: 'bold',
                        },
                      },
                      r.a.createElement(
                        'strong',
                        { className: 'mr-auto' },
                        'darkGreen' === a.type ? 'Success' : 'Fail'
                      )
                    ),
                    r.a.createElement(H.a.Body, null, a.msg)
                  )
                );
              },
              b = Object(n.useState)(),
              C = Object(m.a)(b, 2),
              O = C[0],
              w = C[1],
              x = function (e) {
                A(
                  Object(d.a)(
                    Object(d.a)({}, y),
                    {},
                    { [e.target.name]: e.target.value }
                  )
                );
              },
              N = (function () {
                var e = Object(o.a)(
                  s.a.mark(function e(t) {
                    var a, n, r, c, i;
                    return s.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                (t.preventDefault(),
                                (a = new FormData()).append('productImage', O),
                                a.append('name', y.name),
                                a.append('price', y.price),
                                a.append('type', y.type),
                                (n = {
                                  headers: {
                                    'Content-Type': 'multipart/formdata',
                                  },
                                }),
                                (e.prev = 7),
                                O && y.name && y.price && y.type)
                              ) {
                                e.next = 12;
                                break;
                              }
                              return (
                                l({
                                  val: 1,
                                  msg: 'Enter All Fields',
                                  type: 'red',
                                }),
                                (r = setTimeout(function () {
                                  l({ val: 0, msg: '', type: '' }),
                                    clearTimeout(r);
                                }, 3e3)),
                                e.abrupt('return')
                              );
                            case 12:
                              return (
                                console.log(y),
                                E(1),
                                (e.next = 16),
                                g.a.post('/api/admin/upload', a, n)
                              );
                            case 16:
                              e.sent,
                                l({
                                  val: 1,
                                  msg: 'SuccessFully Added',
                                  type: 'darkGreen',
                                }),
                                (c = setTimeout(function () {
                                  l({ val: 0, msg: '', type: '' }),
                                    clearTimeout(c);
                                }, 3e3)),
                                E(0),
                                (e.next = 27);
                              break;
                            case 22:
                              (e.prev = 22),
                                (e.t0 = e.catch(7)),
                                l({
                                  val: 1,
                                  msg: e.t0.response.data,
                                  type: 'red',
                                }),
                                (i = setTimeout(function () {
                                  l({ val: 0, msg: '', type: '' }),
                                    clearTimeout(i);
                                }, 3e3)),
                                E(0);
                            case 27:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[7, 22]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })();
            return r.a.createElement(
              r.a.Fragment,
              null,
              a.val ? r.a.createElement(v, null) : '',
              1 == p
                ? r.a.createElement('div', null, r.a.createElement(c, null))
                : r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      'h3',
                      { style: { marginTop: '6vh', fontFamily: 'Mulish' } },
                      'Add a Dish',
                      ' ',
                      r.a.createElement('img', {
                        src: 'https://image.flaticon.com/icons/svg/2917/2917633.svg',
                        style: { height: '10vh' },
                      })
                    ),
                    r.a.createElement(
                      'div',
                      {
                        className:
                          'forget animate__animated animate__lightSpeedInLeft',
                      },
                      r.a.createElement(
                        Ae.a,
                        {
                          style: { padding: '0rem', flex: '2' },
                          onSubmit: N,
                          encType: 'multipart/form-data',
                        },
                        r.a.createElement(
                          Ae.a.Group,
                          { controlId: 'formBasicEmail' },
                          r.a.createElement(Ae.a.Control, {
                            type: 'text',
                            name: 'name',
                            placeholder: 'Item Name',
                            style: { width: '17rem' },
                            onChange: x,
                          })
                        ),
                        r.a.createElement(
                          Ae.a.Group,
                          { controlId: 'formBasicPassword' },
                          r.a.createElement(
                            U.a,
                            null,
                            r.a.createElement(
                              U.a.Prepend,
                              null,
                              r.a.createElement(U.a.Text, null, '\u20b9')
                            ),
                            r.a.createElement(Ae.a.Control, {
                              type: 'number',
                              name: 'price',
                              placeholder: 'Price',
                              style: { width: '15rem' },
                              onChange: x,
                            })
                          )
                        ),
                        r.a.createElement(
                          'div',
                          {
                            className: 'veg',
                            style: { fontFamily: 'Poppins' },
                          },
                          r.a.createElement(
                            'span',
                            { style: { fontWeight: '550' } },
                            'Type'
                          ),
                          r.a.createElement('br', null),
                          r.a.createElement('input', {
                            type: 'radio',
                            id: 'veg',
                            name: 'type',
                            value: 'Veg',
                            checked: 'checked',
                            onChange: x,
                          }),
                          ' ',
                          r.a.createElement(
                            'label',
                            { htmlFor: 'veg' },
                            'Veg',
                            ' ',
                            r.a.createElement('img', {
                              src: 'https://img.icons8.com/color/22/000000/vegetarian-food-symbol.png',
                              alt: 'Veg',
                            })
                          ),
                          r.a.createElement('br', null),
                          r.a.createElement('input', {
                            type: 'radio',
                            id: 'nonVeg',
                            name: 'type',
                            value: 'nonVeg',
                            onChange: x,
                            style: { padding: '1rem' },
                          }),
                          ' ',
                          r.a.createElement(
                            'label',
                            { htmlFor: 'nonVeg' },
                            ' ',
                            'Non-Veg',
                            ' ',
                            r.a.createElement('img', {
                              src: 'https://img.icons8.com/color/22/000000/non-vegetarian-food-symbol.png',
                              alt: 'Veg',
                            })
                          ),
                          r.a.createElement('br', null)
                        ),
                        r.a.createElement(
                          Ae.a.Label,
                          {
                            style: {
                              fontFamily: 'Poppins',
                              align: 'left',
                              fontWeight: '550',
                              paddingTop: '0.7rem',
                            },
                          },
                          'Upload Image ',
                          r.a.createElement(ye.a, null)
                        ),
                        r.a.createElement('input', {
                          type: 'file',
                          name: 'productImage',
                          id: 'exampleFormControlFile1',
                          label: 'Upload Image',
                          style: { fontFamily: 'Poppins' },
                          onChange: function (e) {
                            var t = e.target.files[0];
                            w(t);
                          },
                        }),
                        r.a.createElement(
                          D.a,
                          {
                            className: 'btn btn-primary',
                            variant: 'primary',
                            type: 'submit',
                            style: {
                              borderRadius: '1vh',
                              fontFamily: 'Poppins',
                              textTransform: 'capitalize',
                            },
                          },
                          'Save Item'
                        )
                      )
                    )
                  )
            );
          }),
        be = a(219),
        Ce = function () {
          return r.a.createElement(
            be.a,
            { fixed: !0, style: { padding: '3rem' } },
            r.a.createElement('img', {
              src: a(171),
              alt: 'payment_fail',
              style: { height: '15vh' },
            }),
            r.a.createElement(
              'h2',
              {
                style: {
                  fontFamily: 'Mulish',
                  paddingTop: '1.5rem',
                  paddingBottom: '2rem',
                },
              },
              'Ohh! Snap'
            ),
            r.a.createElement(
              'h5',
              { style: { fontFamily: 'Poppins' } },
              'There was a problem in processing your order. Please try again after some time. If the problem still persists contact us through the Contact Us tab in the navigation bar.'
            )
          );
        },
        Oe = a(120),
        we = a.n(Oe),
        je = a(67),
        xe = a.n(je),
        Ne = function (e) {
          var t = Object(n.useState)(''),
            a = Object(m.a)(t, 2),
            l = a[0],
            c = a[1],
            i = Object(n.useState)({ val: 0, msg: '', type: '' }),
            u = Object(m.a)(i, 2),
            d = u[0],
            p = u[1],
            E = function (e, t) {
              return r.a.createElement(
                H.a,
                { style: { position: 'fixed', right: '0', zIndex: '9899899' } },
                r.a.createElement(
                  H.a.Header,
                  {
                    style: {
                      background: d.type,
                      color: 'white',
                      fontWeight: 'bold',
                    },
                  },
                  r.a.createElement(
                    'strong',
                    { className: 'mr-auto' },
                    'darkGreen' === d.type ? 'Success' : 'Fail'
                  )
                ),
                r.a.createElement(H.a.Body, null, d.msg)
              );
            },
            f = (function () {
              var e = Object(o.a)(
                s.a.mark(function e(t) {
                  var a, n, r, c, i;
                  return s.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              (a = {
                                headers: { 'Content-Type': 'application/json' },
                              }),
                              (n = { email: l }),
                              (e.prev = 3),
                              (e.next = 6),
                              g.a.post('/api/forget', n, a)
                            );
                          case 6:
                            (r = e.sent),
                              p({ val: 1, msg: r.data, type: 'darkGreen' }),
                              (c = setTimeout(function () {
                                p({ val: 0, msg: '', type: '' }),
                                  clearTimeout(c);
                              }, 3e3)),
                              (e.next = 15);
                            break;
                          case 11:
                            (e.prev = 11),
                              (e.t0 = e.catch(3)),
                              p({
                                val: 1,
                                msg: e.t0.response.data,
                                type: 'red',
                              }),
                              (i = setTimeout(function () {
                                p({ val: 0, msg: '', type: '' }),
                                  clearTimeout(i);
                              }, 3e3));
                          case 15:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[3, 11]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return r.a.createElement(
            r.a.Fragment,
            null,
            d.val ? r.a.createElement(E, { type: d.type }) : '',
            r.a.createElement(
              'h4',
              { style: { marginTop: '6vh', fontFamily: 'Mulish' } },
              'Forgot your Password? ',
              r.a.createElement('img', {
                src: 'https://image.flaticon.com/icons/svg/1000/1000999.svg',
                alt: 'forgot',
                style: { height: '2.5rem' },
              })
            ),
            r.a.createElement(
              'div',
              { className: 'forget' },
              r.a.createElement(
                'p',
                null,
                r.a.createElement(we.a, {
                  style: { fontSize: '1.2rem', color: 'grey' },
                }),
                r.a.createElement(
                  'span',
                  { style: { fontFamily: 'Poppins', fontSize: '0.95rem' } },
                  ' ',
                  "Enter your email address and we'll send you a link to reset your password."
                )
              ),
              r.a.createElement('br', null),
              r.a.createElement(
                Ae.a,
                { onSubmit: f },
                r.a.createElement(
                  Ae.a.Group,
                  { controlId: 'formBasicEmail' },
                  r.a.createElement(
                    Ae.a.Label,
                    {
                      style: {
                        fontFamily: 'Poppins',
                        align: 'left',
                        fontWeight: '550',
                      },
                    },
                    'Email Address ',
                    r.a.createElement(xe.a, null)
                  ),
                  r.a.createElement(Ae.a.Control, {
                    type: 'email',
                    style: { width: '17rem', align: 'center', padding: '0' },
                    placeholder: 'e.g. email@domain.com',
                    onChange: function (e) {
                      c(e.target.value);
                    },
                  })
                ),
                r.a.createElement(
                  D.a,
                  {
                    className: 'btn btn-primary',
                    variant: 'primary',
                    type: 'submit',
                    style: {
                      borderRadius: '1vh',
                      textTransform: 'capitalize',
                      fontFamily: 'Mulish',
                      align: 'center',
                    },
                  },
                  'Reset Password'
                )
              )
            )
          );
        },
        Ie = function (e) {
          var t = e.match.params.code,
            a = Object(n.useState)({ val: 0, msg: '', type: '' }),
            l = Object(m.a)(a, 2),
            c = l[0],
            i = l[1],
            u = function (e, t) {
              return r.a.createElement(
                H.a,
                {
                  className:
                    'red' === t
                      ? 'animate_animated animate_shakeX'
                      : 'animate_animated animate_fadeInRight animate_slow',
                  style: { position: 'fixed', right: '0', zIndex: '9899899' },
                },
                r.a.createElement(
                  H.a.Header,
                  {
                    style: {
                      background: c.type,
                      color: 'white',
                      fontWeight: 'bold',
                    },
                  },
                  r.a.createElement(
                    'strong',
                    { className: 'mr-auto' },
                    'Success'
                  )
                ),
                r.a.createElement(H.a.Body, null, c.msg)
              );
            },
            p = Object(n.useState)({ password: '', confirmPassword: '' }),
            E = Object(m.a)(p, 2),
            f = E[0],
            h = E[1],
            y = (function () {
              var a = Object(o.a)(
                s.a.mark(function a(n) {
                  var r, l, c, o, m;
                  return s.a.wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (
                              (n.preventDefault(),
                              f.password !== f.confirmPassword ||
                                !f.password ||
                                !f.confirmPassword)
                            ) {
                              a.next = 18;
                              break;
                            }
                            return (
                              n.preventDefault(),
                              (r = {
                                headers: { 'Content-Type': 'application/json' },
                              }),
                              (l = { code: t, password: f.password }),
                              (a.prev = 5),
                              (a.next = 8),
                              g.a.post('/api/reset', l, r)
                            );
                          case 8:
                            200 == a.sent.status &&
                              (i({
                                val: 1,
                                msg: 'Password Successfully Changed',
                                type: 'darkGreen',
                              }),
                              (c = setTimeout(function () {
                                i({ val: 0, msg: '', type: '' }),
                                  e.history.push('/'),
                                  clearTimeout(c);
                              }, 3e3))),
                              (a.next = 16);
                            break;
                          case 12:
                            (a.prev = 12),
                              (a.t0 = a.catch(5)),
                              i({
                                val: 1,
                                msg: 'Password should be combination of one uppercase , one lower case, one special char, one digit and min 8 , max 20 char long',
                                type: 'red',
                              }),
                              (o = setTimeout(function () {
                                i({ val: 0, msg: '', type: '' }),
                                  clearTimeout(o);
                              }, 3e3));
                          case 16:
                            a.next = 20;
                            break;
                          case 18:
                            i({
                              val: 1,
                              msg: 'Fields Should Match',
                              type: 'red',
                            }),
                              (m = setTimeout(function () {
                                i({ val: 0, msg: '', type: '' }),
                                  clearTimeout(m);
                              }, 3e3));
                          case 20:
                          case 'end':
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[5, 12]]
                  );
                })
              );
              return function (e) {
                return a.apply(this, arguments);
              };
            })(),
            A = function (e) {
              h(
                Object(d.a)(
                  Object(d.a)({}, f),
                  {},
                  { [e.target.name]: e.target.value }
                )
              );
            };
          return (
            Object(n.useEffect)(function () {
              (function () {
                var t = Object(o.a)(
                  s.a.mark(function t() {
                    var a;
                    return s.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (a = e.match.params.code),
                                (t.next = 4),
                                g.a.get('/api/reset?code=' + a, a, {
                                  headers: {
                                    'Content-Type': 'application/json',
                                  },
                                })
                              );
                            case 4:
                              t.sent, (t.next = 11);
                              break;
                            case 7:
                              (t.prev = 7),
                                (t.t0 = t.catch(0)),
                                console.log(t.t0.response),
                                e.history.push('/');
                            case 11:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 7]]
                    );
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })()();
            }, []),
            r.a.createElement(
              r.a.Fragment,
              null,
              c.val ? r.a.createElement(u, { type: c.type }) : '',
              r.a.createElement(
                'h3',
                { style: { marginTop: '6vh', fontFamily: 'Mulish' } },
                'Reset Password'
              ),
              r.a.createElement(
                'div',
                { className: 'forget' },
                r.a.createElement(
                  Ae.a,
                  { onSubmit: y },
                  r.a.createElement(
                    Ae.a.Group,
                    { controlId: 'formBasicEmail' },
                    r.a.createElement(
                      Ae.a.Label,
                      {
                        style: {
                          fontFamily: 'Poppins',
                          align: 'left',
                          fontWeight: '550',
                        },
                      },
                      'Password'
                    ),
                    r.a.createElement(Ae.a.Control, {
                      type: 'password',
                      value: f.password,
                      name: 'password',
                      style: { width: '20rem' },
                      placeholder: 'Password',
                      onChange: A,
                    }),
                    r.a.createElement(
                      Ae.a.Text,
                      { className: 'text-muted' },
                      'Password And Confirm Password Should Match.'
                    )
                  ),
                  r.a.createElement(
                    Ae.a.Group,
                    { controlId: 'formBasicPassword' },
                    r.a.createElement(
                      Ae.a.Label,
                      {
                        style: {
                          fontFamily: 'Poppins',
                          align: 'left',
                          fontWeight: '550',
                        },
                      },
                      'Confirm Password'
                    ),
                    r.a.createElement(Ae.a.Control, {
                      name: 'confirmPassword',
                      value: f.confirmPassword,
                      type: 'password',
                      onChange: A,
                      style: { width: '20rem' },
                      placeholder: 'Confirm Password',
                    })
                  ),
                  r.a.createElement(
                    D.a,
                    {
                      variant: 'primary',
                      type: 'submit',
                      style: {
                        borderRadius: '1vh',
                        width: '20rem',
                        fontFamily: 'Poppins',
                        textTransform: 'capitalize',
                      },
                    },
                    'Reset Password'
                  )
                )
              )
            )
          );
        },
        ke = a(234),
        Se = a(230),
        Fe = a(220),
        _e = a(235),
        Be = a(226),
        Qe = Object(ae.a)({
          root: {
            background: function (e) {
              return 'red' === e.color
                ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
                : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)';
            },
            border: 0,
            borderRadius: 3,
            boxShadow: function (e) {
              return 'red' === e.color
                ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
                : '0 3px 5px 2px rgba(33, 203, 243, .3)';
            },
            color: 'white',
            height: 48,
            padding: '0 30px',
            margin: 8,
          },
        });
      function Re(e) {
        e.color;
        var t = Object(pe.a)(e, ['color']),
          a = Qe(e);
        return r.a.createElement(le.a, Object.assign({ className: a.root }, t));
      }
      var Te = function (e) {
          var t = Object(n.useContext)(A).state,
            a = Object(n.useState)({ val: 0, type: '', msg: '' }),
            l = Object(m.a)(a, 2),
            c = l[0],
            i = l[1],
            p = r.a.useState('Delivery'),
            E = Object(m.a)(p, 2),
            f = E[0],
            h = E[1],
            y = r.a.useState('Online'),
            v = Object(m.a)(y, 2),
            b = v[0],
            C = v[1],
            O = r.a.useState(1),
            w = Object(m.a)(O, 2),
            j = w[0],
            x = w[1],
            N = r.a.useState({
              Address: '',
              Landmark: '',
              City: '',
              Phone: '',
              Zip: '',
            }),
            I = Object(m.a)(N, 2),
            k = I[0],
            S = I[1],
            _ = function () {
              return r.a.createElement(
                H.a,
                {
                  className: 'animate__animated animate__shakeX',
                  style: { position: 'fixed', right: '0', zIndex: '9899899' },
                },
                r.a.createElement(
                  H.a.Header,
                  {
                    style: {
                      background: c.type,
                      color: 'white',
                      fontWeight: 'bold',
                    },
                  },
                  r.a.createElement(
                    'strong',
                    { className: 'mr-auto' },
                    'red' === c.type ? 'Failed' : 'Success'
                  )
                ),
                r.a.createElement(H.a.Body, null, c.msg)
              );
            },
            B = Object(n.useContext)(u).user,
            Q = function (e) {
              S(
                Object(d.a)(
                  Object(d.a)({}, k),
                  {},
                  { [e.target.name]: e.target.value }
                )
              );
            };
          Object(n.useEffect)(
            function () {
              0 === t.items.length && e.history.push('/');
            },
            [e.history, t.items.length]
          ),
            Object(n.useEffect)(
              function () {
                'Take Away' === f && (C(''), 'Delivery' === f && x(50));
              },
              [f]
            );
          var R = (function () {
            var a = Object(o.a)(
              s.a.mark(function a(n) {
                var r, l, c;
                return s.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          if (
                            (n.preventDefault(),
                            (r = {
                              value: f,
                              address: k,
                              payment: b,
                              deliveryCharges: j,
                              txn_amount: t.total_price + j,
                              cart: t,
                              user: B,
                            }),
                            console.log(k),
                            'Delivery' !== f ||
                              ('' != k.Address && '' != k.city && '' != k.zip))
                          ) {
                            a.next = 6;
                            break;
                          }
                          return (
                            i({
                              val: 1,
                              type: 'red',
                              msg: 'Enter Required Fields',
                            }),
                            a.abrupt(
                              'return',
                              setTimeout(function () {
                                i({ val: 0, msg: '', type: '' });
                              }, 3e3)
                            )
                          );
                        case 6:
                          if ('Online' !== b) {
                            a.next = 20;
                            break;
                          }
                          return (
                            (a.prev = 7),
                            console.log(r),
                            (a.next = 11),
                            g.a.post('/api/paytm', r, {
                              headers: { 'Content-Type': 'application/json' },
                            })
                          );
                        case 11:
                          (l = a.sent), document.write(l.data), (a.next = 18);
                          break;
                        case 15:
                          (a.prev = 15),
                            (a.t0 = a.catch(7)),
                            console.log(a.t0.response);
                        case 18:
                          a.next = 31;
                          break;
                        case 20:
                          return (
                            (a.prev = 20),
                            (a.next = 23),
                            g.a.post('/api/orders', r, {
                              headers: { 'Content-Type': 'application/json' },
                            })
                          );
                        case 23:
                          (c = a.sent),
                            console.log(c.data),
                            e.history.push(
                              '/success?orderid=' + c.data.orderid
                            ),
                            (a.next = 31);
                          break;
                        case 28:
                          (a.prev = 28),
                            (a.t1 = a.catch(20)),
                            console.log(a.t1.response);
                        case 31:
                        case 'end':
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [
                    [7, 15],
                    [20, 28],
                  ]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              F.b,
              { className: 'left_align', to: '/cart' },
              r.a.createElement('i', {
                class: 'fa fa-arrow-circle-left',
                style: {
                  marginLeft: '0.3rem',
                  marginTop: '0.5rem',
                  fontSize: '2rem',
                  position: 'fixed',
                  left: '0.3rem',
                },
              })
            ),
            1 === c.val ? r.a.createElement(_, null) : '',
            r.a.createElement(
              'form',
              {
                className: 'paymentForm',
                style: { width: '100%' },
                onSubmit: R,
              },
              r.a.createElement(
                'div',
                { className: 'paymentContainer' },
                r.a.createElement(
                  'div',
                  { className: 'order' },
                  r.a.createElement(
                    'div',
                    { className: 'modeOfDelivery' },
                    r.a.createElement(
                      'h3',
                      { style: { fontWeight: 'bold', fontFamily: 'Kanit' } },
                      ' ',
                      'Mode of Order'
                    ),
                    r.a.createElement(
                      _e.a,
                      { component: 'fieldset' },
                      r.a.createElement(
                        ke.a,
                        {
                          'aria-label': 'gender',
                          name: 'delivery',
                          value: f,
                          onChange: function (e) {
                            h(e.target.value), x('Delivery' !== f ? 1 : 0);
                          },
                        },
                        r.a.createElement(
                          'div',
                          null,
                          r.a.createElement(
                            'span',
                            { className: 'mode' },
                            r.a.createElement(Fe.a, {
                              value: 'Delivery',
                              defaultChecked: !0,
                              control: r.a.createElement(Se.a, null),
                              label: r.a.createElement(
                                'span',
                                { style: { fontFamily: 'Alata' } },
                                'Delivery'
                              ),
                            })
                          )
                        ),
                        r.a.createElement(
                          'div',
                          null,
                          r.a.createElement(Fe.a, {
                            value: 'Takeaway',
                            control: r.a.createElement(Se.a, null),
                            label: r.a.createElement(
                              'span',
                              { style: { fontFamily: 'Alata' } },
                              'Take Away'
                            ),
                          })
                        )
                      )
                    )
                  ),
                  r.a.createElement(
                    'div',
                    {
                      className:
                        'modeOfPayment animate__animated animate__bounceIn',
                    },
                    r.a.createElement(
                      'h3',
                      { style: { fontWeight: 'bold', fontFamily: 'Kanit' } },
                      'Mode of Payment'
                    ),
                    r.a.createElement(
                      _e.a,
                      { component: 'fieldset' },
                      r.a.createElement(
                        ke.a,
                        {
                          'aria-label': 'gender',
                          name: 'payment',
                          value: b,
                          onChange: function (e) {
                            return C(e.target.value);
                          },
                        },
                        r.a.createElement(
                          'div',
                          { style: { fontFamily: 'Alata' } },
                          r.a.createElement(Fe.a, {
                            value: 'Cash on Delivery',
                            control: r.a.createElement(Se.a, null),
                            label: r.a.createElement(
                              'span',
                              { style: { fontFamily: 'Alata' } },
                              'Cash on Delivery'
                            ),
                            style: { fontFamily: 'Alata' },
                          })
                        ),
                        r.a.createElement(
                          'div',
                          null,
                          r.a.createElement(Fe.a, {
                            value: 'Online',
                            control: r.a.createElement(Se.a, null),
                            label: r.a.createElement(
                              'span',
                              { style: { fontFamily: 'Alata' } },
                              'Online'
                            ),
                          })
                        )
                      )
                    )
                  ),
                  'Delivery' === f &&
                    r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        'div',
                        {
                          className:
                            'address animate__animated animate__bounceIn',
                          style: { fontFamily: 'Mulish' },
                        },
                        r.a.createElement(
                          'h3',
                          {
                            style: { fontWeight: 'bold', fontFamily: 'Kanit' },
                          },
                          'Address Details'
                        ),
                        r.a.createElement(Be.a, {
                          id: 'outlined-basic',
                          label: r.a.createElement(
                            'span',
                            { style: { fontFamily: 'Poppins' } },
                            'Address'
                          ),
                          variant: 'outlined',
                          margin: 'normal',
                          name: 'Address',
                          onChange: Q,
                          fullWidth: !0,
                          multiline: !0,
                        }),
                        r.a.createElement(Be.a, {
                          id: 'outlined-basic',
                          label: r.a.createElement(
                            'span',
                            { style: { fontFamily: 'Poppins' } },
                            'Landmark (Optional)'
                          ),
                          variant: 'outlined',
                          size: 'small',
                          name: 'Landmark',
                          margin: 'normal',
                          onChange: Q,
                          fullWidth: !0,
                        }),
                        r.a.createElement(Be.a, {
                          id: 'outlined-basic',
                          label: r.a.createElement(
                            'span',
                            { style: { fontFamily: 'Poppins' } },
                            'City'
                          ),
                          variant: 'outlined',
                          size: 'small',
                          name: 'City',
                          margin: 'normal',
                          onChange: Q,
                        }),
                        r.a.createElement(Be.a, {
                          id: 'outlined-basic',
                          label: r.a.createElement(
                            'span',
                            { style: { fontFamily: 'Poppins' } },
                            'Zip Code'
                          ),
                          variant: 'outlined',
                          name: 'Zip',
                          type: 'Number',
                          size: 'small',
                          margin: 'normal',
                          onChange: Q,
                        }),
                        r.a.createElement(Be.a, {
                          id: 'outlined-basic',
                          label: r.a.createElement(
                            'span',
                            { style: { fontFamily: 'Poppins' } },
                            'Contact Number'
                          ),
                          variant: 'outlined',
                          name: 'Phone',
                          size: 'small',
                          type: 'Number',
                          margin: 'normal',
                          onChange: Q,
                        })
                      )
                    )
                ),
                r.a.createElement(
                  'div',
                  {
                    style: {
                      justifyContent: 'center',
                      flex: '1',
                      fontFamily: 'Mulish',
                      marginTop: '1rem',
                      padding: '0.5rem',
                    },
                    className: 'animate__animated animate__fadeIn',
                  },
                  r.a.createElement(
                    'div',
                    { className: 'checkoutRight' },
                    r.a.createElement('h4', null, 'Order Summary'),
                    r.a.createElement(
                      'h4',
                      null,
                      r.a.createElement(F.b, { to: '/cart' }, 'Edit Cart')
                    )
                  ),
                  r.a.createElement('br', null),
                  r.a.createElement(
                    'div',
                    { className: 'checkoutRight' },
                    r.a.createElement('h6', null, 'Total Items :'),
                    r.a.createElement('h6', null, t.total_quantity)
                  ),
                  0 === j
                    ? r.a.createElement('div', null)
                    : r.a.createElement(
                        'div',
                        { className: 'checkoutRight' },
                        r.a.createElement('h6', null, 'Delivery Charges :'),
                        r.a.createElement(
                          'h6',
                          { className: 'Web Rupee' },
                          ' \u20b9 ',
                          j
                        )
                      ),
                  r.a.createElement(
                    'div',
                    { className: 'checkoutRight' },
                    r.a.createElement('h6', null, 'Total Amount :'),
                    r.a.createElement(
                      'h6',
                      { className: 'Web Rupee' },
                      ' ',
                      '\u20b9 ',
                      t.total_price + j
                    )
                  ),
                  r.a.createElement(
                    Re,
                    { type: 'submit', color: 'blue', style: { width: '100%' } },
                    r.a.createElement(
                      'span',
                      { style: { fontFamily: 'Mulish' } },
                      'ORDER'
                    )
                  ),
                  r.a.createElement(
                    'span',
                    null,
                    'Payments Secured by',
                    '  ',
                    r.a.createElement('img', {
                      src: 'https://img.icons8.com/color/48/000000/paytm.png',
                      alt: 'paytm',
                    }),
                    ' '
                  ),
                  r.a.createElement('br', null),
                  r.a.createElement('img', {
                    src: 'https://image.freepik.com/free-vector/friends-eating-snacks-friendly-people-group-have-dinner-desk-restaurant-cartoon-vector-characters-isolated_53562-7916.jpg',
                    alt: 'design',
                    style: { width: '90%' },
                  })
                )
              )
            )
          );
        },
        De = function (e) {
          var t = Object(n.useState)(0),
            l = Object(m.a)(t, 2),
            c = (l[0], l[1]),
            i =
              (Object(n.useContext)(u).user,
              Object(n.useContext)(j).Loader,
              Object(n.useState)(null)),
            p = Object(m.a)(i, 2),
            E = p[0],
            f = p[1];
          return (
            Object(n.useEffect)(
              function () {
                var t = e.location.search.split('?')[1].split('=')[1];
                (function () {
                  var a = Object(o.a)(
                    s.a.mark(function a() {
                      var n;
                      return s.a.wrap(
                        function (a) {
                          for (;;)
                            switch ((a.prev = a.next)) {
                              case 0:
                                return (
                                  (a.prev = 0),
                                  c(1),
                                  (a.next = 4),
                                  g.a.get('/api/orders?orderid=' + t)
                                );
                              case 4:
                                (n = a.sent),
                                  console.log(n.data),
                                  f(Object(d.a)({}, n.data)),
                                  c(0),
                                  (a.next = 14);
                                break;
                              case 10:
                                (a.prev = 10),
                                  (a.t0 = a.catch(0)),
                                  e.history.push('/dvsjhvdsjhj'),
                                  c(0);
                              case 14:
                              case 'end':
                                return a.stop();
                            }
                        },
                        a,
                        null,
                        [[0, 10]]
                      );
                    })
                  );
                  return function () {
                    return a.apply(this, arguments);
                  };
                })()(),
                  c(0);
              },
              [e.location.search]
            ),
            Object(n.useEffect)(
              function () {
                console.log(E);
              },
              [E]
            ),
            r.a.createElement(
              r.a.Fragment,
              null,
              E
                ? r.a.createElement(
                    r.a.Fragment,
                    null,
                    ' ',
                    r.a.createElement(
                      'div',
                      { className: 'successContainer' },
                      r.a.createElement('img', {
                        src: a(172),
                        alt: 'success',
                        style: { height: '15vh', paddingBottom: '3vh' },
                      }),
                      r.a.createElement(
                        'h2',
                        { style: { fontFamily: 'Red Rose' } },
                        'THANK YOU!'
                      ),
                      r.a.createElement(
                        'span',
                        { style: { fontFamily: 'Poppins' } },
                        'Your order was successfully placed. We have sent the order confirmation to ',
                        E.user.email,
                        ' .'
                      )
                    ),
                    r.a.createElement(
                      'div',
                      { style: { fontFamily: 'Poppins' } },
                      r.a.createElement(
                        'h4',
                        {
                          style: { fontFamily: 'Mulish', textAlign: 'center' },
                        },
                        'ORDER DETAILS -',
                        ' '
                      ),
                      r.a.createElement(
                        'span',
                        { style: { fontFamily: 'Mulish' } },
                        'Order ID'
                      ),
                      '-',
                      ' ',
                      E.order_id,
                      r.a.createElement(
                        'div',
                        { className: 'details' },
                        r.a.createElement(
                          'div',
                          null,
                          r.a.createElement(
                            'h5',
                            { style: { fontFamily: 'Mulish' } },
                            'Email'
                          ),
                          E.user.email
                        ),
                        r.a.createElement(
                          'div',
                          null,
                          r.a.createElement(
                            'h5',
                            { style: { fontFamily: 'Mulish' } },
                            'Order Type'
                          ),
                          E.mode
                        ),
                        r.a.createElement(
                          'div',
                          null,
                          r.a.createElement(
                            'h5',
                            { style: { fontFamily: 'Mulish' } },
                            'Payment Method'
                          ),
                          E.payment
                        ),
                        r.a.createElement(
                          'div',
                          null,
                          r.a.createElement(
                            'h5',
                            { style: { fontFamily: 'Mulish' } },
                            'Order Date'
                          ),
                          new Date(E.time).toDateString()
                        )
                      ),
                      r.a.createElement(
                        'div',
                        null,
                        r.a.createElement(
                          'h4',
                          { style: { fontFamily: 'Mulish' } },
                          'Order Summary'
                        ),
                        E.order.items.map(function (e) {
                          return r.a.createElement(
                            'p',
                            null,
                            e.q,
                            ' X ',
                            e.name
                          );
                        })
                      ),
                      r.a.createElement(
                        'div',
                        {
                          style: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            margin: '1rem 0',
                          },
                        },
                        r.a.createElement(
                          'div',
                          null,
                          r.a.createElement(
                            'h2',
                            { style: { fontFamily: 'Mulish' } },
                            'Total Amount'
                          ),
                          r.a.createElement(
                            'h2',
                            null,
                            ' ',
                            '\u20b9 ',
                            E.order.total_price + E.deliveryCharges
                          )
                        )
                      )
                    ),
                    ' '
                  )
                : r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      'div',
                      {
                        style: {
                          width: '100%',
                          display: 'flex',
                          height: '100vh',
                          alignItems: 'center',
                          justifyContent: 'center',
                          zIndex: '23444898429',
                        },
                      },
                      r.a.createElement('img', { src: a(52), alt: 'loader' })
                    )
                  )
            )
          );
        },
        Le = function () {
          return r.a.createElement(
            'div',
            null,
            r.a.createElement('img', {
              style: {
                display: 'block',
                width: '90%',
                height: '90vh',
                margin: 'auto',
              },
              src: a(173),
              alt: '404',
            })
          );
        },
        Pe = a(221),
        Ge = a(222),
        Me = a(225),
        qe = a(224),
        Ue = a(223),
        He = a(176),
        Ke = a(121),
        Ve = a.n(Ke),
        Je = Object(ae.a)({ root: { maxWidth: 345 } }),
        Ye = function () {
          var e = Je();
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              'h1',
              {
                style: { fontFamily: 'Alata', paddingTop: '1rem' },
                className: 'animate__animated animate__fadeIn',
              },
              'Made with ',
              r.a.createElement(Ve.a, { style: { color: 'red' } }),
              ' in India ',
              r.a.createElement('img', {
                src: 'https://image.flaticon.com/icons/svg/321/321238.svg',
                style: { height: '2rem' },
              }),
              ' ',
              'By'
            ),
            r.a.createElement(
              'div',
              { className: 'contact_container' },
              r.a.createElement(
                'div',
                {
                  className:
                    'contact_item animate__animated animate__fadeInLeft',
                },
                r.a.createElement(
                  Pe.a,
                  { className: e.root, variant: 'outlined' },
                  r.a.createElement(
                    Ge.a,
                    null,
                    r.a.createElement(Ue.a, {
                      component: 'img',
                      alt: ' Mihir Gupta',
                      height: '300',
                      image: a(174),
                      title: ' Mihir Gupta',
                    }),
                    r.a.createElement(
                      qe.a,
                      { className: 'contact_card' },
                      r.a.createElement(
                        He.a,
                        {
                          gutterBottom: !0,
                          variant: 'h5',
                          component: 'h2',
                          style: { fontFamily: 'Mulish' },
                        },
                        'Mihir Gupta'
                      ),
                      r.a.createElement(
                        He.a,
                        {
                          variant: 'body2',
                          color: 'textSecondary',
                          component: 'p',
                          style: { fontFamily: 'Poppins' },
                        },
                        'Self taught MERN Stack Developer and Comptetive Programmer'
                      )
                    )
                  ),
                  r.a.createElement(
                    Me.a,
                    {
                      style: {
                        textAlign: 'right',
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingLeft: '10vh',
                        paddingRight: '10vh',
                      },
                    },
                    r.a.createElement(
                      'div',
                      null,
                      r.a.createElement(
                        'a',
                        {
                          target: '_blank',
                          href: 'https://www.linkedin.com/in/mihir0699/',
                        },
                        r.a.createElement('img', {
                          src: 'https://image.flaticon.com/icons/svg/174/174857.svg',
                          alt: 'linkedin',
                          style: { height: '5vh', width: '5vh' },
                        })
                      )
                    ),
                    r.a.createElement(
                      'div',
                      null,
                      r.a.createElement(
                        'a',
                        {
                          target: '_blank',
                          href: 'https://github.com/mihir0699',
                        },
                        r.a.createElement('img', {
                          src: 'https://image.flaticon.com/icons/svg/1051/1051275.svg',
                          alt: 'linkedin',
                          style: { height: '5vh', width: '5vh' },
                        })
                      )
                    ),
                    r.a.createElement(
                      'div',
                      null,
                      r.a.createElement(
                        'a',
                        {
                          target: '_blank',
                          href: 'https://instagram.com/mihir_gupta_1',
                        },
                        r.a.createElement('img', {
                          src: 'https://image.flaticon.com/icons/svg/733/733558.svg',
                          alt: 'linkedin',
                          style: { height: '5vh', width: '5vh' },
                        })
                      )
                    )
                  )
                )
              )
            )
          );
        },
        We = function () {
          var e = Object(n.useContext)(u),
            t = Object(n.useContext)(j).Loader,
            a = e.user,
            l = a.name,
            c = a.email,
            i = Object(n.useState)([]),
            d = Object(m.a)(i, 2),
            p = d[0],
            E = d[1],
            f = Object(n.useState)({ val: 0, details: {} }),
            h = Object(m.a)(f, 2),
            y = h[0],
            A = h[1],
            v = Object(n.useState)(!0),
            b = Object(m.a)(v, 2),
            C = b[0],
            O = b[1],
            w = Object(n.useState)([]),
            x = Object(m.a)(w, 2),
            N = x[0],
            I = x[1];
          Object(n.useEffect)(function () {
            (function () {
              var e = Object(o.a)(
                s.a.mark(function e() {
                  var t, a, n;
                  return s.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              g.a.get('/api/get_orders')
                            );
                          case 3:
                            (t = e.sent),
                              console.log(t.data),
                              (a = []),
                              (n = []),
                              t.data.forEach(function (e) {
                                return 'false' === e.status
                                  ? a.push(e)
                                  : n.push(e);
                              }),
                              E(a),
                              I(n),
                              O(!1),
                              (e.next = 18);
                            break;
                          case 13:
                            return (
                              (e.prev = 13),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0.response),
                              O(0),
                              e.abrupt(
                                'return',
                                r.a.createElement(
                                  'h1',
                                  null,
                                  'Internal Server Error'
                                )
                              )
                            );
                          case 18:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 13]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })()();
          }, []),
            Object(n.useEffect)(
              function () {
                console.log(y);
              },
              [y]
            );
          var k = function () {
              return r.a.createElement(
                'div',
                { className: 'mainComponent', style: { overflow: 'visible' } },
                r.a.createElement(
                  'div',
                  null,
                  r.a.createElement(
                    'div',
                    {
                      className:
                        ' other animate__animated animate__lightSpeedInLeft',
                    },
                    r.a.createElement(
                      'span',
                      {
                        style: {
                          display: 'flex',
                          justifyContent: 'flex-end',
                          marginRight: '5px',
                          marginTop: '-10px',
                        },
                      },
                      r.a.createElement('i', {
                        onClick: function (e) {
                          return A({ val: 0, details: {} });
                        },
                        class: 'fa fa-times',
                        'aria-hidden': 'true',
                        style: { fontSize: '2rem' },
                      })
                    ),
                    r.a.createElement(
                      'div',
                      { className: 'i1' },
                      r.a.createElement(
                        'div',
                        { class: 'info' },
                        r.a.createElement(
                          'div',
                          null,
                          r.a.createElement('h5', null, 'Order Id: '),
                          r.a.createElement(
                            'span',
                            { className: 'orderId' },
                            '  ',
                            y.details.order_id,
                            ' '
                          )
                        ),
                        r.a.createElement(
                          'h5',
                          null,
                          'Amount: \u20b9 ',
                          y.details.order.total_price
                        )
                      ),
                      r.a.createElement('hr', null),
                      r.a.createElement('h5', null, 'Ordered By: ', l),
                      r.a.createElement('h5', null, 'Email: ', c),
                      r.a.createElement(
                        'h6',
                        null,
                        'Payment Mode: ',
                        y.details.payment
                      )
                    ),
                    r.a.createElement('hr', null),
                    r.a.createElement(
                      'div',
                      { className: 'i2' },
                      r.a.createElement(
                        'div',
                        { className: 'items' },
                        r.a.createElement('h5', null, 'Items:'),
                        r.a.createElement(
                          'div',
                          null,
                          y.details.order.items.map(function (e) {
                            return r.a.createElement(
                              'p',
                              null,
                              e.q,
                              ' X ',
                              e.name
                            );
                          })
                        )
                      ),
                      r.a.createElement('hr', null),
                      r.a.createElement(
                        'div',
                        { className: 'orderdetails' },
                        r.a.createElement(
                          'h6',
                          null,
                          'Mode Of Delivery :',
                          ' ',
                          'Delivery' === y.details.mode
                            ? 'Home Delivery'
                            : y.details.mode
                        ),
                        r.a.createElement(
                          'h6',
                          null,
                          'Delivered On ',
                          new Date(y.details.time).toDateString()
                        ),
                        y.details.address &&
                          r.a.createElement(
                            r.a.Fragment,
                            null,
                            r.a.createElement('h5', null, 'Delivered To '),
                            r.a.createElement(
                              'h6',
                              null,
                              'Address:',
                              y.details.address.Address
                            ),
                            ' ',
                            r.a.createElement(
                              'h6',
                              null,
                              'City: ',
                              y.details.address.Address.City
                            )
                          )
                      )
                    )
                  )
                )
              );
            },
            S = function () {
              return r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  'div',
                  {
                    className:
                      'pastOrderContainer animate__animated animate__fadeIn',
                  },
                  r.a.createElement(
                    'h1',
                    null,
                    'Current Orders',
                    ' ',
                    r.a.createElement('img', {
                      src: 'https://image.flaticon.com/icons/svg/2289/2289804.svg',
                      alt: 'icon',
                      style: { width: '10%', height: '10%' },
                    })
                  ),
                  p.length
                    ? p.map(function (e) {
                        return r.a.createElement(
                          'div',
                          {
                            onClick: function (t) {
                              return A({ val: 1, details: e });
                            },
                          },
                          r.a.createElement(
                            'div',
                            { className: 'detailsPastOrders' },
                            r.a.createElement(
                              'h1',
                              null,
                              'OrderId: ',
                              e.order_id
                            ),
                            r.a.createElement(
                              'h1',
                              null,
                              'Amount: \u20b9',
                              e.order.total_price
                            )
                          ),
                          r.a.createElement(
                            'div',
                            { className: 'pastOrdersInfo' },
                            'Total Items: ',
                            e.order.total_quantity
                          ),
                          r.a.createElement(
                            'h5',
                            null,
                            'Delievered On ',
                            new Date(e.time).toDateString()
                          )
                        );
                      })
                    : r.a.createElement(F, null)
                )
              );
            },
            F = function () {
              return r.a.createElement('img', {
                src: 'https://static.dribbble.com/users/429792/screenshots/3649946/no_order.png',
                alt: 'no_order',
                style: { maxWidth: '80%' },
              });
            },
            _ = function () {
              return r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  'div',
                  {
                    className:
                      'pastOrderContainer animate__animated animate__fadeIn',
                  },
                  r.a.createElement(
                    'h1',
                    null,
                    'Past Orders',
                    ' ',
                    r.a.createElement('img', {
                      src: 'https://image.flaticon.com/icons/svg/2649/2649215.svg',
                      alt: 'icon',
                      style: { width: '10%', height: '10%' },
                    })
                  ),
                  p.length
                    ? N.map(function (e) {
                        return r.a.createElement(
                          'div',
                          {
                            onClick: function (t) {
                              return A({ val: 1, details: e });
                            },
                          },
                          r.a.createElement(
                            'div',
                            { className: 'detailsPastOrders' },
                            r.a.createElement(
                              'h1',
                              null,
                              'OrderId: ',
                              e.order_id
                            ),
                            r.a.createElement(
                              'h1',
                              null,
                              'Amount: ',
                              e.order.total_price
                            )
                          ),
                          r.a.createElement(
                            'div',
                            { className: 'pastOrdersInfo' },
                            'Total Items: ',
                            e.order.total_quantity
                          ),
                          r.a.createElement(
                            'h5',
                            null,
                            'Delievered On ',
                            new Date(e.time).toDateString()
                          )
                        );
                      })
                    : r.a.createElement(F, null)
                )
              );
            };
          return r.a.createElement(
            r.a.Fragment,
            null,
            !0 === C
              ? r.a.createElement(t, null)
              : r.a.createElement(
                  r.a.Fragment,
                  null,
                  1 === y.val ? r.a.createElement(k, null) : '',
                  r.a.createElement(
                    'div',
                    null,
                    r.a.createElement(S, null),
                    r.a.createElement(_, null)
                  )
                )
          );
        },
        ze = Object(ae.a)(function (e) {
          return { root: { '& > *': { margin: e.spacing(1), width: '25ch' } } };
        }),
        Xe = function (e) {
          var t = Object(n.useState)({ val: 0, msg: '', type: '' }),
            l = Object(m.a)(t, 2),
            c = l[0],
            i = l[1],
            d = Object(n.useContext)(u),
            p = d.user,
            E = d.loading,
            f = function (e, t) {
              return r.a.createElement(
                H.a,
                {
                  className:
                    'red' === c.type
                      ? 'animate_animated animate_shakeX'
                      : 'animate_animated animate_fadeInRight animate_slow',
                  style: { position: 'fixed', right: '0', zIndex: '9899899' },
                },
                r.a.createElement(
                  H.a.Header,
                  {
                    style: {
                      background: c.type,
                      color: 'white',
                      fontWeight: 'bold',
                    },
                  },
                  r.a.createElement(
                    'strong',
                    { className: 'mr-auto' },
                    'Success'
                  )
                ),
                r.a.createElement(H.a.Body, null, c.msg)
              );
            };
          Object(n.useEffect)(function () {
            p || e.history.push('/');
          }, []);
          var h = Object(n.useState)(0),
            y = Object(m.a)(h, 2),
            A = y[0],
            v = y[1],
            b = Object(n.useState)(0),
            C = Object(m.a)(b, 2),
            O = C[0],
            w = C[1],
            j = (function () {
              var e = Object(o.a)(
                s.a.mark(function e(t) {
                  var a, n;
                  return s.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (t.preventDefault(),
                              (a = {
                                headers: { 'Content-Type': 'application/json' },
                              }),
                              w(!0),
                              '' != A)
                            ) {
                              e.next = 8;
                              break;
                            }
                            w(!1),
                              alert('Please Enter Valid Code'),
                              (e.next = 23);
                            break;
                          case 8:
                            return (
                              (e.prev = 8),
                              (e.next = 11),
                              g.a.post('/api/verify', { code: A }, a)
                            );
                          case 11:
                            e.sent,
                              w(!1),
                              document.write(
                                '<h1>Verified Successfully.You Are getting redirected to HomePage</h1>'
                              ),
                              setTimeout(function () {
                                window.location.href = '/';
                              }, 3e3),
                              (e.next = 23);
                            break;
                          case 17:
                            (e.prev = 17),
                              (e.t0 = e.catch(8)),
                              console.log(e.t0.response.data),
                              i({
                                val: 1,
                                type: 'red',
                                msg: e.t0.response.data,
                              }),
                              (n = setTimeout(
                                function () {
                                  i({ val: 0, type: '', msg: '' }),
                                    clearTimeout(n);
                                },
                                [3e3]
                              )),
                              w(!1);
                          case 23:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[8, 17]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            x = ze(),
            N = (function () {
              var e = Object(o.a)(
                s.a.mark(function e() {
                  var t, a, n, r, l;
                  return s.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              p._id,
                              (t = p.email),
                              (a = p.name),
                              (n = {
                                headers: { 'Content-Type': 'application/json' },
                              }),
                              (e.prev = 4),
                              w(!0),
                              (e.next = 8),
                              g.a.post(
                                '/api/resend',
                                { id: l, email: t, name: a },
                                n
                              )
                            );
                          case 8:
                            (r = e.sent),
                              i({ val: 1, msg: r.data, type: 'darkGreen' }),
                              (l = setTimeout(function () {
                                i({ val: 0, msg: '', type: '' });
                              }, 3e3)),
                              w(!1),
                              (e.next = 18);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(4)),
                              i({
                                val: 1,
                                msg: e.t0.response.data,
                                type: 'red',
                              }),
                              setTimeout(function () {
                                i({ val: 0, msg: '', type: '' });
                              }, 3e3);
                          case 18:
                            w(!1);
                          case 19:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 14]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return r.a.createElement(
            r.a.Fragment,
            null,
            O || E
              ? r.a.createElement(
                  'div',
                  {
                    style: {
                      width: '100%',
                      display: 'flex',
                      height: '100vh',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: '23444898429',
                    },
                  },
                  r.a.createElement('img', { src: a(52), alt: 'loader' })
                )
              : r.a.createElement(
                  r.a.Fragment,
                  null,
                  1 == c.val ? r.a.createElement(f, null) : '',
                  r.a.createElement(
                    'h4',
                    {
                      style: {
                        margin: '2rem 3rem 3.5rem 3rem',
                        fontFamily: 'Mulish',
                      },
                    },
                    'Email Verification',
                    ' ',
                    r.a.createElement('img', {
                      src: 'https://image.flaticon.com/icons/svg/1271/1271380.svg',
                      style: { height: '3rem' },
                    })
                  ),
                  r.a.createElement(
                    'div',
                    { className: 'parent1' },
                    r.a.createElement(
                      'div',
                      { className: 'parent2' },
                      r.a.createElement(
                        'div',
                        {
                          className:
                            'forget1  animate__animated animate__backInUp',
                        },
                        r.a.createElement(
                          'p',
                          null,
                          r.a.createElement(
                            'span',
                            {
                              style: {
                                fontFamily: 'Poppins',
                                fontSize: '0.95rem',
                              },
                            },
                            ' ',
                            r.a.createElement(xe.a, null),
                            ' Enter the 6-digit code we sent to your email address to verify your account'
                          )
                        ),
                        r.a.createElement(
                          'form',
                          {
                            className: x.root,
                            noValidate: !0,
                            autoComplete: 'off',
                            onSubmit: j,
                          },
                          r.a.createElement(Be.a, {
                            id: 'outlined-basic',
                            label: 'Code',
                            variant: 'outlined',
                            onChange: function (e) {
                              v(e.target.value);
                            },
                            style: { fontFamily: 'Poppins' },
                            inputProps: { maxLength: 6 },
                          }),
                          r.a.createElement(
                            le.a,
                            {
                              variant: 'contained',
                              type: 'submit',
                              color: 'primary',
                              style: { fontFamily: 'Mulish' },
                            },
                            'Submit'
                          )
                        ),
                        r.a.createElement(
                          le.a,
                          {
                            variant: 'contained',
                            color: 'primary',
                            size: 'small',
                            className: x.button,
                            startIcon: r.a.createElement(xe.a, null),
                            style: { fontFamily: 'Mulish' },
                            onClick: N,
                          },
                          'Resend Code'
                        )
                      )
                    ),
                    r.a.createElement(
                      'div',
                      {
                        className: 'verifyImage',
                        style: { marginTop: '1.5rem' },
                      },
                      r.a.createElement('img', {
                        src: 'https://image.freepik.com/free-vector/people-eating-their-food-smile_23-2148473328.jpg',
                        alt: 'happy',
                        style: { height: '25rem' },
                      })
                    )
                  )
                )
          );
        };
      function Ze() {
        var e = Object(n.useContext)(u),
          t = (e.userLoaded, e.isAuthenticated, Object(n.useState)(0)),
          a = Object(m.a)(t, 2),
          l = a[0],
          c = a[1],
          i = Object(n.useContext)(A),
          s = (i.loadCart, i.state, Object(n.useContext)(j)),
          o =
            (s.Loader,
            s.loading,
            s.setLoading,
            function () {
              c(1 ^ l);
            });
        return (
          Object(n.useEffect)(function () {
            navigator.onLine || alert('You Are Offline');
          }),
          r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              'div',
              { className: 'App' },
              r.a.createElement(
                y,
                null,
                r.a.createElement(
                  b,
                  null,
                  r.a.createElement(
                    F.a,
                    null,
                    1 === l
                      ? r.a.createElement(de, { display: l, changeDisplay: o })
                      : r.a.createElement(
                          r.a.Fragment,
                          null,
                          r.a.createElement(Q, {
                            display: l,
                            changeDisplay: o,
                          }),
                          r.a.createElement(
                            Z.d,
                            null,
                            r.a.createElement(Ee, {
                              exact: !0,
                              path: '/',
                              component: W,
                            }),
                            r.a.createElement(Ee, {
                              exact: !0,
                              path: '/cart',
                              component: me,
                            }),
                            r.a.createElement(Ee, {
                              exact: !0,
                              path: '/addproduct',
                              component: ve,
                            }),
                            r.a.createElement(Z.b, {
                              exact: !0,
                              path: '/forget',
                              component: Ne,
                            }),
                            r.a.createElement(Z.b, {
                              exact: !0,
                              path: '/auth',
                              component: ue,
                            }),
                            r.a.createElement(Ee, {
                              exact: !0,
                              path: '/checkout',
                              component: Te,
                            }),
                            r.a.createElement(Z.b, {
                              exact: !0,
                              path: '/success',
                              component: De,
                            }),
                            r.a.createElement(Z.b, {
                              exact: !0,
                              path: '/fail',
                              component: Ce,
                            }),
                            r.a.createElement(Ee, {
                              exact: !0,
                              path: '/deleteitems',
                              component: fe,
                            }),
                            r.a.createElement(Z.b, {
                              exact: !0,
                              path: '/forget/:code',
                              component: Ie,
                            }),
                            r.a.createElement(Z.b, {
                              exact: !0,
                              path: '/contact',
                              component: Ye,
                            }),
                            r.a.createElement(Z.b, {
                              exact: !0,
                              path: '/verify',
                              component: Xe,
                            }),
                            r.a.createElement(Ee, {
                              exact: !0,
                              path: '/order',
                              component: We,
                            }),
                            r.a.createElement(Z.b, { path: '/', component: Le })
                          )
                        )
                  )
                )
              )
            )
          )
        );
      }
      var $e = document.getElementById('root');
      (g.a.defaults.baseURL = 'https://foodeazy-web.herokuapp.com'),
        c.a.render(
          r.a.createElement(
            r.a.StrictMode,
            null,
            r.a.createElement(
              y,
              null,
              r.a.createElement(
                I,
                null,
                r.a.createElement(
                  w,
                  null,
                  r.a.createElement(b, null, r.a.createElement(Ze, null))
                )
              )
            )
          ),
          $e
        );
    },
    51: function (e, t, a) {},
    52: function (e, t) {
      e.exports =
        'data:image/gif;base64,R0lGODlhQABAAPUIAP////z6/KyurAwKDBwaHIyOjPTy9AwODAQCBCQiJLSytLS2tBweHPz+/KyqrJyenPT29CwqLBQSFLy6vKSmpAQGBMzOzCQmJDQ2NMTCxBQWFCwuLJSSlOzq7Dw+PJSWlOzu7DQyNMzKzERGROTm5ExOTHx6fFRSVFxaXGRmZGRiZExKTDw6PFxeXOTi5MTGxLy+vNTW1GxqbHx+fFRWVNze3HRydJyanISGhNTS1ISChERCRGxubIyKjAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQECQD/ACwAAAAAQABAAAAFcCAgjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMBis0EgqXgUAcuIm2hDthaARl6WKDsWwDB20YWwYVbRdcBRUHeFwGBnmRkpOUlZaXmJmam5ydSSEAIfkEBQkAAAAsJAAXAAwAGAAABTogII4TQwhjCiQIIqkj0x6wqEgSVe987wOLRGRSa0haiVrg0CLsHoODgwcJ/K7YrHYb2aYg2IEPXAsBACH5BAUJAAAALB0AEAAMAAYAAAUqIOAwSQacKBAcCBKlBgRAQ5ugRXU4wDMcixOk0rqcGg3UqoVJpRQRjCUEACH5BAUJAAAALBEAEQAbABsAAAZPQIBwCIBAiMikUsipHBzLKLIxQCAY0qxQYo1oAaHoJLIRfc/o4UcSsaSTICvC80Z2KlZ6nVgYMMx7Ahp7hIWGh4iJiouMjY6PkJGSj2FCQQAh+QQFCQAAACwQAB4AHgALAAAGQMDM5aIAGI/IpDJ5QSAky6jUSHAOGtOscYBwHCoPrbgCCATE6LR6jS4cEhm2cYHsVJweuRLkROT1SR8SFxaAR0EAIfkEBQkAAAAsFgAqABEABgAABjRAwGQTEgGOyKRiA9AgEJFkIwmRIAKDJwP5GGgUySOnMqAcsc9E+AiBIAOH52VNdxAuk3AQACH5BAUJAAAALBUAHgAgABcAAAZmQIBwSCwai7CjcslsOp/QqHRKrVqVL6viyu0KC4RKyeUVUhBoRKgMWKXRlmJ2uVC633Fo4KB0vDcNbB8JAyUkbGwKKC0ZV0lEBW8CZQ0Sb2teBm8IGmwhbydsMQxoG4dsEBMvAUtBACH5BAUJAAAALB4AEwAZABoAAAZkwBtgSCwaATfG4eQ6Oo8OhBQRajyvgNVUasE+tduu90jZbqzj4gFQ0FRWzbR8Tq/b79eAiZGYoes2WyZ2DQNbGoQVWxJ3LVsqdwYnFRUtEHgAEAGYnJ2en6Chokc3BxILQwZ2QQAh+QQFCQAAACwcAAkAGAAqAAAGcEAARKYhmBqApHLJVKoQUISuSV1CKlEEgwnJvJDUQFa7jDGgG1IVlbUtMVla1dCqHGwBpWGsqSbBSwEHWSF+fgVZAoZUIBACNC0Zi36Kk5aXmJmam5ydnp+goaKjpKWmoDQIp6usra6vsLGys6tyTUEAIfkEBQkAAAAsCwALACcAFQAABnNAgHA4DMBeDWIAQWw6n84YA4HYuIaQCnTLBWCo1FN3vIWAqRIiaMgjQshOzXkDrxM/Z4F9D1DQWhl8goNbMTsDF3pKhE4QBGcvTRqMRApnCDJNC3SUfZeZnU8Gj2CRoU85HggMFKeur7CxsrO0sW21QwdBACH5BAUJAAAALAkAHQAsABAAAAZgwIaOwTAFAMikcslsOpEmhBTBe1qvTs0UcQAksOCrdlpphM9O1RaFbi8hrQqCZnDbkwHI3Z3f+/+AgXc5HhUJDh2CVxAEWy+KVgpbCDKQTwKTlZZNjI6bTjEeAxcOn0tBACH5BAUJAAAALBIALgAaAAkAAAZQQABAQVPBhMikcgn4IJ4IAXOq1EARm2VjGVBCrghJ0tAaHGxdKuZ6StKuJiogxnhuXEhI5cpI5rgwL2lCAXtQfUxbci1XM3JyEDIHGjODS0EAIfkEBQkAAAAsCQAYADQAJQAABo1AgBDAGhqPyKRyyUwWm9CodEqtWq/YrHbL7Xq/4LA2JZaSy+i0es3mPtvwuHxO76gkCBaMPgQlEICACnwAJoGBDA18GIeBNYuNgI90M5GJfH6NC4QAICoHFXqco6RCIDgrKxwQnCQXhxisfCiRJnwBFZEXfAaRCBKEr407hBSRGZwfB4AaAqQQLxaKUEEAIfkEBQkAAAAsMQAOAA8ALAAABnRAgBDQUUkqHthwCQAlEFDogimcRaOJBhVzjdaorC70yzSJGdrlBsToKqjC4gGBUcLv+Lx+z+/7hy4oDAQtLnc1GlcaZEwnYjRwc10HcBViA3AjYiNwFgNXAxZ3Lx5QHiJ6EBB/rK2ur7CxsrO0tba3rJx8QQAh+QQFCQAAACwbAAAAFwAMAAAGYUAAILcaHFA1oXLJFFoGiChC42pahR6ptHVtQrRSwhUisgSEAXBU3Lwd1gohS81lUtQZgKiilSSZF2ojTiMVAyd/SwZqCBJdTAF8YAmPTDRqJpVLJAlaGBCaSx04IyMcoEEAIfkEBQkAAAAsAwADABsAFQAABnFAgHBIHEJElkBxySTeJAgEQdCsDinRLCJjrUa00VGXCQFHJeNloGJOpJcos+1dJCW0GAOzNQbhRisFekwVdIaHTQIhFQQ2g4g3YCxKhwYHZjeIE2YINJqcnpUDmIgAH2AYIKUADiEIGjwGVKu0XRCIQQAh+QQFCQAAACwAABwAPAAWAAAGk0CAq0VgoFyApHLJbDqfUGaNWNMgrghNDRCIer/gJQqLLQFm4bSaeSBfB+v4euBGVOR48Kq+y/uhFnRYFRZ/hk0iHlcsIksQXYdfj0wsjhCRmJmam5ydnp+goXICIVk2BqJqH24YIKlgBm1uN69fE3UINLVet3W6TygtGa+xdbS7UatkGJBrzUoNkQ4bFRqnmK54QQAh+QQFCQAAACwNADQAHgAMAAAGZ0AAwNAblTggoXLJbCpJCYQUgTE4r07UdGrDeoWBylaa+F4hA8hYKnFaRoPBqYa9rEdN0WCrcV0paxlNHmstWDcHUhoCTQFrCAReECIiDU5qa5FmWIRjhptXFntTfaBYFisDBzR0TkEAIfkEBQkAAQAsJAAlAA0ACgAABRggII5kaZ4owGkpELztG8RwKrfujJeyPoYAIfkEBQkAAgAsKgAXAAcADAAAAgyEIXmm6w+jjOKFuQoAIfkEBQkAAQAsHQAQABgABgAABh1AgFAYKBqPyONwuUw6mdAoEyNtOpNVKOWKlZaSQQAh+QQFCQABACwRABEAJAAKAAAGL0CAMEAMCI/I5LCoHDaf0CiAJa02i1irFuDAMrfVlZcIro7GxnIUra4Wxe243BoEACH5BAUJAAEALBAAHgAiAAsAAAMfCLrc/i3ASeOoeIabe/SgIoVkaZ4oOaZNQQQwy8BwAgAh+QQFCQACACwWACoAHgAIAAAGKkCAcEgsGocjgXJ5FC6f0KiySZRKGQdBhzq0epnUrxhaHZsFDWPgzDaYgwAh+QQFCQABACwmACcAEgARAAAGMUCAcEgsGo/IpHI5JKUC0GjUKK1Ki9asdrpkXZkmLnYbYA47LYl5vTboyPC4vFqRBwEAIfkEBQkAAQAsLgATAAsAEQAABiBAgHAYKBaHxIQROSQtmdCodEqtWq/MAFU7HWy/U+40CAAh+QQFCQABACwTAAkAIwAJAAAGMMCAcEgEGI/II4rIbDaTAKeU2JNCr0bQdIvtbqfd69caLhtJY7NRehmTyyY3+LgNAgAh+QQFCQACACwLAAsANQA1AAAGfkCBcDgMAI7EpHLJbDaP0Kh0Sq1ar9isdlt1er9gwTRMLgvH5vTwlFW7BWyuvOr5St94IgSdf1P7eHOCg4SFc4CIiYqLjI2Oj5CRkCeSlZaXXicQmJydnp+goaKjpKWmj5SmcVMLp66vsEoosaObpyquKRK0vL2+v8DBvKmKQQAh+QQFCQACACwHABUAMgAYAAAGSkCBQCYAGI/IpHLJVApSh2JzSq1ar9isdsvter/gsHhMXkrLWyGaq15ro26tYBTPjs71Kj7P7/v/gIGCg0hCbYFPhoYBiIqOjYZBACH5BAUJAAIALAYAFQA1ACgAAAZlQIHQBhIaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otJqZ8azf8Lh8Tq/b7/g7YA+w8/+AgYKDM1aDgF4hCE2HjY6ARVSPk5SVlWkQlEw4aIFLCWmeeUoBo6anqKcZUEEAIfkEBQkAAQAsKQAqABQAEwAAAhGEj6nL7Q+jnLTai7PevPtvFAAh+QQFCQACACwKAAsANgAyAAADYAiqJv4wStmmvTjrzbv/YCgsi2hKJHmuY1qyovvCoKzQoQ3gtc74wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16vzeeeEwum8/otHrNbrvf8Lh8Tq/b7/i8fs/vowNxCQAh+QQFCQABACwQAAAAIgAMAAAGMUCAcEgsGo/IpHLJbC4hgahzCohaqU3rFavUBkbcrjec9AbISDP6qF4Xe6MRB+I2BgEAIfkEBQkAAQAsAwADABMALwAAAiqEj6nL7Q+jnLTai7PevPcAhuJIluaJpurKtu4Lx/JM1/aN5/rO97zgKgAAIfkEBQkAAQAsAAAcABwAIAAABjlAgHBILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/4LCYGCibz+i0es1uu9/wuHweN9Hv+Lx+r1cYIUEAOw==';
    },
    85: function (e, t, a) {},
  },
  [[134, 1, 2]],
]);
//# sourceMappingURL=main.91fba5fd.chunk.js.map
