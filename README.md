**[한림대학교]캡스톤 입선작 🥇**

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/4d825104-fe89-4ebe-9308-342789c00893/5a7e3b03-766d-4036-9516-05fd887345c9/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/4d825104-fe89-4ebe-9308-342789c00893/6df38731-6d2d-4a17-83b6-44e5c18056a6/Untitled.png)

**🔎** 목적 및 필요성

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/4d825104-fe89-4ebe-9308-342789c00893/466adf3d-a01f-4331-be82-1770106dbede/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/4d825104-fe89-4ebe-9308-342789c00893/9f916c15-4e33-4cb5-8662-ae4936702dd6/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/4d825104-fe89-4ebe-9308-342789c00893/08c9bb8b-f165-40b7-973f-646fcee9d582/Untitled.png)

**📖 상세 내용**

유튜브에서 시각 장애 학생의 영상을 우연히 보게 된후 아직 사회의 여러 부분에서 시각 장애인을 위한 개선해야 할 점이 많다는 사실을 알게 되었습니다. 특히, 시각 장애 학생들을 위한 대체 자료 제작에는 많은 시간과 비용이 들어간다는 것을 확인하였습니다. 그래서 **Speakdoc**를 통해 음성안내 웹 어플리케이션을 만들면 어떨까? 라는 생각으로 시작 하였습니다.

**📌 주요 기능**

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/4d825104-fe89-4ebe-9308-342789c00893/d1cbdca9-60f4-4740-923e-e4dd7e9f5196/Untitled.png)

PDF 파일을 추가 하면 자동으로 페이지 별로 나뉘어 책 형식으로 볼 수 있게 만들었습니다.

![스크린샷 2024-01-23 오후 9.00.04.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4d825104-fe89-4ebe-9308-342789c00893/ea6a05ff-ab0f-4a8c-9ba5-bd2e8a62c573/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-01-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.00.04.png)

분류된 페이지를 통해서 한 번 클릭시 서버로 페이지 인덱스를 전송합니다. 

서버에서는 인덱스를 통해 페이지를 찾습니다. 찾은 뒤 OCR결과와 CAPTION결과를 반환 합니다.

Redux를 통해 반환된 값을 Store에 저장합니다.

![스크린샷 2024-01-23 오후 9.04.35.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4d825104-fe89-4ebe-9308-342789c00893/3585416d-fd22-40ea-b46d-ada9b05bbd53/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-01-23_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.04.35.png)

[역할] 

- 안승찬  |  프론트엔드 및 기획 및 AI연동
- 김민지  |  백엔드
- 최유빈  |  OCR
- 최재한  |  Captioning

⚒️ **이슈**

- PDF파일을 페이지 단위로 어떻게 자를까?
    - PdfJs를 통해 불러온 PDF파일을 페이지 단위로 구분해 책 형식으로 보여주는 것으로 해결하였습니다.
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/4d825104-fe89-4ebe-9308-342789c00893/1455e5fa-b400-42f7-8b23-94aa7b04175c/Untitled.png)
    
    - State를 통해 총 페이지를 저장하고, 페이지를 넘길 수 있게 제작하였습니다.
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/4d825104-fe89-4ebe-9308-342789c00893/999a56fe-ba82-4780-811f-6bfae6435dfa/Untitled.png)
    
- 페이지를 어떻게 전송할까?
    - html2canvas를 활용해 구분된 현재 Pdf 페이지를 캡쳐하고 , 디코딩후 서버로 전송과 동시에 Store에 저장하였습니다.
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/4d825104-fe89-4ebe-9308-342789c00893/b64df295-afd7-4ca3-b9df-0ccd1542ab32/Untitled.png)
    
- 반환된 결과 값을 어떻게 사용자에게 전달할까?
    - State를 통해 clickcount를 저장하며, clickcount에 따라 번역된 결과를 getSpeech()를 통해 음성으로 제공합니다.
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/4d825104-fe89-4ebe-9308-342789c00893/b3b1bba4-2272-495b-8764-d00f263d750d/Untitled.png)
    

 **⚙️ 사용 기술**

Front | React, Redux, Styled-Components, HtmlCanvas, Js

Back | Spring, Flask

AI | EasyOcr, Captioning

GIt | https://github.com/Ahnseungc/Speakdoc
