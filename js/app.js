window.onload = Initiate;

function Initiate(){
	var link1 = document.getElementById("soaps");
	link1.addEventListener('soaps', handleClick);


	var link2 = document.getElementById("soapz");
	link2.addEventListener('soapz', handleClick);

	function handleClick(evt){
		console.log(event.target.id);
	}

	var hoverSoap = document.getElementById("soaps");
	hoverSoap.addEventListener("mouseover", handleHover);
	hoverSoap.addEventListener("mouseout", releaseHover);

	var hoverSoap = document.getElementById("soapz");
	hoverSoap.addEventListener("mouseover", handleHover);
	hoverSoap.addEventListener("mouseout", releaseHover);

	function handleHover(evt){
		evt.target.className = 'ButtonHover';

	}

		function releaseHover(evt){
		evt.target.className = 'ButtonHover2';
}
