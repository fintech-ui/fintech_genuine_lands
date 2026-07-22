/* ================= SAMPLE DATA ================= */
const STATES = ["Lagos","FCT (Abuja)","Imo","Rivers","Enugu","Ogun","Delta","Kano","Oyo","Anambra","Edo","Kaduna"];

const PROPERTIES = [
  {id:"FGP-1001",title:"Luxury 5 Bedroom Duplex",type:"Duplex",status:"For Sale",price:250000000,location:"Lekki Phase 1",state:"Lagos",size:"650 sqm",beds:5,baths:6,parking:4,date:"2026-06-28",
   desc:"A fully detached contemporary duplex finished to an international standard, featuring a private cinema room, rooftop terrace and staff quarters, set within a serviced estate in Lekki Phase 1.",
   features:["Swimming Pool","24/7 Power","Cinema Room","Smart Home System","CCTV","Boys Quarters","Fitted Kitchen","Estate Security"],
   images:["https://picsum.photos/seed/lekki1/1000/700","https://picsum.photos/seed/lekki2/700/500","https://picsum.photos/seed/lekki3/700/500"],
   agent:{name:"Chiamaka Nwosu",phone:"+234 815 753 6417",photo:"https://i.pravatar.cc/150?img=32"}},

  {id:"FGP-1002",title:"3 Bedroom Luxury Apartment",type:"Apartment",status:"For Sale",price:85000000,location:"Maitama District",state:"FCT (Abuja)",size:"210 sqm",beds:3,baths:4,parking:2,date:"2026-07-02",
   desc:"Modern serviced apartment in a gated diplomatic-zone complex, with concierge, gym access and panoramic city views over Maitama.",
   features:["Gym Access","Concierge","24/7 Power","Elevator","Fitted Kitchen","CCTV"],
   images:["https://picsum.photos/seed/abuja1/1000/700","https://picsum.photos/seed/abuja2/700/500","https://picsum.photos/seed/abuja3/700/500"],
   agent:{name:"Ibrahim Yusuf",phone:"+234 815 753 6417",photo:"https://i.pravatar.cc/150?img=12"}},

  {id:"FGP-1003",title:"600 sqm Plot of Land",type:"Land",status:"New",price:12000000,location:"Naze",state:"Imo",size:"600 sqm",beds:0,baths:0,parking:0,date:"2026-07-08",
   desc:"Dry, fenced residential plot with survey plan and Governor's Consent in progress, located minutes from Naze roundabout in Owerri.",
   features:["Survey Plan","Fenced","Dry Land","C of O Processing","Good Road Access"],
   images:["https://picsum.photos/seed/owerriland1/1000/700","https://picsum.photos/seed/owerriland2/700/500","https://picsum.photos/seed/owerriland3/700/500"],
   agent:{name:"Ugochi Eze",phone:"+234 815 753 6417",photo:"https://i.pravatar.cc/150?img=45"}},

  {id:"FGP-1004",title:"1000 sqm Commercial Land",type:"Commercial Land",status:"For Sale",price:45000000,location:"Trans Amadi",state:"Rivers",size:"1000 sqm",beds:0,baths:0,parking:0,date:"2026-06-20",
   desc:"Prime commercial land along the busy Trans Amadi industrial corridor in Port Harcourt — ideal for warehousing, retail or office development.",
   features:["Corner Piece","C of O","Tarred Road Frontage","High Foot Traffic"],
   images:["https://picsum.photos/seed/phcland1/1000/700","https://picsum.photos/seed/phcland2/700/500","https://picsum.photos/seed/phcland3/700/500"],
   agent:{name:"Emeka Obi",phone:"+234 815 753 6417",photo:"https://i.pravatar.cc/150?img=51"}},

  {id:"FGP-1005",title:"Estate Land — Serene Court",title2:"",type:"Estate Land",status:"For Sale",price:7500000,location:"Independence Layout",state:"Enugu",size:"450 sqm",beds:0,baths:0,parking:0,date:"2026-06-14",
   desc:"Affordable estate plot within a developing gated community with drainage, street lighting and perimeter fencing already in place.",
   features:["Gated Estate","Drainage System","Street Lighting","Perimeter Fence"],
   images:["https://picsum.photos/seed/enuguestate1/1000/700","https://picsum.photos/seed/enuguestate2/700/500","https://picsum.photos/seed/enuguestate3/700/500"],
   agent:{name:"Ngozi Ike",phone:"+234 815 753 6417",photo:"https://i.pravatar.cc/150?img=29"}},

  {id:"FGP-1006",title:"Luxury Waterfront Mansion",type:"Mansion",status:"For Sale",price:480000000,location:"Banana Island",state:"Lagos",size:"1200 sqm",beds:7,baths:8,parking:6,date:"2026-05-30",
   desc:"An architectural statement mansion on Banana Island with private jetty access, home theatre, wine cellar and landscaped gardens.",
   features:["Private Jetty","Wine Cellar","Home Theatre","Infinity Pool","Elevator","Smart Home System","Staff Quarters"],
   images:["https://picsum.photos/seed/banana1/1000/700","https://picsum.photos/seed/banana2/700/500","https://picsum.photos/seed/banana3/700/500"],
   agent:{name:"Chiamaka Nwosu",phone:"+234 815 753 6417",photo:"https://i.pravatar.cc/150?img=32"}},

  {id:"FGP-1007",title:"4 Bedroom Semi-Detached Duplex",type:"Duplex",status:"New",price:120000000,location:"Ikoyi",state:"Lagos",size:"400 sqm",beds:4,baths:5,parking:3,date:"2026-07-06",
   desc:"Newly completed semi-detached duplex in a quiet Ikoyi close, walking distance to international schools and the waterfront.",
   features:["24/7 Power","Fitted Kitchen","CCTV","Solar Backup","Boys Quarters"],
   images:["https://picsum.photos/seed/ikoyi1/1000/700","https://picsum.photos/seed/ikoyi2/700/500","https://picsum.photos/seed/ikoyi3/700/500"],
   agent:{name:"Ibrahim Yusuf",phone:"+234 815 753 6417",photo:"https://i.pravatar.cc/150?img=12"}},

  {id:"FGP-1008",title:"2 Bedroom Farmhouse & 5 Acres",type:"Farmland",status:"For Sale",price:32000000,location:"Ijebu-Ode",state:"Ogun",size:"5 acres",beds:2,baths:2,parking:2,date:"2026-06-02",
   desc:"Working farmland with an existing farmhouse, borehole and irrigation channel — suited to agribusiness or a countryside retreat.",
   features:["Borehole","Irrigation Channel","Farmhouse Included","Fenced Perimeter"],
   images:["https://picsum.photos/seed/ijebufarm1/1000/700","https://picsum.photos/seed/ijebufarm2/700/500","https://picsum.photos/seed/ijebufarm3/700/500"],
   agent:{name:"Tunde Bakare",phone:"+234 815 753 6417",photo:"https://i.pravatar.cc/150?img=14"}},

  {id:"FGP-1009",title:"Modern 6-Unit Apartment Block",type:"Apartment",status:"For Sale",price:180000000,location:"GRA Phase 2",state:"Rivers",size:"900 sqm",beds:12,baths:12,parking:8,date:"2026-05-18",
   desc:"Income-generating 6-unit apartment building, fully let, in the highly sought Port Harcourt GRA — ideal turnkey investment.",
   features:["Fully Let","Rental Income","24/7 Power","Gated Compound","CCTV"],
   images:["https://picsum.photos/seed/phcapt1/1000/700","https://picsum.photos/seed/phcapt2/700/500","https://picsum.photos/seed/phcapt3/700/500"],
   agent:{name:"Emeka Obi",phone:"+234 815 753 6417",photo:"https://i.pravatar.cc/150?img=51"}},

  {id:"FGP-1010",title:"800 sqm Residential Plot",type:"Land",status:"New",price:22000000,location:"Airport Road",state:"Kaduna",size:"800 sqm",beds:0,baths:0,parking:0,date:"2026-07-10",
   desc:"Well-located residential plot near Kaduna Airport Road with clean title documents and immediate development potential.",
   features:["Survey Plan","C of O","Good Road Access","Dry Land"],
   images:["https://picsum.photos/seed/kadunaland1/1000/700","https://picsum.photos/seed/kadunaland2/700/500","https://picsum.photos/seed/kadunaland3/700/500"],
   agent:{name:"Fatima Bello",phone:"+234 815 753 6417",photo:"https://i.pravatar.cc/150?img=47"}},

  {id:"FGP-1011",title:"3 Bedroom Bungalow",type:"Duplex",status:"For Sale",price:38000000,location:"Independence Layout",state:"Anambra",size:"320 sqm",beds:3,baths:3,parking:2,date:"2026-06-25",
   desc:"Comfortable family bungalow on a quiet residential street in Awka, fully tiled with a private compound and borehole.",
   features:["Borehole","Fitted Kitchen","Fenced Compound","Water Treatment"],
   images:["https://picsum.photos/seed/awkabung1/1000/700","https://picsum.photos/seed/awkabung2/700/500","https://picsum.photos/seed/awkabung3/700/500"],
   agent:{name:"Ugochi Eze",phone:"+234 815 753 6417",photo:"https://i.pravatar.cc/150?img=45"}},

  {id:"FGP-1012",title:"Commercial Office Complex",type:"Commercial Land",status:"For Sale",price:310000000,location:"Ring Road",state:"Oyo",size:"1500 sqm",beds:0,baths:10,parking:20,date:"2026-05-05",
   desc:"Four-storey office complex on Ibadan's busy Ring Road with elevator access, backup generator house and ample parking.",
   features:["Elevator","Generator House","Backup Power","CCTV","Ample Parking"],
   images:["https://picsum.photos/seed/ibadanoffice1/1000/700","https://picsum.photos/seed/ibadanoffice2/700/500","https://picsum.photos/seed/ibadanoffice3/700/500"],
   agent:{name:"Tunde Bakare",phone:"+234 815 753 6417",photo:"https://i.pravatar.cc/150?img=14"}},

  {id:"FGP-1013",title:"5 Bedroom Estate Duplex",type:"Duplex",status:"Sold",price:210000000,location:"GRA",state:"Edo",size:"550 sqm",beds:5,baths:6,parking:4,date:"2026-04-22",
   desc:"Sold — a fully finished detached duplex within Benin City's premier GRA estate, delivered with landscaped gardens.",
   features:["Gated Estate","24/7 Power","Landscaped Garden","Boys Quarters"],
   images:["https://picsum.photos/seed/benincity1/1000/700","https://picsum.photos/seed/benincity2/700/500","https://picsum.photos/seed/benincity3/700/500"],
   agent:{name:"Fatima Bello",phone:"+234 815 753 6417",photo:"https://i.pravatar.cc/150?img=47"}},

  {id:"FGP-1014",title:"2000 sqm Farmland",type:"Farmland",status:"New",price:9500000,location:"Kura",state:"Kano",size:"2000 sqm",beds:0,baths:0,parking:0,date:"2026-07-11",
   desc:"Fertile farmland outside Kano metropolis, suitable for grain or vegetable cultivation, with road access year-round.",
   features:["Fertile Soil","Road Access","Fenced Perimeter"],
   images:["https://picsum.photos/seed/kanofarm1/1000/700","https://picsum.photos/seed/kanofarm2/700/500","https://picsum.photos/seed/kanofarm3/700/500"],
   agent:{name:"Ibrahim Yusuf",phone:"+234 815 753 6417",photo:"https://i.pravatar.cc/150?img=12"}}
];

