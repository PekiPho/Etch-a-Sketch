
const container=document.getElementById('container');
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var inputColor=document.getElementById("head");
var color;

output.textContent = slider.value;

slider.oninput = function() {
    output.textContent = this.value;
}

createGrid(slider.value);

function createGrid(gridSize)
{
    container.style.gridTemplateColumns=`repeat(${gridSize},1fr)`;
    container.style.gridTemplateRows=`repeat(${gridSize},1fr)`;
    for(let i=0;i<gridSize;i++)
    {
        for(let j=0;j<gridSize;j++)
        {
        const gridElement=document.createElement('div');
        gridElement.setAttribute('id','square');

        container.appendChild(gridElement);
        }
    }
    
}
slider.addEventListener('mouseup',()=>{
    createGrid(slider.value);
});

inputColor.addEventListener('input',()=>{
    color=inputColor.value;
});

const pixel=document.querySelectorAll('#square');

pixel.forEach((d)=>{

    d.addEventListener('mouseover',()=>{
        d.style.backgroundColor=color;
    });
});


