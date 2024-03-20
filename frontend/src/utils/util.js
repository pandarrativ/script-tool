export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

export const formatWidgetTime = (timestamp) => {
    const date = new Date(timestamp);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const formatted = [
      String(date.getHours()).padStart(2, '0'),
      String(date.getMinutes()).padStart(2, '0'),
      String(date.getDate()).padStart(2, '0'),
      months[date.getMonth()]
    ].join(' ').replace(' ', ':');

    return formatted;
}

export const promptQuestions_one =  [
    {
        question:"What is a Logline?",
        answer:"A logline is a one-sentence summary or description of a movie. Loglines distill the essential elements of your screenplay—the main character, setup, central conflict, plot points, antagonist—into a concise teaser. The goal is to write an enticing synopsis to hook the reader into reading the entire script. ",
    },
    {
        question:"4 Primary Parts of Logline",
        answer:`While there is room for creativity in writing a logline, a good logline will always have the following four elements: 
        [protagonist] + [inciting incident] + [protagonist’s goal] + [central conflict]
        It is not necessary that your logline read in this exact order. For instance, you can describe the central conflict before you list your protagonist’s goal, or slot your inciting incident near the end of your logline. However you decide to structure your logline, these four components should be clearly defined.`,
    },
    {
        question:"How Many Words In a Standard Logline?",
        answer:`Common industry practice dictates that loglines are only one sentence long. Some screenwriting gurus even cap loglines at 30 words. That said, an effective logline can be as long as a couple of sentences, especially if it’s a complicated film.`,
    },
    {
        question:"What is the Difference Between a Logline and a Tagline?",
        answer:`While loglines and taglines are both designed to pique the reader’s interest in a movie, they have different structures and serve two different purposes. A logline is short description of a movie’s premise, used to attract producers or agents to a script. A tagline, meanwhile, is a witty slogan or dramatic statement, used to advertise a finished film to moviegoers. In other words, loglines are descriptive, while taglines are provocative.
        To illustrate the difference between a logline and a tagline, consider examples of each for Back to the Future:
        Logline: “A young man is transported to the past, where he must reunite his parents before he and his future cease to exist.” 
        Tagline: 17-year-old Marty McFly got home early last night—30 years early.
        `,
    },
    {
        question:"Examples of Loglines From Famous Films",
        answer:`The best way to learn how to write a great logline is to get familiar with the loglines of successful films. These logline examples pit strong characters against even stronger antagonists for a compelling one-sentence read. 
        1. Little Miss Sunshine: When a wannabe child beauty queen learns that a spot has opened up in the “Little Miss Sunshine” pageant, she convinces her dysfunctional family to make the cross-country trek, despite her father’s (and society’s) protestations that she may not have what it takes to win. 
        2. Star Wars: Episode IV - A New Hope: When an optimistic farm boy discovers that he has powers, he teams up with other rebel fighters to liberate the galaxy from the sinister forces of the Empire. 
        3. Titanic: Two star-crossed lovers fall in love on the maiden voyage of the Titanic and struggle to survive as the doomed ship sinks into the Atlantic Ocean. 
        4. Finding Nemo: When his son is swept out to sea, an anxious clownfish embarks on a perilous journey across a treacherous ocean to bring him back. `,
    },
    {
        question:"3 Tips for Writing the Perfect Logline",
        answer:`Writing a great logline is a craft in and of itself. Take time to practice multiple variations of your logline, keeping the following tips in mind:
        1. Clearly lay out the narrative (but not the ending!). A good logline clearly and succinctly lays out the dramatic narrative of a screenplay and hooks the reader, enticing them to read the entire script. For this reason, a logline never gives away the ending. 
        2. Use active and visual language. Good loglines use active language that articulate the visual possibilities for the film. Words like “struggles,” “journeys,” and “fights” are much more intriguing to read in a logline than “learns, “wonders,” or “comes to find out.” 
        3. Hone in on the irony of the premise. The best loglines contain a sense of irony. Irony draws the reader in and tells us that we are in for an unexpected and unconventional story. For example, the logline for Erin Brockovich contains a sense of irony between who the proganoist is and her goal: “An unemployed single mom gets a job as a legal assistant so that she can take down a Californian power company that is polluting a city’s water supply.” If Erin Brockovich was an accomplished attorney and not an unemployed single mother, the story (and logline) would be less compelling. `,
    }
];

