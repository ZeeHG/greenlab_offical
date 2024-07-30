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
            <div class="title">主营业务</div>
          </div>
          <div class="feature-content">
            <div class="feature-desc eb1a">
              <div class="title">EB-1 A</div>
              <div>
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
              <div>
                <div class="content-title">EBlA申请人背景要求：</div>
                <div class="content">SCI论文引用200以上</div>
              </div>
              <div>
                <div class="content-title">EBlA优势：</div>
                <div class="content">
                  <p>1.不需要美国雇主支持</p>
                  <p>2.平均2~3年内拿到绿卡</p>
                  <p>3.无投资风险</p>
                  <p>4.一人拿卡，未成年子女和配偶即拿卡</p>
                </div>
              </div>
            </div>
            <div class="feature-desc niw">
              <div class="title">EB-2 NIW</div>
              <div>
                <div class="content">
                  <p>
                    NIW （National Interest
                    Waiver,国家利益豁免）是美国绿卡申请的一种方式，主要针对具有杰出能力的专业人士。申请人不需要雇主的支持，也不必提供劳动证明，而是通过证明其工作对美国具有显著国家利益来申请。这种方式适用千科学家、研究人员、高技能专业人士等，为他们提供了一条更直接、灵活的绿卡申请途径。
                  </p>
                </div>
              </div>
              <div>
                <div class="content-title">NIW申请人背景要求：</div>
                <div class="content">
                  有硕士以上学历＋3年工作经验，有英文论文发表最佳;
                  或本科学历＋5年以上工作经验
                </div>
              </div>
              <div>
                <div class="content-title">NIW优势：</div>
                <div class="content">
                  <p>1.不需要美国雇主支持，没有移民监</p>
                  <p>2.无语言、年龄限制</p>
                  <p>3.平均五年内拿到绿卡</p>
                  <p>4.花费少，无投资风险</p>
                  <p>5.一人申请，配偶及21周岁以下子女同时获得美国永久绿卡</p>
                  <p>6.排队期间，申请人可继续从事国内工作，不必着急赴美</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="feature">
          <div class="feature-desc">
            <div class="title">其他增值服务</div>
            <div class="content">
              <p><strong class="green-text">SOC撰写</strong></p>
              <div class="content-item">
                <img src="../assets/images/else1.png" class="content-img" />
                <div>
                  <p>1.与客户沟通SOC撰写思路</p>
                  <p>2.帮助客户总结归纳申请闪光点</p>
                  <p>3.给客户交付SOC材料助力客户绿卡申请</p>
                </div>
              </div>
            </div>
            <div class="content">
              <p><strong class="green-text">Notable Citation撰写</strong></p>
              <div class="content-item">
                <img src="../assets/images/else2.png" class="content-img" />
                <div>
                  <p>1.遍历客户的所有文章和引用</p>
                  <p>2.总结突出客户工作的重要性（是怎么被其他文献引用的）</p>
                  <p>3.一周内返工，节省客户大量时间精力</p>
                </div>
              </div>
            </div>
            <div class="content">
              <p><strong class="green-text">背景提升</strong></p>
              <div class="content-item">
                <img src="../assets/images/else3.png" class="content-img" />
                <div>
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
      justify-content: center;
      align-items: center;
      height: 150px; // 根据需要调整高度
    }

    .title {
      text-align: center;
      font-family: "Montserrat-Bold";
      font-weight: 700;
      font-size: 48px;
      color: #000000;
      line-height: 48px;
      margin-bottom: 24px;
    }

    .feature-content {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .feature-desc {
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
  }

  .feature-img-container {
    flex: 1 1 50%;
    min-width: 0;
    position: relative;
    border-radius: 20px;
    overflow: hidden;

    &::after {
      content: "";
      width: 100%;
      height: 6px;
      background-color: #fff;
      position: absolute;
      bottom: 0;
      left: 0;
    }

    .feature-img {
      width: 100%;
    }
  }

  .eb1a {
    background-color: #e0f8e0;

    .title {
      color: #e0f8e0;
    }

    .content-title {
      padding: 8px 16px;
      border-radius: 8px;
    }

    .content {
      background: #e0f8e0;
    }
  }

  .niw {
    .title {
      color: #ff9800;
    }

    .content-title {
      padding: 8px 16px;
      border-radius: 8px;
    }

    .content {
      background: #fdf3d2;
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
        height: 150px; /* 根据需要调整高度 */
      }
    }

    .feature-desc {
      padding: 20px 0;
      text-align: center;
      padding-left: 0;
      padding-right: 0;
      display: flex;
      flex-direction: column;
      align-items: left;

      .title {
        order: 1;
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
        order: 3;
        color: rgba(21, 38, 65, 0.4);
      }
    }

    .feature:nth-of-type(odd) .feature-desc,
    .feature:nth-of-type(even) .feature-desc {
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
}
</style>
