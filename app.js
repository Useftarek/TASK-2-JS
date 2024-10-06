const nameInput = document.getElementById('name');
const colorInput = document.getElementById('color');
const saveBtn = document.querySelector('.saveBtn');
const loadBtn = document.querySelector('.loadBtn');
const clearBtn = document.querySelector('.clearBtn');


saveBtn.addEventListener('click', () => {
    
    const name = nameInput.value;
    localStorage.setItem('name', name);


    const color = colorInput.value;
    sessionStorage.setItem('color', color);

    alert('Changes saved!');
});


loadBtn.addEventListener('click', () => {
    
    const getName = localStorage.getItem('name');
    if (getName) {
        nameInput.value = getName;
    }

    
    const getColor = sessionStorage.getItem('color');
    if (getColor) {
        colorInput.value = getColor;
    }
});


clearBtn.addEventListener('click', () => {
    
    sessionStorage.clear();
    nameInput.value = '';
    colorInput.value = '';
});
