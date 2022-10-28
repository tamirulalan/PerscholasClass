// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  const mainEl = document.querySelector('main');
  mainEl.style.backgroundColor = 'var(--main-bg)';
  mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
  mainEl.className += "flex-ctr";
  
  
  const topMenuEl = document.getElementById("top-menu");
  topMenuEl.style.height = "100%";
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
  topMenuEl.className += "flex-around";
  
  menuLinks.forEach((item) => {
    let aTag = document.createElement("a");
    aTag.innerText = item.text;
    topMenuEl.appendChild(aTag);
  })
  // // Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.
  const subMenuEl=document.getElementById("sub-menu");
  subMenuEl.style.height ='100%';
  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
  subMenuEl.className += "flex-around";
   subMenuEl.style.position = 'absolute';
   //subMenuEl.style.top = '0';
  
  const topMenuLinks =  topMenuEl.querySelectorAll('a')
  // Declare a global showingSubMenuvariable and initialize it to false;
  //const showingSubMenu =false
  
  topMenuEl.addEventListener('click',function(e){
    e.preventDefault();
    
    //The second line of code function should immediately return if the element clicked was not an <a>element.
    if(e.target.nodeName=="A"){
      console.log(e.target.innerText);
    }else{
      console.log('element clicked was not an <a>element.')
    }
                        
  });
  
  if(Event.target.classList.contains('active')){
    Event.target.classList.remove('active')
    const showingSubMenu =false
   subMenuEl.style.top ='0';
    //return;
  }
    topMenuLinks[1].classList.add('active');
  console.log(topMenuLinks[1].classList);
  for(let i=0; i<topMenuLinks.length;i++){
  topMenuLinks[i].classList.remove("active");
  console.log(topMenuLinks[i].classList);
  }
  
  
  