Snozzcumber = function () {
    /**
     * An array of phrases used to generate the text.
     * @type {Array}
     */
    this.phrases = [
        "One of the biggest chatbags is the cattlepiddlers.",
        "They is argying all the time about who is going to be the prettiest butterfly.",
        "I is showing you now who is going to eat you up if they is ever catching even one tiny glimp of you.",
        "But human beans is squishing each other all the time.",
        "They is shootling guns and going up in aerioplanes to drop their bombs on each other's heads every week.",
        "Upgoing bubbles is a catasterous disastrophe!",
        "Giants is never dying.",
        "Mostly us giants is simply going on and on like whiffsy time-twiddlers.",
        "Here is the repulsant snozzcumber!",
        "I squoggle it! I mispise it! I dispunge it!'",
        "Human beans is juicier.",
        "You is talking rommytot.",
        "'I is gunzleswiped!' shouted the Meatdripper.",
        "'I is fluckgungled!' screamed the Maidmasher.",
        "'I is slopgroggled!' squakwed the Gizzardgulper.",
        "'I is crodsquinkled!' yowled the Bloodletter.",
        "'I is nervous myself' the BFG whispered.",
        "I always gets as jumpsy as a joghopper when the Fleshlumpeating Giant is around.",
        "'I knows where there is a bagglebox for boys!' shouted the Gizzardgulper.",
        "All I has to do is reach in and grab myself a handful! English boys is tasting extra lickswishy.",
        "'If you do go back you will be telling the world' said the BFG 'most likely on the telly-telly bunkum box and the radio squeaker.'",
        "It's made of re-inscorched steel. If they try to bite through that their teeth will splinter like spillikins.",
        "'It's disgusterous!' the BFG gurgled.",
        "It's sickable! It's rotsome! It's maggotwise!",
        "Try it yourself this foulsome snozzcumber!",
        "It's a vermicious Knid! Oh just look at its vermicious gruesome face!",
        "'Oh you Knid you are vile and vermicious' cried Mr Wonka.",
        "You are slimy and soggy and squishous!",
        "'Save our souls!' bellowed the Fleshlumpeater.",
        "Sound the crumpets! ... The teeth of the dreadly viper is still sticking into me!",
        "I am having a giganticus plan for getting rrrid of every single child in the whole of Inkland!",
        "I is needing to listen only to silence when I is mixing up such a knotty plexicated dream as this.",
        "The filthy old fizzwiggler!",
        "That is the horridest thing I is hearing for years!",
        "'The Queen of England' Sophie said. 'You can't call her a squifflerotter or a grinksludger!'",
        "You can't call her a squeakpip or a notmucher either." ,
        "The greatest moment of my life is coming up now! I mustn't bish it. I mustn't bosh it! I must keep very calm.",
        "This one is a nasty fierce bogrotting nightmare.",
        "I would be hating to get this one inside me on a darksome night.",
        "'What a funny dream' Sophie said. 'It's a ringbeller' the BFG said. 'It's whoppsy.'" ,
        "'You must not be giving up so easy' the BFG said calmly.",
        "The first titchy bobsticle you meet and you begin shouting you is biffsquiggled.",
        "A walnut fresh from the tree is scrumptious-galumptious so flavory-savory so sweet to eat that it makes me all wobbly just thinking about it.",
        "All around them lay the vast black ocean deep and hungry.",
        "Little waves were bibbling against the side of the peach.",
        "At the witchy hour of gloomness.",
        "All the grobes come oozing home.",
        "Dreams is not like human beans or animals.",
        "They has no brains. They is made of zozimus.",
        "Every human bean is diddly and different.",
        "Some is scrumdiddlyumptious and some is uckyslush.",
        "George was especially tired of having to live in the same house as that grizzly old grunion of a Grandma.",
        "I is very fond indeed of English school-chiddlers.",
        "They has a nice inky-booky flavour.",
        "I must say it's quite an experience' Sophie said. 'It's a razztwizzler' the BFG said. 'It's gloriumptious.'",
        "I thought all human beans is full of brains but your head is emptier than a bundongle.",
        "I'll bet if you saw a fat juicy little child paddling in the water over there at this very moment you'd gulp him up in one gollup!",
        "If I is giving a girl's dream to a boy, the boy would be waking up and thinking what a rotbungling grinksludging old dream that was.",
        "In the quelchy quaggy sogmire",
        "In the mashy mideous harshland...",
        "It's a funny thought' Sophie said. 'Exunckly' the BFG said.",
        "Here I come you grizzly old grunion! You rotten old turnip! You filthy old frumpet!",
        "Now hang on a mintick.",
        "She's a Minus no longer! She's a lovely Plus! She's as plussy as plussy can be!",
        "So start to run! Oh skid and daddle",
        "Through the slubber slush and sossel!",
        "Skip jump hop and try to skaddle!",
        "All the grobes are on the roam!",
        "So what you soldiers has to do is to creep up to the giants while they is still in the Land of Noddy and tie their arms and legs with mighty ropes and whunking chains.",
        "Spiders is also talking a great deal.",
        "You might not be thinking it but spiders is the most tremendous natterboxes.",
        "The fact that it was none other than Boggis's chickens they were going to eat made them churgle with laughter every time they thought of it.",
        "'What is you doing here with all these grotty twiglets!' he bellowed. 'You is making me very suspichy.'",
        "The one waiting for you down there is the fearsome Gruncher the Red-Hot Smoke-Belching Gruncher.",
        "He grunches up everything in the forest.",
        "Whenever I is feeling a bit scrotty' the BFG said 'a few gollops of frobscottle is always making me hopscotchy.'",
        "You is not fit to be a giant!",
        "You is a squinky little squiddler!",
        "You is a pibbling little pitsqueak.",
        "You is saying it is grizzling and horrigust for giants to be eating human beans right or left?",
        "The snozberries taste like snozberries!",
        "Never grow up...always down.",
        "You'll never get anywhere if you go about what-iffing like that.",
        "It's impossible to make your eyes twinkle if you aren't feeling twinkly yourself"
    ];

    this.min_phrases = 1;
    this.max_phrases = 10;
    this.p_count     = 4;
    this.output      = "";

    // build a sentence when setting up the library so that we have some data
    this.phrase();
};

