<template>
  <div>

    <ButtonPrimary
      @click="centerPopin = !centerPopin"
    >
      Center
    </ButtonPrimary>

    <Popin
      v-model="centerPopin"
    >
      <template slot="title">
        <h3>Center Popin</h3>
      </template>
      <template slot="content">
        <p>Content Popin</p>
        <br>
      </template>
    </Popin>

    <ButtonPrimary
      @click="topPopin = !topPopin"
    >
      Top
    </ButtonPrimary>

    <Popin
      v-model="topPopin"
      :class-list="'top'"
    >
      <template slot="title">
        <h3>Top Popin</h3>
      </template>
      <template slot="content">
        <p>Content Popin</p>
        <br>
      </template>
    </Popin>

    <ButtonPrimary
      @click="rightPopin = !rightPopin"
    >
      Right
    </ButtonPrimary>

    <Popin
      v-model="rightPopin"
      :class-list="'right'"
    >
      <template slot="title">
        <h3>Right Popin</h3>
      </template>
      <template slot="content">
        <p>Content Popin</p>
        <br>
      </template>
    </Popin>

    <ButtonPrimary
      @click="bottomPopin = !bottomPopin"
    >
      Bottom
    </ButtonPrimary>

    <Popin
      v-model="bottomPopin"
      :class-list="'bottom'"
    >
      <template slot="title">
        <h3>Bottom Popin</h3>
      </template>
      <template slot="content">
        <p>Content Popin</p>
        <br>
      </template>
    </Popin>

    <ButtonPrimary
      @click="leftPopin = !leftPopin"
    >
      Left
    </ButtonPrimary>

    <Popin
      v-model="leftPopin"
      :class-list="'left'"
    >
      <template slot="title">
        <h3>Left Popin</h3>
      </template>
      <template slot="content">
        <p>Content Popin</p>
        <br>
      </template>
    </Popin>

  </div>
</template>

<script>
import Popin from '@/components/Popin/Popin';
import ButtonPrimary from '@/components/Button/Primary';

export default {
  name: 'Popins',
  components: { ButtonPrimary, Popin },
  data() {
    return {
      topPopin: false,
      rightPopin: false,
      bottomPopin: false,
      leftPopin: false,
      centerPopin: false
    };
  }
}
</script>

