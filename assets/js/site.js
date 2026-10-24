
(()=>{
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const I={"duo": "assets/img/pablo-duo.webp", "color": "assets/img/pablo-color.webp", "logofolio": "assets/img/logofolio.webp", "sem_logo": "assets/img/semilleros-logo.webp", "sem_simb": "assets/img/semilleros-simbolo.webp", "sem_pap": "assets/img/semilleros-papeleria.webp", "sem_tote": "assets/img/semilleros-tote.webp", "oly_logo": "assets/img/olympo-logo.webp", "oly_carta": "assets/img/olympo-carta.webp", "oly_vasos": "assets/img/olympo-vasos.webp", "oly_buso": "assets/img/olympo-buso.webp", "oly_afiche": "assets/img/olympo-afiche.webp", "pan_bolsa": "assets/img/pandeldia-bolsa.webp", "pan_emp": "assets/img/pandeldia-empaque.webp", "pan_pap": "assets/img/pandeldia-papeleria.webp", "dor1": "assets/img/eldorado-1.webp", "dor2": "assets/img/eldorado-2.webp", "bam_carta": "assets/img/bambinas-carta.webp", "bam_carta2": "assets/img/bambinas-carta-2.webp", "oly_ed1": "assets/img/olympo-carta-batidos.webp", "oly_ed2": "assets/img/olympo-carta-ensaladas.webp", "somos1": "assets/img/somos-1.webp", "somos2": "assets/img/somos-2.webp", "somos3": "assets/img/somos-3.webp", "sel_mapa": "assets/img/selecu-mapa.webp", "sel_olvido": "assets/img/selecu-olvido.webp", "sel_juego": "assets/img/selecu-olvido-juego.webp", "sel_pueblos": "assets/img/selecu-pueblos.webp", "sel_nave": "assets/img/selecu-nave.webp", "sel_pihe": "assets/img/selecu-pihe.webp", "bam_st1": "assets/img/bambinas-story-01.webp", "bam_st2": "assets/img/bambinas-story-02.webp", "bam_st3": "assets/img/bambinas-story-03.webp", "bam_st4": "assets/img/bambinas-story-04.webp", "bam_st5": "assets/img/bambinas-story-05.webp", "bam_st6": "assets/img/bambinas-story-06.webp", "bam_st7": "assets/img/bambinas-story-07.webp", "bam_st8": "assets/img/bambinas-story-08.webp", "bam_st9": "assets/img/bambinas-story-09.webp", "bam_st10": "assets/img/bambinas-story-10.webp", "careerbit1": "assets/img/careerbit-1.webp", "careerbit2": "assets/img/careerbit-2.webp", "careerbit3": "assets/img/careerbit-3.webp", "careerbit4": "assets/img/careerbit-4.webp", "careerbit5": "assets/img/careerbit-5.webp", "lifejourney1": "assets/img/lifejourney-1.webp", "lifejourney2": "assets/img/lifejourney-2.webp", "lifejourney3": "assets/img/lifejourney-3.webp", "previlabor1": "assets/img/previlabor-1.webp", "leasere1": "assets/img/leasere-1.webp", "leasere2": "assets/img/leasere-2.webp", "leasere3": "assets/img/leasere-3.webp"};
const CFG={email:'pabsanchez@gmail.com',web3formsKey:''}; // pega aquí tu clave de Web3Forms
const P=[
 {id:'logofolio',t:'LogoFolio',sec:'grafico',cat:'Identidad visual',k:'Selección de logotipos',cover:'logofolio',wide:1,imgs:['logofolio'],tools:'Illustrator',x:'Una selección de logotipos creados para marcas de turismo, tecnología, logística, alimentos y servicios: eDesign, Stattus Prime, Lucy Cano Turismo, Elemento, Estibas Estra, Pan del Día, Third Planet Group, GridVibe y Pixels.'},
 {id:'semilleros',t:'Semilleros EAFIT',sec:'grafico',cat:'Identidad visual',k:'Logo · papelería · merch',cover:'sem_pap',imgs:['sem_logo','sem_simb','sem_pap','sem_tote'],tools:'Illustrator · Photoshop',x:'Comunidad de aprendizaje entre estudiantes y profesores de EAFIT, un espacio libre de restricciones curriculares para la investigación multidisciplinaria. Se desarrolló la identidad visual completa: símbolo, logotipo, papelería, carnés, afiches y merchandising.'},
 {id:'olympo',t:'Olympo',sec:'grafico',cat:'Identidad visual',k:'Marca · carta · campaña',cover:'oly_afiche',imgs:['oly_logo','oly_carta','oly_vasos','oly_buso','oly_afiche'],tools:'Illustrator · Photoshop · IA',x:'Marca enfocada en la salud y el bienestar a través de la alimentación saludable, inspirada en la fortaleza de la antigua Grecia. Incluyó narrativa de marca, carta, guiones para redes, mensajes clave, un jingle y expresiones inspiradoras.'},
 {id:'pandeldia',t:'Pan del Día',sec:'grafico',cat:'Empaque',k:'Identidad · empaque · brochure',cover:'pan_bolsa',imgs:['pan_bolsa','pan_emp','pan_pap'],tools:'Illustrator · Photoshop',x:'Marca de panes artesanales nacida en una corporación de Medellín que impulsa emprendimientos locales. Se desarrolló la identidad visual, incluido el logo, y un brochure para su distribución en supermercados.'},
 {id:'eldorado',t:'Café El Dorado',sec:'grafico',cat:'Editorial',k:'Carta · diagramación',cover:'dor1',wide:1,imgs:['dor1','dor2'],tools:'Illustrator',x:'Carta diseñada y estructurada de manera clara y atractiva, con los productos organizados por categorías para facilitar la experiencia del cliente y destacar bebidas, repostería y demás opciones.'},
 {id:'bambinas',t:'Bambina’s · Carta',sec:'grafico',cat:'Editorial',k:'Carta · café bar',cover:'bam_carta',imgs:['bam_carta','bam_carta2'],tools:'Illustrator · Photoshop',x:'Carta con un estilo atractivo y funcional que presenta con claridad las categorías de bebidas y alimentos, reflejando la esencia de este café bar.'},
 {id:'olympo-carta',t:'Olympo · Carta',sec:'grafico',cat:'Editorial',k:'Carta · nutrición',cover:'oly_ed1',imgs:['oly_ed1','oly_ed2'],tools:'Illustrator',x:'Carta de batidos, ensaladas y waffles con información nutricional, construida sobre el sistema gráfico de la marca Olympo.'},
 {id:'bambinas-stories',t:'Bambina’s · Stories',sec:'grafico',cat:'Redes',k:'Stories para redes',cover:'bam_st2',wide:1,cols:2,imgs:['bam_st1','bam_st2','bam_st3','bam_st4','bam_st5','bam_st6','bam_st7','bam_st8','bam_st9','bam_st10'],tools:'Photoshop · Illustrator',x:'Versión de la carta adaptada a stories, con una diagramación pensada para leerse en vertical y en segundos.'},
 {id:'somos',t:'Somos Naturaleza',sec:'grafico',cat:'Redes',k:'Publicaciones',cover:'somos2',cols:2,imgs:['somos1','somos2','somos3'],tools:'Photoshop · Illustrator',x:'Apoyo en la elaboración y optimización de publicaciones para redes sociales, alineando el contenido con la identidad y los valores del colectivo.'},
 {id:'selecu',t:'Selecu',sec:'digital',cat:'Plataforma educativa',k:'UX/UI · dirección de arte',cover:'sel_pueblos',wide:1,caso:1},
 {id:'careerbit',t:'CareerBit',sec:'digital',cat:'App móvil',k:'UX/UI · wireframes',cover:'careerbit4',caso:1},
 {id:'lifejourney',t:'Lifejourney',sec:'digital',cat:'Plataforma web',k:'UX/UI · prototipos',cover:'lifejourney1',wide:1,caso:1},
 {id:'leasere',t:'LeaseRE',sec:'digital',cat:'Inmobiliaria',k:'MVP · wireframes',cover:'leasere1',caso:1},
 {id:'previlabor',t:'Previlabor',sec:'digital',cat:'Sitio web',k:'Diseño UI · redacción',cover:'previlabor1',wide:1,caso:1},
];
const byId=Object.fromEntries(P.map(p=>[p.id,p]));
const C={
 selecu:{sub:'Plataforma educativa infantil · Líder UX/UI y dirección de arte · 2021 – 2023',cover:'sel_mapa',
  pr:'Tras meses de encierro por la pandemia, hacía falta una plataforma digital que facilitara aprendizajes más complejos para niños y niñas desde casa, sin perder calidad ni experiencia de aprendizaje.',
  rol:'Empecé como diseñador UX/UI e investigué con usuarios para validar el enfoque de aprendizaje basado en juegos. Con el MVP en marcha asumí el liderazgo de Diseño Gráfico, Diseño de Niveles, Diseño Sonoro e Ilustración.',
  ent:'Investigación, prototipos, dirección de arte, portadas de juegos, navegación y menú principal.',
  gal:[['sel_olvido','full','Openings · Dirección de arte · La Canción del Olvido'],['sel_pueblos','','La Edad de los Pueblos'],['sel_nave','','La Nave Nodriza del Fin del Mundo'],['sel_juego','full','La Canción del Olvido · portada y nivel'],['sel_pihe','full','PIHE · Programa de Instrumentalización Humana Estacionaria']]},
 careerbit:{sub:'App móvil de orientación laboral · UX/UI · Proyecto de tiempo limitado',cover:'careerbit4',fit:'contain',
  pr:'Estudiantes e instituciones educativas no tenían una solución integral que diera una comprensión clara y personalizada de las habilidades necesarias para el mercado laboral. La desconexión entre las evaluaciones disponibles y las oportunidades reales generaba una experiencia fragmentada.',
  rol:'En este proyecto de tiempo limitado me centré en un levantamiento de información ágil. Junto con los clientes generamos bocetos y wireframes para explorar enfoques y obtener retroalimentación temprana; luego acompañé al equipo de desarrollo en la creación de la aplicación.',
  ent:'Levantamiento de información, bocetos, wireframes e interfaz final.',
  gal:[['careerbit1','','Bocetos'],['careerbit2','','Bocetos'],['careerbit3','','Wireframes'],['careerbit4','','Interfaz final'],['careerbit5','full','Interfaz final']]},
 lifejourney:{sub:'Plataforma web de aprendizaje y empleabilidad · UX/UI',cover:'lifejourney1',
  pr:'Existe una brecha entre las habilidades de los estudiantes y las demandas del mercado laboral. Hacía falta una plataforma que conectara de forma efectiva esas habilidades con oportunidades reales y mejorara la empleabilidad.',
  rol:'Recopilé y entendí los requisitos del cliente y trabajé con el CTO y el equipo de desarrollo para definir la jerarquía de la información y el flujo de usuario. Tras varias iteraciones entregamos prototipos de alta fidelidad listos para implementar.',
  ent:'Requisitos, arquitectura de información, flujos de usuario y prototipos de alta fidelidad.',
  gal:[['lifejourney1','full','Catálogo de cursos'],['lifejourney2','full','Panel de estadísticas'],['lifejourney3','full','Vista de lección']]},
 leasere:{sub:'Plataforma inmobiliaria · MVP para atraer inversión',cover:'leasere1',fit:'top',
  pr:'Buscar, alquilar o comprar una propiedad implica información dispersa y procesos complejos. Los usuarios necesitaban una plataforma centralizada que simplificara la búsqueda y la toma de decisiones.',
  rol:'Trabajé directamente con los clientes que buscaban desarrollar un MVP para atraer inversión: levanté requerimientos y creé los bocetos y wireframes iniciales que sirvieron de base para el desarrollo.',
  ent:'Levantamiento de requerimientos, bocetos y wireframes.',
  gal:[['leasere1','','Página de inicio'],['leasere2','','Detalle y recomendaciones'],['leasere3','full','Búsqueda con mapa']]},
 previlabor:{sub:'Sitio web · Diseño UI y redacción',cover:'previlabor1',fit:'top',
  pr:'El cliente no tenía claras las necesidades ni el alcance de la plataforma, y no existían contenidos reales para alimentar el sitio.',
  rol:'Diseñé toda la interfaz gráfica del sitio y redacté todos los textos, desde descripciones hasta llamados a la acción, alineados con la identidad de Previlabor. Trabajé con el desarrollador para implementar diseño y textos según las necesidades del cliente.',
  ent:'Diseño UI completo y redacción de contenidos.',
  gal:[['previlabor1','full','Página de inicio']]},
};
const link=p=>p.caso?'#caso/'+p.id:'#p/'+p.id;
const SVC=['Identidad visual','Empaque y etiquetas','Redes sociales','Editorial / carta / revista','Landing page o micrositio','Video con IA'];
const heart='<svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.8 4.5c2.1 0 3.6 1.2 5.2 3 1.6-1.8 3.1-3 5.2-3 3.8 0 5.9 3.9 4.4 7.3C19.5 16.4 12 21 12 21z"/></svg>';

// Estado (se guarda en el navegador)
const S={fav:[],cart:[]};
try{Object.assign(S,JSON.parse(localStorage.getItem('pabs')||'{}'))}catch(e){}
const save=()=>{try{localStorage.setItem('pabs',JSON.stringify(S))}catch(e){}};
const toast=$('#toast');let tt;
function say(t,link){toast.querySelector('span').innerHTML=t+(link?` <a href="${link[1]}">${link[0]}</a>`:'');toast.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>toast.classList.remove('on'),2600)}
function badges(bump){[['#favN',S.fav.length,'#favBtn'],['#cartN',S.cart.length,'#cartBtn']].forEach(([b,n,btn])=>{$(b).textContent=n;$(b).classList.toggle('on',n>0)});if(bump){const e=$(bump);e.classList.remove('bump');void e.offsetWidth;e.classList.add('bump')}}
function syncButtons(){
  $$('[data-fav]').forEach(h=>h.setAttribute('aria-pressed',S.fav.includes(h.dataset.fav)));
  $$('[data-add]').forEach(a=>{const on=S.cart.some(c=>c.id===a.dataset.add);a.classList.toggle('ok',on);a.innerHTML=on?'En tu pedido <span>✓</span>':'Quiero algo así <span>+</span>'});
}
document.addEventListener('click',e=>{
  const f=e.target.closest('[data-fav]');
  if(f){e.preventDefault();e.stopPropagation();const id=f.dataset.fav,i=S.fav.indexOf(id);if(i<0){S.fav.push(id);say('Guardado en favoritos',['Ver','#favoritos'])}else{S.fav.splice(i,1);say('Quitado de favoritos')}save();badges('#favBtn');syncButtons();if(location.hash==='#favoritos')renderFav();return}
  const a=e.target.closest('[data-add]');
  if(a){e.preventDefault();e.stopPropagation();const id=a.dataset.add;if(S.cart.some(c=>c.id===id)){location.hash='#carrito';return}S.cart.push({id,kind:'ref'});save();badges('#cartBtn');syncButtons();say('Agregado a tu pedido: '+byId[id].t,['Ver pedido','#carrito']);return}
  const g=e.target.closest('[data-go]'); if(g){location.hash=g.dataset.go}
});

// Tarjetas
const card=(p,i)=>`<article class="card${p.wide?' wide':''}" style="transition-delay:${(i%4)*.07}s">
 <div class="ph" data-go="${link(p)}"><img src="${I[p.cover]}" alt="${p.t}" loading="lazy"><span class="tag">${p.cat}</span><button class="heart" data-fav="${p.id}" aria-pressed="false" aria-label="Agregar ${p.t} a favoritos">${heart}</button><span class="view-lbl">Ver proyecto →</span></div>
 <h3 data-go="${link(p)}">${p.t}</h3><p>${p.k}</p>
 <button class="add" data-add="${p.id}">Quiero algo así <span>+</span></button></article>`;
const reveal=root=>{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});$$(root+' .card,'+root+' .gal img,'+root+' .case-gal img').forEach(el=>io.observe(el))};

