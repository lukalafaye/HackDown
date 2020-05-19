---
title: Get Started
layout: post
categories: Wiki
---

## Introduction

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.md` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

### Use markdown to edit all your blogs

### Headings

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------

### Emphasis

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

### Lists

#### Ordered lists

Using numbers, we can create ordered lists:

1. First item
2. Second item
  - sub item
3. Third item
4. Fourth item
  - sub item
  - sub item

> Note that instead of "-", we can also use an asterix or plus sign. We can use any number for ordered lists. However, in order to be clearer, you should use natural consecutive numbers

#### Unordered sub-list

- First item
- Second item
  - sub item
  - Third item
- Third item
- Fourth item
  - sub item
  - sub item

### Links

Links use the following structure:
(Google's Homepage is displayed when you hover the link)

[link title](www.google.com "Google's Homepage")

### Images

Images are displayed using this notation:

![alt text](http://www.nasa.gov/sites/default/files/1-bluemarble_west.jpg)

Images are scaled to take up at most 110% of the container width. If they are smaller, they will be centered to fit.

### Code and Syntax Highlighting

Code blocks are part of the Markdown spec, but syntax highlighting isn't. However, this template support syntax highlighting.

Inline `code` has `back-ticks around` it.

Blocks of code are either fenced by lines with three back-ticks , or are indented with four spaces. I recommend only using the fenced code blocks -- they're easier and only they support syntax highlighting.

#### Code snippets

```js
const fibonacci = n =>
  Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );                              
```
<br>
```python
import math
s = "Python syntax highlighting"
print(s)
for i in range(10):
  print("SQRT of " + str(i) + " = " + str(math.sqrt(i)))
```
<br>
```c
#include <string.h>

char *reverse (char *message);

int main(int argc, char *argv[]) {
    char * message = "test";
    printf("%s\n", message);
    printf("%s\n", reverse(message));
    printf("Type in message to be reversed:\n");
    int unused = scanf("%s", message);
    unused++;
    printf("%s\n", message);
    char * reverseString = reverse(message);
    printf("%s\n", reverseString);   
    return EXIT_SUCCESS;
}

char * reverse (char * message) {
    char * reverseString[strlen(message)] = 0;
    char temp;
    int i = 0;
    printf("%c\n",message[i-1]);
    while(i < strlen(message)){
        printf("%s\n", reverseString);
        temp = message[i];
        reverseString[strlen(message)-i-1] = temp;
        printf("%s\n", reverseString);
    }
    printf("%s\n", reverseString);
    return reverseString;
}
```

### Tables

Go to this site : [tablesgenerator.com/markdown_tables](https://www.tablesgenerator.com/markdown_tables#)

and click on Table. Then choose the number of columns and rows you want. When you are finished, click on "generate" and after "copy to clipboard". You can then paste the table using CTRL V or simply right click, paste.

Tables aren't part of the core Markdown spec, but they are part of GFM and Markdown Here supports them. They are an easy way of adding tables to your email -- a task that would otherwise require copy-pasting from another application.

Markdown | is        | Awesome
---      | ---       | ---
*italic* | `code`    | **bold**
1        | 2         | 3

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

> Colons can be used to align columns

### Bloc quotes

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.

### Horizontal Rule

Three or more...

---

Hyphens

***

Asterisks

___

Underscores

### Line breaks

Skip one line to break it. You can also use the html tag br.

### Youtube videos

```
[![IMAGE ALT TEXT HERE](https://myob-gm-digital-production-blog-assets.s3.amazonaws.com/uploads/2012/07/Video_sml.jpg)](https://www.youtube.com/watch?v=-wkr_vf18cw)
```

MarkDown way:

[![IMAGE ALT TEXT HERE](https://myob-gm-digital-production-blog-assets.s3.amazonaws.com/uploads/2012/07/Video_sml.jpg)](https://www.youtube.com/watch?v=-wkr_vf18cw)

HTML:
<iframe width="854" height="480" src="https://www.youtube.com/embed/-wkr_vf18cw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Style

You can have **strong**, *italic*, both ***strong and italic*** or ~~strikethrough~~ text.

### Latex

You can include math into your posts by surrounding the latex by `\$$...\$$`, or if you're sing ASCII math, by escaped back ticks:

\$$\Gamma \left( x \right) = \int\limits_0^\infty {s^{x - 1} e^{ - s} ds}\$$
