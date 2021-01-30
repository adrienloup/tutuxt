<template>
  <section class="tutuxt-content">

    <h2>
      TodoList
    </h2>

    <TodoList />

    <br>
    <br>

    <h2>
      Sticky
    </h2>

    <Sticky />

    <br>
    <br>

    <h2>
      Lazy
    </h2>

    <Lazy />

    <br>
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
import TodoList from '@/components/TodoList/List';
import Sticky from '@/components/Sticky/Sticky';
import Lazy from '@/components/Lazy/Lazy';
import Slider from '@/components/Slider/Slider';
import Expands from '@/components/Expand/Expands';
import Search from '@/components/Search/Search'
import ButtonPrimary from '@/components/Button/Primary';
import Slots from '@/components/Slots';

export default {
  components: {
    TodoList,
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
