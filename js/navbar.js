document.getElementById('btn-navbar').addEventListener('click',function(){ 
  function bgColorChange () {
    let color = ["yellow", "blue", "green", "purple", "gray"];
    document.getElementById('body').style.backgroundColor = color[Math.floor(Math.random() * color.length)];
  }
  bgColorChange();
})