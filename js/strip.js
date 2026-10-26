/* ==========================================================================
   js/strip.js — two-row justified banner

   WHY THIS EXISTS
   A uniform grid of equal cells leaves every picture floating in a pool of
   background colour, because the pictures are all different shapes. Packing
   them flush instead means each tile's width must follow its own aspect
   ratio — and those ratios are only knowable once the images have loaded.
   Hence a little JavaScript.

   WHAT IT DOES
   Splits the row into exactly two rows (three on a phone), picking the split
   point that makes the two row heights as close to each other as possible,
   then justifies each row flush to both margins. Tight gaps, no matting, no
   stranded pictures, and nothing can be orphaned onto a line of its own
   because the row count is fixed in advance.

   Row heights may differ slightly between the two rows. That is the price of
   flush margins with fixed images, and it looks far better than the
   alternative.

   Aspect ratios are measured from the loaded images, so swapping a picture
   needs no code change.

   NO-JS FALLBACK: the stylesheet lays out a tight equal-height wrapping row.
   ========================================================================== */

(function () {
  'use strict';

  var strip = document.querySelector('.strip');
  if (!strip) return;

  var GAP = 6;                       // px — must match the gap in site.css
  var items = Array.prototype.slice.call(strip.children);
  if (items.length < 2) return;

  /* Preferred tile height. Rows are chosen to land near this. */
  function targetHeight(W) {
    if (W < 560) return 104;
    if (W < 900) return 118;
    return 132;
  }

  /* How many rows to consider. Set data-rows="2" on the <ul> to force it. */
  function rowOptions(W) {
    var forced = parseInt(strip.getAttribute('data-rows'), 10);
    if (forced > 0) return [forced];
    return W < 560 ? [2, 3, 4] : [1, 2, 3];
  }

  function aspectOf(li) {
    var img = li.querySelector('img');
    if (img && img.naturalWidth && img.naturalHeight) {
      return img.naturalWidth / img.naturalHeight;
    }
    var hint = parseFloat(li.getAttribute('data-aspect'));
    return (hint && hint > 0) ? hint : 1;
  }

  /* Every way of cutting an ordered list into R contiguous rows. n is 7, so
     this is a handful of possibilities — exhaustive search is free. */
  function splits(n, R) {
    var out = [];
    (function walk(start, cuts) {
      if (cuts.length === R - 1) { out.push(cuts.slice()); return; }
      for (var i = start; i <= n - (R - cuts.length - 1) - 1; i++) {
        walk(i + 1, cuts.concat([i]));
      }
    })(1, []);
    return out;
  }

  function heightsFor(cuts, a, W, n) {
    var hs = [], prev = 0;
    cuts.concat([n]).forEach(function (c) {
      var sum = 0;
      for (var i = prev; i < c; i++) sum += a[i];
      hs.push((W - (c - prev - 1) * GAP) / sum);
      prev = c;
    });
    return hs;
  }

  function layout() {
    var W = strip.clientWidth;
    if (!W) return;

    var a = items.map(aspectOf);
    var n = items.length;
    var target = targetHeight(W);
    var best = null;

    rowOptions(W).forEach(function (R) {
      if (R > n) return;
      splits(n, R).forEach(function (cuts) {
        var hs = heightsFor(cuts, a, W, n);
        var lo = Math.min.apply(null, hs), hi = Math.max.apply(null, hs);

        // Two things matter, in this order: rows should be similar heights to
        // each other, and all of them should be near the target. A layout can
        // be perfectly balanced and still wrong if the tiles are 300px tall.
        var balance = hi / lo - 1;
        var drift = hs.reduce(function (t, h) {
          return t + Math.abs(h - target) / target;
        }, 0) / hs.length;

        var cost = balance * 1.4 + drift;
        if (hi > target * 2.2) cost += 3;      // never a giant row
        if (lo < 72) cost += 3;                 // never a sliver row

        if (!best || cost < best.cost) best = { cost: cost, cuts: cuts, hs: hs };
      });
    });
    if (!best) return;

    var prev = 0;
    best.cuts.concat([n]).forEach(function (c, r) {
      var h = Math.round(best.hs[r]);
      var avail = W - (c - prev - 1) * GAP;
      var used = 0;
      for (var i = prev; i < c; i++) {
        var w = (i === c - 1) ? (avail - used) : Math.floor(a[i] * h);
        used += w;
        items[i].style.width = w + 'px';
        items[i].style.height = h + 'px';
      }
      prev = c;
    });

    strip.classList.add('is-justified');
  }

  function whenImagesSettle(cb) {
    var imgs = items.map(function (li) { return li.querySelector('img'); })
                    .filter(Boolean);
    var left = imgs.length;
    if (!left) { cb(); return; }
    imgs.forEach(function (img) {
      if (img.complete) { if (--left === 0) cb(); return; }
      var done = function () { if (--left === 0) cb(); };
      img.addEventListener('load', done, { once: true });
      img.addEventListener('error', done, { once: true });
    });
  }

  var timer;
  window.addEventListener('resize', function () {
    clearTimeout(timer);
    timer = setTimeout(layout, 120);
  });

  whenImagesSettle(layout);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(layout);
})();
