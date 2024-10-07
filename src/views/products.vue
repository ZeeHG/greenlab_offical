<template>
  <main>
    <div class="header">
      <img
        src="@/assets/images/favicon.png"
        alt="Logo"
        class="header-logo"
        @click="goToHomepage"
      />
      <div class="header-tabs">
        <div class="tab" @click="goToHomepage">公司概况</div>
        <div class="tab" @click="goToServices">主营业务</div>
        <div class="tab" @click="goToProducts">产品</div>
        <div class="tab" @click="goToAdvantagesProcess">知学优势</div>
        <div class="tab" @click="goTocasetudies">经典案例&评价</div>
      </div>
    </div>
    <div class="case">
      <div class="client-feedback">
        <div class="container">
          <div class="title-container">
            <div class="title">主要产品</div>
          </div>
          <div class="feature-desc">
            <div class="feature-item">
              <img src="../assets/images/h.png" alt="" />
              <div class="text">
                <h3>产品一 咨询费</h3>
                <div class="contact-container">
                  <div class="qr-code">
                    <img src="../assets/images/fee_qr.png" alt="QR Code" />
                  </div>

                  <div class="contact-info">
                    <div class="title-content">咨询费：</div>
                    <div class="title-content">扫二维码或点击下方链接支付</div>
                    <div class="title-content">
                      <a
                        href="https://www.paypal.com/ncp/payment/7MWQDBMBH5BQG"
                        target="_blank"
                        style="color: #0070ba; text-decoration: none"
                        >咨询费用支付链接</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="feature-item">
              <img src="../assets/images/y.png" />
              <div class="text">
                <h3>产品二 NIW写作</h3>
                <p></p>
              </div>
            </div>
            <div class="feature-item">
              <img src="../assets/images/C.png" />
              <div class="text">
                <h3>产品三 EB1A写作</h3>
                <p></p>
              </div>
            </div>
            <div class="feature-item">
              <img src="../assets/images/C.png" />
              <div class="text">
                <h3>产品四 EB1B写作</h3>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
