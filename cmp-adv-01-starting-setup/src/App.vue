<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>

    <!-- <manage-goals v-if="selectedComponent === 'active-goals'"></manage-goals>
    <active-goals v-if="selectedComponent === 'manage-goals'"></active-goals> -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>

    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
      <template #default="slotProps">
        <h2>
          {{ slotProps.item }}
        </h2>
        <p>{{ slotProps.anotherProp }}</p>
      </template>
    </course-goals> -->
  </div>
</template>

<script>
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";
// import BadgeList from "./components/BadgeList.vue";
// import CourseGoals from "./components/CourseGoals.vue";
// import UserInfo from "./components/UserInfo.vue";
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  components: {
    TheHeader,
    ActiveGoals,
    ManageGoals /*BadgeList, UserInfo, CourseGoals */,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
      selectedComponent: "",
    };
  },
  methods: {
    setSelectedComponent(type) {
      this.selectedComponent = type;
    },
  },
};
</script>

<style scoped>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
