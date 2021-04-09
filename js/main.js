let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

var myWindow;
let penrai = ["เเล้ววันนี้คนไข้มีอาการอะไรมาครับ", "เเล้ววันนี้คนไข้มีอาการอะไรมาครับ", "เเล้ววันนี้คนไข้มีอาการอะไรมาครับ"];
let podhua = ["ปวดมากี่วันแล้วครับ","ปวดมากี่วันแล้ว","ปวดมากี่วันแล้ว"];
let wan = ["คนไข้ วัดอุณภูมิ หรือยังครับ", "คนไข้ วัดอุณภูมิ หรือยังครับ", "คนไข้ วัดอุณภูมิ หรือยังครับ", "คนไข้ วัดอุณภูมิ หรือยังครับ"];
let asktemp = ["เท่าไหร่ครับ", "เท่าไหร่ครับ", "เท่าไหร่ครับ"];
let Jeabchor = ["เจ็บคอมั้ยครับ", "เจ็บคอมั้ยครับ", "เจ็บคอมั้ยครับ", "เจ็บคอมั้ยครับ"];
let thank = ["เดี๋ยวเชิญเข้าห้องตรวจที่ 2 ครับ","เดี๋ยวเชิญเข้าห้องตรวจที่ 3 ครับ","เดี๋ยวเชิญเข้าห้องตรวจที่ 4 ครับ","เดี๋ยวเชิญเข้าห้องตรวจที่ 5 ครับ"];
let closing = ['ใช่ครับ','ใช่ค่ะ'];


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'th-TH';
recognition.interimResults = false;
recognition.continuous = false;

const sprc = window.SpeechRecognition || window.webkitSpeechRecognition;
const rec = new SpeechRecognition();
rec.lang = 'th-TH';
rec.interimResults = false;
rec.continuous = true;
rec.maxAlternatives = 1;
//rec.start(); //มันจะฟังเสียงบอทพูด ฟังครั้งแรก ต่อไปต้องกด

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}


function chatbotvoice(message){


    var speech = new SpeechSynthesisUtterance();
    
    

    if(message.includes('ผมชื่อ')){
        let finalresult = penrai[Math.floor(Math.random() * penrai.length)];
        speech.text = finalresult;
    }
    if(message.includes( 'ฉันชื่อ')){
        let finalresult = penrai[Math.floor(Math.random() * penrai.length)];
        
        speech.text = finalresult;
    }
    if(message.includes('ปวดหัว' )){
        let finalresult = podhua[Math.floor(Math.random() * podhua.length)];
        speech.text = finalresult;
    }
    if(message.includes('หลายวันแล้ว')){
        let finalresult = wan[Math.floor(Math.random() * wan.length)];
        speech.text = finalresult;
    }
    if(message.includes('3 วันแล้ว')){
        let finalresult = wan[Math.floor(Math.random() * wan.length)];
        speech.text = finalresult;
    }
    if(message.includes('วัดอุณหภูมิแล้ว')){
        let finalresult = asktemp[Math.floor(Math.random() * asktemp.length)];
        speech.text = finalresult;
    }
    if(message.includes('36.5')){
        let finalresult = Jeabchor[Math.floor(Math.random() * Jeabchor.length)];
        speech.text = finalresult;
    }

    if(message.includes('องศา')){
        let finalresult = Jeabchor[Math.floor(Math.random() * Jeabchor.length)];
        speech.text = finalresult;
    }
    
    if(message.includes('เจ็บคอ' )){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if(message.includes('ไปทางไหน')){
        
        window.open("https://www.google.co.th/maps/place/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%AA%E0%B8%A3%E0%B8%B4%E0%B8%A1%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%95%E0%B8%B3%E0%B8%9A%E0%B8%A5%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%88%E0%B8%B2%E0%B8%81/@10.7719059,99.3954974,17z/data=!3m1!4b1!4m5!3m4!1s0x30ff4642569fa129:0x26d5de083815eb08!8m2!3d10.7719006!4d99.3976861");
    }
    if(message.includes('โรงพยาบาลส่งเสริมสุขภาพตำบล')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
        window.open("http://gishealth.moph.go.th/pcu/admin/pcu.php?code=04358");
    }
    if(message.includes('หยุดการทำงาน')){
       
            myWindow.close();
          
    }
    if(message.includes('เริ่มใหม่')){
        location.reload();  
    }
  
    if(message.includes('ไปยังหน้าจดโน้ต')){
        window.close();
        window.open("https://healthhelpervoicebot.netlify.app/speechtotext.html");
    }

    
    speechSynthesis.speak(speech);
    speech.lang = 'th-TH';
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text)); //โชว์ข้อความที่ตรงกับเงื่อนไขไปยังหน้าเว็บ speech.text = finalresult;

    scrollWin();
    
}
//ผลลัพธ์จากการฟังเสียงพูดของเรา
recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript; //เก็บ string ที่ได้มาจาก web speech api มาเก็บไว้ในตัวเเปล transcript
    chatareamain.appendChild(showusermsg(transcript)); //เอาข้อความของเราไปโชว์ในหน้าเว็บ
    chatbotvoice(transcript);//ส่ง string ไปยังฟังฟ์ชัน function chatbotvoice(message) เพื่อที่จะหาว่าคำพูดตรงกับเงื่อนไขไหนเเล้วจะตอบกลับมา
    console.log(transcript);
}
//ฟังก์ชันกดปุ่มอีกครั้ง (กดหยุด) จะหยุดฟังเสียงของเรา
recognition.onend=function(){
    mic.style.background="#ff3b3b";
    
}
//ฟังก์ชันกดปุ่มเเล้วจะเริ่มฟังเสียง
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})
function scrollWin() {
    window.scrollTo(0,document.body.scrollHeight);
  }