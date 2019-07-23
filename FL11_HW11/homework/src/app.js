let rootNode = document.getElementById('root');

const newElement = (nodeName = 'div', className = '', text = '', param = {}) => {
    let element = document.createElement(nodeName);

    if(className) {
        className.split(' ').forEach(cls => {
            element.classList.add(cls);
        })
    }
  
    element.innerHTML = text;

    Object.keys(param).forEach(key => {
        element.setAttribute(key, param[key]);
    })

    return element;
}

const getId = (id) => document.getElementById(id);


const insertToDoList = (root, ...rest) => {
    let wrapper = newElement('div', 'wrapper'),
        container = newElement('form', 'container');

        container.addEventListener('submit', event => event.preventDefault())

        rest.forEach(element => {
            container.appendChild(element);
        });

    root.appendChild(wrapper).appendChild(container);
}

const createToDoHeader = () => {
    const header = newElement('div', 'header'),
            capture = newElement('div', 'capture', 'TODO Cat List'),
            addBlock = newElement('div', 'header-add-section'),
            inp = newElement('input', null, null, {type: 'text', id: 'add-action-inp'}),
            btn = newElement('button', null, null, {id: 'add-action-btn', disabled: 'disabled'}),
            addIcon = newElement('i', 'material-icons add', 'add_box');

            btn.appendChild(addIcon);

            addBlock.appendChild(inp);
            addBlock.appendChild(btn);

            header.appendChild(capture);
            header.appendChild(addBlock);

            return header;
}
const createToDoList = () => {
    const ul = newElement('ul', null, null, {id: 'todo-list'});

    return ul;
}

const generateId = () => {
    let id = Math.random() + '';
    const pos = 2;

    id = 'li-' + id.slice(pos);

    return id;
}

class ToDoList {
    constructor(list, input, addBtn) {
        this.maxItems = 10;
        this.isMaxItems = false;
        this.addInp = input;
        this.list = list;
        this.addBtn = addBtn;
        this.dragObject = {};

    }
    init() {
        this.addInp.oninput = (event) => {
            const value = event.target.value.trim(); 
            if(value === '') {
                this.addBtn.disabled = 'disabled';

                return false;
            }

           this.addBtn.disabled = false ;
        }

        this.addBtn.addEventListener('click', () => {
            const value = this.addInp.value.trim();

            this.addItem(value);
            this.addInp.value = '';
            this.addBtn.disabled = 'disabled';
        });

    }
    addItem(val) {

        this.createItem(val);

        this.isTooManyElements(this.maxItems);
        
    }
    isTooManyElements(size) {
         const capture = document.querySelector('.capture'),
                message = 'Maximum item per list are created';
        if(this.list.childElementCount === size && !this.isMaxItems) {
            this.isMaxItems = true;
            this.addBtn.disabled = 'disabled';
            this.addInp.disabled = 'disabled';
            capture.appendChild(newElement('div', 'full-list', message));
        } else if(this.isMaxItems) {
            this.isMaxItems = false;
            this.addBtn.disabled = false;
            this.addInp.disabled = false;
            capture.querySelector('.full-list').remove();
        }
                

    }
    createItem(task) {
        const li = newElement('li', 'todo-list-item draggable', null, {id: generateId(), draggable: true}),
              label = newElement('label', 'checkbox'),
              text = newElement('span', 'todo-list-text', task),
              editIcon = newElement('i', 'material-icons edit', 'edit'),
              deleteIcon = newElement('i', 'material-icons delete', 'delete'),
              doneIcon = newElement('i', 'material-icons done', 'done'),
              inpCheckbox = newElement('input', null, null, {type: 'checkbox'});
            
              label.appendChild(inpCheckbox);
              label.appendChild(doneIcon);

              li.appendChild(label);
              li.appendChild(text);
              li.appendChild(editIcon);
              li.appendChild(deleteIcon);
            
              this.list.appendChild(li);

              deleteIcon.addEventListener('click', () => this.deleteTask(li.id));

              label.addEventListener('click', (event) => {
                 if(!this.markTask(li.id)){

                    event.preventDefault();
                 }
              });
              
              editIcon.addEventListener('click', () => this.editTask(li.id));

              return li;
    }

    deleteTask(id) {
        document.getElementById(id).remove();
        this.isTooManyElements();
    }

    markTask(id) {
        const elem = document.getElementById(id);

        if(elem.classList.contains('done')) {
            return false;
        }

        elem.classList.add('done');
        elem.querySelector('input[type="checkbox"]').setAttribute('checked', 'checked');
    }

    editTask(id) {
        const elem = document.getElementById(id),
              currentValue = elem.querySelector('.todo-list-text').innerHTML,
              editInp = newElement('input', 'todo-list-edit', null, {type: 'text', value: currentValue}),
              save = newElement('i', 'material-icons save', 'save');

        elem.classList.add('edit');

        elem.appendChild(editInp);
        elem.appendChild(save);

        save.addEventListener('click', (event) => this.save(id, editInp, event.target));
    }
    save(id, inp, save) {
        const elem = document.getElementById(id),
              value = inp.value.trim();
        if(value !== '') {
            elem.querySelector('.todo-list-text').innerText = value;
        }

        inp.remove();
        save.remove();

        elem.classList.remove('edit');

    }
}
insertToDoList(rootNode, createToDoHeader(), createToDoList());

const myList = new ToDoList(getId('todo-list'), getId('add-action-inp'), getId('add-action-btn'));

myList.init();


