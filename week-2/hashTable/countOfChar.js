//count the number of letters in your name

function countChar(str) {
  str = str.toUpperCase();
  let hashMap = new Map();
  for (let item of str) {
    let count = hashMap.get(item) ?? 0;

    hashMap.set(item, count + 1);
  }

  for (let [i, item] of hashMap) {
    console.log(`${i}:${item}`);
  }
}

countChar("Arfan");
