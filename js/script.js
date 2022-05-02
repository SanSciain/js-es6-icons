const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


const selector = document.getElementById("icon-type");

chooseIconsType(icons);

selector.addEventListener("change", function(){
    if (this.value === ""){
        chooseIconsType(icons);
    }
    else {
        let iconTypeChosen=icons.filter( (element)=>{
            if (this.value === `${element.type}`){
                return element;
            }
        } );
        chooseIconsType(iconTypeChosen);
    }
});


function chooseIconsType(icons){
    const container = document.querySelector(".icons-container");
    container.innerHTML="";
    icons.forEach( (icon)=>{
        const box=createElement(container);
        const i = box.querySelector("i");
        const text = box.querySelector("p");
        i.classList.add(`${icon.family}`)
        const iClassSpecific = `${icon.prefix}${icon.name}`;
        i.classList.add(iClassSpecific);
        i.style.color=`${icon.color}`;
        text.innerHTML=`${icon.name}`;
    } );
}




function createElement (container){
    const box = document.createElement("div");
    box.classList.add("box");
    const i = document.createElement("i");
    const text = document.createElement("p");
    container.append(box);
    box.append(i);
    box.append(text);
    return box;
}