/**
 * Sets the number of paragraphs to return.
 *
 * @param  {Integer} n If this is not a positive integer it will revert to the
 *                     previously set value (defaulting to 4).
 * @return {Integer}
 */
Snozzcumber.prototype.paragraphCount = function (n) {
    if (n === undefined || parseInt(n) === 'NaN' || parseInt(n) < 1) {
        n = this.p_count;
    }
    this.p_count = n;
    return this.p_count;
};

/**
 * Pick a random value from an array.
 *
 * @param  {Array} array
 * @return {Mixed}
 */
Snozzcumber.prototype.random = function (array) {
    return array[Math.floor(Math.random() * array.length)];
};

/**
 * Returns a single phrase.
 *
 * @return {String}
 */
Snozzcumber.prototype.phrase = function () {
    var phrase = this.random(this.phrases);
    // don't return the same phrase twice
    while (phrase == this.output) {
        phrase = this.random(this.phrases);
    }
    this.output = phrase;
    return this.output;
};

/**
 * Return a random number of phrases to use in a paragraph.  This is based on
 * the `min_phrases` and `max_phrases`.
 *
 * @return {Integer}
 */
Snozzcumber.prototype.phraseCount = function () {
    var list = [];
    for (var i = this.min_phrases; i <= this.max_phrases; i++) {
        list.push(i);
    }
    return this.random(list);
};

/**
 * Returns a single paragraph
 *
 * @return {String}
 */
Snozzcumber.prototype.paragraph = function () {
    var paragraph = "";

    for (var i = 0; i < this.phraseCount(); i++) {
        if (i === 0) {
            paragraph = this.phrase();
        } else {
            paragraph = paragraph + " " + this.phrase();
        }
        i++;
    }
    this.output = paragraph;
    return this.output;
};

/**
 * Returns a list of n paragraphs.  If the value passed is left blank it will
 * use the values set against the Snozzcumber object.
 *
 * @param  {Integer} n The number of paragraphs to return.
 * @return {Array}
 */
Snozzcumber.prototype.paragraphs = function (n) {
    this.paragraphCount(n);
    var paragraphs = [];

    for (var i = 0; i < this.p_count; i++) {
        paragraphs.push(this.paragraph());
    }
    this.output = paragraphs;
    return this.output;
};

/**
 * Returns the output variable as a HTML formatted string. This basically means
 * that if it's a string it wraps it in `<p>...</p>`, and if it's an array it
 * joins it together and puts the tags in.
 *
 * @return {String}
 */
Snozzcumber.prototype.toHtml = function () {
    if (Array.isArray(this.output)) {
        // if output is an array, loop through and add `<p>` tags.
        var output = '';
        for (var i = 0; i < this.output.length; i++) {
            output = output + '<p>' + this.output[i] + '</p>';
        }
        return output;
    } else {
        // if output is a string, put opening and closing `<p>` tags around it.
        return '<p>' + this.output + '</p>';
    }
};
