;(function () {
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

  // Header terminal ticker
  var tickerEl = document.getElementById("ticker-text")
  var commands = [
    "shipping at respan",
    "git push origin main",
    "kubectl get pods -A",
    "fixing kafka lag",
    "brewing chai",
    "npm run vibes",
  ]
  if (tickerEl) {
    var index = 0
    var chars = 0
    var deleting = false
    var step = function () {
      var word = commands[index]
      if (!deleting) {
        chars += 1
        tickerEl.textContent = word.slice(0, chars)
        if (chars === word.length) {
          deleting = true
          setTimeout(step, 1800)
          return
        }
      } else {
        chars -= 1
        tickerEl.textContent = word.slice(0, chars)
        if (chars === 0) {
          deleting = false
          index = (index + 1) % commands.length
        }
      }
      setTimeout(step, deleting ? 35 : 70)
    }
    setTimeout(step, 400)
  }

  // Bengaluru clock
  var clockEl = document.getElementById("clock")
  if (clockEl) {
    var tick = function () {
      clockEl.textContent =
        new Date().toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }) + " IST"
    }
    tick()
    setInterval(tick, 1000)
  }

  // Scroll reveal
  var reveals = document.querySelectorAll(".reveal")
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in")
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: "0px 0px -60px 0px" }
    )
    reveals.forEach(function (el) {
      io.observe(el)
    })
  } else {
    reveals.forEach(function (el) {
      el.classList.add("in")
    })
  }

  // Walking mascot
  var wrap = document.getElementById("mascot")
  var btn = document.getElementById("mascot-btn")
  var bubble = document.getElementById("mascot-bubble")
  if (!wrap || !btn || !bubble) return

  var SIZE = 56
  var SPEED = 42
  var workLines = [
    "git push origin main",
    "fixing kafka lag...",
    "kubectl get pods",
    "SELECT * FROM chai",
    "it works on my machine",
    "one more PR",
    "reading the logs",
  ]
  var waveLines = ["hey! 👋", "hire me maybe?", "don't tell my PM", "3x karate gold, careful"]

  var pick = function (lines) {
    return lines[Math.floor(Math.random() * lines.length)]
  }

  var nerd = function (mode) {
    var walking = mode === "walk"
    var working = mode === "work"
    var arm = working
      ? '<rect x="24" y="30" width="10" height="3.5" rx="1.75" fill="#27272a"/>' +
        '<path d="M20 39 L37 39" stroke="#a1a1aa" stroke-width="2" stroke-linecap="round"/>' +
        '<path d="M35.5 39 L39 28" stroke="#d4d4d8" stroke-width="2" stroke-linecap="round"/>' +
        '<path d="M36.6 37 L38.8 30.5" stroke="#e4e4e7" stroke-width="1" class="mascot-screen"/>'
      : '<g class="' + (walking ? "mascot-arm" : mode === "wave" ? "mascot-wave" : "") + '">' +
        '<rect x="24.5" y="26" width="4" height="12" rx="2" fill="#27272a"/>' +
        '<circle cx="26.5" cy="38.5" r="2" fill="#f2c29b"/></g>'
    return (
      '<svg viewBox="0 0 40 56" width="' + SIZE + '" height="' + (SIZE * 56) / 40 + '"' +
      (walking ? ' class="mascot-bob"' : "") + ' aria-hidden="true">' +
      '<ellipse cx="20" cy="54.5" rx="11" ry="1.5" fill="rgba(0,0,0,0.5)"/>' +
      '<g class="' + (walking ? "mascot-leg" : "") + '">' +
      '<rect x="14" y="39" width="4.5" height="11" rx="1.5" fill="#18181b"/>' +
      '<rect x="13" y="49" width="7" height="3.5" rx="1.5" fill="#f4f4f5"/></g>' +
      '<g class="' + (walking ? "mascot-leg mascot-leg-alt" : "") + '">' +
      '<rect x="21.5" y="39" width="4.5" height="11" rx="1.5" fill="#3f3f46"/>' +
      '<rect x="20.5" y="49" width="7" height="3.5" rx="1.5" fill="#e4e4e7"/></g>' +
      '<rect x="11" y="24" width="18" height="18" rx="5" fill="#3f3f46"/>' +
      '<rect x="11" y="24" width="18" height="5" rx="2.5" fill="#52525b"/>' +
      '<path d="M17 29 L20 33 L23 29" stroke="#a1a1aa" stroke-width="1" fill="none"/>' +
      arm +
      '<circle cx="20" cy="15" r="9" fill="#f2c29b"/>' +
      '<path d="M10.5 15 Q9.5 4.5 20 4.5 Q30.5 4.5 29.5 14 L27 10.5 L24.5 12.5 L22 9.5 L19 12 L16 9.5 L13.5 12.5 Z" fill="#18181b"/>' +
      '<circle cx="17" cy="16" r="3.1" fill="rgba(255,255,255,0.12)" stroke="#e4e4e7" stroke-width="1.1"/>' +
      '<circle cx="24.4" cy="16" r="3.1" fill="rgba(255,255,255,0.12)" stroke="#e4e4e7" stroke-width="1.1"/>' +
      '<path d="M20.1 16 L21.3 16" stroke="#e4e4e7" stroke-width="1"/>' +
      '<circle cx="17.6" cy="16.2" r="0.9" fill="#18181b" class="mascot-blink"/>' +
      '<circle cx="25" cy="16.2" r="0.9" fill="#18181b" class="mascot-blink"/>' +
      '<path d="' + (mode === "wave" ? "M19 20.5 Q21.5 23 24 20.5" : "M19.5 21 L23.5 21") +
      '" stroke="#7c4a2d" stroke-width="1" fill="none" stroke-linecap="round"/>' +
      "</svg>"
    )
  }

  var state = { x: 24, dir: 1, mode: "walk" }
  var timer

  var place = function () {
    wrap.style.transform = "translateX(" + state.x + "px)"
  }

  var setDir = function (dir) {
    state.dir = dir
    btn.style.transform = "scaleX(" + dir + ")"
  }

  var change = function (next, ms) {
    state.mode = next
    btn.innerHTML = nerd(next)
    var line = next === "work" ? pick(workLines) : next === "wave" ? pick(waveLines) : null
    bubble.hidden = !line
    if (line) {
      bubble.textContent = line
      bubble.style.animation = "none"
      void bubble.offsetWidth
      bubble.style.animation = ""
    }
    clearTimeout(timer)
    if (ms === null) return
    timer = setTimeout(function () {
      if (next === "walk") {
        change("work", 4500)
        return
      }
      if (Math.random() < 0.35) setDir(state.dir * -1)
      change("walk", 6000 + Math.random() * 6000)
    }, ms)
  }

  if (reduced) {
    state.x = window.innerWidth - SIZE - 24
    place()
    change("work", null)
    btn.addEventListener("click", function () {
      change("wave", null)
    })
    return
  }

  state.x = 24 + Math.random() * (window.innerWidth / 2)
  place()
  change("walk", 7000)
  btn.addEventListener("click", function () {
    change("wave", 2200)
  })

  var last = performance.now()
  var frame = function (now) {
    var dt = Math.min((now - last) / 1000, 0.05)
    last = now
    if (state.mode === "walk") {
      var max = window.innerWidth - SIZE - 16
      state.x += state.dir * SPEED * dt
      if (state.x <= 16 || state.x >= max) {
        state.x = Math.max(16, Math.min(state.x, max))
        setDir(state.dir * -1)
      }
      place()
    }
    requestAnimationFrame(frame)
  }
  requestAnimationFrame(frame)
})()
