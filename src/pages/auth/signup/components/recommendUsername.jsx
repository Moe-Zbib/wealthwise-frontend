export function recommendUsername(userName) {
  const recommended = [];

  for (let i = 0; i < 3; i++) {
    recommended.push(userName + Math.floor(Math.random() * 999));
  }

  console.log(recommended);
  return recommended;
}