export const promptQuestions_two = [
    {
        question:"What Is a Beat Sheet",
        answer:`A beat sheet is the precursor to a screenplay outline: it identifies the important moments in an episode or feature film, and lays out what needs to happen in each act of the story. The beat sheet identifies the key emotional moments in a story, while the outline expands on those moments with specific scenes, settings, and details.
        There are a variety of methods you can use to create a beat sheet:
        Divide a sheet of paper into three sections (representing the three acts of a feature screenplay) or five sections (representing the five acts of a television script). 
        Use a whiteboard to diagram your story beats. 
        Write each beat on an index card, then pin them to a cork board or arrange them on a table. 
        Use outlining tools on a computer program like Final Draft to create and arrange your beats. 
        In general, feature-length screenplays have roughly 15 major story beats. Typically, comedies are frequently around 90 pages while dramas tend to be around 120 pages. Divide the number of beats by the number of pages, and you’ll have a good sense of your story’s pacing.`,
    },
    {
        question:"How to Create a Beat Sheet in 12 Steps",
        answer:`Every screenwriter approaches their beat sheet a bit differently, but in general, the goal is to separate your story into either three or five acts, and move the story through those acts with beats. Here are 12 story beats to incorporate into your beat sheet.
        1. Opening image. A short description of the very first moment or event people will see. Strive for an exciting opening that makes people lean in and sets the tone for the story you’re telling. 
        2. Introduction. One or more beats in which your characters and setting come into clear focus. Who is the main character? What does she want? What is holding her back from getting it? 
        3. Statement of theme. What is your film about? This is the opportunity to show the audience. 
        4. Catalyst. This is the moment in which the main character either actively sets out to achieve her goals, or is forced to go down the path plotted for her. Think of the most extreme thing that can happen to your characters, make it happen, and go from there. 
        5. Debate. However, even great characters have their doubts. The main character might need to confer with other characters, or do some soul-searching, before embarking on her journey. 
        6. B-Story or B-Plot. The best time to introduce a secondary plot is roughly towards the end of the first act. The audience will now be familiar with the main character, her world, and her plight, and therefore should be more invested in the other goings-on that may affect the story. The B-Plot often carries the first act through to the second act. 
        7. New characters. As the main character goes through the story, she will likely meet other characters who help or hurt her. This opportunity for one or more new characters, which should come towards the first half of the second act, allows a writer to deepen the conflict and increase tension in the narrative. 
        8. Midpoint. Exactly halfway through your story. The characters have made their decisions, and now reality sets in. 
        9. Low point. Just as as the main character seems to be within reach of her goal, something happens that derails her progress or makes her question her journey. A sense of despair or confusion may set in. 
        10. Climax. This is the big moment in which the action spikes and everything that you’ve set up before now comes to a head. In a traditional action film, the climax might be a big chase or fight scene. In short, the climax should show your main character just within reach of her goal. 
        11. Beginning of the end. Once the main character has reached her goal (or come up short), the story begins to wind down. Any secondary storylines should start coming to a close. 
        12. Finale. The final scene viewers will see. This should cap off the theme of the story, and leave your audience with a sense of how your protagonist has grown through the events of the film.`,
    },
    {
        question:"How Should You Format Your Beat Sheet?",
        answer:`You can format your beat sheet any way you choose and include as much description as you’d like, but it’s typical to keep your beats concise and clearly labeled. For instance, the first few beats of a beat sheet might look something like this:
        Opening Image: Page 1. Wide shot of Chicago zooms in on ESTHER, a 35-year-old woman, entering a studio apartment. She casually picks up a phone call from someone listed as “Sis In Law”. Esther begins to silently sob. 
        Introduction: Pages 3-4. Esther is out of the office and her assistant can’t keep up with the workload. 
        Catalyst: Pages 6-8. Funeral at a rundown cemetery. Esther’s sister has mysteriously died. Esther must decide if she will continue her life as high-powered executive in Chicago, or move back home to take care of her nieces and find out what happened to her sister. 
        A final beat sheet should give the complete rundown of a story. A beat sheet is a functional document, not a creative one, so you shouldn’t tease information or leave any questions unanswered. For instance, while building your beat sheet, instead of writing, “Midpoint: Betty faces a tough decision about her future. What will she do?” you could say, “Midpoint: Betty decides to give up her opportunity to attend ballet school so that she can care for her sick mother.”`,
    },
    {
        question:"A Different Kind of Screenplay Beat: Beats as Pauses",
        answer:`Occasionally, you may see the word beat used in the actual text of a screenplay. This is a different screenwriting technique, unrelated to the sense of “beat” as an important moment in the story. In this technique, the word “beat” is used to denote the timing of a pause in the dialogue or action. 
        This type of pause often appears in the scene description or action lines. For instance: 
        KEVIN So what are you going to do?
        CHARLOTTE The only thing I can do.
        Charlotte stares out the apartment window. Beat.
        CHARLOTTE It’s time she knew who her real mother is.
        Alternatively, you may see the word beat used as a parenthetical in the middle of a line of dialogue:
        KEVIN So what are you going to do?
        CHARLOTTE The only thing I can do.
        (beat)
        It’s time she knew who her real mother is.
        The screenwriter will use this technique to help the script reader envision a scene in their mind. Alternatively, a writer may include these pauses in a shooting script to help actors deliver their lines as intended. 
        To minimize confusion, many screenwriters will opt to write “pause” instead of “beat” when they want a quiet moment in the screenplay. `,
    }
];