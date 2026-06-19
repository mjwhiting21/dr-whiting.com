document.getElementById('learnBtn')?.addEventListener('click',()=>{
  const about = document.getElementById('about');
  if(about) about.scrollIntoView({behavior:'smooth'});
});

// Small enhancement: update footer year if present
const footer = document.querySelector('.site-footer .container');
if(footer){
  footer.textContent = `© ${new Date().getFullYear()} Dr Whiting`;
}