const CATEGORIES = [
  {name:"Duplexes & Mansions",count:"212 listings",img:"https://picsum.photos/seed/catduplex/500/400",type:"Duplex"},
  {name:"Apartments",count:"186 listings",img:"https://picsum.photos/seed/catapt/500/400",type:"Apartment"},
  {name:"Land & Plots",count:"340 listings",img:"https://picsum.photos/seed/catland/500/400",type:"Land"},
  {name:"Commercial",count:"98 listings",img:"https://picsum.photos/seed/catcomm/500/400",type:"Commercial Land"}
];

const TESTIMONIALS = [
  {text:"FinTech Genuine handled every stage of my land purchase in Owerri — survey, C of O, everything. I never once worried about being scammed.",name:"Adaeze Chukwu",role:"Land Buyer, Imo State",img:"https://i.pravatar.cc/150?img=5"},
  {text:"We bought our Lekki duplex through them from abroad. The video walkthroughs and documentation updates made the whole process feel safe.",name:"Femi Adeyemi",role:"Diaspora Investor",img:"https://i.pravatar.cc/150?img=8"},
  {text:"As a first-time investor, their advisory team helped me pick a commercial plot with real upside instead of the flashiest listing.",name:"Blessing Etim",role:"Investor, Port Harcourt",img:"https://i.pravatar.cc/150?img=9"},
  {text:"Professional, responsive, and honest about a title issue on a plot I almost bought elsewhere. That honesty earned my repeat business.",name:"Chukwuemeka Okoro",role:"Repeat Client",img:"https://i.pravatar.cc/150?img=15"}
];

