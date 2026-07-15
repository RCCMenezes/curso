const slides=[...document.querySelectorAll('.slide')];
const counter=document.getElementById('counter'),bar=document.getElementById('progressBar');
const prev=document.getElementById('prevBtn'),next=document.getElementById('nextBtn');
const panel=document.getElementById('indexPanel'),backdrop=document.getElementById('backdrop');
let current=Math.max(0,Math.min(slides.length-1,(parseInt(location.hash.slice(1),10)||1)-1));

function show(n,push=true){
  current=Math.max(0,Math.min(slides.length-1,n));
  slides.forEach((s,i)=>s.classList.toggle('active',i===current));
  counter.textContent=`${current+1} / ${slides.length}`;
  bar.style.width=`${((current+1)/slides.length)*100}%`;
  prev.disabled=current===0; next.disabled=current===slides.length-1;
  if(push) history.replaceState(null,'',`#${current+1}`);
  document.querySelectorAll('#indexList a').forEach((a,i)=>a.classList.toggle('current',i===current));
  slides[current].scrollTop=0;
}
function closeIndex(){panel.classList.remove('open');backdrop.classList.remove('open');panel.setAttribute('aria-hidden','true')}
function openIndex(){panel.classList.add('open');backdrop.classList.add('open');panel.setAttribute('aria-hidden','false')}

slides.forEach((s,i)=>{const a=document.createElement('a');a.href=`#${i+1}`;a.innerHTML=`<span>${String(i+1).padStart(2,'0')}</span><span>${s.dataset.title}</span>`;a.onclick=e=>{e.preventDefault();show(i);closeIndex()};document.getElementById('indexList').appendChild(a)});
prev.onclick=()=>show(current-1);next.onclick=()=>show(current+1);
document.getElementById('indexBtn').onclick=openIndex;document.getElementById('closeIndex').onclick=closeIndex;backdrop.onclick=closeIndex;
document.getElementById('notesBtn').onclick=()=>document.body.classList.toggle('show-notes');
document.getElementById('fullBtn').onclick=()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen();
addEventListener('hashchange',()=>show((parseInt(location.hash.slice(1),10)||1)-1,false));
addEventListener('keydown',e=>{if(['ArrowRight',' ','PageDown'].includes(e.key)){e.preventDefault();show(current+1)}if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();show(current-1)}if(e.key.toLowerCase()==='f')document.getElementById('fullBtn').click();if(e.key.toLowerCase()==='n')document.getElementById('notesBtn').click();if(e.key.toLowerCase()==='i')panel.classList.contains('open')?closeIndex():openIndex();if(e.key==='Escape')closeIndex()});
let touchX=0;addEventListener('touchstart',e=>touchX=e.changedTouches[0].screenX,{passive:true});addEventListener('touchend',e=>{const d=e.changedTouches[0].screenX-touchX;if(Math.abs(d)>60)show(current+(d<0?1:-1))},{passive:true});

const pts=[{x:90,y:190},{x:230,y:90},{x:390,y:90},{x:550,y:90},{x:230,y:285},{x:390,y:190},{x:550,y:285},{x:90,y:90},{x:390,y:285},{x:550,y:190}];
const colors=['#ff7043','#154f3f'];const lines=document.getElementById('routeLines'),nodes=document.getElementById('routeNodes');
pts.forEach((p,i)=>{nodes.insertAdjacentHTML('beforeend',`<g class="route-node"><circle cx="${p.x}" cy="${p.y}" r="${i===0?15:12}" fill="${i===0?'#12211c':'#68766f'}"/><text x="${p.x}" y="${p.y}">${i===0?'D':i}</text></g>`)});
function dist(order){let d=0;for(let i=1;i<order.length;i++)d+=Math.hypot(pts[order[i]].x-pts[order[i-1]].x,pts[order[i]].y-pts[order[i-1]].y);return Math.round(d)}
function draw(routes){lines.innerHTML='';let total=0;routes.forEach((r,i)=>{total+=dist(r);const d=r.map((n,j)=>`${j?'L':'M'}${pts[n].x} ${pts[n].y}`).join(' ');lines.insertAdjacentHTML('beforeend',`<path class="route-line" d="${d}" stroke="${colors[i]}"/>`)});document.getElementById('kmValue').textContent=total}
const initial=[[0,3,4,2,9,1,0],[0,6,7,5,8,0]],optimized=[[0,7,1,2,5,4,0],[0,3,9,6,8,0]];
draw(initial);document.getElementById('optimizeBtn').onclick=()=>draw(optimized);document.getElementById('resetRouteBtn').onclick=()=>draw(initial);show(current,false);