// Inicio
$('#homeList').innerHTML=['semilleros','olympo','pandeldia','eldorado','bambinas-stories','selecu'].map(id=>{const p=byId[id];return `<li class="cols" data-go="${link(p)}" data-img="${p.cover}"><span class="t">${p.t}</span><span class="k">${p.cat}<br>${p.k}</span></li>`}).join('');
const pv=$('#preview'),pimg=pv.querySelector('img');let px=0,py=0,cx=0,cy=0;
$$('#homeList li').forEach(li=>{li.onmouseenter=()=>{pimg.src=I[li.dataset.img];pv.classList.add('on')};li.onmouseleave=()=>pv.classList.remove('on')});
addEventListener('pointermove',e=>{px=e.clientX;py=e.clientY});
(function f(){cx+=(px-cx)*.12;cy+=(py-cy)*.12;pv.style.left=cx+'px';pv.style.top=cy+'px';requestAnimationFrame(f)})();
const ph=$('#photo'),col=$('#colorImg'),dot=$('#cdot');let r=0,tr=0,mx=0,my=0;
ph.addEventListener('pointerenter',()=>{tr=90;dot.style.opacity=1});ph.addEventListener('pointerleave',()=>{tr=0;dot.style.opacity=0});
ph.addEventListener('pointermove',e=>{const b=ph.getBoundingClientRect();mx=e.clientX-b.left;my=e.clientY-b.top;dot.style.transform=`translate(${e.clientX}px,${e.clientY}px)`});
(function loop(){r+=(tr-r)*.15;col.style.clipPath=`circle(${r}px at ${mx}px ${my}px)`;requestAnimationFrame(loop)})();

