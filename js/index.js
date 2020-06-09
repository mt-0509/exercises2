'use strict';
{
  const host = document.querySelector('.host');
  const root = host.attachShadow({mode: 'open'})

  const slot = document.createElement('slot');
  slot.name = 'user-name';

  root.textContent = 'My name is ';
  root.appendChild(slot);




}