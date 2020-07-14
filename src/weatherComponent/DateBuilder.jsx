



const DateBuilder = (newdate) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[newdate.getDay()];
    let date = newdate.getDate();
    let month = months[newdate.getMonth()];
    let year = newdate.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  export default DateBuilder;
