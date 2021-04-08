sites.onchange = () => {
    if (form.sites.value == "g") 
        location.href="https://www.google.com.br/";   
    else if (form.sites.value == "b") 
        location.href="https://www.bing.com/";   
    else  if (form.sites.value == "d") 
        location.href="https://duckduckgo.com/";   
}