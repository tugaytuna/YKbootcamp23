let input1 = document.getElementById("input1");
let div1 = document.getElementById("div1");
let button = document.getElementsByTagName("button");
let sifre = 123456;

let dizi = ["button"];

function butonTiklandi() {
  if (input1.value == sifre) {
    console.log("şifre doğru");
    div1.innerHTML = ` <section>
    <h4 class="altBaslik">Lorem, ipsum dolor.</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
      voluptatibus? Minima est nulla ut illum mollitia? Rerum dolores nesciunt
      atque tempora, repellat corporis ea autem facere architecto, tempore
      voluptas quis.
    </p>
  </section> <section>
  <h4>Lorem, ipsum dolor.</h4>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
    voluptatibus? Minima est nulla ut illum mollitia? Rerum dolores nesciunt
    atque tempora, repellat corporis ea autem facere architecto, tempore
    voluptas quis.
  </p>
</section>
<section>
  <h4>Lorem, ipsum dolor.</h4>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
    voluptatibus? Minima est nulla ut illum mollitia? Rerum dolores nesciunt
    atque tempora, repellat corporis ea autem facere architecto, tempore
    voluptas quis.
  </p>
</section> `;

    button[0].innerHTML = "Çıkış Yap";

    input1.value = "";
    input1.remove();
  }
}

console.log(button);