const WHY_US = [
  {t:"Verified Properties",d:"Every listing is title-checked before it goes live on our platform."},
  {t:"Nationwide Coverage",d:"Active listings and agents in all 36 states of Nigeria."},
  {t:"Legal Documentation Support",d:"In-house support for C of O, Governor's Consent and survey plans."},
  {t:"Investment Advisory",d:"Data-backed guidance on where and what to buy for real returns."},
  {t:"Trusted Agents",d:"A vetted, commission-accountable agent network — not middlemen."},
  {t:"Secure Transactions",d:"Escrow-style payment handling and transaction record-keeping."}
];

const TEAM = [
  // {name:"Favour Ikenna Nzenwata",role:"Founder & CEO",img: "https://i.pravatar.cc/300?img=33"},   
  {
    name: "Favour Ikenna Nzenwata", role: "Founder and CEO",
    img: "images/about-us.jpg"
  },
  {name:"Chiamaka Nwosu",role:"Head of Sales, Lagos",img:"https://i.pravatar.cc/300?img=32"},
  {name:"Ibrahim Yusuf",role:"Head of Sales, Abuja",img:"https://i.pravatar.cc/300?img=12"},
  {name:"Ugochi Eze",role:"Legal & Documentation Lead",img:"https://i.pravatar.cc/300?img=45"}
];

