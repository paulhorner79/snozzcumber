# Snozzcumber Dummy Text Generator

This is yet another dummy text generator.  But this one uses phrases from Roald
Dahl stories.

![Fantastic Mr. Fox](https://raw.githubusercontent.com/paulhorner79/snozzcumber/master/lib/example/media/mrfox.png "Fantastic Mr. Fox")

If like me you use a lot of dummy text when building your projects, but hate
seeing "Lorem Ipsum" all over your pages, this might be for you.  It generates
real-looking, fun text drawn from an array of Roald Dahl books.

> I realise that this means that there might be some copyright issues here.
This was developed as a bit of fun, and certainly not for commercial gain. If
you are the copyright holder and want this removing from circulation please
contact me and I'll remove it as soon as possible.

The phrases were taken from the following webpages:

- https://www.google.co.uk/amp/m.huffpost.com/us/entry/us_57d74c2de4b09d7a687f6b35/amp
- http://www.stylist.co.uk/books/the-greatest-roald-dahl-book-quotes-for-all-moments-in-adult-life

Any inaccuracies are theirs and not mine!

To see this in action, please visit https://paulhorner79.github.io/snozzcumber/.


## Getting Started

This can be installed using NPM.

```bash
npm install --save snozzcumber
```

Or download it and use it in the browser.

```html
<script src="/your/js/path/snozzcumber/dist/snozzcumber.min.js"></script>
```
There are no dependencies at runtime, but you will need to run `npm install` to
load the dev dependencies (and run the gulp commands to build/test it).

To use the library, simply create a new `Snozzcumber` object, and call the
various API methods to get access to the data.

```javascript
// create a new Snozzcumber instance
var snozzcumber = new Snozzcumber;
// return a single phrase (returns a string)
snozzcumber.phrase();
// return a single paragraph (returns a string)
snozzcumber.paragraph();
// return 4 paragraphs (returns an array)
snozzcumber.paragraphs();
// change the number of paragraphs to return (returns an array of paragraphs)
snozzcumber.paragraphs(12);
// return the last item generated again (a string or array)
snozzcumber.output();
// return the last record as an HTML string
snozzcumber.toHtml();
```

## API

### `.phrase();`

Returns a single phrase from the list at random.  The phrase will be added to
the `output` value so that the next call to `.toHtml();` will return a HTML
version of the phrase.

### `.paragraph();`

Returns a single paragraph. A paragraph contains between 1 and 10 phrases
selected at random.

The returned paragraph will be added to the `output` value so that the next
call to `.toHtml();` will return a HTML version of the paragraph.

### `.paragraphs(n);`

Returns an array of `n` paragraphs.  The parameter can be left blank to use the
previous value set, or 4 if no value has previously been set.

The returned array will be added to the `output` value so that the next
call to `.toHtml();` will return a HTML string version of the array.

### `.toHtml();`

Returns a HTML string representation of the last object returned by
`.phrase()`, `.paragraph()`, or `.paragraphs()`.


## Tests

A small number of Jasmine tests are in `spec/test.js`.  These can be run
with the simple command:

```bash
jasmine
```
