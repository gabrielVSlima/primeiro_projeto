const habitInput = document.getElementById('habit-input');
const addBtn = document.getElementById('add-btn');
const habitList = document.getElementById('habit-list');

addBtn.addEventListener('click', () => {
    const habitText = habitInput.value.trim();
    if (habitText !== '') {
        const li = document.createElement('li');
        
        // Texto do hábito
        const span = document.createElement('span');
        span.textContent = habitText;
        
        // Imagem do Unsplash
        const img = document.createElement('img');
        img.src = `https://source.unsplash.com/100x100/?${encodeURIComponent(habitText)}`;
        img.alt = habitText;
        img.classList.add('habit-img');
        
        // Botão de excluir
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Excluir';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => li.remove();
        
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        
        habitList.appendChild(li);
        habitInput.value = '';
    }
}); 