// Gráfico con filtros
const cats=['Todo','Identidad visual','Empaque','Editorial','Redes'];let cur='Todo';
function renderG(){const list=P.filter(p=>p.sec==='grafico'&&(cur==='Todo'||p.cat===cur));$('#shopG').innerHTML=list.map(card).join('');$('#count').textContent=list.length+' proyectos';$('#chips').innerHTML=cats.map(c=>`<button class="chip${c===cur?' on':''}" data-cat="${c}">${c}</button>`).join('');$$('#chips .chip').forEach(b=>b.onclick=()=>{cur=b.dataset.cat;renderG()});syncButtons();reveal('#shopG')}
function renderD(){$('#shopD').innerHTML=P.filter(p=>p.sec==='digital').map(card).join('');syncButtons();reveal('#shopD')}

// Ficha
function renderP(id){const p=byId[id]||byId.semilleros;const g=P.filter(x=>x.sec==='grafico'),n=g[(g.indexOf(p)+1)%g.length];
 $('#crumbs').innerHTML=`<a href="#grafico">Diseño Gráfico</a> / ${p.cat} / ${p.t}`;
 $('#pdGal').className='gal'+(p.cols?' c2':'');$('#pdGal').innerHTML=p.imgs.map(k=>`<img src="${I[k]}" alt="${p.t}" loading="lazy">`).join('');
 $('#pdInfo').innerHTML=`<span class="tag">${p.cat}</span><h1 class="mega">${p.t}</h1><p class="lead">${p.x}</p>
 <ul class="specs"><li><b>Categoría</b><span>${p.cat}</span></li><li><b>Entregables</b><span>${p.k}</span></li><li><b>Herramientas</b><span>${p.tools}</span></li></ul>
 <div class="btnrow"><button class="add" data-add="${p.id}">Quiero algo así <span>+</span></button><button class="heart" data-fav="${p.id}" aria-pressed="false" aria-label="Favorito">${heart}</button></div>`;
 $('#pdNext').innerHTML=`<a href="#p/${n.id}"><span class="eyebrow">Siguiente proyecto</span><div class="mega">${n.t} →</div></a>`;
 syncButtons();reveal('[data-view="p"]')}