const SERVICES = [
  {ic:"&#127968;",t:"Property Sales",d:"End-to-end sale support for residential, commercial and land assets nationwide."},
  {ic:"&#128506;",t:"Land Acquisition",d:"Sourcing and title-vetting land in the state and budget you specify."},
  {ic:"&#128188;",t:"Property Management",d:"Tenant management, rent collection and maintenance for landlords."},
  {ic:"&#128202;",t:"Real Estate Consultancy",d:"Independent advice on market timing, location and property type."},
  {ic:"&#128176;",t:"Property Valuation",d:"Certified valuation reports for sale, mortgage or insurance purposes."},
  {ic:"&#128220;",t:"Documentation & Legal Services",d:"C of O, Governor's Consent, deeds of assignment and survey plans."},
  {ic:"&#128200;",t:"Investment Advisory",d:"Portfolio-style guidance for investors building a property portfolio."},
  {ic:"&#127959;",t:"Property Development",d:"Project management for ground-up builds and estate development."}
];

const BLOG = [
  {tag:"Investment",title:"5 Signs a Property Investment Will Actually Appreciate",excerpt:"What separates a plot that doubles in value from one that stays flat for a decade — and how to spot the difference before you buy.",img:"https://picsum.photos/seed/blog1/600/400",date:"Jul 2, 2026",read:"6 min read"},
  {tag:"Land Buying",title:"The Complete Land Buying Guide for Nigeria",excerpt:"From verifying a Certificate of Occupancy to conducting a proper search at the lands registry — a step-by-step walkthrough.",img:"https://picsum.photos/seed/blog2/600/400",date:"Jun 24, 2026",read:"9 min read"},
  {tag:"Market Trends",title:"Where Nigerian Real Estate Is Heading in 2026",excerpt:"A look at which cities and property types are seeing the fastest price growth this year, and why.",img:"https://picsum.photos/seed/blog3/600/400",date:"Jun 15, 2026",read:"7 min read"},
  {tag:"Documentation",title:"C of O vs Governor's Consent: What's the Difference?",excerpt:"A plain-English breakdown of the paperwork that actually protects your ownership claim.",img:"https://picsum.photos/seed/blog4/600/400",date:"Jun 5, 2026",read:"5 min read"},
  {tag:"Home Ownership",title:"Renting vs Buying in Lagos: A Real Numbers Comparison",excerpt:"We ran the actual math on renting versus a 15-year mortgage in three Lagos neighbourhoods.",img:"https://picsum.photos/seed/blog5/600/400",date:"May 28, 2026",read:"8 min read"},
  {tag:"Investment",title:"How Diaspora Nigerians Can Buy Property Safely From Abroad",excerpt:"A practical checklist for verifying a property and an agent when you can't inspect in person.",img:"https://picsum.photos/seed/blog6/600/400",date:"May 19, 2026",read:"6 min read"}
];

const FAQS = [
  {q:"How do I know a property listing is genuinely verified?",a:"Every listing carries a Verified badge only after our legal team has reviewed the title documents — survey plan, C of O or Governor's Consent — against the relevant state lands registry."},
  {q:"Can I buy a property without visiting Nigeria in person?",a:"Yes. We provide video walkthroughs, a dedicated agent for updates, and can coordinate document handover with your appointed representative or our legal team."},
  {q:"What documentation support do you provide?",a:"We assist with Certificate of Occupancy processing, Governor's Consent, deeds of assignment, survey plans and registration with the relevant state lands bureau."},
  {q:"How does the mortgage calculator work?",a:"It estimates a monthly repayment based on your down payment, an annual interest rate and loan term — for a full quote, our advisory team can connect you with mortgage partners."},
  {q:"How do I list my own property for sale?",a:"Use the 'Sell Your Property' form on the Services page. Our team will contact you within 48 hours to schedule a valuation."}
];

/* ================= HELPERS ================= */
const fmtN = n => "₦" + Number(n).toLocaleString("en-NG");
const fmtDate = d => new Date(d).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"});
let favorites = [];
let compareList = [];
let currentDetailId = null;

function showToast(msg){
  const t=document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  t.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(()=>t.classList.remove('show'), 3200);
}

