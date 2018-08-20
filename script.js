const list = [
  { title: 'First', done: false},
];
renderList();
function addToDo() {
  const todoInputValue = document.getElementById('input').value;
  list.push({title: todoInputValue, done: false});

  console.log(list);
  renderList();
}

function renderList() {
  const ul = document.getElementById('list');
  let li;
  let textForLi;
  ul.innerHTML = '';

  list.forEach(item => {
    li = document.getElementById('li');
    textForLi = document.createTextNode(item.title);
    if(item.done) li.className = 'done';
    li.appendChild(textForLi);
    ul.appendChild(li);
  });
}
