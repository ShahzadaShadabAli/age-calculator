function App() {
  
  
  const handleSubmit = (e) => {
    const largeMonths = [1, 3, 5, 7, 8, 10, 12]
    const midMonths = [4, 6, 9, 11]
    const thisYear = new Date().getFullYear()

    let canCalculate = true
  
    const dayLabel = document.querySelector('.day-label')
    const monthLabel = document.querySelector('.month-label')
    const yearLabel = document.querySelector('.year-label')
  
    const dayInput = document.querySelector('.day-input')
    const monthInput = document.querySelector('.month-input')
    const yearInput = document.querySelector('.year-input')
  
    const dayAlert = document.querySelector('.day-alert')
    const monthAlert = document.querySelector('.month-alert')
    const yearAlert = document.querySelector('.year-alert')
  
    const calDay = document.querySelector('.calculated-day')
    const calMonth = document.querySelector('.calculated-month')
    const calYear = document.querySelector('.calculated-year')

    e.preventDefault()

    const day = dayInput.value
    const month = monthInput.value
    const year = yearInput.value

    if (!day) {
      dayLabel.classList.add('text-[#ff5757]')
      dayInput.classList.add('border-[#ff5757]')
      dayAlert.textContent = "This field is required"
      dayAlert.classList.remove('hidden')
      canCalculate = true
    }
    
    if (!month) {
      monthLabel.classList.add('text-[#ff5757]')
      monthInput.classList.add('border-[#ff5757]')
      monthAlert.textContent = "This field is required"
      monthAlert.classList.remove('hidden')
      canCalculate = true
    }
    
    if (!year) {
      yearLabel.classList.add('text-[#ff5757]')
      yearInput.classList.add('border-[#ff5757]')
      yearAlert.textContent = "This field is required"
      yearAlert.classList.remove('hidden')
      canCalculate = true
    }


    if (largeMonths.find(m => m == month) && day > 31 || midMonths.find(m => m == month) && day > 30 || month == 2 && day > 29) {
      dayLabel.classList.add('text-[#ff5757]')
      dayInput.classList.add('border-[#ff5757]')
      dayAlert.textContent = "Must be a valid day"
      dayAlert.classList.remove('hidden')
      canCalculate = true
    }

    if (month > 12) {
      monthLabel.classList.add('text-[#ff5757]')
      monthInput.classList.add('border-[#ff5757]')
      monthAlert.textContent = "Must be a valid month"
      monthAlert.classList.remove('hidden')
      canCalculate = true
    }

    if (year > thisYear) {
      yearLabel.classList.add('text-[#ff5757]')
      yearInput.classList.add('border-[#ff5757]')
      yearAlert.textContent = "Must be in the past"
      yearAlert.classList.remove('hidden')
      canCalculate = true
    }

    if (canCalculate) {
      const today = new Date();
      const birthDate = new Date(`${year}-${month}-${day}`);
  
      let years = today.getFullYear() - birthDate.getFullYear();
      let months = today.getMonth() - birthDate.getMonth();
      let days = today.getDate() - birthDate.getDate();
  
      if (days < 0) {
          months--;
          const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
          days += lastMonth.getDate();
      }
  
      if (months < 0) {
          years--;
          months += 12;
      }
      let i = 1
      let j = 1
      let k = 1
      
      const dayTimeInterval = setInterval(() => {
        if (i <= days) {
          calDay.textContent = i
          i++
        } else {
          clearInterval(dayTimeInterval)
        }
        
      }, 50)

      const monthTimeInterval = setInterval(() => {
        if (j <= months) {
          calMonth.textContent = j
          j++
        } else {
          clearInterval(monthTimeInterval)
        }
        
      }, 50)

      const yearTimeInterval = setInterval(() => {
        if (k <= years) {
          calYear.textContent = k
          k++
        } else {
          clearInterval(yearTimeInterval)
        }
        
      }, 50)

      if (!days) {
        calDay.textContent = 0
      }

      if (!months) {
        calMonth.textContent = 0
      }

      if (!years) {
        calYear.textContent = 0
      }
  
    }
    

  }

  return (
   <main className="w-full min-h-screen bg-[#f0f0f0] flex justify-center items-center">
      <div className="w-[39.2rem] max-sm:px-5 max-md:w-[90%] relative bg-white h-[30.4rem] rounded-2xl rounded-br-[150px] p-[2.65rem]">
        <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-4 max-md:grid-cols-3">
          <div className="flex flex-col gap-2 text-[#707070] font-b">
              <label className="tracking-[0.12rem] text-[.7rem] day-label">DAY</label>
              <input type="number" placeholder="DD" className="day-input outline-[#854dff] placeholder:text-2xl p-[1.1rem] text-black text-2xl w-[88%] caret-[#854dff] outline-1 h-[3.3rem] border border-[#dbdbdb] rounded-md" />
              <span className="text-[.6rem] font-i text-[#de4141] day-alert hidden"></span>
          </div>
          <div className="flex flex-col ml-2 gap-2 text-[#707070] font-b">
              <label className="tracking-[0.12rem] text-[.7rem] month-label">MONTH</label>
              <input type="number" placeholder="MM" className="month-input outline-[#854dff] placeholder:text-2xl p-[1.1rem] text-black text-2xl w-[88%] caret-[#854dff] outline-1 h-[3.3rem] border border-[#dbdbdb] rounded-md" />
              <span className="text-[.6rem] font-i text-[#de4141] month-alert hidden"></span>
          </div>
          <div className="flex flex-col gap-2 ml-2 text-[#707070] font-b">
              <label className="tracking-[0.12rem] text-[.7rem] year-label">YEAR</label>
              <input type="number" placeholder="YYYY" className="year-input outline-[#854dff] placeholder:text-2xl p-[1.1rem] text-black text-2xl w-[88%] caret-[#854dff] outline-1 h-[3.3rem] border border-[#dbdbdb] rounded-md" />
              <span className="text-[.6rem] font-i text-[#de4141] year-alert hidden"></span>
          </div>
        </div>
        <div className="relative py-9 max-sm:py-16">
        <hr className="h-[1px] bg-gray-200" />
        <button type="submit" class="bg-[#854dff] cursor-pointer hover:bg-black p-5 rounded-full max-md:left-1/2 max-md:-translate-x-1/2 max-md:top-3 max-sm:top-7 absolute top-0 right-0 w-[75px] h-[75px] max-md:w-[50px] max-md:h-[50px] max-md:p-3 max-sm:p-5 max-sm:w-[75px] max-sm:h-[75px]">
    <img src="/assets/images/icon-arrow.svg" alt="" />
  </button>
        </div>
        </form>
        <div className="flex flex-col gap-2">
          <h1 className="font-i-b max-sm:text-[3rem] text-7xl"><span className="text-[#854dff] calculated-year">- -</span> years</h1>
          <h1 className="font-i-b max-sm:text-[3rem] text-7xl"><span className="text-[#854dff] calculated-month">- -</span> months</h1>
          <h1 className="font-i-b max-sm:text-[3rem] text-7xl"><span className="text-[#854dff] calculated-day">- -</span> days</h1>
        </div>
       </div>
   </main>
  )
}

export default App
