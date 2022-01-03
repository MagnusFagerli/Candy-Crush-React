const width = 8;
const candyColors = ["blue", "green", "orange", "purple", "red", "yellow"];

const App = () => {
  const createBoard = () => {
    for (let i = 0; i < width * width; i++) {
      const randomColorArrangement = [];
      const randomColor =
        candyColors[Math.floor(Math.radom() * candyColors.length)];
      randomColorArrangement.push(randomColor);
    }
    console.log(randomColorArrangement);
  };

  createBoard();

  return <div></div>;
};

export default App;
