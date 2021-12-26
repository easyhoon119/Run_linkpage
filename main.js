const face_btn = document.querySelector(".facebook_btn");
const insta_btn = document.querySelector(".insta_btn");
const community_btn = document.querySelector(".community_btn");
const download_btn = document.querySelector(".download_btn");
const mail_btn = document.querySelector(".mail_btn");
const download_btn2 = document.querySelector(".download_btn2");
// const festival_btn = document.querySelector(".festival_btn");
// const event_btn = document.querySelector(".event_btn");

var email = "mju_run@naver.com";
var subject = "2021년도 Run 총학생회 서명운동 참여하기";
var last_msg = "이곳에 서명문에 서명을 기입하여 첨부해주세요!";

face_btn.addEventListener("click", () => {
    window.location.href = "https://www.facebook.com/MJUy48/";
});

insta_btn.addEventListener("click", () => {
    window.location.href = "https://www.instagram.com/mju_run/";
});

community_btn.addEventListener("click", () => {
    window.location.href = "http://pf.kakao.com/_fUCpK";
});

mail_btn.addEventListener("click", () => {
    window.location.href =
        "mailto:" + email + "?subject=" + subject + "&body=" + last_msg;
});

// festival_btn.addEventListener("click", () => {
//     window.location.href = "https://forms.gle/fVs4tJowk9v7EDCU9";
// });

// event_btn.addEventListener("click", () => {
//     window.location.href =
//         "https://docs.google.com/forms/d/e/1FAIpQLSfHpHHCr6c0iHkC4UdrNCjIzt5pJQsH0yN_B_UgeLxwyqAGSw/viewform?usp=sf_link";
// });
