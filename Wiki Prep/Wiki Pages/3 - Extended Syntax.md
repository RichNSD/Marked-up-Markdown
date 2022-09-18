__GitHub-Supported Markdown__
# Extended Syntax

There are actually multiple extensions to the Markdown language, however the "Extended Syntax" is proobably the most commonly supported by most of the major Markdown Processors (in this case, GitHub's). For the full list of extended syntax, see the official [Extended Syntax Webpage](https://www.markdownguide.org/extended-syntax/) on [The Markdown Guide](https://www.markdownguide.org/), where you can find guides to the other Markdown extensions including:
- CommonMark
  - Basic Markdown standard & extended syntax
- GitHub Flavored Markdown (GFM)
  - A *much* more in-depth guide to GitHub's Markdown Syntax
- Markdown Extra
  - A PHP-Based Markdown Extension
- MultiMarkdown
  - Advanced Extended Syntax
- RMarkdown
  - Notebook/Analysis-focused syntax designed to be used in conjunction with programming languages and/or easily converted into other document formats

<br />

-----

<br />

# Syntax Highlighting

You can actually add syntax highlighting to your code blocks by simply adding the name of the language after the first set of tripple-backticks ``` ` ```. This is actually the method that will be used to demostrate all of the Markdown syntax throughout the Wiki.

### Syntax

```markdown
	```javascript
	function() {
		alert("Sample JavaScript");
	}
	
	// The indent was necessary in order to output the nested code block
	```
```

### Output

```javascript
function() {
	alert("Sample JavaScript");
}

// The indent was necessary in order to output the nested code block
```

<br />

# Tables

Tables in Markdown can actually get quite complicated if you know what you're doing- even with the restrictions of the GitHub processor. Between Extended Syntax and HTML support, you can add a lot of formatting to a GitHub table without having to use any CSS (since GitHub essentially strips almost all CSS before it posts).

## Tables P1: Formatting

Tables are relatively simple to make. They start with a header row that requires a __minimum of *three* pipes__ `|` with the words of the __required minimum *two* columns__ placed between them, like so:

```markdown
| Column 1 | Column 2 |
```

Immediately following them, on the next line, in the same fashion as the header row, __a minimum of *three* dashes__ `-` between __*three* pipes__ `|` will separate the header from the table content, and thus start the table:

```markdown
| Column 1 | Column 2 |
|----------|----------|
```

After the header is established, the rest of the table does __not__ need to be separated with dashes, only the columns requre separation with pipes.

## Tables P2: Clean Format

The *clean* syntax is when one lines up the pipes perfectly in a vertical line, as follows:

### Syntax

```markdown
| Column 1   | Column 2         |
|------------|------------------|
| Item 1     | Description      |
| Item 2     | Description      |
| Item 3     | Description      |
```

### Output

| Column 1   | Column 2         |
|------------|------------------|
| Item 1     | Description      |
| Item 2     | Description      |
| Item 3     | Description      |


<br />

# Checklists

Markdown supports more than just Ordered (numbered) and Unordered (bulleted) lists. You can also create checklists using the following syntax:

## Checklist Syntax

```markdown
### Simple Checklist:
- [x] Checked/Completed Item
- [ ] Unchecked/Todo Item

### Nested Checklist (Bullets):
- Checklist $BulletName1
	- [x] Completed Item
	- [ ] Incomplete Item
- Checklist $BulletName2
	- [ ] Incomplete Item
	- [ ] Incomplete Item

### Nested Checklist (Numbered):
1. Checklist 1
	- [x] Completed Item
	- [ ] Incomplete Item
	- [x] Completed Item
2. Checklist 2
	- [ ] Incomplete Item
	- [x] Completed Item

### Nested Checklist (Todo):
- [ ] Incomplete "Todo" Checklist 1
	- [x] Completed Item
	- [ ] Todo Item
- [x] Completed "Todo" Checklist 2
	- [x] Completed Item
	- [x] Completed Item
	- [x] Completed Item
```

## Checklist  Output

### Simple Checklist:
- [x] Checked/Completed Item
- [ ] Unchecked/Todo Item

### Nested Checklist (Bullets):
- Checklist $BulletName1
  - [x] Completed Item
  - [ ] Incomplete Item
- Checklist $BulletName2
  - [ ] Incomplete Item
  - [ ] Incomplete Item

### Nested Checklist (Numbered):
1. Checklist 1
   - [x] Completed Item
   - [ ] Incomplete Item
   - [x] Completed Item
2. Checklist 2
   - [ ] Incomplete Item
   - [x] Completed Item

### Nested Checklist (Todo):
- [ ] Incomplete "Todo" Checklist 1
  - [x] Completed Item
  - [ ] Todo Item
- [x] Completed "Todo" Checklist 2
  - [x] Completed Item
  - [x] Completed Item
  - [x] Completed Item