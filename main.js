// 마우스 커서를 이미지로 변경
// 브라우저 크기에 따라 필드의 크기 변경
// 마우스 커서위치의 가로, 세로 선 추가
// 마우스 커서 밑에 좌표 정보 추가
var screenWidth = window.frames.innerWidth;
var screenHeight = window.frames.innerHeight;
var horiSelecetor = document.querySelector(".hori");
var vertSelecetor = document.querySelector(".vert");
var cursorSelector = document.querySelector(".cursor");
var coordSelector = document.querySelector(".coord");

// screen width, height
cursorSelector.style.width = `${screenWidth}px`;
cursorSelector.style.height = `${screenHeight}px`;
window.addEventListener("resize", () => {});

// cursor area - width, height
horiSelecetor.style.width = `${screenWidth}px`;
vertSelecetor.style.height = `${screenHeight}px`;

// mouse coord // line coord setting from mouse coord
document.addEventListener("mousemove", getMouseCoord);
function getMouseCoord(event) {
  horiSelecetor.style.top = `${event.y}px`;
  vertSelecetor.style.left = `${event.x}px`;
  coordSelector.innerHTML = `${event.x}px, ${event.y}px`;
  coordSelector.style.top = `${event.y}px`;
  coordSelector.style.left = `${event.x}px`;

  //cursorSelector.style.cursor = `url(img/target.png) ${event.x} ${event.y}, default`;
}
