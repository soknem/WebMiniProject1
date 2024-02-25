document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(
    '[data-collapse-toggle="navbar-sticky"]'
  );
  const dropdownMenu = document.getElementById("dropdown-menu");

  menuButton.addEventListener("click", function () {
    if (dropdownMenu.classList.contains("hidden")) {
      dropdownMenu.classList.remove("hidden");
    } else {
      dropdownMenu.classList.add("hidden");
    }
  });
});

let carts = [
  {
    img: "img/java.webp",
    profile: "../img/profile.webp",
    pname: "POV Sokname",
    subject: "Java",
    dest: "Java programming",
    hour: "130h 30mins",
    lect: "30 lectures",
    price: "210$",
  },
  {
    img: "img/c++.jpg",
    profile: "../img/profile.webp",
    pname: "POV Sokname",
    subject: "C++",
    dest: "C++ programming",
    hour: "130h",
    lect: "30 lectures",
    price: "180$",
  },
  {
    img: "img/HTML-tutorial.jpg",
    profile: "../img/profile.webp",
    pname: "POV Sokname",
    subject: "Web",
    dest: "HTML",
    hour: "130h",
    lect: "30 lectures",
    price: "150$",
  },
  {
    img: "../img/UI UX.png",
    profile: "../img/profile.webp",
    pname: "POV Sokname",
    subject: "UX/UI",
    dest: "UX/UI Design",
    hour: "130h",
    lect: "30 lectures",
    price: "180$",
  },
  {
    img: "img/PostgreSQL.png",
    profile: "../img/profile.webp",
    pname: "POV Sokname",
    subject: "Databse",
    dest: "PostgreSQL",
    hour: "130h",
    lect: "30 lectures",
    price: "180$",
  },
];

let item = document.querySelector("#item-home1");
carts.map((cart) => {
  item.innerHTML += `
              <div class="card w-full h-auto max-w-sm bg-white border border-green-500 rounded-lg shadow p-1 m-1 transition duration-150 ease-out transform hover:scale-105">
                  <div class="img flex justify-center items-center overflow-hidden rounded-[5px] h-[40%] mb-1">
                      <img class="rounded-t-lg object-cover h-full w-full" src="${cart.img}" alt="" />
                  </div>
                  <div class="profile flex justify-between items-center bg-green-100 text-gray-700 h-[3rem]">
                      <div class="flex items-center"> <!-- Container for profile photo and name -->
                          <div class="profile-photo overflow-hidden rounded-full bg-gray-100 ml-1 w-[3rem] h-[3rem]">
                              <img src="${cart.profile}" alt="">
                          </div>
                          <div class="profile-name ml-2"> <!-- Adjust margin-left as needed -->
                              <h1>${cart.pname}</h1>
                          </div>
                      </div>
                      <div class="profile-button ">
                          <a href="#" class="w-full inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-white border border-[#309255] text-[#309255] rounded-lg hover:bg-[#309255] hover:text-white transition duration-200 ease-out mr-1">
                              ${cart.subject}
                          </a>
                      </div>
                  </div>
                  <div class="h-[20%] pt-2">
                      <h5 class="mb-2 text-[1.5rem] font-semibold tracking-tight text-gray-700">${cart.dest}</h5>
                  </div>
                  <div class="hour flex justify-between items-center text-gray-700 p-2">
                      <div>${cart.hour}</div>
                      <div>${cart.lect}</div>
                  </div>
                  <div class="p-1 flex justify-between items-center bg-green-100 rounded-[5px]">
                      <h1 class="font-bold text-[#309255] text-[1.2rem] ">${cart.price}</h1>
                      <a href="html/Detail.html" class="inline-flex w-1/3 items-center px-3 py-3 text-sm font-medium text-center bg-white border border-[#309255] text-[#309255] rounded-lg hover:bg-[#309255] hover:text-white transition duration-200 ease-out mr-1">
                          Detail
                          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                      </a>
                  </div>
              </div>
  `;
});
