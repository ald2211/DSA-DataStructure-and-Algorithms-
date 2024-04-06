// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a
//  non-empty word in s.

// Example 1:
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

// Example 2:
// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false

// Example 3:
// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

function wordPattern(pattern, s) {
  let word = s.split(" ");
  let wordMap = new Map();
  let patternMap = new Map();

  if (pattern.length !== word.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    if (!patternMap.has(pattern[i])) {
      patternMap.set(pattern[i], word[i]);
    } else {
      if (patternMap.get(pattern[i]) !== word[i]) return false;
    }
    if (!wordMap.has(word[i])) {
      wordMap.set(word[i], pattern[i]);
    } else {
      if (wordMap.get(word[i]) !== pattern[i]) return false;
    }
  }

  return true;
}
console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("aaaa", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
