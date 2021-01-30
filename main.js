// EXAMINE THE DOCUMENT OBJECT

//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title=123;
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// // document.all[10].textContent='Hello';
// console.log(document.forms);
// console.log(document.links);
//console.log(document.images);


// GET ELEMENT BY ID
// console.log(document.getElementById('header-title'));
//var headerTitle=document.getElementById('header-title')
// console.log(headerTitle);
// headerTitle.textContent='Hello';
// headerTitle.innerText='Goodbye';
// headerTitle.innerHTML='<h3>Hello</h3>';
//headerTitle.style.borderBottom='solid 3px black';


// GET ELEMENTS BY CLASS NAME

// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='Hello';
// items[1].style.backgroundColor='yellow';
// items[1].style.fontWeight='bold';
// items.style.backgroundColor="grey";  This one gives error

// for (var i=0; i<items.length; i++){
//     items.i.style.fontWeight='bold';
// }


// GET ELEMENT BY TAGNAME
//var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='Hello';
//li[1].style.backgroundColor='yellow';
// li[1].style.fontWeight='bold';
// // items.style.backgroundColor="grey";  This one gives error

 //for (var i=0; i<li.length; i++){
 //    li.i.style.backgroundColor='grey';
 //}



//QUERY SELECTOR
// var header=document.querySelector('#main-header');
// header.style.fontStyle='italic';
// header.style.borderBottom='solid 4px lightgreen';
// var subhead=document.querySelector('#main');
// subhead.style.fontStyle='italic';

// var input=document.querySelector('input');
// input.value='Hello World!';

// var submit=document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item=document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color='red';

// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='red';


//QUERY SELECTOR ALL
// var titles=document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='Merhaba!';

// var odd =document.querySelectorAll('li:nth-child(odd)');
// var even =document.querySelectorAll('li:nth-child(even)');
// for (var i =0; i<odd.length; i++){
//     odd[i].style.backgroundColor='grey';
//     even[i].style.backgroundColor='red';
// }



// TRAVERSING THE DOM

// var itemList=document.querySelector('#items');

//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='orange';
// console.log(itemList.parentNode.parentNode.parentNode);


//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='orange';
// console.log(itemList.parentElement.parentElement.parentElement);


//childNodes
// console.log(itemList.childNodes);


// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';


// // FirstChild
// console.log(itemList.firstChild);

// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Merhabalar';


// // LastChild
// console.log(itemList.lastChild);

// // LastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Merhabalar';


// // nextSibling
// console.log(itemList.nextSibling);

// // nextElementSibling
// console.log(itemList.nextElementSibling);

// // previousSibling
// console.log(itemList.previousSibling);

// // previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='blue';


// createElement

// // Create a div
// var newDiv=document.createElement('div');

// // Add Class
// newDiv.className="hello";

// // Add Id
// newDiv.id="hello1";

// // Add Attribute
// newDiv.setAttribute('title','Hello Div');

// //Create text node
// var newDivText=document.createTextNode('MERHABA');

// // Add text to div
// newDiv.appendChild(newDivText);

// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');
// container.insertBefore(newDiv,h1);

// console.log(newDiv);




// EVENTS
// var button=document.getElementById('button').addEventListener('click',buttonClick); 


// function buttonClick(e){
//     // // console.log('Button clicked');
//     // document.getElementById('header-title').textContent='Changed';
//     // document.querySelector('#main').style.backgroundColor='red';
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
//     // console.log(e.type);
//     // console.log(e.clientX);
// }



// var button=document.getElementById('button');
// //.addEventListener('click',runEvent); 
// button.addEventListener('dblclick',runEvent);


// var itemInput=document.querySelector('input[type="text"]');
// var form=document.querySelector('form');

// itemInput.addEventListener('keydown',runEvent);


// function runEvent(e){
//     console.log('EVENT TYPE:' +e.type);
// }






// ITEM LISTER PROJECT





