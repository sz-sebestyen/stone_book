function _load() {
/* 
	1. két szóköz hosszúságú tab behúzás
	2. .gitignore és build mappa alkalmazása
	3. inkább legyen szellős a kód mint tömör

	HTML:

		1. viewport meta a head tag-ben

			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
			</head>

		2. A block elem több, inline elem pedig egy soros

			<div id="root">
				<span></span>
			</div>

		3. nem használonk inline style-t

			<span style="color: white;"></span> <!--NO-->
			<link rel="stylesheet" href="./css/style.css"> <!--YES-->


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

		3. egy megszokott sorrend követése

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
			
			1. window load event figyelésével indítom a js kódot

				function _load() { <kód> }
				window.addEventListener("load", _load);

			2. ha egy változót nem akarunk változtatni, akkor az legyen const

				const myVariable = e => ++e;

			3. egyenlőég vizsgálatra mindig használjuk az === operátort

				if (isThisTrue() === true) {}
 */

	const book = [
		{
			page: {
				tag: "h2",
				content:"Legfontosabb"
			},
			list: [
				{
					title: {
						tag: "h3",
						content: `két szóköz hosszúságú tab behúzás`
					}
				},
				{
					title: {
						tag: "h3",
						content: `.gitignore és build mappa alkalmazása`
					}
				},
				{
					title: {
						tag: "h3",
						content: `inkább legyen szellős a kód mint tömör`
					}
				}
			]
		},
		{
			page: {
				tag: "h2",
				content: "html"
			},
			list: [
				{
					title: {
						tag: "h3",
						content: "viewport meta a head tag-ben"
					},

					body: {
						tag: "code",
						content: 
`<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>`
					}
				},
				{
					title: {
						tag: "h3",
						content: "A block elem több, inline elem pedig egy soros"
					},
	
					body: {
						tag: "code",
						content: 
`<div id="root">
  <span></span>
</div>`
					}
				},
				{
					title: {
						tag: "h3",
						content: "nem használonk inline style-t"
					},
	
					body: {
						tag: "code",
						content: 
`<span style="color: white;"></span> <!--NO-->
<link rel="stylesheet" href="./css/style.css"> <!--YES-->`
					}
				}
			]
		},
		{
			page: {
				tag: "h2",
				content: "css"
			},
			list: [
				{
					title: {
						tag: "h3",
						content: "transform sorrend számít"
					},

					body: {
						tag: "code",
						content: 
`transform: scaleX(2) skew(20deg);
transform: skew(20deg) scaleX(2);`
					}
				},
				{
					title: {
						tag: "h3",
						content: "css reset"
					},

					body: {
						tag: "code",
						content: 
`*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}`
					}
				},
				{
					title: {
						tag: "h3",
						content: "egy megszokott sorrend követése"
					},

					body: {
						tag: "code",
						content: 
`<selector> {
  position: <value>;
  width: <value>;
  display: <value>;
  background-color: <value>;
  font-size: <value>;
  padding: <value>;
  border: <value>;
  margin: <value>;
}`
					}
				}
			]
		},
		{
			page: {
				tag: "h2",
				content: "javascript"
			},
			list: [
				{
					title: {
						tag: "h3",
						content: "window load event figyelésével indítom a js kódot"
					},

					body: {
						tag: "code",
						content: 
`function _load() { <kód> }
window.addEventListener("load", _load);`
					}
				},
				{
					title: {
						tag: "h3",
						content: "ha egy változót nem akarunk változtatni, akkor az legyen const"
					},

					body: {
						tag: "code",
						content: `const myVariable = e => ++e;`
					}
				},
				{
					title: {
						tag: "h3",
						content: "egyenlőég vizsgálatra mindig használjuk az === operátort"
					},

					body: {
						tag: "code",
						content: `if (isThisTrue() === true) {}`
					}
				}
			]
		}
	];

	const root = document.getElementById("root");
	
	book.forEach( chapter => {
		
		const page = document.createElement(chapter.page.tag);
		page.insertAdjacentText("beforeend", chapter.page.content);
		
		const listItems = chapter.list.map( e => {

			const title = document.createElement(e.title.tag);
			title.insertAdjacentText("beforeend", e.title.content);

			const item = document.createElement("li");
			item.insertAdjacentElement("beforeend", title);

			if (e.body) {

				const body = document.createElement(e.body.tag);
				body.insertAdjacentText("beforeend", e.body.content);

				const pre = document.createElement("pre");
				pre.insertAdjacentElement("beforeend", body);
				item.insertAdjacentElement("beforeend", pre);
			}

			return item;
		});

		const ol = document.createElement("ol");
		listItems.forEach( li => {
			ol.insertAdjacentElement("beforeend", li);
		});

		root.insertAdjacentElement("beforeend", page);
		root.insertAdjacentElement("beforeend", ol);

	});

/* 	

	for (const note of notes) {
		const e = document.createElement(note.tag);
		e.insertAdjacentHTML("beforeend", e.content);
		root.insertAdjacentElement("beforeend", e);
	} */


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