/* ================= PROPERTY CARD RENDER ================= */
function propCard(p){
  const isFav = favorites.includes(p.id);
  const statusClass = p.status==="Sold" ? "status-sold" : (p.status==="New" ? "status-new" : "");
  return `
  <div class="prop-card">
    <div class="prop-media">
      <img src="${p.images[0]}" alt="${p.title}, ${p.location}, ${p.state}" loading="lazy">
      <span class="badge ${statusClass}">${p.status}</span>
      <span class="verified">&#10003; Verified</span>
      <button class="fav-btn ${isFav?'active':''}" onclick="toggleFav('${p.id}', event)">&#9825;</button>
    </div>
    <div class="prop-body">
      <div class="prop-price">${fmtN(p.price)}</div>
      <div class="prop-title">${p.title}</div>
      <div class="prop-loc">&#128205; ${p.location}, ${p.state}</div>
      <div class="prop-specs">
        <span><b>${p.size}</b></span>
        ${p.beds ? `<span><b>${p.beds}</b> bed</span>` : ''}
        ${p.baths ? `<span><b>${p.baths}</b> bath</span>` : ''}
        ${p.parking ? `<span><b>${p.parking}</b> park</span>` : ''}
      </div>
      <div class="prop-actions">
        <button class="btn btn-outline-navy btn-sm btn-block" onclick="openDetail('${p.id}')">View Details</button>
      </div>
    </div>
  </div>`;
}

function toggleFav(id, e){
  e.stopPropagation();
  if(favorites.includes(id)){ favorites = favorites.filter(f=>f!==id); }
  else { favorites.push(id); showToast("Added to your saved properties"); }
  renderAll();
}

/* ================= PAGE NAV ================= */
function goPage(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  document.querySelectorAll('#navLinks button').forEach(b=>b.classList.toggle('active', b.dataset.page===name));
  window.scrollTo({top:0, behavior:'instant'});
  document.getElementById('mobileMenu').classList.remove('open');
}
document.querySelectorAll('[data-page]').forEach(el=>{
  el.addEventListener('click', (e)=>{ e.preventDefault(); goPage(el.dataset.page); });
});

/* ================= RENDER: CATEGORIES / FEATURED / LATEST ================= */
function renderCategories(){
  document.getElementById('categoryGrid').innerHTML = CATEGORIES.map(c=>`
    <div class="cat-card" onclick="filterByType('${c.type}')">
      <img src="${c.img}" alt="${c.name}" loading="lazy">
      <div class="txt"><h4>${c.name}</h4><span>${c.count}</span></div>
    </div>`).join('');
}
function filterByType(type){
  goPage('properties');
  document.getElementById('fType').value = type;
  applyFilters();
}
function renderFeatured(){
  const featured = PROPERTIES.filter(p=>p.status!=="Sold").slice(0,3);
  document.getElementById('featuredGrid').innerHTML = featured.map(propCard).join('');
}
function renderLatest(){
  const latest = [...PROPERTIES].sort((a,b)=> new Date(b.date)-new Date(a.date)).slice(0,3);
  document.getElementById('latestGrid').innerHTML = latest.map(propCard).join('');
}
function renderTestimonials(){
  const wrap = document.getElementById('testiWrap');
  wrap.innerHTML = TESTIMONIALS.map((t,i)=>`
    <div class="testi-slide ${i===0?'active':''}" data-i="${i}">
      <p>"${t.text}"</p>
      <div class="testi-person"><img src="${t.img}" alt="${t.name}"><div style="text-align:left;"><b>${t.name}</b><span>${t.role}</span></div></div>
    </div>`).join('') + `<div class="testi-dots">${TESTIMONIALS.map((t,i)=>`<button class="${i===0?'active':''}" onclick="setTesti(${i})"></button>`).join('')}</div>`;
}
function setTesti(i){
  document.querySelectorAll('.testi-slide').forEach((s,idx)=>s.classList.toggle('active', idx===i));
  document.querySelectorAll('.testi-dots button').forEach((b,idx)=>b.classList.toggle('active', idx===i));
}
let testiIndex=0;
setInterval(()=>{ testiIndex=(testiIndex+1)%TESTIMONIALS.length; setTesti(testiIndex); }, 6000);

/* ================= PROPERTIES PAGE ================= */
function populateStateFilter(){
  const sel = document.getElementById('fState');
  STATES.forEach(s=>{ const o=document.createElement('option'); o.value=s; o.textContent=s; sel.appendChild(o); });
}
function applyFilters(){
  let list = [...PROPERTIES];
  const st=document.getElementById('fState').value, ty=document.getElementById('fType').value,
        bd=document.getElementById('fBeds').value, stat=document.getElementById('fStatus').value,
        pr=document.getElementById('fPrice').value, sort=document.getElementById('sortSelect').value;
  if(st) list = list.filter(p=>p.state===st);
  if(ty) list = list.filter(p=>p.type===ty);
  if(bd) list = list.filter(p=>p.beds>=parseInt(bd));
  if(stat) list = list.filter(p=>p.status===stat);
  if(pr) list = list.filter(p=>p.price<=parseFloat(pr));
  if(sort==="low") list.sort((a,b)=>a.price-b.price);
  else if(sort==="high") list.sort((a,b)=>b.price-a.price);
  else list.sort((a,b)=>new Date(b.date)-new Date(a.date));
  document.getElementById('allPropertiesGrid').innerHTML = list.length ? list.map(propCard).join('') : `<p style="grid-column:1/-1; color:var(--gray-mid); padding:40px 0;">No properties match your filters — try widening your search.</p>`;
  document.getElementById('resultsCount').textContent = `${list.length} propert${list.length===1?'y':'ies'} found`;
}
document.getElementById('applyFilters').addEventListener('click', applyFilters);
document.getElementById('sortSelect').addEventListener('change', applyFilters);

