const weddingDate=new Date('2026-10-30T18:00:00+02:00').getTime();
const $=id=>document.getElementById(id);
function update(){
  let d=Math.max(0,weddingDate-Date.now());
  $('days').textContent=String(Math.floor(d/86400000)).padStart(2,'0');
  d%=86400000;
  $('hours').textContent=String(Math.floor(d/3600000)).padStart(2,'0');
  d%=3600000;
  $('minutes').textContent=String(Math.floor(d/60000)).padStart(2,'0');
  d%=60000;
  $('seconds').textContent=String(Math.floor(d/1000)).padStart(2,'0');
}
setInterval(update,1000); update();

const box=$('attending'), note=$('rsvpNote');
box.checked=localStorage.getItem('farahZeyadAttending')==='yes';
function status(){note.textContent=box.checked?'Thank you — your attendance is marked on this device.':''}
box.addEventListener('change',()=>{
  localStorage.setItem('farahZeyadAttending',box.checked?'yes':'no');
  status();
});
status();
