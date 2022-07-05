<script setup lang="ts">
    import { Gender, Popularity, Length, OptionsObject } from "@/data/types";
    import { dataNames, optionsBtnArray } from "@/data/dataNames"

    const options = reactive<OptionsObject>({
      gender: Gender.GIRL,
      popularity: Popularity.TRENDY,
      length: Length.LONG
    });
    const names = ref<string[]>([]);

    const removeName = (index: number) => {
      const filteredNames = [...names.value];
      filteredNames.splice(index, 1);
      names.value = filteredNames;
    }

    const computeNames = (dataNames, options) => {
    const filteredNames = dataNames
      .filter((name) => name.gender === options.gender)
      .filter((name) => name.popularity === options.popularity)
      .filter((name) => {
        if (options.length !== Length.ALL) {
          return name.length === options.length
        } else {
          return true;
        }
      })
    names.value = filteredNames.map(name => name.name);
  }
</script>
<template>
<div class="container">
    <h1>Baby Name Generator</h1>
    <p>Choose your options and click the "Find Names" buttom below</p>
    <div class="options-container">
      <Option v-for="option in optionsBtnArray" 
        :key="option.title"
        :option="option"
        :options="options"/>
      <button class="primary" @click="computeNames(dataNames, options)">Search for names</button>
    </div>
    <div class="cards-container">
      <!-- <div v-for="name in names" key="name" class="card">
        <h4>{{ name }}</h4>
        <p class="card-closeBtn">x</p>
      </div> -->.
      <CardName v-for="(name, index) in names" key="name" :name="name" :index="index" @remove="() => removeName(index)"/>
    </div>
  </div>
</template>

<style scoped>
  .container {
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(27, 60, 138);
    max-width: 50rem;
    margin: 0 auto;
    text-align: center;
  }
  h1 {
    font-size: 3rem;
  }
  .options-container {
    background-color: rgba(230, 190, 138, .1);
    border-radius: 2rem;
    padding: 1rem;
    width: 95%;
    margin: 0 auto;
    margin-top: 4rem;
    position: relative;
  }
  .primary {
    background-color: #FFCC33;
    color: white;
    border-radius: 6.5rem;
    border: none;
    padding: 0.75rem;
    font-size: 1rem;
    margin-top: 1rem;
    cursor: pointer;
  }
  .cards-container {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    flex-wrap: wrap;
  }
</style>