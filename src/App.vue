<template>
  <main class="overscroll-none" style="background-image: url(https://mediaproduction.adelaide.edu.au/aboriginal-cultural-timeline/images/bg_arch.png); background-attachment: fixed; background-repeat: no-repeat; background-size: cover;">
    <div class="px-28 bg-white bg-opacity-70 pb-4 backdrop-blur-[2px]">
      <div class="snap-end">
        <div class="flex justify-center text-center pt-3">
          <h2 class="max-w-[500px] my-6">{{ TITLE }}</h2>
        </div>
        <div v-for="line in INTRO_TEXT" class="max-w-[750px] text-center text-base italic leading-5 mb-3 mx-auto">{{ line }}</div>
      </div>

      <!--  Timeline section  -->
      <div class="text-center mt-8">
        <div class="text-lg font-bold rounded border-2 border-brand-midblue text-brand-midblue hover:text-white hover:bg-brand-midblue cursor-pointer mx-auto w-fit px-4 py-2" @click="scrollToSection">Scroll / Click to Begin</div>
        <div class="relative mt-4">
          <div class="absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-brand-midblue" />
          <div class="text-center pt-12">
            <i class="fas fa-triangle rotate-180 text-brand-midblue text-lg align-top mb-auto translate-y-3" />
          </div>
        </div>
      </div>
      <div :id="'era-'+ era.id" v-for="era in ERA_DATA" class="text-center z-10 relative">
        <div v-if="!era.isSubEra" class="pb-6 snap-start mt-6">
          <div class="w-full bg-brand-darkblue text-white py-3 px-6">
            <div class="flex justify-between">
              <div class="text-2xl font-bold my-2">{{ era.name }}</div>
              <div class="text-xl font-bold my-auto">{{ era.yearText }}</div>
            </div>
            <p v-for='paragraph in era.summary' v-html="paragraph" class="text-left italic text-base text-slate-200 leading-[22px] mb-3" />
          </div>
        </div>
        <div v-else class="snap-start pt-12">
          <hr class="border-2 border-dashed border-brand-midblue" />
          <div class="w-1/2 py-3 px-6">
            <div class="text-right text-2xl font-bold my-2">{{ era.name }}</div>
            <p v-for='paragraph in era.summary' v-html="paragraph" class="text-right italic text-base leading-5 mb-3" />
            <div class="w-36 h-32 ml-auto mt-5 bg-black rounded-lg group">
              <a href="https://c21ch.newcastle.edu.au/colonialmassacres/map.php" target="_blank" rel="noopener noreferrer" class="relative w-full h-full">
                <img src="https://mediaproduction.adelaide.edu.au/aboriginal-cultural-timeline/images/war_map.png" alt="Map of Frontier Wars" class="w-full h-full object-cover rounded-lg group-hover:opacity-70">
                <i class="absolute fas fa-external-link top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 text-white text-2xl opacity-0 group-hover:opacity-80" />
              </a>
            </div>
          </div>
        </div>

        <!--    Inserted video for stolen generations only    -->
        <div v-for="(year, index) in YEAR_DATA.filter(y => y.eraId === era.id)" class="pb-1">
          <div v-if="year.standalone" :id="`year-${era.id}-${index}`" class="w-4/5 mx-auto mb-2 snap-start">
            <div class="relative pb-[56.25%] h-0">
              <iframe title="YouTube video player" src="https://www.youtube.com/embed/iQMZZ8ng7oI" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" class="absolute w-[100%] h-[100%] top-0 left-0"></iframe>
            </div>
          </div>
          <div v-else :id="`year-${era.id}-${index}`" class="relative flex w-1/2 py-1 snap-start" :class="index%2 ? 'flex-row-reverse justify-start ml-[50%] pl-2' : 'text-right justify-end ml-[50%] -translate-x-full pr-2'" :style="{marginTop: year.gap * 10 + 'px'}">
            <div class="w-full bg-white rounded-xl">
              <div class="w-full bg-brand-midblue bg-opacity-30 rounded-xl p-3" :class="index%2 ? 'text-left' : 'text-right'">
                <div class="flex text-2xl relative" :class="index%2 ? '' : 'flex-row-reverse'">
                  <div class="font-bold text-brand-midblue">{{ year.yearText }}</div>
                  <div v-if="year.media" class="absolute -top-16 w-24 h-24 z-30 cursor-pointer" :class="index%2 ? 'right-0' : 'left-0'" @click="openMediaModal(year.media)">
                    <div class="w-full h-full relative group">
                      <img :src="year.media.type === 'image' ? year.media.src : year.media.thumbnail" alt="" class="w-full h-full object-cover rounded-lg">
                      <div class="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100">
                        <div class="flex justify-center bg-black bg-opacity-50 w-full h-full rounded-lg">
                          <i class="my-auto text-white opacity-80 text-3xl" :class="year.media.type === 'image' ? 'far fa-search-plus' : 'fas fa-play-circle'" />
                        </div>
                      </div>
                      <div class="absolute opacity-100 group-hover:opacity-0 bottom-0 w-6 h-6 bg-white" :class="index%2 ? 'left-0 rounded-tr-2xl' : 'right-0 rounded-tl-2xl'">
                        <div class="flex w-full h-full bg-brand-midblue bg-opacity-30" :class="index%2 ? 'rounded-tr-2xl justify-start' : 'rounded-tl-2xl justify-end'">
                          <i class="text-sm mt-auto" :class="`fa-${year.media.type} ${year.media.type === 'image' ? 'fas text-brand-midblue' : 'fab text-brand-red'}`" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p v-for="line in year.details" v-html="line" class="text-base leading-5 mt-2" />
              </div>
            </div>
            <div class="h-0.5 w-[100px] bg-black my-auto mx-2"></div>
            <div class="absolute top-1/2 -translate-y-1/2 text-center text-xl" :class="index%2 ? '-left-[10px]' : '-right-[10px]'">
              <i class="fad fa-circle" /></div>
          </div>
        </div>

        <div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 w-1 h-full bg-brand-midblue" />
        <div v-if="era.gapAfter" class="text-center" :style="{paddingTop: era.gapAfter * 50 + 'px'}">
          <i class="fas fa-triangle rotate-180 text-brand-midblue text-lg align-top mb-auto translate-y-3" />
        </div>
      </div>

      <div class="text-sm text-gray-600 text-right">&copy; The University of Adelaide</div>
    </div>

    <!--  side nav  -->
    <div class="fixed flex flex-col justify-between top-[10%] left-0 w-24 px-2 py-4 rounded-xl text-center text-white font-bold text-base bg-black bg-opacity-60">
      <div class="mb-1">BCE 65,000</div>
      <div class="relative h-[40vh] my-1">
        <input id="VerticalSlider" v-model="currentSection" type="range" min="0" :max="mappedSections.length - 1" step="1" class="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-[40vh] h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer rotate-90" @change="scrollToSection">
        <div class="absolute top-0 right-1/3 h-full flex flex-col justify-between py-2">
          <div v-for="(item, index) in mappedSections" class="relative h-[2px] w-2">
            <div v-if="index === currentSection && showSliderMarker && item.label" class="absolute top-1/2 left-1.5 -translate-y-1/2 w-[240px] flex">
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


    <div v-if="showMediaModal" class="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-black/80 backdrop-blur-sm" aria-modal="true" tabindex="-1">
      <div id="modal" class="max-h-[95vh] w-11/12 p-4">
        <header class="flex justify-end opacity-50 hover:opacity-100 mb-2">
          <div class="flex justify-center w-6 h-6 rounded-full bg-gray-200">
            <i class="far fa-times text-brand-darkblue cursor-pointer my-auto" @click="closeMediaModal" />
          </div>
        </header>
        <div class="flex justify-center">
          <img v-if="currentMedia && currentMedia.type === 'image'" :src="currentMedia.src" alt="" class="w-10/12 max-w-max max-h-[70vh]">
          <div v-if="currentMedia && currentMedia.type === 'youtube'" class="relative pb-[56.25%] h-0 w-[100%]">
            <iframe title="YouTube video player" :src="`https://www.youtube.com/embed/${currentMedia.src}`" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" class="absolute w-[95%] h-[95%] top-0 left-1/2 -translate-x-1/2" />
          </div>
        </div>
        <div v-if="currentMedia && currentMedia.text" class="text-white text-center text-base leading-5 mt-2 px-2">
          <p v-for="(line, index) in currentMedia.text" :class="currentMedia.text.length > 1 && index === currentMedia.text.length - 1 ? 'italic' : ''">{{ line }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { INTRO_TEXT, ERA_DATA, YEAR_DATA, TITLE } from "@/assets/data"
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue"

const currentSection = ref(0)
const disableSync = ref(false)
const showSliderMarker = ref(false)
const showMediaModal = ref(false)
const currentMedia = ref(null)

const mappedSections = computed(() => {
  let ids = []
  ERA_DATA.forEach(era => {
    ids.push({ id: `era-${era.id}`, label: `${era.name}` })
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

function openMediaModal (media) {
  currentMedia.value = { ...media }
  showMediaModal.value = true
}

function closeMediaModal () {
  showMediaModal.value = false
  currentMedia.value.null
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

watch(showMediaModal, value => {
  const body = document.querySelector('body')
  body.style.overflow = value ? 'hidden' : 'auto'
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