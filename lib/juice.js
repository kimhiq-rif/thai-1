/*
 * Thai Trainer — Juice (M2)
 * Screen-overlay celebration effects. Self-contained: builds its own fixed
 * overlay (canvas + Blender-rendered gold medallion + shockwave), so it works
 * regardless of page layout. Respects prefers-reduced-motion; sound is gated
 * by a toggle. Ported from the approved interactive prototype.
 */
window.Juice = (function(){
  'use strict';
  var root=null, canvas=null, ctx=null, medal=null, shock=null, vign=null;
  var parts=[], raf=null, DPR=Math.max(1, window.devicePixelRatio||1);
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
    root.appendChild(vign); root.appendChild(canvas); root.appendChild(shock); root.appendChild(medal);
    (document.body||document.documentElement).appendChild(root);
    ctx=canvas.getContext('2d');
    injectKeyframes();
    resize(); window.addEventListener('resize', resize);
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
      '@keyframes juiceVign{0%{opacity:0}25%{opacity:1}100%{opacity:0}}';
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
  function chimeCorrect(){ if(!ensure()) return; note(659.25,0,0.16,0.13,'sine'); note(987.77,0.07,0.2,0.11,'sine'); }
  function chimeWin(){ if(!ensure()) return;
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
  function tick(){ ctx.clearRect(0,0,canvas.width,canvas.height);
    for(var i=parts.length-1;i>=0;i--){ var p=parts[i]; p.vy+=0.14; p.x+=p.vx; p.y+=p.vy; p.vx*=0.99; p.life-=p.decay;
      if(p.life<=0){ parts.splice(i,1); continue; } ctx.globalAlpha=Math.max(0,p.life);
      if(p.t==='foil'){ p.rot+=p.vr; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot); ctx.fillStyle=p.col;
        ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h*(0.5+0.5*Math.abs(Math.cos(p.rot)))); ctx.restore(); }
      else{ ctx.fillStyle=p.col; ctx.shadowColor=p.col; ctx.shadowBlur=8; ctx.beginPath(); ctx.arc(p.x,p.y,p.size*p.life,0,Math.PI*2); ctx.fill(); ctx.shadowBlur=0; } }
    ctx.globalAlpha=1; if(parts.length) raf=requestAnimationFrame(tick); else raf=null; }

  function restart(el,anim){ el.style.animation='none'; void el.offsetWidth; el.style.animation=anim; }
  function haptic(win){ if(navigator.vibrate){ try{ navigator.vibrate(win?[0,45,45,70]:18); }catch(e){} } }

  // ---- public ----
  function correct(el){ if(!root) return; chimeCorrect(); haptic(false);
    if(reduced()) return; var c=elCenter(el); sparks(c.x,c.y-6, 12, MIX, 1); }

  function win(){ if(!root) return; chimeWin(); haptic(true);
    if(reduced()) return;
    var cx=window.innerWidth/2, cy=window.innerHeight*0.44;
    restart(vign,'juiceVign 1s ease-out');
    restart(shock,'juiceShock .8s cubic-bezier(.2,.7,.3,1)');
    restart(medal,'juiceMedIn 1.05s cubic-bezier(.18,.9,.28,1.1) forwards');
    confetti(cx,cy,40,GOLD,1); sparks(cx,cy,24,GOLD.concat(MIX),1);
    setTimeout(function(){ confetti(cx,cy-30,22,GOLD,1.1); },180);
    setTimeout(function(){ sparks(cx,cy,16,GOLD,0.8); },420);
    setTimeout(function(){ restart(medal,'juiceMedOut .55s ease-in forwards'); },1600); }

  function setSound(on){ soundOn=!!on; }
  return { init:init, correct:correct, win:win, setSound:setSound };
})();
