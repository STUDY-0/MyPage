import React, { useEffect, useState } from 'react';
import './App.css';
import './Navbar.css';
import logo from './logo.png';
import leftIcon from './free-icon-font-angle-left-3916934.svg';
import rightIcon from './free-icon-font-angle-right-3916924.svg';

function App() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  //calendar, studyTime 월 변경
  useEffect(() => {
    const setCalendar = (year, month) => {
      let firstDate = new Date(year, month - 1, 1);
      let firstDay = firstDate.getDay();
      let lastDate = new Date(year, month, 0).getDate();

      const setTitle = (year, month) => {
        let title_year = document.getElementById("title_year");
        title_year.innerHTML = year;
        let title_month = document.getElementById("title_month");
        title_month.innerHTML = month;
      };
      setTitle(year, month);

      const dateGridContainerDiv = document.getElementsByClassName("date-grid-container")[0];
      dateGridContainerDiv.innerHTML = "";

      for (let i = 1; i <= lastDate; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("grid-item");
        newDiv.innerHTML = i;
        dateGridContainerDiv.appendChild(newDiv);
      }

      let firstDateDiv = dateGridContainerDiv.getElementsByClassName("grid-item")[0];
      firstDateDiv.style.gridColumnStart = firstDay + 1;
    };

    setCalendar(year, month);
  }, [year, month]);

  const prevMonth = () => {
    let newMonth = month - 1;
    let newYear = year;
    if (newMonth === 0) {
      newYear--;
      newMonth = 12;
    }
    setYear(newYear);
    setMonth(newMonth);
  };

  const nextMonth = () => {
    let newMonth = month + 1;
    let newYear = year;
    if (newMonth === 13) {
      newYear++;
      newMonth = 1;
    }
    setYear(newYear);
    setMonth(newMonth);
  };

  //최근 studyTime
  const [studyTimeData] = useState([
    { date: '5/25', time: '02:00:00' },
    { date: '5/26', time: '02:00:00' },
    { date: '5/27', time: '02:00:00' },
    { date: '5/28', time: '02:00:00' },
    { date: '5/29', time: '02:00:20' },
    { date: '5/30', time: '02:00:00' },
    { date: '5/31', time: '02:00:00' },
  ]);

  const renderStudyTimeRows = () => {
    return studyTimeData.map((item, index) => (
      <tr key={index}>
        <td className='studyDate'>{item.date}</td>
        <td className='studyTime'>{item.time}</td>
      </tr>
    ));
  };

  return (
    <div className="App">
        <nav className='nav'>
            <div className='nav-container'>
                <a className="logo" href="index.html">
                    <img className='logo-img' src={logo} alt="Logo" />
                </a>
                <ul className='nav-list'>
                    <li className='community'>
                    <a href="community.html">Community</a>
                    </li>
                    <li className='mypage'>
                    <a href="myPage.html">My Page</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div id="container">
            <div id="container1">
                <div id="user">
                    <img id="profile" src="./img/user1.png" alt="profile" />

                    <div id="userinfo">
                        <p className="username">yang hyewon</p>
                        <p className="useremail">w2106@e-mirim.hs.kr</p>
                        <button className='userEdit'>EDIT</button>
                    </div>
                </div>

             <div className='totalTime'>
                    <h1 className='totalH1'>{year}년 {month}월 총 공부시간</h1>
                </div>
            </div>

            <div id="container2">
                <div id="usertimecal">
                    <table>
                        <thead>
                        <tr>
                            <th className='studyTimeTh'>Date</th>
                            <th className='studyTimeTh'>Time</th>
                        </tr>
                        </thead>
                        <tbody>{renderStudyTimeRows()}</tbody>
                    </table>
                </div>

                <div id="usercalendar">
                    <div className="calendar">
                        <div className="flex-container">
                            <div id="prev_btn" onClick={prevMonth}>
                                <img src={leftIcon} className='angle-icon' alt="Prev" />
                            </div>
                            <h1 className='calendar-h1'>
                            <span id="title_year"></span>년 <span id="title_month"></span>월
                            </h1>
                            <div id="next_btn" onClick={nextMonth}>
                                <img src={rightIcon} className='angle-icon' alt="Next" />
                            </div>
                        </div>
                        <div id="calendar">
                            <div className="grid-container-calendar">
                            <div className="grid-item days-of-the-week-calendar">일</div>
                            <div className="
                            
                            -item days-of-the-week-calendar">월</div>
                            <div className="grid-item days-of-the-week-calendar">화</div>
                            <div className="grid-item days-of-the-week-calendar">수</div>
                            <div className="grid-item days-of-the-week-calendar">목</div>
                            <div className="grid-item days-of-the-week-calendar">금</div>
                            <div className="grid-item days-of-the-week-calendar">토</div>
                            </div>
                            <div className="date-grid-container"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
