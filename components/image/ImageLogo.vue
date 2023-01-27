<template>
  <div class="logo-and-content" :style="layoutStyle">
    <div class="image-container">
      <NuxtLink
        v-if="logoSource === '/assets/df/logo.png'"
        to="/"
        title="Home page"
        ><img
          :src="logoSource"
          alt="The words Dice Funk with a pink-yellow downward gradient. Between the words is nat 20 on a red icosahedron."
          :class="`logo ${logoSize}`"
        />
      </NuxtLink>
      <img v-else :src="logoSource" :class="`logo ${logoSize}`" />
    </div>

    <slot class="content"></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  logoSize: {
    type: String,
    default: "small",
  },
  alignment: {
    type: String,
    default: "left",
  },
  logoSource: {
    type: String,
    default: "/assets/df/logo.png",
  },
});
const layoutStyle = computed(() => {
  if (props.alignment === "right") {
    return {
      "flex-flow": "row-reverse wrap-reverse",
    };
  } else if (props.alignment === "bottom") {
    return {
      "flex-flow": "column-reverse nowrap",
    };
  } else if (props.alignment === "top") {
    return {
      "flex-flow": "column nowrap",
    };
  }
});
</script>

<style scoped>
.logo-and-content {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  max-width: 100%;
}
.content {
  flex: 1 1 65%;
}
.image-container {
  flex: 0 0 20%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
.logo {
  max-height: 80vh;
  max-width: 100%;
  object-fit: contain;
}
.logo.small {
  max-height: 3em;
  max-width: 10vmax;
}
.logo.medium {
  max-height: 4em;
  max-width: 20vmax;
}
.logo.large {
  max-height: 5em;
  max-width: 30vh;
  margin-bottom: 50px;
  margin-top: 50px;
}

@media screen and (max-height: 280px) {
  img {
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
</style>
