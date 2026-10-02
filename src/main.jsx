import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Phone,MapPin,Clock,Menu,X,ArrowRight,HeartPulse,Baby,Stethoscope,Bone,Microscope,ScanLine,Droplets,Eye,Ear,Ambulance,Pill,Activity,ShieldCheck,Users,CalendarDays,MessageCircle,ChevronRight,Mail,CheckCircle2,Hospital,HeartHandshake} from 'lucide-react';
import './styles.css';

const PHONE='923006979966';
const wa=(msg='Hello Al Madina Hospital, I would like to book an appointment.')=>`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
const officialHospitalPhoto='https://almadinahospital.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-10-16-at-13.28.07_ad85ca90-rda8jx5yn9cqt909oi0aqbew1wjzyam9t4pzqn3fgg.jpg';

const services=[
 ['Emergency 24/7','Immediate assessment and urgent medical care, day and night.',Ambulance,'services/emergency.webp','Emergency, fever, injuries'],
 ['Maternity & Delivery','Mother and baby care including maternity and delivery services.',Baby,'services/maternity.webp','Pregnancy, delivery, postnatal care'],
 ['Gynecology','Women’s health care for pregnancy, fertility and wellness.',HeartPulse,'services/gynecology.webp','Women’s health, pregnancy'],
 ['General Surgery','Surgical consultation, procedures and follow-up care.',Stethoscope,'services/surgery.webp','General surgical conditions'],
 ['Orthopedics','Care for bones, joints, injuries and mobility problems.',Bone,'services/orthopedics.webp','Fractures, joints, back pain'],
 ['Urology','Specialist care for urinary tract and male urological conditions.',Activity,'services/urology.webp','Kidney & urinary problems'],
 ['Dialysis / Kidney Care','Dialysis and nephrology support for kidney patients.',Droplets,'services/dialysis.webp','Kidney disease, dialysis'],
 ['Ophthalmology / Eye','Eye assessment and specialist ophthalmology care.',Eye,'services/eye.webp','Vision & eye conditions'],
 ['ENT','Specialist care for ear, nose and throat conditions.',Ear,'services/ent.webp','Ear, nose & throat'],
 ['Diagnostic Laboratory','Clinical laboratory testing to support diagnosis and treatment.',Microscope,'services/laboratory.webp','Blood & diagnostic tests'],
 ['X-Ray Center','Radiology and X-ray services for diagnostic assessment.',ScanLine,'services/xray.webp','Chest, bone & diagnostic X-ray'],
 ['Blood Bank & Thalassemia Support','Blood support services; contact the hospital to confirm current thalassemia treatment availability.',Droplets,'services/bloodbank.webp','Blood support & thalassemia'],
 ['Pharmacy','Convenient in-house access to medicines and healthcare supplies.',Pill,'services/pharmacy.webp','Medicines & prescriptions'],
 ['OPD & Specialist Clinics','General and specialist outpatient consultations.',Hospital,'services/opd.webp','General & specialist consultation']
];
const doctors=['Diabetes & Family Physician','General Surgeon','Orthopaedic Surgeon','Senior Medical Officer','Senior Consultant Urologist','Consultant Urologist','General Physician','ENT Specialist','Nephrologist','Ophthalmologist','Physiotherapist','Dietician & Nutritionist','Gynaecologist','Anesthesiologist'];
const conditions=[
 ['Pregnancy & Women’s Health','services/maternity.webp'],['Bone & Joint Problems','services/orthopedics.webp'],['Kidney & Urinary Conditions','services/urology.webp'],['Kidney Failure / Dialysis','services/dialysis.webp'],['Eye & Vision Problems','services/eye.webp'],['ENT Conditions','services/ent.webp'],['General Surgical Conditions','services/surgery.webp'],['Thalassemia / Blood Support','services/bloodbank.webp'],['Diagnostic Testing','services/laboratory.webp'],['X-Ray & Imaging','services/xray.webp']
];
const gallery=[
 [officialHospitalPhoto,'Al Madina Hospital — Renala Khurd','real'],
 ['/images/services/emergency.webp','24/7 Emergency Care'],['/images/services/maternity.webp','Maternity & Delivery'],
 ['/images/services/gynecology.webp','Women’s Health'],['/images/services/surgery.webp','Surgical Care'],
 ['/images/services/orthopedics.webp','Orthopedic Care'],['/images/services/dialysis.webp','Dialysis Unit'],
 ['/images/services/eye.webp','Eye Care'],['/images/services/ent.webp','ENT Care'],
 ['/images/services/laboratory.webp','Diagnostic Laboratory'],['/images/services/xray.webp','X-Ray Center'],
 ['/images/services/bloodbank.webp','Blood Bank'],['/images/services/pharmacy.webp','Pharmacy'],
 ['/images/services/pediatrics.webp','Mother & Child Care'],['/images/services/ambulance.webp','Ambulance Service']
];

function App(){
 const [open,setOpen]=useState(false);
 const go=id=>{setOpen(false);document.getElementById(id)?.scrollIntoView({behavior:'smooth'})};
 return <>
  <div className="top"><div><span><Phone size={14}/> +92 300 6979966</span><span><Mail size={14}/> info@almadinahospital.com</span></div><span><Clock size={14}/> Emergency & OPD: 24/7</span></div>
  <header><a className="brand" href="#home"><span className="mark">+</span><span><b>AL MADINA</b><small>HOSPITAL & MATERNITY HOME<br/>Renala Khurd</small></span></a><nav className={open?'open':''}>{['home','about','services','doctors','gallery','contact'].map(x=><button key={x} onClick={()=>go(x)}>{x[0].toUpperCase()+x.slice(1)}</button>)}</nav><a className="book desktop" target="_blank" rel="noreferrer" href={wa()}><MessageCircle size={17}/> Book Appointment</a><button className="hamb" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></header>

  <main id="home">
   <section className="hero"><img src="/images/hero-medical-team.png" alt="Professional healthcare team" fetchPriority="high"/><div className="shade"></div><div className="heroText"><div className="eyebrow">24/7 HEALTHCARE • RENALA KHURD</div><h1>Care you can trust.<br/><em>Close to home.</em></h1><p>Emergency, maternity, specialist, diagnostic and surgical care for Renala Khurd and surrounding communities.</p><div className="actions"><a className="danger" href="tel:+923006979966"><Phone/> Call Emergency</a><a className="whatsapp" target="_blank" rel="noreferrer" href={wa()}><MessageCircle/> Book on WhatsApp</a><button className="light" onClick={()=>go('services')}>Explore Services <ArrowRight/></button></div></div><div className="quick"><div><Clock/><b>24/7</b><span>Emergency & OPD</span></div><div><Users/><b>Specialists</b><span>Medical Team</span></div><div><ShieldCheck/><b>Modern</b><span>Diagnostics</span></div><div><Baby/><b>Mother & Child</b><span>Maternity Care</span></div></div></section>

   <section className="section intro" id="about"><div className="copy"><div className="eyebrow blue">ABOUT AL MADINA</div><h2>Healthcare built around the families of Renala Khurd</h2><p>Al Madina Hospital & Maternity Home provides accessible medical, maternity, emergency and diagnostic care with a focus on compassion, safety and affordability.</p><div className="leadership"><div><span>FOUNDER / OWNER</span><h3>Ghulam Murtaza Qadri</h3><p>Founded Al Madina Hospital with the vision of bringing quality medical facilities closer to the people of Renala Khurd.</p></div><div><span>MATERNITY CARE LEAD</span><h3>Shazia Qadri</h3><b>LHV • Gold Medalist</b><p>Co-founder with a hands-on role in maternal, delivery and mother-and-child care, supported by the hospital’s wider medical team.</p></div></div><div className="stats"><div><strong>23+</strong><span>Years Expertise</span></div><div><strong>24/7</strong><span>Emergency & OPD</span></div><div><strong>Multi</strong><span>Specialty Care</span></div></div></div><div className="aboutVisual realPhoto"><img src={officialHospitalPhoto} alt="Al Madina Hospital building in Renala Khurd"/><div className="photoBadge"><Hospital/><span><b>Al Madina Hospital</b>Husnain Arcade, Canal Road, Renala Khurd</span></div></div></section>

   <section className="sehat"><div className="sehatIcon"><HeartHandshake/></div><div><span>HEALTH ACCESS</span><h2>CM Punjab Sehat Card / Health Insurance Program</h2><p>The hospital publishes CM Punjab Sehat Card availability. Punjab’s current health initiatives operate under the Government of Punjab led by Chief Minister Maryam Nawaz Sharif. Coverage and eligibility can change, so confirm your treatment with the hospital before admission.</p></div><a target="_blank" rel="noreferrer" href={wa('Hello Al Madina Hospital, I want to confirm Sehat Card / Health Insurance Program eligibility and covered treatment.')}>Check on WhatsApp <MessageCircle/></a></section>

   <section className="section soft" id="services"><div className="sectionHead"><div><div className="eyebrow blue">COMPLETE CARE UNDER ONE ROOF</div><h2>Medical Services & Departments</h2><p>Tap any service to ask the hospital directly on WhatsApp.</p></div><a target="_blank" rel="noreferrer" href={wa('Hello Al Madina Hospital, please guide me about your medical services.')}>Ask about a service <ArrowRight/></a></div><div className="serviceGrid">{services.map(([n,d,I,img,tag])=><article className="service" key={n}><img src={'/images/'+img} alt={`${n} medical service`} loading="lazy"/><div className="serviceBody"><span className="serviceIcon"><I/></span><span className="serviceTag">{tag}</span><h3>{n}</h3><p>{d}</p><a target="_blank" rel="noreferrer" href={wa(`Hello Al Madina Hospital, I need information/appointment for ${n}.`)}>WhatsApp enquiry <ChevronRight/></a></div></article>)}</div></section>

   <section className="section conditions"><div className="sectionHead"><div><div className="eyebrow blue">FIND CARE BY CONDITION</div><h2>What can we help you with?</h2><p>Common care areas available through Al Madina’s departments and specialist team.</p></div></div><div className="conditionGrid">{conditions.map(([n,img])=><a target="_blank" rel="noreferrer" href={wa(`Hello Al Madina Hospital, I need guidance about ${n}.`)} key={n}><img src={'/images/'+img} alt={n} loading="lazy"/><span>{n}</span><ChevronRight/></a>)}</div></section>

   <section className="emergency"><div><span>OPEN DAY & NIGHT</span><h2>24/7 Emergency Care</h2><p>When every second matters, contact Al Madina Hospital & Maternity Home.</p></div><div className="emergencyBtns"><a href="tel:+923006979966"><Phone/> Call Now</a><a target="_blank" rel="noreferrer" href={wa('Hello Al Madina Hospital, I need urgent medical guidance.')}><MessageCircle/> WhatsApp</a></div></section>

   <section className="section" id="doctors"><div className="sectionHead"><div><div className="eyebrow blue">OUR HEALTHCARE PROFESSIONALS</div><h2>A multidisciplinary medical team</h2><p>Specialist services published by the hospital. Ask on WhatsApp for the current doctor name, clinic day and appointment time.</p></div></div><div className="doctorGrid">{doctors.map(d=><a target="_blank" rel="noreferrer" href={wa(`Hello Al Madina Hospital, I want an appointment with a ${d}. Please share doctor name and timing.`)} className="doctor" key={d}><div className="avatar"><Stethoscope/></div><div><h3>{d}</h3><span>Check doctor & timing</span></div><ChevronRight className="docArrow"/></a>)}</div></section>

   <section className="section welfare"><div><div className="eyebrow">A.M WELFARE CARD</div><h2>C-Section Package</h2><strong>Rs. 16,500</strong><p>Published by the hospital. Confirm current eligibility, inclusions, doctor availability and package price before visiting.</p><a target="_blank" rel="noreferrer" href={wa('Hello Al Madina Hospital, I want details about the A.M Welfare Card C-Section package and current price/eligibility.')}>Confirm on WhatsApp <MessageCircle/></a></div><img src="/images/maternity-care.jpg" alt="Maternity and delivery care" loading="lazy"/></section>

   <section className="section soft" id="gallery"><div className="sectionHead"><div><div className="eyebrow blue">HOSPITAL & FACILITIES</div><h2>Gallery</h2><p>Hospital building plus visual guides to major departments and facilities.</p></div></div><div className="gallery">{gallery.map(([src,label,type])=><figure className={type==='real'?'featuredPhoto':''} key={label}><img src={src} loading={type==='real'?'eager':'lazy'} alt={label}/><figcaption>{type==='real'&&<CheckCircle2/>}{label}</figcaption></figure>)}</div></section>

   <section className="section contact" id="contact"><div className="contactCard"><div className="eyebrow blue">CONTACT & APPOINTMENTS</div><h2>Talk directly to the hospital</h2><p className="contactIntro">For appointments, doctor timings, maternity enquiries, Sehat Card confirmation, lab/X-ray information or emergency guidance, message the hospital directly.</p><div className="contactRows"><a href="tel:+923006979966"><Phone/><span><b>Phone / Emergency</b>+92 300 6979966</span></a><a target="_blank" rel="noreferrer" href={wa()}><MessageCircle/><span><b>WhatsApp Appointment</b>Chat with Al Madina Hospital</span></a><a href="mailto:info@almadinahospital.com"><Mail/><span><b>Email</b>info@almadinahospital.com</span></a><div><MapPin/><span><b>Address</b>Husnain Arcade, Canal Road, Anwar Shaheed Colony, Renala Khurd, District Okara</span></div><div><Clock/><span><b>Emergency & OPD</b>Open 24 hours</span></div></div><div className="actions"><a className="danger" href="tel:+923006979966"><Phone/> Call Hospital</a><a className="whatsapp" target="_blank" rel="noreferrer" href={wa()}><MessageCircle/> Book on WhatsApp</a></div></div><div className="map"><div className="pin"><MapPin/></div><h3>Al Madina Hospital</h3><p>Husnain Arcade, Canal Road<br/>Renala Khurd, Okara 56150</p><a target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=Al+Madina+Hospital+and+Maternity+Home+Renala+Khurd">Open in Google Maps <ArrowRight/></a><a className="mapWa" target="_blank" rel="noreferrer" href={wa('Hello Al Madina Hospital, please send me your location and appointment details.')}><MessageCircle/> WhatsApp Hospital</a></div></section>
  </main>
  <a className="floatingWa" target="_blank" rel="noreferrer" href={wa()} aria-label="Chat with Al Madina Hospital on WhatsApp"><MessageCircle/></a>
  <footer><div className="brand inverse"><span className="mark">+</span><span><b>AL MADINA</b><small>HOSPITAL & MATERNITY HOME<br/>Renala Khurd</small></span></div><p>Medical • Maternity • Emergency • Diagnostics • Specialist Care</p><p>© {new Date().getFullYear()} Al Madina Hospital & Maternity Home.</p></footer>
 </>
}
createRoot(document.getElementById('root')).render(<App/>);
