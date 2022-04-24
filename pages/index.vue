<template>
  <div>
    <div id="header" class="bg-[url('/bg-hero-5.jpg')] py-5 px-10">
      <div id="menu" class="grid grid-cols-2">
        <div id="menu-left">
          <h1 class="font-lilita text-6xl text-white">FieldSpot</h1>
          </div>

        <div id="menu-right">
          <ul class="grid grid-cols-5 text-2xl font-oswald text-white pt-5">
            <li>Home</li>
            <li>Features</li>
            <li>Solutions</li>
            <li>Pricing</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <div class="grid grid-cols-2">
        <img src="front_mobile-removebg.png" class="absolute left-2" alt="" />

        <div class="col-span-2 text-right font-bold my-10">
          <h1 class="text-6xl text-white  font-oswald py-1">
            Site Application</br> Tools
          </h1>
          <p class="text-2xl text-white font-roboto font-light text-right">
            FieldSpot is an easy-to-use,web-based tool
            for building,</br> organizing, and managing field data.
            Managers can</br>assign tasks to members, track who's onsite at</br> anytime,
            and get all the reports they need.
          </p>
          <button><img src="/appstore.png" alt="" class="mt-5 h-[50px]"></button>
          <button><img src="/googleplay.png" alt="" class="h-[50px]"></button>
        </div>
      </div>
    </div>
    <div id="section-1" class="grid grid-cols-2">
      <h1 class="text-6xl font-arial text-center pt-20 px-24">
        FieldSpot Mobile App
      </h1>
      <img src="workers-removebg.png" alt="" />
      <p
        class="font-roboto font-light text-grey-500 text-center text-lg px-24"
      >
        FieldSpot uses smartphones and tablets as tools for employees in the field.
        The platform provides a unified business experience across different products,
        divisions of company.
      </p>
      </div>
      <div class="text-center">
      <button class="uppercase bg-orange-500 text-white text-lg py-2 px-8 mt-5 mb-5">View all features</button>
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
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
</svg>
          <h2 class="font-medium font-oswald tex-2xl uppercase py-5">Real-Time Chat</h2>
          <p class="font-light">Leave the logistics of scheduling interviews, tracking candidates, and managing all your conversations in one place behind.</p>
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
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
</svg>
          <h2 class="font-medium font-oswald tex-2xl uppercase py-5">Task Manager</h2>
          <p class="font-light">Organize your tasks in one list.Add notes and details of your task,set a start and deadline date for the task.</p>
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
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
          <h2 class="font-medium font-oswald tex-2xl uppercase py-5">Location Tracker</h2>
          <p class="font-light">When your employees need to leave an area or arrive at a specific time, they can send a status update and it is conveniently updated in the manager's dashboard.</p>
          </div>
      </div>
        <div id="section-3" class="font-oswald">
      <h1
        class="text-6xl text-center font-oswald text-red-500 uppercase font-medium py-10"
      >
        Six (6) Wheel Department Of Business
      </h1>
      <p class="text-center px-20 font-light text-gray-500 py-5">
        Admin,HR,Finance,Sales,Marketing,Operations -We believe that data is the answer to running an efficient department. Our apps simplify the process of acquiring information and deliver this data in real-time. We know that if you're spending less time manual tasks, your team can focus on what matters most.Our in-house team of mobile developers is here to help you build a personalized mobile app for each department of your business.
      </p>
      <div class="grid grid-cols-2 px-40 gap-5">
        <div id="left-item-columns">
          <Item
          image="admin-1.jpg"
          title="Admin"
          description="Document Control,Annual Schedule,Meetings,Reports,Letter templates"
          price="20.00" />
          <Item
          image="hr-1.png"
          title="Human Resource"
          description="Talent Management,Surveys,HR templates,regulations"
          price="20.00" />
          <Item
          image="finance-1.jpg"
          title="Finance"
          description="Financial Control,expenses and costing management"
          price="37.99" />
        </div>
        <div id="right-item-columns">
          <Item
          image="sales-3.png"
          title="Sales"
          description="Sales Converter,Sales tracker,Esales-script, sales kit"
          price="37.99" />
          <item
          image="marketing-1.png"
          title="Marketing"
          description="Integrating digital marketing tools, marketing strategy"
          price="30.99" />
          <item
          image="logistic.png"
          title="Operations"
          description="logistics,warehouse management,strategic planning"
          price="37.99" />
          </div>
        </div>
        <div class="text-center text-4xl font-oswald">
          <h1>This year we are offering discounted prices on our application to early startups from all over states. Choose any options below:</h1>
          </div>
        <div class="grid grid-cols-12 font oswald uppercase text-4xl text-yellow-800 px-40 gap-5">
          <div class="col-span-6 px-20 py-10 text-center">
             <img src="all-in.png" alt="" />
            <h4>Option A</br> (FREE 5 USERS)</br>ALL-IN MODULE SET</h4>
            <h4>RM500 PER MONTH ONLY</h4>
            <button class="uppercase bg-red-500 text-white text-lg py-3 px-8 mt-5">Claim now</button>
          </div>

          <div class="col-span-6 text-center px-20 py-10">
            <img src="option-b.jpg" class="mb-8" alt="" />
            <h4>Option B </br>(FREE 5 USERS)</br> choose 2 modules</h4>
            <h4>RM250 PER MONTH ONLY</h4>
            <button class="uppercase bg-red-500 text-white text-lg py-3 px-8 mt-5">Claim now</button>
          </div>
        </div>
        <div id="section-4" class="grid grid-cols-5 bg-orange-600 text-amber-200">
              <div class="col-span-3 pl-20 pt-16 pb-16">
                <h4 class="font-oswald text-5xl ">Want to Customize and Integrate with Existing System?</h4>
                <h4 class="font-oswald text-5xl ">Talk To Us</h4>
                <h4 class="font-oswald text-5xl ">Free Consulation</h4>
                <p class="text-lg my-7 font-oswald">Get Things Done faster. FieldSpot will save you time and money by improving efficiency across all aspects of your business.</p>
                <td colspan="3">
          <input
            id="email"
            type="email"
            placeholder="Please Enter Your Email"
            class="w-full border border-gray-300 text-xl mt-5 py-3 px-2"
          />
        </td>
        <td colspan="2" class="text-right">
          <button
            class="font-oswald uppercase bg-amber-200 text-orange-600 text-xl py-3 ml-5 mt-5"
            @click="submitOrder"
          >
            Submit your email
          </button>
        </td>
                </div>

                <div class="col-span-2">
                  <img src="/eshop.png" class="-mt-10 h-[500px] object-cover" alt="">
                  </div>
            </div>
      </div>
    </div>
  </div>
</template>
