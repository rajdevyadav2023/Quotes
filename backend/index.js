import express from 'express';
import cors from 'cors';


const port = process.env.PORT || 3000;

const app = express();
app.use(cors());

// home quotes
app.get('/', (req, res)=>{
    const homeQuotes = [
        {
            id:1,
            quote:"Be yourself; everyone else is already taken.",
            speaker:"Oscar Wilde"
        },
        {
            id:2,
            quote:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
            speaker:"Marilyn Monroe"
        },
        {
            id:3,
            quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
            speaker:"Albert Einstein"
        },
        {
            id:4,
            quote:"So many books, so little time.",
            speaker:"Frank Zappa"
        },
        {
            id:5,
            quote:"A room without books is like a body without a soul.",
            speaker:"Marcus Tullius Cicero"
        },
        {
            id:6,
            quote:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
            speaker:"Bernard M. Baruch"
        },
        {
            id:7,
            quote:"You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
            speaker:"William W. Purkey"
        },
        {
            id:8,
            quote:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
            speaker:"Dr. Seuss"
        },
        {
            id:9,
            quote:"You only live once, but if you do it right, once is enough.",
            speaker:" Mae West"
        },
        {
            id:10,
            quote:"Be the change that you wish to see in the world.",
            speaker:" Mahatma Gandhi"
        },
        {
            id:11,
            quote:"In three words I can sum up everything I've learned about life: it goes on.",
            speaker:"Robert Frost"
        },
        {
            id:12,
            quote:"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
            speaker:"J.K. Rowling,"
        },
        {
            id:13,
            quote:"Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend",
            speaker:" Albert Camus"
        },
        {
            id:14,
            quote:"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
            speaker:"Maya Angelou"
        },
        {
            id:15,
            quote:"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
            speaker:"Martin Luther"
        },
        {
            id:16,
            quote:"I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.",
            speaker:"Marilyn Monroe"
        }
    ];
    res.send(homeQuotes)
});

