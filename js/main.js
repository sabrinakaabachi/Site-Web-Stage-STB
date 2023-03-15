
function loader(){
    document.querySelector('.preloader').classList.add('enter-out');
}

function fadeOut(){
  setInterval(loader,14000);
}

window.onload = fadeOut();