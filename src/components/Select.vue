<template>
  <select :class="classValue || classDefault" @change="updateValue">
    <option value="default" :selected="modelValue === null || modelValue === undefined" key="default">
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
      classDefault: "h-10 rounded border border-gray-300 bg-white px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400",
    };
  },
});
</script>
