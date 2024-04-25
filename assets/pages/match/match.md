---
layout: default
title: Find Match
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/ScholarSearch/assets/common/css/style.css">
    <link rel="stylesheet" href="/ScholarSearch/assets/pages/match/css/style.css">
</head>
<body>
<div id="container">
  <h2 id="question">Question</h2>
  <div id="options"></div>
  <br>
  <button id="nextButton" onclick="nextQuestion()">Next</button>
  <button id="submitButton" onclick="submitAnswers()" style="display:none;">Submit</button>
</div>
<div id="recommendation-container" style="display:none;">
  <h3>Recommendations:</h3>
  <ul id="recommendation"></ul>
</div>

<script src="/ScholarSearch/assets/pages/match/js/script.js"></script>
</body>
</html>
