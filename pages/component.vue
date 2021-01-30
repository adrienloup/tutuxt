<template>
  <section class="tutuxt-content">

    <h1>
      Components
    </h1>

    <br>

    <h2>
      Popin
    </h2>

    <Popins />

    <br>

    <h2>
      TodoList
    </h2>

    <TodoList />

    <br>

    <h2>
      Shop
    </h2>

    <Shop />

    <br>

    <h2>
      Sticky
    </h2>

    <Sticky />

    <br>

    <h2>
      Lazy
    </h2>

    <Lazy />

    <br>

    <h2>
      Slider
    </h2>

    <Slider
      :slides="[
        { title: 'Slide 1' },
        { title: 'Slide 2' },
        { title: 'Slide 3' }
      ]"
    />

    <br>

    <h2>
      Expands
    </h2>

    <Expands
      :items="[
        { title: '1', content: 'Expand 1', expand: true },
        { title: '2', content: 'Expand 2', expand: false },
        { title: '3', content: 'Expand 3', expand: false }
      ]"
    />

    <br>

    <h2>
      Search
    </h2>

    <Search
      :search="''"
      :list="[
        { id: 1, title: 'Apple' },
        { id: 2, title: 'Banana' },
        { id: 3, title: 'Cherries' },
        { id: 4, title: 'Peach' },
        { id: 5, title: 'Orange' }
      ]"
    />

    <br>

    <h2>
      Button
    </h2>

    <ButtonPrimary
      :href="'https://fr.nuxtjs.org/'"
      :target="'_blank'"
    >
      NuxtJS
    </ButtonPrimary>

    <ButtonPrimary
      :to="'/'"
      nuxt
    >
      TuTuxt
    </ButtonPrimary>

    <ButtonPrimary
      :type="'submit'"
    >
      Type
    </ButtonPrimary>

    <br>
    <br>

    <h2>
      Slots
    </h2>

    <Slots>
      <template>Slot 1</template>
    </Slots>

    <Slots>
      <template>Slot 2</template>
      <template slot="slotA">Replace A</template>
    </Slots>

    <Slots>
      <template>Slot 3</template>
      <template slot="slotB">Replace B</template>
    </Slots>

  </section>
</template>

<script>
import Popins from '@/components/Popin/Popins';
import TodoList from '@/components/TodoList/List';
import Shop from '@/components/Shop/Shop';
import Sticky from '@/components/Sticky/Sticky';
import Lazy from '@/components/Lazy/Lazy';
import Slider from '@/components/Slider/Slider';
import Expands from '@/components/Expand/Expands';
import Search from '@/components/Search/Search'
import ButtonPrimary from '@/components/Button/Primary';
import Slots from '@/components/Slots';

export default {
  components: {
    Popins,
    TodoList,
    Shop,
    Sticky,
    Lazy,
    Slider,
    Expands,
    Search,
    ButtonPrimary,
    Slots
  }
}
</script>