// Caso digital
function renderCase(id){const p=byId[id]&&byId[id].caso?byId[id]:byId.selecu,c=C[p.id];const d=P.filter(x=>x.sec==='digital'),n=d[(d.indexOf(p)+1)%d.length];
 $('#caseRoot').innerHTML=`<div class="case-hero cols"><div class="crumbs"><a href="#digital">Productos Digitales</a> / ${p.t}</div>
 <h1 class="ttl mega h1 pad"><span class="l"><span>${p.t}</span></span></h1><p class="pad eyebrow">${c.sub}</p>
 <div class="case-cover ${c.fit||''}"><img id="parallax" src="${I[c.cover]}" alt="${p.t}"></div></div>
 <div class="case-txt"><div class="row cols"><span class="k">El problema</span><p class="v lead">${c.pr}</p></div><div class="row cols"><span class="k">Rol en el proyecto</span><p class="v lead">${c.rol}</p></div><div class="row cols"><span class="k">Entregables</span><p class="v lead">${c.ent}</p></div></div>
 <div class="case-gal cols">${c.gal.map(g=>`<figure class="${g[1]}"><img src="${I[g[0]]}" alt="${p.t} · ${g[2]}" loading="lazy"><figcaption>${g[2]}</figcaption></figure>`).join('')}</div>
 <div class="case-cta cols"><div class="pad btnrow"><button class="add" data-add="${p.id}">Quiero algo así <span>+</span></button><button class="heart" data-fav="${p.id}" aria-pressed="false" aria-label="Favorito">${heart}</button></div></div>
 <div class="next cols" style="margin-top:0"><a href="#caso/${n.id}"><span class="eyebrow">Siguiente proyecto</span><div class="mega">${n.t} →</div></a></div>`;
 syncButtons();reveal('#caseRoot')}

