// completed btn -1
document.getElementById('btn-completed-1').addEventListener('click',function(event){ 
  event.preventDefault();
  alert("Board updated successfully")
  document.getElementById('btn-23').innerText = getClick ('btn-23');
  document.getElementById('btn-06').innerText = taskAsigned ('btn-06');

  const activityLog = document.getElementById('activity-log');
  const container = document.getElementById('activity-container')
  const fixMobile = document.getElementById('fix-mobile').innerText;
  const p = document.createElement('p');
  p.innerText = `You haved complete the task ${fixMobile} at ${new Date().toLocaleString('en-US',{hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}`
  container.appendChild(p);
  activityLog.appendChild(container);
  document.getElementById('btn-completed-1').disabled = true;
  const btn = document.getElementById('btn-06').innerText;
  const convertedBtn = parseInt(btn)
  if(convertedBtn===0){
    alert("congrats! you have successfully complete the all task.");
  }
})

// completed btn 2
document.getElementById('btn-completed-2').addEventListener('click',function(event){ 
  event.preventDefault();
  alert("Board updated successfully")
  document.getElementById('btn-23').innerText = getClick ('btn-23');
  document.getElementById('btn-06').innerText = taskAsigned ('btn-06');

  const activityLog = document.getElementById('activity-log');
  const container = document.getElementById('activity-container')
  const darkMode = document.getElementById('dark-mode').innerText;
  const p = document.createElement('p');
  p.innerText = `You haved complete the task ${darkMode} at ${new Date().toLocaleString('en-US',{hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}`
  container.prepend(p);
  activityLog.appendChild(container);
  document.getElementById('btn-completed-2').disabled = true;
  const btn = document.getElementById('btn-06').innerText;
  const convertedBtn = parseInt(btn)
  if(convertedBtn===0){
    alert("congrats! you have successfully complete the all task.");
  }
})

// completed btn 3
document.getElementById('btn-completed-3').addEventListener('click',function(event){ 
  event.preventDefault();
  alert("Board updated successfully")
  document.getElementById('btn-23').innerText = getClick ('btn-23');
  document.getElementById('btn-06').innerText = taskAsigned ('btn-06');

  const activityLog = document.getElementById('activity-log');
  const container = document.getElementById('activity-container')
  const optimizeHome = document.getElementById('optimize-home').innerText
  const p = document.createElement('p');
  p.innerText = `You haved complete the task ${optimizeHome} at  ${new Date().toLocaleString('en-US',{hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}`
  container.prepend(p);
  activityLog.appendChild(container);
  document.getElementById('btn-completed-3').disabled = true;
  const btn = document.getElementById('btn-06').innerText;
  const convertedBtn = parseInt(btn)
  if(convertedBtn===0){
    alert("congrats! you have successfully complete the all task.");
  }
})

// completed btn 4
document.getElementById('btn-completed-4').addEventListener('click',function(event){ 
  event.preventDefault();
  alert("Board updated successfully")
  document.getElementById('btn-23').innerText = getClick ('btn-23');
  document.getElementById('btn-06').innerText = taskAsigned ('btn-06');

  const activityLog = document.getElementById('activity-log');
  const container = document.getElementById('activity-container')
  const addEmoji = document.getElementById('add-emoji').innerText;

  const p = document.createElement('p');

  p.innerText = `You haved complete the task ${addEmoji} at  ${new Date().toLocaleString('en-US',{hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}`
  container.prepend(p);
  activityLog.appendChild(container);
  document.getElementById('btn-completed-4').disabled = true;
  const btn = document.getElementById('btn-06').innerText;
  const convertedBtn = parseInt(btn)
  if(convertedBtn===0){
    alert("congrats! you have successfully complete the all task.");
  }
})
// completed btn 5
document.getElementById('btn-completed-5').addEventListener('click',function(event){ 
  event.preventDefault();
  alert("Board updated successfully")
  document.getElementById('btn-23').innerText = getClick ('btn-23');
  document.getElementById('btn-06').innerText = taskAsigned ('btn-06');

  const activityLog = document.getElementById('activity-log');
  const container = document.getElementById('activity-container')
  const OpenAI = document.getElementById('openAI').innerText;

  const p = document.createElement('p');
  p.innerText = `You haved complete the task ${OpenAI} at  ${new Date().toLocaleString('en-US',{hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}`
  container.prepend(p);
  activityLog.appendChild(container);
  document.getElementById('btn-completed-5').disabled = true;
  const btn = document.getElementById('btn-06').innerText;
  const convertedBtn = parseInt(btn)
  if(convertedBtn===0){
    alert("congrats! you have successfully complete the all task.");
  }
})

// completed btn 6
document.getElementById('btn-completed-6').addEventListener('click',function(event){ 
  event.preventDefault();
  alert("Board updated successfully")
  document.getElementById('btn-23').innerText = getClick ('btn-23');
  document.getElementById('btn-06').innerText = taskAsigned ('btn-06');

  const activityLog = document.getElementById('activity-log');
  const container = document.getElementById('activity-container')
  const improveJob = document.getElementById('improve-job').innerText;
  const p = document.createElement('p');
  p.innerText = `You haved complete the task ${improveJob} at  ${new Date().toLocaleString('en-US',{hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}`
  container.prepend(p);
  activityLog.appendChild(container);
  document.getElementById('btn-completed-6').disabled = true;
  const btn = document.getElementById('btn-06').innerText;
  const convertedBtn = parseInt(btn)
  if(convertedBtn===0){
    alert("congrats! you have successfully complete the all task.");
  }
})
