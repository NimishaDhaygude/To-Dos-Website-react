import React from 'react'

const About = ({ myStyle }) => {

  // Displaying today's date
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const month = ["January", "February", "March", "April", "May", "June", "july", "July", "August", "September", "October", "November", "December"]
  const d = new Date();
  console.log(d)
  let today_month = month[d.getMonth()];
  let todays_day = weekday[d.getDay()];
  let todays_date = d.getDate() + ' ' + today_month + ' ' + d.getFullYear();

  /*let myStyle = {
    minHeight: "90vh",
    margin: "10px auto"
  }*/

  return (
    <>
      <div class="container-other container " >
        <div class="today"><h3>Today's Date</h3>
          <div class="day">{todays_day}</div>
          <div class="date">{todays_date}</div>
        </div>
      </div>
    </>
  )
}

export default About
