<template>
  <div >
    <group>
      <cell title="title sdd" value="value"></cell>
    </group>
    <Menu />
  </div>
</template>

<script>
import { ViewBox, Group, Cell } from 'vux'
import Menu from '@/components/Menu'

export default {
  components: {
    ViewBox,
    Group,
    Cell,
    Menu
  }
}
</script>
