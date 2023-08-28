import{j as e,r as t,A as v,u as C,X as h,f as b,L as S}from"./index-d7cf4f9b.js";function P({setRegisterModal:r,setLoginModal:s}){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary",children:"Bienvenue sur Spotifake !"}),e.jsxs("div",{className:"flex flex-col items-center justify-center mt-4",children:[e.jsx("h2",{className:"text-lg font-bold text-center text-gray-100",children:"Connectez-vous pour accéder à votre compte"}),e.jsx("button",{className:"px-4 py-2 mt-4 text-lg font-bold text-center text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition delay-150 rounded-full",onClick:()=>{s(!0),r(!1)},children:"Se connecter"})]}),e.jsxs("div",{className:"flex flex-col items-center justify-center mt-4",children:[e.jsx("h2",{className:"text-md font-bold text-center text-gray-100",children:"Pas encore de compte ?"}),e.jsx("button",{className:"px-4 py-2 mt-4 text-lg font-bold text-center text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition delay-150 rounded-full",onClick:()=>{r(!0),s(!1)},children:"S'inscrire"})]})]})}function F({setRegisterModal:r,setLoginModal:s}){const{setIsLoggedIn:i,fetchUser:m}=t.useContext(v),[g,c]=t.useState(""),[l,n]=t.useState(""),[x,u]=t.useState(""),[o,p]=t.useState(""),[d,f]=t.useState(""),[j,N]=t.useState(""),[y,w]=t.useState("");C();const k=async()=>{try{const a=await b("POST","/api/register",{},{firstname:g,lastname:l,pseudo:x,email:o,password:d,confirm_password:j});a.status===201?(localStorage.setItem("token",a.data.token),i(!0),await m(),window.location.href="/user"):w("L'inscription a échoué. Veuillez vérifier vos identifiants.")}catch(a){console.error(a),w("Une erreur est survenue. Veuillez réessayer plus tard.")}};return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"absolute top-0 right-0 p-4",children:e.jsx(h,{className:"w-6 h-6 text-gray-100 cursor-pointer",onClick:()=>{r(!1)}})}),e.jsx("h1",{className:"text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-10",children:"Inscris toi à Spotifake !"}),e.jsxs("div",{className:"flex flex-col items-center justify-center my-4 w-5/6",children:[e.jsxs("h4",{className:"text-sm font-bold text-center text-gray-100",children:["Déjà inscris",e.jsx("button",{className:"pl-1 text-sm font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary cursor-pointer",onClick:()=>{s(!0),r(!1)},children:"connecte-toi"})]}),e.jsxs("div",{className:"relative m-2 w-full",children:[e.jsx("label",{htmlFor:"firstname",className:"absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100",children:"Prénom"}),e.jsx("input",{type:"text",name:"firstname",id:"firstname",className:"pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",placeholder:"Votre prénom",onChange:a=>c(a.target.value)})]}),e.jsxs("div",{className:"relative m-2 w-full",children:[e.jsx("label",{htmlFor:"lastname",className:"absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100",children:"Nom"}),e.jsx("input",{type:"text",name:"lastname",id:"lastname",className:"pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",placeholder:"Votre nom",onChange:a=>n(a.target.value)})]}),e.jsxs("div",{className:"relative m-2 w-full",children:[e.jsx("label",{htmlFor:"pseudo",className:"absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100",children:"Pseudo"}),e.jsx("input",{type:"text",name:"pseudo",id:"pseudo",className:"pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",placeholder:"Votre pseudo",onChange:a=>u(a.target.value)})]}),e.jsxs("div",{className:"relative m-2 w-full",children:[e.jsx("label",{htmlFor:"email",className:"absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100",children:"E-mail"}),e.jsx("input",{type:"text",name:"email",id:"email",className:"pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",placeholder:"exemple@spotifake.fr",onChange:a=>p(a.target.value)})]}),e.jsxs("div",{className:"relative m-2 w-full",children:[e.jsx("label",{htmlFor:"password",className:"absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100",children:"Mot de passe"}),e.jsx("input",{type:"password",name:"password",id:"password",className:"pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-2xl focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",placeholder:"••••••••••",onChange:a=>f(a.target.value)})]}),e.jsxs("div",{className:"relative m-2 w-full",children:[e.jsx("label",{htmlFor:"passwordConfirm",className:"absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100",children:"Confirmation mot de passe"}),e.jsx("input",{type:"password",name:"confirm_password",id:"confirm_password",className:"pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-2xl focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",placeholder:"••••••••••",onChange:a=>N(a.target.value)})]}),e.jsx("button",{className:"px-4 py-2 mt-3 text-lg font-bold text-center text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition delay-150 rounded-full",onClick:k,children:"S'inscrire"})]}),e.jsx("div",{className:"w-1/2 relative",children:y&&e.jsx("div",{className:"absolute w-full flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800",role:"alert",children:y})})]})}function V({setLoginModal:r,setRegisterModal:s,setForgottenModal:i}){const{fetchUser:m,setIsLoggedIn:g}=t.useContext(v),[c,l]=t.useState(""),[n,x]=t.useState(""),[u,o]=t.useState(""),p=async()=>{try{const d=await b("POST","/api/login",{},{email:c,password:n});d.status===200?(localStorage.setItem("token",d.data.token),g(!0),await m(),window.location.href="/user"):o("La connexion a échoué. Veuillez vérifier vos identifiants.")}catch(d){console.error(d),o("Une erreur est survenue. Veuillez réessayer plus tard.")}};return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"absolute top-0 right-0 p-4",children:e.jsx(h,{className:"w-6 h-6 text-gray-100 cursor-pointer",onClick:()=>{r(!1)}})}),e.jsx("h1",{className:"text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary",children:"Connecte-toi à Spotifake !"}),e.jsxs("div",{className:"flex flex-col items-center justify-center my-4 w-5/6",children:[e.jsxs("h4",{className:"text-sm font-bold text-center text-gray-100",children:["Pas encore inscris",e.jsx("button",{className:"pl-1 text-sm font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary cursor-pointer",onClick:()=>{s(!0),r(!1),i(!1)},children:"inscris-toi"})]}),e.jsxs("div",{className:"relative m-4 w-full",children:[e.jsx("label",{htmlFor:"email",className:"absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100",children:"E-mail"}),e.jsx("input",{type:"text",name:"email",id:"email",className:"pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",placeholder:"exemple@spotifake.fr",onChange:d=>l(d.target.value)})]}),e.jsxs("div",{className:"relative m-4 w-full",children:[e.jsx("label",{htmlFor:"password",className:"absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100",children:"Mot de passe"}),e.jsx("input",{type:"password",name:"password",id:"password",className:"pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-2xl focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",placeholder:"••••••••••",onChange:d=>x(d.target.value)})]}),e.jsx("button",{className:"pl-1 text-sm font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary cursor-pointer",onClick:()=>{r(!1),s(!1),i(!0)},children:"Mot de passe oublié ?"}),e.jsx("button",{className:"px-4 py-2 mt-4 text-lg font-bold text-center text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition delay-150 rounded-full",onClick:p,children:"Se connecter"})]}),e.jsx("div",{className:"w-1/2 relative",children:u&&e.jsx("div",{className:"absolute w-full flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800",role:"alert",children:u})})]})}function E({setForgottenModal:r,setLoginModal:s,setResetModal:i,onEmailChange:m}){const[g,c]=t.useState(""),[l,n]=t.useState("Réinitialiser le mot de passe"),x=o=>{const p=o.target.value;c(p),m(p)},u=async()=>{try{n("Redirection en cours..."),(await b("POST","/api/forgot-password",{},{email:g})).status===200?(i(!0),r(!1),s(!1)):(n("Un problème est survenu. Veuillez réessayer."),setTimeout(()=>{n("Réinitialiser le mot de passe")},3e3))}catch(o){console.error(o),alert("An error occurred. Please try again later.")}};return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"absolute top-0 right-0 p-4",children:e.jsx(h,{className:"w-6 h-6 text-gray-100 cursor-pointer",onClick:()=>{r(!1)}})}),e.jsx("h1",{className:"text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary",children:"Mot de passe oublié"}),e.jsxs("div",{className:"flex flex-col items-center justify-center mt-4 w-5/6",children:[e.jsxs("h4",{className:"text-sm font-bold text-center text-gray-100",children:["Retour à la page de connexion ?",e.jsx("button",{className:"pl-1 text-sm font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary cursor-pointer",onClick:()=>{s(!0),r(!1)},children:"Connecte-toi"})]}),e.jsxs("div",{className:"relative m-4 w-full",children:[e.jsx("label",{htmlFor:"email",className:"absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100",children:"E-mail"}),e.jsx("input",{type:"text",name:"email",id:"email",className:"pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",placeholder:"exemple@spotifake.fr",onChange:x})]}),e.jsx("button",{className:"px-4 py-2 mt-4 text-lg font-bold text-center text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition delay-150 rounded-full",onClick:u,disabled:l==="Redirection en cours..."||"Un problème est survenu. Veuillez réessayer.",children:l})]})]})}function R({setForgottenModal:r,setLoginModal:s,setResetModal:i,email:m}){const[g,c]=t.useState(""),[l,n]=t.useState(""),[x,u]=t.useState(""),[o,p]=t.useState(""),d=async()=>{if(l!==x){setTimeout(()=>{p("Les mots de passe doivent être identique")},3e3);return}try{(await b("POST","/api/reset-password",{},{email:m,codeValidation:g,password:l,confirm_password:x})).status===200?(i(!1),r(!1),s(!0)):alert("Une erreur s'est produite lors de la réinitialisation du mot de passe. Veuillez réessayer.")}catch(f){console.error(f),alert("An error occurred. Please try again later.")}};return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"absolute top-0 right-0 p-4",children:e.jsx(h,{className:"w-6 h-6 text-gray-100 cursor-pointer",onClick:()=>{i(!1)}})}),e.jsx("h1",{className:"text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary",children:"Réinitialisation du mot de passe"}),e.jsxs("div",{className:"flex flex-col items-center justify-center mt-4 w-5/6",children:[e.jsxs("div",{className:"relative m-4 w-full",children:[e.jsx("label",{htmlFor:"codeValidation",className:"absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100",children:"Code de validation"}),e.jsx("input",{type:"text",name:"codeValidation",id:"codeValidation",className:"pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",placeholder:"123456",value:g,onChange:f=>c(f.target.value)})]}),e.jsxs("div",{className:"relative m-4 w-full",children:[e.jsx("label",{htmlFor:"password",className:"absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100",children:"Nouveau mot de passe"}),e.jsx("input",{type:"password",name:"password",id:"password",className:"pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-2xl focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",placeholder:"••••••••••",value:l,onChange:f=>n(f.target.value)})]}),e.jsxs("div",{className:"relative m-4 w-full",children:[e.jsx("label",{htmlFor:"confirmPassword",className:"absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100",children:"Confirmer le mot de passe"}),e.jsx("input",{type:"password",name:"confirmPassword",id:"confirmPassword",className:"pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-2xl focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",placeholder:"••••••••••",value:x,onChange:f=>u(f.target.value)})]}),e.jsx("button",{className:"px-4 py-2 mt-4 text-lg font-bold text-center text-white bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition delay-150 rounded-full",onClick:d,children:"Réinitialiser le mot de passe"})]}),e.jsx("div",{className:"w-1/2 relative",children:o&&e.jsx("div",{className:"absolute w-full flex p-4 mb-4 mt-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800",role:"alert",children:o})})]})}function L(){const[r,s]=t.useState(!1),[i,m]=t.useState(!1),[g,c]=t.useState(!1),[l,n]=t.useState(!1),[x,u]=t.useState(""),o=p=>{u(p)};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex items-center justify-center h-[100vh] w-[100vw]",children:e.jsxs("div",{className:"flex flex-col items-center justify-center md:min-h-3/5 min-h-4/5 md:w-1/2 w-4/5 bg-light rounded-3xl relative md:px-16 px-8 py-16",children:[e.jsx("img",{src:S,alt:"Jambon Beurre Logo",className:"absolute -top-16 w-32"}),r&&e.jsx(V,{setLoginModal:s,setRegisterModal:m,setForgottenModal:c}),i&&e.jsx(F,{setRegisterModal:m,setLoginModal:s}),g&&e.jsx(E,{setForgottenModal:c,setLoginModal:s,setResetModal:n,onEmailChange:o}),l&&e.jsx(R,{setResetModal:n,setLoginModal:s,setForgottenModal:c,email:x}),!r&&!i&&!g&&!l&&e.jsx(P,{setRegisterModal:m,setLoginModal:s,setForgottenModal:c,setResetModal:n})]})})})}export{L as default};
