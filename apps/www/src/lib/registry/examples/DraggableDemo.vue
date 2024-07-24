<template>
  <Card class="max-w-[200px]">
    <Draggable>
      <div class="flex flex-col gap-2">
        <span class="mb-1 text-sm font-medium">Display properties</span>
        <div
          v-for="field in fields"
          :key="field.label"
          class="relative flex items-center justify-between gap-2"
          :class="{ 'opacity-50': field.state === 'dragging' }"
          ref="target"
        >
          <div class="flex items-center gap-2">
            <Checkbox v-model="field.selected" class="size-4" />
            <span class="text-sm">{{ field.label }}</span>
          </div>
          <button class="hover:cursor-grab">
            <Icon icon="ri:draggable" class="text-brand-gray-700 size-5" />
          </button>
          <div
            v-if="field.state === 'over' && field.edge"
            class="bg-brand-primary absolute z-10 h-[2px] w-full"
            :class="{
              '-top-[5px]': field.edge === 'top',
              '-bottom-[5px]': field.edge === 'bottom'
            }"
          />
        </div>
      </div>
    </Draggable>
  </Card>
</template>

<script setup lang="ts">
  import { ref, reactive, watch, onMounted, type Ref } from 'vue'
  import Card from '../ui/Card.vue'
  import Checkbox from '../ui/Checkbox.vue'
  import Draggable from '../ui/Draggable.vue'
  import { Icon } from '@iconify/vue'
  import {
    monitorForElements,
    dropTargetForElements,
    draggable
  } from '@atlaskit/pragmatic-drag-and-drop/element/adapter'
  import {
    attachClosestEdge,
    type Edge,
    extractClosestEdge
  } from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge'

  const statusCheckboxState = ref(true)
  const valueCheckboxState = ref(true)
  const labelCheckboxState = ref(true)
  const dateCheckboxState = ref(true)
  const target = ref()

  type State = 'idle' | 'dragging' | 'over'
  type Field = {
    selected: Ref<boolean>
    label: string
    state: State
    edge: Edge | null
  }

  const fields = reactive<Field[]>([
    {
      selected: statusCheckboxState,
      label: 'Status',
      state: 'idle',
      edge: null
    },
    { selected: valueCheckboxState, label: 'Value', state: 'idle', edge: null },
    { selected: labelCheckboxState, label: 'Label', state: 'idle', edge: null },
    { selected: dateCheckboxState, label: 'Date', state: 'idle', edge: null }
  ])

  function setState(idx: number, state: State, edge?: Edge | null) {
    fields[idx].state = state
    if (edge !== undefined) fields[idx].edge = edge
  }

  onMounted(() => {
    for (let i = 0; i < fields.length; i++) {
      draggable({
        element: target.value[i],
        onDragStart() {
          console.log('dragging:', i)
          setState(i, 'dragging')
        },
        onDrop() {
          console.log('idle:', i)
          setState(i, 'idle')
        }
      })
      dropTargetForElements({
        element: target.value[i],
        canDrop({ source }) {
          if (source.element === target.value[i]) return false
          return true
        },
        getData({ element, input }) {
          return attachClosestEdge(fields[i], {
            element,
            input,
            allowedEdges: ['top', 'bottom']
          })
        },
        onDragEnter({ self }) {
          const closestEdge = extractClosestEdge(self.data)
          console.log('drag enter:', i, 'over', closestEdge)
          setState(i, 'over', closestEdge)
        },
        onDrag({ self }) {
          console.log('drag:', i, 'over')
          const closestEdge = extractClosestEdge(self.data)
          setState(i, 'over', closestEdge)
        },
        onDragLeave() {
          console.log('drag leave:', i, 'idle')
          setState(i, 'idle')
        },
        onDrop() {
          console.log('drop:', i, 'idle')
          setState(i, 'idle')
        },
        getIsSticky() {
          return true
        }
      })
    }
  })
</script>
