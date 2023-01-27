const showMoreBtn = document.querySelector(".btn");
const inner = document.querySelector(".casinos-list");
const links = document.querySelectorAll('a');
const linlBtn = document.querySelectorAll('.item__link');
const windowWidth  = document.body.clientWidth;


//масив картикок
const logoArr = [
  "./assets/imgs/cas1.png",
  "./assets/imgs/cas2.png",
  "./assets/imgs/cas3.png",
  "./assets/imgs/cas4.png",
  "./assets/imgs/cas5.png",
];
showMoreBtn.addEventListener("click", () => {
  addCasinoItem(3);
});

const addCasinoItem = (num) => {
  let linkText = 'Get Bonus'
  if(windowWidth < 768){
    linkText = 'Visit Casino'
  }
  for (let i = 0; i < num; i++) {
    const casinos = document.querySelectorAll(".cas");

    inner.insertAdjacentHTML(
      "beforeend",
      `  <div class="item cas">
        <span class="item__number">${casinos.length + 1}</span>
        <div class="item__logo">
          <img
            src="${logoArr[Math.floor(Math.random() * 5)]}"
            alt="casino-1"
            class="item__logo__img"
          />
        </div>
        <div class="item__bonus">
          <span class="item__bonus__item">100% up to</span>
          <span class="item__bonus__item green">€100+100 FS</span>
          <span class="item__bonus__item">+300 bonus Spins</span>
        </div>
        <div class="item__rating">
        <div class="stars">
        <img src="./assets/imgs/star.png" alt="star" class="star" />
        <img src="./assets/imgs/star.png" alt="star" class="star" />
        <img src="./assets/imgs/star.png" alt="star" class="star" />
        <img src="./assets/imgs/star.png" alt="star" class="star" />
        <img src="./assets/imgs/star.png" alt="star" class="star" />

      </div>
          <span class="item__rating__item">8.45</span>
          <a href="#" class="item__rating__item">Read Review</a>
        </div>
        <div class="item__deps">
          <div class="item__deps__wrap">
            <img
              src="./assets/imgs/mastercard.png"
              alt="mastercard"
              class="img"
            />
          </div>
    
          <div class="item__deps__wrap">
            <img
              src="./assets/imgs/payz.png"
              alt="payz"
              class="img"
            />
          </div>
    
          <div class="item__deps__wrap">
            <img
              src="./assets/imgs/paysafecard.png"
              alt="paysafecard"
              class="img"
            />
          </div>
    
          <div class="item__deps__wrap">
            <img
              src="./assets/imgs/paypal.png"
              alt="paypal"
              class="img"
            />
          </div>
    
          <div class="item__deps__wrap">
            <img
              src="./assets/imgs/neteller.png"
              alt="neteller"
              class="img"
            />
          </div>
    
          <div class="item__deps__wrap">
            <img
              src="./assets/imgs/trustly.png"
              alt="trustly"
              class="img"
            />
          </div>
        </div>
        <a href="#" class="item__link">${linkText}</a>
      </div>`
    );
  }
};

//відмінив дію ссилок для того щоб не скакала сторінка, так як стоять #
links.forEach(link=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault()
    })
})


const checkWidth = ()=>{
    if(document.body.clientWidth < 768){
        linlBtn.forEach(el=>{
            el.textContent = 'Visit Casino'
        })
    }
}
checkWidth();