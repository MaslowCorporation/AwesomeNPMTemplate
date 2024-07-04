export function GetCodeFromSnippet(snippet: string): string[] | null {
  const codeRegex = /```([\s\S]+?)\n([\s\S]+?)```/g;
  const matches: string[] = [];
  let match;

  while ((match = codeRegex.exec(snippet)) !== null) {
    if (match.length > 2) {
      const codePart = match[2];
      matches.push(codePart);
    }
  }

  if (matches.length === 0) {
    return null; // Return null if there are no matches
  }

  // Sort the matches array by the length of each code part (largest to smallest)
  matches.sort((a, b) => b.length - a.length);

  return matches;
}
