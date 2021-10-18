const face_btn = document.querySelector('.facebook_btn');
const insta_btn = document.querySelector('.insta_btn');
const community_btn = document.querySelector('.community_btn');
const download_btn = document.querySelector('.download_btn');
const mail_btn = document.querySelector('.mail_btn');
const download_btn2 = document.querySelector('.download_btn2');
const commission_btn = document.querySelector('.centerCommission');
const num1_btn = document.querySelector('.voting_num1');
const num2_btn = document.querySelector('.voting_num2');
// const event_btn = document.querySelector('.event_btn');

var email = 'mju_run@naver.com';
var subject = '2021년도 Run 총학생회 서명운동 참여하기';
var last_msg = '이곳에 서명문에 서명을 기입하여 첨부해주세요!';

face_btn.addEventListener('click', () => {
    window.location.href = 'https://www.facebook.com/MJUy48/';
});

insta_btn.addEventListener('click', () => {
    window.location.href = 'https://www.instagram.com/mju_run/'
});

community_btn.addEventListener('click', () => {
    window.location.href = 'http://pf.kakao.com/_fUCpK';
});

mail_btn.addEventListener('click', () => {
    window.location.href = 'mailto:' + email + '?subject=' + subject + '&body=' + last_msg;
});

commission_btn.addEventListener('click',()=>{
    window.location.href = 'https://www.instagram.com/mju_election_commission/?hl=ko';
});

num1_btn.addEventListener('click',()=>{
    window.location.href = 'https://www.instagram.com/mju_ec_jeong/?hl=ko';
});

num2_btn.addEventListener('click',()=>{
    window.location.href = 'https://www.instagram.com/mju_ec_alt/?hl=ko';
});

// event_btn.addEventListener('click', () => {
//     window.location.href = "https://forms.gle/bHiL61xZUmax3UuU7";
// });



