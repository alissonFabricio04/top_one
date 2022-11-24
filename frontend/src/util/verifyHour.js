export const verifyHour = (Hour) => {
  const date = new Date().toLocaleTimeString('pt-PT', {hour12: false})
  return date <= Hour ? false : true
}

