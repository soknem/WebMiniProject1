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
    img: "../img/java.webp",
    profile: "../img/profile.webp",
    pname: "POV Sokname",
    subject: "Java",
    dest: "Java programming",
    hour: "130h 30mins",
    lect: "30 lectures",
    price: "130$",
  },
  {
    img: "../img/HTML-tutorial.jpg",
    profile: "../img/profile.webp",
    pname: "POV Sokname",
    subject: "Java",
    dest: "HTML",
    hour: "130h",
    lect: "30 lectures",
    price: "130$",
  },
  {
    img: "../img/c++.ong",
    profile: "../img/profile.webp",
    pname: "POV Sokname",
    subject: "Java",
    dest: "c++ programming",
    hour: "130h",
    lect: "30 lectures",
    price: "130$",
  },
  {
    img: "../img/shool logo3.png",
    profile: "../img/profile.webp",
    pname: "POV Sokname",
    subject: "Java",
    dest: "Java programming",
    hour: "130h",
    lect: "30 lectures",
    price: "130$",
  },
  {
    img: "../img/shool logo3.png",
    profile: "../img/profile.webp",
    pname: "POV Sokname",
    subject: "Java",
    dest: "Java programming",
    hour: "130h 30mins",
    lect: "30 lectures",
    price: "130$",
  },
];
let carts2 = [
  {
    img: "../img/shool logo3.png",
    profile: "../img/profile.webp",
    pname: "POV Sokname",
    subject: "Java",
    dest: "Java programming",
    hour: "130h 30mins",
    lect: "30 lectures",
    price: "130$",
  },
];

let carts3 = [
  {
    img: "../img/shool logo3.png",
    profile: "../img/profile.webp",
    pname: "POV Sokname",
    subject: "Java",
    dest: "Java programming",
    hour: "130h 30mins",
    lect: "30 lectures",
    price: "130$",
  },
  {
    img: "../img/shool logo3.png",
    profile: "../img/profile.webp",
    pname: "POV Sokname",
    subject: "Java",
    dest: "Java programming",
    hour: "130h 30mins",
    lect: "30 lectures",
    price: "130$",
  },
  {
    img: "../img/shool logo3.png",
    profile: "../img/profile.webp",
    pname: "POV Sokname",
    subject: "Java",
    dest: "Java programming",
    hour: "130h 30mins",
    lect: "30 lectures",
    price: "130$",
  },
];

let carts4 = [
  {
    img: "../img/shool logo3.png",
    profile: "../img/profile.webp",
    pname: "POV Sokname",
    subject: "Java",
    dest: "Java programming",
    hour: "130h 30mins",
    lect: "30 lectures",
    price: "130$",
  },
  {
    img: "../img/shool logo3.png",
    profile: "../img/profile.webp",
    pname: "POV Sokname",
    subject: "Java",
    dest: "Java programming",
    hour: "130h 30mins",
    lect: "30 lectures",
    price: "130$",
  },
];

let item = document.querySelector("#item-all2");
carts2.map((cart) => {
  item.innerHTML += `
                <div class="card w-full max-w-sm bg-white border border-green-500 rounded-lg shadow p-1 sm:m-1 md:m-2 transition duration-150 ease-out transform hover:scale-105">
                <div class="img flex justify-center items-center overflow-hidden rounded-[5px] h-[14rem]">
                    <img class="rounded-t-lg object-cover " src="${cart.img}" alt="" />
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
                <div class="h-auto pb-4 pt-2">
                    <h5 class="mb-2 text-[1.5rem] font-semibold tracking-tight text-gray-700">${cart.dest}</h5>
                </div>
                <div class="hour flex justify-between items-center text-gray-700 p-2">
                    <div>${cart.hour}</div>
                    <div>${cart.lect}</div>
                </div>
                <div class="p-2 flex justify-between items-center bg-green-100 rounded-[5px]">
                    <h1 class="font-bold text-[#309255] text-[1.2rem] ">${cart.price}</h1>
                    <a href="html/Detail.html" class="inline-flex w-1/3 items-center px-3 py-2 text-sm font-medium text-center bg-white border border-[#309255] text-[#309255] rounded-lg hover:bg-[#309255] hover:text-white transition duration-200 ease-out mr-1">
                        Detail
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </a>
                </div>
            </div>
`;
});

