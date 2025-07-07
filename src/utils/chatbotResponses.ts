interface TopicResponse {
  triggers: string[];
  response: string;
}

const topicResponses: TopicResponse[] = [
  {
    triggers: ["tabbed dodge"],
    response:
      "<strong style='color:#ff5252;'>Tabbed Dodge</strong> is a reflex-based game where players avoid obstacles by switching tabs. Built with Kotlin in Android Studio, using HTML, CSS, and JavaScript for the core gameplay.",
  },
  {
    triggers: ["kinam reaction"],
    response:
      "<strong style='color:#ff5252;'>Kinam Reaction</strong> tests your reaction time. Developed in Android Studio using Kotlin, with responsive web gameplay built with HTML, CSS, and JavaScript.",
  },
  {
    triggers: ["magic 8 ball"],
    response:
      "<strong style='color:#ff5252;'>Magic 8 Ball</strong> is a modern digital version of the classic fortune-telling toy. Created with Kotlin in Android Studio and powered by HTML, CSS, and JavaScript.",
  },
  {
    triggers: ["home exercise"],
    response:
      "<strong style='color:#ff5252;'>Home Exercise</strong> guides you through simple at-home workouts. Built in Android Studio with Kotlin and features a web-based interactive UI using HTML, CSS, and JavaScript.",
  },
  {
    triggers: ["blog app"],
    response:
      "<strong style='color:#ff5252;'>Blog App</strong> allows content creation and management, built with React, TypeScript, and Supabase for backend functionality.",
  },
  {
    triggers: ["landing page"],
    response:
      "<strong style='color:#ff5252;'>Landing Page</strong> is a lightweight, fully responsive project designed with pure HTML and CSS for a clean presentation.",
  },
  {
    triggers: ["codepen projects", "codepen"],
    response:
      "<strong style='color:#ff5252;'>CodePen Projects</strong> showcase interactive builds using React, focusing on reusable components and responsive UI design.",
  },
];

const keywordResponses: TopicResponse[] = [
  {
    triggers: ["project", "projects", "portfolio"],
    response:
      "<strong style='color:#ff5252;'>Kevin</strong> has built various projects using React, TypeScript, Supabase, HTML, CSS, JavaScript, and MUI.",
  },
  {
    triggers: ["game", "games"],
    response:
      "Check out <strong style='color:#ff5252;'>Kevin's</strong> Games section! He builds hybrid mobile games using Android Studio with web technologies like HTML, CSS, and JavaScript.",
  },
  {
    triggers: ["skill", "skills", "tech stack", "technology"],
    response:
      "<strong style='color:#ff5252;'>Kevin</strong> works with React, TypeScript, Supabase, MUI, and builds responsive projects with HTML, CSS, and JavaScript.",
  },
  {
    triggers: ["contact", "reach", "email", "message", "how do i get in touch", "how to contact", "talk to kevin"],
    response:
      "Feel free to reach <strong style='color:#ff5252;'>Kevin</strong> via the <strong style='color:#ff5252;'>Contact</strong> section. He's always open to discussing projects, collaborations, or opportunities.",
  },
  {
    triggers: ["stack", "tech stack", "what stack"],
    response:
      "<strong style='color:#ff5252;'>Kevin</strong> uses React, TypeScript, Supabase, MUI, along with HTML, CSS, and JavaScript for building modern, scalable web apps.",
  },
  {
    triggers: ["backend", "use backend", "server"],
    response:
      "Yes, <strong style='color:#ff5252;'>Kevin</strong> integrates <strong style='color:#ff5252;'>Supabase</strong> for backend services like databases and user authentication.",
  },
  {
    triggers: ["design", "ui", "approach"],
    response:
      "<strong style='color:#ff5252;'>Kevin</strong> prioritizes clean, responsive UI, minimal custom CSS, and scalable, component-driven design.",
  },
  {
    triggers: ["work with kevin", "collaborate", "hire"],
    response:
      "<strong style='color:#ff5252;'>Kevin</strong> is always open to collaborations and job opportunities. Head to the <strong style='color:#ff5252;'>Contact</strong> section to connect!",
  },
  {
    triggers: ["job", "looking for job", "employment"],
    response:
      "<strong style='color:#ff5252;'>Kevin</strong> is passionate about building clean, scalable projects and is open to job opportunities. Check the <strong style='color:#ff5252;'>Contact</strong> section to reach him.",
  },
  {
    triggers: ["who are you", "assistant", "ai"],
    response:
      "I'm <strong style='color:#ff5252;'>Kevin's</strong> AI assistant, here to answer questions about his portfolio, projects, games, and skills.",
  },
  {
    triggers: ["about kevin", "tell me about kevin"],
    response:
      "<strong style='color:#ff5252;'>Kevin</strong> is a passionate developer experienced with React, TypeScript, Supabase, and hybrid mobile games.",
  },
  {
    triggers: ["hi", "hello", "hey"],
    response:
      "Hello! I'm <strong style='color:#ff5252;'>Kevin's</strong> AI assistant. Ask me about his projects, games, or how he builds his work.",
  },
  {
    triggers: ["thank you", "thanks", "appreciate", "good answer", "nice answer", "helpful"],
    response:
      "Glad I could help! If you have more questions about <strong style='color:#ff5252;'>Kevin's</strong> work, just ask!",
  },
];

export const getFakeResponse = (input: string) => {
  const normalized = input.toLowerCase().trim();
  const foundResponses: string[] = [];

  for (const item of topicResponses) {
    if (item.triggers.some((trigger) => normalized.includes(trigger))) {
      foundResponses.push(item.response);
    }
  }

  for (const item of keywordResponses) {
    if (item.triggers.some((trigger) => normalized.includes(trigger))) {
      foundResponses.push(item.response);
    }
  }

  if (foundResponses.length > 0) {
    return foundResponses.join("<br/><br/>");
  }

  return "Sorry, I didn't understand that. You can ask me about <strong style='color:#ff5252;'>Kevin's</strong> games, specific projects, skills, or how he builds them.";
};
