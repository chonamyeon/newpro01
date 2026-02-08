# Project Blueprint: QUIZFLIX - 2050 미래 생존 테스트

## Project Overview

This project is a simple web-based quiz application called "QUIZFLIX" that tests a user's "future survival level" based on their answers to a series of questions. It's designed with a Netflix-inspired aesthetic, featuring a dark theme and interactive elements. The application determines a user's survival grade and provides a corresponding description.

## Implemented Features & Design

### Initial Version

*   **HTML Structure (`index.html`):**
    *   Basic HTML5 document with `ko` language.
    *   Title: "QUIZFLIX - 당신의 생존 레벨은?"
    *   Linked Google Fonts: `Bebas Neue` and `Noto Sans KR`.
    *   Linked `style.css`.
    *   `app-container` with `main-header` (featuring `QUIZFLIX` logo) and `main` section.
    *   Four main views (sections) for the application flow:
        *   `#main`: Hero section with a title ("2050 미래 생존 테스트"), subtitle, and a "테스트 시작하기" button (`#start-btn`).
        *   `#quiz`: Displays quiz questions, progress, and "그렇다" / "아니다" answer buttons.
        *   `#loading`: Shows a loading animation and text while results are being processed.
        *   `#result`: Displays the "나의 생존 등급", score grade (`#res-grade`), result description (`#res-desc`), and a "다시 하기" button.
    *   Linked `main.js` at the end of the `body`.
*   **CSS Styling (`style.css`):**
    *   Uses CSS variables for colors (`--bg-color`, `--card-bg`, `--primary-red`, `--text-color`, `--text-secondary`) and fonts (`--font-title`, `--font-body`).
    *   Global reset (`*`).
    *   `body` styled with a dark background, `Noto Sans KR` font, and `overflow-x: hidden`.
    *   Styling for `app-container`, `main-header`, `logo`, `#app` (main content area).
    *   View transition classes (`.view`, `.view.active`).
    *   Hero section styling (`.hero-content`, `.main-title`, `.subtitle`).
    *   Card styling (`.card`) with a dark background, border, and shadow.
    *   Quiz elements styling (`#progress`, `.question`, `.btn-group`).
    *   Button styling (`.btn`, `.btn-primary`, `.btn-ans`) with hover effects (`transform: scale(1.03)`).
    *   Loading animation (`.loader`, `.loading-text`) with a `spin` keyframe animation.
    *   Result section styling (`.result-title`, `.result-score`, `#res-desc`, `#retry-btn`).
    *   Responsive design for smaller screens (`@media (max-width: 600px)`).
*   **JavaScript Logic (`main.js`):**
    *   Event listener for `DOMContentLoaded`.
    *   Defines an array of `questions`.
    *   Manages `currentIdx` and `score`.
    *   References DOM elements for views and buttons.
    *   Event listeners for `startBtn`, `yesBtn`, `noBtn`, `retryBtn`.
    *   `switchView(viewName)` function to activate/deactivate sections.
    *   `startQuiz()`: Switches to quiz view and shows the first question.
    *   `showQuestion()`: Updates question text and progress indicator.
    *   `nextQuestion(point)`: Increments score, moves to the next question, or shows loading.
    *   `showLoading()`: Switches to loading view, then calls `showResult` after a 3-second timeout.
    *   `showResult()`: Calculates `grade` and `desc` based on `score` and updates `res-grade` and `res-desc` elements.
        *   Score >= 4: "Lv.1 다이아몬드 수저"
        *   Score >= 2: "Lv.2 아슬아슬 개미"
        *   Score < 2: "Lv.3 생존 위기"
    *   Initializes the view to `main`.

### Current Version (Changes from Initial Version)

*   **`style.css` Modifications:**
    *   **Background:** The `body` element's background has been updated from a solid color and base64 image to a dark linear gradient (`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.9))`).
    *   **Font:** The `font-family` for the `body` now explicitly includes `sans-serif` as a fallback: `font-family: var(--font-body), sans-serif;`.
    *   **Button Hover Effect:** The `transform` property on `.btn:hover` has been changed from `scale(1.03)` to `scale(1.1)`, providing a more pronounced "Netflix-like" hover effect.
*   **`main.js` Modifications:**
    *   **Result Grading Logic:** The `showResult()` function has been updated to reflect the new grading system based on the score:
        *   Score >= 4: "Lv.5 마스터" (and a new descriptive text)
        *   Score >= 2: "Lv.3 일반인" (and a new descriptive text)
        *   Score < 2: "Lv.1 위기" (and a new descriptive text)
*   **`index.html` Modifications:** No direct code changes were required for `index.html` as the existing structure already supported the desired visual and functional updates through CSS and JavaScript modifications. The font imports were already adequate.

## Plan for Current Request

The requested changes have been implemented and saved.
*   `style.css` was updated for the dark gradient background, Sans-serif font fallback, and button hover effect.
*   `main.js` was updated for the new scoring logic ("Lv.5 마스터", "Lv.3 일반인", "Lv.1 위기") and corresponding descriptions.
*   `index.html` required no changes.