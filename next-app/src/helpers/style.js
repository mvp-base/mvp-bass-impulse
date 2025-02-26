export function getRandomStyle(color) {
  const randomNumber = Math.random();
  const shadowColor = hexToRGBA(color, 0.5);

  if (randomNumber < 0.25) {
    return {
      textShadow: `0px 0px 10px ${shadowColor}, 0px 0px 10px ${shadowColor}`,
      WebkitTextStroke: `0.5px ${color}`,
    };
  } else if (randomNumber < 0.5) {
    return {
      textShadow: 'none',
      WebkitTextStroke: '0.5px white',
      color: 'transparent',
    };
  } else {
    return null;
  }
}

const hexToRGBA = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
