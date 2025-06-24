import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ENV_VAR || "default_key" 
});

// Fallback story generation templates
const STORY_TEMPLATES = {
  Fantasy: {
    themes: {
      "Love conquers all": {
        titles: ["Hearts of the Enchanted Realm", "Love Beyond Magic", "The Spellbound Romance"],
        plotTemplates: [
          "In the realm of Aethermoor, where floating cities are powered by crystallized magic and the sky itself bleeds different colors at dawn, {character} lives a simple life maintaining the crystal gardens that keep their city aloft. But when they accidentally touches an ancient artifact during routine maintenance, they discover they can absorb and manipulate pure magical energy—a gift that hasn't been seen in over a thousand years. This discovery attracts the attention of both the benevolent Sky Council and the shadowy Void Cult, who believe {character} is the prophesied Aether-Walker capable of either saving or destroying all the floating realms. As political tensions escalate between the cities and ancient enemies begin stirring in the forgotten depths below the clouds, {character} must learn to control their overwhelming power while navigating treacherous alliances. When they fall deeply in love with a member of the opposing faction—someone who was initially sent to capture them—their romance becomes the catalyst that could either unite the fractured realms or plunge them into an eternal war. The story builds toward an epic confrontation where {character} must choose between personal happiness and the fate of millions, ultimately discovering that true love and sacrifice can reshape the very foundations of magic itself.",
          "Deep in the Whispering Woods, where trees hold memories of ancient civilizations and magic flows like underground rivers, {character} serves as a guardian protecting the last sanctuary of wild magic from those who would exploit it. When a mysterious plague begins turning magical creatures to stone, {character} embarks on a desperate quest to find the source, only to discover that the curse originates from their own past—a mistake they made years ago that they've completely forgotten due to a memory charm. As they journey through enchanted forests, across singing deserts, and into the heart of a volcano where dragons once nested, they're joined by an unlikely companion who harbors secrets of their own. Their growing love becomes a source of strength, but also a terrible vulnerability when {character} learns their beloved is connected to the very forces behind the plague. With time running out and the magical world slowly turning to lifeless stone, {character} must recover their lost memories, confront the darkness within themselves, and make an impossible choice between saving their love and saving the world. The climax reveals that the cure requires {character} to sacrifice their own magical abilities, which would not only strip away their identity but also sever the mystical bond they share with their beloved, testing whether their love can survive beyond magic itself."
        ]
      },
      "Betrayal": {
        titles: ["The Shattered Crown", "Shadows of Deceit", "Broken Oaths"],
        plotTemplates: [
          "For twenty years, {character} has served as the realm's most trusted protector, wielding an enchanted blade that can cut through any deception and leading the elite guard known as the Truthseekers. Their unwavering loyalty to the Crown has earned them lands, titles, and the deep respect of common folk and nobility alike. But when a dying assassin whispers a name that chills {character} to the bone—the name of their closest friend and mentor, Lord Commander Varek—they begin to uncover a web of lies that spans decades. Every victory {character} thought they had earned, every enemy they believed they had defeated, was carefully orchestrated by Varek to eliminate his political rivals and consolidate power. The scars on {character}'s body, the nightmares that plague their sleep, even the death of their family years ago—all were part of Varek's grand design to forge them into the perfect weapon. As {character} delves deeper into the conspiracy, they discover that Varek has been slowly poisoning the young Prince and plans to frame {character} for regicide, clearing his path to the throne. Stripped of their rank, hunted by their former comrades, and with nowhere to turn, {character} must gather a ragtag group of outcasts and criminals to expose the truth. The story culminates in a devastating confrontation where {character} faces not only Varek's physical might but also the psychological torture of having their entire identity and life's purpose revealed as an elaborate lie, forcing them to decide whether to seek revenge or find redemption through forgiveness.",
          "In the prestigious Academy of Arcane Arts, where the most powerful mages are trained to serve the magical council, {character} has always been the star pupil of Archmage Therion, a legendary wizard who discovered them as an orphaned child and raised them like a son. For fifteen years, {character} has excelled in every form of magic, believing themselves destined for greatness under Therion's guidance. But when {character} accidentally stumbles upon a hidden chamber beneath the academy, they discover horrifying evidence that Therion has been conducting forbidden experiments on students for decades, stealing their magical essence to extend his own life and power. The chamber contains the preserved bodies of dozens of missing students, including {character}'s childhood friends whom they were told had graduated early to serve distant kingdoms. Even more devastating, {character} finds their own medical records revealing that Therion has been slowly harvesting their magical abilities through 'training exercises,' planning to eventually consume their entire essence in a ritual that would make him immortal. As {character} grapples with this betrayal, they realize that ancient demons have been whispering to Therion for years, promising him eternal life in exchange for feeding them young magical souls. With the academy's annual Convergence ceremony approaching—where Therion plans to complete his dark ritual using {character} as the final sacrifice—{character} must work in secret to expose the conspiracy while pretending to remain the devoted student. The story builds to a climactic battle where {character} must face not only their beloved mentor but also the demonic forces that have been manipulating events from the shadows, ultimately learning that sometimes the greatest betrayal comes from those we trust most."
        ]
      }
    }
  },
  Mystery: {
    themes: {
      "Power of Secrets": {
        titles: ["Whispers Behind the Walls", "The Silent Witness", "Echoes of the Past"],
        plotTemplates: [
          "In the sleepy coastal town of Millbrook, where everyone knows everyone and secrets are supposed to be impossible to keep, {character} works as the head librarian in the historic Blackwood Public Library, a Gothic building that has stood for over 150 years. While cataloging books in the forgotten basement archives, {character} discovers a leather-bound journal hidden inside a hollowed-out copy of 'Paradise Lost,' written in the shaking hand of Sarah Blackwood, the library's founder who disappeared mysteriously in 1923. The journal reveals that Sarah uncovered evidence of a secret society called 'The Tide Keepers' operating within the town's founding families, who have been systematically eliminating anyone who discovers their true purpose: smuggling something far more dangerous than contraband through the harbor under cover of their legitimate shipping business. As {character} deciphers Sarah's coded entries, they realize the society still exists, now led by Mayor Thornfield, Police Chief Morrison, and Harbor Master Vance—all descendants of the original conspirators. Strange things begin happening: {character}'s car brakes fail, their home is broken into, and they notice the same black sedan following them. When {character} finds a current membership list hidden in the journal and recognizes names of people who died in 'accidents' over the past decade—people who had been asking questions about the town's history—they realize they're next on the list. Racing against time and unable to trust local authorities, {character} must use their research skills and knowledge of the library's hidden passages to gather evidence while staying one step ahead of killers who have been perfecting their methods for a century. The climax occurs during the town's annual Founder's Day celebration, where {character} discovers the horrifying truth about what the Tide Keepers have really been protecting and must expose the conspiracy before becoming another 'accident' statistic.",
          "When {character} inherits the sprawling Ravenshollow Estate from a great-aunt they never knew existed, they expect to find nothing more than dusty antiques and faded photographs. Instead, the Victorian mansion overlooking the fog-shrouded moors holds secrets that span four generations of their family. While exploring the labyrinthine house, {character} discovers that rooms shift and change when they're not looking, portraits seem to watch their movements, and there are more doors than should be physically possible. In the locked tower room, they find hundreds of letters, photographs, and newspaper clippings that reveal their great-aunt Evangeline was investigating a series of disappearances dating back to 1887, all connected to a mysterious figure known only as 'The Collector.' The evidence suggests that every thirty-five years, someone in their family line has vanished without a trace, always during the autumn equinox, always leaving behind only a black rose and a cryptic note written in Latin. As {character} delves deeper, they realize that Evangeline didn't die of natural causes as reported—she was murdered just days before solving the mystery, and her killer is still alive, still watching, still collecting. The house itself seems to be trying to communicate, with hidden passages revealing more clues: old journals describing strange rituals, photographs of people who look exactly like {character} from different time periods, and a family tree that suggests their bloodline carries something that makes them valuable to The Collector. With the autumn equinox approaching and supernatural phenomena intensifying around the estate, {character} must race to solve a century-old mystery while avoiding the same fate that claimed their ancestors. The truth they uncover about their family's connection to an ancient cult and the terrible price of immortality will force them to make an impossible choice between preserving their lineage and stopping an evil that has claimed too many lives."
        ]
      },
      "Betrayal": {
        titles: ["False Friends", "The Double Cross", "Trust No One"],
        plotTemplates: [
          "As {character} investigates what seems like a straightforward case, they slowly realize that someone close to them has been feeding information to the criminals. Now they must solve the mystery while questioning everyone they trust, knowing that one wrong move could be their last.",
          "When {character} witnesses what appears to be a crime, they become the target of an elaborate frame-up orchestrated by someone they never suspected. Racing against time, they must clear their name while uncovering a web of lies that goes deeper than they ever imagined."
        ]
      }
    }
  },
  Romance: {
    themes: {
      "Love conquers all": {
        titles: ["Second Chances", "Against All Odds", "Hearts Collide"],
        plotTemplates: [
          "When {character} returns to their hometown after years away, they come face to face with the one that got away. Despite family feuds and past misunderstandings that tore them apart, they discover their connection is stronger than ever. Now they must decide if love is worth fighting for, even when everyone else is against them.",
          "Thrown together by circumstances beyond their control, {character} and their complete opposite must work together on a project that could change both their lives. What starts as mutual antagonism slowly transforms into something deeper, proving that sometimes the best love stories begin with the worst first impressions."
        ]
      },
      "Redemption": {
        titles: ["Making Amends", "The Way Back", "Healing Hearts"],
        plotTemplates: [
          "Haunted by past mistakes that cost them the love of their life, {character} gets an unexpected second chance when fate brings them back together. But earning forgiveness means confronting the pain they caused and proving they've truly changed, all while fighting against the clock as their former love prepares to move on forever.",
          "When {character} returns to make amends for the damage they caused years ago, they discover their actions affected more than just their former partner. Now they must navigate a complex web of relationships and heal not just their own heart, but the hearts of everyone they hurt along the way."
        ]
      }
    }
  }
};

