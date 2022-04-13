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
          image="mozzarella-cheese.jpg"
          title="Mozzarella Cheese Burger"
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
      </div>
    </div>
 </div>
</template>
