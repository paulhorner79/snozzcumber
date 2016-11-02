// http://jasmine.github.io/2.5/introduction
// http://jasmine.github.io/2.5/custom_matcher.html

describe("Snozzcumber", function() {
    require('../dist/snozzcumber');
    var snozzcumber;

    beforeEach(function() {
        snozzcumber = new Snozzcumber();
    });
    describe("When the library is initiated", function() {
        it("has default values", function() {
            expect(snozzcumber.min_phrases).toEqual(1);
            expect(snozzcumber.max_phrases).toEqual(10);
            expect(snozzcumber.p_count).toEqual(4);
        });
        it("contains some output", function() {
            expect(snozzcumber.output.length).toBeGreaterThan(5);
        });
    });
    describe("When phrase is called", function() {
        it("returns a new phrase", function() {
            var phrase1 = snozzcumber.phrase();
            var phrase2 = snozzcumber.phrase();
            expect(phrase1).not.toEqual(phrase2);
        });
    });
    describe("When paragraph is called", function() {
        it("returns a new paragraph", function() {
            var p1 = snozzcumber.paragraph();
            var p2 = snozzcumber.paragraph();
            expect(p1).not.toEqual(p2);
        });
    });
    describe("When paragraphs is called", function() {
        it("returns an array containing the correct number of paragraphs", function() {
            var paragraphs = snozzcumber.paragraphs(6);
            var c = paragraphs.length;
            expect(c).toEqual(6);
        });
    });
    describe("When toHtml is called", function() {
        it("returns the correct number of HTML paragraphs for the array", function() {
            snozzcumber.paragraphs(4);
            var o  = snozzcumber.toHtml();
            var c1 = (o.match(/<p>/g) || []).length;
            var c2 = (o.match(/<\p>/g) || []).length;
            expect(c1).toEqual(4);
            expect(c2).toEqual(4);
        });
        it("wraps the string in a HTML paragraph", function() {
            snozzcumber.phrase();
            var o  = snozzcumber.toHtml();
            var c1 = (o.match(/<p>/g) || []).length;
            var c2 = (o.match(/<\p>/g) || []).length;
            expect(c1).toEqual(1);
            expect(c2).toEqual(1);
        });
    });
});