const CHARACTER_DESCRIPTIONS = {
  "Brave Knight": [
    "Ser Aldric stands six feet tall with calloused hands that have wielded both sword and plow, for they were born a farmer's child before earning their spurs through acts of courage rather than noble birth. Their steel-gray eyes hold the weight of every life they've saved and every enemy they've been forced to kill, creating a complex soul who quotes poetry as easily as they command troops on the battlefield. Despite wearing the gleaming armor of a royal knight, they still wake before dawn to practice swordwork alone, driven by an deep-seated fear that they're not truly worthy of the honors bestowed upon them. Their greatest strength lies not in their sword arm, but in their ability to inspire hope in others during the darkest moments, though this gift comes at the cost of rarely allowing themselves to show vulnerability or ask for help. The scar across their left temple serves as a constant reminder of the day they chose to save a village of strangers over following direct orders, a decision that cost them their commander's trust but earned them the unwavering loyalty of common folk throughout the realm. They struggle with the loneliness that comes with leadership and the terrible burden of making decisions that determine who lives and dies, often finding solace only in the quiet moments spent tending to their horse or writing letters to the families of fallen comrades.",
    "Born during a solar eclipse to a family of blacksmiths, Lyra always felt marked by destiny, but it wasn't until they single-handedly defended their village from bandits at age sixteen that they understood their calling. Their journey from apprentice smith to knight-errant has been marked by an unwavering moral code that sometimes puts them at odds with the political realities of court life, where they struggle to navigate the subtle games of power and influence. Beneath their polished armor and courtly manners lies a fierce protector who has never lost their connection to the common people, often sneaking out of the castle to help with harvests or repair roofs for struggling families. They possess an almost supernatural ability to sense deception and injustice, a gift that has saved countless lives but also made them numerous enemies among corrupt nobles who prefer their sins remain hidden. Their greatest weakness is their inability to compromise when they believe someone innocent is in danger, a trait that has led them to disobey orders, challenge superiors, and occasionally find themselves imprisoned for doing what they believe is right. The weight of their responsibilities has carved lines of premature age around their eyes, and they often suffer from nightmares about the people they couldn't save, driving them to train harder and fight more fiercely with each passing year."
  ],
  "Curious Child": [
    "With an insatiable appetite for knowledge and adventure, they see magic and mystery in the ordinary world around them. Their innocent questions often reveal profound truths that adults have forgotten.",
    "Wise beyond their years yet still wonderfully naive, they possess a unique perspective that challenges everyone they meet. Their fearless curiosity often leads them into situations far more dangerous than they realize."
  ],
  "Rebellious Teen": [
    "Frustrated by the limitations placed on them by society, they channel their anger into fighting for what they believe is right. Their defiant spirit masks a deep desire to find their place in the world.",
    "Quick-witted and fiercely independent, they refuse to accept the status quo without question. Though their methods are often unconventional, their passion for justice burns bright and true."
  ],
  "Mysterious Stranger": [
    "Arriving in town with nothing but secrets and a troubled past, they keep everyone at arm's length while harboring knowledge that could change everything. Their enigmatic nature draws others in despite their best efforts to remain invisible.",
    "Behind their carefully constructed facade lies someone running from a past they can't escape. Every conversation is a carefully choreographed dance around the truth they dare not reveal."
  ],
  "Reluctant Hero": [
    "Thrust into extraordinary circumstances against their will, they possess untapped potential they never wanted to discover. Their journey from ordinary person to hero is paved with self-doubt and hard-won courage.",
    "More comfortable in the background than the spotlight, they must overcome their own insecurities to rise to the challenge fate has set before them. Their greatest enemy is often their own belief that they're not hero material."
  ]
};

