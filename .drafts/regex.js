const ChLstRE = /(?<Number>[1-9]\.) (?<BoldStart>__)(?<TitleText>[A-Z][a-z]* [A-Z][a-z]*)(?<Subtext>\s.[A-Z][a-z]*.)?:(?<BoldEnd>__)/gm;

/*
-	Alternative syntax using RegExp constructor:
	const ChLstRE = new RegExp(
		'(?<Number>[1-9]\\.) (?<BoldStart>__)(?<TitleText>[A-Z][a-z]* [A-Z][a-z]*)(?<Subtext>\\s.[A-Z][a-z]*.)?:(?<BoldEnd>__)', 'gm'
		)
*/

const str = `1. __Simple Checklist:__
	- [x] Checked/Completed Item
	- [ ] Unchecked/Todo Item

2. __Nested Checklist (Bullets):__
	- Checklist \$BulletName1
		- [x] Completed Item
		- [ ] Incomplete Item
	- Checklist \$BulletName2
		- [ ] Incomplete Item
		- [ ] Incomplete Item

3. __Nested Checklist (Numbered):__
	1. Checklist 1
		- [x] Completed Item
		- [ ] Incomplete Item
		- [x] Completed Item
	2. Checklist 2
		- [ ] Incomplete Item
		- [x] Completed Item

4. __Nested Checklist (Todo):__
	- [ ] Incomplete "Todo" Checklist 1
		- [x] Completed Item
		- [ ] Todo Item
	- [x] Completed "Todo" Checklist 2
		- [x] Completed Item
		- [x] Completed Item
		- [x] Completed Item`;
const subst = `### $3$4:`;

// The substituted value will be contained in the result variable
const result = str.replace(regex, subst);

console.log('Substitution result: ', result);