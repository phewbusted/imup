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