function generateFallbackStory(genre: string, theme: string, character: string): { title: string; plot: string; character: string } {
  const normalizedGenre = Object.keys(STORY_TEMPLATES).find(g => 
    g.toLowerCase().includes(genre.toLowerCase()) || genre.toLowerCase().includes(g.toLowerCase())
  ) || "Fantasy";
  
  const genreTemplates = STORY_TEMPLATES[normalizedGenre as keyof typeof STORY_TEMPLATES];
  const themeKey = Object.keys(genreTemplates.themes).find(t => 
    t.toLowerCase().includes(theme.toLowerCase()) || theme.toLowerCase().includes(t.toLowerCase())
  ) || Object.keys(genreTemplates.themes)[0];
  
  const themeData = genreTemplates.themes[themeKey as keyof typeof genreTemplates.themes];
  
  // Select random elements
  const randomTitle = themeData.titles[Math.floor(Math.random() * themeData.titles.length)];
  const randomPlot = themeData.plotTemplates[Math.floor(Math.random() * themeData.plotTemplates.length)];
  
  // Get character description
  const characterKey = Object.keys(CHARACTER_DESCRIPTIONS).find(c => 
    c.toLowerCase().includes(character.toLowerCase()) || character.toLowerCase().includes(c.toLowerCase())
  ) || "Mysterious Stranger";
  
  const characterDescriptions = CHARACTER_DESCRIPTIONS[characterKey as keyof typeof CHARACTER_DESCRIPTIONS];
  const randomCharacterDesc = characterDescriptions[Math.floor(Math.random() * characterDescriptions.length)];
  
  // Replace placeholder with actual character type
  const finalPlot = randomPlot.replace(/\{character\}/g, `a ${character.toLowerCase()}`);
  
  return {
    title: randomTitle,
    plot: finalPlot,
    character: randomCharacterDesc
  };
}

