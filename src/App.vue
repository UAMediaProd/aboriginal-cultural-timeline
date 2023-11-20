<template>
  <main class="px-32">
    <div class="snap-end">
      <div class="flex justify-center text-center pt-3">
        <h2 class="max-w-[500px] my-6">{{ TITLE }}</h2>
      </div>
      <div v-for="line in INTRO_TEXT" class="max-w-[750px] italic text-center leading-6 mb-3 mx-auto">{{ line }}</div>
    </div>

    <!--  Timeline section  -->
    <div class="relative">
      <div class="bg-white text-center mt-8 pb-4 mb-24">
        <div class="text-lg font-bold rounded border-2 border-brand-midblue text-brand-midblue hover:text-white hover:bg-brand-midblue cursor-pointer mx-auto w-fit px-4 py-2" @click="scrollToSection">Scroll / Click to Begin</div>
      </div>
      <div :id="'era-'+ era.id" v-for="era in ERA_DATA" class="text-center z-10" :style="{paddingBottom: era.gapAfter * 50 + 'px'}">
        <div v-if="!era.isSubEra" class="text-center bg-white">
          <i class="fas fa-triangle rotate-180 text-gray-200 text-lg align-top mb-auto -mt-1.5" />
        </div>
        <div v-if="!era.isSubEra" class="bg-white pb-6 pt-2 snap-start">
          <div class="w-full bg-brand-darkblue text-white py-3 px-6">
            <div class="text-2xl font-bold my-2">{{ era.name }}</div>
            <p v-for='paragraph in era.summary' class="text-left italic text-base text-slate-200 leading-6 mb-3">{{ paragraph }}</p>
          </div>
        </div>
        <div v-else class="snap-start">
          <hr class="border-2 border-dashed border-gray-200" />
          <div class="w-1/2 py-3 px-6">
            <div class="text-right text-2xl font-bold my-2">{{ era.name }}</div>
            <p v-for='paragraph in era.summary' class="text-right italic text-base leading-6 mb-3">{{ paragraph }}</p>
          </div>
        </div>
        <div v-for="(year, index) in YEAR_DATA.filter(y => y.eraId === era.id)" class="pb-1">
          <div :id="`year-${era.id}-${index}`" class="relative flex w-1/2 py-1 snap-start" :class="index%2 ? 'flex-row-reverse justify-start ml-[50%] pl-2' : 'text-right justify-end ml-[50%] -translate-x-full pr-2'" :style="{marginTop: year.gap * 10 + 'px'}">
            <div class="w-full bg-brand-midblue bg-opacity-10 rounded-xl p-3" :class="index%2 ? 'text-left' : 'text-right'">
              <div class="font-bold text-brand-midblue text-2xl">{{ year.yearText }}</div>
              <p v-for="line in year.details" class="text-base leading-5 mt-2">{{ line }}</p>
            </div>
            <div class="h-0.5 w-[100px] bg-black my-auto mx-2"></div>
            <div class="absolute top-1/2 -translate-y-1/2 text-center text-xl" :class="index%2 ? '-left-[10px]' : '-right-[10px]'">
              <i class="fad fa-circle" /></div>
          </div>
        </div>
      </div>

      <div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 w-1 h-full bg-gray-200" />
      <div class="text-center bg-white">
        <i class="fas fa-triangle rotate-180 text-gray-200 text-lg align-top mb-auto -mt-1.5" />
      </div>
    </div>

    <!--  side nav  -->
    <div class="fixed flex flex-col justify-between top-[10%] left-0 w-28 px-2 py-4 rounded-r-xl text-center text-white font-bold bg-black bg-opacity-70">
      <div>65,000 BCE</div>
      <div class="relative h-[40vh] my-1">
        <input id="VerticalSlider" v-model="currentSection" type="range" min="0" :max="sectionIds.length - 1" step="1" class="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-[40vh] h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer rotate-90" @change="scrollToSection">
      </div>
      <div>Present</div>
      <div class="cursor-pointer" @click="prevSection">
        <i class="fas fa-chevron-up px-6 py-4 bg-black rounded-xl my-1" /></div>
      <div class="cursor-pointer" @click="nextSection">
        <i class="fas fa-chevron-down px-6 py-4 bg-black rounded-xl my-1" /></div>

      <div class="cursor-pointer" @click="scrollToTop">Back to top</div>
    </div>
  </main>
</template>
<script setup>
import { INTRO_TEXT, ERA_DATA, YEAR_DATA, TITLE } from "@/assets/data"
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const currentSection = ref(0)
const disableSync = ref(false)

const sectionIds = computed(() => {
  let ids = []
  ERA_DATA.forEach(era => {
    ids.push(`era-${era.id}`)
    YEAR_DATA.filter(y => y.eraId === era.id).forEach((year, yIndex) => {
      ids.push(`year-${era.id}-${yIndex}`)
    })
  })
  return ids
})

function scrollToSection () {
  disableSync.value = true
  const section = document.getElementById(sectionIds.value[currentSection.value])
  section.scrollIntoView({ behavior: "smooth" })
  setTimeout(() => {
    disableSync.value = false
  }, 600)
}

function scrollToTop () {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

function nextSection () {
  if (currentSection.value === sectionIds.value.length - 1 || disableSync.value) return
  currentSection.value++
  scrollToSection()
}

function prevSection () {
  if (currentSection.value === 0 || disableSync.value) return
  currentSection.value--
  scrollToSection()
}

function syncSideNav () {
  if (disableSync.value) return
  for (let i = 0; i < sectionIds.value.length; i++) {
    const section = document.getElementById(sectionIds.value[i])
    if (section.getBoundingClientRect().top >= 0) {
      currentSection.value = i
      return
    }
  }
}

onMounted(() => {
  scrollToTop()
  window.addEventListener('scroll', syncSideNav)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', syncSideNav)
})
</script>