// motivational quotes 
app.get("/motivational",(req, res)=>{
    const quotes = [
        {
            id:1,
            quote:"It does not matter how slowly you go as long as you do not stop.",
            speaker:"Confucius"
        },
        {
            id:2,
            quote:"It always seems impossible until it is done.",
            speaker:"Nelson Mandela"
        },
        {
            id:3,
            quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
            speaker:"Thomas A. Edison"
        },
        {
            id:4,
            quote:"If you're going through hell, keep going.",
            speaker:"Winston Churchill"
        },
        {
            id:5,
            quote:"Good, better, best. Never let it rest. Till your good is better and your better is best.",
            speaker:"St. Jerome"
        },
        {
            id:6,
            quote:"Quality is not an act, it is a habit.",
            speaker:"Aristotle"
        },
        {
            id:7,
            quote:"With the new day comes new strength and new thoughts.",
            speaker:"Eleanor Roosevelt"
        },
        {
            id:8,
            quote:"Ever tried. Ever failed. No Matter. Try Again. Fail Again. Fail Better.",
            speaker:"Samuel Beckett"
        },
        {
            id:9,
            quote:"Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
            speaker:"Helen Keller"
        },
        {
            id:10,
            quote:"If you can dream it, you can do it.",
            speaker:"Walt Disney"
        },
        {
            id:11,
            quote:"When something is important enough, you do it even if the odds are not in your favor.",
            speaker:"Elon Musk"
        },
        {
            id:12,
            quote:"Start where you are. Use what you have. Do what you can.",
            speaker:"Arthur Ashe"
        },
        {
            id:13,
            quote:"Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.",
            speaker:"Lao Tzu"
        },
        {
            id:14,
            quote:"A good plan violently executed now is better than a perfect plan executed next week.",
            speaker:"George S. Patton"
        },
        {
            id:15,
            quote:"What you do today can improve all your tomorrows.",
            speaker:"Ralph Marston"
        },
        {
            id:16,
            quote:"The secret of getting ahead is getting started.",
            speaker:"Mark Twain"
        },
        {
            id:17,
            quote:"If you fell down yesterday, stand up today.",
            speaker:"H. G. Wells"
        },
        {
            id:18,
            quote:"Knowing is not enough: we must apply. Willing is not enough; we must do.",
            speaker:"Johann Wolfgang"
        },
        {
            id:19,
            quote:"Always do your best. What you plant now, you will harvest later.",
            speaker:"Og Mandino"
        },
        {
            id:20,
            quote:"Keep your eyes on the stars, and your feet on the ground.",
            speaker:"Theodore Roosevelt"
        },
    ]
    res.send(quotes);
});
// positive quotes
app.get("/positive", (req, res)=>{
    const quotes = [
        {
            id:1,
            quote: "Once you replace negative thoughts with positive ones, you'll start having positive results.",
            speaker:"Willie Nelson"
        },
        {
            id:2,
            quote: "Keep your face to the sunshine and you cannot see a shadow.",
            speaker:"Helen Keller"
        },
        {
            id:3,
            quote: "The most important thing is to try and inspire people so that they can be great in whatever they want to do.",
            speaker:"Kobe Bryant"
        },
        {
            id:4,
            quote: "In order to carry a positive action we must develop here a positive vision.",
            speaker:"Dalai Lama"
        },
        {
            id:5,
            quote: "Correction does much, but encouragement does more.",
            speaker:"Johann Wolfgang"
        },
        {
            id:6,
            quote: "I think anything is possible if you have the mindset and the will and desire to do it and put the time in.",
            speaker:"Roger Clemens"
        },
        {
            id:7,
            quote: "If you're not making mistakes, then you're not doing anything. I'm positive that a doer makes mistakes.",
            speaker:"John Wooden"
        },
        {
            id:8,
            quote: "Believe that life is worth living and your belief will help create the fact.",
            speaker:"William James"
        },
        {
            id:9,
            quote: "When you are enthusiastic about what you do, you feel this positive energy. It's very simple.",
            speaker:"Paulo Coelho"
        },
        {
            id:10,
            quote: "Positive anything is better than negative nothing.",
            speaker:"Albert Einstein"
        },
        {
            id:11,
            quote: "A strong, positive self-image is the best possible preparation for success.",
            speaker:"Joyce Brothers"
        },
        {
            id:12,
            quote: "To succeed, you need to find something to hold on, something to motivate you, something to inspire you.",
            speaker:"Tony Dorsett"
        },
        {
            id:13,
            quote: "I like to encourage people to realize that any action is a good action if it's poaction and there is positive intent behind it.",
            speaker:"Michael J. Fox"
        },
        {
            id:14,
            quote: "The learner always begins by finding fault, but the scholar sees the positive merit in everything.",
            speaker:"Georg W. F. Hegal"
        },
        {
            id:15,
            quote: "I believe in karma. and I believe if you put out positive vibes to everybody, that's all you're going to get back.",
            speaker:"Kesha"
        },
        {
            id:16,
            quote: "A positive attitude is something everyone can work on, and everyone can learn how to employ it.",
            speaker:"Joan Lunden"
        },
        {
            id:17,
            quote: "Say and do something positive that will help the situation; it doesn't take any brains to complain.",
            speaker:"Robert A. Cook"
        },
        {
            id:18,
            quote: "Excellence encourages one about life generally; it shows the spiritual wealth of the world.",
            speaker:"George Eliot"
        },
        {
            id:19,
            quote: "Fortune cookies are a good idea. If the message is positive, it can make your day a little better.",
            speaker:"Yao Ming"
        },
        {
            id:20,
            quote: "I believe if you keep your faith, you keep your trust, you keep the right attitude, if you're grateful, you'll see God open up new doors.",
            speaker:"Joel Osteen"
        },
    ];
    res.send(quotes);
});

// success quotes
app.get("/success", (req, res)=>{
    const quotes = [
        {
            id:1,
            quote: "Success is the sum of small efforts - repeated day in and day out.",
            speaker: "Robert Collier"
        },
        {
            id:2,
            quote: "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.",
            speaker: "Bruce Lee"
        },
        {
            id:3,
            quote: "Success seems to be largely a matter of hanging on after others have let go.",
            speaker: "William Feather"
        },
        {
            id:4,
            quote: "Success consists of going from failure to failure without loss of enthusiasm",
            speaker: "Winston Churchill"
        },
        {
            id:5,
            quote: "Coming together is a beginning; keeping together is progress; working together is success.",
            speaker: "Edward Everett Hale"
        },
        {
            id:6,
            quote: "Victory has a thousand fathers, but defeat is an orphan.",
            speaker: "John F. Kennedy"
        },
        {
            id:7,
            quote: "Success depends upon previous preparation, and without such preparation there is sure to be failure.",
            speaker: "Confucius"
        },
        {
            id:8,
            quote: "However difficult life may seem, there is always something you can do and succeed at.",
            speaker: "Stephen Hawking"
        },
        {
            id:9,
            quote: "Man needs his difficulties because they are necessary to enjoy success.",
            speaker: "A. P. J. Abdul Kalam"
        },
        {
            id:10,
            quote: "When love and skill work together, expect a masterpiece.",
            speaker: "John Ruskin"
        },
        {
            id:11,
            quote: "Success is getting what you want. Happiness is wanting what you get.",
            speaker: "Dale Carnegie"
        },
        {
            id:12,
            quote: "Always bear in mind that your own resolution to succeed is more important than any other.",
            speaker: "Abraham Lincoln"
        },
        {
            id:13,
            quote: "Success isn't measured by money or power or social rank. Success is measured by your discipline and inner peace.",
            speaker: "Mike Ditka"
        },
        {
            id:14,
            quote: "Success is how high you bounce when you hit bottom.",
            speaker: "George S. Patton"
        },
        {
            id:15,
            quote: "If you find it in your heart to care for somebody else, you will have succeeded.",
            speaker: "Maya Angelou"
        },
        {
            id:16,
            quote: "The size of your success is measured by the strength of your desire; the size of your dream; and how you handle disappoitment along the way.",
            speaker: "Robert Kiyosaki"
        },
        {
            id:17,
            quote: "Success is a science; if you have the conditions, you get the result.",
            speaker: "Oscar Wilde"
        },
        {
            id:18,
            quote: "Success is sweet and sweeter if long delayed and gotten through many struggles and defeats.",
            speaker: "Amos Bronson Alcott"
        },
        {
            id:19,
            quote: "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
            speaker: "Dale Carnegie"
        },
        {
            id:20,
            quote: "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come.",
            speaker: "Dwayne Johnson"
        },
    ];

    res.send(quotes);
})

