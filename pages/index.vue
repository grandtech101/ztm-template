<template>
  <div>
    <div id="header" class="bg-[url('/hero-bg.jpg')] px-20">
      <div id="menu" class="grid grid-cols-2 py-5">
        <div id="menu-left">
          <img src="logo.png" class="w-[150px]" alt="" />
        </div>

        <div id="menu-right">
          <ul class="grid grid-cols-4 text-2xl font-oswald text-white pt-5">
            <li>About Us</li>
            <li>Our Menu</li>
            <li>Locations</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>

      <div class="grid grid-cols-2 pb-30 pt-10">
        <img src="hero-burger.png" class="pr-8 mt-10" alt="" />

        <div class="text-center pt-30">
          <h1 class="text-8xl text-white text-center font-lilita uppercase py-1">
            Classic Burger
          </h1>
          <h2 class="text-6xl text-white text-center font-lilita uppercase my-5">
            With Onion
          </h2>
          <p class="text-2xl text-white font-roboto font-light text-center">
            Our signature burger now comes with onion and cheese . You can customize it to
            your likings.Freshly made to order,all in a brioche style bun !
          </p>
        </div>
      </div>
    </div>
    <div id="section-1" class="text-center bg-[url('/three-burgers.jpg')] pb-96 bg-cover">
      <h1 class="text-6xl uppercase font-oswald text-center pt-20 px-24">
        The burger taste better when you eat with family
      </h1>
      <p
        class="font-roboto italic font-light text-grey-500 text-center text-lg py-6 px-28"
      >
        Spend quality time with your family and eat and affordable,nutritious and
        delicious meal together. not all burgers are fast food. All our burgers are
        handmade to orders for you and your family members
      </p>
      <button class="font-oswald uppercase bg-red-500 text-white text-center py-3 px-8">
        Explore Full Menu
      </button>
    </div>
    <div id="section2" class="grid grid-cols-3 text-center px-20 py-10 bg-yellow-500 gap-10">
        <div>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-20 w-20 stroke-1 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          >
          <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
          </svg>
          <h2 class="font-medium font-oswald tex-2xl uppercase py-5">Original recipes</h2>
          <p class="font-light">We use our own secret recipes and only the best ingredients to make our burgers.Starting from patties, sauces and even buns.</p>
        </div>
        <div>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-20 w-20 stroke-1 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          >
          <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
          </svg>
          <h2 class="font-medium font-oswald tex-2xl uppercase py-5">Quality Foods</h2>
          <p class="font-light">We purchase our ingredients from the best suppliers daily,to ensure the freshest quality of our burgers</p>
          </div>
        <div>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-20 w-20 stroke-1 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2">
          <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <h2 class="font-medium font-oswald tex-2xl uppercase py-5">Fastest Delivery</h2>
          <p class="font-light">Burgers are best served while it's hot.We deliver to your door with our speedy delivery partners from the nearest outlet</p>
          </div>
      </div>
        <div id="section-3" class="font-oswald">
      <h1
        class="text-6xl text-center font-oswald text-red-500 uppercase font-medium py-10"
      >
        Our Crazy Burger
      </h1>
      <p class="text-center px-20 font-light text-gray-500 py-5">
        Whether you are looking for the classic,our specialites or just wraps, salad and
        fries.We always have something that rewards your tastebud
      </p>
      <div class="grid grid-cols-2 px-40 gap-5">
        <div id="left-item-columns">
          <Item
          image="crispy-chicken.jpg"
          title="Crispy Chicken"
          description="chicken breast,chilli sauce, tomatoes,pickles,coleslaw"
          price="11.99" />
          <Item
          image="baa-baa.jpg"
          title="baa-baa blacksheep"
          description="beef,chilli sauce, tomatoes,pickles,coleslaw,Cheese"
          price="13.99" />
        </div>
        <div id="right-item-columns">
          <Item
          image="ultimate-bacon.jpg"
          title="The Ultimate Bacon"
          description="Bacon,chilli sauce, tomatoes,pickles,coleslaw,another bacon"
          price="20.99" />
          <item
          image="double-burger.jpg"
          title="Double Beef Burger"
          description="Beef,chilli sauce, tomatoes,pickles,coleslaw,onions"
          price="15.99" />
          </div>
        </div>

        <div class="grid grid-cols-12 font oswald uppercase text-4xl text-yellow-800 px-40 gap-5">
          <div class="col-span-5 bg-cover bg-center bg-[url('/fries-bg-1.jpg')] pl-20 pr-25 pb-10 pt-10 text-center">
            <h4>Get your</br>free</h4>
            <h4>Cheese </br> Fries</h4>
            <button class="uppercase bg-red-500 text-white text-lg py-3 px-8 mt-5">Claim now</button>
          </div>

          <div class="col-span-7 bg-cover bg-center bg-[url('/burger-bg-1.jpg')]  text-center pl-40 pb-10 pt-10">
            <h4>Crispy </br> Chicken</h4>
            <h4>Burger </br>is back!</h4>
            <button class="uppercase bg-red-500 text-white text-lg py-3 px-8 mt-5">Claim now</button>
          </div>
        </div>
        <div class="grid grid-cols-3 px-40 mt-5 gap-5">
          <img src="offer-1.jpg" alt=""><img src="offer-2.jpg" alt=""><img src="offer-3.jpg" alt="">
        </div>
        <div id="section-4" class="px-20 bg-gray-100 py-20">
          <div class="grid grid-cols-2">
            <img src="about.png" alt="" class="pl-20">
            <h3 class="font oswald text-5xl uppercase pl-20 pr-4 pt-20 leading-snug text-center">Nothing brings people together like a </br> good burger</h3>
            </div>
            <p class="text-lg text-gray-500 mt-10">That's the philosophy that we always believe in. We're a family-owned and operated business, and we're proud to be part of the community.We do our best to make sure that everyone's happy and having a good time.</p>
            <p class="text-lg text-gray-500 mt-10">Burgers are what brought us together and what keeps us together.It's something that you can't put a price tag on. More importantlt,we are interested in people.It's not just about the food.</p>
            </div>

            <div id="section-5" class="grid grid-cols-5 bg-yellow-500 text-amber-900">
              <div class="col-span-3 pl-20 pt-16 pb-16">
                <h4 class="font-oswald text-5xl uppercase">Download Mobile Apps</h4>
                <h4 class="font-oswald text-6xl uppercase">Save up to 20%</h4>
                <p class="text-lg my-7">Bye bye long queue.Orders before and your food will be ready in a flash.Enjoy the convenience of ordering food online at any time and from any location.</p>
                <button><img src="/appstore.png" alt="" class="h-[50px]"></button>
                <button><img src="/googleplay.png" alt="" class="h-[50px]"></button>
                </div>
                <div class="col-span-2">
                  <img src="/eshop.png" class="-mt-10 h-[500px] object-cover" alt="">
                  </div>
            </div>
      </div>
    </div>
  </div>
</template>
