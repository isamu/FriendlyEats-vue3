<template>
  <select :class="classValue || classDefault" @change="updateValue">
    <option :value="null" :selected="modelValue === null || modelValue === undefined">
      {{ placeholder }}
    </option>
    <option v-for="(option, index) in options" :value="index" :key="index" :selected="index == modelValue ? true : false">
      {{ option }}
    </option>
  </select>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["update:modelValue"],

  props: {
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: true,
    },
    classValue: {
      type: String,
      required: false,
    },
  },
  setup(props, context) {
    return {
      updateValue: (e) => {
        // context.emit("updateValue", e.target.value);
        context.emit("update:modelValue", e.target.value);
      },
      classDefault: "form-select rounded-lg bg-warmgray-600 bg-opacity-5 focus:outline-none focus:ring-rose-600 focus:ring-2 focus:ring-opacity-20",
    };
  },
});
</script>
