<template>
  <div class="header">
    <img
      src="@/assets/images/logo.png"
      alt="Logo"
      class="header-logo"
      @click="goToHomepage"
    />
    <div class="header-tabs">
      <div class="tab" @click="goToHomepage">公司概况</div>
      <div class="tab" @click="goToServices">主营业务</div>
      <div class="tab" @click="goToAdvantagesProcess">知学优势</div>
      <div class="tab" @click="goTocasetudies">经典案例&评价</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();

    const goToHomepage = () => {
      router.push("/");
    };

    const goToServices = () => {
      router.push("/services");
    };

    const goToAdvantagesProcess = () => {
      router.push("/advantages");
    };

    const goTocasetudies = () => {
      router.push("/case");
    };

    return {
      goToHomepage,
      goToServices,
      goToAdvantagesProcess,
      goTocasetudies,
    };
  },
});
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f8f8;
  padding: 10px 20px;
}

.header-logo {
  height: 40px;
  cursor: pointer;
}

.header-tabs {
  display: flex;
  gap: 20px;
}

.tab {
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.tab:hover {
  background-color: #e0e0e0;
}
</style>
