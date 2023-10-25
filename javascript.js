
const container=document.getElementById('container');
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var color=document.getElementById("head").value;
output.textContent = slider.value;

createGrid(slider.value);

slider.oninput = function() {
    output.textContent = this.value;
}

function createGrid(gridSize)
{
    container.style.gridTemplateColumns=`repeat(${gridSize},1fr)`;
    container.style.gridTemplateRows=`repeat(${gridSize},1fr)`;
    for(let i=0;i<gridSize;i++)
    {
        for(let j=0;j<gridSize;j++)
        {
        const gridElement=document.createElement('div');
        
        container.appendChild(gridElement);
        }
    }
    
}
slider.addEventListener('mouseup',()=>{
    createGrid(slider.value);
});

