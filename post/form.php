<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>

<body>
<h2>MTG詳細</h2>
<form id="row1">
  <input type="hidden" name="type" value="1">
  <input type="text" name="id">
  <input type="text" name="title">
  <input type="text" name="date">
  <input type="text" name="start">
  <input type="text" name="end">
</form>

<h2>アジェンダ</h2>
<? for($i = 2; $i < 7; $i ++): ?>
<form id="row<?= $i ?>">
  <input type="hidden" name="type" value="2">
  <input type="text" name="agenda">
  <input type="text" name="time">
</form>   
<? endfor; ?>

<h2>参加名</h2>
<? for(; $i < 15; $i ++): ?>
<form id="row<?= $i ?>">
  <input type="hidden" name="type" value="3">
  <input type="text" name="name">
</form>
<? endfor; ?>

<button id="submit">submit</button>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="js/script.js"></script>
</body>
</html>