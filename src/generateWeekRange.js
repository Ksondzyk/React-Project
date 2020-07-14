const generateWeekRange = (startDate) => {
  const monday = new Date(
    startDate.setDate(startDate.getDate() - ((startDate.getDay() + 6) % 7))
  );
  const result = [];
  for (let i = 0; i < 7; i += 1) {
    const base = new Date(monday);
    result.push(new Date(base.setDate(base.getDate() + i)));
  }
  return result;
};

export default generateWeekRange;
