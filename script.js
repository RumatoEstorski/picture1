window.onload = function () {
    let images = document.getElementsByTagName("img");
    
    for (let i = 0; i < images.length; i++) {
       images[i].onmouseover = showAnswer;
       images[i].onmouseout = showBlur;
    }
  };

  function showAnswer(event) {
    let image = event.target;
    let name = image.id;
    name = name + ".jpg";
    image.src = "images/" + name;
    if (prompt("Введите название животного, Первые буквы: " + image.id.substring(0,1)) == image.id) {
      alert("Верно!");
    } else {
      alert("Неверно!");
      showBlur(image);
    }
  }
  
  function showBlur(event) {
    let image = event.target;
    let name = image.id
    name = name + "blur.jpg";  
    image.src = "images/" + name;
  }