/* ================= PROPERTY DETAIL ================= */
function openDetail(id){
  const p = PROPERTIES.find(x=>x.id===id);
  if(!p) return;
  currentDetailId = id;
  document.getElementById('detailBreadcrumb').textContent = p.title;
  document.getElementById('detailBadges').innerHTML = `<span class="badge" style="position:static;">${p.status}</span><span class="verified" style="position:static;">&#10003; Verified</span>`;
  document.getElementById('detailTitle').textContent = p.title;
  document.getElementById('detailLoc').textContent = `${p.location}, ${p.state} State`;
  document.getElementById('detailPrice').textContent = fmtN(p.price);
  document.getElementById('detailGallery').innerHTML = `
    <img src="${p.images[0]}" alt="${p.title} main view">
    <div class="side"><img src="${p.images[1]}" alt="${p.title} view 2"><img src="${p.images[2]}" alt="${p.title} view 3"></div>`;
  document.getElementById('detailSpecs').innerHTML = `
    <div class="spec-item"><span>Property Type</span><b>${p.type}</b></div>
    <div class="spec-item"><span>Size</span><b>${p.size}</b></div>
    <div class="spec-item"><span>Bedrooms</span><b>${p.beds||'—'}</b></div>
    <div class="spec-item"><span>Bathrooms</span><b>${p.baths||'—'}</b></div>
    <div class="spec-item"><span>Parking</span><b>${p.parking||'—'}</b></div>
    <div class="spec-item"><span>Status</span><b>${p.status}</b></div>
    <div class="spec-item"><span>State</span><b>${p.state}</b></div>
    <div class="spec-item"><span>Property ID</span><b>${p.id}</b></div>`;
  document.getElementById('detailDesc').textContent = p.desc;
  document.getElementById('detailFeatures').innerHTML = p.features.map(f=>`<span>${f}</span>`).join('');
  document.getElementById('detailId').textContent = `Property ID: ${p.id}`;
  document.getElementById('detailDate').textContent = `Listed ${fmtDate(p.date)}`;
  document.getElementById('agentPhoto').src = p.agent.photo;
  document.getElementById('agentName').textContent = p.agent.name;
  document.getElementById('agentPhone').textContent = p.agent.phone;
  document.getElementById('agentWhatsapp').href = `https://wa.me/2348157536417?text=${encodeURIComponent("Hello, I'm interested in "+p.title+" ("+p.id+") listed at "+fmtN(p.price)+".")}`;
  const similar = PROPERTIES.filter(x=>x.id!==p.id && (x.state===p.state || x.type===p.type)).slice(0,3);
  document.getElementById('similarGrid').innerHTML = similar.map(propCard).join('');
  document.getElementById('mResult').textContent = "₦0";
  goPage('detail');
}
document.getElementById('openInquiryBtn').addEventListener('click', ()=>openPropertyInquiry());
document.getElementById('openInspectionBtn').addEventListener('click', ()=>openInspectionModal());
document.getElementById('compareAddBtn').addEventListener('click', ()=>addToCompare(currentDetailId));

document.getElementById('mCalcBtn').addEventListener('click', ()=>{
  const p = PROPERTIES.find(x=>x.id===currentDetailId);
  if(!p) return;
  const down = parseFloat(document.getElementById('mDown').value)/100;
  const rate = parseFloat(document.getElementById('mRate').value)/100/12;
  const term = parseFloat(document.getElementById('mTerm').value)*12;
  const loan = p.price * (1-down);
  const monthly = rate===0 ? loan/term : loan * rate / (1-Math.pow(1+rate,-term));
  document.getElementById('mResult').textContent = fmtN(Math.round(monthly));
});

