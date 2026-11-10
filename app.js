(function(){
'use strict';

/* ============ util ============ */
var LS='ruang-belajar-fkui-v1';
var RB=window.RB||{};
function $(s,r){return (r||document).querySelector(s)}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function pad(n){return String(n).padStart(2,'0')}
function dkey(d){d=d||new Date();return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())}
function pd(s){var a=s.split('-').map(Number);return new Date(a[0],a[1]-1,a[2])}
function daysTo(s){return Math.round((pd(s)-pd(dkey()))/86400000)}
function addDays(k,n){var d=pd(k);d.setDate(d.getDate()+n);return dkey(d)}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}
var BULAN=['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
var HARI=['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
var HARI3=['Min','Sen','Sel','Rab','Kam','Jum','Sab'];
function fdate(s){var d=pd(s);return d.getDate()+' '+BULAN[d.getMonth()]+' '+d.getFullYear()}
function nlabel(n){return n===0?'hari ini':n===1?'besok':n+' hari lagi'}

/* ============ data ============ */
var SUBJ={
  mat:{n:'Matematika',s:'MTK',c:'#4F8FE8'},
  ind:{n:'Bahasa Indonesia',s:'IND',c:'#E8734F'},
  ing:{n:'Bahasa Inggris',s:'ING',c:'#D9577F'},
  fis:{n:'Fisika',s:'FIS',c:'#8A6FE0'},
  bio:{n:'Biologi',s:'BIO',c:'#3FA27A'},
  kim:{n:'Kimia',s:'KIM',c:'#E59A2F'},
  iel:{n:'TOEFL',s:'TOEFL',c:'#C75AC0'},
  utb:{n:'UTBK & TKA',s:'UTBK',c:'#7A8B3C'}
};
var SCHOOL=['mat','ind','fis','bio','kim'];
var TRK={
  R:{n:'Rapor',c:'#CF456D',d:'Rapor & ulangan sekolah'},
  I:{n:'TOEFL',c:'#C75AC0',d:'TOEFL'},
  T:{n:'TKA',c:'#E59A2F',d:'TKA'},
  U:{n:'UTBK',c:'#7A8B3C',d:'UTBK-SNBT'}
};
var STAGE={1:'Tahap 1 · Paham konsep',2:'Tahap 2 · Latih soal',3:'Tahap 3 · Uji (try out)'};
var BASE=(RB.rawTopics||[]).map(function(r,i){var a=r.split('|');return {id:a[0],s:a[1],st:+a[2],n:a[3],m:+a[4],tr:a[5].split(''),i:i}});
var LESSONS=RB.lessons||{};
var QUESTIONS=RB.questions||[];

var MICRO=[
 {id:'m1',t:'10 kata akademik (dipakai TOEFL, UTBK, TKA Inggris)'},
 {id:'m2',t:'1 soal TOEFL Reading atau 1 kalimat Build a Sentence'},
 {id:'m3',t:'1 soal penalaran (UTBK / Penalaran Matematika)'},
 {id:'m4',t:'Cek bank kesalahan 5 menit'}
];
var PW={1:{R:1.3,I:.9,T:.7,U:.5},2:{R:1.1,I:1.7,T:.7,U:.4},3:{R:1,I:1.4,T:1,U:.8},4:{R:1,I:.6,T:1.3,U:1.5}};
var PHASE_N={1:'Fondasi',2:'Sprint TOEFL',3:'TOEFL & TKA',4:'TKA & UTBK'};
var PHASE_D={1:'Bangun dasar yang dipakai semua ujian + jaga nilai rapor.',2:'Fokus TOEFL. Rapor tetap dijaga lewat misi kecil.',3:'TOEFL dilanjut, mulai siap-siap TKA.',4:'TKA dan UTBK-SNBT jadi prioritas.'};
var DAYFOCUS=[['utb','iel'],['mat','iel'],['bio','kim'],['ing','iel'],['fis','mat'],['iel','ind'],['ing','utb']];
var MILE=[
 {d:'2027-10-26',t:'TKA kelas 12',n:'Perkiraan dari pola 2026. Cek pengumuman resmi.',a:true},
 {d:'2028-04-21',t:'UTBK-SNBT',n:'Perkiraan dari pola 2026. Cek SNPMB.',a:true}
];
var LEVELS=[[0,'Calon Maba'],[120,'Maba FK'],[350,'Anak Blok'],[700,'Asisten Lab'],[1200,'Pre-klinik'],[1900,'Koas'],[2800,'Koas Senior'],[4000,'dr. Muda'],[5600,'Dokter Umum'],[8000,'Konsulen']];
var BOX=[1,3,7,14];
var KIND_L={pre:'Pre-test',latihan:'Latihan',post:'Post-test',review:'Ulang kesalahan'};

/* ============ state ============ */
function defAv(){return {hijab:true,skin:1,hair:0,style:0,hjc:0,of:0,oc:0,bg:0,steto:true,kaca:false,pita:false,lencana:true}}
function defS(){return {v:2,_t:0,done:{},pins:{},micro:{},pomo:{},plan:{},budget:90,lomba:false,exams:[],lombas:[],rapor:{},quiz:{},err:{},qxp:0,nick:'Adiva',full:'Adiva Yumna Amilia',accent:'rose',hijab:true,av:defAv(),targets:{I:0,U:0},logs:[],custom:[]}}
function norm(r){
  var s=Object.assign(defS(),r||{});
  if(s.exam){s.exams=(s.exams||[]).concat([{id:'e0',s:s.exam.s,date:s.exam.date,label:''}]);delete s.exam}
  (s.exams||[]).forEach(function(e){if(!e.type)e.type='UH';if(!e.bab)e.bab=[]});
  if(s.targets){delete s.targets.S;if(s.targets.I>0&&s.targets.I<=9)s.targets.I=0}
  s.exams=(s.exams||[]).filter(function(e){return e.s!=='ing'});
  if(s.rapor)delete s.rapor.ing;
  s.logs=(s.logs||[]).filter(function(l){return l.type!=='S'&&!(l.type==='I'&&+l.score<=9)});
  s.custom=(s.custom||[]).filter(function(c){return c.s!=='sat'}).map(function(c){c.tr=(c.tr||[]).filter(function(k){return k!=='S'});if(!c.tr.length)c.tr=['R'];return c});
  var av0=Object.assign(defAv(),s.av||{});
  if(r&&r.hijab===false&&!r.av)av0.hijab=false;
  s.av=av0;
  if(!s.nick)s.nick='Adiva';
  if(!s.full)s.full='Adiva Yumna Amilia';
  return s;
}
var S=defS();
function load(){try{var r=localStorage.getItem(LS);if(r){S=norm(JSON.parse(r))}}catch(e){}}
var DOC=null, syncState='local', saveT=null, saving=false, dirty=false;
function persist(){
  S._t=Date.now();
  try{localStorage.setItem(LS,JSON.stringify(S))}catch(e){}
  dirty=true;clearTimeout(saveT);saveT=setTimeout(flush,700);
}
function flush(){
  if(!DOC){return}
  if(saving){saveT=setTimeout(flush,400);return}
  saving=true;dirty=false;
  DOC.set(JSON.parse(JSON.stringify(S))).then(function(){syncState='cloud'}).catch(function(){syncState='error'}).then(function(){saving=false;paintStats();if(dirty){saveT=setTimeout(flush,400)}});
}
function connectDb(){
  if(!window.claude||!window.claude.use){return}
  window.claude.use('db').then(function(db){
    if(!db){return}
    DOC=db.doc('progress/me');syncState='cloud';
    DOC.onSnapshot(function(snap){
      if(snap.metadata&&snap.metadata.hasPendingWrites){return}
      if(snap.exists){
        var r=snap.data();
        if((r._t||0)>(S._t||0)){
          S=norm(r);
          try{localStorage.setItem(LS,JSON.stringify(S))}catch(e){}
          render();
        }
      }else if(S._t){flush()}
      paintStats();
    },function(){syncState='error';paintStats()});
  }).catch(function(){});
}

/* ============ sinkron Firebase (khusus github.io) ============ */
var fbUser=null,fbAuth=null;
function fbOn(){return !!RB.fbConfig&&!(window.claude&&window.claude.use)}
function fbLoad(cb){
  if(window.firebase&&window.firebase.firestore){cb();return}
  var base='https://www.gstatic.com/firebasejs/10.12.2/',files=['firebase-app-compat.js','firebase-auth-compat.js','firebase-firestore-compat.js'],i=0;
  (function next(){
    if(i>=files.length){cb();return}
    var s=document.createElement('script');s.src=base+files[i++];s.onload=next;
    s.onerror=function(){syncState='error';paintStats()};
    document.head.appendChild(s);
  })();
}
function connectFb(){
  if(!fbOn())return;
  fbLoad(function(){
    try{
      if(!firebase.apps.length)firebase.initializeApp(RB.fbConfig);
      fbAuth=firebase.auth();
      fbAuth.onAuthStateChanged(function(u){
        fbUser=u||null;
        if(u){fbAttach(u)}else{DOC=null;syncState='local'}
        paintStats();
        if(location.hash==='#atur')render();
      });
    }catch(e){syncState='error';paintStats()}
  });
}
function fbAttach(u){
  var ref=firebase.firestore().collection('progress').doc(u.uid);
  DOC={set:function(o){return ref.set({json:JSON.stringify(o),t:o._t||0})}};
  var flagK='rb_fb_'+u.uid,first=false;
  try{first=!localStorage.getItem(flagK)}catch(e){}
  function joined(){first=false;try{localStorage.setItem(flagK,'1')}catch(e){}}
  syncState='cloud';
  ref.onSnapshot(function(snap){
    if(snap.metadata&&snap.metadata.hasPendingWrites){return}
    if(snap.exists){
      var r=null;
      try{r=JSON.parse(snap.data().json)}catch(e){}
      if(!r){paintStats();return}
      if(first){
        joined();
        if(S._t&&(r._t||0)!==S._t){
          if(!window.confirm('Akun sudah punya progres tersimpan.\n\nOK = pakai progres dari akun (progres di perangkat ini diganti).\nBatal = pakai progres perangkat ini (progres di akun diganti).')){
            S._t=Date.now();flush();paintStats();return;
          }
        }
        S=norm(r);
        try{localStorage.setItem(LS,JSON.stringify(S))}catch(e){}
        render();paintStats();return;
      }
      if((r._t||0)>(S._t||0)){
        S=norm(r);
        try{localStorage.setItem(LS,JSON.stringify(S))}catch(e){}
        render();
      }
    }else{
      joined();
      if(S._t){flush()}
    }
    paintStats();
  },function(){syncState='error';paintStats()});
}

/* ============ turunan ============ */
function all(){return BASE.concat(S.custom||[])}
function byId(id){var a=all();for(var i=0;i<a.length;i++){if(a[i].id===id)return a[i]}return null}
function topicDone(t){return !!S.done[t.id]}
function xpTotal(){
  var x=S.qxp||0,k,j;
  all().forEach(function(t){if(S.done[t.id])x+=t.m});
  for(k in S.micro){for(j in S.micro[k]){if(S.micro[k][j])x+=10}}
  for(k in S.pomo){x+=S.pomo[k]||0}
  return x;
}
function level(xp){
  var L=0;for(var i=0;i<LEVELS.length;i++){if(xp>=LEVELS[i][0])L=i}
  var cur=LEVELS[L][0],nxt=LEVELS[L+1]?LEVELS[L+1][0]:null;
  return {i:L,n:LEVELS[L][1],cur:cur,nxt:nxt,pct:nxt?Math.min(100,Math.round((xp-cur)/(nxt-cur)*100)):100};
}
function activeOn(k){
  if(all().some(function(t){return S.done[t.id]===k}))return true;
  if(S.micro[k]&&Object.keys(S.micro[k]).some(function(j){return S.micro[k][j]}))return true;
  if(S.qdays&&S.qdays[k])return true;
  return (S.pomo[k]||0)>0;
}
function streak(){
  var d=new Date(),n=0;
  if(!activeOn(dkey(d))){d.setDate(d.getDate()-1)}
  while(activeOn(dkey(d))){n++;d.setDate(d.getDate()-1)}
  return n;
}
function pctTrack(k){
  var tot=0,dn=0;
  all().forEach(function(t){if(t.tr.indexOf(k)>-1){tot+=t.m;if(S.done[t.id])dn+=t.m}});
  return tot?dn/tot:0;
}
function pctSubj(s){
  var tot=0,dn=0;
  all().forEach(function(t){if(t.s===s){tot+=t.m;if(S.done[t.id])dn+=t.m}});
  return tot?dn/tot:0;
}
function phase(d){
  d=d||new Date();
  if(d<new Date(2027,1,1))return 1;
  if(d<new Date(2027,5,6))return 2;
  if(d<new Date(2027,9,1))return 3;
  return 4;
}
function avail(t){
  if(t.st===1)return true;
  var s1=all().filter(function(x){return x.s===t.s&&x.st===1});
  if(!s1.length)return true;
  var tot=0,dn=0;s1.forEach(function(x){tot+=x.m;if(S.done[x.id])dn+=x.m});
  return tot===0||dn/tot>=(t.st===2?0.4:0.6);
}
/* ulangan, lomba, rapor */
function nearestExam(s){
  var best=null;
  (S.exams||[]).forEach(function(e){
    if(e.s!==s)return;
    var n=daysTo(e.date);
    if(n>=0&&(!best||n<best.n))best={n:n,date:e.date,label:e.label||''};
  });
  return best;
}
var EXT={UH:{w:7,k:2,n:'Ulangan Harian',s:'UH',c:'#6BB3F0'},UTS:{w:14,k:2.5,n:'UTS',s:'UTS',c:'#FFAB73'},UAS:{w:21,k:3,n:'UAS',s:'UAS',c:'#E0508A'}};
function exCfg(e){return EXT[e.type]||EXT.UH}
/* ulangan yang sedang dalam masa persiapan untuk bab t */
function examFor(t){
  var best=null;
  (S.exams||[]).forEach(function(e){
    if(e.s!==t.s)return;
    var n=daysTo(e.date),c=exCfg(e);
    if(n<0||n>c.w)return;
    var inBab=!(e.bab&&e.bab.length)||e.bab.indexOf(t.id)>-1,ramp=(c.w-n)/c.w;
    var f=inBab?1+(0.35+0.65*ramp)*c.k:1.1;
    if(!best||f>best.f)best={e:e,n:n,f:f,inBab:inBab};
  });
  return best;
}
function examBabIds(e){
  var ids=(e.bab&&e.bab.length)?e.bab:all().filter(function(t){return t.s===e.s&&t.st===1}).map(function(t){return t.id});
  return ids.filter(function(id){return byId(id)});
}
/* jadwal persiapan: tiap hari dari hari ini sampai hari H */
function prepSchedule(e){
  var n=daysTo(e.date);if(n<0)return [];
  var ids=examBabIds(e).slice().sort(function(a,b){
    var da=S.done[a]?1:0,db=S.done[b]?1:0;if(da!==db)return da-db;
    var ma=mastery(byId(a)),mb=mastery(byId(b));return (ma===null?-1:ma)-(mb===null?-1:mb);
  });
  var learn=n>=3?n-1:0,rows=[],i,d0=new Date();
  for(i=0;i<=n;i++){
    var dt=new Date(d0.getFullYear(),d0.getMonth(),d0.getDate()+i),left=n-i,row={date:dkey(dt),left:left,dow:HARI[dt.getDay()]};
    if(left===0){row.kind='h';row.text='Hari H. Jangan buka materi baru. Baca catatan ringkas 30 menit, makan cukup, tenang.'}
    else if(left===1){row.kind='review';row.text='Review ringkas semua bab, ulangi soal yang pernah salah, tidur lebih awal.'}
    else if(left===2&&n>=3){row.kind='latih';row.text='Latihan soal bertimer dan perbaiki kesalahan.'}
    else if(learn>0){
      row.kind='learn';row.bab=ids.filter(function(id,j){return Math.min(learn-1,Math.floor(j*learn/ids.length))===i});
      row.text=row.bab.length?'Pelajari bab ini':'Latihan soal tambahan';
    }else{row.kind='review';row.bab=ids;row.text='Waktunya mepet. Ulang inti semua bab dan kerjakan soal latihan.'}
    rows.push(row);
  }
  return rows;
}
function lombaInfo(){
  var cur=null;
  (S.lombas||[]).forEach(function(l){
    var a=daysTo(l.start),b=daysTo(l.end||l.start);
    if(a<=2&&b>=0&&(!cur||a<cur.a))cur={l:l,a:a,b:b};
  });
  return cur;
}
function light(){return S.lomba||!!lombaInfo()}
function raporGap(s){var r=S.rapor[s];if(!r||!r.now||!r.target)return 0;return Math.max(0,r.target-r.now)}
/* penguasaan bab */
function pool(tid){return QUESTIONS.filter(function(q){return q.t===tid})}
function mastery(t){
  var q=S.quiz[t.id];if(!q)return null;
  if(q.post&&q.post.n)return q.post.bp;
  if(q.pre&&q.pre.n)return q.pre.s/q.pre.n;
  return null;
}
function dueErrors(){
  var k=dkey();
  return Object.keys(S.err||{}).filter(function(id){return S.err[id].due<=k&&QUESTIONS.some(function(q){return q.id===id})});
}
/* perencana */
function reasons(t){
  var r=[],ph=phase(),W=PW[ph],best=null,bv=0;
  t.tr.forEach(function(k){if(W[k]>bv){bv=W[k];best=k}});
  var ef=examFor(t);
  if(ef&&ef.f>1.15)r.push(exCfg(ef.e).s+' '+SUBJ[t.s].s+' '+nlabel(ef.n));
  if(SCHOOL.indexOf(t.s)>-1&&t.tr.indexOf('R')>-1&&raporGap(t.s)>0)r.push('Rapor '+SUBJ[t.s].s+' masih kurang '+raporGap(t.s)+' poin dari target');
  var m=mastery(t);
  if(m!==null&&m<0.7)r.push('Penguasaan baru '+Math.round(m*100)+'%');
  if(S.pins[t.id])r.push('Lagi diajarkan di sekolah');
  if(best&&bv>=1.1)r.push('Fase '+PHASE_N[ph]+': '+TRK[best].d+' diprioritaskan');
  if(DAYFOCUS[new Date().getDay()].indexOf(t.s)>-1)r.push('Cocok dengan ritme hari ini');
  if(/diagnostik/i.test(t.n))r.push('Mulai dari sini supaya tahu posisimu');
  if(t.tr.length>2)r.push('Sekali belajar, '+t.tr.length+' target kena');
  return r.slice(0,2);
}
function score(t,ph,focus){
  var W=PW[ph],best=0;
  t.tr.forEach(function(k){if(W[k]>best)best=W[k]});
  var s=best*(1+0.06*(t.tr.length-1));
  if(focus.indexOf(t.s)>-1)s*=1.15;
  if(S.pins[t.id])s*=2;
  var ef=examFor(t);
  if(ef)s*=ef.f;
  if(SCHOOL.indexOf(t.s)>-1&&t.tr.indexOf('R')>-1)s*=1+Math.min(raporGap(t.s),20)/20*0.6;
  var m=mastery(t);
  if(m!==null){s*=(m<0.5?1.25:m<0.7?1.15:1)}
  if(S.quiz[t.id]&&(S.quiz[t.id].pre||S.quiz[t.id].post))s*=1.1;
  if(/diagnostik/i.test(t.n))s*=2;
  s*=({1:1.1,2:1,3:.9})[t.st]||1;
  return s-t.i*0.0004;
}
function makePlan(){
  var d=new Date(),dk=dkey(d),ph=phase(d),focus=DAYFOCUS[d.getDay()],ring=light();
  var kept=(S.plan[dk]||[]).filter(function(id){return S.done[id]===dk&&byId(id)});
  var budget=ring?Math.min(S.budget,45):S.budget;
  var rem=budget-kept.reduce(function(a,id){return a+byId(id).m},0);
  var picked=kept.slice(),cnt={};
  kept.forEach(function(id){var s=byId(id).s;cnt[s]=(cnt[s]||0)+1});
  var maxPer=budget>=150?2:1,weekend=d.getDay()===0||d.getDay()===6;
  var cand=all().filter(function(t){
    var ef0=examFor(t);
    if(S.done[t.id]||(!avail(t)&&!(ef0&&ef0.inBab&&ef0.f>1.3)))return false;
    if(ring&&t.m>45)return false;
    if(t.m>Math.max(budget*1.5,45))return false;
    if(t.m>=90&&!weekend&&budget<150)return false;
    return true;
  }).map(function(t){return {t:t,sc:score(t,ph,focus)}}).sort(function(a,b){return b.sc-a.sc});
  function tryAdd(t,force){
    if(!t||picked.indexOf(t.id)>-1)return false;
    if(picked.length>=5||rem<20)return false;
    if((cnt[t.s]||0)>=maxPer)return false;
    if(!force&&t.m>rem+15&&picked.length>kept.length)return false;
    picked.push(t.id);cnt[t.s]=(cnt[t.s]||0)+1;rem-=t.m;return true;
  }
  function firstOf(fn){for(var j=0;j<cand.length;j++){if(fn(cand[j].t))return cand[j].t}return null}
  var exDone={},exN=0;
  cand.forEach(function(c){
    if(exN>=2)return;
    var q=examFor(c.t);
    if(q&&q.inBab&&q.f>1.3&&!exDone[c.t.s]&&tryAdd(c.t,true)){exDone[c.t.s]=1;exN++}
  });
  if(!ring&&budget>=90){
    var sch=firstOf(function(t){return SCHOOL.indexOf(t.s)>-1&&t.m<=rem+15});
    var iel=ph<=3?firstOf(function(t){return t.s==='iel'}):null;
    var urgent=SCHOOL.some(function(s){var e=nearestExam(s);return e&&e.n<=7});
    if(iel&&/diagnostik/i.test(iel.n)&&!urgent){tryAdd(iel,true);tryAdd(sch)}
    else{tryAdd(sch);tryAdd(iel)}
  }
  for(var i=0;i<cand.length;i++){tryAdd(cand[i].t)}
  S.plan[dk]=picked;
  Object.keys(S.plan).sort().slice(0,-14).forEach(function(k){delete S.plan[k]});
}
function planInfo(){
  var ids=S.plan[dkey()]||[],dn=0,mins=0;
  ids.forEach(function(id){var t=byId(id);if(!t)return;mins+=t.m;if(S.done[id])dn++});
  return {ids:ids,total:ids.length,done:dn,mins:mins};
}

/* ============ ulangan ============ */
function exTag(e){var c=exCfg(e);return '<span class="tag" style="--c:'+c.c+'">'+esc(c.s)+'</span>'}
function prepCard(){
  var list=(S.exams||[]).filter(function(e){var n=daysTo(e.date);return n>=0&&n<=exCfg(e).w}).sort(function(a,b){return a.date<b.date?-1:1}).slice(0,2);
  if(!list.length)return '';
  var h='<section class="card prep"><header><h2>Persiapan ulangan</h2><span class="sp"></span><a class="btn ghost sm" href="#ulangan">Jadwal lengkap</a></header>';
  list.forEach(function(e){
    var n=daysTo(e.date),row=prepSchedule(e)[0],ids=examBabIds(e),dn=ids.filter(function(id){return S.done[id]}).length;
    h+='<div class="exrow" style="--c:'+exCfg(e).c+'"><div class="exhead">'+exTag(e)+'<b>'+esc(SUBJ[e.s].n)+'</b><span class="chip">'+nlabel(n)+'</span><span class="tiny muted">'+fdate(e.date)+'</span></div>'+
      '<p class="small" style="margin:6px 0"><b>Hari ini:</b> '+esc(row?row.text:'')+'</p>';
    if(row&&row.bab&&row.bab.length)h+='<div class="tags">'+row.bab.map(function(id){var t=byId(id);return '<a class="tag lnk" style="--c:'+SUBJ[t.s].c+'" href="#belajar-'+id+'">'+esc(t.n)+'</a>'}).join('')+'</div>';
    h+='<div class="bar" style="margin-top:8px" title="Bab dipelajari"><b style="width:'+(ids.length?Math.round(dn/ids.length*100):0)+'%"></b></div><p class="tiny muted" style="margin-top:4px">'+dn+' dari '+ids.length+' bab sudah dipelajari</p></div>';
  });
  return h+'</section>';
}
function viewUlangan(){
  var F=ui.exf,h='';
  var babs=all().filter(function(t){return t.s===F.s}).sort(function(a,b){return a.st-b.st||a.i-b.i});
  h+='<section class="card"><header><h2>Tambah ulangan</h2></header><p class="small muted" style="margin-bottom:10px">Pilih jenis dan bab yang diujikan. Misi harian otomatis lebih mengutamakan bab itu saat harinya mendekat: UH 7 hari sebelum, UTS 14 hari, UAS 21 hari.</p><div class="form">'+
    '<div><div class="tiny muted lbl">Jenis ulangan</div><div class="seg" role="group" aria-label="Jenis ulangan">'+['UH','UTS','UAS'].map(function(k){return '<button data-act="extype" data-v="'+k+'" aria-pressed="'+(F.type===k)+'">'+EXT[k].n+'</button>'}).join('')+'</div></div>'+
    '<div class="frow"><label>Mapel<select data-field="exf:s">'+SCHOOL.map(function(k){return '<option value="'+k+'"'+(F.s===k?' selected':'')+'>'+esc(SUBJ[k].n)+'</option>'}).join('')+'</select></label><label>Tanggal<input type="date" data-field="exf:date" min="'+dkey()+'" value="'+esc(F.date)+'"></label></div>'+
    '<div><div class="tiny muted lbl">Bab yang diujikan <span style="font-weight:600">(kosongkan = semua bab '+esc(SUBJ[F.s].n)+')</span></div><div class="seg wrapseg" role="group" aria-label="Bab yang diujikan">'+babs.map(function(t){return '<button data-act="exbab" data-id="'+esc(t.id)+'" aria-pressed="'+(F.bab.indexOf(t.id)>-1)+'">'+esc(t.n)+'</button>'}).join('')+'</div><div style="margin-top:6px;display:flex;gap:8px"><button class="btn ghost sm" data-act="exball">Pilih semua tahap 1</button><button class="btn ghost sm" data-act="exbab0">Kosongkan</button></div></div>'+
    '<label>Catatan<input type="text" data-field="exf:label" value="'+esc(F.label)+'" placeholder="contoh: guru bilang soal HOTS"></label>'+
    '<div><button class="btn sm" data-act="examadd">Tambah ulangan</button></div></div></section>';
  var up=(S.exams||[]).filter(function(e){return daysTo(e.date)>=0}).sort(function(a,b){return a.date<b.date?-1:1});
  var past=(S.exams||[]).filter(function(e){return daysTo(e.date)<0}).sort(function(a,b){return a.date<b.date?1:-1});
  if(!up.length)h+='<section class="card"><header><h2>Ulangan akan datang</h2></header><p class="small muted">Belum ada. Tambahkan di atas supaya planner tahu apa yang harus diprioritaskan.</p></section>';
  up.forEach(function(e){
    var n=daysTo(e.date),c=exCfg(e),ids=examBabIds(e),dn=ids.filter(function(id){return S.done[id]}).length,sch=prepSchedule(e);
    h+='<section class="card" style="--cc:'+c.c+'"><header>'+exTag(e)+'<h3>'+esc(SUBJ[e.s].n)+'</h3><span class="sp"></span><span class="chip">'+nlabel(n)+'</span></header>'+
      '<p class="small muted">'+HARI[pd(e.date).getDay()]+', '+fdate(e.date)+(e.label?' · '+esc(e.label):'')+(n>c.w?' · persiapan dimulai '+(n-c.w)+' hari lagi':'')+'</p>'+
      '<div class="bar" style="margin:10px 0 4px"><b style="width:'+(ids.length?Math.round(dn/ids.length*100):0)+'%"></b></div><p class="tiny muted">'+dn+' dari '+ids.length+' bab sudah dipelajari</p>'+
      '<div style="margin-top:10px">'+ids.map(function(id){var t=byId(id),m=mastery(t);return '<div class="logrow"><span class="sc">'+(m===null?'–':Math.round(m*100)+'%')+'</span><div style="flex:1"><div class="small" style="font-weight:800">'+(S.done[id]?'✓ ':'')+esc(t.n)+'</div><div class="tiny muted">'+(m===null?'Belum dites':'Penguasaan')+'</div></div><a class="btn ghost sm" href="#belajar-'+esc(id)+'">Belajar</a></div>'}).join('')+'</div>'+
      '<details class="ki" style="margin-top:10px"'+(n<=c.w?' open':'')+'><summary><span class="kn">Jadwal persiapan harian</span></summary><div class="kbody">'+sch.map(function(r){return '<div class="schrow k-'+r.kind+'"><div class="sd"><b>'+r.dow.slice(0,3)+'</b><span class="tiny muted">'+fdate(r.date).replace(/ \d{4}$/,'')+'</span></div><div><div class="small">'+esc(r.text)+'</div>'+(r.bab&&r.bab.length?'<div class="tags">'+r.bab.map(function(id){return '<a class="tag lnk" style="--c:'+SUBJ[e.s].c+'" href="#belajar-'+id+'">'+esc(byId(id).n)+'</a>'}).join('')+'</div>':'')+'</div></div>'}).join('')+'</div></details>'+
      '<div style="margin-top:10px"><button class="btn ghost sm" data-act="examdel" data-id="'+esc(e.id)+'">Hapus ulangan</button></div></section>';
  });
  if(past.length){
    h+='<section class="card"><header><h2>Sudah lewat</h2><span class="sp muted small">Catat nilainya supaya kelihatan perkembanganmu</span></header>'+past.map(function(e){
      var r=S.rapor[e.s]||{},low=e.score!=null&&r.target&&e.score<r.target;
      return '<div class="logrow">'+exTag(e)+'<div style="flex:1"><div class="small" style="font-weight:800">'+esc(SUBJ[e.s].n)+' · '+fdate(e.date)+'</div><div class="tiny muted">'+(e.score!=null?(low?'Di bawah target rapor ('+r.target+'). Ulangi bab yang lemah.':'Aman dibanding target rapor.'):'Belum ada nilai')+'</div></div><input type="number" min="0" max="100" style="width:80px" data-field="exs:'+esc(e.id)+'" value="'+(e.score!=null?e.score:'')+'" aria-label="Nilai"><button class="btn ghost sm" data-act="examdel" data-id="'+esc(e.id)+'">Hapus</button></div>';
    }).join('')+'</section>';
  }
  return h;
}

/* ============ avatar ============ */
var AV={
 skin:['#FBE3D0','#F5CFB3','#E6B18D','#C58B62','#8F5B3C'],
 hair:['#3A2430','#5B3A29','#1E1A24','#8A4B3C','#D6A15B','#E07AA8'],
 hjc:['#F6A9C6','#CDBBF5','#A9E0CC','#FFD0A8','#A9D2FF','#FFE9A6','#FFFFFF'],
 oc:['#F6A9C6','#CDBBF5','#A9E0CC','#FFD0A8','#A9D2FF','#FFE9A6'],
 bg:['#FFE0EB','#E8DEFF','#D7F4E8','#FFE7D3','#DCEBFF','#FFF2C6'],
 st:['Cepol','Panjang','Bob','Kepang'],
 of:['Jas dokter','Scrub','Seragam','Kardigan'],
 ac:[['steto','Stetoskop'],['kaca','Kacamata'],['pita','Pita'],['lencana','Lencana FK UI']]
};
function avatar(mood,a){
  a=Object.assign(defAv(),a||S.av||{});
  var skin=AV.skin[a.skin]||AV.skin[1],hair=AV.hair[a.hair]||AV.hair[0],hj=AV.hjc[a.hjc]||AV.hjc[0],oc=AV.oc[a.oc]||AV.oc[0],bg=AV.bg[a.bg]||AV.bg[0],ink='#2B1B2E',eyes,mouth;
  if(mood==='happy'||mood==='celebrate'){
    eyes='<path d="M82 106 Q91 94 100 106" stroke="'+ink+'" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M120 106 Q129 94 138 106" stroke="'+ink+'" stroke-width="3.5" fill="none" stroke-linecap="round"/>';
    mouth='<path d="M99 124 Q110 140 121 124 Z" fill="#C94F6D"/><path d="M104 131 Q110 136 116 131" fill="#FF9DB5"/>';
  }else if(mood==='sleepy'){
    eyes='<path d="M83 105 Q91 111 99 105" stroke="'+ink+'" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M121 105 Q129 111 137 105" stroke="'+ink+'" stroke-width="3.5" fill="none" stroke-linecap="round"/>';
    mouth='<path d="M105 128 h10" stroke="#C94F6D" stroke-width="3" stroke-linecap="round"/>';
  }else{
    eyes='<g class="blink"><ellipse cx="91" cy="104" rx="5.5" ry="7.5" fill="'+ink+'"/><circle cx="93" cy="101" r="2.2" fill="#fff"/></g><g class="blink"><ellipse cx="129" cy="104" rx="5.5" ry="7.5" fill="'+ink+'"/><circle cx="131" cy="101" r="2.2" fill="#fff"/></g>';
    mouth='<path d="M102 125 Q110 132 118 125" stroke="#C94F6D" stroke-width="3.2" fill="none" stroke-linecap="round"/>';
  }
  var back,front,bangs='<path d="M66 98 C66 56 154 56 154 98 C142 82 128 74 110 76 C92 74 78 82 66 98 Z" fill="'+hair+'"/>';
  if(a.hijab){
    back='<path d="M110 42 C62 42 54 92 56 126 C58 156 62 184 110 200 C158 184 162 156 164 126 C166 92 158 42 110 42 Z" fill="'+hj+'" stroke="rgba(120,60,90,.18)" stroke-width="1.5"/>';
    front='<path d="M68 98 C68 62 92 52 110 52 C128 52 152 62 152 98 C142 78 126 70 110 70 C94 70 78 78 68 98 Z" fill="'+hj+'" stroke="rgba(120,60,90,.18)" stroke-width="1.5"/>';
  }else{
    front=bangs;
    if(a.style===1)back='<path d="M56 98 C54 150 60 188 78 200 L142 200 C160 188 166 150 164 98 C164 50 56 50 56 98Z" fill="'+hair+'"/>';
    else if(a.style===2)back='<path d="M56 100 C54 138 62 150 78 152 L142 152 C158 150 166 138 164 100 C164 52 56 52 56 100Z" fill="'+hair+'"/>';
    else if(a.style===3)back='<ellipse cx="110" cy="98" rx="53" ry="56" fill="'+hair+'"/><ellipse cx="60" cy="150" rx="11" ry="36" fill="'+hair+'"/><ellipse cx="160" cy="150" rx="11" ry="36" fill="'+hair+'"/><circle cx="60" cy="184" r="6" fill="'+oc+'"/><circle cx="160" cy="184" r="6" fill="'+oc+'"/>';
    else back='<circle cx="110" cy="42" r="17" fill="'+hair+'"/><ellipse cx="110" cy="98" rx="53" ry="56" fill="'+hair+'"/>';
  }
  var bodyFill=(a.of===1||a.of===3)?oc:'#fff';
  var body='<path d="M34 240 C34 188 68 160 110 160 C152 160 186 188 186 240 Z" fill="'+bodyFill+'" stroke="rgba(120,60,90,.22)" stroke-width="2"/>';
  var cloth='';
  if(a.of===0){cloth='<path d="M92 162 L110 206 L128 162 Z" fill="'+oc+'"/><path d="M92 162 L104 216 M128 162 L116 216" stroke="#E4D3DA" stroke-width="2" fill="none"/>'}
  else if(a.of===1){cloth='<path d="M92 162 L110 192 L128 162 Z" fill="'+skin+'"/><path d="M92 162 L110 192 L128 162" stroke="rgba(120,60,90,.25)" stroke-width="2" fill="none"/><rect x="66" y="206" width="30" height="22" rx="5" fill="rgba(255,255,255,.55)"/>'}
  else if(a.of===2){cloth='<path d="M90 162 L110 190 L130 162 L124 160 L110 176 L96 160 Z" fill="#E6EEF9" stroke="#C9D6EA" stroke-width="1.5"/><path d="M110 190 L100 206 L110 200 L120 206 Z" fill="'+oc+'"/><path d="M110 190 L110 240" stroke="#E4D3DA" stroke-width="2"/>'}
  else{cloth='<path d="M90 162 L110 202 L130 162 L138 240 L82 240 Z" fill="#fff"/><path d="M110 202 L110 240" stroke="rgba(120,60,90,.25)" stroke-width="2"/><circle cx="102" cy="214" r="3" fill="rgba(120,60,90,.4)"/><circle cx="102" cy="230" r="3" fill="rgba(120,60,90,.4)"/>'}
  var steto=a.steto?'<path d="M86 164 C78 198 98 218 122 208" stroke="#6B5B73" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M134 164 C140 184 134 198 122 208" stroke="#6B5B73" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="122" cy="210" r="7" fill="#C9C1CE" stroke="#6B5B73" stroke-width="2.5"/>':'';
  var badge=a.lencana?'<rect x="138" y="190" width="34" height="18" rx="5" fill="#fff" stroke="#E4D3DA" stroke-width="2"/><text x="155" y="203" text-anchor="middle" font-size="9" font-weight="800" font-family="Nunito,sans-serif" style="fill:var(--accent)">FK UI</text>':'';
  var kaca=a.kaca?'<g fill="rgba(255,255,255,.25)" stroke="#7A5A86" stroke-width="3"><circle cx="91" cy="104" r="15"/><circle cx="129" cy="104" r="15"/><path d="M106 104 h8" fill="none"/></g>':'';
  var pita=a.pita?'<g transform="translate(150 60) rotate(22)"><path d="M0 0 L-22 -13 L-22 13Z" fill="'+oc+'" stroke="rgba(120,60,90,.3)" stroke-width="1.5"/><path d="M0 0 L22 -13 L22 13Z" fill="'+oc+'" stroke="rgba(120,60,90,.3)" stroke-width="1.5"/><circle r="6" fill="#fff" opacity=".85"/></g>':'';
  var spark=mood==='celebrate'?'<g><path class="spark" d="M26 60 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4Z" fill="#FFD98A"/><path class="spark" d="M186 48 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3Z" fill="#FF9DB5"/><path class="spark" d="M178 140 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3Z" fill="#9FD8C0"/></g>':'';
  var z=mood==='sleepy'?'<text x="160" y="50" font-size="20" font-family="Fredoka,sans-serif" font-weight="700" fill="#9C86E0">z</text><text x="174" y="32" font-size="15" font-family="Fredoka,sans-serif" font-weight="700" fill="#9C86E0">z</text>':'';
  return '<svg viewBox="0 0 220 240" role="img" aria-label="Avatar Adiva"><circle cx="110" cy="136" r="104" fill="'+bg+'"/><g class="bob">'+
   body+back+cloth+steto+badge+
   '<ellipse cx="110" cy="102" rx="42" ry="47" fill="'+skin+'"/>'+front+
   '<ellipse cx="82" cy="120" rx="8" ry="5" fill="#FF9DB5" opacity=".6"/><ellipse cx="138" cy="120" rx="8" ry="5" fill="#FF9DB5" opacity=".6"/>'+
   eyes+mouth+kaca+pita+'</g>'+spark+z+'</svg>';
}
var ui={exf:{s:'mat',type:'UH',date:'',label:'',bab:[]},kisi:'iel',msgI:0,filter:'all',addOpen:false,confirmReset:false,logType:'I',toastT:null,sess:null,step:null,stepFor:null,restoreOpen:false};
function say(){
  var h=new Date().getHours(),p=planInfo(),a=[],lb=lombaInfo();
  var soon=null;(S.exams||[]).forEach(function(e){var n=daysTo(e.date);if(n>=0&&n<=7&&(!soon||n<soon.n))soon={n:n,s:e.s}});
  if(p.total>0&&p.done===p.total){a.push('Semua misi hari ini beres. Hebat! Boleh istirahat dengan tenang.');a.push('Satu hari lagi yang kamu menangkan. dr. masa depan bangga!')}
  else if(lb){a.push('Lagi musim lomba, jadi misinya ringan dulu. Fokus lomba, belajar tetap jalan pelan-pelan.')}
  else if(S.lomba){a.push('Mode ringan aktif. Cukup misi kecil hari ini, yang penting tetap jalan.')}
  else if(p.done>0){a.push('Sudah '+p.done+' dari '+p.total+' misi. Satu lagi, yuk!');a.push('Mantap, momentumnya lagi bagus. Lanjut!')}
  else if(h<10){a.push('Pagi! Mulai dari misi pertama, 25 menit saja dulu.')}
  else if(h<17){a.push('Siang! Pilih satu misi, nyalakan timer, mulai.')}
  else if(h<21){a.push('Sore-malam begini masih sempat 1 misi. Pelan-pelan tidak apa.')}
  else{a.push('Sudah malam. Cukup minum-minum kecil di bawah, lalu tidur.')}
  if(soon)a.push('Ulangan '+SUBJ[soon.s].n+' '+nlabel(soon.n)+'. Misi hari ini sudah diarahkan ke sana.');
  if(dueErrors().length)a.push('Ada '+dueErrors().length+' soal salah yang waktunya diulang. Ini cara tercepat naik nilai.');
  a.push('Ingat: satu bab sering mengenai 3-4 ujian sekaligus.');
  return a[ui.msgI%a.length];
}
function mood(){
  var p=planInfo(),h=new Date().getHours();
  if(p.total>0&&p.done===p.total)return 'celebrate';
  if(p.done>0)return 'happy';
  if(h>=21||h<5)return 'sleepy';
  return 'normal';
}

/* ============ helper tampilan ============ */
function sticker(s){var o=SUBJ[s];return '<span class="st" style="--c:'+o.c+'" title="'+esc(o.n)+'">'+esc(o.s)+'</span>'}
function trkTags(t){return t.tr.map(function(k){return '<span class="tag" style="--c:'+TRK[k].c+'">'+TRK[k].n+'</span>'}).join('')}
function paintStats(){
  var xp=xpTotal(),L=level(xp),st=streak();
  var sync=syncState==='cloud'?'Tersimpan di akunmu':syncState==='error'?'Gagal sinkron, tersimpan di perangkat':'Tersimpan di perangkat ini';
  var el=$('#stats');if(!el)return;
  el.innerHTML='<span class="chip">Lv '+(L.i+1)+' · '+esc(L.n)+'</span><span class="chip">'+xp+' XP</span><span class="chip">Streak '+st+' hari</span><span class="chip tiny" title="'+esc(sync)+'">'+(syncState==='cloud'?'Sinkron':'Lokal')+'</span>';
}
function toast(m){
  var el=$('#toast');el.textContent=m;el.classList.add('on');
  clearTimeout(ui.toastT);ui.toastT=setTimeout(function(){el.classList.remove('on')},2200);
}
var fx={ps:[],run:false};
function confetti(n){
  if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var c=$('#fx');if(!c||!c.getContext)return;
  c.width=innerWidth;c.height=innerHeight;
  var cols=['#CF456D','#FFD98A','#4E9F7D','#8E73E0','#4F8FE8','#FF9DB5'];
  for(var i=0;i<n;i++){fx.ps.push({x:innerWidth/2+(Math.random()-.5)*160,y:innerHeight*.45,vx:(Math.random()-.5)*10,vy:-Math.random()*10-4,r:Math.random()*5+3,c:cols[i%cols.length],l:70+Math.random()*30,rot:Math.random()*6})}
  if(!fx.run){fx.run=true;requestAnimationFrame(stepFx)}
}
function stepFx(){
  var c=$('#fx'),g=c.getContext('2d');g.clearRect(0,0,c.width,c.height);
  fx.ps=fx.ps.filter(function(p){return p.l>0});
  fx.ps.forEach(function(p){p.x+=p.vx;p.y+=p.vy;p.vy+=.35;p.vx*=.99;p.l--;p.rot+=.2;g.save();g.translate(p.x,p.y);g.rotate(p.rot);g.fillStyle=p.c;g.globalAlpha=Math.min(1,p.l/30);g.fillRect(-p.r,-p.r/2,p.r*2,p.r);g.restore()});
  if(fx.ps.length){requestAnimationFrame(stepFx)}else{fx.run=false;g.clearRect(0,0,c.width,c.height)}
}

/* ============ timer ============ */
var TM={total:1500,left:1500,end:0,run:false,iv:null};
function tmPaint(){
  var el=$('#tmText');if(el){el.textContent=pad(Math.floor(TM.left/60))+':'+pad(TM.left%60)}
  var b=$('#tmGo');if(b){b.textContent=TM.run?'Jeda':(TM.left<TM.total?'Lanjut':'Mulai')}
  document.title=TM.run?pad(Math.floor(TM.left/60))+':'+pad(TM.left%60)+' · Ruang Belajar FK UI':'Ruang Belajar FK UI';
}
function tmTick(){
  TM.left=Math.max(0,Math.ceil((TM.end-Date.now())/1000));
  if(TM.left<=0){
    clearInterval(TM.iv);TM.run=false;
    var m=Math.round(TM.total/60),k=dkey();
    S.pomo[k]=(S.pomo[k]||0)+m;persist();
    TM.left=TM.total;toast('Sesi selesai! +'+m+' XP');confetti(50);paintStats();render();return;
  }
  tmPaint();
}
function tmToggle(){
  if(TM.run){clearInterval(TM.iv);TM.run=false;tmPaint();return}
  TM.end=Date.now()+TM.left*1000;TM.run=true;TM.iv=setInterval(tmTick,500);tmPaint();
}
function tmSet(m){clearInterval(TM.iv);TM.run=false;TM.total=m*60;TM.left=TM.total;tmPaint()}

/* ============ kuis ============ */
function errUpdate(qid,ok){
  var e=S.err[qid];
  if(!ok){S.err[qid]={n:(e?e.n:0)+1,box:0,due:addDays(dkey(),1)}}
  else if(e){
    var b=e.box+1;
    if(b>=BOX.length)delete S.err[qid];
    else S.err[qid]={n:e.n,box:b,due:addDays(dkey(),BOX[b])};
  }
}
function pickQs(tid,kind){
  var p=pool(tid),Q=S.quiz[tid]||{},seen=Q.seen||{},n=kind==='pre'?4:kind==='post'?5:6,out;
  if(kind==='pre'){out=shuffle(p.filter(function(q){return q.lv<=2})).concat(shuffle(p))}
  else if(kind==='post'){
    var used=Q.preIds||[];
    out=shuffle(p.filter(function(q){return used.indexOf(q.id)<0})).concat(shuffle(p))
  }else{
    var k=dkey();
    var due=p.filter(function(q){return S.err[q.id]&&S.err[q.id].due<=k});
    var fresh=p.filter(function(q){return !seen[q.id]});
    var rest=p.slice().sort(function(a,b){return (seen[a.id]||0)-(seen[b.id]||0)});
    out=shuffle(due).concat(shuffle(fresh),rest);
  }
  var ids={},res=[];
  out.forEach(function(q){if(!ids[q.id]&&res.length<n){ids[q.id]=1;res.push(q)}});
  return res;
}
function startSess(tid,kind){
  var qs;
  if(kind==='review'){
    var due=dueErrors();
    qs=shuffle(due).slice(0,8).map(function(id){return QUESTIONS.filter(function(q){return q.id===id})[0]});
  }else qs=pickQs(tid,kind);
  if(!qs.length){toast('Belum ada soal untuk ini');return}
  ui.sess={kind:kind,tid:tid,fb:kind==='latihan'||kind==='review',i:0,picked:null,res:[],fin:false,passed:false,
    qs:qs.map(function(q){return {q:q,perm:shuffle(q.o.map(function(_,i){return i}))}})};
  render();
}
function finishSess(){
  var s=ui.sess,dk=dkey();
  s.fin=true;
  var ok=s.res.filter(function(r){return r.ok}).length,n=s.res.length;
  s.res.forEach(function(r){errUpdate(r.qid,r.ok)});
  S.qxp=(S.qxp||0)+ok*2;
  S.qdays=S.qdays||{};S.qdays[dk]=(S.qdays[dk]||0)+n;
  if(s.tid){
    var Q=S.quiz[s.tid]=S.quiz[s.tid]||{seen:{}};Q.seen=Q.seen||{};
    s.res.forEach(function(r){Q.seen[r.qid]=(Q.seen[r.qid]||0)+1});
    if(s.kind==='pre'){Q.pre={s:ok,n:n,d:dk};Q.preIds=s.res.map(function(r){return r.qid})}
    if(s.kind==='latihan'){Q.lat=(Q.lat||0)+1}
    if(s.kind==='post'){
      var bp=Math.max(ok/n,Q.post?Q.post.bp:0);
      Q.post={s:ok,n:n,d:dk,bp:bp};
      if(ok/n>=0.7&&!S.done[s.tid]){S.done[s.tid]=dk;s.passed=true;confetti(90)}
    }
  }
  persist();paintStats();
}
function nextStep(id){
  var Q=S.quiz[id]||{},has=pool(id).length>0;
  if(!has)return 'materi';
  if(!Q.pre)return 'pre';
  if(!Q.read)return 'materi';
  if(!Q.lat)return 'latihan';
  if(!Q.post)return 'post';
  if(!Q.refl||!Q.refl.length)return 'refleksi';
  return 'latihan';
}
function quizHtml(){
  var s=ui.sess;
  if(s.fin)return resultHtml();
  var it=s.qs[s.i],q=it.q,pk=s.picked;
  var h='<section class="card"><header><h2>Soal '+(s.i+1)+' dari '+s.qs.length+'</h2><span class="chip sp">'+KIND_L[s.kind]+'</span></header>'+
    '<div class="bar"><b style="width:'+Math.round(s.i/s.qs.length*100)+'%"></b></div>'+
    '<p class="qstem">'+esc(q.q)+'</p><div class="opts">';
  it.perm.forEach(function(oi,j){
    var cls='opt';
    if(pk!==null){
      if(s.fb){if(oi===q.a)cls+=' good';else if(oi===pk)cls+=' bad'}
      else if(oi===pk)cls+=' pick';
    }
    h+='<button class="'+cls+'" data-act="qans" data-v="'+oi+'"'+(pk!==null?' disabled':'')+'><b>'+'ABCDE'.charAt(j)+'</b><span>'+esc(q.o[oi])+'</span></button>';
  });
  h+='</div>';
  if(pk!==null){
    if(s.fb)h+='<div class="expl '+(pk===q.a?'ok':'no')+'"><b>'+(pk===q.a?'Benar.':'Belum tepat.')+'</b> '+esc(q.e||'')+'</div>';
    h+='<div style="margin-top:12px"><button class="btn" data-act="qnext">'+(s.i+1>=s.qs.length?'Lihat hasil':'Lanjut')+'</button></div>';
  }
  return h+'<div style="margin-top:10px"><button class="btn ghost sm" data-act="qquit">Keluar</button></div></section>';
}
function resultHtml(){
  var s=ui.sess,ok=s.res.filter(function(r){return r.ok}).length,n=s.res.length,pc=Math.round(ok/n*100);
  var msg;
  if(s.kind==='pre')msg='Ini skor awalmu. Tidak perlu sempurna, gunanya untuk tahu bagian mana yang perlu dibaca dulu.';
  else if(s.kind==='post')msg=s.passed?'Lulus! Bab ini otomatis ditandai selesai.':(pc>=70?'Bagus. Bab ini sudah tuntas.':'Belum 70%. Baca ulang materi dan kerjakan latihan, lalu coba post-test lagi.');
  else if(s.kind==='review')msg='Soal yang benar sekarang diulang lebih jarang. Soal yang salah muncul lagi besok.';
  else msg='Soal yang salah masuk bank kesalahan dan akan diulang beberapa hari lagi.';
  var h='<section class="card"><header><h2>Hasil '+KIND_L[s.kind]+'</h2></header><div class="score">'+ok+'<small> / '+n+'</small></div><p class="muted" style="margin:6px 0 12px">'+esc(msg)+'</p><div style="display:flex;gap:8px;flex-wrap:wrap">';
  if(s.kind!=='review')h+='<button class="btn" data-act="qagain">Ulangi dengan soal lain</button>';
  h+='<button class="btn ghost" data-act="qquit">Selesai</button></div></section>';
  h+='<section class="card"><header><h2>Pembahasan</h2></header>';
  s.res.forEach(function(r,i){
    var q=s.qs[i].q;
    h+='<div class="rv '+(r.ok?'ok':'no')+'"><div style="font-weight:800">'+(r.ok?'✓ ':'✗ ')+esc(q.q)+'</div>'+
      '<div class="small">Jawabanmu: '+esc(q.o[r.pick])+(r.ok?'':' · Benar: '+esc(q.o[q.a]))+'</div><div class="small muted">'+esc(q.e||'')+'</div></div>';
  });
  return h+'</section>';
}

/* ============ view: hari ini ============ */
function viewToday(){
  var dk=dkey(),d=new Date();
  if(!S.plan[dk]){makePlan()}
  var p=planInfo(),xp=xpTotal(),L=level(xp),ph=phase(),lb=lombaInfo(),fo=DAYFOCUS[d.getDay()];
  var due=dueErrors().length;
  var h='<section class="card hero"><div class="avwrap" data-act="say" role="button" tabindex="0" aria-label="Ketuk avatar untuk pesan baru">'+avatar(mood())+'</div><div>'+
    '<div class="bubble" id="bubble">'+esc(say())+'</div>'+
    '<h1 style="margin-top:14px">'+esc('Halo, '+(S.nick||'Adiva')+'!')+'</h1>'+
    '<p class="idline">Calon dr. '+esc(S.full||'Adiva Yumna Amilia')+', Sp.DVE · Fakultas Kedokteran UI</p>'+
    '<p class="muted">'+HARI[d.getDay()]+', '+d.getDate()+' '+BULAN[d.getMonth()]+' '+d.getFullYear()+'</p>'+
    '<div class="hero-meta"><a class="btn ghost sm" href="#avatar">Ganti penampilan</a><span class="chip">Fase: '+PHASE_N[ph]+'</span><span class="chip">Target TOEFL '+esc(String(S.targets.I||'belum diisi'))+'</span></div>'+
    '<div class="xpbar" aria-label="Progres level"><b style="width:'+L.pct+'%"></b></div>'+
    '<p class="tiny muted" style="margin-top:4px">'+(L.nxt?xp+' / '+L.nxt+' XP menuju level berikutnya':'Level maksimal')+'</p></div></section>';

  h+=prepCard();
  var chips='';
  (S.exams||[]).slice().sort(function(a,b){return a.date<b.date?-1:1}).forEach(function(e){var n=daysTo(e.date);if(n>=0&&n<=Math.max(14,exCfg(e).w))chips+='<span class="chip">'+esc(exCfg(e).s)+' '+esc(SUBJ[e.s].s)+' · '+nlabel(n)+'</span> '});
  if(lb)chips+='<span class="chip">Lomba '+esc(lb.l.name)+' · '+(lb.a>0?'mulai '+nlabel(lb.a):'sedang berlangsung')+'</span>';
  h+='<section class="card"><header><h2>Atur hari ini</h2><span class="sp muted small">'+esc(PHASE_D[ph])+'</span></header>'+
    '<div style="display:flex;gap:14px;flex-wrap:wrap;align-items:flex-end">'+
    '<div><div class="tiny muted" style="margin-bottom:4px;font-weight:800">Waktu belajar</div><div class="seg" role="group" aria-label="Waktu belajar">'+
    [[45,'45 mnt'],[90,'90 mnt'],[120,'2 jam'],[180,'3 jam']].map(function(o){return '<button data-act="budget" data-v="'+o[0]+'" aria-pressed="'+(S.budget===o[0])+'">'+o[1]+'</button>'}).join('')+'</div></div>'+
    '<div><div class="tiny muted" style="margin-bottom:4px;font-weight:800">Mode ringan (capek / lomba)</div><div class="seg" role="group" aria-label="Mode ringan"><button data-act="lomba" data-v="0" aria-pressed="'+(!S.lomba)+'">Normal</button><button data-act="lomba" data-v="1" aria-pressed="'+S.lomba+'">Ringan</button></div></div></div>'+
    '<div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;align-items:center">'+(chips||'<span class="small muted">Belum ada ulangan atau lomba dalam 2 minggu.</span>')+'<a class="btn ghost sm" href="#ulangan">Atur ulangan</a><a class="btn ghost sm" href="#rapor">Lomba &amp; rapor</a></div></section>';

  h+='<section class="card"><header><h2>Misi hari ini</h2><span class="chip">'+p.done+'/'+p.total+' selesai · '+p.mins+' menit</span><button class="btn ghost sm sp" data-act="regen">Susun ulang</button></header>';
  if(!p.total)h+='<div class="empty">Semua materi di daftar sudah selesai, atau belum ada yang cocok hari ini. Kirim materi baru ke Claude, atau tambah sendiri di Peta Belajar.</div>';
  p.ids.forEach(function(id){
    var t=byId(id);if(!t)return;var dn=!!S.done[id],r=reasons(t),m=mastery(t);
    h+='<div class="mis'+(dn?' done':'')+'">'+sticker(t.s)+'<div><div class="nm">'+esc(t.n)+'</div>'+
      '<div class="why">'+(r.length?esc(r.join(' · ')):'Lanjutan dari tahap sebelumnya')+'</div>'+
      '<div class="tags"><span class="tiny muted" style="font-weight:800">'+t.m+' mnt · kena:</span>'+trkTags(t)+(m!==null?'<span class="tag" style="--c:#4E9F7D">Paham '+Math.round(m*100)+'%</span>':'')+
      ' <a class="btn sm" href="#belajar-'+esc(id)+'">'+(dn?'Buka lagi':'Belajar')+'</a></div></div>'+
      '<button class="check" data-act="tick" data-id="'+esc(id)+'" aria-pressed="'+dn+'" aria-label="Tandai selesai: '+esc(t.n)+'">'+(dn?'✓':'')+'</button></div>';
  });
  h+='</section>';

  if(due){
    h+='<section class="card" style="border-color:var(--accent)"><header><h2>Ulang kesalahan</h2><span class="chip">'+due+' soal siap diulang</span></header><p class="small muted" style="margin-bottom:10px">Soal yang pernah salah muncul lagi di hari ke-1, 3, 7, dan 14. Cara paling hemat waktu untuk menaikkan skor.</p><a class="btn" href="#ulang">Mulai ulang kesalahan</a></section>';
  }

  var mk=S.micro[dk]||{};
  h+='<section class="card"><header><h2>Minum sambil berenang</h2><span class="sp muted small">Latihan kecil harian, +10 XP tiap centang</span></header><div class="micro-g">'+
    MICRO.map(function(m){var on=!!mk[m.id];return '<button class="micro" data-act="micro" data-id="'+m.id+'" aria-pressed="'+on+'"><span class="bx">'+(on?'✓':'')+'</span><span>'+esc(m.t)+'</span></button>'}).join('')+'</div></section>';

  h+='<div class="grid2"><section class="card"><header><h2>Timer fokus</h2></header>'+
    '<div class="timer" id="tmText">25:00</div>'+
    '<div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap;align-items:center"><button class="btn" id="tmGo" data-act="tmgo">Mulai</button><button class="btn ghost" data-act="tmreset">Ulang</button>'+
    '<div class="seg" role="group" aria-label="Durasi"><button data-act="tmset" data-v="25" aria-pressed="'+(TM.total===1500)+'">25</button><button data-act="tmset" data-v="45" aria-pressed="'+(TM.total===2700)+'">45</button></div></div>'+
    '<p class="tiny muted" style="margin-top:10px">Selesai satu sesi = menit dihitung jadi XP. Hari ini: '+(S.pomo[dk]||0)+' menit fokus.</p></section>'+
    '<section class="card"><header><h2>Ritme pekan</h2></header><div class="week">'+
    [1,2,3,4,5,6,0].map(function(i){return '<div class="wd'+(i===d.getDay()?' on':'')+'">'+HARI3[i]+'<small>'+DAYFOCUS[i].map(function(s){return SUBJ[s].s}).join(' + ')+'</small></div>'}).join('')+'</div>'+
    '<p class="tiny muted" style="margin-top:10px">Hari ini fokus: '+fo.map(function(s){return SUBJ[s].n}).join(' dan ')+'. Misi di atas dipilih dengan bobot ini.</p></section></div>';
  return h;
}

/* ============ view: peta ============ */
function viewMap(){
  var h='<section class="card"><header><h2>Peta Belajar</h2><span class="sp muted small">Tekan Belajar untuk masuk ke materi dan kuis. Bintang = lagi diajarkan di sekolah.</span></header>'+
    '<div class="filters" role="group" aria-label="Filter mapel"><button data-act="filt" data-v="all" aria-pressed="'+(ui.filter==='all')+'">Semua</button>'+
    Object.keys(SUBJ).map(function(s){return '<button data-act="filt" data-v="'+s+'" aria-pressed="'+(ui.filter===s)+'">'+SUBJ[s].n+'</button>'}).join('')+'</div></section>';
  Object.keys(SUBJ).forEach(function(s){
    if(ui.filter!=='all'&&ui.filter!==s)return;
    var ts=all().filter(function(t){return t.s===s}),pc=Math.round(pctSubj(s)*100),dn=ts.filter(topicDone).length;
    h+='<section class="card subj"><header>'+sticker(s)+'<div><h2>'+esc(SUBJ[s].n)+'</h2><div class="tiny muted">'+dn+' dari '+ts.length+' materi · '+pc+'%</div></div></header>'+
      '<div class="bar" style="--c:'+SUBJ[s].c+'"><b style="width:'+pc+'%"></b></div>';
    [1,2,3].forEach(function(st){
      var l=ts.filter(function(t){return t.st===st});if(!l.length)return;
      h+='<div class="stage">'+STAGE[st]+(avail(l[0])?'':' · terbuka setelah tahap 1 cukup tuntas')+'</div>';
      l.forEach(function(t){
        var dn2=!!S.done[t.id],m=mastery(t),np=pool(t.id).length;
        h+='<div class="top-row'+(dn2?' done':'')+'"><button class="mini-check" data-act="tick" data-id="'+esc(t.id)+'" aria-pressed="'+dn2+'" aria-label="Selesai: '+esc(t.n)+'">'+(dn2?'✓':'')+'</button>'+
          '<div><div class="nm">'+esc(t.n)+'</div><div class="tags"><span class="tiny muted" style="font-weight:800">'+t.m+' mnt</span>'+trkTags(t)+
          (np?'<span class="tag" style="--c:#4E9F7D">'+np+' soal</span>':'')+(m!==null?'<span class="tag" style="--c:#4E9F7D">Paham '+Math.round(m*100)+'%</span>':'')+
          '<a class="btn sm" href="#belajar-'+esc(t.id)+'">Belajar</a>'+(t.id.charAt(0)==='c'?'<button class="btn ghost sm" data-act="deltopic" data-id="'+esc(t.id)+'">Hapus</button>':'')+'</div></div>'+
          '<button class="pin" data-act="pin" data-id="'+esc(t.id)+'" aria-pressed="'+!!S.pins[t.id]+'" aria-label="Pin: lagi diajarkan di sekolah" title="Lagi diajarkan di sekolah">★</button></div>';
      });
    });
    h+='</section>';
  });
  h+='<section class="card"><header><h2>Tambah materi sendiri</h2><button class="btn ghost sm sp" data-act="addopen">'+(ui.addOpen?'Tutup':'Buka form')+'</button></header>'+
    '<p class="small muted">Atau kirim foto silabus, daftar bab, atau contoh soal ke Claude di chat. Nanti disusun otomatis ke tahap, materi, dan bank soal.</p>';
  if(ui.addOpen){
    h+='<div class="form" style="margin-top:12px"><div class="frow"><label>Mapel<select id="adS">'+Object.keys(SUBJ).map(function(s){return '<option value="'+s+'">'+SUBJ[s].n+'</option>'}).join('')+'</select></label><label>Tahap<select id="adT"><option value="1">1 · Paham konsep</option><option value="2">2 · Latih soal</option><option value="3">3 · Try out</option></select></label><label>Menit<input id="adM" type="number" min="10" max="240" value="40"></label></div>'+
      '<label>Nama materi<input id="adN" type="text" placeholder="contoh: Limit fungsi trigonometri"></label>'+
      '<div><div class="tiny muted" style="font-weight:800;margin-bottom:4px">Ujian yang ikut kena</div><div class="checks">'+Object.keys(TRK).map(function(k){return '<label><input type="checkbox" class="adK" value="'+k+'"'+(k==='R'?' checked':'')+'> '+TRK[k].n+'</label>'}).join('')+'</div></div>'+
      '<div><button class="btn" data-act="addsave">Tambahkan</button></div></div>';
  }
  return h+'</section>';
}

/* ============ view: belajar ============ */
function curId(){var h=(location.hash||'').replace('#','');return h.indexOf('belajar-')===0?h.slice(8):''}
function stepsBar(id,cur){
  var Q=S.quiz[id]||{};
  var st=[['pre','1 Pre-test',!!Q.pre],['materi','2 Materi',!!Q.read],['latihan','3 Latihan',!!Q.lat],['post','4 Post-test',!!Q.post],['refleksi','5 Refleksi',!!(Q.refl&&Q.refl.length)]];
  return '<div class="steps" role="group" aria-label="Langkah belajar">'+st.map(function(x){return '<button data-act="sstep" data-v="'+x[0]+'" aria-pressed="'+(cur===x[0])+'">'+(x[2]?'✓ ':'')+x[1]+'</button>'}).join('')+'</div>';
}
var REQ_TEMPLATE='Tolong tambahkan materi dan soal ke Ruang Belajar.\nMapel & bab: \nRingkasan materi / catatanku: \nContoh soal (boleh foto): \nPola soal yang sering keluar: ';
function viewStudy(){
  var id=curId(),t=byId(id);
  if(!t)return '<section class="card"><p>Materi tidak ditemukan.</p><a class="btn" href="#peta">Ke Peta Belajar</a></section>';
  if(ui.stepFor!==id){ui.step=nextStep(id);ui.stepFor=id;ui.sess=null}
  var Q=S.quiz[id]||{},m=mastery(t),np=pool(id).length;
  var h='<section class="card"><header>'+sticker(t.s)+'<div><h2>'+esc(t.n)+'</h2><div class="tags">'+trkTags(t)+(m!==null?'<span class="tag" style="--c:#4E9F7D">Paham '+Math.round(m*100)+'%</span>':'')+(S.done[id]?'<span class="tag" style="--c:#2E8F68">Selesai</span>':'')+'</div></div><a class="btn ghost sm sp" href="#peta">← Peta</a></header>'+stepsBar(id,ui.step)+'</section>';
  var step=ui.step;
  if(step==='materi'){
    var L=LESSONS[id];
    if(!L){
      h+='<section class="card"><div class="empty">Ringkasan materi bab ini belum ada. Kirim catatan atau fotonya ke Claude, nanti kutulis ringkasannya di sini.</div><div style="margin-top:10px"><button class="btn ghost sm" data-act="copy" data-v="req">Salin format permintaan</button></div></section>';
    }else{
      h+='<section class="card lesson"><header><h2>Ringkasan</h2></header><p>'+esc(L.intro)+'</p><h3>Yang perlu diingat</h3><ul>'+L.points.map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</ul>'+
        (L.examples&&L.examples.length?'<h3>Contoh</h3>'+L.examples.map(function(e){return '<div class="ex"><div style="font-weight:800">'+esc(e.q)+'</div><div>'+esc(e.a)+'</div></div>'}).join(''):'')+
        (L.traps&&L.traps.length?'<h3>Jebakan yang sering terjadi</h3><ul>'+L.traps.map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</ul>':'')+'</section>';
    }
    h+='<section class="card"><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">'+
      '<button class="btn" data-act="readok">'+(Q.read?'Sudah kubaca ✓':'Tandai sudah kubaca')+'</button>'+
      (np?'<button class="btn ghost" data-act="sstep" data-v="latihan">Lanjut ke latihan</button>':'<button class="btn ghost" data-act="tick" data-id="'+esc(id)+'">'+(S.done[id]?'Batalkan selesai':'Tandai bab ini selesai')+'</button>')+'</div></section>';
  }else if(step==='refleksi'){
    h+='<section class="card"><header><h2>Refleksi</h2><span class="sp muted small">Dua menit cukup. Ini yang bikin belajar menempel.</span></header><div class="form">'+
      '<label>Yang sudah kupahami<textarea id="rfA" rows="2" placeholder="contoh: cara mencari diskriminan"></textarea></label>'+
      '<label>Yang masih bingung<textarea id="rfB" rows="2" placeholder="contoh: kapan pakai rumus abc dan kapan faktor"></textarea></label>'+
      '<label>Rencana perbaikan<textarea id="rfC" rows="2" placeholder="contoh: ulang 5 soal tipe akar kembar besok"></textarea></label>'+
      '<label>Seberapa yakin kamu sekarang? (1–5)<select id="rfD"><option>1</option><option>2</option><option selected>3</option><option>4</option><option>5</option></select></label>'+
      '<div><button class="btn" data-act="rfsave">Simpan refleksi</button></div></div></section>';
    var rl=(Q.refl||[]).slice().reverse().slice(0,3);
    if(rl.length)h+='<section class="card"><header><h2>Refleksi sebelumnya</h2></header>'+rl.map(function(r){return '<div class="rv"><div class="small" style="font-weight:800">'+fdate(r.d)+' · yakin '+r.c+'/5</div>'+(r.a?'<div class="small">Paham: '+esc(r.a)+'</div>':'')+(r.b?'<div class="small">Bingung: '+esc(r.b)+'</div>':'')+(r.p?'<div class="small">Rencana: '+esc(r.p)+'</div>':'')+'</div>'}).join('')+'</section>';
  }else{
    if(ui.sess&&ui.sess.kind===step&&ui.sess.tid===id){h+=quizHtml()}
    else{
      var desc={pre:'Empat soal sebelum belajar. Salah itu normal, gunanya untuk tahu posisimu. Jawaban dibahas di akhir.',latihan:'Enam soal dengan pembahasan langsung. Soal yang pernah salah muncul lebih dulu.',post:'Lima soal setelah belajar. Skor 70% ke atas otomatis menandai bab ini selesai.'}[step];
      var last=step==='pre'?Q.pre:step==='post'?Q.post:null;
      h+='<section class="card"><header><h2>'+KIND_L[step]+'</h2></header><p class="muted" style="margin-bottom:12px">'+esc(desc)+'</p>';
      if(last)h+='<p class="small" style="margin-bottom:12px">Terakhir: <b>'+last.s+'/'+last.n+'</b> pada '+fdate(last.d)+'</p>';
      if(np)h+='<button class="btn" data-act="qstart" data-v="'+step+'">Mulai '+KIND_L[step].toLowerCase()+'</button> <span class="tiny muted">'+np+' soal tersedia di bank</span>';
      else h+='<div class="empty">Bank soal bab ini masih kosong. Kirim contoh soal ke Claude, nanti dibuatkan soal dengan pola yang sama.</div><div style="margin-top:10px"><button class="btn ghost sm" data-act="copy" data-v="req">Salin format permintaan</button></div>';
      h+='</section>';
    }
  }
  return h;
}
function viewReview(){
  if(ui.sess&&ui.sess.kind==='review')return '<section class="card"><a class="btn ghost sm" href="#hari-ini">← Hari Ini</a></section>'+quizHtml();
  var due=dueErrors().length,tot=Object.keys(S.err).length;
  var h='<section class="card"><header><h2>Ulang kesalahan</h2><a class="btn ghost sm sp" href="#hari-ini">← Hari Ini</a></header><p class="muted" style="margin-bottom:12px">Ada <b>'+tot+'</b> soal di bank kesalahan, <b>'+due+'</b> siap diulang hari ini.</p>';
  if(due)h+='<button class="btn" data-act="qstart" data-v="review">Mulai (maksimal 8 soal)</button>';
  else h+='<div class="empty">Tidak ada yang perlu diulang sekarang. Nanti muncul sendiri sesuai jadwalnya.</div>';
  return h+'</section>';
}

/* ============ view: rapor & target ============ */
function ring(k){
  var pc=pctTrack(k),r=32,c=2*Math.PI*r,col=TRK[k].c;
  return '<svg class="ring" viewBox="0 0 76 76" role="img" aria-label="'+TRK[k].n+' '+Math.round(pc*100)+' persen"><circle cx="38" cy="38" r="'+r+'" fill="none" stroke="var(--line)" stroke-width="8"/><circle cx="38" cy="38" r="'+r+'" fill="none" stroke="'+col+'" stroke-width="8" stroke-linecap="round" stroke-dasharray="'+(c*pc).toFixed(1)+' '+c.toFixed(1)+'" transform="rotate(-90 38 38)"/><text x="38" y="43" text-anchor="middle" font-size="15">'+Math.round(pc*100)+'%</text></svg>';
}
function lastScore(type){
  var l=S.logs.filter(function(x){return x.type===type}).sort(function(a,b){return a.date<b.date?1:-1});
  return l.length?l[0].score:null;
}
function chart(type){
  var l=S.logs.filter(function(x){return x.type===type}).sort(function(a,b){return a.date<b.date?-1:1});
  if(!l.length)return '<div class="empty small">Belum ada skor '+TRK[type].n+'.</div>';
  var tg=+S.targets[type]||0,vals=l.map(function(x){return +x.score});
  var lo=Math.min.apply(null,vals.concat(tg?[tg]:[])),hi=Math.max.apply(null,vals.concat(tg?[tg]:[]));
  if(hi===lo){hi=lo+1;lo=lo-1}
  var pp=(hi-lo)*.12;lo-=pp;hi+=pp;
  var W=320,H=140,px=40,py=16;
  function X(i){return l.length===1?W/2:px+(W-px-14)*i/(l.length-1)}
  function Y(v){return H-py-(H-2*py)*(v-lo)/(hi-lo)}
  var pts=l.map(function(x,i){return X(i).toFixed(1)+','+Y(+x.score).toFixed(1)}).join(' ');
  var s='<svg class="chart" viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Grafik skor '+TRK[type].n+'">';
  s+='<line class="gd" x1="'+px+'" x2="'+(W-8)+'" y1="'+(H-py)+'" y2="'+(H-py)+'"/>';
  if(tg){s+='<line class="tg" x1="'+px+'" x2="'+(W-8)+'" y1="'+Y(tg).toFixed(1)+'" y2="'+Y(tg).toFixed(1)+'"/><text x="4" y="'+(Y(tg)+3).toFixed(1)+'">'+tg+'</text>'}
  if(l.length>1)s+='<polyline class="ln" points="'+pts+'"/>';
  l.forEach(function(x,i){s+='<circle cx="'+X(i).toFixed(1)+'" cy="'+Y(+x.score).toFixed(1)+'" r="4"/><text x="'+X(i).toFixed(1)+'" y="'+(Y(+x.score)-8).toFixed(1)+'" text-anchor="middle">'+esc(x.score)+'</text>'});
  return s+'</svg>';
}
function boostList(){
  var out=[];
  SCHOOL.forEach(function(s){
    var sc=0,why=[],g=raporGap(s),ex=nearestExam(s);
    if(g>0){sc+=g*1.5;why.push('Rapor '+S.rapor[s].now+' → target '+S.rapor[s].target+' (kurang '+g+')')}
    if(ex&&ex.n<=21){sc+=(21-ex.n)*1.2+10;why.push('Ulangan '+nlabel(ex.n))}
    var ms=all().filter(function(t){return t.s===s}).map(mastery).filter(function(m){return m!==null});
    if(ms.length){var avg=ms.reduce(function(a,b){return a+b},0)/ms.length;if(avg<0.7){sc+=(0.7-avg)*40;why.push('Penguasaan bab rata-rata '+Math.round(avg*100)+'%')}}
    if(sc>0)out.push({s:s,sc:sc,why:why});
  });
  return out.sort(function(a,b){return b.sc-a.sc});
}
function viewGoal(){
  var h='';
  var bl=boostList();
  h+='<section class="card"><header><h2>Yang perlu dinaikkan dulu</h2><span class="sp muted small">Dihitung dari rapor, ulangan, dan hasil kuis</span></header>';
  if(!bl.length)h+='<div class="empty">Isi nilai rapor sekarang dan targetmu di bawah, tambahkan jadwal ulangan, lalu kerjakan beberapa kuis. Setelah itu daftar ini terisi sendiri.</div>';
  bl.forEach(function(b){
    var ts=all().filter(function(t){return t.s===b.s&&!S.done[t.id]&&avail(t)});
    ts.sort(function(a,c){var ma=mastery(a),mc=mastery(c);return (ma===null?1:ma)-(mc===null?1:mc)||a.i-c.i});
    var nx=ts[0];
    h+='<div class="mis">'+sticker(b.s)+'<div><div class="nm">'+esc(SUBJ[b.s].n)+'</div><div class="why">'+esc(b.why.join(' · '))+'</div></div>'+(nx?'<a class="btn sm" href="#belajar-'+esc(nx.id)+'">Mulai: '+esc(nx.n.length>22?nx.n.slice(0,21)+'…':nx.n)+'</a>':'')+'</div>';
  });
  var weak=all().filter(function(t){var m=mastery(t);return m!==null&&m<0.7}).sort(function(a,b){return mastery(a)-mastery(b)}).slice(0,5);
  if(weak.length){
    h+='<h3 style="margin:16px 0 8px">Bab yang masih lemah</h3>'+weak.map(function(t){return '<div class="logrow"><span class="sc">'+Math.round(mastery(t)*100)+'%</span><div style="flex:1"><div class="small" style="font-weight:800">'+esc(t.n)+'</div><div class="tiny muted">'+esc(SUBJ[t.s].n)+'</div></div><a class="btn ghost sm" href="#belajar-'+esc(t.id)+'">Belajar</a></div>'}).join('');
  }
  h+='</section>';

  h+='<section class="card"><header><h2>Nilai rapor</h2><span class="sp muted small">Isi nilai sekarang dan target idealmu</span></header><div class="rapor">'+
    '<div class="rhead tiny muted">Mapel</div><div class="rhead tiny muted">Sekarang</div><div class="rhead tiny muted">Target</div>'+
    SCHOOL.map(function(s){var r=S.rapor[s]||{};return '<div style="display:flex;gap:8px;align-items:center">'+sticker(s)+'<span style="font-weight:800">'+esc(SUBJ[s].n)+'</span></div>'+
      '<input type="number" min="0" max="100" data-field="rn:'+s+'" value="'+(r.now||'')+'" aria-label="Nilai '+esc(SUBJ[s].n)+' sekarang">'+
      '<input type="number" min="0" max="100" data-field="rt:'+s+'" value="'+(r.target||'')+'" aria-label="Target '+esc(SUBJ[s].n)+'">'}).join('')+'</div></section>';

  h+='<div class="grid2"><section class="card"><header><h2>Ulangan sekolah</h2></header><p class="small" style="margin-bottom:10px">UH, UTS, dan UAS sekarang diatur di tab Ulangan, lengkap dengan pilihan bab dan jadwal persiapan.</p>'+((S.exams||[]).filter(function(e){return daysTo(e.date)>=0}).length+' ulangan akan datang')+'<div style="margin-top:10px"><a class="btn sm" href="#ulangan">Buka tab Ulangan</a></div></section>'+
    '<section class="card"><header><h2>Jadwal lomba</h2></header><div class="form"><label>Nama lomba<input type="text" id="lbN" placeholder="contoh: LKTI tingkat provinsi"></label><div class="frow"><label>Mulai<input type="date" id="lbA" min="'+dkey()+'"></label><label>Selesai<input type="date" id="lbB" min="'+dkey()+'"></label></div><div><button class="btn sm" data-act="lombaadd">Tambah lomba</button></div></div><p class="tiny muted" style="margin-top:8px">Dua hari sebelum mulai sampai hari terakhir lomba, misi otomatis ringan (maksimal 45 menit).</p>'+
    ((S.lombas||[]).length?'<div style="margin-top:6px">'+S.lombas.slice().sort(function(a,b){return a.start<b.start?-1:1}).map(function(l){var n=daysTo(l.start),e=daysTo(l.end||l.start);return '<div class="logrow"><div style="flex:1"><div class="small" style="font-weight:800">'+esc(l.name)+'</div><div class="tiny muted">'+fdate(l.start)+(l.end&&l.end!==l.start?' – '+fdate(l.end):'')+' · '+(e<0?'sudah lewat':n>0?'mulai '+nlabel(n):'sedang berlangsung')+'</div></div><button class="btn ghost sm" data-act="lombadel" data-id="'+esc(l.id)+'">Hapus</button></div>'}).join('')+'</div>':'')+'</section></div>';

  h+='<section class="card"><header><h2>Target kamu</h2><span class="sp muted small">Satu materi bisa menaikkan beberapa lingkaran sekaligus.</span></header><div class="grid3">';
  Object.keys(TRK).forEach(function(k){
    var cap;
    if(k==='R')cap='Materi sekolah yang tuntas';
    else if(k==='T')cap='Materi yang masuk kisi TKA';
    else{var ls=lastScore(k);cap='Target '+(S.targets[k]||'belum diisi')+(ls!==null?' · terakhir '+ls:'')}
    h+='<div class="ringbox">'+ring(k)+'<div><div style="font-family:var(--font-d);font-weight:600">'+esc(TRK[k].d)+'</div><div class="tiny muted">'+esc(cap)+'</div></div></div>';
  });
  h+='</div></section>';

  h+='<section class="card"><header><h2>Peta jalan</h2></header><ul class="tl">';
  var nextDone=false;
  MILE.forEach(function(m){
    var n=daysTo(m.d),past=n<0,cls=past?'past':(!nextDone?'next':'');
    if(!past)nextDone=true;
    h+='<li class="'+cls+'"><div class="dt">'+fdate(m.d).replace(/ \d{4}$/,'')+'<small>'+m.d.slice(0,4)+(m.a?' · perkiraan':'')+'</small></div><div><div style="font-weight:800">'+esc(m.t)+(m.main?' · target utama':'')+'</div><div class="small muted">'+esc(m.n)+' · '+(past?'sudah lewat':nlabel(n))+'</div></div></li>';
  });
  h+='</ul><p class="tiny muted" style="margin-top:12px">Tanggal TKA dan UTBK masih perkiraan dari jadwal tahun ini. Syarat FK UI (misalnya nilai bahasa Inggris untuk kelas internasional) sering berubah, jadi cek ulang di situs resmi FK UI dan SNPMB.</p></section>';

  h+='<section class="card"><header><h2>Skor target</h2></header><div class="form"><div class="frow">'+
    '<label>TOEFL (skor)<input type="number" data-field="tI" value="'+(S.targets.I||'')+'" min="0" max="677" step="0.5"></label>'+
    '<label>UTBK (skor)<input type="number" data-field="tU" value="'+(S.targets.U||'')+'" min="0" max="1000" step="5"></label></div></div></section>';

  h+='<section class="card"><header><h2>Catat try out</h2><span class="sp muted small">Try out TOEFL dan UTBK dikerjakan di luar web, skornya dicatat di sini</span></header><div class="form"><div class="frow">'+
    '<label>Ujian<select id="lgT"><option value="I"'+(ui.logType==='I'?' selected':'')+'>TOEFL</option><option value="U"'+(ui.logType==='U'?' selected':'')+'>UTBK</option></select></label>'+
    '<label>Skor<input type="number" id="lgS" step="0.5" min="0"></label>'+
    '<label>Tanggal<input type="date" id="lgD" value="'+dkey()+'"></label></div>'+
    '<label>Bagian yang masih lemah<input type="text" id="lgN" placeholder="contoh: Listening talk akademik, Build a Sentence"></label>'+
    '<div><button class="btn" data-act="logadd">Simpan skor</button></div></div></section>';
  ['I','U'].forEach(function(k){
    var l=S.logs.filter(function(x){return x.type===k}).sort(function(a,b){return a.date<b.date?1:-1});
    h+='<section class="card"><header><h2>Grafik '+TRK[k].n+'</h2></header>'+chart(k)+
      l.map(function(x){return '<div class="logrow"><span class="sc">'+esc(x.score)+'</span><div style="flex:1"><div class="small" style="font-weight:800">'+fdate(x.date)+'</div>'+(x.note?'<div class="small muted">'+esc(x.note)+'</div>':'')+'</div><button class="btn ghost sm" data-act="logdel" data-id="'+esc(x.id)+'">Hapus</button></div>'}).join('')+'</section>';
  });
  return h;
}

/* ============ view: atur ============ */
function summary(){
  var o='RINGKASAN PROGRES ('+fdate(dkey())+')\n';
  Object.keys(SUBJ).forEach(function(s){var ts=all().filter(function(t){return t.s===s});o+=SUBJ[s].n+': '+ts.filter(topicDone).length+'/'+ts.length+' materi\n'});
  Object.keys(TRK).forEach(function(k){o+='Target '+TRK[k].n+': '+Math.round(pctTrack(k)*100)+'%\n'});
  ['I','U'].forEach(function(k){var l=lastScore(k);if(l!==null)o+='Skor terakhir '+TRK[k].n+': '+l+' (target '+(S.targets[k]||'-')+')\n'});
  SCHOOL.forEach(function(s){var r=S.rapor[s];if(r&&r.now)o+='Rapor '+SUBJ[s].n+': '+r.now+(r.target?' (target '+r.target+')':'')+'\n'});
  var w=all().filter(function(t){var m=mastery(t);return m!==null&&m<0.7}).map(function(t){return t.n+' '+Math.round(mastery(t)*100)+'%'});
  if(w.length)o+='Bab lemah: '+w.join('; ')+'\n';
  o+='Soal di bank kesalahan: '+Object.keys(S.err).length+'\nXP '+xpTotal()+', streak '+streak()+' hari';
  return o;
}
function viewSet(){
  var sync=syncState==='cloud'?'Progresmu tersimpan di akun dan bisa dibuka dari HP atau laptop.':syncState==='error'?'Sinkron gagal. Progres masih aman di perangkat ini.':'Progresmu tersimpan di perangkat ini saja. Salin cadangan di bawah kalau mau pindah perangkat.';
  var fbH='';
  if(fbOn()){fbH=fbUser?'<p class="small" style="margin-bottom:10px">Masuk sebagai '+esc(fbUser.email||'akun Google')+'. Progres otomatis sinkron di perangkat yang masuk dengan akun ini.</p><div style="margin-bottom:10px"><button class="btn ghost sm" data-act="fblogout">Keluar dari sinkron</button></div>':'<div style="margin-bottom:10px"><button class="btn sm" data-act="fblogin">Masuk dengan Google untuk sinkron</button></div>'}
  var h='<section class="card"><header><h2>Tampilan</h2></header><div class="form">'+
    '<label>Nama panggilan<input type="text" data-field="nick" value="'+esc(S.nick)+'" maxlength="24" placeholder="Adiva"></label>'+
    '<div><div class="tiny muted" style="font-weight:800;margin-bottom:6px">Warna utama</div><div style="display:flex;gap:10px;flex-wrap:wrap">'+
    [['rose','#C93C68','Mawar'],['lilac','#7B5FD6','Lilac'],['matcha','#3A8664','Matcha'],['langit','#2F6FC0','Langit'],['peach','#B8561F','Peach']].map(function(a){return '<button class="swatch" style="background:'+a[1]+'" data-act="accent" data-v="'+a[0]+'" aria-pressed="'+(S.accent===a[0])+'" aria-label="'+a[2]+'"></button>'}).join('')+'</div></div>'+
    '<div><a class="btn ghost sm" href="#avatar">Dandan avatar</a></div></div></section>';
  h+='<section class="card"><header><h2>Kirim materi ke Claude</h2></header><p class="small muted" style="margin-bottom:10px">Kirim ke chat Claude: foto silabus, catatan, contoh soal, atau pola soal yang sering keluar. Claude menyusun ringkasan materi, membuat soal dengan pola yang sama, lalu memasukkannya ke web ini. Boleh salin format di bawah.</p><pre class="copy">'+esc(REQ_TEMPLATE)+'</pre><div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn sm" data-act="copy" data-v="req">Salin format</button><button class="btn ghost sm" data-act="copy" data-v="sum">Salin ringkasan progres</button></div></section>';
  h+='<section class="card"><header><h2>Penyimpanan & cadangan</h2></header><p class="small" style="margin-bottom:10px">'+esc(sync)+'</p>'+fbH+'<div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn sm" data-act="copy" data-v="bak">Salin cadangan</button><button class="btn ghost sm" data-act="restoreopen">'+(ui.restoreOpen?'Tutup':'Pulihkan dari cadangan')+'</button></div>';
  if(ui.restoreOpen)h+='<div class="form" style="margin-top:10px"><label>Tempel cadangan di sini<textarea id="bkT" rows="3"></textarea></label><div><button class="btn sm" data-act="restore">Pulihkan</button></div></div>';
  h+='</section>';
  h+='<section class="card"><header><h2>Mulai dari nol</h2></header><p class="small muted" style="margin-bottom:10px">Menghapus semua centang, skor, XP, kuis, dan materi tambahan.</p>'+
    (ui.confirmReset?'<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center"><span class="small" style="font-weight:800">Yakin? Ini tidak bisa dibatalkan.</span><button class="btn sm" data-act="reset2">Ya, hapus semua</button><button class="btn ghost sm" data-act="reset0">Batal</button></div>':'<button class="btn ghost sm" data-act="reset1">Reset progres</button>')+'</section>';
  h+='<p class="tiny muted" style="margin-top:14px">Situs belajar pribadi. Bukan situs resmi dan tidak berafiliasi dengan Universitas Indonesia. Logo UI dipakai sebagai penyemangat target.</p>';
  return h;
}

/* ============ avatar ============ */
function swRow(k,arr,cur,label){return '<div><div class="tiny muted lbl">'+label+'</div><div class="swrow">'+arr.map(function(c,i){return '<button class="swatch" style="background:'+c+'" data-act="av" data-k="'+k+'" data-v="'+i+'" aria-pressed="'+(cur===i)+'" aria-label="'+label+' '+(i+1)+'"></button>'}).join('')+'</div></div>'}
function segRow(k,arr,cur,label){return '<div><div class="tiny muted lbl">'+label+'</div><div class="seg" role="group" aria-label="'+label+'">'+arr.map(function(n,i){return '<button data-act="av" data-k="'+k+'" data-v="'+i+'" aria-pressed="'+(cur===i)+'">'+n+'</button>'}).join('')+'</div></div>'}
function viewAvatar(){
  var a=S.av;
  var h='<section class="card avcard"><header><h2>Dandan avatar</h2><span class="sp"></span><button class="btn ghost sm" data-act="avrand">Acak</button><button class="btn ghost sm" data-act="avreset">Reset</button></header><div class="avgrid"><div class="avprev">'+avatar('happy')+'</div><div class="form avopts">';
  h+='<div><div class="tiny muted lbl">Kepala</div><div class="seg" role="group" aria-label="Hijab"><button data-act="av" data-k="hijab" data-v="1" aria-pressed="'+a.hijab+'">Berhijab</button><button data-act="av" data-k="hijab" data-v="0" aria-pressed="'+(!a.hijab)+'">Tanpa hijab</button></div></div>';
  if(a.hijab){h+=swRow('hjc',AV.hjc,a.hjc,'Warna hijab')}
  else{h+=segRow('style',AV.st,a.style,'Gaya rambut')+swRow('hair',AV.hair,a.hair,'Warna rambut')}
  h+=swRow('skin',AV.skin,a.skin,'Warna kulit');
  h+=segRow('of',AV.of,a.of,'Baju')+swRow('oc',AV.oc,a.oc,'Warna baju & pita');
  h+='<div><div class="tiny muted lbl">Aksesori</div><div class="seg" role="group" aria-label="Aksesori">'+AV.ac.map(function(x){return '<button data-act="avt" data-k="'+x[0]+'" aria-pressed="'+(!!a[x[0]])+'">'+x[1]+'</button>'}).join('')+'</div></div>';
  h+=swRow('bg',AV.bg,a.bg,'Latar');
  h+='</div></div><p class="small muted" style="margin-top:12px">Pilihanmu tersimpan otomatis. Mau gaya yang tidak ada di sini? Kirim gambar referensi ke Claude dan minta dibuatkan.</p></section>';
  return h;
}

/* ============ kisi-kisi & strategi ============ */
function kStat(ids){
  var arr=ids.split(',').filter(function(id){return byId(id)}),done=0,les=0;
  arr.forEach(function(id){if(S.done[id])done++;if(LESSONS[id])les++});
  var qn=QUESTIONS.filter(function(q){return arr.indexOf(q.t)>-1}).length;
  return {ids:arr,n:arr.length,done:done,les:les,q:qn,pct:arr.length?Math.round(done/arr.length*100):0};
}
function kBadges(st){
  var b=[];
  b.push(st.les>0?'<span class="tag" style="--c:#2E8F68">Materi ada</span>':'<span class="tag" style="--c:#C97A12">Belum ada materi</span>');
  b.push(st.q>0?'<span class="tag" style="--c:#2E8F68">'+st.q+' soal</span>':'<span class="tag" style="--c:#C97A12">Belum ada soal</span>');
  if(st.done>0)b.push('<span class="tag" style="--c:#4F8FE8">'+st.pct+'% dipelajari</span>');
  return b.join('');
}
function kExamSum(ex){
  var n=0,les=0,q=0,pc=0;
  ex.groups.forEach(function(g){g.items.forEach(function(it){var st=kStat(it[3]);n++;if(st.les)les++;if(st.q)q++;pc+=st.pct})});
  return {n:n,les:les,q:q,pct:n?Math.round(pc/n):0};
}
function viewStrategi(){
  var K=RB.kisi||[],cur=ui.kisi||'iel',h='';
  var tabs=K.map(function(e){return '<button data-act="kisi" data-v="'+e.id+'" aria-pressed="'+(cur===e.id)+'">'+esc(e.n)+'</button>'}).join('')+'<button data-act="kisi" data-v="gap" aria-pressed="'+(cur==='gap')+'">Belum dimasukkan</button>';
  var sakti=BASE.filter(function(t){return t.st===1&&t.tr.length>=4}).sort(function(a,b){return b.tr.length-a.tr.length||a.i-b.i}).slice(0,8);
  h+='<section class="card hero2"><header><h2>Kisi-kisi & strategi</h2></header><p class="small" style="margin-bottom:10px">Satu bab sering dipakai beberapa ujian sekaligus. Itu dasar “berenang sambil minum”: pilih bab yang menolong paling banyak target dulu. Tiap ujian di bawah punya peta bab, isi bab, dan cara kerjanya.</p><div class="filters seg2" role="group" aria-label="Pilih ujian">'+tabs+'</div></section>';
  if(cur==='gap'){
    h+='<section class="card"><header><h2>Yang belum kamu masukkan</h2></header><p class="small muted" style="margin-bottom:12px">Daftar ini dibuat dari membandingkan semua kisi-kisi dengan isi web sekarang.</p>';
    h+='<ul class="gaplist">'+(RB.gap||[]).map(function(g){return '<li><b>'+esc(g.t)+'</b><span class="small muted">'+esc(g.d)+'</span></li>'}).join('')+'</ul></section>';
    h+='<section class="card"><header><h2>Bab kisi-kisi tanpa materi atau soal</h2></header><div class="subj">';
    K.forEach(function(e){var s=kExamSum(e);h+='<div class="ringbox" style="--c:'+e.c+'"><div style="flex:1"><div class="nm" style="font-weight:800">'+esc(e.n)+'</div><div class="small muted">'+s.les+' dari '+s.n+' bab sudah ada materi · '+s.q+' dari '+s.n+' bab sudah ada soal</div><div class="bar" style="margin-top:6px"><b style="width:'+Math.round(s.les/s.n*100)+'%"></b></div></div><button class="btn ghost sm" data-act="kisi" data-v="'+e.id+'">Lihat</button></div>'});
    h+='</div><p class="small muted" style="margin-top:12px">Cara mengisi: kirim catatan atau contoh soal ke Claude, sebut nama bab dari daftar ini. Claude membuat materi dan soal polanya, lalu menaruhnya di web.</p></section>';
    return h;
  }
  var ex=K.filter(function(e){return e.id===cur})[0]||K[0],sm=kExamSum(ex);
  h+='<section class="card" style="--cc:'+ex.c+'"><header><span class="st" style="--c:'+ex.c+'">'+esc(ex.n.slice(0,5))+'</span><h2>'+esc(ex.n)+'</h2></header><p class="small">'+esc(ex.fmt)+'</p><div class="hero-meta" style="justify-content:flex-start"><span class="chip">'+sm.n+' bab di kisi-kisi</span><span class="chip">'+sm.les+' sudah ada materi</span><span class="chip">'+sm.q+' sudah ada soal</span><span class="chip">'+sm.pct+'% sudah kamu pelajari</span></div><p class="tiny muted" style="margin-top:8px">Sumber: '+esc(ex.sumber)+'</p></section>';
  h+='<section class="card"><header><h2>Strategi besar '+esc(ex.n)+'</h2></header><ol class="stratlist">'+ex.strat.map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</ol></section>';
  ex.groups.forEach(function(g){
    h+='<section class="card"><header><h3>'+esc(g.g)+'</h3></header><div class="kilist">';
    g.items.forEach(function(it){
      var st=kStat(it[3]);
      h+='<details class="ki"><summary><span class="kn">'+esc(it[0])+'</span><span class="kb">'+kBadges(st)+'</span></summary><div class="kbody"><p><b>Isi bab:</b> '+esc(it[1])+'</p><p class="kt"><b>Cara kerjanya:</b> '+esc(it[2])+'</p><div class="tags">'+(st.ids.length?'<span class="tiny muted">Materi di Peta Belajar:</span>'+st.ids.map(function(id){var t=byId(id);return '<a class="tag lnk" style="--c:'+SUBJ[t.s].c+'" href="#belajar-'+id+'">'+esc(t.n)+'</a>'}).join(''):'<span class="tiny muted">Belum ada bab yang cocok di Peta Belajar.</span>')+'</div></div></details>';
    });
    h+='</div></section>';
  });
  h+='<section class="card"><header><h2>Bab sakti (menolong banyak target)</h2></header><p class="small muted" style="margin-bottom:10px">Belajar bab ini dulu, karena satu kali belajar menolong 4–5 target sekaligus.</p>'+sakti.map(function(t){return '<div class="top-row"><span class="st" style="--c:'+SUBJ[t.s].c+'">'+SUBJ[t.s].s+'</span><div><div class="nm"><a href="#belajar-'+t.id+'" style="color:inherit">'+esc(t.n)+'</a></div><div class="tags">'+trkTags(t)+'</div></div><span class="tiny muted">'+t.m+' mnt</span></div>'}).join('')+'</section>';
  return h;
}

/* ============ render + navigasi ============ */
function curTab(){
  var t=(location.hash||'').replace('#','');
  if(t.indexOf('belajar-')===0)return 'belajar';
  return ['hari-ini','peta','strategi','ulangan','rapor','avatar','ulang','atur'].indexOf(t)>-1?t:'hari-ini';
}
function render(){
  document.documentElement.dataset.accent=S.accent;
  var t=curTab(),v=$('#view');
  v.innerHTML=t==='hari-ini'?viewToday():t==='peta'?viewMap():t==='rapor'?viewGoal():t==='strategi'?viewStrategi():t==='ulangan'?viewUlangan():t==='avatar'?viewAvatar():t==='belajar'?viewStudy():t==='ulang'?viewReview():viewSet();
  var nav=t==='belajar'?'peta':t==='ulang'?'hari-ini':t;
  document.querySelectorAll('#tabs a').forEach(function(a){if(a.dataset.tab===nav)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
  paintStats();tmPaint();
}
function afterTick(id,was){
  var t=byId(id);if(!t)return;
  persist();
  if(!was){
    var p=planInfo();
    if(p.total>0&&p.done===p.total&&(S.plan[dkey()]||[]).indexOf(id)>-1){confetti(110);toast('Semua misi hari ini selesai! +'+t.m+' XP')}
    else{confetti(36);toast('+'+t.m+' XP · '+t.tr.length+' target ikut naik')}
  }
  render();
}
function copyText(txt){
  try{navigator.clipboard.writeText(txt).then(function(){toast('Tersalin')},function(){toast('Tidak bisa menyalin, blok teksnya lalu salin manual')})}
  catch(e){toast('Tidak bisa menyalin, blok teksnya lalu salin manual')}
}
document.addEventListener('click',function(ev){
  var el=ev.target.closest('[data-act]');if(!el)return;
  var a=el.dataset.act,id=el.dataset.id,v=el.dataset.v,dk=dkey();
  if(a==='tick'){var was=!!S.done[id];if(was)delete S.done[id];else S.done[id]=dk;afterTick(id,was)}
  else if(a==='micro'){S.micro[dk]=S.micro[dk]||{};var on=!S.micro[dk][id];S.micro[dk][id]=on;persist();if(on){confetti(14);toast('+10 XP')}render()}
  else if(a==='pin'){if(S.pins[id])delete S.pins[id];else S.pins[id]=true;persist();render()}
  else if(a==='budget'){S.budget=+v;makePlan();persist();render()}
  else if(a==='lomba'){S.lomba=v==='1';makePlan();persist();render()}
  else if(a==='regen'){makePlan();persist();render();toast('Misi disusun ulang')}
  else if(a==='say'){ui.msgI++;var b=$('#bubble');if(b)b.textContent=say()}
  else if(a==='tmgo'){tmToggle()}
  else if(a==='tmreset'){tmSet(TM.total/60);render()}
  else if(a==='tmset'){tmSet(+v);render()}
  else if(a==='filt'){ui.filter=v;render()}
  else if(a==='addopen'){ui.addOpen=!ui.addOpen;render()}
  else if(a==='addsave'){
    var n=$('#adN').value.trim();if(!n){toast('Isi nama materinya dulu');return}
    var tr=Array.prototype.map.call(document.querySelectorAll('.adK:checked'),function(x){return x.value});
    if(!tr.length)tr=['R'];
    var m=Math.max(10,Math.min(240,+$('#adM').value||40));
    S.custom.push({id:'c'+Date.now(),s:$('#adS').value,st:+$('#adT').value,n:n,m:m,tr:tr,i:500+S.custom.length});
    ui.addOpen=false;makePlan();persist();render();toast('Materi ditambahkan');
  }
  else if(a==='deltopic'){S.custom=S.custom.filter(function(x){return x.id!==id});delete S.done[id];delete S.pins[id];makePlan();persist();render()}
  /* belajar & kuis */
  else if(a==='sstep'){ui.step=v;ui.sess=null;render()}
  else if(a==='readok'){var Q=S.quiz[curId()]=S.quiz[curId()]||{seen:{}};Q.read=!Q.read;persist();render()}
  else if(a==='qstart'){startSess(v==='review'?null:curId(),v)}
  else if(a==='qagain'){startSess(ui.sess.tid,ui.sess.kind)}
  else if(a==='qans'){
    var s=ui.sess;if(!s||s.picked!==null)return;
    var pk=+v,q=s.qs[s.i].q;s.picked=pk;s.res.push({qid:q.id,ok:pk===q.a,pick:pk});render();
  }
  else if(a==='qnext'){var s2=ui.sess;s2.i++;s2.picked=null;if(s2.i>=s2.qs.length){finishSess()}render()}
  else if(a==='qquit'){var wasReview=ui.sess&&ui.sess.kind==='review';ui.sess=null;if(wasReview){location.hash='#hari-ini'}render()}
  else if(a==='rfsave'){
    var id2=curId(),Q2=S.quiz[id2]=S.quiz[id2]||{seen:{}};
    Q2.refl=Q2.refl||[];Q2.refl.push({d:dk,a:$('#rfA').value.trim(),b:$('#rfB').value.trim(),p:$('#rfC').value.trim(),c:+$('#rfD').value});
    persist();render();toast('Refleksi tersimpan');
  }
  /* rapor, ulangan, lomba */
  else if(a==='examadd'){var F=ui.exf;if(!F.date){toast('Pilih tanggal ulangan dulu');return}S.exams.push({id:'e'+Date.now(),s:F.s,type:F.type,date:F.date,label:F.label.trim(),bab:F.bab.slice()});ui.exf={s:F.s,type:F.type,date:'',label:'',bab:[]};makePlan();persist();render();toast('Ulangan ditambahkan, misi hari ini disesuaikan')}
  else if(a==='extype'){ui.exf.type=v;render()}
  else if(a==='exbab'){var bi=ui.exf.bab.indexOf(id);if(bi>-1)ui.exf.bab.splice(bi,1);else ui.exf.bab.push(id);render()}
  else if(a==='exball'){ui.exf.bab=all().filter(function(t){return t.s===ui.exf.s&&t.st===1}).map(function(t){return t.id});render()}
  else if(a==='exbab0'){ui.exf.bab=[];render()}
  else if(a==='examdel'){S.exams=S.exams.filter(function(x){return x.id!==id});makePlan();persist();render()}
  else if(a==='lombaadd'){var nm=$('#lbN').value.trim(),st=$('#lbA').value,en=$('#lbB').value||st;if(!nm||!st){toast('Isi nama dan tanggal mulai lomba');return}S.lombas.push({id:'l'+Date.now(),name:nm,start:st,end:en});makePlan();persist();render();toast('Lomba ditambahkan')}
  else if(a==='lombadel'){S.lombas=S.lombas.filter(function(x){return x.id!==id});makePlan();persist();render()}
  else if(a==='logadd'){
    var sc=parseFloat($('#lgS').value);if(isNaN(sc)){toast('Isi skornya dulu');return}
    ui.logType=$('#lgT').value;
    S.logs.push({id:'g'+Date.now(),type:ui.logType,score:sc,date:$('#lgD').value||dk,note:$('#lgN').value.trim()});
    persist();render();toast('Skor tersimpan');
  }
  else if(a==='logdel'){S.logs=S.logs.filter(function(x){return x.id!==id});persist();render()}
  /* atur */
  else if(a==='accent'){S.accent=v;persist();render()}
  else if(a==='kisi'){ui.kisi=v;render();window.scrollTo(0,0)}
  else if(a==='av'){var k=el.dataset.k;S.av[k]=(k==='hijab')?(v==='1'):+v;persist();render()}
  else if(a==='avt'){var k2=el.dataset.k;S.av[k2]=!S.av[k2];persist();render()}
  else if(a==='avrand'){var r=function(n){return Math.floor(Math.random()*n)};S.av=Object.assign(S.av,{skin:r(5),hair:r(6),style:r(4),hjc:r(7),of:r(4),oc:r(6),bg:r(6),kaca:r(2)===1,pita:r(2)===1});persist();render()}
  else if(a==='avreset'){S.av=defAv();persist();render()}
  else if(a==='hijab'){S.hijab=v==='1';persist();render()}
  else if(a==='copy'){copyText(v==='sum'?summary():v==='bak'?JSON.stringify(S):REQ_TEMPLATE)}
  else if(a==='fblogin'){
    if(!fbAuth){toast('Sinkron belum siap. Coba lagi sebentar.')}
    else{fbAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(function(e){toast('Gagal masuk'+(e&&e.code?': '+e.code:''))})}
  }
  else if(a==='fblogout'){if(fbAuth)fbAuth.signOut()}
  else if(a==='restoreopen'){ui.restoreOpen=!ui.restoreOpen;render()}
  else if(a==='restore'){
    try{var r=JSON.parse($('#bkT').value);if(!r||typeof r!=='object'||!r.v)throw 1;S=norm(r);ui.restoreOpen=false;persist();render();toast('Cadangan dipulihkan')}
    catch(e){toast('Format cadangan tidak dikenali')}
  }
  else if(a==='reset1'){ui.confirmReset=true;render()}
  else if(a==='reset0'){ui.confirmReset=false;render()}
  else if(a==='reset2'){S=defS();ui.confirmReset=false;makePlan();persist();render();toast('Progres direset')}
});
document.addEventListener('keydown',function(ev){
  if((ev.key==='Enter'||ev.key===' ')&&ev.target.matches&&ev.target.matches('.avwrap')){ev.preventDefault();ev.target.click()}
});
document.addEventListener('change',function(ev){
  var f=ev.target.dataset&&ev.target.dataset.field;if(!f)return;
  var val=ev.target.value;
  if(f.indexOf('exf:')===0){
    var fk=f.slice(4);
    if(fk==='s'){ui.exf.s=val;ui.exf.bab=[];render();return}
    ui.exf[fk]=val;return;
  }
  else if(f.indexOf('exs:')===0){
    var eid=f.slice(4);S.exams.forEach(function(e){if(e.id===eid)e.score=val===''?null:Math.max(0,Math.min(100,+val||0))});
    persist();render();return;
  }
  else if(f==='nick'){S.nick=val.trim()}
  else if(f==='tI'){S.targets.I=+val||0}
  else if(f==='tU'){S.targets.U=+val||0}
  else if(f.indexOf('rn:')===0||f.indexOf('rt:')===0){
    var sj=f.slice(3);S.rapor[sj]=S.rapor[sj]||{};
    S.rapor[sj][f.charAt(1)==='n'?'now':'target']=Math.max(0,Math.min(100,+val||0));
    makePlan();
  }
  persist();paintStats();
});
window.addEventListener('hashchange',function(){ui.sess=null;render();window.scrollTo(0,0)});

load();
render();
connectDb();
connectFb();
})();
