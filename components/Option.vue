<script setup lang="ts">
    import { Options, Option } from "@/data/types"

    interface OptionProps {
        option: Option,
        options: Options
    }
    const props = defineProps<OptionProps>()
    const computedButtonsClasses = (value, index) => {
        const classNames: string[] = ['option'];

        if (props.options[props.option.category] === value) {
            classNames.push('option-active')
        }
        index === 0 ? classNames.push('option-left') : index === props.option.buttons.length - 1 ? classNames.push('option-right') : undefined;
        return classNames.join(' ');
    }
</script>

<template>
    <div class="option-container">
        <h4>{{ option.title }}</h4>
        <div class="option-buttons">
            <button v-for="(value, index) in option.buttons" key="value" :class="computedButtonsClasses(value, index)"
            @click="options[option.category] = value">
                {{ value }}
            </button>
        </div>
    </div>
</template>

<style scoped>
.option-container {
    margin-bottom: 2rem;
  }
  .option {
    background: white;
    outline: 0.15rem solid #FFCC33;
    border: none;
    padding: 0.75rem;
    width: 12rem;
    font-size: 1rem;
    color: rgb(27, 60, 138);
    cursor: pointer;
    font-weight: 200;
  }
  .option-left {
    border-radius: 1rem 0 0 1rem;
  }
  .option-right {
    border-radius: 0 1rem 1rem 0;
  }
  .option-active {
    background-color: #FFCC33;
    color: white;
  }
</style>