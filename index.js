import { Tasks } from './modules/task_class.js';
import { addTaskSubmit, removeTaskClick } from './modules/add_remove_task.js';

const syncLocation = document.querySelector('#sync_button');
const syncImg = document.createElement('img');
syncImg.classList.add('sync_img');
syncImg.src = './assets/sync-outline.svg';
syncImg.alt = '';
syncLocation.appendChild(syncImg);

const enterLocation = document.querySelector('.button_add');
const enterImg = document.createElement('img');
enterImg.classList.add('enter_task');
enterImg.src = './assets/enter.svg';
enterImg.alt = '';
enterLocation.appendChild(enterImg);

const tasks = new Tasks();
tasks.displayTasks();
addTaskSubmit();
removeTaskClick();