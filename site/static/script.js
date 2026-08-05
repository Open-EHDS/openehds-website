const header=document.querySelector('.site-header');
const menu=document.querySelector('.menu-button');
menu.addEventListener('click',()=>{const open=header.classList.toggle('menu-open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Zamknij menu':'Otwórz menu')});
document.querySelectorAll('.desktop-nav a').forEach(link=>link.addEventListener('click',()=>{header.classList.remove('menu-open');menu.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const homepageFooter=document.querySelector('main + footer');
if(homepageFooter&&document.querySelector('.home-poc')){
  const isEnglish=document.documentElement.lang==='en';
  const membership=document.createElement('section');
  membership.className='membership-section';
  membership.setAttribute('aria-labelledby','membership-title');
  membership.innerHTML=`<div class="membership-copy reveal"><span>${isEnglish?'INDUSTRY MEMBERSHIP':'CZŁONKOSTWO BRANŻOWE'}</span><h2 id="membership-title">${isEnglish?'We are a member of':'Jesteśmy członkiem'} <em>HL7 Poland.</em></h2><p>${isEnglish?'OpenEHDS Foundation is an organisational member of HL7 Poland — a community advancing interoperability and health data standards in Poland.':'Fundacja OpenEHDS jest członkiem organizacyjnym HL7 Poland — społeczności rozwijającej interoperacyjność i standardy danych zdrowotnych w Polsce.'}</p><a href="https://hl7.org.pl/czlonkowie/" target="_blank" rel="noreferrer">${isEnglish?'View the member list':'Zobacz listę członków'} <b>↗</b></a></div><a class="membership-logo reveal" href="https://hl7.org.pl/czlonkowie/" target="_blank" rel="noreferrer" aria-label="HL7 Poland — ${isEnglish?'member list':'lista członków'}"><small>${isEnglish?'ORGANISATIONAL MEMBER':'CZŁONEK ORGANIZACYJNY'}</small><img src="/assets/hl7-poland-logo.png" alt="HL7 Poland"></a>`;
  homepageFooter.before(membership);
  membership.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}
