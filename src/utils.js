export const shuffleArray = (arr) => {
  return arr.sort( () => .5 - Math.random() );
}

export const sampleArrayElement = arr => arr[Math.floor(Math.random() * arr.length)];
