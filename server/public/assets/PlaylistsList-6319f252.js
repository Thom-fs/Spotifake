import{r as l,A as u,B as m,j as e,F as g,X as p}from"./index-d7cf4f9b.js";import{C as y}from"./Card-4c089504.js";import"./TrashIcon-424d56fa.js";const f="/assets/playlist-98bd9f9c.png";function j(t,a){return t.map(s=>e.jsx(y,{onClickLink:`/user/playlists/${s.id}`,title:s.name,showDeleteIcon:!0,onDelete:()=>a(s.id)},s.id))}const N=({onClose:t})=>{const{createPlaylist:a}=l.useContext(m),{fetchUser:s}=l.useContext(u),[o,n]=l.useState(""),[i,c]=l.useState(null),d=async()=>{try{await a(o,s),n(""),t()}catch(r){c(r.message)}};return e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 cursor-default",children:e.jsxs("div",{className:"relative bg-light px-10 py-6 rounded-2xl",children:[e.jsx("button",{className:"absolute top-2 right-2 ",onClick:t,children:e.jsx(p,{className:"w-6 h-6 text-gray-400 cursor-pointer"})}),e.jsx("div",{className:"text-center font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary cursor-pointer",children:"Nouvelle playlist"}),e.jsxs("div",{className:"mt-4",children:[e.jsx("input",{type:"text",value:o,onChange:r=>n(r.target.value),className:"border border-gray-400 rounded-xl p-2 w-full text-light",placeholder:"Nom de la playlist"}),e.jsx("button",{onClick:d,className:"mt-2 bg-gray-500 text-white rounded-xl p-2 w-full hover:bg-gray-600 transition delay-50",children:"Valider"}),i&&e.jsx("div",{className:"error",children:i})]})]})})};function w(){var r;const{userPlaylists:t}=l.useContext(u),{deletePlaylist:a}=l.useContext(m),[s,o]=l.useState(!1),{fetchUser:n}=l.useContext(u),i=()=>{o(!1)},c=async x=>{try{await a(x,n)}catch(h){console.error(h)}};function d(...x){return x.filter(Boolean).join(" ")}return((r=t[0])==null?void 0:r.status)==="loading"?e.jsx(g,{}):e.jsxs("div",{className:"mt-8 px-2",children:[e.jsx("h1",{className:"sm:w-1/2 w-full bg-light text-gray-300 text-2xl flex justify-center font-semibold p-3 rounded-full mx-auto mb-8",children:"PLAYLISTS"}),e.jsxs("div",{className:"grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-2 place-content-around",children:[t.length>0&&j(t,c),e.jsxs("div",{onClick:()=>{o(!0)},className:d("flex flex-col bg-light w-48 h-64 rounded-xl p-4 mx-auto hover:bg-gradient-to-b hover:from-primary/25 hover:to-secondary/50 cursor-pointer",!t.length&&"col-span-full"),children:[e.jsx("img",{className:"mx-auto ",src:f,alt:"playlist creation logo"}),e.jsx("div",{className:"flex flex-col justify-center",children:e.jsx("h3",{className:"text-gray-400 text-center text-sm font-semibold tracking-wider",children:"Creer ta propre playlist !"})})]})]}),s&&e.jsx(N,{onClose:i})]})}export{w as default};
