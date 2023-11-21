<template>
  <main class="px-28">
    <div class="snap-end">
      <div class="flex justify-center text-center pt-3">
        <h2 class="max-w-[500px] my-6">{{ TITLE }}</h2>
      </div>
      <div v-for="line in INTRO_TEXT" class="max-w-[750px] text-center italic text-slate-500 text-base leading-5 mb-3 mx-auto">{{ line }}</div>
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
            <div class="flex justify-between">
              <div class="text-2xl font-bold my-2">{{ era.name }}</div>
              <div class="text-xl font-bold my-auto">{{ era.yearText }}</div>
            </div>
            <p v-for='paragraph in era.summary' class="text-left italic text-base text-slate-200 leading-[22px] mb-3">{{ paragraph }}</p>
          </div>
        </div>
        <div v-else class="snap-start">
          <hr class="border-2 border-dashed border-gray-200" />
          <div class="w-1/2 py-3 px-6">
            <div class="text-right text-2xl font-bold my-2">{{ era.name }}</div>
            <p v-for='paragraph in era.summary' class="text-right italic text-base leading-5 mb-3">{{ paragraph }}</p>
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
    <div class="fixed flex flex-col justify-between top-[10%] left-0 w-24 px-2 py-4 rounded-r-xl text-center text-white font-bold text-base bg-black bg-opacity-70">
      <div class="mb-1">BCE 65,000</div>
      <div class="relative h-[40vh] my-1">
        <input id="VerticalSlider" v-model="currentSection" type="range" min="0" :max="mappedSections.length - 1" step="1" class="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-[40vh] h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer rotate-90" @change="scrollToSection">
        <div class="absolute top-0 right-1/3 h-full flex flex-col justify-between py-2">
          <div v-for="(item, index) in mappedSections" class="relative h-[2px] w-2">
            <div v-if="index === currentSection && showSliderMarker" class="absolute top-1/2 left-1.5 -translate-y-1/2 w-[240px] flex">
              <i class="fas fa-caret-left text-sm text-brand-midblue my-auto" />
              <div class="bg-brand-midblue rounded px-2 py-1 text-left text-white font-normal text-sm my-auto">{{ item.label }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="my-1">Present</div>
      <div class="cursor-pointer mt-1" @click="prevSection">
        <i class="fas fa-chevron-up px-6 py-4 bg-black rounded-xl my-1" /></div>
      <div class="cursor-pointer" @click="nextSection">
        <i class="fas fa-chevron-down px-6 py-4 bg-black rounded-xl my-1" /></div>
      <div class="cursor-pointer mt-2" @click="scrollToTop">
        <i class="far fa-arrow-to-top text-2xl" />
        <div class="text-sm -mt-1">Back to top</div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { INTRO_TEXT, ERA_DATA, YEAR_DATA, TITLE } from "@/assets/data"
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";

const currentSection = ref(0)
const disableSync = ref(false)
const showSliderMarker = ref(false)

const mappedSections = computed(() => {
  let ids = []
  ERA_DATA.forEach(era => {
    ids.push({ id: `era-${era.id}`, label: `${era.name}`})
    YEAR_DATA.filter(y => y.eraId === era.id).forEach((year, yIndex) => {
      ids.push({ id: `year-${era.id}-${yIndex}`, label: year.yearText })
    })
  })
  return ids
})

function scrollToSection () {
  disableSync.value = true
  const section = document.getElementById(mappedSections.value[currentSection.value].id)
  section.scrollIntoView({ behavior: "smooth" })
  setTimeout(() => {
    disableSync.value = false
  }, 600)
}

function scrollToTop () {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

function nextSection () {
  if (currentSection.value === mappedSections.value.length - 1 || disableSync.value) return
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
  for (let i = 0; i < mappedSections.value.length; i++) {
    const section = document.getElementById(mappedSections.value[i].id)
    if (section.getBoundingClientRect().top >= -40) {
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

watch(currentSection, () => {
  showSliderMarker.value = true
})

watch(showSliderMarker, (value) => {
  if (!value) return
  setTimeout(() => {
    showSliderMarker.value = false
  }, 1500)
})
</script>

<style>
#VerticalSlider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #f3f4f6;
  background: #005a9c;
  cursor: pointer;
}
#VerticalSlider::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #f3f4f6;
  background: #005a9c;
  cursor: pointer;
}
</style>