var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = '...';
document.body.appendChild(btn);

// schijf hier tussen je code

var light = false;

function lightswitch()
{
    if(light)
    {
        console.log("light is off")
        document.body.style.background = "black";
        btn.innerHTML = "Switch light on";
        light = false;
    }
    else
    {
        console.log("light is on")
        document.body.style.backgroundColor = "yellow";
        btn.innerHTML = "Switch light off";
        light = true;
    }
}

document.body.style.backgroundColor = "black";
btn.innerHTML = "Switch light on";
btn.onclick = lightswitch;



// schijf hier tussen je code