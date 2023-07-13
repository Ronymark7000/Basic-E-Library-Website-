	var images = ['../Image/Slider1.jpg', '../Image/Slider2.png', '../Image/Slider3.png', '../Image/Slider4.png', '../Image/Slider5.jpg'];

	var x = 0;

	var imgs = document.getElementById('img');

setInterval(slider, 3000);


function slider() 

{

	if (x < images.length) 

	{
		 x = x + 1;
	}	

	else

	{
	x = 1;
	}


	imgs.innerHTML = "<img src=" + images[x - 1] + ">";
}