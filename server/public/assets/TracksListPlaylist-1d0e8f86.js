import{F as u,r as a,B as m,G as h,j as e,H as f,J as y,K as j}from"./index-0525d998.js";function b(){const{id:l}=u(),{fetchTracksByPlaylistId:i}=a.useContext(m),{setCurrentMusic:n,currentMusic:o,setCurrentPlaylist:c}=h(),[r,d]=a.useState([]);async function x(){try{const s=await i(l);console.log("tracksPlaylist",s),d(s)}catch(s){console.error(s)}}return a.useEffect(()=>{x()},[l]),e.jsx("div",{className:"md:w-1/2 sm:w-2/3 w-full px-4 py-6 mx-auto flex flex-col gap-4",children:r.map(s=>{const t=o.url===s.url;return e.jsxs("div",{className:`${t?" border-primary":"border-transparent"} flex gap-2 text-xs relative transition-shadow duration-300 shadow-lg hover:shadow-none bg-light rounded-2xl overflow-hidden text-white border-2 border-dashed`,children:[e.jsx("div",{className:"w-3/12 h-24",children:s.thumbnail?e.jsx("img",{className:"rounded-lg h-full w-full object-cover",alt:s.title,src:s.thumbnail}):e.jsx(f,{})}),e.jsxs("div",{className:"w-8/12 flex flex-col gap-2 justify-center",children:[e.jsx("h6",{className:"font-semibold text-sm",children:s.title}),e.jsx("p",{className:"text-xs text-gray-400",children:s.duration})]}),e.jsx("div",{onClick:()=>{t||(n(s,!0),c(r))},className:"w-1/6 min-w-[75px] flex justify-center items-center text-3xl bg-black/10 cursor-pointer",children:t?e.jsx(y,{}):e.jsx(j,{})})]},s.id)})})}export{b as default};