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

  let first  = null;
  let second = null;
  let timer =  null;

  function click(e){
    if(timer){
      clearTimeout(timer);
      judge();
    }
    let elm = e.target;
    elm.textContent = data[elm.index];

    if(!first){
      first = elm;
    } else if(first.index === elm.index){
      return;
    } else{
      second = elm;
      timer = setTimeout(judge,1000);
    }
  }

//ジャッジする関数
  function judge(){
    if(first.innerHTML == second.innerHTML){
      first.style.visibility = 'hidden';
      second.style.visibility = 'hidden';
      mekuri += 2;
      if(mekuri === data.length) clearInterval(timer2); 
    } else{
      first.innerHTML = '';
      second.innerHTML = '';
    }
    first = null;
    second = null;
    timer = null;
  }

  let count = 0;
  let mekuri = 0;
  let clock = document.getElementById('clock');
  let timer2 = setInterval(function(){
    // clock.innerHTML = '経過時間:'+(++count);
  },1000)
}