// Hoja de vida
const ST=[
 {y:'Hoy',tg:'Freelance · gráfico y textil',sum:[['Diseñador textil freelance','Independiente · mar. 2025 – hoy'],['Diseñador gráfico freelance','Upwork y clientes directos · mar. 2023 – hoy']],jobs:[['2025 – hoy','Diseñador textil freelance · Independiente','Conceptualización de colecciones para marcas de moda de Medellín como Bukuri y Romang, en líneas streetwear y casual wear. Desarrollo de estampados desde la idea inicial hasta el arte final listo para producción.'],['2023 – hoy','Diseñador gráfico freelance · Upwork y clientes directos','Identidades visuales, revistas, folletos y sitios web para Previlabor, Funos, Olympo, Semilleros EAFIT y Pan del Día.']]},
 {y:'2019–2023',tg:'Producto digital y liderazgo',sum:[['Líder UX/UI · Selecu','mar. 2021 – feb. 2023'],['UX Designer · Territorium','may. 2021 – dic. 2022']],jobs:[['2021 – 2023','Líder UX/UI · Selecu','Diseño integral de una plataforma educativa para niños. Dirigí los equipos de diseño UX/UI, diseño sonoro e ilustración.'],['2021 – 2022','UX Designer · Territorium','Diseño de la plataforma Comprehensive Learner Record (CLR), con más de 6 millones de usuarios.']]},
 {y:'2015–2018',tg:'In-house: marca, empaque y comercial',sum:[['Diseñador jefe · Global Sports','feb. 2018 – feb. 2019'],['Coordinador de diseño · Labs Laproff','ene. 2015 – feb. 2016']],jobs:[['2018 – 2019','Diseñador jefe · Global Sports','Primer sitio web de la empresa y sistema de presentación comercial que impulsó un 20% más de negociaciones de pauta en eventos deportivos.'],['2015 – 2016','Coordinador de diseño · Labs Laproff','Más de 220 empaques y envases con supervisión de producción, 4 eventos nacionales y piezas de cultura corporativa.']]},
 {y:'2004–2014',tg:'BTL, preprensa, digital, textil y docencia',sum:[['Diseñador BTL · Solugistik','mar. – dic. 2014'],['Arte finalista · Quad Graphics','2013 – 2014'],['+ 6 cargos','Ver todos']],jobs:[['2014','Diseñador BTL · Solugistik','Más de 100 stands para ferias en Bogotá y Medellín, eventos de la fusión Tigo-Une y entregas quincenales para Ruta N.'],['2013 – 2014','Alistador de archivos / arte finalista · Quad Graphics','Preparación de archivos para impresión: color, resolución y revisión final antes de imprenta.'],['2012','Diseñador web · EMS Digital','Publicaciones para redes de clientes y sitios en WordPress con estrategias SEO.'],['2010 – 2012','Docente · ESDITEC y Pascual Bravo','Diseño básico, historia del diseño, InDesign, Photoshop e Illustrator.'],['2008 – 2010','Diseñador textil · Alta Fusión y Serikos','Estampados para marcas de moda como Chevignon, Americanino y RCN Radio.'],['2007 – 2008','Diseñador gráfico · Marketing Personal','Diseños textiles, revista mensual, curaduría fotográfica de producto y comunicación interna.']]},
];
$('#stages').innerHTML=ST.map(s=>`<div class="stage"><span class="yr">${s.y}</span><div class="rs">${s.sum.map(x=>`<div><b>${x[0]}</b><span>${x[1]}</span></div>`).join('')}</div><span class="tg">${s.tg} · <span style="text-decoration:underline">ver detalle</span></span><div class="more"><div>${s.jobs.map(j=>`<div class="job"><span class="w">${j[0]}</span><p class="d"><b>${j[1]}</b>${j[2]}</p></div>`).join('')}</div></div></div>`).join('');
function sizeSide(){const w=$('#sideWrap'),s=$('#cvSide'),st=$$('#stages .stage');if(!w||!st.length||!w.offsetParent)return;if(matchMedia('(max-width:860px)').matches){w.style.height='';return}const last=st[st.length-1];const top=w.getBoundingClientRect().top;w.style.height=(last.getBoundingClientRect().top-top+s.offsetHeight)+'px'}
addEventListener('resize',sizeSide);
$$('.stage').forEach(s=>{s.onclick=()=>s.classList.toggle('open');setTimeout(sizeSide,650);s.addEventListener('mouseleave',()=>{if(matchMedia('(hover:hover)').matches){s.classList.remove('open');setTimeout(sizeSide,650)}})});
const ED=[['2021','CalArts','Especialización UI/UX Design'],['2020','Holberton School','Fullstack Developer'],['2019','SENA','Escritura para producto audiovisual'],['2012','Universidad de Antioquia','Comunicación Audiovisual <span class="nc">No culminado</span>'],['2009','Universidad de Antioquia','Filosofía · 4 semestres <span class="nc">No culminado</span>'],['2004','CESDE','Diseñador Gráfico Digital']];
$('#edu').innerHTML='<li style="border:0;padding:30px 0 10px"><span class="pad" style="grid-column:1/7;font-size:13px;font-weight:700">Formación</span></li>'+ED.map(e=>`<li><span class="y">${e[0]}</span><span class="n">${e[1]}</span><span class="s">${e[2]}</span></li>`).join('');
const dlg=$('#ats');$('#dlBtn').onclick=()=>dlg.showModal();$('#atsNo').onclick=()=>dlg.close();
['#atsPdf','#atsDoc'].forEach(b=>$(b).addEventListener('click',()=>setTimeout(()=>dlg.close(),200)));
dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});

