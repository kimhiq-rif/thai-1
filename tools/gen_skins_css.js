// Generates the decorative skin CSS block (CSS + tileable SVG motifs) for Thai Trainer.
// Each premium theme gets a themed, tileable SVG motif rendered as a faint full-page
// layer behind the app content, plus a richer swatch preview in the skins grid.
// Run: node tools/gen_skins_css.js  -> prints CSS to stdout.

// Encode an SVG string as a CSS-safe data URI (keeps it readable, encodes only what breaks CSS url()).
function svgUri(svg){
  const clean = svg.replace(/\s+/g, ' ').trim();
  const enc = clean
    .replace(/%/g, '%25')
    .replace(/#/g, '%23')
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E')
    .replace(/"/g, "'")
    .replace(/\{/g, '%7B')
    .replace(/\}/g, '%7D')
    .replace(/\|/g, '%7C');
  return `url("data:image/svg+xml,${enc}")`;
}

// Wrap motif shapes in a tileable SVG canvas.
function tile(size, inner){
  return `<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}' viewBox='0 0 ${size} ${size}'>${inner}</svg>`;
}

// --- Motif library (stroke/fill use theme accent, kept faint via opacity in CSS) ---
const motifs = {
  // Lotus Temple — stylised lotus blossoms
  lotus: tile(120, `
    <g fill='none' stroke='%LOTUS%' stroke-width='2' opacity='.9'>
      <g transform='translate(60 60)'>
        <path d='M0 -34 C 10 -14 10 -6 0 4 C -10 -6 -10 -14 0 -34 Z'/>
        <path d='M0 -34 C 10 -14 10 -6 0 4 C -10 -6 -10 -14 0 -34 Z' transform='rotate(72)'/>
        <path d='M0 -34 C 10 -14 10 -6 0 4 C -10 -6 -10 -14 0 -34 Z' transform='rotate(144)'/>
        <path d='M0 -34 C 10 -14 10 -6 0 4 C -10 -6 -10 -14 0 -34 Z' transform='rotate(216)'/>
        <path d='M0 -34 C 10 -14 10 -6 0 4 C -10 -6 -10 -14 0 -34 Z' transform='rotate(288)'/>
        <circle r='5' fill='%LOTUS%' stroke='none'/>
      </g>
    </g>`),
  // Sakura Ink — scattered cherry-blossom petals
  sakura: tile(96, `
    <g fill='%SAKURA%' opacity='.85'>
      <path d='M24 14 C 30 18 30 26 24 30 C 18 26 18 18 24 14 Z'/>
      <path d='M70 40 C 76 44 76 52 70 56 C 64 52 64 44 70 40 Z' transform='rotate(35 70 48)'/>
      <path d='M40 72 C 46 76 46 84 40 88 C 34 84 34 76 40 72 Z' transform='rotate(-25 40 80)'/>
      <path d='M84 84 C 90 88 90 96 84 100 C 78 96 78 88 84 84 Z' transform='rotate(15 84 92)'/>
    </g>`),
  // Mango Sticky — sparkles + sticky-rice grains
  mango: tile(110, `
    <g fill='%MANGO%'>
      <g opacity='.9'>
        <path d='M28 20 l4 12 12 4 -12 4 -4 12 -4 -12 -12 -4 12 -4 z'/>
        <path d='M82 74 l3 9 9 3 -9 3 -3 9 -3 -9 -9 -3 9 -3 z'/>
      </g>
      <g opacity='.55'>
        <ellipse cx='74' cy='24' rx='7' ry='4' transform='rotate(30 74 24)'/>
        <ellipse cx='24' cy='84' rx='7' ry='4' transform='rotate(-20 24 84)'/>
        <ellipse cx='54' cy='54' rx='7' ry='4' transform='rotate(50 54 54)'/>
      </g>
    </g>`),
  // Thai Rainforest — monstera-style leaves
  rainforest: tile(128, `
    <g fill='none' stroke='%RAINF%' stroke-width='2.4' opacity='.85' stroke-linecap='round'>
      <g transform='translate(34 34) rotate(20)'>
        <path d='M0 0 C 18 -6 26 -22 22 -40 C 6 -34 -6 -20 0 0 Z'/>
        <path d='M0 -6 L 0 -34 M -6 -12 L 6 -18 M -4 -22 L 8 -28'/>
      </g>
      <g transform='translate(92 96) rotate(-155)'>
        <path d='M0 0 C 18 -6 26 -22 22 -40 C 6 -34 -6 -20 0 0 Z'/>
        <path d='M0 -6 L 0 -34 M -6 -12 L 6 -18 M -4 -22 L 8 -28'/>
      </g>
    </g>`),
  // Royal Gold — ornamental crowns + diamonds
  royal: tile(112, `
    <g fill='none' stroke='%ROYAL%' stroke-width='2.2' opacity='.9'>
      <g transform='translate(30 30)'>
        <path d='M-16 8 L -16 -6 L -6 2 L 0 -10 L 6 2 L 16 -6 L 16 8 Z'/>
        <circle cx='0' cy='-14' r='2.4' fill='%ROYAL%' stroke='none'/>
      </g>
      <g transform='translate(84 82) rotate(45)'>
        <rect x='-8' y='-8' width='16' height='16'/>
      </g>
    </g>`),
  // Cyber Bangkok — circuit traces
  cyber: tile(100, `
    <g fill='none' stroke='%CYBER%' stroke-width='1.8' opacity='.8' stroke-linecap='round'>
      <path d='M10 20 H 44 V 52 H 80'/>
      <path d='M20 90 V 64 H 60 V 30 H 92'/>
      <circle cx='44' cy='52' r='3.2' fill='%CYBER%' stroke='none'/>
      <circle cx='60' cy='64' r='3.2' fill='%CYBER%' stroke='none'/>
      <circle cx='44' cy='20' r='2.4' fill='%CYBER%' stroke='none'/>
    </g>`),
  // Midnight Scholar — crescent moon + stars
  midnight: tile(120, `
    <g fill='%MIDN%' opacity='.85'>
      <path d='M40 26 A 18 18 0 1 0 40 62 A 14 14 0 1 1 40 26 Z'/>
      <path d='M84 78 l2.6 6.4 6.4 2.6 -6.4 2.6 -2.6 6.4 -2.6 -6.4 -6.4 -2.6 6.4 -2.6 z'/>
      <circle cx='92' cy='30' r='2.2'/>
      <circle cx='22' cy='92' r='2.2'/>
      <circle cx='64' cy='54' r='1.8'/>
    </g>`),
  // Coral Reef — coral branches + bubbles
  coral: tile(120, `
    <g fill='none' stroke='%CORAL%' stroke-width='2.4' opacity='.85' stroke-linecap='round'>
      <path d='M30 100 V 66 M30 82 L 16 68 M30 78 L 46 62 M30 66 L 30 50'/>
      <path d='M90 100 V 72 M90 86 L 104 74 M90 82 L 76 68'/>
    </g>
    <g fill='%CORAL%' opacity='.5'>
      <circle cx='58' cy='30' r='4'/>
      <circle cx='72' cy='44' r='2.6'/>
      <circle cx='46' cy='46' r='2'/>
    </g>`),
  // Lantern Festival — hanging lanterns
  festival: tile(108, `
    <g opacity='.85'>
      <g transform='translate(30 0)'>
        <path d='M0 6 V 20' stroke='%FEST%' stroke-width='1.6'/>
        <ellipse cx='0' cy='34' rx='13' ry='16' fill='none' stroke='%FEST%' stroke-width='2.2'/>
        <path d='M-13 34 H 13 M-9 22 H 9 M-9 46 H 9' stroke='%FEST%' stroke-width='1.4'/>
        <path d='M0 50 V 60' stroke='%FEST%' stroke-width='1.6'/>
      </g>
      <g transform='translate(82 40)'>
        <path d='M0 6 V 18' stroke='%FEST%' stroke-width='1.4'/>
        <ellipse cx='0' cy='30' rx='10' ry='12' fill='none' stroke='%FEST%' stroke-width='2'/>
        <path d='M-10 30 H 10' stroke='%FEST%' stroke-width='1.2'/>
      </g>
    </g>`),
  // Thai Master Aura — radiant flame rays
  master: tile(128, `
    <g fill='none' stroke='%MAST%' stroke-width='2.4' opacity='.85' stroke-linecap='round'>
      <g transform='translate(64 64)'>
        <path d='M0 -40 C 12 -22 12 -8 0 -2 C -12 -8 -12 -22 0 -40 Z'/>
        <path d='M0 -40 C 12 -22 12 -8 0 -2 C -12 -8 -12 -22 0 -40 Z' transform='rotate(90)' opacity='.7'/>
        <path d='M0 -40 C 12 -22 12 -8 0 -2 C -12 -8 -12 -22 0 -40 Z' transform='rotate(180)' opacity='.5'/>
        <path d='M0 -40 C 12 -22 12 -8 0 -2 C -12 -8 -12 -22 0 -40 Z' transform='rotate(270)' opacity='.7'/>
      </g>
    </g>`)
};

// accent color per theme (hex, encoded for CSS), tile background-size, opacity of the layer
const themes = {
  lotus:      { key:'LOTUS',  color:'#e879f9', size:120, op:.14 },
  sakura:     { key:'SAKURA', color:'#fb7185', size:96,  op:.16 },
  mango:      { key:'MANGO',  color:'#fbbf24', size:110, op:.15 },
  rainforest: { key:'RAINF',  color:'#86efac', size:128, op:.14 },
  royal:      { key:'ROYAL',  color:'#fde68a', size:112, op:.16 },
  cyber:      { key:'CYBER',  color:'#22d3ee', size:100, op:.16 },
  midnight:   { key:'MIDN',   color:'#a5b4fc', size:120, op:.16 },
  coral:      { key:'CORAL',  color:'#67e8f9', size:120, op:.15 },
  festival:   { key:'FEST',   color:'#fbbf24', size:108, op:.16 },
  master:     { key:'MAST',   color:'#f97316', size:128, op:.15 }
};

// Richer multi-stop gradients for the swatch previews (skins grid), per theme.
const swatchGradients = {
  lotus:      'linear-gradient(135deg,#1a0733,#3b0764 32%,#db2777 68%,#f9a8d4)',
  sakura:     'linear-gradient(135deg,#2a0a17,#7f1d3a 30%,#fb7185 66%,#ffe4e6)',
  mango:      'linear-gradient(135deg,#3a1c04,#7c2d12 30%,#f59e0b 68%,#fde68a)',
  rainforest: 'linear-gradient(135deg,#03130d,#052e16 32%,#16a34a 66%,#bef264)',
  royal:      'linear-gradient(135deg,#0b0a06,#111827 26%,#a16207 66%,#fef3c7)',
  cyber:      'linear-gradient(135deg,#01030f,#020617 28%,#2563eb 64%,#22d3ee)',
  midnight:   'linear-gradient(135deg,#01030a,#020617 28%,#312e81 66%,#a5b4fc)',
  coral:      'linear-gradient(135deg,#021016,#083344 32%,#06b6d4 64%,#fb7185)',
  festival:   'linear-gradient(135deg,#1a0505,#450a0a 30%,#e11d48 66%,#fbbf24)',
  master:     'linear-gradient(135deg,#0a0206,#030712 24%,#7f1d1d 62%,#f97316)'
};

let out = [];
out.push('/* === Premium skin decorations (generated by tools/gen_skins_css.js) === */');
out.push('.app{position:relative;z-index:1}');
out.push("body::before{content:'';position:fixed;inset:0;z-index:0;pointer-events:none;background-repeat:repeat;background-position:center;opacity:0;transition:opacity .4s ease}");
out.push('@media (prefers-reduced-motion:reduce){body::before{transition:none}}');
out.push('/* richer swatch previews: motif over gradient + inner glow */');
out.push('.skin-swatch{position:relative;overflow:hidden}');

for(const [id, cfg] of Object.entries(themes)){
  const svg = motifs[id].replaceAll(`%${cfg.key}%`, cfg.color);
  const uri = svgUri(svg);
  // Full-page theme layer
  out.push(`body.theme-${id}::before{background-image:${uri};background-size:${cfg.size}px ${cfg.size}px;opacity:${cfg.op}}`);
  // Swatch preview: motif tile over a rich gradient + inset glow
  const swSize = Math.round(cfg.size * 0.62);
  out.push(`.skin-${id}{background:${uri},${swatchGradients[id]};background-size:${swSize}px ${swSize}px,cover;background-position:center;box-shadow:inset 0 0 20px rgba(255,255,255,.18),inset 0 -10px 18px rgba(0,0,0,.28)}`);
}

console.log(out.join('\n'));
