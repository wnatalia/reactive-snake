const checkIfIsInBody = (body, foodPosition) => {
  let inBody = false;
  if (!body) {
    return false;
  }
  for (let i = 0; i < body.length; i++) {
    if (body[i].x === foodPosition.x && body[i].y === foodPosition.y) {
      inBody = true;
      break;
    }
  }

  return inBody;
};

const getRandomPosition = dimensions => {
  return {
    x: Math.floor(Math.random() * dimensions.x),
    y: Math.floor(Math.random() * dimensions.y)
  };
};

export const generateFoodPosition = (dimensions, snake) => {
  let foodPosition = getRandomPosition(dimensions);

  let inBody = checkIfIsInBody(snake.body, foodPosition);

  while (
    (foodPosition.x === snake.position.x &&
      foodPosition.y === snake.position.y) ||
    inBody
  ) {
    foodPosition = getRandomPosition(dimensions);
    inBody = checkIfIsInBody(snake.body, foodPosition);
  }

  return foodPosition;
};
