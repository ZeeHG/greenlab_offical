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
        <div class="tab" @click="goToAdvantagesProcess">知学优势</div>
        <div class="tab" @click="goTocasetudies">经典案例&评价</div>
      </div>
    </div>
    <div class="case">
      <div class="container">
        <div class="title-container">
          <div class="title">典型成功案例</div>
        </div>
        <div class="case-tab-content">
          <Swiper
            :modules="modules"
            :slides-per-view="isSmallScreen ? 2 : 3"
            :space-between="isSmallScreen ? 4 : 20"
            :slides-per-group="1"
            navigation
            loop
            :pagination="{ clickable: true }"
            :autoplay="{ delay: 2000 }"
            class="cate-swiper"
          >
            <SwiperSlide v-for="(item, index) in tabs" :key="item">
              <div class="case-tab-content__item">
                <b>{{ tabData[index].name }}</b>
                <!-- <span>({{ tabData[index].title }})</span> -->
                <p class="type">{{ tabData[index].type }}</p>
                <div v-html="transformHtml(tabData[index].desc)"></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div class="client-feedback">
        <div class="container">
          <div class="title-container">
            <div class="title">客户反馈</div>
          </div>
          <div class="feature-desc">
            <div class="feature-item">
              <img src="../assets/images/h.png" alt="" />
              <div class="text">
                <h3>高效服务，省时省力</h3>
                <p>
                  “我很幸运我选择了知学。因为我身边很多同学选择了某主流所。但他们花了一年才file
                  NIW因为其他们要花大量时间去挖掘自己的notable
                  citation和整理自己的学术贡献。而知学有高效率的团队帮我做了这两件事。感谢知学团队！”
                </p>
              </div>
            </div>
            <div class="feature-item">
              <img src="../assets/images/y.png" />
              <div class="text">
                <h3>解决裁员焦虑，成功申请NIW</h3>
                <p>
                  ”由于公司裁员，导致perm停办。我有了很大的身份焦虑。感谢知学帮我申请NIW,锁定PD,这对我来说非常重要，也很大程度上缓解了我对裁员和身份的焦虑。因为我是转码的人，我非常不确定自己是否能够用我在生物工程学习期间发表的文章办理NIW。因为有知学专业的顾问和PL老师，我逐渐克服了这些担忧，并相信有很大概率可以成功。而且知学还为了联系了几个独立推荐人。再次感谢知学。”
                </p>
              </div>
            </div>
            <div class="feature-item">
              <img src="../assets/images/C.png" />
              <div class="text">
                <h3>解决排期忧虑，成功申请EB1B</h3>
                <p>
                  “虽然我已经有了公司给办理的EB2的PD。但EB2实在排期太长，而且现在大厂裁员，导致我对自己的身份产生忧虑。我本打算找知学办理NIW作为保底的选择，但知学评估我的case之后推荐我向公司申请EBlB。获取公司批准后，公司让我自己准备推荐信、寻找推荐人，和增强自己的审稿记录。比较内向的我已经离开学术很久，实在不知道如何去寻找独立推荐
                  人。这个时候，知学帮我联系了期刊编辑，使我获得审稿机会，更重要的是，知学帮我梳理了我的研究经历，并把研究经历和我目前从事的工作联系起来，从而构建出来了一个具有说服力的故事。最重要的是，知学帮我挖掘了notable
                  citation。虽然我最终的petition letter是公司律师起草
                  的，但其实律师的PL很多句子都是从知学帮我写的推荐信里直接套用。再次感谢知学。”
                </p>
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
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const tabData = [
      {
        name: "甘同学",
        type: "申请类型：NIW, EB1B",
        desc: [
          "客户类型：码农",
          "有无背景提升：YES",
          "本硕博专业以及职业：",
          "  本科：环境工程（华中某211）",
          "  硕士1：环境工程（中国某985）",
          "  硕士2：统计（南加州某名校）",
          "  现在工作：北美大厂 码农",
          "申请时三维：",
          "  论文：1篇一作，2篇非一作",
          "  引用：158",
          "  审稿：10",
          "签约时三维：",
          "  论文：1篇一作，2篇非一作",
          "  引用：62",
          "  审稿：0",
        ],
      },
      {
        name: "胡同学",
        type: "申请类型：NIW",
        backgroundUpgrade: "YES",
        desc: [
          "客户类型：码农",
          "本硕博专业及职业：",
          "  本科：化学工程（国内某211）",
          "  硕士1：CS（北美某校）",
          "申请时三维：",
          "  论文：2篇非一作",
          "  引用：35",
          "  审稿：2",
          "签约时三维：",
          "  论文：0",
          "  引用：0",
          "  审稿：0",
        ],
      },
      {
        name: "张同学",
        type: "申请类型：NIW, EB1A",
        backgroundUpgrade: "No",
        desc: [
          "客户类型：科研型",
          "本硕博专业及职业：",
          "  本科：环境工程（北京某211）",
          "  硕士：环境工程（北京某211）",
          "  博士：化学与环境工程（北美）",
          "  现在工作：某科研机构",
          "申请时三维：同签约时",
          "签约时三维：",
          "  论文：8篇一作，4篇非一作",
          "  引用：330",
          "  审稿：24",
        ],
      },
      {
        name: "XX同学",
        type: "申请类型：NIW",
        backgroundUpgrade: "Empty",
        desc: [
          "客户类型：科研型",
          "本硕博专业及职业：",
          "  本科：环境工程（国内某本科）",
          "  硕士：环境工程（国内某本科）",
          "  博士：环境工程（北美）",
          "申请时三维：",
          "  论文：3篇一作，6篇非一作",
          "  引用：340",
          "  审稿：18",
          "签约时三维：",
          "  Empty",
        ],
      },
      {
        name: "XX同学",
        type: "申请类型：NIW",
        backgroundUpgrade: "Empty",
        desc: [
          "本硕博专业及职业：",
          "  本科：环境工程（国内某211）",
          "  硕士：环境工程（国内某211）",
          "  博士：environmental engineer（北美）",
          "申请时三维：",
          "  论文：4篇一作，8篇非一作",
          "  引用：234",
          "  审稿：36",
          "签约时三维：",
          "  Empty",
        ],
      },
      {
        name: "XX同学",
        type: "申请类型：NIW",
        backgroundUpgrade: "Empty",
        desc: [
          "客户类型：科研型",
          "本硕博专业及职业：",
          "  本科：环境工程（国内某211）",
          "  硕士：环境工程（国内某211）",
          "  博士：environmental engineer（北美）",
          "申请时三维：",
          "  论文：4篇一作，8篇非一作",
          "  引用：234",
          "  审稿：36",
          "签约时三维：",
          "  Empty",
        ],
      },
      {
        name: "XX同学",
        type: "申请类型：NIW",
        backgroundUpgrade: "Empty",
        desc: [
          "客户类型：科研型",
          "本硕博专业及职业：",
          "  本科：环境工程（国内某211）",
          "  硕士：环境工程（国内某211）",
          "  博士：environmental engineer（北美）",
          "申请时三维：",
          "  论文：4篇一作，8篇非一作",
          "  引用：234",
          "  审稿：36",
          "签约时三维：",
          "  Empty",
        ],
      },
      {
        name: "顾同学",
        type: "申请类型：EB1A",
        backgroundUpgrade: "Empty",
        desc: [
          "客户类型：科研型",
          "本硕博专业及职业：",
          "  本科：应用化学专业（国内某985）",
          "  硕士：有机化学专业（国内某985）",
          "  博士：有机化学专业（国内某985）",
          "  现在工作：北美大学 faculty",
          "申请时三维：",
          "  论文：5篇一作，23篇非一作",
          "  引用：890",
          "  审稿：39（期刊审稿30，会议信邀审稿9）",
          "签约时三维：",
          "  Empty",
        ],
      },
      {
        name: "XX同学",
        type: "申请类型：EB1A",
        backgroundUpgrade: "Empty",
        desc: [
          "客户类型：码农",
          "本硕博专业及职业：",
          "  本科：计算机专业（国内某本）",
          "  博士：计算机科学专业（北美大学）",
          "申请时三维：",
          "  论文：5篇一作，2篇非一作",
          "  引用：110",
          "  审稿：30",
          "签约时三维：",
          "  论文：3篇一作，2篇非一作",
          "  引用：30",
          "  审稿：10",
        ],
      },
      {
        name: "XX同学",
        type: "申请类型：NIW",
        backgroundUpgrade: "Empty",
        desc: [
          "客户类型：科研型",
          "本硕博专业及职业：",
          "  本科：计算机专业（国内某本）",
          "  博士：计算机科学专业（北美大学）",
          "申请时三维：",
          "  论文：5篇一作，2篇非一作",
          "  引用：50",
          "  审稿：5",
          "签约时三维：",
          "  Empty",
        ],
      },
      {
        name: "陈同学",
        type: "申请类型：EB1A",
        backgroundUpgrade: "Empty",
        desc: [
          "客户类型：科研型",
          "本硕博专业及职业：",
          "  博士：新加坡南洋理工大学",
          "  专业：化学与生物医学工程",
          "申请时三维：",
          "  论文：3篇一作，2篇非一作",
          "  引用：1900+",
          "  审稿：15",
          "  今年1月提交申请时直接PP，大约5个工作日approve。",
          "签约时三维：",
          "  Empty",
        ],
      },
      {
        name: "吴同学",
        type: "申请类型：NIW, EB1A",
        backgroundUpgrade: "Empty",
        desc: [
          "客户类型：科研型",
          "本硕博专业及职业：",
          "  本科：环境工程",
          "  博士：美国院校环境毒理",
          "申请时三维：",
          "  论文：3篇一作，6篇非一作",
          "  引用：154",
          "  审稿：64",
          "  提交NIW申请，提交时非PP，6个月拿到approval。",
          "签约时三维：",
          "  Empty",
        ],
      },
    ];

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
    const activeTab = ref(0);
    const tabs = computed(() => tabData.map((item) => item.name));
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
      tabData,
      activeTab,
      tabs,
      goToHomepage,
      goToServices,
      goToAdvantagesProcess,
      goTocasetudies,
      changeActiveTab,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
      isSmallScreen,
      transformHtml,
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
    font-size: 20px;
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

    .title {
      font-size: 32px;
    }

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
