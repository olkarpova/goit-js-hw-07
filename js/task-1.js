const liElems = document.querySelectorAll('li.item');

console.log("Number of categories:", liElems.length);

// console.log("Category:", liElems[0].querySelector('h2').textContent);

// console.log("Elements:", liElems[0].querySelectorAll('ul>li').length);

liElems.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const count = item.querySelectorAll('ul>li').length;

    console.log("Category:", title);
    console.log("Elements:", count);
});