// Favoritos
function renderFav(){const l=S.fav.map(id=>byId[id]).filter(Boolean);$('#favGrid').innerHTML=l.length?l.map(card).join(''):`<div class="empty"><div class="mega">Aún no hay<br><span class="blue">favoritos.</span></div><p>Toca el corazón en cualquier proyecto para guardarlo aquí.</p><a class="cta" href="#grafico">Ver proyectos →</a></div>`;syncButtons();reveal('#favGrid')}
// Carrito
function renderCart(){
  const has=S.cart.length;$('#chk').style.display=has?'':'none';
  const rows=S.cart.map((c,i)=>{if(c.kind==='svc')return `<div class="item"><div style="width:100%;aspect-ratio:1;background:var(--blue);display:grid;place-items:center;color:#fff;font-weight:900;font-size:28px;letter-spacing:-.05em">+</div><div><b>${c.id}</b><small>Servicio</small></div><button class="rm" data-rm="${i}">Quitar</button></div>`;const p=byId[c.id];return `<div class="item"><img src="${I[p.cover]}" alt=""><div><b>${p.t}</b><small>Quiero algo así · referencia ${p.cat.toLowerCase()}</small></div><button class="rm" data-rm="${i}">Quitar</button></div>`}).join('');
  $('#items').innerHTML=(has?rows:`<p class="lead" style="color:var(--muted);margin-bottom:10px">Todavía no has agregado nada. Usa “Quiero algo así” en cualquier proyecto o elige un servicio aquí abajo.</p>`)+`<div class="svc"><h4>Agrega un servicio</h4><div class="chips">${SVC.map(s=>`<button class="chip${S.cart.some(c=>c.id===s)?' on':''}" data-svc="${s}">${s}</button>`).join('')}</div></div>`;
  $$('[data-rm]').forEach(b=>b.onclick=()=>{S.cart.splice(+b.dataset.rm,1);save();badges();renderCart()});
  $$('[data-svc]').forEach(b=>b.onclick=()=>{const s=b.dataset.svc,i=S.cart.findIndex(c=>c.id===s);if(i<0)S.cart.push({id:s,kind:'svc'});else S.cart.splice(i,1);save();badges('#cartBtn');renderCart()});
}
function orderText(){return S.cart.map((c,i)=>`${i+1}. ${c.kind==='svc'?'Servicio: '+c.id:'Quiero algo así: '+byId[c.id].t+' ('+byId[c.id].cat+')'}`).join('\n')}
$('#form').onsubmit=async e=>{e.preventDefault();const f=e.target,v=id=>$(id).value.trim();
 const msg=`Nombre: ${v('#fn')}\nCorreo: ${v('#fe')}\nEmpresa: ${v('#fc')||'-'}\nPara cuándo: ${v('#ft')}\n\nPedido:\n${orderText()}\n\nMensaje:\n${v('#fm')||'-'}`;
 const done=mode=>{$('#okMsg').textContent=mode==='mail'?'Se abrió tu programa de correo con la lista lista para enviar. Si no se abrió, escríbeme a '+CFG.email+'.':'Gracias. Me llegó tu pedido y te escribo pronto con una propuesta.';S.cart=[];save();badges();location.hash='#enviado'};
 const mail=()=>{location.href=`mailto:${CFG.email}?subject=${encodeURIComponent('Pedido desde pabsanchez.com · '+v('#fn'))}&body=${encodeURIComponent(msg)}`;done('mail')};
 if(!CFG.web3formsKey){mail();return}
 f.classList.add('sending');
 try{const r=await fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({access_key:CFG.web3formsKey,subject:'Pedido desde pabsanchez.com · '+v('#fn'),from_name:'pabsanchez.com',name:v('#fn'),email:v('#fe'),replyto:v('#fe'),message:msg})});const j=await r.json();if(j.success){done('ok')}else{mail()}}catch(err){mail()}finally{f.classList.remove('sending')}};

