const words=["building projects","solving problems","learning new tech","writing code"];
let word=0, pos=0, deleting=false;
const typing=document.getElementById("typing");
function type(){
  const current=words[word];
  typing.textContent=deleting?current.slice(0,pos--):current.slice(0,pos++);
  let delay=deleting?45:85;
  if(!deleting && pos===current.length+1){deleting=true;delay=1100}
  if(deleting && pos===0){deleting=false;word=(word+1)%words.length;delay=250}
  setTimeout(type,delay);
}
type();

const themeBtn=document.getElementById("themeBtn");
themeBtn.onclick=()=>{
  document.body.classList.toggle("light");
  themeBtn.textContent=document.body.classList.contains("light")?"☀":"☾";
};
document.getElementById("year").textContent=new Date().getFullYear();
