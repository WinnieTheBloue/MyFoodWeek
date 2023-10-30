<script>
import ListItem from "../components/ListItem.vue";

export default {
  components: {
    ListItem,
  },
  data() {
    return {
      list: {
        1: {
          id: 1,
          title: "Pain",
          quantity: 1,
          unit: "pce.",
          identifier: "item_1",
          checked: true,
        },
        2: {
          id: 2,
          title: "Lait",
          quantity: 1,
          unit: "l",
          identifier: "item_2",
          checked: false,
        },
        3: {
          id: 3,
          title: "Oeufs",
          quantity: 6,
          unit: "pce",
          identifier: "item_3",
          checked: false,
        },
        4: {
          id: 4,
          title: "Farine",
          quantity: 500,
          unit: "gr",
          identifier: "item_4",
          checked: false,
        },
        5: {
          id: 5,
          title: "Beurre",
          quantity: 250,
          unit: "gr",
          identifier: "item_5",
          checked: false,
        },
        6: {
          id: 6,
          title: "Sucre",
          quantity: 250,
          unit: "gr",
          identifier: "item_6",
          checked: false,
        },
      },
      checkedItems: [],
      uncheckedItems: [],
      showChecked: 0,
      timmedShowChecked: 0,
      newTitle: "",
      newQuantity: 0,
      newUnit: "pce",
    };
  },
  methods: {
    toggleShowChecked() {
      this.showChecked = !this.showChecked;
      if (this.showChecked) {
        this.timmedShowChecked = this.showChecked;
      } else {
        setTimeout(() => {
          this.timmedShowChecked = this.showChecked;
        }, 450);
      }
    },
    update({ id, title }) {
      const list = JSON.parse(localStorage.getItem("list"));
      list[id].checked = !list[id].checked;
      localStorage.setItem("list", JSON.stringify(list));

      this.list = list;
    },
    setCheckedItems() {
      this.checkedItems = Object.values(this.list).filter(
        (item) => item.checked
      );
    },
    setUncheckedItems() {
      this.uncheckedItems = Object.values(this.list).filter(
        (item) => !item.checked
      );
    },
    addItem() {
      if (this.newTitle !== "" && this.newQuantity !== 0) {
        console.log("Hello");
        const newItem = {
          id: Object.keys(this.list).length + 1,
          title: this.newTitle,
          quantity: this.newQuantity,
          unit: this.newUnit,
          identifier: "item_" + (Object.keys(this.list).length + 1),
          checked: false,
        };

        const updatedList = { ...this.list };
        updatedList[newItem.id] = newItem;
        localStorage.setItem("list", JSON.stringify(updatedList));
        this.list = updatedList;

        this.newTitle = "";
        this.newQuantity = 0;
        this.newUnit = "pce";
      }
    },
  },
  watch: {
    list: {
      handler() {
        this.setCheckedItems();
        this.setUncheckedItems();
      },
    },
  },
  mounted() {
    if (!localStorage.list) {
      localStorage.setItem("list", JSON.stringify(this.list));
    } else {
      this.list = JSON.parse(localStorage.list);
    }

    this.setCheckedItems();
    this.setUncheckedItems();
  },
};
</script>
<template>
  <div class="list">
    <ListItem
      v-for="item in uncheckedItems"
      :itemId="item.id"
      :key="item.id"
      @checkbox-changed="update"
    ></ListItem>
    <button class="show-checked-items" @click="toggleShowChecked">
      Achetés
      <span
        class="material-symbols-outlined"
        :class="{ open: showChecked, close: !showChecked }"
      >
        expand_more</span
      >
    </button>
    <ListItem
      v-if="timmedShowChecked"
      v-for="item in checkedItems"
      :itemId="item.id"
      :key="item.id"
      :showChecked="showChecked"
      @checkbox-changed="update"
    ></ListItem>
    <div class="add-item-container">
      <div class="add-item">
        <input type="text" v-model="newTitle" required />
        <input type="number" v-model="newQuantity" required />
        <select name="unit" id="unit" v-model="newUnit" required>
          <option value="pce">pce</option>
          <option value="kg">kg</option>
          <option value="gr">gr</option>
          <option value="l">l</option>
          <option value="ml">ml</option>
        </select>
        <button class="add-button" @click="addItem">
          <span class="material-symbols-outlined">add</span>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.show-checked-items {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  width: max-content;
  background-color: #646cff;
}

@keyframes close {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-90deg);
  }
}

@keyframes open {
  from {
    transform: rotate(-90deg);
  }
  to {
    transform: rotate(0deg);
  }
}

.open {
  animation: open 0.7s;
  animation-fill-mode: forwards;
}
.close {
  animation: close 0.7s;
  animation-fill-mode: forwards;
}
.add-item-container {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 1rem 0.5rem;
  background-color: #242424;
}
.add-item {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff22;
  padding: 1rem;
  border-radius: 0.5rem;
  gap: 0.5rem;
}
.add-item input[type="text"] {
  width: 75%;
}
.add-item input[type="number"] {
  width: 25%;
}
.add-item select {
  width: 55px;
}
.add-item input,
.add-item select {
  border: none;
  outline: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
}
.add-button {
  padding: 0;
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: 50px;
}
</style>
