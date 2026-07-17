/*
 * Thai Trainer — Juice (M2)
 * Screen-overlay celebration effects. Self-contained: builds its own fixed
 * overlay (canvas + Blender-rendered gold medallion + shockwave), so it works
 * regardless of page layout. Respects prefers-reduced-motion; sound is gated
 * by a toggle. Ported from the approved interactive prototype.
 */
window.Juice = (function(){
  'use strict';
  var root=null, canvas=null, ctx=null, medal=null, shock=null, vign=null, hero=null;
  var parts=[], raf=null, DPR=Math.max(1, Math.min(2, window.devicePixelRatio||1));
  var soundOn=true, actx=null;
  var GOLD=['#E0A93B','#F5C451','#B4801e','#FFDF8A'], MIX=['#22C55E','#06B6D4','#FF6A00','#E0A93B'];

  function reduced(){ try{ return window.matchMedia('(prefers-reduced-motion: reduce)').matches; }catch(e){ return false; } }

  function init(opts){
    if(root) return;
    opts=opts||{};
    root=document.createElement('div');
    root.setAttribute('aria-hidden','true');
    root.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:9999;overflow:hidden';
    vign=document.createElement('div');
    vign.style.cssText='position:absolute;inset:0;opacity:0;background:radial-gradient(70% 60% at 50% 45%,transparent 55%,rgba(224,169,59,.45))';
    canvas=document.createElement('canvas');
    canvas.style.cssText='position:absolute;inset:0;width:100%;height:100%';
    shock=document.createElement('div');
    shock.style.cssText='position:absolute;top:44%;left:50%;width:60px;height:60px;margin:-30px 0 0 -30px;border-radius:50%;border:3px solid #E0A93B;opacity:0';
    medal=document.createElement('img');
    medal.alt='';
    medal.src=opts.medallion||'assets/medallion.png';
    medal.style.cssText='position:absolute;top:44%;left:50%;width:220px;height:220px;transform:translate(-50%,-50%) scale(0);opacity:0;filter:drop-shadow(0 6px 20px rgba(180,128,30,.5))';
    hero=document.createElement('img');
    hero.alt='';
    hero.style.cssText='position:absolute;right:max(2vw,12px);bottom:-4%;width:min(36vw,390px);max-height:78vh;object-fit:contain;object-position:bottom;opacity:0;transform:translateY(12%) scale(.92);filter:drop-shadow(0 12px 34px rgba(0,0,0,.55))';
    root.appendChild(vign); root.appendChild(canvas); root.appendChild(shock); root.appendChild(medal); root.appendChild(hero);
    (document.body||document.documentElement).appendChild(root);
    ctx=canvas.getContext('2d');
    injectKeyframes();
    resize(); window.addEventListener('resize', resize, {passive:true});
  }

  function injectKeyframes(){
    if(document.getElementById('juice-kf')) return;
    var s=document.createElement('style'); s.id='juice-kf';
    s.textContent=
      '@keyframes juiceMedIn{0%{transform:translate(-50%,-50%) scale(0) rotate(-160deg);opacity:0}'+
      '55%{transform:translate(-50%,-50%) scale(1.14) rotate(10deg);opacity:1}'+
      '72%{transform:translate(-50%,-50%) scale(.97) rotate(-3deg)}'+
      '86%{transform:translate(-50%,-50%) scale(1.03) rotate(1deg)}'+
      '100%{transform:translate(-50%,-50%) scale(1) rotate(0);opacity:1}}'+
      '@keyframes juiceMedOut{0%{opacity:1}100%{opacity:0;transform:translate(-50%,-64%) scale(1.12) rotate(4deg)}}'+
      '@keyframes juiceShock{0%{opacity:.9;transform:scale(.2)}100%{opacity:0;transform:scale(9)}}'+
      '@keyframes juiceVign{0%{opacity:0}25%{opacity:1}100%{opacity:0}}'+
      '@keyframes juiceHeroIn{0%{opacity:0;transform:translateY(12%) scale(.92)}55%{opacity:1;transform:translateY(0) scale(1.03)}100%{opacity:1;transform:translateY(0) scale(1)}}'+
      '@keyframes juiceHeroOut{0%{opacity:1;transform:translateY(0) scale(1)}100%{opacity:0;transform:translateY(6%) scale(.98)}}';
    document.head.appendChild(s);
  }

  function resize(){
    if(!canvas) return;
    canvas.width=window.innerWidth*DPR; canvas.height=window.innerHeight*DPR;
    ctx.setTransform(DPR,0,0,DPR,0,0);
  }
  function elCenter(el){
    if(el && el.getBoundingClientRect){ var r=el.getBoundingClientRect(); return {x:r.left+r.width/2, y:r.top+r.height/2}; }
    return {x:window.innerWidth/2, y:window.innerHeight*0.42};
  }

  // ---- audio ----
  function ensure(){ if(!soundOn) return false; try{ if(!actx) actx=new (window.AudioContext||window.webkitAudioContext)(); if(actx.state==='suspended') actx.resume(); }catch(e){ return false; } return true; }
  function note(freq,start,dur,peak,type){ var o=actx.createOscillator(), g=actx.createGain(); o.type=type||'sine'; o.frequency.value=freq;
    var t=actx.currentTime+start; g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(peak,t+0.02);
    g.gain.exponentialRampToValueAtTime(0.0001,t+dur); o.connect(g); g.connect(actx.destination); o.start(t); o.stop(t+dur+0.03); }
  function chimeCorrect(opts){
    if(!ensure()) return;
    if(opts&&opts.sound==='lotus'){
      note(440,0,.34,.065,'sine');note(554.37,.07,.38,.06,'triangle');
      note(659.25,.15,.46,.052,'sine');note(880,.28,.55,.035,'sine');
      return;
    }
    if(opts&&opts.sound==='royal'){
      note(523.25,0,0.28,0.1,'triangle');
      note(659.25,0.055,0.32,0.1,'sine');
      note(783.99,0.12,0.42,0.085,'sine');
      note(1046.5,0.2,0.48,0.055,'triangle');
      return;
    }
    if(opts&&opts.sound==='cyber'){
      note(392,0,.09,.085,'square'); note(784,.055,.1,.07,'square');
      note(1174.66,.11,.16,.06,'sawtooth'); note(1567.98,.17,.22,.045,'sine');
      return;
    }
    if(opts&&opts.sound==='midnight'){
      note(440,0,.32,.065,'sine'); note(659.25,.08,.42,.06,'sine');
      note(880,.18,.56,.045,'triangle'); note(1318.5,.3,.5,.03,'sine');
      return;
    }
    if(opts&&opts.sound==='coral'){ note(392,0,.28,.06,'sine');note(523.25,.08,.35,.055,'sine');note(783.99,.18,.42,.04,'sine');return; }
    if(opts&&opts.sound==='festival'){ note(659.25,0,.24,.07,'triangle');note(880,.09,.32,.06,'sine');note(1318.5,.2,.4,.04,'sine');return; }
    if(opts&&opts.sound==='master'){ note(220,0,.2,.07,'sawtooth');note(440,.06,.28,.065,'triangle');note(880,.14,.4,.055,'sine');note(1760,.24,.38,.035,'sine');return; }
    note(659.25,0,0.16,0.13,'sine'); note(987.77,0.07,0.2,0.11,'sine');
  }
  function chimeWin(opts){ if(!ensure()) return;
    if(opts&&opts.sound==='lotus'){
      [440,554.37,659.25,880,1108.73].forEach(function(f,i){note(f,i*.095,.62,.11,'triangle');});
      note(220,0,.95,.04,'sine');return;
    }
    [523.25,659.25,783.99,1046.5,1318.5].forEach(function(f,i){ note(f,i*0.085,0.55,0.15,'triangle'); });
    note(1046.5,0,0.9,0.09,'sine'); note(1567.98,0.42,0.6,0.06,'sine'); note(2093,0.5,0.4,0.04,'sine'); }

  // ---- particles ----
  function push(p){ parts.push(p); if(!raf) raf=requestAnimationFrame(tick); }
  function confetti(cx,cy,n,pal,power){ for(var i=0;i<n;i++){ var a=Math.random()*Math.PI*2, sp=(2+Math.random()*7)*power;
    push({t:'foil',x:cx,y:cy,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp-3,life:1,decay:0.008+Math.random()*0.012,
      w:4+Math.random()*5,h:8+Math.random()*8,rot:Math.random()*6,vr:(Math.random()-0.5)*0.4,col:pal[(Math.random()*pal.length)|0]}); } }
  function sparks(cx,cy,n,pal,power){ for(var i=0;i<n;i++){ var a=Math.random()*Math.PI*2, sp=(1+Math.random()*5)*power;
    push({t:'spark',x:cx,y:cy,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp-1.5,life:1,decay:0.015+Math.random()*0.02,
      size:1.5+Math.random()*2.5,col:pal[(Math.random()*pal.length)|0]}); } }
  function royalLeaves(cx,cy,n,pal,power){ for(var i=0;i<n;i++){ var a=Math.random()*Math.PI*2, sp=(2+Math.random()*5)*power;
    push({t:'leaf',x:cx,y:cy,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp-2.2,life:1,decay:.009+Math.random()*.012,
      w:4+Math.random()*4,h:10+Math.random()*9,rot:Math.random()*6,vr:(Math.random()-.5)*.28,col:pal[(Math.random()*pal.length)|0]}); } }
  function royalCrowns(cx,cy,n,pal){ for(var i=0;i<n;i++){ var a=Math.random()*Math.PI*2, sp=2.2+Math.random()*3.8;
    push({t:'crown',x:cx,y:cy,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp-2,life:1,decay:.012+Math.random()*.012,
      size:7+Math.random()*7,rot:(Math.random()-.5)*.6,col:pal[(Math.random()*pal.length)|0]}); } }
  function lotusPetals(cx,cy,n,pal,power){ for(var i=0;i<n;i++){var a=Math.random()*Math.PI*2,sp=(1.6+Math.random()*5)*power;
    push({t:'lotus',x:cx,y:cy,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp-2.1,life:1,decay:.01+Math.random()*.014,
      w:4+Math.random()*5,h:9+Math.random()*10,rot:Math.random()*6,vr:(Math.random()-.5)*.24,col:pal[(Math.random()*pal.length)|0]});} }
  function cyberBits(cx,cy,n,pal,power){ for(var i=0;i<n;i++){ var a=Math.random()*Math.PI*2, sp=(2+Math.random()*6)*power;
    push({t:'bit',x:cx,y:cy,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp-1.2,life:1,decay:.018+Math.random()*.018,
      w:5+Math.random()*13,h:1+Math.random()*3,col:pal[(Math.random()*pal.length)|0]}); } }
  function comets(cx,cy,n,pal,power){ for(var i=0;i<n;i++){ var a=-2.7+Math.random()*.8, sp=(2.2+Math.random()*5)*power;
    push({t:'comet',x:cx+(Math.random()-.5)*70,y:cy+(Math.random()-.5)*50,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,
      life:1,decay:.012+Math.random()*.015,size:1.5+Math.random()*2.5,col:pal[(Math.random()*pal.length)|0]}); } }
  function motifs(id,cx,cy,n,pal,power){ for(var i=0;i<n;i++){ var a=Math.random()*Math.PI*2,sp=(1.5+Math.random()*5)*power;
    push({t:id,x:cx,y:cy,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp-(id==='festival'?3:1),life:1,decay:.01+Math.random()*.018,size:4+Math.random()*7,col:pal[(Math.random()*pal.length)|0]}); } }
  function tick(){ ctx.clearRect(0,0,canvas.width,canvas.height);
    for(var i=parts.length-1;i>=0;i--){ var p=parts[i]; p.vy+=0.14; p.x+=p.vx; p.y+=p.vy; p.vx*=0.99; p.life-=p.decay;
      if(p.life<=0){ parts.splice(i,1); continue; } ctx.globalAlpha=Math.max(0,p.life);
      if(p.t==='foil'){ p.rot+=p.vr; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot); ctx.fillStyle=p.col;
        ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h*(0.5+0.5*Math.abs(Math.cos(p.rot)))); ctx.restore(); }
      else if(p.t==='leaf'){ p.rot+=p.vr; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot); ctx.fillStyle=p.col; ctx.beginPath();
        ctx.moveTo(0,-p.h/2); ctx.quadraticCurveTo(p.w,p.h*.05,0,p.h/2); ctx.quadraticCurveTo(-p.w,p.h*.05,0,-p.h/2); ctx.fill(); ctx.restore(); }
      else if(p.t==='lotus'){p.rot+=p.vr;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot);ctx.fillStyle=p.col;ctx.shadowColor=p.col;ctx.shadowBlur=8;ctx.beginPath();
        ctx.moveTo(0,-p.h/2);ctx.bezierCurveTo(p.w*.9,-p.h*.1,p.w*.65,p.h*.35,0,p.h/2);ctx.bezierCurveTo(-p.w*.65,p.h*.35,-p.w*.9,-p.h*.1,0,-p.h/2);ctx.fill();ctx.restore();}
      else if(p.t==='crown'){ ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot); ctx.strokeStyle=p.col; ctx.lineWidth=1.8; ctx.shadowColor=p.col; ctx.shadowBlur=8;
        var s=p.size*p.life; ctx.beginPath(); ctx.moveTo(-s,s*.35); ctx.lineTo(-s,-s*.4); ctx.lineTo(-s*.35,0); ctx.lineTo(0,-s*.75); ctx.lineTo(s*.35,0); ctx.lineTo(s,-s*.4); ctx.lineTo(s,s*.35); ctx.closePath(); ctx.stroke(); ctx.restore(); }
      else if(p.t==='bit'){ ctx.fillStyle=p.col; ctx.shadowColor=p.col; ctx.shadowBlur=10; ctx.fillRect(p.x-p.w/2,p.y-p.h/2,p.w,p.h); ctx.shadowBlur=0; }
      else if(p.t==='comet'){ ctx.strokeStyle=p.col; ctx.lineWidth=Math.max(.5,p.size*p.life); ctx.shadowColor=p.col; ctx.shadowBlur=10; ctx.beginPath();
        ctx.moveTo(p.x,p.y); ctx.lineTo(p.x-p.vx*5,p.y-p.vy*5); ctx.stroke(); ctx.shadowBlur=0; }
      else if(p.t==='coral'){ ctx.strokeStyle=p.col;ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(p.x,p.y,p.size*p.life,0,Math.PI*2);ctx.stroke(); }
      else if(p.t==='festival'){ ctx.fillStyle=p.col;ctx.fillRect(p.x-p.size*.45,p.y-p.size*.6,p.size*.9,p.size*1.2);ctx.fillStyle='#fff7ed';ctx.fillRect(p.x-1,p.y-p.size*.45,2,p.size*.65); }
      else if(p.t==='master'){ ctx.fillStyle=p.col;ctx.shadowColor=p.col;ctx.shadowBlur=12;ctx.beginPath();ctx.moveTo(p.x,p.y-p.size);ctx.quadraticCurveTo(p.x+p.size,p.y,p.x,p.y+p.size);ctx.quadraticCurveTo(p.x-p.size,p.y,p.x,p.y-p.size);ctx.fill();ctx.shadowBlur=0; }
      else{ ctx.fillStyle=p.col; ctx.shadowColor=p.col; ctx.shadowBlur=8; ctx.beginPath(); ctx.arc(p.x,p.y,p.size*p.life,0,Math.PI*2); ctx.fill(); ctx.shadowBlur=0; } }
    ctx.globalAlpha=1; if(parts.length) raf=requestAnimationFrame(tick); else raf=null; }

  function restart(el,anim){ el.style.animation='none'; void el.offsetWidth; el.style.animation=anim; }
  function haptic(win){ if(navigator.vibrate){ try{ navigator.vibrate(win?[0,45,45,70]:18); }catch(e){} } }

  // ---- public ----
  function correct(el,opts){ if(!root) return; chimeCorrect(opts); haptic(false);
    if(reduced()) return; var c=elCenter(el), pal=opts&&opts.palette||MIX;
    if(opts&&opts.id==='lotus'){lotusPetals(c.x,c.y-6,22,pal,1);sparks(c.x,c.y-6,9,pal,.72);}
    else if(opts&&opts.id==='royal'){ royalLeaves(c.x,c.y-6,16,pal,1); royalCrowns(c.x,c.y-8,5,pal); sparks(c.x,c.y-6,10,pal,1); }
    else if(opts&&opts.id==='cyber'){ cyberBits(c.x,c.y-6,22,pal,1); sparks(c.x,c.y-6,12,pal,1.1); }
    else if(opts&&opts.id==='midnight'){ comets(c.x,c.y-6,10,pal,1); sparks(c.x,c.y-6,18,pal,.72); }
    else if(opts&&/^(coral|festival|master)$/.test(opts.id)){ motifs(opts.id,c.x,c.y-6,opts.id==='master'?24:18,pal,1); sparks(c.x,c.y-6,10,pal,.8); }
    else sparks(c.x,c.y-6,12,pal,1); }

  function win(opts){ if(!root) return; chimeWin(opts); haptic(true);
    if(reduced()){
      if(opts&&opts.character){
        medal.style.opacity='1'; medal.style.transform='translate(-50%,-50%) scale(1)';
        hero.src=opts.character; hero.style.opacity='1'; hero.style.transform='translateY(0) scale(1)';
        setTimeout(function(){ medal.style.opacity='0'; hero.style.opacity='0'; },900);
      }
      return;
    }
    var cx=window.innerWidth/2, cy=window.innerHeight*0.44;
    var pal=opts&&opts.palette||GOLD, id=opts&&opts.id, royal=id==='royal';
    shock.style.borderColor=opts&&opts.accent||'#E0A93B';
    var glow=id==='lotus'?'rgba(192,38,211,.48)':royal?'rgba(127,29,29,.52)':id==='cyber'?'rgba(6,182,212,.48)':id==='midnight'?'rgba(79,70,229,.5)':'rgba(224,169,59,.45)';
    vign.style.background='radial-gradient(70% 60% at 50% 45%,transparent 48%,'+glow+')';
    restart(vign,'juiceVign 1s ease-out');
    restart(shock,'juiceShock .8s cubic-bezier(.2,.7,.3,1)');
    restart(medal,'juiceMedIn 1.05s cubic-bezier(.18,.9,.28,1.1) forwards');
    if(id==='lotus') lotusPetals(cx,cy,58,pal,1.18);
    else if(royal){ royalLeaves(cx,cy,46,pal,1.15); royalCrowns(cx,cy,12,pal); }
    else if(id==='cyber') cyberBits(cx,cy,54,pal,1.2);
    else if(id==='midnight') comets(cx,cy,34,pal,1.15);
    else if(/^(coral|festival|master)$/.test(id)) motifs(id,cx,cy,62,pal,1.2);
    else confetti(cx,cy,40,GOLD,1);
    sparks(cx,cy,24,pal.concat(MIX),1);
    if(opts&&opts.character){ hero.src=opts.character; restart(hero,'juiceHeroIn .85s cubic-bezier(.18,.9,.28,1.1) forwards'); }
    setTimeout(function(){ if(id==='lotus') lotusPetals(cx,cy-30,28,pal,1.08); else if(royal) royalLeaves(cx,cy-30,24,pal,1.15); else if(id==='cyber') cyberBits(cx,cy-30,30,pal,1.1); else if(id==='midnight') comets(cx,cy-30,20,pal,1); else if(/^(coral|festival|master)$/.test(id)) motifs(id,cx,cy-30,30,pal,1.05); else confetti(cx,cy-30,22,GOLD,1.1); },180);
    setTimeout(function(){ sparks(cx,cy,16,pal,0.8); },420);
    setTimeout(function(){ restart(medal,'juiceMedOut .55s ease-in forwards'); if(opts&&opts.character) restart(hero,'juiceHeroOut .5s ease-in forwards'); },1600); }

  function setSound(on){ soundOn=!!on; }
  document.addEventListener('visibilitychange', function(){
    if(document.hidden && raf){ cancelAnimationFrame(raf); raf=null; parts=[]; if(ctx) ctx.clearRect(0,0,canvas.width,canvas.height); }
  });
  return { init:init, correct:correct, win:win, setSound:setSound };
})();
