function _load() {
/* 
	1. két szóköz hosszúságú tab behúzás
	2. .gitignore sok fejfájástól ment meg
	3. inkább legyen szellős a kód mint tömör

	HTML:

		1. viewport meta a head tag-ben

			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
			</head>

		2. block elem több soros, inline elem pedig egy

			<div id="root">
				<span></span>
			</div>

		3. nem használonk inline style-t

			nem! <span style="color: white;"></span>

			igen! <link rel="stylesheet" href="./css/style.css">


	css:

		1. transform sorrend számít

			transform: scaleX(2) skew(20deg);
			transform: skew(20deg) scaleX(2);

		2. css reset

			*,
			*::before,
			*::after {
				box-sizing: border-box;
				padding: 0;
				margin: 0;
			}

		3. bevett sorrend köetése

			<selector> {
				position: <value>;
				width: <value>;
				display: <value>;
				background-color: <value>;
				font-size: <value>;
				padding: <value>;
				border: <value>;
				margin: <value>;
			}


		js:
			
			1. window load event figyelésével indítsuk a js kódot

				function _load() { <kód> }

				window.addEventListener("load", _load);

			2. ha egy változót nem akarunk változtatni, akkor legyen const

				const myVariable = e => ++e;

			3. egyenlőég vizsgálatra mindig használjuk a === operátort

				if (isThisTrue() === true) {}
 */
	
	const root = document.getElementById("root");

	let notes = [];
	notes.push({
		tag: "div",
		content: `2. css reset`,
	});

	notes.push({
		tag: "code",
		content: `
*,
*::before,
*::after {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}`,

	});

	console.log(notes);

	for (const note of notes) {
		const e = document.createElement(note.tag);
		e.insertAdjacentHTML("beforeend", e.content);
		root.insertAdjacentElement("beforeend", e);
	}


/* 
	2. css reset

		*,
		*::before,
		*::after {
			box-sizing: border-box;
			padding: 0;
			margin: 0;
		}
 */


	// TODO: hétfőig kiírni, highlight js 
/* 
	https://highlightjs.org/download/
<link rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.4.1/styles/default.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.4.1/highlight.min.js"></script>

https://highlightjs.org/usage/</link> */

/* document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
}); */

/* pageload végére
document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  }); */

}

window.addEventListener("load", _load);