/* ================= COMPARE TRAY ================= */
function addToCompare(id){
  if(!id) return;
  if(compareList.includes(id)){ showToast("Already added to comparison"); return; }
  if(compareList.length>=3){ showToast("You can compare up to 3 properties"); return; }
  compareList.push(id);
  renderCompareTray();
  showToast("Added to comparison");
}
function removeCompare(id){ compareList = compareList.filter(c=>c!==id); renderCompareTray(); }
function renderCompareTray(){
  const tray = document.getElementById('compareTray');
  if(compareList.length===0){ tray.classList.remove('show'); return; }
  tray.classList.add('show');
  document.getElementById('compareChips').innerHTML = compareList.map(id=>{
    const p = PROPERTIES.find(x=>x.id===id);
    return `<span>${p.title} <span onclick="removeCompare('${id}')" style="cursor:pointer;">&times;</span></span>`;
  }).join('');
}
document.getElementById('clearCompareBtn').addEventListener('click', ()=>{ compareList=[]; renderCompareTray(); });
document.getElementById('viewCompareBtn').addEventListener('click', ()=>{
  if(compareList.length<2){ showToast("Add at least 2 properties to compare"); return; }
  const rows = compareList.map(id=>PROPERTIES.find(p=>p.id===id));
  document.getElementById('modalBody').innerHTML = `
    <button onclick="closeModal()" style="position:absolute; top:16px; right:20px; font-size:22px;">&times;</button>
    <h3 style="font-size:20px; margin-bottom:20px;">Compare Properties</h3>
    <div style="overflow-x:auto;"><table style="width:100%; border-collapse:collapse; font-size:13.5px;">
    <tr>${rows.map(r=>`<th style="text-align:left; padding:8px; border-bottom:1px solid var(--line);">${r.title}</th>`).join('')}</tr>
    <tr>${rows.map(r=>`<td style="padding:8px; border-bottom:1px solid var(--line);">${fmtN(r.price)}</td>`).join('')}</tr>
    <tr>${rows.map(r=>`<td style="padding:8px; border-bottom:1px solid var(--line); color:var(--gray-mid);">${r.location}, ${r.state}</td>`).join('')}</tr>
    <tr>${rows.map(r=>`<td style="padding:8px; border-bottom:1px solid var(--line);">${r.size}</td>`).join('')}</tr>
    <tr>${rows.map(r=>`<td style="padding:8px; border-bottom:1px solid var(--line);">${r.beds||'—'} bed / ${r.baths||'—'} bath</td>`).join('')}</tr>
    </table></div>`;
  document.getElementById('modalOverlay').style.display='flex';
});

/* ================= ABOUT / SERVICES / BLOG RENDER ================= */
function renderWhy(){
  document.getElementById('whyGrid').innerHTML = WHY_US.map((w,i)=>`
    <div class="why-card"><span class="num">0${i+1}</span><h4>${w.t}</h4><p>${w.d}</p></div>`).join('');
}
function renderTeam(){
  document.getElementById('teamGrid').innerHTML = TEAM.map(t=>`
    <div class="team-card"><div class="photo"><img src="${t.img}" alt="${t.name}"></div><h4>${t.name}</h4><span>${t.role}</span></div>`).join('');
}
function renderServices(){
  document.getElementById('servicesGrid').innerHTML = SERVICES.map(s=>`
    <div class="service-card"><div class="ic">${s.ic}</div><div><h4>${s.t}</h4><p>${s.d}</p></div></div>`).join('');
}
function renderBlog(){
  document.getElementById('blogGrid').innerHTML = BLOG.map(b=>`
    <div class="blog-card">
      <div class="media"><img src="${b.img}" alt="${b.title}" loading="lazy"></div>
      <div class="body"><span class="tag">${b.tag}</span><h4>${b.title}</h4><p>${b.excerpt}</p>
      <div class="meta"><span>${b.date}</span><span>${b.read}</span></div></div>
    </div>`).join('');
}
function renderFaq(){
  document.getElementById('faqList').innerHTML = FAQS.map((f,i)=>`
    <div class="faq-item" id="faq-${i}">
      <button class="faq-q" onclick="toggleFaq(${i})"><span>${f.q}</span><span>+</span></button>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>`).join('');
}
function toggleFaq(i){ document.getElementById('faq-'+i).classList.toggle('open'); }

/* ================= MODALS: inquiry / inspection / sell ================= */
function closeModal(){ document.getElementById('modalOverlay').style.display='none'; }
document.getElementById('modalOverlay').addEventListener('click', (e)=>{ if(e.target.id==='modalOverlay') closeModal(); });

