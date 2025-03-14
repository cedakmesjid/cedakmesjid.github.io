console.log('loading...');

burger.onclick = () => {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
};


qrToggle.onclick = () => {
  console.log('toggle QR Code!');
  console.log("display", qr.style.display);
  if (
    qr.style.display === ''
    ||
    qr.style.display === 'none'
  ) {
    qr.style.display = 'inline';
  } else {
    console.log('bbbbb');
    qr.style.display = 'none';
  }
};
