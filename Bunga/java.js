onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  window.addEventListener('click',() => {
    document.getElementById("song").play ();
  } )