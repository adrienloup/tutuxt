<template>
  <section class="tutuxt-content">

    <h1>
      Component
    </h1>

    <br>

    <h2>
      Form
    </h2>

    <Form />

    <br>

    <h2>
      TodoList
    </h2>

    <TodoList />

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
      Popin
    </h2>

    <Popins />

    <br>

    <h2>
      Sticky
    </h2>

    <Sticky />

    <br>

    <h2>
      Cart
    </h2>

    <Shop />

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
      Link
    </ButtonPrimary>

    <ButtonPrimary
      :to="{ name: 'index' }"
    >
      RouterLink
    </ButtonPrimary>

    <ButtonPrimary
      :type="'submit'"
    >
      Submit
    </ButtonPrimary>

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

  </section>
</template>

<script>
import Form from '@/components/Form/Form';
import Popins from '@/components/Popin/Popins';
import TodoList from '@/components/TodoList/List';
import Shop from '@/components/Cart/Shop';
import Sticky from '@/components/Sticky/Sticky';
import Lazy from '@/components/Lazy/Lazy';
import Slider from '@/components/Slider/Slider';
import Expands from '@/components/Expand/Expands';
import Search from '@/components/Search/Search'
import ButtonPrimary from '@/components/Button/Primary';

export default {
  components: {
    Form,
    Popins,
    TodoList,
    Shop,
    Sticky,
    Lazy,
    Slider,
    Expands,
    Search,
    ButtonPrimary
  }
}
</script>
