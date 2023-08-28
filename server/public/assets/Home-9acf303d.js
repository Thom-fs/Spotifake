import {
    j as e,
    r as t,
    A as v,
    u as j,
    X as h,
    f as b,
    L as P,
} from "./index-0525d998.js";
function F({ setRegisterModal: r, setLoginModal: s }) {
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx("h1", {
                className:
                    "text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary",
                children: "Bienvenue sur Spotifake !",
            }),
            e.jsxs("div", {
                className: "flex flex-col items-center justify-center mt-4",
                children: [
                    e.jsx("h2", {
                        className:
                            "text-lg font-bold text-center text-gray-100",
                        children: "Connectez-vous pour accéder à votre compte",
                    }),
                    e.jsx("button", {
                        className:
                            "px-4 py-2 mt-4 text-lg font-bold text-center text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition delay-150 rounded-full",
                        onClick: () => {
                            s(!0), r(!1);
                        },
                        children: "Se connecter",
                    }),
                ],
            }),
            e.jsxs("div", {
                className: "flex flex-col items-center justify-center mt-4",
                children: [
                    e.jsx("h2", {
                        className:
                            "text-md font-bold text-center text-gray-100",
                        children: "Pas encore de compte ?",
                    }),
                    e.jsx("button", {
                        className:
                            "px-4 py-2 mt-4 text-lg font-bold text-center text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition delay-150 rounded-full",
                        onClick: () => {
                            r(!0), s(!1);
                        },
                        children: "S'inscrire",
                    }),
                ],
            }),
        ],
    });
}
function E({ setRegisterModal: r, setLoginModal: s }) {
    const { setIsLoggedIn: l, fetchUser: n } = t.useContext(v),
        [g, i] = t.useState(""),
        [c, x] = t.useState(""),
        [o, u] = t.useState(""),
        [p, f] = t.useState(""),
        [d, m] = t.useState(""),
        [N, k] = t.useState(""),
        [y, w] = t.useState(""),
        C = j(),
        S = async () => {
            try {
                const a = await b(
                    "POST",
                    "/api/register",
                    {},
                    {
                        firstname: g,
                        lastname: c,
                        pseudo: o,
                        email: p,
                        password: d,
                        confirm_password: N,
                    }
                );
                a.status === 201
                    ? (console.log(a.data),
                      localStorage.setItem("token", a.data.token),
                      l(!0),
                      await n(),
                      C("/user"))
                    : w(
                          "L'inscription a échoué. Veuillez vérifier vos identifiants."
                      );
            } catch (a) {
                console.error(a),
                    w("Une erreur est survenue. Veuillez réessayer plus tard.");
            }
        };
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx("button", {
                className: "absolute top-0 right-0 p-4",
                children: e.jsx(h, {
                    className: "w-6 h-6 text-gray-100 cursor-pointer",
                    onClick: () => {
                        r(!1);
                    },
                }),
            }),
            e.jsx("h1", {
                className:
                    "text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary",
                children: "Inscris toi à Spotifake !",
            }),
            e.jsxs("div", {
                className:
                    "flex flex-col items-center justify-center my-4 w-5/6",
                children: [
                    e.jsxs("h4", {
                        className:
                            "text-sm font-bold text-center text-gray-100",
                        children: [
                            "Déjà inscris",
                            e.jsx("button", {
                                className:
                                    "pl-1 text-sm font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary cursor-pointer",
                                onClick: () => {
                                    s(!0), r(!1);
                                },
                                children: "connecte-toi",
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "relative m-4 w-full",
                        children: [
                            e.jsx("label", {
                                htmlFor: "firstname",
                                className:
                                    "absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100",
                                children: "Prénom",
                            }),
                            e.jsx("input", {
                                type: "text",
                                name: "firstname",
                                id: "firstname",
                                className:
                                    "pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",
                                placeholder: "Votre prénom",
                                onChange: (a) => i(a.target.value),
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "relative m-4 w-full",
                        children: [
                            e.jsx("label", {
                                htmlFor: "lastname",
                                className:
                                    "absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100",
                                children: "Nom",
                            }),
                            e.jsx("input", {
                                type: "text",
                                name: "lastname",
                                id: "lastname",
                                className:
                                    "pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",
                                placeholder: "Votre nom",
                                onChange: (a) => x(a.target.value),
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "relative m-4 w-full",
                        children: [
                            e.jsx("label", {
                                htmlFor: "pseudo",
                                className:
                                    "absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100",
                                children: "Pseudo",
                            }),
                            e.jsx("input", {
                                type: "text",
                                name: "pseudo",
                                id: "pseudo",
                                className:
                                    "pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",
                                placeholder: "Votre pseudo",
                                onChange: (a) => u(a.target.value),
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "relative m-4 w-full",
                        children: [
                            e.jsx("label", {
                                htmlFor: "email",
                                className:
                                    "absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100",
                                children: "E-mail",
                            }),
                            e.jsx("input", {
                                type: "text",
                                name: "email",
                                id: "email",
                                className:
                                    "pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",
                                placeholder: "exemple@spotifake.fr",
                                onChange: (a) => f(a.target.value),
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "relative m-4 w-full",
                        children: [
                            e.jsx("label", {
                                htmlFor: "password",
                                className:
                                    "absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100",
                                children: "Mot de passe",
                            }),
                            e.jsx("input", {
                                type: "password",
                                name: "password",
                                id: "password",
                                className:
                                    "pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-2xl focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",
                                placeholder: "••••••••••",
                                onChange: (a) => m(a.target.value),
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "relative m-4 w-full",
                        children: [
                            e.jsx("label", {
                                htmlFor: "passwordConfirm",
                                className:
                                    "absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100",
                                children: "Confirmation mot de passe",
                            }),
                            e.jsx("input", {
                                type: "password",
                                name: "confirm_password",
                                id: "confirm_password",
                                className:
                                    "pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-2xl focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",
                                placeholder: "••••••••••",
                                onChange: (a) => k(a.target.value),
                            }),
                        ],
                    }),
                    e.jsx("button", {
                        className:
                            "px-4 py-2 mt-4 text-lg font-bold text-center text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition delay-150 rounded-full",
                        onClick: S,
                        children: "S'inscrire",
                    }),
                ],
            }),
            e.jsx("div", {
                className: "w-1/2 relative",
                children:
                    y &&
                    e.jsx("div", {
                        className:
                            "absolute w-full flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800",
                        role: "alert",
                        children: y,
                    }),
            }),
        ],
    });
}
function V({ setLoginModal: r, setRegisterModal: s, setForgottenModal: l }) {
    const { fetchUser: n, setIsLoggedIn: g } = t.useContext(v),
        [i, c] = t.useState(""),
        [x, o] = t.useState(""),
        [u, p] = t.useState("");
    j();
    const f = async () => {
        try {
            const d = await b(
                "POST",
                "/api/login",
                {},
                { email: i, password: x }
            );
            d.status === 200
                ? (localStorage.setItem("token", d.data.token),
                  g(!0),
                  await n(),
                  (window.location.href = "/user"))
                : p(
                      "La connexion a échoué. Veuillez vérifier vos identifiants."
                  );
        } catch (d) {
            console.error(d),
                p("Une erreur est survenue. Veuillez réessayer plus tard.");
        }
    };
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx("button", {
                className: "absolute top-0 right-0 p-4",
                children: e.jsx(h, {
                    className: "w-6 h-6 text-gray-100 cursor-pointer",
                    onClick: () => {
                        r(!1);
                    },
                }),
            }),
            e.jsx("h1", {
                className:
                    "text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary",
                children: "Connecte-toi à Spotifake !",
            }),
            e.jsxs("div", {
                className:
                    "flex flex-col items-center justify-center my-4 w-5/6",
                children: [
                    e.jsxs("h4", {
                        className:
                            "text-sm font-bold text-center text-gray-100",
                        children: [
                            "Pas encore inscris",
                            e.jsx("button", {
                                className:
                                    "pl-1 text-sm font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary cursor-pointer",
                                onClick: () => {
                                    s(!0), r(!1), l(!1);
                                },
                                children: "inscris-toi",
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "relative m-4 w-full",
                        children: [
                            e.jsx("label", {
                                htmlFor: "email",
                                className:
                                    "absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100",
                                children: "E-mail",
                            }),
                            e.jsx("input", {
                                type: "text",
                                name: "email",
                                id: "email",
                                className:
                                    "pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",
                                placeholder: "exemple@spotifake.fr",
                                onChange: (d) => c(d.target.value),
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "relative m-4 w-full",
                        children: [
                            e.jsx("label", {
                                htmlFor: "password",
                                className:
                                    "absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100",
                                children: "Mot de passe",
                            }),
                            e.jsx("input", {
                                type: "password",
                                name: "password",
                                id: "password",
                                className:
                                    "pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-2xl focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",
                                placeholder: "••••••••••",
                                onChange: (d) => o(d.target.value),
                            }),
                        ],
                    }),
                    e.jsx("button", {
                        className:
                            "pl-1 text-sm font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary cursor-pointer",
                        onClick: () => {
                            r(!1), s(!1), l(!0);
                        },
                        children: "Mot de passe oublié ?",
                    }),
                    e.jsx("button", {
                        className:
                            "px-4 py-2 mt-4 text-lg font-bold text-center text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition delay-150 rounded-full",
                        onClick: f,
                        children: "Se connecter",
                    }),
                ],
            }),
            e.jsx("div", {
                className: "w-1/2 relative",
                children:
                    u &&
                    e.jsx("div", {
                        className:
                            "absolute w-full flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800",
                        role: "alert",
                        children: u,
                    }),
            }),
        ],
    });
}
function I({
    setForgottenModal: r,
    setLoginModal: s,
    setResetModal: l,
    onEmailChange: n,
}) {
    const [g, i] = t.useState(""),
        c = (o) => {
            const u = o.target.value;
            i(u), n(u);
        },
        x = async () => {
            try {
                const o = await b(
                    "POST",
                    "/api/forgot-password",
                    {},
                    { email: g }
                );
                o.status === 200
                    ? (console.log("envoie d'email réussi", o),
                      l(!0),
                      r(!1),
                      s(!1))
                    : alert(
                          "Email incorrect. Veuillez vérifier vos identifiants."
                      );
            } catch (o) {
                console.error(o),
                    alert("An error occurred. Please try again later.");
            }
        };
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx("button", {
                className: "absolute top-0 right-0 p-4",
                children: e.jsx(h, {
                    className: "w-6 h-6 text-gray-100 cursor-pointer",
                    onClick: () => {
                        r(!1);
                    },
                }),
            }),
            e.jsx("h1", {
                className:
                    "text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary",
                children: "Mot de passe oublié",
            }),
            e.jsxs("div", {
                className:
                    "flex flex-col items-center justify-center mt-4 w-5/6",
                children: [
                    e.jsxs("h4", {
                        className:
                            "text-sm font-bold text-center text-gray-100",
                        children: [
                            "Retour à la page de connexion ?",
                            e.jsx("button", {
                                className:
                                    "pl-1 text-sm font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary cursor-pointer",
                                onClick: () => {
                                    s(!0), r(!1);
                                },
                                children: "Connecte-toi",
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "relative m-4 w-full",
                        children: [
                            e.jsx("label", {
                                htmlFor: "email",
                                className:
                                    "absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100",
                                children: "E-mail",
                            }),
                            e.jsx("input", {
                                type: "text",
                                name: "email",
                                id: "email",
                                className:
                                    "pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",
                                placeholder: "exemple@spotifake.fr",
                                onChange: c,
                            }),
                        ],
                    }),
                    e.jsx("button", {
                        className:
                            "px-4 py-2 mt-4 text-lg font-bold text-center text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition delay-150 rounded-full",
                        onClick: x,
                        children: "Réinitialiser le mot de passe",
                    }),
                ],
            }),
        ],
    });
}
function M({
    setForgottenModal: r,
    setLoginModal: s,
    setResetModal: l,
    email: n,
}) {
    const [g, i] = t.useState(""),
        [c, x] = t.useState(""),
        [o, u] = t.useState(""),
        [p, f] = t.useState("");
    console.log("email forgot password modal", n);
    const d = async () => {
        if (c !== o) {
            setTimeout(() => {
                f("Les mots de passe doivent être identique");
            }, 3e3);
            return;
        }
        try {
            const m = await b(
                "POST",
                "/api/reset-password",
                {},
                {
                    email: n,
                    codeValidation: g,
                    password: c,
                    confirm_password: o,
                }
            );
            m.status === 200
                ? (console.log("Reset du mot de passe réussie", m),
                  l(!1),
                  r(!1),
                  s(!0))
                : alert(
                      "Une erreur s'est produite lors de la réinitialisation du mot de passe. Veuillez réessayer."
                  );
        } catch (m) {
            console.error(m),
                alert("An error occurred. Please try again later.");
        }
    };
    return e.jsxs(e.Fragment, {
        children: [
            e.jsx("button", {
                className: "absolute top-0 right-0 p-4",
                children: e.jsx(h, {
                    className: "w-6 h-6 text-gray-100 cursor-pointer",
                    onClick: () => {
                        l(!1);
                    },
                }),
            }),
            e.jsx("h1", {
                className:
                    "text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary",
                children: "Réinitialisation du mot de passe",
            }),
            e.jsxs("div", {
                className:
                    "flex flex-col items-center justify-center mt-4 w-5/6",
                children: [
                    e.jsxs("div", {
                        className: "relative m-4 w-full",
                        children: [
                            e.jsx("label", {
                                htmlFor: "codeValidation",
                                className:
                                    "absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100",
                                children: "Code de validation",
                            }),
                            e.jsx("input", {
                                type: "text",
                                name: "codeValidation",
                                id: "codeValidation",
                                className:
                                    "pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",
                                placeholder: "123456",
                                value: g,
                                onChange: (m) => i(m.target.value),
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "relative m-4 w-full",
                        children: [
                            e.jsx("label", {
                                htmlFor: "password",
                                className:
                                    "absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100",
                                children: "Nouveau mot de passe",
                            }),
                            e.jsx("input", {
                                type: "password",
                                name: "password",
                                id: "password",
                                className:
                                    "pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-2xl focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",
                                placeholder: "••••••••••",
                                value: c,
                                onChange: (m) => x(m.target.value),
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "relative m-4 w-full",
                        children: [
                            e.jsx("label", {
                                htmlFor: "confirmPassword",
                                className:
                                    "absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100",
                                children: "Confirmer le mot de passe",
                            }),
                            e.jsx("input", {
                                type: "password",
                                name: "confirmPassword",
                                id: "confirmPassword",
                                className:
                                    "pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-2xl focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",
                                placeholder: "••••••••••",
                                value: o,
                                onChange: (m) => u(m.target.value),
                            }),
                        ],
                    }),
                    e.jsx("button", {
                        className:
                            "px-4 py-2 mt-4 text-lg font-bold text-center text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition delay-150 rounded-full",
                        onClick: d,
                        children: "Réinitialiser le mot de passe",
                    }),
                ],
            }),
            e.jsx("div", {
                className: "w-1/2 relative",
                children:
                    p &&
                    e.jsx("div", {
                        className:
                            "absolute w-full flex p-4 mb-4 mt-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800",
                        role: "alert",
                        children: p,
                    }),
            }),
        ],
    });
}
function L() {
    const [r, s] = t.useState(!1),
        [l, n] = t.useState(!1),
        [g, i] = t.useState(!1),
        [c, x] = t.useState(!1),
        [o, u] = t.useState(""),
        p = (f) => {
            u(f);
        };
    return e.jsx(e.Fragment, {
        children: e.jsx("div", {
            className: "flex items-center justify-center h-[100vh] w-[100vw]",
            children: e.jsxs("div", {
                className:
                    "flex flex-col items-center justify-center md:h-3/5 h-4/5 md:w-1/2 w-4/5 bg-light rounded-3xl relative px-16 py-32",
                children: [
                    e.jsx("img", {
                        src: P,
                        alt: "Jambon Beurre Logo",
                        className: "absolute -top-16 w-32",
                    }),
                    r &&
                        e.jsx(V, {
                            setLoginModal: s,
                            setRegisterModal: n,
                            setForgottenModal: i,
                        }),
                    l && e.jsx(E, { setRegisterModal: n, setLoginModal: s }),
                    g &&
                        e.jsx(I, {
                            setForgottenModal: i,
                            setLoginModal: s,
                            setResetModal: x,
                            onEmailChange: p,
                        }),
                    c &&
                        e.jsx(M, {
                            setResetModal: x,
                            setLoginModal: s,
                            setForgottenModal: i,
                            email: o,
                        }),
                    !r &&
                        !l &&
                        !g &&
                        !c &&
                        e.jsx(F, {
                            setRegisterModal: n,
                            setLoginModal: s,
                            setForgottenModal: i,
                            setResetModal: x,
                        }),
                ],
            }),
        }),
    });
}
export { L as default };
