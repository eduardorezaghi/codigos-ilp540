var imgArray = [];

imgArray[0] = "https://itpetblog.com.br/wp-content/uploads/2019/07/grumpy-cat.jpg";
imgArray[1] = "https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp";
imgArray[2] = "https://upload.wikimedia.org/wikipedia/commons/b/bd/Nile_crocodile_head.jpg";
imgArray[3] = "https://c.files.bbci.co.uk/67CF/production/_108857562_mediaitem108857561.jpg";

var i = 0;
function imgChange(){
	slideshow.src = imgArray[i];
	if(i < imgArray.length - 1) 
		i++; 
	else i = 0;
}

window.onload = setInterval("imgChange()", 2000);