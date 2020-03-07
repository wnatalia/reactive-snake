export const checkIfShouldEnd = (body, position, dimensions) => {
  if (
    position.x < 0 ||
    position.y < 0 ||
    position.x >= dimensions.x ||
    position.y >= dimensions.y
  ) {
    return true;
  }

  if (body.length > 1) {
    const sameAsBody = body.find(
      el => el.x === position.x && el.y === position.y
    );

    return !!sameAsBody;
  }

  return false;
};
