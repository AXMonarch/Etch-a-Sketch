const clearbutton = document.getElementById('Clear');
const heatbutton = document.getElementById('Heatmap');
const rainbowbutton = document.getElementById('Rainbow');
const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const gridItem = document.createElement('div');
        
        gridItem.classList.add('grid-item');
        gridItem.addEventListener('mouseenter', function() {
            gridItem.classList.add('hovered');
        });
        gridContainer.appendChild(gridItem);
    }
}

clearbutton.addEventListener('click', function() {
    window.location.reload();
});

heatbutton.addEventListener('click', function() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        if (item.classList.contains('hovered')) {
            item.style.backgroundColor = `hsl(${Math.random() * 50}, 100%, 50%)`;
        }
    });
});

rainbowbutton.addEventListener('click', function() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        if (item.classList.contains('hovered')) {
            item.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
    });
});