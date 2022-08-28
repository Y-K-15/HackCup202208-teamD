'use strict' ;

{
  const sourse = [0,1,2,3,4,5,6,7,8,9,
    0,1,2,3,4,5,6,7,8,9]
  const data = [];
  for(let i=0; i<20; i++){
    data[i] = sourse.splice(Math.floor(Math.random()*sourse.length),1)[0];
  }
  console.log(data);


  for(let d=0; d<20; d++){
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = '';
    card.index = d;
    document.querySelector('.field').appendChild(card);
    card.onclick = click;
  }

  function click(e){
    let elm = e.target;
    elm.textContent = data[elm.index];
  }
}





