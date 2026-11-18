;(function () {
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
})()
