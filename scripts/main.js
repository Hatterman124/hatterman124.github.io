function enable_os_theme()
{
	var element = document.body;
	element.classList.remove("light");
	element.classList.remove("dark");
}

function enable_light_theme()
{
	var element = document.body;
	element.classList.remove("dark");
	element.classList.add("light");
}

function enable_dark_theme()
{
	var element = document.body;
	element.classList.remove("light");
	element.classList.add("dark");
}