// Rutas
const cur2=$('#curtain');let first=true;
function route(){const h=(location.hash||'#inicio').slice(1);const [v,arg]=h.split('/');const name=['inicio','grafico','digital','p','caso','cv','favoritos','carrito','enviado'].includes(v)?v:'inicio';
  const show=()=>{$$('.view').forEach(x=>x.classList.toggle('on',x.dataset.view===name));$$('[data-nav]').forEach(a=>a.classList.toggle('on',a.dataset.nav===name||(name==='p'&&a.dataset.nav==='grafico')||(name==='caso'&&a.dataset.nav==='digital')));
   if(name==='grafico')renderG();if(name==='digital')renderD();if(name==='p')renderP(arg);if(name==='favoritos')renderFav();if(name==='carrito')renderCart();if(name==='caso')renderCase(arg);if(name==='cv')requestAnimationFrame(sizeSide);syncButtons();scrollTo(0,0)};
  if(first){first=false;show();return}
  cur2.classList.remove('go');void cur2.offsetWidth;cur2.classList.add('go');setTimeout(show,380)}
addEventListener('hashchange',route);route();badges();
// Parallax portada del caso
addEventListener('scroll',()=>{const im=$('#parallax');if(!im||!im.offsetParent)return;const b=im.parentElement.getBoundingClientRect();im.style.transform=`translateY(${(b.top*-.15)-40}px)`},{passive:true});
})();
