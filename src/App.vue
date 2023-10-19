<template>
  <main class="px-32">
    <div class="snap-end">
      <div class="flex justify-center text-center pt-3">
        <h1 class="max-w-[650px] my-6">A Timeline of Colonisation of the First Nations of Australia</h1>
      </div>
      <div class="text-center my-3">[intro text]</div>
      <div class="text-center my-3 text-lg font-bold">Scroll / Click Here to begin</div>
      <div class="text-center my-3 text-2xl"><i class="fas fa-arrow-circle-down" /></div>
    </div>

    <!--  Timeline section  -->
    <div class="relative">
      <div :id="'era-'+ era.id" v-for="era in ERA_DATA" class="text-center z-10">
        <div class="bg-white py-2 snap-start">
          <div class="w-full bg-slate-100 py-3 px-6">
            <div class="text-xl font-bold">{{ era.name }}</div>
            <div>{{ era.summary }}[summary]</div>
          </div>
        </div>
        <div v-for="(year, index) in YEAR_DATA.filter(y => y.eraId === era.id)" class="pb-1">
          <div :style="{paddingTop: year.gap * 60 + 'px'}" />
          <div :id="`year-${era.id}-${index}`" class="relative flex w-1/2 py-1 snap-start" :class="index%2 ? 'flex-row-reverse justify-start ml-[50%] pl-2' : 'text-right justify-end ml-[50%] -translate-x-full pr-2'">
            <div class="w-full bg-blue-50 rounded-xl px-4 py-2" :class="index%2 ? 'text-left' : 'text-right'">
              <div class="font-bold text-blue-600 text-2xl">{{ year.yearText }}</div>
              <div class="font-bold text-xl">{{ year.name }}</div>
              <div class="">[text]</div>
            </div>
            <div class="h-0.5 w-[100px] bg-black my-auto mx-2"></div>
            <div class="absolute top-1/2 -translate-y-1/2 text-center text-xl" :class="index%2 ? '-left-[10px]' : '-right-[10px]'">
              <i class="fad fa-circle" /></div>
          </div>
        </div>
      </div>

      <div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 w-1 h-full bg-gray-200" />
    </div>

    <!--  side nav  -->
    <div class="fixed flex flex-col justify-between top-[10%] left-0 w-28 h-[80%] px-2 py-4 rounded-r-xl text-center text-white font-bold bg-black bg-opacity-70">
      <div>65,000 BCE</div>
      <div class="relative h-[400px]">
        <input id="VerticalSlider" v-model="currentSection" type="range" min="0" :max="sectionIds.length - 1" step="1" class="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-[360px] h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer rotate-90" @change="scrollToSection">
      </div>
      <div>2023</div>
      <div class="cursor-pointer" @click="prevSection">
        <i class="fas fa-chevron-up px-6 py-4 bg-black rounded-xl my-1" /></div>
      <div class="cursor-pointer" @click="nextSection">
        <i class="fas fa-chevron-down px-6 py-4 bg-black rounded-xl my-1" /></div>

      <div class="cursor-pointer" @click="scrollToTop">Back to top</div>
    </div>
  </main>
</template>
<script setup>
import { ERA_DATA, YEAR_DATA } from "@/assets/data"
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