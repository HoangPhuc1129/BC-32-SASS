// bắt sự kiện scroll thực hiện sticky header
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  let x = window.pageYOffset;
  // console.log(y);
  if (x > 200) {
    header.classList.add("header1");
    header.classList.remove("header");
  } else {
    header.classList.remove("header1");

    header.classList.add("header");
  }
});

function openSidebar(param) {
  const sideBar = document.querySelector(".header__wrapper3 ");
  if (param) {
    sideBar.style.left = "0px";
    document.querySelector("body").style.marginLeft = "300px";
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";
    document.querySelector("body").style.transition = "all 0.5s";

    document.querySelector(".img1").style.display = "none";
  } else {
    sideBar.style.left = "-300px";
    document.querySelector("body").style.marginLeft = "0px";
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
    document.querySelector(".img1").style.display = "";

    document.querySelector("body").style.transition = "all 0.5s";
  }
}

// responsive
// @media (max-width: 1200px) {
//   .header3 {
//     display: block;
//     .header__wrapper {
//       z-index: 10;
//       position: fixed;
//       left: -300px;
//       width: 300px;
//       height: 100%;
//       background-color: $color-white;
//       transition: all 0.5s ease;
//       box-shadow: 0px 15px 10px 1px rgb(0 0 0 / 10%);
//       .logo {
//         text-align: center;
//       }
//       .navbar {
//         text-align: center;
//         nav {
//           margin: 20px 0;
//           li {
//             position: relative;
//             margin: 30px 0;
//             &.active a {
//               font-weight: 500;
//             }

//             a {
//               text-decoration: none;
//               color: $color-black;
//             }
//             i {
//               position: absolute;
//               right: 20%;
//               font-size: 10px;
//               margin: 5px 0;
//               line-height: 0.5;
//             }
//           }
//         }
//         .header__contact {
//           .header__button {
//             button {
//               i {
//                 color: $color-white;
//               }
//               a {
//                 text-decoration: none;
//                 color: $color-white;
//               }
//             }
//           }
//           .header__socialIcon {
//             margin-top: 10px;
//             a {
//               text-decoration: none;
//               color: $color-black;
//             }
//           }
//         }
//       }
//     }
//     .checkbox {
//       position: fixed;

//       z-index: 132;
//       background-color: $color-white;
//       width: 100%;
//       height: 47px;
//       button#close {
//         display: none;
//         font-size: 2rem;
//         border: none;
//         color: $color-main;
//         transform: translate(15px, 4px);
//       }
//       button#open {
//         font-size: 2rem;
//         border: none;
//         color: $color-main;
//         transform: translate(30px, 5px);
//       }
//       .img1 {
//         width: 40px;
//         display: none;
//         transform: translate(60px, 2px);
//       }
//       .img2 {
//         width: 40px;
//         // display: none;
//         transform: translate(20px, -30px);
//       }
//     }
//   }
//   .header {
//     display: none;
//   }
//   .header1 {
//     display: none;
//   }
// }
