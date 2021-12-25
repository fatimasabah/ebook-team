// sidebar
let btn =document.querySelector('#btn-menu');
let sidebar=document.querySelector('.sidebar');
let searchbtn=document.querySelector('.bx-search');

btn.onclick =function(){
    sidebar.classList.toggle("active")
}

searchForm=document.querySelector('.search-form');
document.querySelector ('#search-btn').onclick =() =>{
    searchForm.classList.toggle('active');

}

let loginForm =document.querySelector('.login-form-contianer');
document.querySelector('#login-btn').onclick =() =>{
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick =() =>{
    loginForm.classList.remove('active');
}

document.querySelector()