export const generateFoodPosition = (dimensions, snakePosition) => {
  let foodPosition = {
    x: Math.floor(Math.random() * dimensions.x),
    y: Math.floor(Math.random() * dimensions.y)
  };

  while (
    foodPosition.x === snakePosition.x &&
    foodPosition.y === snakePosition.y
  ) {
    foodPosition = generateFoodPosition(dimensions);
  }

  return foodPosition;
};
