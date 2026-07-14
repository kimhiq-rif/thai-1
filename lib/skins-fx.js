/* Thai Trainer — per-skin entrance and ambient effects. */
window.SkinsFX = (function(){
  'use strict';

  var root = null;
  var canvas = null;
  var ctx = null;
  var raf = null;
  var timers = [];
  var particles = [];
  var resizeBound = false;
  var ambientRoot=null, ambientCanvas=null, ambientCtx=null, ambientRaf=null, ambientTheme=null, ambientDots=[], ambientLast=0;
  var dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

  function reduced(){
    try{ return window.matchMedia('(prefers-reduced-motion: reduce)').matches; }
    catch(e){ return false; }
  }

  function later(fn, delay){
    var id = window.setTimeout(fn, delay);
    timers.push(id);
    return id;
  }

  function ensureRoot(){
    if(root) return root;
    root = document.createElement('div');
    root.className = 'skin-fx-layer';
    root.setAttribute('aria-hidden', 'true');
    canvas = document.createElement('canvas');
    canvas.className = 'skin-fx-canvas';
    root.appendChild(canvas);
    (document.body || document.documentElement).appendChild(root);
    ctx = canvas.getContext('2d');
    resize();
    if(!resizeBound){ window.addEventListener('resize', resize, {passive:true}); resizeBound = true; }
    return root;
  }

  function resize(){
    if(canvas && ctx){
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    if(ambientCanvas && ambientCtx){
      ambientCanvas.width = Math.round(window.innerWidth * dpr);
      ambientCanvas.height = Math.round(window.innerHeight * dpr);
      ambientCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
  }

  function seedParticles(kind){
    var w = window.innerWidth;
    var h = window.innerHeight;
    var profile = kind === 'cyber'
      ? {colors:['#22d3ee','#38bdf8','#39ff88'],glow:'#22d3ee',count:38}
      : kind === 'midnight'
        ? {colors:['#a5b4fc','#e0e7ff','#fbbf24'],glow:'#818cf8',count:44}
        : {colors:['#f9d976','#fff3b0','#d49b22'],glow:'#d49b22',count:46};
    particles = [];
    for(var i=0; i<profile.count; i++){
      particles.push({
        x:Math.random()*w,
        y:h*(0.18+Math.random()*0.68),
        vx:(Math.random()-.5)*(kind==='cyber' ? 1.1 : .32),
        vy:(kind==='cyber' ? (Math.random()-.5)*.25 : -.18-Math.random()*.45),
        r:.8+Math.random()*2.1,
        life:.45+Math.random()*.55,
        decay:.004+Math.random()*.007,
        color:profile.colors[(Math.random()*profile.colors.length)|0],
        glow:profile.glow,
        kind:kind
      });
    }
    if(!raf) raf = requestAnimationFrame(tick);
  }

  function tick(){
    if(!ctx || !canvas){ raf = null; return; }
    ctx.clearRect(0, 0, canvas.width/dpr, canvas.height/dpr);
    for(var i=particles.length-1; i>=0; i--){
      var p = particles[i];
      p.x += p.vx; p.y += p.vy; p.life -= p.decay;
      if(p.life <= 0){ particles.splice(i,1); continue; }
      ctx.globalAlpha = Math.max(0,p.life);
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.glow; ctx.shadowBlur = 9;
      if(p.kind === 'cyber') ctx.fillRect(p.x-p.r*2,p.y-p.r/2,p.r*4,p.r);
      else{ ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill(); }
    }
    ctx.globalAlpha = 1; ctx.shadowBlur = 0;
    if(particles.length) raf = requestAnimationFrame(tick);
    else raf = null;
  }

  function enterRoyal(){
    var layer = ensureRoot();
    layer.className = 'skin-fx-layer skin-fx-royal';
    var seal = document.createElement('div');
    seal.className = 'royal-crown-seal';
    seal.innerHTML = '<span></span>';
    var picture = document.createElement('picture');
    picture.className = 'royal-guardian royal-guardian-entrance';
    picture.innerHTML = '<source srcset="assets/skins/royal/character-512.webp" media="(max-width:600px)"><img src="assets/skins/royal/character.webp" alt="" width="1024" height="1536">';
    layer.appendChild(seal);
    layer.appendChild(picture);
    if(reduced()){
      layer.classList.add('skin-fx-reduced');
      later(stop, 900);
      return;
    }
    requestAnimationFrame(function(){ layer.classList.add('is-entering'); });
    seedParticles('royal');
    later(function(){ layer.classList.add('is-leaving'); }, 1450);
    later(stop, 2050);
  }

  function characterPicture(themeId, className){
    var picture = document.createElement('picture');
    picture.className = className;
    picture.innerHTML = '<source srcset="assets/skins/'+themeId+'/character-512.webp" media="(max-width:600px)"><img src="assets/skins/'+themeId+'/character.webp" alt="" width="1024" height="1536">';
    return picture;
  }

  function enterCyber(){
    var layer = ensureRoot();
    layer.className = 'skin-fx-layer skin-fx-cyber';
    var scan = document.createElement('div'); scan.className = 'cyber-boot-scan';
    var circuit = document.createElement('div'); circuit.className = 'cyber-circuit-ring'; circuit.innerHTML = '<span></span>';
    layer.appendChild(scan); layer.appendChild(circuit); layer.appendChild(characterPicture('cyber','cyber-mentor'));
    if(reduced()){ layer.classList.add('skin-fx-reduced'); later(stop,900); return; }
    requestAnimationFrame(function(){ layer.classList.add('is-entering'); });
    seedParticles('cyber');
    later(function(){ layer.classList.add('cyber-glitch'); },1050);
    later(function(){ layer.classList.add('is-leaving'); },1450);
    later(stop,1950);
  }

  function enterMidnight(){
    var layer = ensureRoot();
    layer.className = 'skin-fx-layer skin-fx-midnight';
    var moon = document.createElement('div'); moon.className = 'midnight-moon';
    var constellation = document.createElement('div'); constellation.className = 'midnight-constellation'; constellation.innerHTML = '<i></i><i></i><i></i><i></i><i></i>';
    layer.appendChild(moon); layer.appendChild(constellation); layer.appendChild(characterPicture('midnight','midnight-mentor'));
    if(reduced()){ layer.classList.add('skin-fx-reduced'); later(stop,900); return; }
    requestAnimationFrame(function(){ layer.classList.add('is-entering'); });
    seedParticles('midnight');
    later(function(){ layer.classList.add('is-leaving'); },1550);
    later(stop,2100);
  }

  function enterExceptional(themeId){
    var layer=ensureRoot(); layer.className='skin-fx-layer skin-fx-'+themeId;
    var motif=document.createElement('div'); motif.className='exceptional-motif '+themeId+'-motif';
    layer.appendChild(motif); layer.appendChild(characterPicture(themeId,'exceptional-mentor '+themeId+'-mentor'));
    if(reduced()){ layer.classList.add('skin-fx-reduced'); later(stopEntrance,900); return; }
    requestAnimationFrame(function(){layer.classList.add('is-entering');}); seedParticles(themeId==='festival'?'royal':themeId==='master'?'cyber':'midnight');
    later(function(){layer.classList.add('is-leaving');},1550); later(stopEntrance,2100);
  }

  function enter(themeId){
    if(themeId === 'royal') enterRoyal();
    else if(themeId === 'cyber') enterCyber();
    else if(themeId === 'midnight') enterMidnight();
    else if(/^(coral|festival|master)$/.test(themeId)) enterExceptional(themeId);
  }

  function ambient(themeId){
    if(!/^(coral|festival|master)$/.test(themeId)||reduced()) return;
    ambientTheme=themeId; ambientRoot=document.createElement('div');ambientRoot.className='skin-ambient';ambientRoot.setAttribute('aria-hidden','true');
    ambientCanvas=document.createElement('canvas');ambientRoot.appendChild(ambientCanvas);document.body.appendChild(ambientRoot);ambientCtx=ambientCanvas.getContext('2d');
    ambientCanvas.width=window.innerWidth*dpr;ambientCanvas.height=window.innerHeight*dpr;ambientCtx.setTransform(dpr,0,0,dpr,0,0);
    var compact=window.innerWidth<700;
    ambientDots=Array.from({length:themeId==='master'?(compact?18:28):(compact?12:20)},function(){return{x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,r:1+Math.random()*3,v:.12+Math.random()*.32};});
    ambientLast=0;
    ambientRaf=requestAnimationFrame(ambientTick);
  }

  function ambientTick(now){
    if(!ambientCtx||document.hidden){ambientRaf=null;return;}
    if(ambientLast&&now-ambientLast<33){ambientRaf=requestAnimationFrame(ambientTick);return;}
    var step=ambientLast?Math.min(2.5,(now-ambientLast)/16.67):1;
    ambientLast=now;
    ambientCtx.clearRect(0,0,window.innerWidth,window.innerHeight);
    ambientDots.forEach(function(p){p.y+=(ambientTheme==='coral'?-p.v:p.v)*step;if(p.y<0)p.y=window.innerHeight;if(p.y>window.innerHeight)p.y=0;
      ambientCtx.globalAlpha=.16;ambientCtx.fillStyle=ambientTheme==='coral'?'#67e8f9':ambientTheme==='festival'?'#fbbf24':'#f97316';ambientCtx.shadowColor=ambientCtx.fillStyle;ambientCtx.shadowBlur=10;
      ambientCtx.beginPath();ambientCtx.arc(p.x,p.y,p.r,0,Math.PI*2);ambientCtx.fill();});ambientCtx.globalAlpha=1;ambientRaf=requestAnimationFrame(ambientTick); }

  function stopEntrance(){ timers.forEach(clearTimeout);timers=[];particles=[];if(raf){cancelAnimationFrame(raf);raf=null;}if(root){root.remove();root=null;canvas=null;ctx=null;} }

  function stop(){
    stopEntrance(); if(ambientRaf){cancelAnimationFrame(ambientRaf);ambientRaf=null;}if(ambientRoot){ambientRoot.remove();ambientRoot=null;ambientCanvas=null;ambientCtx=null;}ambientDots=[];ambientTheme=null;ambientLast=0;
  }

  document.addEventListener('visibilitychange', function(){
    if(document.hidden && raf){ cancelAnimationFrame(raf); raf = null; }
    else if(!document.hidden && particles.length && !raf) raf = requestAnimationFrame(tick);
    if(document.hidden&&ambientRaf){cancelAnimationFrame(ambientRaf);ambientRaf=null;}else if(!document.hidden&&ambientCtx&&!ambientRaf){ambientLast=0;ambientRaf=requestAnimationFrame(ambientTick);}
  });
  window.addEventListener('pagehide', stop);

  return {enter:enter, ambient:ambient, stop:stop};
})();