function openPropertyInquiry(){
  const p = PROPERTIES.find(x=>x.id===currentDetailId);
  document.getElementById('modalBody').innerHTML = `
    <button onclick="closeModal()" style="position:absolute; top:16px; right:20px; font-size:22px;">&times;</button>
    <h3 style="font-size:20px; margin-bottom:6px;">Property Inquiry</h3>
    <p style="font-size:13.5px; color:var(--gray-mid); margin-bottom:20px;">${p?p.title+' · '+p.id:''}</p>
    <form onsubmit="submitModalForm(event,'Your inquiry has been sent. An agent will reach out shortly.')">
      <div class="field"><label>Full Name</label><input required type="text"></div>
      <div class="field"><label>Email Address</label><input required type="email"></div>
      <div class="field"><label>Phone Number</label><input required type="tel"></div>
      <div class="field"><label>Budget Range</label><input type="text" placeholder="e.g. ₦50,000,000 – ₦100,000,000"></div>
      <div class="field"><label>Preferred Property Type</label><input type="text" value="${p?p.type:''}"></div>
      <div class="field"><label>Message</label><textarea></textarea></div>
      <button class="btn btn-gold btn-block" type="submit">Send Inquiry</button>
    </form>`;
  document.getElementById('modalOverlay').style.display='flex';
}
function openInspectionModal(){
  const p = PROPERTIES.find(x=>x.id===currentDetailId);
  document.getElementById('modalBody').innerHTML = `
    <button onclick="closeModal()" style="position:absolute; top:16px; right:20px; font-size:22px;">&times;</button>
    <h3 style="font-size:20px; margin-bottom:6px;">Schedule an Inspection</h3>
    <p style="font-size:13.5px; color:var(--gray-mid); margin-bottom:20px;">${p?p.title+' · '+p.id:''}</p>
    <form onsubmit="submitModalForm(event,'Inspection request received — we will confirm your slot shortly.')">
      <div class="field"><label>Full Name</label><input required type="text"></div>
      <div class="field"><label>Email Address</label><input required type="email"></div>
      <div class="field"><label>Phone Number</label><input required type="tel"></div>
      <div class="form-grid">
        <div class="field"><label>Preferred Date</label><input required type="date"></div>
        <div class="field"><label>Preferred Time</label><input required type="time"></div>
      </div>
      <div class="field"><label>Additional Notes</label><textarea></textarea></div>
      <button class="btn btn-gold btn-block" type="submit">Request Inspection</button>
    </form>`;
  document.getElementById('modalOverlay').style.display='flex';
}
function openSellModal(){
  document.getElementById('modalBody').innerHTML = `
    <button onclick="closeModal()" style="position:absolute; top:16px; right:20px; font-size:22px;">&times;</button>
    <h3 style="font-size:20px; margin-bottom:20px;">Sell Your Property</h3>
    <form onsubmit="submitModalForm(event,'Thanks — a valuation agent will contact you within 48 hours.')">
      <div class="field"><label>Property Owner Name</label><input required type="text"></div>
      <div class="field"><label>Email Address</label><input required type="email"></div>
      <div class="field"><label>Phone Number</label><input required type="tel"></div>
      <div class="field"><label>Property Type</label><input type="text" placeholder="e.g. Duplex, Land, Apartment"></div>
      <div class="field"><label>Property Location</label><input type="text"></div>
      <div class="field"><label>Asking Price</label><input type="text" placeholder="₦"></div>
      <div class="field"><label>Property Description</label><textarea></textarea></div>
      <div class="field"><label>Upload Property Images</label><input type="file" multiple accept="image/*"></div>
      <button class="btn btn-gold btn-block" type="submit">Submit Listing</button>
    </form>`;
  document.getElementById('modalOverlay').style.display='flex';
}
document.getElementById('openSellBtn').addEventListener('click', openSellModal);

function submitModalForm(e, msg){
  e.preventDefault();
  closeModal();
  showToast(msg);
}
document.getElementById('generalForm').addEventListener('submit', (e)=>{
  e.preventDefault(); showToast("Message sent — we'll respond within one business day.");
  e.target.reset();
});
document.getElementById('newsletterForm').addEventListener('submit', (e)=>{
  e.preventDefault(); showToast("Subscribed! Watch your inbox for new listings.");
  e.target.reset();
});

/* ================= HEADER / NAV / MISC UI ================= */
window.addEventListener('scroll', ()=>{
  document.getElementById('siteHeader').classList.toggle('scrolled', window.scrollY>40);
  document.getElementById('backTop').classList.toggle('show', window.scrollY>500);
});
document.getElementById('backTop').addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));
document.getElementById('hamburgerBtn').addEventListener('click', ()=>document.getElementById('mobileMenu').classList.add('open'));
document.getElementById('mobileClose').addEventListener('click', ()=>document.getElementById('mobileMenu').classList.remove('open'));
document.getElementById('darkToggle').addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
  showToast(document.body.classList.contains('dark') ? "Dark mode on" : "Dark mode off");
});
document.getElementById('favIconBtn').addEventListener('click', ()=>{
  if(favorites.length===0){ showToast("No saved properties yet — tap the heart on any listing."); return; }
  goPage('properties');
  document.getElementById('allPropertiesGrid').innerHTML = PROPERTIES.filter(p=>favorites.includes(p.id)).map(propCard).join('');
  document.getElementById('resultsCount').textContent = `${favorites.length} saved propert${favorites.length===1?'y':'ies'}`;
});
setTimeout(()=>document.getElementById('chatBubble').classList.add('show'), 4000);
setTimeout(()=>document.getElementById('chatBubble').classList.remove('show'), 12000);

/* ================= INIT ================= */
function renderAll(){
  renderCategories(); renderFeatured(); renderLatest(); renderTestimonials();
  renderWhy(); renderTeam(); renderServices(); renderBlog(); renderFaq();
  populateStateFilter(); applyFilters(); renderCompareTray();
}
renderAll();