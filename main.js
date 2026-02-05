document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        "오늘 편의점 물가를 보고 한숨을 쉬었나요?",
        "월급의 10% 이상을 미래를 위해 따로 떼어두나요?",
        "키오스크나 뱅킹 앱 사용이 가끔 두렵나요?",
        "노후에 몸을 쓸 수 있을 만큼 운동을 하나요?",
        "물가가 오르면 주식을 살 생각을 하시나요?"
    ];

    let currentIdx = 0;
    let score = 0;

    const startBtn = document.getElementById('start-btn');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const retryBtn = document.getElementById('retry-btn');

    startBtn.addEventListener('click', startQuiz);
    yesBtn.addEventListener('click', () => nextQuestion(1));
    noBtn.addEventListener('click', () => nextQuestion(0));
    retryBtn.addEventListener('click', () => location.reload());

    function startQuiz() {
        document.getElementById('main').classList.add('hidden');
        document.getElementById('quiz').classList.remove('hidden');
        showQuestion();
    }

    function showQuestion() {
        document.getElementById('q-text').innerText = questions[currentIdx];
        document.getElementById('progress').innerText = `질문 ${currentIdx + 1} / ${questions.length}`;
    }

    function nextQuestion(point) {
        score += point;
        currentIdx++;

        if (currentIdx < questions.length) {
            showQuestion();
        } else {
            showLoading();
        }
    }

    function showLoading() {
        document.getElementById('quiz').classList.add('hidden');
        document.getElementById('loading').classList.remove('hidden');
        
        setTimeout(() => {
            showResult();
        }, 3000); // 3초 로딩 (광고 노출 시간)
    }

    function showResult() {
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('result').classList.remove('hidden');

        let grade = "";
        let desc = "";

        if (score >= 4) {
            grade = "Lv.1 다이아몬드 실버";
            desc = "폐지 대신 골프공을 줍고 계시군요! 아주 훌륭한 자산 감각을 가지셨습니다.";
        } else if (score >= 2) {
            grade = "Lv.2 아슬아슬 개미";
            desc = "열심히는 하지만 물가 상승 속도가 더 빠를 수 있습니다. 조금 더 공격적인 투자가 필요해요!";
        } else {
            grade = "Lv.3 생존 위기 레벨";
            desc = "위험합니다! 지금 당장 저축과 투자 습관을 고치지 않으면 진짜 리어카를 끌어야 할지도 몰라요.";
        }

        document.getElementById('res-grade').innerText = grade;
        document.getElementById('res-desc').innerText = desc;
    }
});
