// =====================================
// PASSWORD
// =====================================

function checkPassword() {

    const pass =
    document.getElementById("password").value;

    if (pass === "190426") {

        document.getElementById("lock-screen")
        .style.display = "none";

        document.getElementById("content")
        .style.display = "block";
typeLetter();
        document.getElementById(
  "birthdayPopup"
).style.display = "flex";
        

        const music =
        document.getElementById("bgMusic");

        if (music) {
            music.play().catch(() => {
                console.log("Autoplay blocked");
            });
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        alert("password salah sayangg :(");

    }

}

// =====================================
// BIRTHDAY POPUP
// =====================================

function closeBirthdayPopup() {
    document.getElementById("birthdayPopup").style.display = "none";
}

// =====================================
// COUNTDOWN
// =====================================

const startDate =
new Date("2026-04-19T00:00:00");

function updateCountdown() {

    const countdown =
    document.getElementById("countdown");

    if (!countdown) return;

    const now = new Date();

    if (now < startDate) {

        countdown.innerHTML = `
            <div class="time-card">
                <h2>♡</h2>
                <p>our story hasn't started yet</p>
            </div>
        `;

        return;
    }

    let months =
    now.getMonth() -
    startDate.getMonth();

    let days =
    now.getDate() -
    startDate.getDate();

    if (days < 0) {

        months--;

        const previousMonth =
        new Date(
            now.getFullYear(),
            now.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }

    if (months < 0) {

        years--;
        months += 12;
    }

    const totalDiff =
    now - startDate;

    const hours =
    Math.floor(
        (totalDiff /
        (1000 * 60 * 60))
        % 24
    );

    const minutes =
    Math.floor(
        (totalDiff /
        (1000 * 60))
        % 60
    );

    countdown.innerHTML = `

    <div class="time-card">
        <h2>${months}</h2>
        <p>Months</p>
    </div>

    <div class="time-card">
        <h2>${days}</h2>
        <p>Days</p>
    </div>

    <div class="time-card">
        <h2>${hours}</h2>
        <p>Hours</p>
    </div>

    <div class="time-card">
        <h2>${minutes}</h2>
        <p>Minutes</p>
    </div>

    `;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// =====================================
// RANDOM NOTES
// =====================================

const notes = [

    "i'll always be proud of u ♡",

    "you deserve every good thing coming your way.",

    "thank u for existing.",

    "u're my favorite notification.",

    "i still smile when i think about u.",

    "the world feels softer with u in it.",

    "i hope u know how loved u are.",

    "you're my comfort person.",

    "meeting u was one of my favorite accidents.",

    "my days became brighter because of u.",

    "i choose u, again and again.",

    "you're worth more than every doubt in your head.",

    "thank u for being part of my story.",

    "u matter more than u know. ♡"

];

function showNote() {

    const noteBox =
    document.getElementById("noteBox");

    if (!noteBox) return;

    const randomNote =
    notes[
        Math.floor(
            Math.random() * notes.length
        )
    ];

    noteBox.innerHTML = randomNote;

}

// =====================================
// FLOATING STARS
// =====================================

const starsContainer =
document.getElementById("stars");

if (starsContainer) {

    for (let i = 0; i < 70; i++) {

        const star =
        document.createElement("div");

        star.classList.add("star");

        star.style.left =
        Math.random() * 100 + "vw";

        star.style.top =
        Math.random() * 100 + "vh";

        star.style.animationDuration =
        (12 + Math.random() * 25) + "s";

        star.style.animationDelay =
        Math.random() * 10 + "s";

        starsContainer.appendChild(star);

    }

}

// =====================================
// SCROLL FADE
// =====================================

const observer =
new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

},

{
threshold: 0.15
}

);

document
.querySelectorAll(".fade")
.forEach(section => {

observer.observe(section);

});

// =====================================
// PHOTO MODAL
// =====================================

const photo =
document.getElementById("mainPhoto");

const modal =
document.getElementById("modal");

const modalImg =
document.getElementById("modalImg");

const closeModal =
document.getElementById("closeModal");

if (photo && modal && modalImg) {

    photo.addEventListener(

    "click",

    () => {

        modal.style.display = "flex";

        modalImg.src = photo.src;

    }

    );

    modal.addEventListener(

    "click",

    (e) => {

        if (e.target === modal || e.target === closeModal) {
            modal.style.display = "none";
        }

    }

    );

}

// =====================================
// MUSIC BUTTON
// =====================================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const album = document.getElementById("albumCover");

function toggleMusic() {

  if (music.paused) {
    music.play();

    musicBtn.innerHTML = "⏸ Pause Music";
    album.classList.add("playing");

  } else {

    music.pause();

    musicBtn.innerHTML = "▶ Play Music";
    album.classList.remove("playing");
  }
}

// =====================================
// FLOATING HEARTS
// =====================================

function createHeart() {

    const heart =
    document.createElement("div");

    heart.innerHTML = "❤";

    heart.classList.add("heart");

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.animationDuration =
    (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 1000);

// =====================================
// PAGE LOAD
// =====================================

window.addEventListener(

"load",

() => {

    updateCountdown();

}

);

window.onbeforeunload = function () {
  return "ehh udah selesai? 😿";
};

document.addEventListener(
  "mousemove",
  (e) => {

    const stars =
      document.getElementById("stars");

    const x =
      (e.clientX / window.innerWidth - 0.5) * 20;

    const y =
      (e.clientY / window.innerHeight - 0.5) * 20;

    stars.style.transform =
      `translate(${x}px, ${y}px)`;
});
const letterText = `
To my dearest imup,<br><br>

honestly, idk how to start this without sounding cheesy🧀,
so aku bakal langsung bilang aja, hehe.<br><br>

so happy to know that di hidup yang cuma terjadi sekali ini,
we could met dan jadi sedekat sekarang.
i'm so glad to know the fact that i'm yours🤍.<br><br>

out of all the random things that happen in life,
somehow our paths crossed, and i think thats one of my favorite things ever.<br><br>

i wish on ur 18th bday🎂,
this year could give u thousand reasons to smile and keep going,
lebih banyak kenangan indah,
dan lebih banyak momen where u realize that life actually so beautiful😄.<br><br>

hopefully u could simply see urself kaya aku ngeliat kamu mup, ure amazing!!
dan semoga kamu bisa lebih menghargai semua hal yang sudah berhasil kamu lewati sampai hari ini.<br><br>

thank u for being u.
tysm yaa sayangg for every laughter
dan setiap momen kecil yang mungkin terlihat biasa aja,
but somehow jadi kenangan yang.... semoga could stay longer and forever.<br><br>

aku gatau gimana semuanya akan berjalan di masa depan,
but i clearly know that with u my days are brighter.<br>
semoga kamu juga merasakan hal yang sama ya sayangg💞<br><br>

jujur, aku agak sedih karena kamu nggak terlalu excited sama ulang tahun kamu sendiri😔😔
padahal hari ini adalah hari lahir seseorang yang sangat berarti buat aku:(<br><br>

so once again...
cheers on ur 18th birthday, sayangg♡<br><br>

hopefully this digital letter could make hari spesial kamu terasa sedikit lebih spesial😸<br><br>

With love,<br>
maiiy♡
`;

let index = 0;

function typeLetter() {

  const letter =
    document.getElementById(
      "birthdayLetter"
    );

  if (index < letterText.length) {

    // kalau ketemu tag HTML
    if (letterText.substring(index, index + 4) === "<br>") {

      letter.innerHTML += "<br>";
      index += 4;

    } else {

      letter.innerHTML +=
        letterText.charAt(index);

      index++;
    }

    setTimeout(typeLetter, 20);
  }
}

function cakeSurprise() {
  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "0px";
    confetti.style.background =
      ["#ff69b4", "#7ec8ff", "#ffd700", "#ff8c94"][
        Math.floor(Math.random() * 4)
      ];

    document.body.appendChild(confetti);

    confetti.animate(
      [
        { transform: "translateY(0) rotate(0deg)", opacity: 1 },
        {
          transform: `translateY(${window.innerHeight}px)
          rotate(${Math.random() * 720}deg)`,
          opacity: 0,
        },
      ],
      {
        duration: 2500,
        easing: "ease-out",
      }
    );

    setTimeout(() => confetti.remove(), 2500);
  }
}
window.addEventListener("load", () => {
  const music = document.getElementById("bgMusic");
  const cover = document.getElementById("albumCover");

  music.play().catch(() => {});

  cover.classList.add("playing");

  const btn = document.getElementById("musicBtn");
  btn.innerHTML = "⏸ Pause Music";
});
