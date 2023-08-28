import{r as l,A as b,B as j,j as e,X as m}from"./index-d7cf4f9b.js";function C({showPlaylistSelector:x,setShowPlaylistSelector:r,selectedMusic:a,setSelectedMusic:d}){const{user:h,fetchUser:g}=l.useContext(b),{addTrackToPlaylist:o,createPlaylist:u}=l.useContext(j),[y,s]=l.useState(!1),[n,i]=l.useState(""),[v,c]=l.useState(null),f=t=>{o(a.id,t.id),N()},p=async()=>{try{const t=await u(n,g);await o(a.id,t),console.log("Nouvelle playlist créée et la chanson ajoutée à la playlist."),s(!1),i("")}catch(t){c(t.message)}},N=()=>{r(!1),d(null)};return e.jsx(e.Fragment,{children:x&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 cursor-default px-4",children:e.jsx("div",{className:"relative bg-light px-10 py-6 md:w-1/2 w-full max-h-[50vh] rounded-2xl",children:y?e.jsxs("div",{className:"flex flex-col h-full items-center justify-center",children:[e.jsx("div",{className:"absolute top-4 right-4",children:e.jsx(m,{className:"w-6 h-6 text-gray-400 cursor-pointer",onClick:()=>s(!1)})}),e.jsxs("h1",{className:"text-center font-bold text-gray-400 my-4",children:['Ajouter " ',a==null?void 0:a.title,' " à :']}),e.jsxs("div",{className:"relative w-2/3",children:[e.jsx("label",{htmlFor:"newPlaylistName",className:"absolute -top-2 left-2 inline-block px-1 text-xs bg-light font-medium text-gray-100",children:"Nom de la playlist"}),e.jsx("input",{type:"text",name:"newPlaylistName",id:"newPlaylistName",className:"pl-2 block w-full rounded-md border-0 py-1.5 bg-light text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",placeholder:"",value:n,onChange:t=>i(t.target.value)}),e.jsx("button",{className:"mt-2 bg-gray-500 text-white rounded-xl p-2 w-full hover:bg-gray-600 transition delay-50",onClick:()=>{n.length>0&&p().then(()=>{console.log("Playlist créée avec succès.")}).catch(t=>c(t.message)),s(!1),r(!1)},children:"Valider"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"absolute top-4 right-4",onClick:()=>r(!1),children:e.jsx(m,{className:"w-6 h-6 text-gray-400 cursor-pointer"})}),e.jsxs("h1",{className:"text-center font-bold text-gray-400 my-4",children:['Ajouter " ',a==null?void 0:a.title,' " à une playlist :']}),e.jsx("div",{className:"overflow-auto max-h-[35vh] items-center flex flex-col",children:h.playlists.map(t=>e.jsx("div",{className:"text-center font-semibold cursor-pointer mb-4 py-1 md:w-1/2 w-full hover:bg-gradient-to-b hover:from-primary/25 hover:to-secondary/50 rounded-full",onClick:()=>f(t),children:t.name},t.id))}),e.jsx("div",{className:"text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold cursor-pointer",onClick:()=>s(!0),children:"Créer une nouvelle playlist"})]})})})})}export{C as P};
