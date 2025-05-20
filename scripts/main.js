const BigButton = document.querySelector("#big-button");
const SmallButton = document.querySelector("#small-button");
const David = document.querySelector("#david");
const Bob0 = document.querySelector("#bob0");
const Bob1 = document.querySelector("#bob1");

function BBlock()
{
	Bob0.style.display="block";
	Bob1.style.display="block";
}

BigButton.addEventListener("click", (event) => {
	Bob0.style.display = "none";
	Bob1.style.display = "none";
	setTimeout(BBlock, 3000);
});

SmallButton.addEventListener("click", (event) => {
	if (David.value === "yes") {
		alert("I'm going to get an F on this exam.")
	}
});