export default defineComponent({
  // components: {
  //   Swiper,
  //   SwiperSlide,
  // },
  setup() {
    const transformHtml = (textArr: string[]) => {
      return textArr
        .map((text) => {
          // 匹配是否存在 %***: 的字符串 并将***作为class
          const reg = /%(.+?):/g;
          const match = reg.exec(text);
          if (match) {
            return `<p class="${match[1]}">${text.replace(match[0], "")}</p>`;
          }
          return `<p>${text}</p>`;
        })
        .join("");
    };
    const getTypeHtml = (type: any) => {
      const parts = type.split("：");
      const types = parts[1].split(", ");
      return `申请类型：${types
        .map(
          (t: any) => `<span class="type-label ${getTypeClass(t)}">${t}</span>`
        )
        .join(", ")}`;
    };
    const getTypeClass = (type: string) => {
      if (type.includes("NIW")) {
        return "type-niw";
      } else if (type.includes("EB1B")) {
        return "type-eb1b";
      } else if (type.includes("EB1A")) {
        return "type-eb1a";
      } else {
        return "type-default";
      }
    };
    const activeTab = ref(0);
    // const tabs = computed(() => tabData.map((item) => item.name));
    const router = useRouter();
    const isSmallScreen = ref(false);

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
    const goToProducts = () => {
      router.push("/products");
    };

    onMounted(() => {
      if (window.innerWidth > 768) {
        isSmallScreen.value = false;
      } else {
        isSmallScreen.value = true;
      }
      // 监听屏幕是否小于768px
      window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
          isSmallScreen.value = false;
        } else {
          isSmallScreen.value = true;
        }
      });
    });

    const changeActiveTab = (index: number) => (activeTab.value = index);

    return {
      // tabData,
      activeTab,
      // tabs,
      goToHomepage,
      goToServices,
      goToAdvantagesProcess,
      goTocasetudies,
      goToProducts,
      changeActiveTab,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
      isSmallScreen,
      transformHtml,
      getTypeHtml,
    };
  },
});
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 51px 127px 16px 112px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(73px);
  z-index: 999;

  .header-logo {
    height: 60px;
    cursor: pointer;
  }

  .header-tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    font-size: 18px;
    color: black;
    line-height: 25px;
    font-family: "Helvetica-Medium";

    .tab {
      cursor: pointer;
    }
  }
}
.case {
  background-color: #ffffff;
  padding: 160px 127px;

  .title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
  }

  .title {
    text-align: center;
    font-family: "Montserrat-Bold";
    font-weight: 700;
    font-size: 48px;
    color: #000000;
    line-height: 48px;
  }

  .case-tab-content {
    width: calc(100% - 80px * 2);
    margin-left: 80px;
    color: #1a1a1a;
    overflow: hidden;

    .type {
      font-size: 16px;
      font-weight: bold;
    }

    .type-label {
      color: white;
      padding: 2px 5px;
      border-radius: 3px;
    }

    .type-niw {
      background-color: #ca8f84;
    }

    .type-eb1b {
      background-color: #3b7ac8;
    }

    .type-eb1a {
      background-color: #f8b878;
    }

    .type-default {
      background-color: #2196f3;
    }
    .swiper {
      width: 100%;
      height: 100%;
      .swiper-slide {
        height: 100%;
      }
    }
    .swiper-pagination-bullet {
      display: none;
    }
    .swiper-button-next,
    .swiper-button-prev {
      color: grey;
    }
    &__item {
      width: 100%;
      padding: 20px 50px;
      height: 600px;
      border: rgba(0, 0, 0, 0.2) 1px solid;
      border-radius: 16px;
      user-select: none;
      overflow: hidden;
      b {
        font-size: 24px;
        font-weight: 800;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      p {
        font-size: 18px;
        word-wrap: break-word; /* 自动换行 */
        word-break: break-word; /* 支持长单词换行 */
        white-space: normal; /* 确保 p 标签内文本正常换行 */
      }
    }
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;

    .grid-item {
      background: #86e19c;
      border-radius: 10px;
      height: 300px;
      position: relative;
      overflow: hidden;
      width: 100%;

      img {
        width: 180px;
        height: auto;
        position: absolute;
        right: 0;
        bottom: 0;
        object-fit: cover;
      }

      .p1,
      .p2 {
        position: absolute;
        left: 56px;
        font-family: "Montserrat-Bold";
        font-weight: 700;
        font-size: 24px;
        color: #000000;
        line-height: 32px;
        text-align: left;
      }

      .p1 {
        top: 48px;
      }

      .p2 {
        top: 80px;
      }

      .grid-item-hover {
        font-family: "Montserrat-Regular";
        font-size: 17px;
        font-weight: 400;
        line-height: 22px;
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding-left: 24px;
        background-color: #f9f9f9;
        border-radius: 10px;
        justify-content: center;
        align-items: start;
        text-align: left;
        flex-direction: column;
        transition: opacity 0.3s ease;
        color: black;
      }

      &:hover .grid-item-hover {
        display: flex;
        opacity: 1;
      }
    }
  }

  .client-feedback {
    background-color: #ffffff;
    padding: 80px 80px;

    .title-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 150px;
    }

    .title {
      text-align: center;
      font-family: "Montserrat-Bold";
      font-weight: 700;
      font-size: 48px;
      color: #000000;
      line-height: 48px;
    }

    .feature-desc {
      display: flex;
      flex-direction: column;
      gap: 32px;
      .contact-container {
        display: flex;
        align-items: flex-start;
        gap: 20px; // 二维码和联系方式之间的间距

        .qr-code {
          img {
            width: 100px; // 调整二维码图片的宽度
            height: 100px; // 调整二维码图片的高度
          }
        }

        .contact-info {
          display: flex;
          flex-direction: column; // 垂直排列联系方式
          gap: 10px; // 添加间距以分隔内容

          .title-content {
            font-family: "Montserrat";
            font-size: 16px;
            color: #000000;
            line-height: 22px;
            text-align: left;
            font-weight: 400;
          }
        }
      }
      .feature-item {
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 8px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

        img {
          width: 50px;
          height: 50px;
        }

        .text {
          flex: 1;

          h3 {
            margin: 0;
            font-size: 20px;
            font-weight: bold;
            color: #333;
          }

          p {
            margin: 5px 0 0;
            font-size: 18px;
            color: #333;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .case {
    padding: 40px 20px;

    .title-container {
      height: auto;
      margin-bottom: 24px;
      margin-top: 100px;
    }

    // .title {
    //   font-size: 32px;
    // }

    .grid-container {
      grid-template-columns: 1fr;
    }

    .grid-item {
      height: auto;
      margin-bottom: 20px;

      img {
        width: 100%;
        object-fit: contain;
      }

      .p1,
      .p2 {
        left: 10px;
        text-align: center;
        width: calc(100% - 20px);
      }

      .p1 {
        top: 20px;
      }

      .p2 {
        top: 100px;
      }

      .grid-item-hover {
        padding: 20px;
        text-align: center;
      }
    }
  }

  .client-feedback {
    padding: 40px 20px;

    .title-container {
      height: auto;
      margin-bottom: 24px;
    }

    .title {
      font-size: 32px;
    }

    .feature-desc {
      gap: 16px;

      .feature-item {
        flex-direction: column;
        align-items: flex-start;

        img {
          width: 40px;
          height: 40px;
        }

        .text {
          h3 {
            font-size: 18px;
          }

          p {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
