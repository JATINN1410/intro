
    var typed = new Typed('#element', {
      strings: ['<i>WEBDEVELOPER</i>', '&amp;  CODER','LEARNER'],
      typeSpeed: 50,
    });
    var stringsArray = [`<i>1) Secured the position of “School Topper” from class 1 to .</i>`, '<br>', '2) Awarded scholarship worth 10k+ in various academic and competitive domains.<br>', '3)Got AIR 9th in 11th AMU entrance.<br>','4) School topper of PCM in class 11th.<br>','5)Scored 99.7 , 99.4, 99+, 99+ percentile in maths in jee mains with rank 22.5K and overall percentile of 97.5.<br>','6)Got selected in jee advanced with a rank under 18k.<br>','7)Got AIR 95 in AMUEEE.<br>','8)I have solved 850+ problems on Coding Ninjas platform (EXP 20k+), and got the certificate for pointers.<br>','9)Certificate of Flipkart GRiD 5.0 - Software Development Track.<br>','10)Got 2nd rank in IEEE (ZHECT) online quiz.<br>','11)Cleared GATE 2024 and 2025 with good score'];
    var typed2 = new Typed('#element2', {
    
      strings: [stringsArray.join('  ')],
      typeSpeed: 10,
     
      onComplete: function (self) {
        // Add the next string to the existing content
        var nextString = stringsArray.shift();
        if (nextString) {
          self.strings = [self.strings[0] + nextString];
        
          self.start();
        }
       
      },
    });
       

    // function([string1, string2],target id,[color1,color2])    
 consoleText(['SECONDARY SCHOOLING.', 'SENIOUR SECENDORY SCHOOLONG', 'GRADUATION.'], 'text',['orange','lightblue','orange']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
const theme = document.querySelector('#theme');

// Toggle between light and dark theme using CSS variables
if (theme) {
  const updateThemeText = () => theme.textContent = document.body.classList.contains('theme-dark') ? 'light mode' : 'dark mode';
  theme.addEventListener('click', () => {
    document.body.classList.toggle('theme-dark');
    updateThemeText();
  });
  updateThemeText();
}

function timestart(){
  let sec=0;
  let min=0;
  setInterval(() => {
    sec++;
    if(sec==60)
    {
      min=min+1;
      sec=0;
      document.getElementById("right2").innerText=`min${min}  sec${sec}`;
    }
    else{
      document.getElementById("right2").innerText=`min${min}  sec${sec}`;
    }
  
  
  }, 1000);
}
timestart();

// UX improvements
document.documentElement.style.scrollBehavior = 'smooth';

// Smooth back-to-top button (toggle via class for a smoother transition)
const backTop = document.createElement('button');
backTop.id = 'backTop';
backTop.title = 'Back to top';
backTop.innerText = '↑';
document.body.appendChild(backTop);
backTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
window.addEventListener('scroll', () => {
  if(window.scrollY > 300) backTop.classList.add('show'); else backTop.classList.remove('show');
});

// Add reveal-on-scroll animation using IntersectionObserver
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.classList.add('fade-up');
      revealObserver.unobserve(e.target);
    }
  });
},{ threshold: 0.12 });

document.querySelectorAll('header, #sec, #sec2, #sec3, #sec4, footer, .lii').forEach(el => revealObserver.observe(el));

// Prevent comment form from reloading page and show simple feedback
const commentForm = document.querySelector('.comment-form');
if(commentForm){
  commentForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const ta = document.getElementById('comment');
    if(ta && ta.value.trim().length>0){
      const old = ta.value;
      ta.value = '';
      ta.placeholder = 'Thanks for your feedback!';
      setTimeout(()=> ta.placeholder = 'Write your feedback...', 2200);
    } else {
      ta.placeholder = 'Please write something before posting.';
      ta.focus();
    }
  });
}
