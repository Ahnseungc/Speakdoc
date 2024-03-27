**[한림대학교]캡스톤 🥇**

<img width="600" alt="스크린샷 2024-03-27 오후 8 25 44" src="https://github.com/Ahnseungc/Speakdoc/assets/94547692/53956b2d-3c87-4f1e-94cd-5d60778d18e1">


<br/>
<br/>

**🔎** 목적 및 필요성

<div style={textAlign:center}>
<img width="692" alt="스크린샷 2024-03-27 오후 8 27 11" src="https://github.com/Ahnseungc/Speakdoc/assets/94547692/c17d564b-a81e-4fc9-aff0-d5b6a3eccc5c">

<img width="692" alt="스크린샷 2024-03-27 오후 8 27 27" src="https://github.com/Ahnseungc/Speakdoc/assets/94547692/15a13f3b-f4aa-4a94-9496-b65a87913453">

<img width="692" alt="스크린샷 2024-03-27 오후 8 27 40" src="https://github.com/Ahnseungc/Speakdoc/assets/94547692/0ea9d93d-aa34-4c81-bf36-25b12a888452">
</div>

<br/>
<br/>
**📖 상세 내용**

유튜브에서 시각 장애 학생의 영상을 우연히 보게 된후 아직 사회의 여러 부분에서 시각 장애인을 위한 개선해야 할 점이 많다는 사실을 알게 되었습니다. 특히, 시각 장애 학생들을 위한 대체 자료 제작에는 많은 시간과 비용이 들어간다는 것을 확인하였습니다. 그래서 **Speakdoc**를 통해 음성안내 웹 어플리케이션을 만들면 어떨까? 라는 생각으로 시작 하였습니다.

<br/>
<br/>
**📌 주요 기능**

<img width="692" alt="스크린샷 2024-03-27 오후 8 28 01" src="https://github.com/Ahnseungc/Speakdoc/assets/94547692/3ee89cd7-4658-464d-9396-66ee8722a0e5">


PDF 파일을 추가 하면 자동으로 페이지 별로 나뉘어 책 형식으로 볼 수 있게 만들었습니다.

<img width="692" alt="스크린샷 2024-03-27 오후 8 28 18" src="https://github.com/Ahnseungc/Speakdoc/assets/94547692/40046b33-3593-4d51-8c6f-966478f82143">

<br/>
<br/>
분류된 페이지를 통해서 한 번 클릭시 서버로 페이지 인덱스를 전송합니다. 

서버에서는 인덱스를 통해 페이지를 찾습니다. 찾은 뒤 OCR결과와 CAPTION결과를 반환 합니다.

Redux를 통해 반환된 값을 Store에 저장합니다.
<br/>
<br/>

<img width="692" alt="스크린샷 2024-03-27 오후 8 28 36" src="https://github.com/Ahnseungc/Speakdoc/assets/94547692/6c8c10cb-b350-4526-8618-1d8dc264e6ef">
<br/>
<br/>

[역할] 

- 안승찬  |  프론트엔드 및 기획 및 AI연동
- 김민지  |  백엔드
- 최유빈  |  OCR
- 최재한  |  Captioning
<br/>
<br/>

 **⚙️ 사용 기술**

Front | React, Redux, Styled-Components, HtmlCanvas, Js

Back | Spring, Flask

AI | EasyOcr, Captioning

