<template>
  <div >
    <group>
      <cell title="title sdd" value="value"></cell>
    </group>
    <k-menu />
  </div>
</template>

<script>
import { ViewBox, Group, Cell } from 'vux'
import KMenu from '@/components/KMenu'

export default {
  components: {
    ViewBox,
    Group,
    Cell,
    KMenu
  }
}
</script>
