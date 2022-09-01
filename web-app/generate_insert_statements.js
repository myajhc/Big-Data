const loremIpsum = require("lorem-ipsum")

const numberOfGamess = 30

const sqls = Array.from(Array(numberOfGamess).keys())
	.map(gamesId => {
		const heading = loremIpsum.loremIpsum({ count: 1, units: "sentence" }).replace(/[\r\n]+/g, "");
		const description = loremIpsum.loremIpsum({ count: 5, units: "paragraphs" }).replace(/[\r\n]+/g, "\\n");

		return `INSERT INTO gamess (games, description, heading) VALUES ('sts-${gamesId}', '${description}', '${heading}');`
	})
	.join("\n")

console.log(sqls)