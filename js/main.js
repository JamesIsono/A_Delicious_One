'use strict';



{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  var cross = document.querySelector('.cross');
  var cross2 = document.querySelector('.cross2');
  var cross3 = document.querySelector('.cross3');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  cross.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });  

  cross2.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });  

  cross3.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });  
}

