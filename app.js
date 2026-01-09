document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    // 1. 로컬 스토리지에서 데이터 불러오기
    let todos = JSON.parse(localStorage.getItem('myTodos')) || [];

    // 2. 화면에 리스트를 그리는 함수
    const renderTodos = () => {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
            
            li.innerHTML = `
                <input type="checkbox" ${todo.completed ? 'checked' : ''} onchange="toggleTodo(${index})">
                <span>${todo.text}</span>
                <button class="delete-btn" onclick="deleteTodo(${index})">삭제</button>
            `;
            todoList.appendChild(li);
        });
        saveTodos();
    };

    // 3. 로컬 스토리지에 데이터 저장
    const saveTodos = () => {
        localStorage.setItem('myTodos', JSON.stringify(todos));
    };

    // 4. 할 일 추가
    const addTodo = () => {
        const text = input.value.trim();
        if (text !== "") {
            todos.push({ text, completed: false });
            input.value = '';
            renderTodos();
        }
    };

    // 5. 완료 상태 토글 (전역 함수로 등록하여 HTML에서 접근 가능하게 함)
    window.toggleTodo = (index) => {
        todos[index].completed = !todos[index].completed;
        renderTodos();
    };

    // 6. 삭제 기능
    window.deleteTodo = (index) => {
        todos.splice(index, 1);
        renderTodos();
    };

    addBtn.addEventListener('click', addTodo);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTodo();
    });

    // 초기 실행
    renderTodos();
});