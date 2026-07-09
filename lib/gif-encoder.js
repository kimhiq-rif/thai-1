/*
 * Thai Trainer — minimal GIF89a encoder (M4)
 * Fixed-palette animated GIF, self-contained (no workers, no network).
 * Frames are quantized to a small palette by nearest color. Good enough for
 * line-art handwriting replay. Usage:
 *   const enc = GIFEncoder(w, h, palette);  // palette = [[r,g,b],...] (<=256)
 *   enc.addFrame(rgbaUint8ClampedArray, delayMs);
 *   const bytes = enc.finish();             // Uint8Array (image/gif)
 */
window.GIFEncoder = function(width, height, palette){
  'use strict';
  var bytes = [];
  function byte(b){ bytes.push(b & 0xff); }
  function word(w){ byte(w); byte(w >> 8); }
  function str(s){ for(var i=0;i<s.length;i++) byte(s.charCodeAt(i)); }

  // palette padded to a power of two (2..256)
  var palSize = 2; while(palSize < palette.length) palSize <<= 1;
  if(palSize > 256) palSize = 256;
  var minCodeSize = Math.max(2, Math.log2(palSize) | 0);

  // precompute palette ints for nearest-color search
  var pr = [], pg = [], pb = [];
  for(var i=0;i<palette.length;i++){ pr.push(palette[i][0]); pg.push(palette[i][1]); pb.push(palette[i][2]); }
  function nearest(r,g,b){
    var best = 0, bestD = Infinity;
    for(var k=0;k<palette.length;k++){
      var dr=r-pr[k], dg=g-pg[k], db=b-pb[k];
      var d = dr*dr + dg*dg + db*db;
      if(d < bestD){ bestD = d; best = k; if(d===0) break; }
    }
    return best;
  }

  // --- header ---
  str('GIF89a');
  word(width); word(height);
  byte(0xF0 | (minCodeSize - 1));  // global color table, 8-bit color res, size = minCodeSize
  byte(0); byte(0);                // bg color index, aspect ratio
  for(var p=0;p<palSize;p++){
    if(p < palette.length){ byte(pr[p]); byte(pg[p]); byte(pb[p]); }
    else { byte(0); byte(0); byte(0); }
  }
  // NETSCAPE loop extension (infinite)
  byte(0x21); byte(0xFF); byte(0x0B); str('NETSCAPE2.0'); byte(0x03); byte(0x01); word(0); byte(0x00);

  function lzw(indices){
    var clear = 1 << minCodeSize, eoi = clear + 1;
    var codeSize = minCodeSize + 1, next = eoi + 1;
    var dict = {};
    function reset(){ dict = {}; for(var i=0;i<clear;i++) dict[String.fromCharCode(i)] = i; codeSize = minCodeSize + 1; next = eoi + 1; }
    var out = [], cur = 0, bits = 0;
    function emit(code){ cur |= code << bits; bits += codeSize; while(bits >= 8){ out.push(cur & 0xff); cur >>= 8; bits -= 8; } }
    reset(); emit(clear);
    var w = String.fromCharCode(indices[0]);
    for(var i=1;i<indices.length;i++){
      var c = String.fromCharCode(indices[i]);
      if(dict[w + c] !== undefined){ w = w + c; }
      else {
        emit(dict[w]);
        dict[w + c] = next++;
        if(next > (1 << codeSize) && codeSize < 12) codeSize++;
        if(next >= 4096){ emit(clear); reset(); }
        w = c;
      }
    }
    emit(dict[w]); emit(eoi);
    if(bits > 0) out.push(cur & 0xff);
    return out;
  }

  function addFrame(rgba, delayMs){
    var n = width * height, idx = new Uint8Array(n);
    for(var i=0;i<n;i++){ var o=i*4; idx[i] = nearest(rgba[o], rgba[o+1], rgba[o+2]); }
    // Graphic Control Extension (delay in 1/100s)
    var delay = Math.max(2, Math.round((delayMs || 40) / 10));
    byte(0x21); byte(0xF9); byte(0x04); byte(0x00); word(delay); byte(0x00); byte(0x00);
    // Image Descriptor
    byte(0x2C); word(0); word(0); word(width); word(height); byte(0x00);
    // LZW image data
    byte(minCodeSize);
    var data = lzw(idx);
    for(var off=0; off<data.length; off += 255){
      var chunk = data.slice(off, off + 255);
      byte(chunk.length);
      for(var j=0;j<chunk.length;j++) byte(chunk[j]);
    }
    byte(0x00); // block terminator
  }

  function finish(){ byte(0x3B); return new Uint8Array(bytes); }

  return { addFrame: addFrame, finish: finish };
};
