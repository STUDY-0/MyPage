import React, { useEffect } from 'react';
import './App.css';
import './Navbar.css';
import logo from './logo.png';
import leftIcon from './free-icon-font-angle-left-3916934.svg';
import rightIcon from './free-icon-font-angle-right-3916924.svg';

function App() {
    useEffect(() => {
        // 현재 구하자
        let now = new Date();
        // 현재 년
        let year = now.getFullYear();
        // 현재 월
        let month = now.getMonth(); //0~11
        month++;


        const setCalendar = (year, month) => {
            // 1일이 무슨 요일?
            let firstDate = new Date(year, month - 1, 1);
            let firstDay = firstDate.getDay();

            // 말일은 며칠?
            let lastDate = new Date(year, month, 0).getDate();  //2022년 10월 0일 = 2022년 9월 말일

            // 제목 표시하자
            const setTitle = (year, month) => {
                // console.log(`${year}년 ${month}월`)
                let title_year = document.getElementById("title_year");
                title_year.innerHTML = year;    //니꼴라스 says
                let title_month = document.getElementById("title_month");
                title_month.innerHTML = month
            }
            setTitle(year, month);

            const dateGridContainerDiv = document.getElementsByClassName("date-grid-container")[0];
            dateGridContainerDiv.innerHTML = "";    //초기화
            // 1~말일까지 grid-item 만들자
            for (let i = 1; i <= lastDate; i++) {
                //요소 만들자
                let newDiv = document.createElement("div");
                //class에 grid-item 넣자
                newDiv.classList.add("grid-item");
                //text에 숫자 넣자
                newDiv.innerHTML = i;
                //부모에 newDiv 달자
                dateGridContainerDiv.appendChild(newDiv);
            }

            // 1일에 해당하는 div를 grid-column-start: 요일 + 1;
            let firstDateDiv = dateGridContainerDiv.getElementsByClassName("grid-item")[0];
            firstDateDiv.style.gridColumnStart = firstDay + 1;

        }
        setCalendar(year, month);
        //이전 달 달력 보이자
        const prevMonth = () => {
            month--;
            //month가 0이면, month = 12, year--;
            if (month == 0) {
                year--;
                month = 12;
            }
            setCalendar(year, month);
        }

        //다음 달 달력 보이자
        const nextMonth = () => {
            month++;
            //month가 13이면, month = 1, year++;
            if (month == 13) {
                year++;
                month = 1;
            }
            setCalendar(year, month);
        }

        const initButton = () => {
            const prev_btn = document.getElementById("prev_btn");
            const next_btn = document.getElementById("next_btn");

            //js event 달자
            // prev_btn.addEventListener("click", prevMonth);
            // next_btn.addEventListener("click", nextMonth);
            prev_btn.onclick = prevMonth;
            next_btn.onclick = nextMonth;
        }
        initButton();

    
    }, []);

    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    const timeSlots = ['1', '2', '3', '4', '5', '6', '7'];

    const timetableData = [
        { day: 'Mon', time: '1', subject: '국어' },
        { day: 'Tue', time: '2', subject: 'DB' },
        { day: 'Thu', time: '3', subject: 'UI/UX' },
    ];

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
                    <img id="profile" src="./img/user1.png" alt="profile"/>
            
                    <div id="userinfo">
                        <p className="username">yang hyewon</p>
                        <p className="useremail">w2106@e-mirim.hs.kr</p>
                    </div>
                </div>
                
                <div id="usertable">
                <table className='timetable'>
                <thead>
                    <tr>
                    <th></th>
                    {daysOfWeek.map(day => (
                        <th className='th' key={day}>{day}</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    {timeSlots.map(time => (
                    <tr key={time}>
                        <td className='td td-time'>{time}</td>
                        {daysOfWeek.map(day => (
                        <td key={day + time} className='td td-data'>
                            {/* 해당 셀에 항목이 있는 경우 표시합니다. */}
                            {timetableData.find(item => item.day === day && item.time === time)?.subject}
                        </td>
                        ))}
                    </tr>
                    ))}
                </tbody>
                </table>
                </div>
            </div>
            
            <div id="container2">
                <div id="usertc">
                    <div id="usertimecal">
                        <p className="cal1">3/22</p>
                        <p className="cal2">3/22</p>
                        <p className="cal3">3/22</p>
                        <p className="cal4">3/22</p>
                        <p className="cal4">3/22</p>
                        <p className="cal4">3/22</p>
                        <p className="cal4">3/22</p>
                        <p className="cal4">3/22</p>
                        <p className="cal4">3/22</p>
                    </div>
                        
                    <div id="usertime">
                        <p className="time1">2 : 00 : 00</p>
                        <p className="time2">2 : 00 : 00</p>
                        <p className="time3">2 : 00 : 00</p>
                        <p className="time4">2 : 00 : 00</p>
                        <p className="time4">2 : 00 : 00</p>
                        <p className="time4">2 : 00 : 00</p>
                        <p className="time4">2 : 00 : 00</p>
                        <p className="time4">2 : 00 : 00</p>
                        <p className="time4">2 : 00 : 00</p>
                    </div>
                </div>

                <div id="usercalendar">
                    <div className="calendar">
                        <div className="flex-container">
                            <div id="prev_btn"><img src={leftIcon} className='angle-icon'></img></div>
                                <h1 className='calendar-h1'><span id="title_year"></span>년 <span id="title_month"></span>월</h1>
                            <div id="next_btn"><img src={rightIcon} className='angle-icon'></img></div>
                        </div>
                        <div id="calendar">
                            <div className="grid-container-calendar">
                                <div className="grid-item days-of-the-week-calendar">일</div>
                                <div className="grid-item days-of-the-week-calendar">월</div>
                                <div className="grid-item days-of-the-week-calendar">화</div>
                                <div className="grid-item days-of-the-week-calendar">수</div>
                                <div className="grid-item days-of-the-week-calendar">목</div>
                                <div className="grid-item days-of-the-week-calendar">금</div>
                                <div className="grid-item days-of-the-week-calendar">토</div>
                            </div>
                            <div className="date-grid-container">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