let item1 = document.querySelector("#item-all1");
carts.map((cart) => {
  item1.innerHTML += `
                <div class="card w-full max-w-sm bg-white border border-green-500 rounded-lg shadow p-1 sm:m-1 md:m-2 transition duration-150 ease-out transform hover:scale-105">
                <div class="img flex justify-center items-center overflow-hidden rounded-[5px] h-[14rem]">
                    <img class="rounded-t-lg object-cover h-[100%] h-[100%]" src="${cart.img}" alt="" />
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
                <div class="h-auto pb-4 pt-2">
                    <h5 class="mb-2 text-[1.5rem] font-semibold tracking-tight text-gray-700">${cart.dest}</h5>
                </div>
                <div class="hour flex justify-between items-center text-gray-700 p-2">
                    <div>${cart.hour}</div>
                    <div>${cart.lect}</div>
                </div>
                <div class="p-2 flex justify-between items-center bg-green-100 rounded-[5px]">
                    <h1 class="font-bold text-[#309255] text-[1.2rem] ">${cart.price}</h1>
                    <a href="../html/Detail.html" class="inline-flex w-1/3 items-center px-3 py-2 text-sm font-medium text-center bg-white border border-[#309255] text-[#309255] rounded-lg hover:bg-[#309255] hover:text-white transition duration-200 ease-out mr-1">
                        Detail
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </a>
                </div>
            </div>
`;
});

let item3 = document.querySelector("#item-all3");
carts3.map((cart) => {
  item3.innerHTML += `
                <div class="card w-full max-w-sm bg-white border border-green-500 rounded-lg shadow p-1 sm:m-1 md:m-2 transition duration-150 ease-out transform hover:scale-105">
                <div class="img flex justify-center items-center overflow-hidden rounded-[5px] h-[14rem]">
                    <img class="rounded-t-lg object-cover" src="${cart.img}" alt="" />
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
                <div class="h-auto pb-4 pt-2">
                    <h5 class="mb-2 text-[1.5rem] font-semibold tracking-tight text-gray-700">${cart.dest}</h5>
                </div>
                <div class="hour flex justify-between items-center text-gray-700 p-2">
                    <div>${cart.hour}</div>
                    <div>${cart.lect}</div>
                </div>
                <div class="p-2 flex justify-between items-center bg-green-100 rounded-[5px]">
                    <h1 class="font-bold text-[#309255] text-[1.2rem] ">${cart.price}</h1>
                    <a href="../html/Detail.html" class="inline-flex w-1/3 items-center px-3 py-2 text-sm font-medium text-center bg-white border border-[#309255] text-[#309255] rounded-lg hover:bg-[#309255] hover:text-white transition duration-200 ease-out mr-1">
                        Detail
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </a>
                </div>
            </div>
`;
});

let item4 = document.querySelector("#item-all4");
carts4.map((cart) => {
  item4.innerHTML += `
                <div class="card w-full max-w-sm bg-white border border-green-500 rounded-lg shadow p-1 sm:m-1 md:m-2 transition duration-150 ease-out transform hover:scale-105">
                <div class="img flex justify-center items-center overflow-hidden rounded-[5px] h-[14rem]">
                    <img class="rounded-t-lg object-cover" src="${cart.img}" alt="" />
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
                <div class="h-auto pb-4 pt-2">
                    <h5 class="mb-2 text-[1.5rem] font-semibold tracking-tight text-gray-700">${cart.dest}</h5>
                </div>
                <div class="hour flex justify-between items-center text-gray-700 p-2">
                    <div>${cart.hour}</div>
                    <div>${cart.lect}</div>
                </div>
                <div class="p-2 flex justify-between items-center bg-green-100 rounded-[5px]">
                    <h1 class="font-bold text-[#309255] text-[1.2rem] ">${cart.price}</h1>
                    <a href="../html/Detail.html" class="inline-flex w-1/3 items-center px-3 py-2 text-sm font-medium text-center bg-white border border-[#309255] text-[#309255] rounded-lg hover:bg-[#309255] hover:text-white transition duration-200 ease-out mr-1">
                        Detail
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </a>
                </div>
            </div>
`;
});
