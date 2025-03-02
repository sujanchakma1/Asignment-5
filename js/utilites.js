function getClick (id){
  const clicks = document.getElementById(id).innerText
  const convertedClicks = parseInt(clicks);
  const sumClicks = convertedClicks + 1;
  return sumClicks;
}
function taskAsigned (id){
  const task = document.getElementById(id).innerText
  const convertedTask = parseInt(task);
  const sumTask = (convertedTask - 1);
  return sumTask;
}

document.getElementById('btn-clear-history').addEventListener('click',function(){ 
  const container = document.getElementById('activity-container');
  container.remove();

})