// dreams quotes
app.get("/dreams", (req, res)=>{
    const quotes = [
        {
            id:1,
            quote:"The future belongs to those who believe in the beauty of thier dreams.",
            speaker:"Eleanor Roosevelt"
        },
        {
            id:2,
            quote:"A dream doesn't become reality through magic; it takes sweat, determination and hard work.",
            speaker:"Colin Powell"
        },
        {
            id:3,
            quote:"All our dreams can come true, if we have the courage to pursue them.",
            speaker:"Walt Disney"
        },
        {
            id:4,
            quote:"Yesterday is today's memory, and tomorrow is today's dream.",
            speaker:"Khalil Gibran"
        },
        {
            id:5,
            quote:"You have to dream before your dreams can come true.",
            speaker:"A. P. J. Abdul Kalam"
        },
        {
            id:6,
            quote:"A dreamer is one who can only find his way by moonlight, and his punishment is that he sees the dawn before the rest of the world.",
            speaker:"Oscar Wilde"
        },
        {
            id:7,
            quote:"The best way to make your dreams come true is to wake up.",
            speaker:"Paul Valery"
        },
        {
            id:8,
            quote:"A dream you dream alone is only a dream. A dream you dream together is reality.",
            speaker:"Yoko Ono"
        },
        {
            id:9,
            quote:"The world needs dreamers and the world needs doers. But above all, the world needs dreamers who do.",
            speaker:"Sarah Ban"
        },
        {
            id:10,
            quote:"If you take responsibility for yourself you will develop a hunger to accomplish your dreams.",
            speaker:"Lee Brown"
        },
        {
            id:11,
            quote:"Great dreams of great dreamers are always transcended.",
            speaker:"A. P. J. Abdul Kalam"
        },
        {
            id:12,
            quote:"Only things the dreamers make live on. They are the eternal conquerors.",
            speaker:"Herbert Kaufman"
        },
        {
            id:13,
            quote:"Never give up on your dreams, no matter how painful and difficult your journey is.",
            speaker:"Lisa"
        },
        {
            id:14,
            quote:"We all have our time machines. Some take us back, they're called memories. Some take us forward, they're called dreams.",
            speaker:"Jeremy Irons"
        },
        {
            id:15,
            quote:"Cherish your visions and your dreams as they are the children of your soul, the blueprints of your ultimate achievements.",
            speaker:"Nepoleon Hill"
        },
        {
            id:16,
            quote:"Follow your dreams, believe in yourself and don't give up.",
            speaker:"Rachel Corrie"
        },
        {
            id:17,
            quote:"The path from dreams to success does exist. May you have the vision to find it, the courage to get on to it, and the perseverance to follow it.",
            speaker:"Kalpana Chawla"
        },
        {
            id:18,
            quote:"The biggest adventure you can take is to live the life of your dreams.",
            speaker:"Oprah Winfrey"
        },
        {
            id:19,
            quote:"Belive in yourself and believe in your dreams. Follow them, never give up, that's the most important thing. If you believe you can get there, then one day you will.",
            speaker:"Joao Moutinho"
        },
        {
            id:20,
            quote:"Hope lies in dreams, in imagination , and in the courage of those who dare to make dreams into reality.",
            speaker:"Jonas Salk"
        },
    ];

    res.send(quotes);
});


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})