let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/konJava.jpg') {
        myImage.setAttribute('src', 'images/konJavaO.jpg');
    } else {
        myImage.setAttribute('src', 'images/konJava.jpg');
    }
}

let myButton = document.querySelector('button');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName){
        setUserName();
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = myName + '，你好几把酷炫';
}
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + '，你好几把酷炫';
  }
  
myButton.onclick = setUserName;
