

const questions = [
   {
      question: "What is the supreme law of the land?",
      answers: [
         { answerText: "the Supreme court justices", isCorrect: false },
         { answerText: "the President Elect's journal", isCorrect: false },
         { answerText: "the Constitution", isCorrect: true },
         { answerText: "the Declaration of Independence", isCorrect: false },
      ]
   },
   {
      question: "What is the form of government of the United States?",
      answers: [
         { answerText: "Socialist", isCorrect: false },
         { answerText: "Republic / Representative democracy", isCorrect: true },
         { answerText: "Communist", isCorrect: false },
         { answerText: "Marxist", isCorrect: false },
      ]
   },
   {
      question: "Name one thing the U.S. Constitution does",
      answers: [
         { answerText: "Forms the government", isCorrect: true },
         { answerText: "Outlines police proper conduct", isCorrect: false },
         { answerText: "Selects the Vice-President", isCorrect: false },
         { answerText: "Forms the Republican party", isCorrect: false },
      ]
   },
   {
      question: "The U.S. Constitution starts with the words “We the People.” What does “We the People” mean?",
      answers: [
         { answerText: "Unpopular sovereignty", isCorrect: false },
         { answerText: "The people of Washington DC", isCorrect: false },
         { answerText: "Self-government", isCorrect: true },
         { answerText: "The government", isCorrect: false },
      ]
   },
   {
      question: "How are changes made to the U.S. Constitution?",
      answers: [
         { answerText: "Protests", isCorrect: false },
         { answerText: "Amendments", isCorrect: true },
         { answerText: "Social media", isCorrect: false },
         { answerText: "Filing a suit", isCorrect: false },
      ]
   },
   {
      question: "What does the Bill of Rights protect?",
      answers: [
         { answerText: "(The basic) rights of people living in the United States", isCorrect: true },
         { answerText: "(The basic) rights of people living in some states", isCorrect: false },
         { answerText: "(The basic) rights of people US Citizens only", isCorrect: false },
         { answerText: "(The basic) rights of US Citizens living abroad", isCorrect: false },
      ]
   },
   {
      question: "How many amendments does the U.S. Constitution have?",
      answers: [
         { answerText: "Twenty-seven (27)", isCorrect: true },
         { answerText: "One Hundred (100)", isCorrect: false },
         { answerText: "Twenty (20)", isCorrect: false },
         { answerText: "Seventeen (17)", isCorrect: false },
      ]
   },
   {
      question: "Why is the Declaration of Independence important?",
      answers: [
         { answerText: "It says the government is the ruling body.", isCorrect: false },
         { answerText: "It says the President must only serve 3 years.", isCorrect: false },
         { answerText: "It is not that important.", isCorrect: false },
         { answerText: "It says all people are created equal.", isCorrect: true },
      ]
   },
   {
      question: "What founding document said the American colonies were free from Britain?",
      answers: [
         { answerText: "Statement of Independence", isCorrect: false },
         { answerText: "Declaration of Independence", isCorrect: true },
         { answerText: "the Bill of Rights", isCorrect: false },
         { answerText: "the Constitution", isCorrect: false },
      ]
   },
   {
      question: "Name two important ideas from the Declaration of Independence and the U.S. Constitution.",
      answers: [
         { answerText: "the American dream & the Free Trade Agreement of 1796", isCorrect: false },
         { answerText: "Equality & Limited government", isCorrect: true },
         { answerText: "the Free Trade Agreement of 1796 & Limited government", isCorrect: false },
         { answerText: "Equality & Moore's Law", isCorrect: false },
      ]
   },
   {
      question: "The words “Life, Liberty, and the pursuit of Happiness” are in what founding document?",
      answers: [
         { answerText: "George Bush's journal", isCorrect: false },
         { answerText: "the American Society Founding Document", isCorrect: false },
         { answerText: "Declaration of Independence", isCorrect: true },
         { answerText: "the 27th amendment", isCorrect: false },
      ]
   },
   {
      question: "What is the economic system of the United States?",
      answers: [
         { answerText: "Soicalism", isCorrect: false },
         { answerText: "Planned ", isCorrect: false },
         { answerText: "Communism / Anti-capitalism", isCorrect: false },
         { answerText: "Capitalism / Free market economy", isCorrect: true },
      ]
   },
   {
      question: "What is the rule of law?",
      answers: [
         { answerText: "Everyone must follow the law but only in public spaces.", isCorrect: false },
         { answerText: "Some people are above the law.", isCorrect: false },
         { answerText: "Only the President may break the law during war time", isCorrect: false },
         { answerText: "Everyone must follow the law.", isCorrect: true },
      ]
   },
   {
      question: "Many documents influenced the U.S. Constitution. Name one",
      answers: [
         { answerText: "Declaration of Independence", isCorrect: true },
         { answerText: "the Private Citizens Form of 1908", isCorrect: false },
         { answerText: "the Afro-Euro agreement", isCorrect: false },
         { answerText: "the React documentation of 2016", isCorrect: false },
      ]
   },
   {
      question: "There are three branches of government. Why?",
      answers: [
         { answerText: "There are four (4) branches of government", isCorrect: false },
         { answerText: "Because of the three (3) articles mentioned in the Constitution", isCorrect: false },
         { answerText: "Separation of powers", isCorrect: true },
         { answerText: "Each one to represent the President, the Vice-President, and the Secretary of State", isCorrect: false },
      ]
   },
   {
      question: "Name the three branches of government.",
      answers: [
         { answerText: "President, police department, and family court", isCorrect: false },
         { answerText: "Legislative, executive, and judicial", isCorrect: true },
         { answerText: "Executive, police department, and supreme Court", isCorrect: false },
         { answerText: "Republican, democratic, and independent", isCorrect: false },
      ]
   },
   {
      question: "The President of the United States is in charge of which branch of government?",
      answers: [
         { answerText: "Executive branch", isCorrect: true },
         { answerText: "All of the government branches", isCorrect: false },
         { answerText: "The White House", isCorrect: false },
         { answerText: "Judicial branch", isCorrect: false },
      ]
   },
   {
      question: "What part of the federal government writes laws?",
      answers: [
         { answerText: "(U.S.) Supreme Court", isCorrect: false },
         { answerText: "(U.S.) Presidential Ofiice", isCorrect: false },
         { answerText: "(U.S.) Vice Presidents Assistant", isCorrect: false },
         { answerText: "(U.S.) Congress", isCorrect: true },
      ]
   },
   {
      question: "What are the two parts of the U.S. Congress?",
      answers: [
         { answerText: "Senate and The President", isCorrect: false },
         { answerText: "Senate and House (of Representatives)", isCorrect: true },
         { answerText: "The President and House (of Representatives)", isCorrect: false },
         { answerText: "Senate and Supreme Court", isCorrect: false },
      ]
   },
   {
      question: "Name one power of the U.S. Congress.",
      answers: [
         { answerText: "Writes laws", isCorrect: true },
         { answerText: "Writes for the Secretary of State", isCorrect: false },
         { answerText: "U.S Congress has no power", isCorrect: false },
         { answerText: "Prosecute the laws", isCorrect: false },
      ]
   },
   {
      question: "How many U.S. senator(s) are there?",
      answers: [
         { answerText: "Two hundred (200)", isCorrect: false },
         { answerText: "One (1)", isCorrect: false },
         { answerText: "One hundred (100)", isCorrect: true },
         { answerText: "Three hundred (300)", isCorrect: false },
      ]
   },
   {
      question: "How long is a term for a U.S. senator?",
      answers: [
         { answerText: "Four (4) years", isCorrect: false },
         { answerText: "Lifetime", isCorrect: false },
         { answerText: "Two (2) years", isCorrect: false },
         { answerText: "Six (6) years", isCorrect: true },
      ]
   },
   {
      question: "How many voting members are in the House of Representatives?",
      answers: [
         { answerText: "Thirty-five (35)", isCorrect: false },
         { answerText: "Four hundred thirty-six (436)", isCorrect: false },
         { answerText: "One Hundred (100)", isCorrect: false },
         { answerText: "Four hundred thirty-five (435)", isCorrect: true },
      ]
   },
   {
      question: "How long is a term for a member of the House of Representatives?",
      answers: [
         { answerText: "Four (4) years", isCorrect: false },
         { answerText: "Two (2) years", isCorrect: true },
         { answerText: "Lifetime", isCorrect: false },
         { answerText: "Six (6) years", isCorrect: false },
      ]
   },
   {
      question: "How many senators does each state have?",
      answers: [
         { answerText: "Three (3)", isCorrect: false },
         { answerText: "Two (2)", isCorrect: true },
         { answerText: "One Hundred (100)", isCorrect: false },
         { answerText: "Two Hundred (200)", isCorrect: false },
      ]
   },
   {
      question: "Who does a U.S. senator represent?",
      answers: [
         { answerText: "Citizens of their town", isCorrect: false },
         { answerText: "Citizens of their county", isCorrect: false },
         { answerText: "Citizens of their state", isCorrect: true },
         { answerText: "All American citizens ", isCorrect: false },
      ]
   },
   {
      question: "Some states have more representatives than other states. Why?",
      answers: [
         { answerText: "(Because) they can", isCorrect: false },
         { answerText: "(Because of) the state's population", isCorrect: true },
         { answerText: "(Because of) the state's laws", isCorrect: false },
         { answerText: "(Because of) the state's geographic size", isCorrect: false },
      ]
   },
   {
      question: "The President of the United States is elected for how many years?",
      answers: [
         { answerText: "Four (4) years", isCorrect: true },
         { answerText: "Two (2) years", isCorrect: false },
         { answerText: "Until decides to leave", isCorrect: false },
         { answerText: "Not more than six (6) years", isCorrect: false },
      ]
   },

]

export const randQustions = questions.sort(() => Math.random() - 0.5)