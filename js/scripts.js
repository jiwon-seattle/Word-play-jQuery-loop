$(document).ready(function(){
   $("form#formOne").submit(function(event) {
      event.preventDefault();
      debugger;

      var sentence = $("#sentence").val();
      var words = [];
      words = sentence.split(' ');
      var newWords = [];

      for (i=0; i < words.length; i++) {
        if (words[i].length >= 5) {
          newWords.push(words[i]);
        }
      }

      newWords.reverse();
      newWords.toString();

      $("#result").text(newWords);

    });
});  
