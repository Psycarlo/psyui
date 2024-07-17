<template>
  <table :class="tableClass">
    <thead>
      <th>Owner</th>
      <th>Status</th>
      <th>Region</th>
      <th>Stability</th>
      <th>Costs</th>
      <th>Last edited</th>
      <th>Edit</th>
    </thead>
    <tbody>
      <tr>
        <td>Carlos Marques</td>
        <td>Live</td>
        <td>Europe 1</td>
        <td>11</td>
        <td>$69,333</td>
        <td>22/07/2024 14:16</td>
        <td></td>
      </tr>
      <tr>
        <td>Marília Marques</td>
        <td>Archived</td>
        <td>Europe 2</td>
        <td>55</td>
        <td>$61,333</td>
        <td>22/06/2024 14:18</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
  import { tv } from 'tailwind-variants'
  import { type HTMLAttributes, computed } from 'vue'

  type TableProps = {
    class?: HTMLAttributes['class']
  }

  const props = defineProps<TableProps>()

  const tableClass = computed(() => tv({ base: 'table-auto' })(props))
</script>
