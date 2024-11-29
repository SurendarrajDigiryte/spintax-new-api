function generateSpintax(userInput: string, numberOfResults: number): Promise<string[]> {
  const spintaxPattern = /\{([^{}]+)\}|\{\{RANDOM\|([^{}]+)\}\}/g;

  const parseSpintax = (text: string): string => {
    let match: RegExpExecArray | null;
    while ((match = spintaxPattern.exec(text)) !== null) {
      let randomChoice: string | undefined;
      if (match[2]) {
        const options = match[2].split('|');
        randomChoice = options[Math.floor(Math.random() * options.length)];
      } else if (match[1]) {
        const options = match[1].split('|');
        randomChoice = options[Math.floor(Math.random() * options.length)];
      } else {
        continue;
      }
      text = text.replace(match[0], randomChoice);
      spintaxPattern.lastIndex = 0;
    }
    return text;
  };

  const calculateTotalVariations = (text: string): number => {
    const blocks = text.match(spintaxPattern);
    if (!blocks) return 1;

    return blocks.reduce((total, block) => {
      if (block.startsWith('{{RANDOM|')) {
        const options = block.slice(8, -2).split('|');
        return total * options.length;
      } else if (block.startsWith('{')) {
        const options = block.slice(1, -1).split('|');
        return total * options.length;
      } else {
        return total;
      }
    }, 1);
  };

  const uniqueResults = new Set<string>();
  const paragraphs = userInput.split('\n').map(p => p.trim()).filter(p => p);
  const totalVariations = paragraphs.reduce((total, paragraph) => total * calculateTotalVariations(paragraph), 1);
  console.log('Total Variations:', totalVariations);
  const maxResults = Math.min(numberOfResults, totalVariations);

  if (maxResults === 0) {
    return Promise.resolve([]);
  }

  console.log(uniqueResults);
  while (uniqueResults.size < maxResults) {
    const processedParagraphs = paragraphs.map(paragraph => parseSpintax(paragraph));
    const variation = processedParagraphs.join('\n');
    uniqueResults.add(variation);
  }

  const resultsArray = Array.from(uniqueResults);
  console.log('Generated Results:', resultsArray);
  return Promise.resolve(resultsArray);
}

export { generateSpintax };