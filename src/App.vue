<template>
  <main
    class="flex justify-center items-center bg-cream py-[28px] px-[16px] h-screen w-full"
  >
    <div
      class="flex flex-col w-full h-full bg-white rounded-[10px] sm:w-[600px] sm:max-h-[450px] sm:flex-row"
    >
      <img
        class="rounded-t-[10px] sm:hidden"
        src="./assets/image-product-mobile.jpg"
      />
      <img
        class="hidden rounded-l-[10px] sm:block"
        src="./assets/image-product-desktop.jpg"
      />
      <div class="flex flex-col justify-between h-full p-[24px] sm:p-[32px]">
        <div class="flex flex-col">
          <span
            class="font-montserrat text-[12px] tracking-[5px] text-aurometal mb-[12px]"
          >
            PERFUME
          </span>
          <h1
            class="font-fraunces text-[32px] text-gunmetal leading-9 mb-[16px]"
          >
            Gabrielle Essence Eau De Parfum
          </h1>
          <p class="font-montserrat text-[14px] text-aurometal mb-[8px]">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div class="flex items-center gap-[19px]">
            <span class="font-fraunces text-[32px] text-aquamarine"
              >$149.99</span
            >
            <span
              class="font-montserrat text-[13px] text-aurometal line-through"
            >
              $169.99
            </span>
          </div>
        </div>
        <button
          class="flex justify-center items-center gap-[12px] bg-aquamarine h-[48px] rounded-[8px] transition-colors hover:bg-aquamarineHover"
        >
          <img src="./assets/icon-cart.svg" />
          <span class="font-montserrat text-[14px] font-bold text-white">
            Add to Cart
          </span>
        </button>
      </div>
    </div>
  </main>
</template>
