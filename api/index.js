// Vercel serverless function entry point
const express = require('express');
const path = require('path');

// Create Express app
const app = express();

// Parse JSON bodies
app.use(express.json());

// CORS headers for API routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Import and register API routes
try {
  const { registerRoutes } = require('../dist/index.js');
  registerRoutes(app);
} catch (error) {
  console.error('Failed to load routes:', error);
  
  // Fallback story generation for Vercel
  app.post('/api/generate-story', (req, res) => {
    const { genre = 'Fantasy', theme = 'Love conquers all', character = 'Brave Knight' } = req.body;
    
    const stories = {
      'Fantasy': {
        title: 'The Last Dreamseer of Valdris',
        plot: `In the mountain kingdom of Valdris, where crystalline spires pierce the clouds and ancient magic flows through veins of starlight embedded in the very rocks, ${character.toLowerCase()} works as a humble crystal-tender, maintaining the magical conduits that power their floating city. When a catastrophic surge destroys half the crystal network during the Night of Falling Stars, ${character.toLowerCase()} accidentally absorbs the raw magical energy, awakening an ability that hasn't been seen for a thousand years: the power to walk through dreams and reshape reality itself. This discovery attracts the attention of the Shadow Covenant, a secret organization that has been manipulating the kingdom's politics for centuries, and the Circle of Dawn, an ancient order of mages who believe ${character.toLowerCase()} is the prophesied Dreamseer who will either save or destroy the realm. As nightmares begin manifesting in the physical world and the barrier between sleeping and waking grows thin, ${character.toLowerCase()} must learn to control their overwhelming abilities while navigating a web of political intrigue that stretches from the royal court to the forbidden depths beneath the mountains. When they fall in love with someone from the opposing faction—a person whose own dreams have been stolen by dark magic—their romance becomes the key to understanding how to heal the fractured dream-realm. But as ancient enemies awaken from their slumber and reality itself begins to unravel, ${character.toLowerCase()} faces an impossible choice: use their power to save the kingdom but lose their humanity forever, or preserve their soul while watching their world collapse into eternal nightmare. The climax reveals that the true battle has always been taking place in the collective unconscious of humanity, where ${character.toLowerCase()} must confront not just external enemies but the darkest aspects of their own psyche.`,
        character: `Born with mismatched eyes—one silver, one gold—${character.toLowerCase()} has always been marked as different in a society that values conformity above all else. Raised by their grandmother, a former court astronomer who was exiled for practicing forbidden dream magic, they possess both a keen analytical mind and an intuitive understanding of the mystical forces that most people fear. Their gentle nature masks a core of steel forged by years of enduring whispered rumors and suspicious glances, teaching them to find strength in solitude and wisdom in observation. Despite their extraordinary abilities, they struggle with crippling self-doubt and a tendency to sacrifice their own needs for others, often pushing themselves to dangerous limits in their desire to prove they're worthy of the trust others place in them. Their greatest fear isn't death or failure, but the possibility that their power might corrupt them into becoming the very thing they've sworn to fight against, leading them to maintain strict personal codes and rituals that sometimes alienate those who try to get close to them.`
      },
      'Romance': {
        title: 'Letters from Tomorrow',
        plot: `Dr. Elena Vasquez, a brilliant temporal physicist working on quantum communication theory, discovers that her experimental device has been receiving messages from thirty years in the future—all signed by someone claiming to be her soulmate who desperately needs to prevent a catastrophe that will tear them apart forever. The messages describe a world where time travel has been perfected but is controlled by a totalitarian regime, and reveal that ${character.toLowerCase()}, in the future timeline, sacrificed everything to send these warnings back through time. As Elena follows the cryptic instructions in the letters, she begins experiencing strange synchronicities: meeting people the letters predicted, finding herself in situations that were described in precise detail, and slowly falling in love with Marcus Chen, a mysterious time theorist who seems to know more about her research than he should. But when Elena realizes that Marcus is not who he claims to be—that he's actually a time agent sent from the future to prevent her from receiving the messages—she faces an agonizing choice between the love she's developing in the present and the desperate pleas from her future self. The letters reveal that their original timeline was destroyed by Elena's time experiments, and that Marcus has traveled back not to save the world, but to save her from the guilt of causing billions of deaths. As past, present, and future begin to blur together, Elena must decide whether to trust the love she feels now or the love described in letters from a tomorrow that may never come. The story builds to a heart-wrenching climax where Elena discovers that every choice she makes creates a new timeline, and that true love might mean accepting that some people are meant to find each other across infinite realities, even if they can never truly be together.`,
        character: `Elena carries herself with the quiet confidence of someone who has spent her life proving herself in a male-dominated field, but beneath her professional exterior lies a romantic soul who writes poetry in the margins of her scientific journals and believes that love is just another force of nature waiting to be understood and harnessed. Her brilliant mind, capable of grasping complex temporal mechanics that baffle her colleagues, becomes her greatest vulnerability when it comes to matters of the heart, as she tends to overthink every emotion and analyze every gesture instead of simply allowing herself to feel. Haunted by the early loss of her parents in a car accident that she believes she could have prevented if she'd been smarter or faster, she's dedicated her life to mastering time itself, driven by an unconscious desire to rewrite the past even as she claims to be focused on improving the future. Her apartment is filled with half-finished inventions, towers of research papers, and a single photograph of her parents that she talks to every night, revealing someone who is profoundly lonely despite her professional success and who secretly fears that her obsession with time travel is just an elaborate way of avoiding the risk of losing someone again.`
      },
      'Mystery': {
        title: 'The Memory Thief of Midnight Hollow',
        plot: `In the seemingly peaceful town of Midnight Hollow, where Victorian houses line cobblestone streets and everyone knows their neighbors' names, ${character.toLowerCase()} serves as the head archivist at the Historical Society, dedicated to preserving the town's rich past. But when elderly residents begin experiencing complete memory loss—forgetting not just recent events but entire decades of their lives—${character.toLowerCase()} notices a disturbing pattern: each victim had recently visited the newly opened Restoration Clinic, where Dr. Evelyn Marsh claims to help people recover from trauma by selectively editing their memories. As ${character.toLowerCase()} investigates, they discover that the missing memories aren't being destroyed but stolen and stored in a sophisticated neural network hidden beneath the clinic, where Dr. Marsh has been collecting decades of human experiences to create a comprehensive database of the town's secrets. The investigation reveals that Midnight Hollow was built on the site of a former government facility where illegal psychological experiments were conducted in the 1950s, and that Dr. Marsh is the daughter of the lead researcher who disappeared when the project was shut down. Using her father's research and modern technology, she's been systematically harvesting memories to piece together the truth about what happened to her father and to locate a cache of hidden documents that could expose a conspiracy reaching the highest levels of government. As ${character.toLowerCase()} delves deeper, they realize that their own family has connections to the original experiments, and that their grandmother's mysterious death thirty years ago was actually murder committed to protect the town's dark secrets. Racing against time as more residents lose their memories and Dr. Marsh grows increasingly desperate, ${character.toLowerCase()} must navigate a web of lies that spans three generations while avoiding the same fate that befell everyone else who got too close to the truth. The climax occurs when ${character.toLowerCase()} discovers that the only way to restore the stolen memories is to enter the neural network themselves, risking their own identity to save their neighbors and uncover the truth about their family's tragic past.`,
        character: `${character.toLowerCase().charAt(0).toUpperCase() + character.toLowerCase().slice(1)} moves through the world with the methodical precision of someone who believes that every mystery can be solved if you just gather enough evidence and ask the right questions, but this analytical nature masks a deep-seated need to understand their own identity after growing up as an adopted child with no knowledge of their biological family. Their office in the Historical Society is meticulously organized, with color-coded filing systems and detailed timelines covering every major event in the town's history, revealing someone who finds comfort in order and patterns even as they're drawn to the chaos of unsolved mysteries. Despite their reputation for being emotionally detached and overly logical, they possess an intuitive understanding of human nature that allows them to see through lies and manipulations, a skill developed during a lonely childhood spent observing rather than participating in social interactions. Their greatest strength lies in their ability to remember seemingly insignificant details and connect them to larger patterns, but this same gift becomes a burden when they can't forget painful experiences or let go of unsolved cases that haunt their dreams. Beneath their professional demeanor, they harbor a secret fear that their obsession with uncovering other people's truths is really an attempt to avoid confronting the mysteries in their own past, leading them to throw themselves into dangerous situations rather than face the possibility that some questions don't have answers.`
      }
    };
    
    const storyType = Object.keys(stories).find(g => 
      g.toLowerCase().includes(genre.toLowerCase()) || 
      genre.toLowerCase().includes(g.toLowerCase())
    ) || 'Fantasy';
    
    res.json(stories[storyType]);
  });
}

module.exports = app;