const cubes = document.querySelectorAll(".cubeTimer");

const getTime = () => {
  const dataString = "2024-05-03T14:30:00Z"
  const date = new Date(dataString);

  let now = new Date();

  let difference = date - now;

  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let days = Math.floor(difference / (1000 * 60 * 60 * 24));

  if(seconds >= 0){
    seconds--
  } else if (minutes >= 0){
    minutes--
  } else if(hours >= 0){
    hours--
  } else if(hours <= 0){
    days--
  }

  let values = [days, hours, minutes, seconds];

  cubes.forEach((cube, index) => {
    if(values[index] < 10){
      cube.innerHTML = `0${values[index]}`
    } else {
      cube.innerHTML = values[index]
    }
  })
}

const interval = setInterval(() => {
  getTime();
}, 1000)

