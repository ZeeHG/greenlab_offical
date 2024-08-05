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
    <div class="feature-list">
      <div class="container">
        <div class="feature">
          <div class="title-container">
            <img src="../assets/images/flag.png" alt="" class="flag" />
            <div class="title">主营业务</div>
          </div>
          <div class="tab_list">
            <ul class="div-tab-head">
              <li
                style="list-style-type: none"
                class="offer_head2"
                :class="{ 'head-on2': currentTab === 'eb1a' }"
                @click="showEb1a"
              >
                EB-1 A
              </li>
              <li
                style="list-style-type: none"
                class="offer_head2"
                :class="{ 'head-on2': currentTab === 'niw' }"
                @click="showNiw"
              >
                EB-2 NIW
              </li>
            </ul>
          </div>

          <div class="feature-content">
            <div class="background-image"></div>
            <div v-if="currentTab === 'eb1a'" class="feature-desc eb1a">
              <div class="section">
                <div class="title">EB-1 A</div>
                <div class="content">
                  <p>
                    EBIA （Employment-Based First Preference Immigration:
                    Extraordinary
                    Ability,第一优先级别的职业移民：杰出人才）是美国绿卡的一种类别，旨在吸引
                    在科学、艺术、教育、商业或体育等领域具有杰出才能的个人。申请人必须证明自已在其专业领域内达到了顶尖水平，通过国际认可的奖项或其他具体标准来证明其杰出成就。与其他移民途径相比，EBlA不需要劳动认证，申请人可以自我申请，为全球顶尖人才提供了一个较快速获得美国永久居留权的途径。与NIW（国家利益豁免）相比，EB1A
                    （杰出人才）的标准更为严格，要求申请人在其领域内具有更高水平的杰出成就，且通常需要国际级的认可或奖项来证明其成就。
                  </p>
                </div>
              </div>
              <div class="section">
                <div class="content">
                  <div class="content-title">EBlA优势：</div>
                  <p>1.不需要美国雇主支持</p>
                  <p>2.平均2~3年内拿到绿卡</p>
                  <p>3.无投资风险</p>
                  <p>4.一人拿卡，未成年子女和配偶即拿卡</p>
                </div>
                <div class="image">
                  <img src="../assets/images/eb1a.png" alt="EB-1 A Advantage" />
                </div>
              </div>
              <div class="section">
                <div class="content-title">EBlA申请人背景要求：</div>
                <div class="content">SCI论文引用200以上</div>
              </div>
            </div>
            <div v-if="currentTab === 'niw'" class="feature-desc niw">
              <div class="section">
                <div class="title">EB-2 NIW</div>
                <div class="content">
                  <p>
                    NIW （National Interest
                    Waiver,国家利益豁免）是美国绿卡申请的一种方式，主要针对具有杰出能力的专业人士。申请人不需要雇主的支持，也不必提供劳动证明，而是通过证明其工作对美国具有显著国家利益来申请。这种方式适用千科学家、研究人员、高技能专业人士等，为他们提供了一条更直接、灵活的绿卡申请途径。
                  </p>
                </div>
              </div>
              <div class="section">
                <div class="content">
                  <div class="content-title">NIW优势：</div>
                  <p>1.不需要美国雇主支持，没有移民监</p>
                  <p>2.无语言、年龄限制</p>
                  <p>3.平均五年内拿到绿卡</p>
                  <p>4.花费少，无投资风险</p>
                  <p>5.一人申请，配偶及21周岁以下子女同时获得美国永久绿卡</p>
                  <p>6.排队期间，申请人可继续从事国内工作，不必着急赴美</p>
                </div>
                <div class="image">
                  <img
                    src="../assets/images/niw.png"
                    alt="EB-2 NIW Advantage"
                  />
                </div>
              </div>
              <div class="section">
                <div class="content-title">NIW申请人背景要求：</div>
                <div class="content">
                  有硕士以上学历＋3年工作经验，有英文论文发表最佳;
                  或本科学历＋5年以上工作经验
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="feature-alt">
          <div class="title">其他增值服务</div>
          <div class="additional-services">
            <div class="service-item">
              <div class="service-title">SOC撰写</div>
              <div class="service-content">
                <img src="../assets/images/else1.png" class="content-img" />
                <div class="text">
                  <p>1.与客户沟通SOC撰写思路</p>
                  <p>2.帮助客户总结归纳申请闪光点</p>
                  <p>3.给客户交付SOC材料助力客户绿卡申请</p>
                </div>
              </div>
            </div>
            <div class="service-item">
              <div class="service-title">Notable Citation撰写</div>
              <div class="service-content">
                <img src="../assets/images/else2.png" class="content-img" />
                <div class="text">
                  <p>1.遍历客户的所有文章和引用</p>
                  <p>2.总结突出客户工作的重要性（是怎么被其他文献引用的）</p>
                  <p>3.一周内返工，节省客户大量时间精力</p>
                </div>
              </div>
            </div>
            <div class="service-item">
              <div class="service-title">背景提升</div>
              <div class="service-content">
                <img src="../assets/images/else3.png" class="content-img" />
                <div class="text">
                  <p>1.高质量期刊审稿邀约</p>
                  <p>2.精挑行业精英＋内推牛人作为推荐人</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const currentTab = ref("eb1a");

    const showEb1a = () => {
      currentTab.value = "eb1a";
    };

    const showNiw = () => {
      currentTab.value = "niw";
    };

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
      currentTab,
      showEb1a,
      showNiw,
    };
  },
});
</script>

