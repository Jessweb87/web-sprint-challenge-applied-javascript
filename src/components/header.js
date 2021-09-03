// Create elements
const Header = (title, date, temp) => {
  const mainHeader = document.createElement('div');
  const calendarDate = document.createElement('span');
  const mainTitle = document.createElement('h1');
  const temperature = document.createElement('span');

  // Append child to parent
  mainHeader.appendChild(calendarDate);
  mainHeader.appendChild(mainTitle);
  mainHeader.appendChild(temperature);

  // Add classes
  mainHeader.classList.add('header');
  calendarDate.classList.add('date');
  temperature.classList.add('temp');

  // Add text content
  calendarDate.textContent = date;
  mainTitle.textContent = title;
  temperature.textContent = temp;

  // Remember to return the mainHeader  
  return mainHeader;

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  const newHeader = Header("Lambda Times", "January 6, 2021", "26 \u00B0");
  const second = document.querySelector(selector);
  second.appendChild(newHeader);
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
