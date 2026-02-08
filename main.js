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

    const views = {
        main: document.getElementById('main'),
        quiz: document.getElementById('quiz'),
        loading: document.getElementById('loading'),
        result: document.getElementById('result'),
    };

    const startBtn = document.getElementById('start-btn');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const retryBtn = document.getElementById('retry-btn');

    startBtn.addEventListener('click', startQuiz);
    yesBtn.addEventListener('click', () => nextQuestion(1));
    noBtn.addEventListener('click', () => nextQuestion(0));
    retryBtn.addEventListener('click', () => {
        // Reset state and go to main view
        currentIdx = 0;
        score = 0;
        switchView('main');
    });

    function switchView(viewName) {
        Object.values(views).forEach(view => view.classList.remove('active'));
        views[viewName].classList.add('active');
    }

    function startQuiz() {
        switchView('quiz');
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
        switchView('loading');
        setTimeout(showResult, 3000); // 3-second loading time
    }

    function showResult() {
        let grade = "";
        let desc = "";

        if (score >= 4) {
            grade = "Lv.5 마스터";
            desc = "당신은 미래 생존 마스터! 어떤 위기 속에서도 빛나는 통찰력으로 앞서나갑니다.";
        } else if (score >= 2) {
            grade = "Lv.3 일반인";
            desc = "평범하지만 꾸준함으로 미래를 준비하는 당신! 작은 변화가 큰 차이를 만듭니다.";
        } else {
            grade = "Lv.1 위기";
            desc = "미래 생존 위기 단계! 지금 바로 재정 습관을 점검하고 새로운 지식을 습득해야 합니다.";
        }

        document.getElementById('res-grade').innerText = grade;
        document.getElementById('res-desc').innerText = desc;
        
        switchView('result');
    }

    // Initial view setup
    switchView('main');
});