<style scoped lang="scss">
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

.feature-list {
  padding: 80px 127px;
  background-color: white;
  .feature {
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: white;

    &:not(:last-child)::after {
      content: "";
      width: 100%;
      height: 1px;
      border-bottom: 1px dashed #ccc;
      position: absolute;
      bottom: 0;
      left: 0;
    }

    .title-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      height: auto;
      margin-bottom: 24px;
    }

    .flag {
      width: auto;
      height: 60px;
    }

    .title {
      text-align: center;
      font-family: "Montserrat-Bold";
      font-weight: 700;
      font-size: 60px;
      color: #000;
      line-height: 48px;
    }

    .tab_list {
      width: 100%;
      height: 45px;
      background: #fff;
      overflow: hidden;
      position: relative;
      margin: 0 auto;
      margin-bottom: 20px;

      .div-tab-head {
        width: 100%;
        height: 45px;
        overflow: hidden;
        position: absolute;
        bottom: 0px;
        margin-bottom: 0;
        display: flex;
        justify-content: center;
        ul {
          list-style-type: none;
        }
        li {
          cursor: pointer;
          width: 200px;
          height: 45px;
          line-height: 45px;
          text-align: center;
          float: left;
          font-size: 16px;
          color: #414398;
          box-sizing: border-box;
          border: 1px solid #414398;

          &.head-on2 {
            background-color: #414398;
            color: #fff;
          }
        }
      }
    }

    .feature-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      position: relative;
      padding: 40px;
      overflow: hidden; /* 确保伪元素不超出容器 */
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url("../assets/images/servicebg.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.3; /* 调整这个值以设置透明度，范围: 0 (完全透明) - 1 (完全不透明) */
        z-index: 0; /* 确保伪元素在内容后面 */
      }
      .feature-desc {
        z-index: 1;
      }

      .section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 20px 20px 10%;
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;

        &:last-child {
          margin-bottom: 0;
        }

        .title {
          font-family: "Montserrat-Bold";
          font-weight: 700;
          font-size: 48px;
          color: #000000;
          line-height: 48px;
          text-align: left;
          max-width: 673px;
        }

        .content {
          font-family: "Montserrat-Regular";
          font-weight: 400;
          max-width: 551px;
          font-size: 20px;
          color: #333;
          line-height: 24px;
          text-align: left;

          p {
            margin-bottom: 16px;
          }
        }

        .content-title {
          font-family: Montserrat-Bold;
          font-weight: 600;
          font-size: 32px;
          color: #000000;
          line-height: 64px;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }

        .content-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;

          .content-img {
            width: 50px;
            height: 50px;
          }

          div {
            flex: 1;
          }
        }

        .green-text {
          color: #4caf50;
          font-weight: bold;
        }

        .image {
          width: 30%;
          height: auto;
          img {
            width: 100%;
            height: 100%;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;

          th,
          td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
          }

          th {
            background-color: #28a745;
            color: #fff;
            font-weight: bold;
          }

          tr:nth-child(even) {
            background-color: #f9f9f9;
          }

          tr:hover {
            background-color: #f1f1f1;
          }
        }
      }
    }
  }

  .feature-alt {
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: white;

    &:not(:last-child)::after {
      content: "";
      width: 100%;
      height: 1px;
      border-bottom: 1px dashed #ccc;
      position: absolute;
      bottom: 0;
      left: 0;
    }

    .title {
      text-align: center;
      font-family: "Montserrat-Bold";
      font-weight: 700;
      font-size: 60px;
      color: #000;
      line-height: 48px;
      margin-bottom: 24px;
    }

    .feature-desc-alt {
      flex: 1 1 50%;
      padding: 63.5px 0 94px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 32px;

      .content-title {
        font-family: Montserrat-Bold;
        font-weight: 600;
        font-size: 16px;
        color: #000000;
        line-height: 32px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }

      .content {
        font-family: "Montserrat-Regular";
        font-weight: 400;
        max-width: 551px;
        font-size: 17px;
        color: #333;
        line-height: 24px;
        text-align: left;

        p {
          margin-bottom: 16px;
        }
      }

      .content-item {
        display: flex;
        align-items: flex-start;
        gap: 20px;

        .content-img {
          width: 50px;
          height: 50px;
        }

        div {
          flex: 1;
        }
      }

      .green-text {
        color: #4caf50;
        font-weight: bold;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;

        th,
        td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }

        th {
          background-color: #28a745;
          color: #fff;
          font-weight: bold;
        }

        tr:nth-child(even) {
          background-color: #f9f9f9;
        }

        tr:hover {
          background-color: #f1f1f1;
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

    .phase-image {
      text-align: center;
      margin-bottom: 24px;
    }

    .phase-image img {
      max-width: 100%;
      height: auto;
    }

    .phase-item {
      display: flex;
      align-items: flex-start;
      gap: 20px;
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      margin-bottom: 16px;
    }

    .phase-number {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #0cb84e;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      font-weight: bold;
    }

    .phase-item .text {
      flex: 1;
    }

    .phase-item .text h3 {
      font-family: "Montserrat-Regular";
      margin: 0;
      font-size: 20px;
      font-weight: bold;
      color: #09ba2c;
    }

    .phase-item .text p {
      font-family: "Montserrat-Regular";
      margin: 5px 0 0;
      font-size: 18px;
      color: #333;
    }

    // 新增部分
    .additional-services {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 40px;

      .service-item {
        flex: 1;
        padding: 20px;
        border: 1px solid #000; // 黑色1px外框
        margin-right: 20px;
        &:last-child {
          margin-right: 0;
        }
        .service-title {
          font-weight: bold;
          margin-bottom: 10px;
        }
        .service-content {
          display: flex;
          align-items: flex-start;
          gap: 20px;

          .content-img {
            width: 50px;
            height: 50px;
          }

          .text {
            flex: 1;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .feature-list {
    padding: 40px 20px;

    .feature {
      background-color: #fff;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 40px 0;

      .title-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
      }
    }

    .feature-content {
      padding: 20px 0;
      text-align: center;
      padding-left: 0;
      padding-right: 0;
      display: flex;
      flex-direction: column;
      align-items: left;

      .title {
        /* order: 1; */
      }

      .feature-img-container {
        order: 2;
        width: 100%;
        margin: 20px 0;
        max-width: 652px;
        max-height: 560px;
      }

      .content-title,
      .content {
        font-family: "Montserrat-Regular";
        /* order: 3; */
        color: rgba(21, 38, 65, 0.4);
      }
    }

    .feature:nth-of-type(odd) .feature-content,
    .feature:nth-of-type(even) .feature-content {
      padding-left: 0;
      padding-right: 0;
    }

    .feature-img {
      width: 100%;
    }

    .content-title,
    .title,
    .content {
      text-align: center;
    }
  }

  .feature-alt {
    padding: 40px 20px;

    .title {
      text-align: center;
      font-family: "Montserrat-Bold";
      font-weight: 700;
      font-size: 60px;
      color: #000;
      line-height: 48px;
      margin-bottom: 24px;
    }

    .feature-desc-alt {
      padding: 20px 0;
      text-align: center;
      padding-left: 0;
      padding-right: 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      .content-title,
      .title,
      .content {
        text-align: center;
      }
    }
  }
}
</style>
