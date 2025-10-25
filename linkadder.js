const links = 
{
    "youtube" : "https://www.youtube.com/@Non-Existence-Studios",
    "godot" : "https://godotengine.org",
    "discord" : "https://discord.gg/HytDnBgJ7y",
}

function add_links()
{
    var as = document.getElementsByClassName("link")
    console.log("sdfsdf")
    for(var i = 0; i < as.length; i++)
    {
        for(var j = 0; j < as[i].classList.length; j++)
        {
            if(links.hasOwnProperty(as[i].classList[j]))
            {
                as[i].setAttribute("href", links[as[i].classList[j]])
                break;
            }
        }
    }
}