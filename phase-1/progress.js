/* M&Q University — Phase I knowledge-check grading + progress (browser only).
   Students reveal each answer, then mark themselves "Got it" or "Review again".
   This is self-graded: there are no accounts, no servers, and nothing leaves the browser.
   Storage key: mqu.p1.v1 = { "module-1": { "answers": {"0":true,...}, "total": 5, "visited": true }, ... } */
(function () {
  "use strict";
  var KEY = "mqu.p1.v1";
  function load() { try { return JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { return {}; } }
  function save(d) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {} }
  function stats(m) {
    var a = (m && m.answers) || {}, total = (m && m.total) || 0, right = 0, marked = 0;
    Object.keys(a).forEach(function (k) { marked++; if (a[k]) right++; });
    return { right: right, marked: marked, total: total, complete: total > 0 && right === total };
  }
  var css = document.createElement("style");
  css.textContent =
    ".mq-grade{display:flex;gap:.5rem;flex-wrap:wrap;margin-top:.8rem;align-items:center;font-size:.85rem;color:#93A0B8}" +
    ".mq-grade button{background:transparent;border:1px solid rgba(201,162,39,.5);color:#E8C15A;border-radius:6px;padding:.35rem .8rem;cursor:pointer;font:inherit}" +
    ".mq-grade button[aria-pressed=true]{background:#C9A227;color:#0A0A0A;border-color:#C9A227;font-weight:600}" +
    ".mq-score{border:1px solid rgba(201,162,39,.45);border-radius:10px;padding:.9rem 1.1rem;margin:0 0 1rem;color:#EDE6D6;background:rgba(201,162,39,.06)}" +
    ".mq-score b{color:#E8C15A}.mq-score button{margin-left:.6rem;background:transparent;border:1px solid #555;color:#93A0B8;border-radius:6px;padding:.2rem .6rem;cursor:pointer;font:inherit;font-size:.8rem}" +
    ".mq-badge{display:inline-block;margin-top:.5rem;font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;color:#93A0B8}" +
    ".mq-badge.done{color:#E8C15A;font-weight:600}";
  document.head.appendChild(css);

  var file = (location.pathname.split("/").pop() || "").toLowerCase();
  var mm = file.match(/^module-(\d+)/);
  var data = load();

  if (mm) {
    var id = "module-" + mm[1];
    var qs = document.querySelectorAll("details");
    if (!qs.length) return;
    var m = data[id] || { answers: {} };
    m.total = qs.length; m.visited = true; data[id] = m; save(data);
    var box = document.createElement("div");
    box.className = "mq-score"; box.setAttribute("role", "status"); box.setAttribute("aria-live", "polite");
    qs[0].parentNode.insertBefore(box, qs[0]);
    function render() {
      var s = stats(data[id]);
      box.innerHTML = "Knowledge check: <b>" + s.right + " / " + s.total + "</b> marked correct" +
        (s.complete ? " — <b>module complete ✓</b>" : (s.marked ? "" : " — open each answer, then mark yourself honestly")) +
        ' <button type="button" data-reset>Reset</button>' +
        '<div style="font-size:.75rem;color:#93A0B8;margin-top:.3rem">Self-graded and saved in this browser only. If you miss one, re-read the section — that\'s the point.</div>';
      box.querySelector("[data-reset]").onclick = function () { data[id].answers = {}; save(data); render(); paint(); };
    }
    var groups = [];
    function paint() {
      groups.forEach(function (g, i) {
        var v = data[id].answers[i];
        g.yes.setAttribute("aria-pressed", v === true ? "true" : "false");
        g.no.setAttribute("aria-pressed", v === false ? "true" : "false");
      });
    }
    Array.prototype.forEach.call(qs, function (d, i) {
      var row = document.createElement("div");
      row.className = "mq-grade";
      row.innerHTML = '<span>Did you get it right?</span><button type="button" aria-pressed="false">✓ Got it</button><button type="button" aria-pressed="false">↻ Review again</button>';
      var b = row.querySelectorAll("button");
      function mark(v) { data[id].answers[i] = v; save(data); render(); paint(); }
      b[0].onclick = function () { mark(true); };
      b[1].onclick = function () { mark(false); };
      groups.push({ yes: b[0], no: b[1] });
      d.appendChild(row);
    });
    render(); paint();
  } else {
    // Phase I hub: progress badge on each module tile.
    var done = 0, links = document.querySelectorAll('a[href^="module-"]');
    Array.prototype.forEach.call(links, function (a) {
      var k = (a.getAttribute("href").match(/^module-(\d+)/) || [])[1];
      if (!k) return;
      var s = stats(data["module-" + k]);
      if (s.complete) done++;
      var t = document.createElement("span");
      t.className = "mq-badge" + (s.complete ? " done" : "");
      t.textContent = s.complete ? "✓ Complete" : s.marked ? (s.right + " / " + s.total + " correct") : (data["module-" + k] ? "Started" : "Not started");
      a.appendChild(document.createElement("br")); a.appendChild(t);
    });
    var mods = document.querySelector(".modules");
    if (mods && links.length) {
      var sum = document.createElement("div");
      sum.className = "mq-score";
      sum.innerHTML = "Your Phase I progress (this browser): <b>" + done + " / " + links.length + "</b> modules complete";
      mods.parentNode.insertBefore(sum, mods);
    }
  }
})();
