document.addEventListener('click',function(){
   const audio=document.getElementById('music');
  audio.volume=0.4;
   audio.play();
	const flowers = ['🌸', '💮', '🌹', '🌺', '🍁', '🍃'];
    
    setInterval(() => {
      for (let i = 0; i < 4; i++) {
        const f = document.createElement('div');
        f.className = 'flower';
        f.innerText = flowers[Math.floor(Math.random() * flowers.length)];
        f.style.left = Math.random() * 100 + 'vw';
        f.style.animationDuration = (Math.random() * 2 + 2) + 's';
        f.style.fontSize = (Math.random() * 15 + 15) + 'px';
        
        document.body.appendChild(f);
        setTimeout(() => f.remove(), 4000);
      }
    }, 1000);
  },{once:true});
  function wr() {
    window.location.href = "https://wa.me/917860633489?text=Hello%20Sameer%20...";
          }
