export const verifyHour = (dateISO) => {
  const dateActivity = new Date(dateISO)
  const now = new Date()
  now.setMinutes(now.getMinutes() - 30)

  // console.log(dateISO, now.getTime(), dateActivity.getTime(), dateActivity.getTime() >= now.getTime())

  if (dateActivity.getTime() >= now.getTime()) {
    // console.log(dateActivity.getTime() >= now.getTime(), dateActivity.getTime(), now.getTime(), dateISO)
    return true;
  }

  return false;  
  // const date = new Date().toLocaleTimeString('pt-PT', { hour12: false });
  // date.toString()
  // if (date >= hour) { 
  //   return true;
  // } else {
  //   return false;
  // }
};