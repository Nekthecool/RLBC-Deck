document.getElementById('SaveDeck').addEventListener('click',save);
document.getElementById('LoadDeck').addEventListener('click',load);

function swapImage1() {
    var image = document.getElementById("imageToSwap1");
    var dropd = document.getElementById("card1");
    image.src = dropd.value;
  }

  function swapImage2() {
    var image = document.getElementById("imageToSwap2");
    var dropd = document.getElementById("card2");
    image.src = dropd.value;
  }

  function swapImage3() {
    var image = document.getElementById("imageToSwap3");
    var dropd = document.getElementById("card3");
    image.src = dropd.value;
  }

  function swapImage4() {
    var image = document.getElementById("imageToSwap4");
    var dropd = document.getElementById("card4");
    image.src = dropd.value;
  }

  function swapImage5() {
    var image = document.getElementById("imageToSwap5");
    var dropd = document.getElementById("card5");
    image.src = dropd.value;
  }

  function swapImage6() {
    var image = document.getElementById("imageToSwap6");
    var dropd = document.getElementById("card6");
    image.src = dropd.value;
  }

  function swapImage7() {
    var image = document.getElementById("imageToSwap7");
    var dropd = document.getElementById("card7");
    image.src = dropd.value;
  }

  function swapImage8() {
    var image = document.getElementById("imageToSwap8");
    var dropd = document.getElementById("card8");
    image.src = dropd.value;
  }

  function swapImage9() {
    var image = document.getElementById("imageToSwap9");
    var dropd = document.getElementById("card9");
    image.src = dropd.value;
  }

  function save() {
    var image_1 = document.getElementById("imageToSwap1").src;
    var image_2 = document.getElementById("imageToSwap2").src;
    var image_3 = document.getElementById("imageToSwap3").src;
    var image_4 = document.getElementById("imageToSwap4").src;
    var image_5 = document.getElementById("imageToSwap5").src;
    var image_6 = document.getElementById("imageToSwap6").src;
    var image_7 = document.getElementById("imageToSwap7").src;
    var image_8 = document.getElementById("imageToSwap8").src;
    var image_9 = document.getElementById("imageToSwap9").src;
    
    localStorage.setItem('image1', image_1);
    localStorage.setItem('image2', image_2);
    localStorage.setItem('image3', image_3);
    localStorage.setItem('image4', image_4);
    localStorage.setItem('image5', image_5);
    localStorage.setItem('image6', image_6);
    localStorage.setItem('image7', image_7);
    localStorage.setItem('image8', image_8);
    localStorage.setItem('image9', image_9);
    alert("Deck successfully saved!");
  } 

  
 function load(){
    document.getElementById("imageToSwap1").src = localStorage.getItem('image1')
    document.getElementById("imageToSwap2").src = localStorage.getItem('image2')
    document.getElementById("imageToSwap3").src = localStorage.getItem('image3')
    document.getElementById("imageToSwap4").src = localStorage.getItem('image4')
    document.getElementById("imageToSwap5").src = localStorage.getItem('image5')
    document.getElementById("imageToSwap6").src = localStorage.getItem('image6')
    document.getElementById("imageToSwap7").src = localStorage.getItem('image7')
    document.getElementById("imageToSwap8").src = localStorage.getItem('image8')
    document.getElementById("imageToSwap9").src = localStorage.getItem('image9')
  }