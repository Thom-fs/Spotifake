import{r as a,A as e,j as t}from"./index-0525d998.js";import{N as i,C as n}from"./Card-d8e2b740.js";function o(s){return s.map(r=>t.jsx(n,{onClickLink:`/user/playlists/${r.id}`,title:r.name},r.id))}function d(){const{userPlaylists:s}=a.useContext(e);return console.log("playlistslist 20",s),t.jsx("div",{className:"mt-8",children:t.jsx("div",{className:"grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-2 place-content-around",children:s.length>0?o(s):t.jsx(i,{})})})}export{d as default};
