<script>
export default {
  props: {
    itemId: {
      type: Number,
      required: true,
    },
    showChecked: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      item: {},
    };
  },
  methods: {
    toggleCheckbox() {
      if (this.item) {
        
        this.$emit('checkbox-changed', { id: this.item.id, title: this.item.title});
      }
    },
  },
  mounted() {
    if (localStorage.list) {
      const list = JSON.parse(localStorage.getItem("list"));
      this.item = list[this.itemId];
    }
  },
};
</script>

<template>
  <button class="list-item" @click="toggleCheckbox" :class="{ checked: item.checked && showChecked, noChecked: item.checked && !showChecked}">
    <div class="icon">
      <span v-if="item && item.checked" class="material-symbols-outlined"
        >check_circle</span
      >
      <span v-else class="material-symbols-outlined"
        >radio_button_unchecked</span
      >
    </div>
    <div class="list-item__title">{{ item && item.title }}</div>
    <div class="list-item__quantity">
      {{ item && item.quantity }} {{ item && item.unit }}
    </div>
  </button>
</template>

<style scoped>
.list-item {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff22;
  padding: 1rem 1rem;
  border-radius: 0.5rem;
}
.list-item__title {
  width: calc(70% - 50px);
}
.list-item__quantity {
  width: 30%;
  text-align: right;
}
span {
  color: #ffffffde;
  width: 50px;
}

.icon {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@keyframes display {
  from{
    margin-top: -5px;
    opacity: 0;
  }
  to {
    margin-top: 0;
    opacity: 0.5;
  }
}

@keyframes undisplay {
  from{
    margin-top: 0;
    opacity: 0.5;
  }
  to {
    margin-top: -5px;
    opacity: 0;
    
  }
}

.checked {
  animation: display 0.5s;
  animation-fill-mode: forwards;
}

.noChecked {
  animation: undisplay 0.5s;
  animation-fill-mode: backwards;
}
</style>
