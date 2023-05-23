import { bindActionCreators } from "redux";



export const getSpeech = (text) => {
    let voices =[];
    console.log(text);

    const setVoiceList = ()=> {
        voices = window.speechSynthesis.getVoices();
    };

    setVoiceList();

    if(window.speechSynthesis.onvoiceschanged !== undefined){
            window.speechSynthesis.onvoiceschanged =setVoiceList;
    }

    const speech = (txt) =>{
        const lang = "ko-KR";
        const utterThis = new SpeechSynthesisUtterance(txt);


        utterThis.lang = lang;

        const kor_voice = voices.find(
            (elem) => elem.lang === lang || elem.lang === lang.replace("-", "_")
          );

          if (kor_voice) {
            utterThis.voice = kor_voice;
          } else {
            return;
          }
          window.speechSynthesis.speak(utterThis);
    };

    speech(text)


}