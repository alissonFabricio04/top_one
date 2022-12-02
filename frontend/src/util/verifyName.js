export const verifyName = (name) => {
  if (name.length > 25) {
    const nameSplit = name.split(' ');

    if (nameSplit[1].length < 4) {
      return `${nameSplit[0]} ${nameSplit[2]}`  
    }

    return `${nameSplit[0]} ${nameSplit[1]}`  
  } else {
    return name
  }

}