const habitInput = document.getElementById('habit-input');
const addBtn = document.getElementById('add-btn');
const habitList = document.getElementById('habit-list');

addBtn.addEventListener('click', () => {
    const habitText = habitInput.value.trim();
    if (habitText !== '') {
        const li = document.createElement('li');
        li.textContent = habitText;
        habitList.appendChild(li);
        habitInput.value = '';
    }
}); 