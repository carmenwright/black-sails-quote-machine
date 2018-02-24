var quotes = [
    "They paint the world full of shadows and then tell their children to stay close to the light. Their light. Their reasons, their judgments. Because in the darkness, there be dragons. But it isn\'t true. We can prove that it isn\'t true. In the dark, there is discovery, there is possibility, there is freedom in the dark. <aside>James Flint</aside>",
    "A story is true, a story is untrue. As time extends, it matters less and less. The stories we want to believe, those are the ones that survive. <aside>Jack Rackham</aside>",
    "The man whose mind I\'d come to know so well; whose mind I had in some ways incorporated into my own. It was a strange experience to see something from it so unexpected. He chose to believe it, because he wasn\'t the man that I\'d come to know at all. But one who had existed beforehand, waking from a long and terrible nightmare. Reorienting to the daylight. <aside>John Silver</aside>",
    "The ghost tells him to pick up an oar and walk inland and keep walking until somebody mistakes that oar for a shovel. For that would be the place where no man had been troubled by the sea and that\'s where he\'d find peace. <aside>James Flint</aside>",
    "People can say what they like about you. But you\'re a good man. More people should say that. And someone should be willing to defend it. <aside>James Flint</aside>",
    "We all have the same swords out there. We all have the same guns. But great art has felled empires. <aside>Jack Rackham</aside>",
    "I fear that the stories I\'ve heard may have clouded the truth more than clarified it. It would seem these monsters are men. <aside>Abigail Ashe</aside>",
    "Never let anyone stand it between you and your ambitions. <aside>Max</aside>",
    "There is no legacies in this life. No monuments, no history. Just the water. It pays us and then it claims us. Swallows us whole. <aside>Hal Gates</aside>",
    "Strange pairs, Lieutenant. They can achieve the most unexpected things. <aside>Thomas Hamilton</aside>",
    "It\'s the art that leaves the mark... But to leave it, it must... transcend. It must speak for itself. It must be true. <aside>Jack Rackham</aside>",
    "I built this from nothing. And none of it is real. Because it is built upon things I cannot control, cannot predict. <aside>Max</aside>",
    "I was married to a man once. Rotten fuck. Raised his hands at me. Burnt me. Shared me with his men. I didn\'t know any different, didn\'t know I could do anything about it. Even if I had, I wouldn\'t have thought I had it in me. One day we were in a tavern... he was hurting me, and a man saw it. And he walked over, and he slit his throat. That was Jack. I was thirteen. I always thought he saved me from something - I\'ve always been so fucking grateful - and then I wonder, maybe Jack took me from something I was supposed to figure my own way out of. Maybe he took away the chance to get strong enough to save myself. <aside>Anne Bonny</aside>",
    "I have done what I have done to arrive at this point. I have done what I\'ve done and I will live with it. But do not for a moment believe that that defines me. <aside>Eleanor Guthrie</aside>",
    "No one prepared you for this, did they? For as long as I can remember, I have been prepared for the day I would take my mother\'s place. To know that from that day forth, I would forever be the one who tends as opposed to the one who is tended to. You\'re frustrated. You\'re angry. You\'re tired. Perhaps no one else knows why. I believe that not even you know why. But I know why. The crown is always a burden. But it cannot be borne if you cannot stand. <aside>Madi Scott</aside>",
    "But I hear other voices. A chorus of voices. Multitudes. They reach back centuries. Men and women and children who lost their lives to men like you. Men and women and children forced to wear your chains. I must answer to them. And this war. Their war. Flint\'s war. My war. It will not be bargained away to avoid a fight. To save John Silver\'s life. Or his mens\'. Or mine. And you believe what you will. But it was neither I, nor Flint, nor the Spanish raider who killed your wife. That -- you did. <aside>Madi Scott</aside>",
    "No need to account for all my life\'s events in the context of a story that somehow defines me. Events, some of which, no one could divine any meaning from other than that the world is a place of unending horrors. <aside>John Silver</aside>",
    "All this will be for nothing. We will have been for nothing. Defined by their histories, distorted to fit into their narrative until all that is left of us are the monsters in the stories they tell their children. <aside>James Flint</aside>",
    "I just missed it. Our life then, when he was alive. I can feel myself forgetting it and I don\'t want to forget it. This place, this life that we\'ve been living here, it doesn\'t feel like living anymore. I can\'t be alone in feeling this way. Some part of you must feel it, too. <aside>Miranda Barlow</aside>",
    "I want to see that noose around your neck and I want to pull that fucking lever with my own two hands. <aside>Miranda Barlow</aside>",
    "I feared the man I was about to create. I feared that someone born of such dark things would consume me were I not careful. And I was determined only to wear him for a while and then dispose of him when his purpose was complete. And I thought of that story. Am I ready to let him go?  Truth is... every day I\'ve worn that name I\'ve hated him a little more. I\'ve been ready to return him to the sea for a long time. <aside>James Flint</aside>",
    "It is some kind of hell to be forced to choose one irreplaceable thing over another. <aside>John Silver</aside>",
    "Thomas, he sees only the principle. The right. It\'s inspiring. It can be intoxicating. It\'s why I love him. But you, you see the world as it is. You see its truths and how to navigate them. How to bend them to your will. It\'s why I love you. Men like Thomas need men like you. To protect them from the world. And that is what I am asking you to do. <aside>Miranda Barlow</aside>",
    "These men convinced you that they speak for you. That the power you\'ve given them is used in your interests. That the prisoner before you is your enemy and they your friends. For those of you who live to see tomorrow know that you had a choice to see the truth and you let yourselves be convinced otherwise. <aside>Charles Vane</aside>"
];

function getQuote() { //Corresponds to the button onClick() in the HTML
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById('quoteBlock').innerHTML = quotes[randomNumber];
};

function tweetQuote() { //Corresponds to the button onClick() in the HTML
  var generatedQuote = document.getElementById('quoteBlock').innerHTML;
  var tweetUrl = ' https://twitter.com/intent/tweet?text=' + encodeURIComponent(generatedQuote) + ' @estivaldawn';
   window.open(tweetUrl);
};