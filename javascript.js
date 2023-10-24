
const container=document.querySelector('.container');
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.textContent = slider.value;

slider.oninput = function() {
    output.textContent = this.value;
}

function createGrid(gridSize)
{
    for(let i=0;i<gridSize*gridSize;i++)
    {
        const gridElement=document.createElement('div');

        container.appendChild(gridElement);
    }
}