const CREATIVE_WRITING_PROMPT = `You are a professional creative writing mentor helping aspiring writers brainstorm unique, original story ideas. 

The user will provide three details:
- The Genre (for example: Fantasy, Mystery, Romance, Thriller, Sci-Fi, etc.)
- The Theme (for example: Love conquers all, Betrayal, Redemption, Courage, Survival, Power of Secrets, etc.)
- The Main Character Type (for example: Brave Knight, Curious Child, Rebellious Teen, Mysterious Stranger, Reluctant Hero, etc.)

Your task is to generate a complete, engaging story idea based on this information. Your response should feel human, natural, and creatively inspiring — like a real writer brainstorming ideas. Avoid robotic or AI-generated tones.

For every user input, generate:
1. A **Catchy and Creative Story Title**
2. A **Detailed, Engaging Plot Summary** in 8-12 sentences that includes: opening situation, rising action, major conflict, complications, climax hints, and resolution direction. Make it comprehensive and detailed.
3. A **Rich Main Character Description** in 4-6 sentences that reveals personality traits, background, motivations, flaws, strengths, and character arc potential.

The tone of the output should sound like a passionate storyteller explaining their elaborate story idea to a friend, with rich details and vivid imagery.

Respond with JSON in this exact format:
{
  "title": "Your creative title here",
  "plot": "Your detailed, comprehensive plot summary here (8-12 sentences minimum)",
  "character": "Your rich character description here (4-6 sentences minimum)"
}`;

export async function generateStoryIdea(
  genre: string,
  theme: string,
  character: string
): Promise<{ title: string; plot: string; character: string }> {
  // Check if API key is available and valid
  if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === "default_key") {
    console.log("No valid OpenAI API key found, using local story generation...");
    return generateFallbackStory(genre, theme, character);
  }

  try {
    const userPrompt = `Generate a story idea with these details:
- Genre: ${genre}
- Theme: ${theme}  
- Main Character Type: ${character}`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: CREATIVE_WRITING_PROMPT,
        },
        {
          role: "user",
          content: userPrompt,
        },
      ],
      response_format: { type: "json_object" },
      temperature: 0.8,
      max_tokens: 1000,
    });

    const result = JSON.parse(response.choices[0].message.content || "{}");

    return {
      title: result.title || "Untitled Story",
      plot: result.plot || "A compelling story awaits to be told.",
      character: result.character || "A fascinating character with untold depth.",
    };
  } catch (error: any) {
    console.error("OpenAI API error:", error);
    console.log("Falling back to local story generation...");
    
    // Use fallback story generation when OpenAI fails
    return generateFallbackStory(genre, theme, character);
  }
}
