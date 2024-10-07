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
    <div class="feature-list">
      <div class="container">
        <div class="feature">
          <div class="title-container">
            <div class="title">知学优势</div>
          </div>
          <div class="feature-desc">
            <div class="feature-item">
              <img src="../assets/images/1.png" />
              <div class="text">
                <h3>明星团队</h3>
                <p>
                  精挑细选打造明星学术专家文书团队：客户同行业同领域，海外top30名校博士/博士后/教授，行业经验5+年，拥有多个绿卡申请成功案例，给客户提供一对一服务，根据您的学术背景定制化撰写有力文书
                </p>
              </div>
            </div>
            <div class="feature-item">
              <img src="../assets/images/2.png" />
              <div class="text">
                <h3>只做高端人才移民 大满贯</h3>
                <p>
                  GreenLab客群专一，集中火力只注服务美国高端人才移民，积累USCIS审批超高通过率，专以下类别新获杰出满贯：EB2-NIW,
                  EB1-A, 和O-1
                </p>
              </div>
            </div>
            <div class="feature-item">
              <img src="../assets/images/3.png" />
              <div class="text">
                <h3>3V1和24*7</h3>
                <p>
                  移民方案专家+PL文书导师+班主任全程跟进绿卡申请，3V1服务模式，7天24小时及时回应，让绿卡申请流程倍感安全
                </p>
              </div>
            </div>
            <div class="feature-item">
              <img src="../assets/images/4.png" />
              <div class="text">
                <h3>速度为王</h3>
                <p>
                  市场平均速度是从签约到递交需要耗时1年之久，而GreenLab三对一服务模式，帮助客户写SoC节约时间，从签约到递交2个月内下，帮助客户提前锁定PD
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="feature">
          <div class="title-container">
            <div class="title">知学服务流程</div>
          </div>
          <div class="feature-desc">
            <div class="phase-image">
              <img src="../assets/images/phases.png" />
            </div>
            <div class="phase-item">
              <div class="phase-number">1</div>
              <div class="text">
                <h3>头脑风暴，挖掘背景闪光点</h3>
                <p>
                  深入挖掘客户背景，和客户讨论初步确定移民方案（知学优势：文书老师都是客户领域的资深专家，高效挖掘润色客户材料，小群沟通，所有问题都能即时答到回复）
                </p>
              </div>
            </div>
            <div class="phase-item">
              <div class="phase-number">2</div>
              <div class="text">
                <h3>获取推荐信</h3>
                <p>
                  客户提供推荐信名单，并尝试取得推荐信（知学在多个领域有例如教授、科技公司管理层、美国政府机构工作人员的人脉，可以帮客户拿到高含量的推荐信）
                </p>
              </div>
            </div>
            <div class="phase-item">
              <div class="phase-number">3</div>
              <div class="text">
                <h3>贡献总结撰写</h3>
                <p>
                  知学将帮助客户撰写贡献总结（背景信息提炼报告）（知学优势：其他多家机构需要客户自己提写，平均耗时100小时以上，知学只需客户花两小时向他提供信息，我们将完成书写，节省客户大量宝贵时间）
                </p>
              </div>
            </div>
            <div class="phase-item">
              <div class="phase-number">4</div>
              <div class="text">
                <h3>撰写Petition Letter 和推荐信</h3>
                <p>
                  根据贡献总结撰写Petition
                  letter和推荐信（知学优势：知学文书导师多次成功案例，经验丰富，都在美国生活工作多年，写作功底深厚）
                </p>
              </div>
            </div>
            <div class="phase-item">
              <div class="phase-number">5</div>
              <div class="text">
                <h3>客户审校</h3>
                <p>
                  整理申请材料包并交给客户审核（知学优势：知学承诺对客户不满意的文书材料修改至客户满意为止）
                </p>
              </div>
            </div>
            <div class="phase-item">
              <div class="phase-number">6</div>
              <div class="text">
                <h3>提交申请</h3>
                <p>
                  整理材料，并帮客户提交申请（知学优势：后续移民局各种回执知学义务协助客户回复，确保客户成功拿到绿卡）
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="feature">
          <div class="title-container">
            <div class="title">知学服务团队</div>
          </div>
          <div class="feature-desc-alt">
            <div class="img-container">
              <img src="../assets/images/team.png" alt="Team Image" />
            </div>
            <div class="text-container">
              <div class="content-section">
                <div class="title">移民方案专家</div>
                <div class="content">
                  <p>
                    <span style="color: rgb(255, 85, 0)"
                      >精准匹配精通学术移民的专家</span
                    >，与客户一对一深度沟通，挖掘客户背景全貌和定义优先级最高的真需求，
                    <span style="color: rgb(255, 85, 0)"
                      >定制最适合您的移民方案：</span
                    >
                  </p>
                  <ul style="padding-left: 10px">
                    <li>行业经验5+年</li>
                    <li>手握20+绿卡申请成功案例</li>
                    <li>TOP30名校资深博士</li>
                    <li>在美生活平均10+年</li>
                    <li>先申请NIW占PD？</li>
                    <li>申请H1B配偶拿H4和EAD？</li>
                    <li>F1如何在美创业？</li>
                  </ul>
                  <p>一次服务，终身是您身边的移民百科全书！</p>
                </div>
              </div>
              <div class="content-section">
                <div class="title green-bg">PL文书老师</div>
                <div class="content">
                  <p>
                    精挑客户同方向业海内外top30名校博士/博士后/教授一对一服务，在绿卡申请中挖掘客户背景亮点，
                    <span style="color: rgb(255, 85, 0)"
                      >个性化定制客户文书</span
                    >，包括：
                  </p>
                  <ul style="padding-left: 10px">
                    <li>请愿书PL撰写和润色</li>
                    <li>推荐信撰写和润色</li>
                    <li>SOC撰写和润色等</li>
                  </ul>
                  <p>
                    <span style="color: rgb(255, 85, 0)">更有增值服务：</span>
                  </p>
                  <ul style="padding-left: 10px">
                    <li>推荐人串联</li>
                    <li>背景提升方案设计包含审稿内推等</li>
                  </ul>
                  <p>
                    理解并深挖客户科研成果创新点和价值点。好的文书是绿卡申请的制胜关键！
                  </p>
                </div>
              </div>
              <div class="content-section">
                <div class="title green-bg">班主任</div>
                <div class="content">
                  <p>
                    特设第三方班主任，站在客户角度<span
                      style="color: rgb(255, 85, 0)"
                      >跟进项目和推动进度</span
                    >
                  </p>
                  <ul style="padding-left: 10px">
                    <li>您有疑问，7天24小时及时回复</li>
                    <li>您有不满，班主任收集反馈提供解决方案</li>
                    <li>
                      保姆式全程跟踪绿卡申请进度，并监督关键交付物完成品质
                    </li>
                  </ul>
                  <p>让您的绿卡申请过程无忧无惧，安全省心。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="feature">
          <!-- <div class="title-container">
            <div class="title">知学文书老师库</div>
          </div> -->
          <div class="feature-desc">
            <div class="teacher-cards">
              <div
                class="teacher-card"
                v-for="(teacher, index) in teachers"
                :key="index"
              >
                <div class="teacher-card-content">
                  <div class="teacher-name">{{ teacher.name }}</div>
                  <div class="teacher-degree">{{ teacher.degree }}</div>
                  <div class="teacher-major">{{ teacher.major }}</div>
                  <div class="teacher-expertise">{{ teacher.expertise }}</div>
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
    const goToProducts = () => {
      router.push("/products");
    };
    const teachers = ref([
      {
        name: "胡老师",
        degree: "滨州州立大学博士",
        major: "环境生物",
        expertise: "NIW, EB1A, EB1B",
      },
      {
        name: "刘老师",
        degree: "加州大学洛杉矶分校博士",
        major: "环境化学",
        expertise: "NIW, EB1A, O1",
      },
      {
        name: "马老师",
        degree: "加州理工大学博士",
        major: "计算机科学",
        expertise: "NIW, EB1A",
      },
      {
        name: "齐老师",
        degree: "麻省理工大学博士",
        major: "应用物理",
        expertise: "NIW, EB1A",
      },
      {
        name: "王老师",
        degree: "威斯康星麦迪逊博士",
        major: "电子信息",
        expertise: "NIW, EB1A, O1",
      },
      {
        name: "撒老师",
        degree: "加州大学伯克利分校博士",
        major: "数学",
        expertise: "NIW, EB1A",
      },
      {
        name: "杨老师",
        degree: "南加州大学博士",
        major: "数据科学",
        expertise: "NIW, EB1A",
      },
      {
        name: "张老师",
        degree: "伊利诺伊大学香槟分校博士",
        major: "化学工程",
        expertise: "NIW, EB1A",
      },
      {
        name: "王老师",
        degree: "斯坦福大学",
        major: "材料科学",
        expertise: "NIW, EB1A",
      },
      {
        name: "赵老师",
        degree: "普渡大学",
        major: "生物医学",
        expertise: "NIW, EB1A",
      },
    ]);

    return {
      goToHomepage,
      goToServices,
      goToAdvantagesProcess,
      goTocasetudies,
      goToProducts,
      teachers,
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
    font-size: 18px;
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
      justify-content: center;
      align-items: center;
      height: 150px;
    }

    .title {
      text-align: center;
      font-family: "Montserrat-Bold";
      font-weight: 700;
      font-size: 60px;
      color: #000000;
      line-height: 60px;
      margin-bottom: 24px;
    }

    .feature-desc-alt {
      display: flex;
      width: 100%;
      .img-container {
        overflow: hidden;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          height: 60%;
          object-fit: contain;
          object-position: center;
          border-top-left-radius: 16px;
          border-bottom-left-radius: 16px;
        }
      }
      .text-container {
        flex: 1;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding: 24px;
        border-top-right-radius: 16px;
        border-bottom-right-radius: 16px;
        color: #000;
        .content-section {
          padding: 16px;
          font-size: 18px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          margin-bottom: 24px;
          &:last-child {
            border: 0;
          }
        }
      }
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
        font-size: 60px;
        color: #000000;
        line-height: 60px;
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

      .teacher-cards {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
      }

      .teacher-card {
        flex: 0 0 calc(25% - 20px);
        background: #f9f9f9;
        border: 1px solid #ccc;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        padding: 20px;
        text-align: center;
      }

      .teacher-card-content {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .teacher-name {
        font-weight: bold;
        font-size: 18px;
        color: #0cb84e;
      }

      .teacher-degree,
      .teacher-major,
      .teacher-expertise {
        font-size: 16px;
        color: #666;
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
    padding: 40px 80px;

    .feature {
      background-color: #fff;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 40px 0;
      &:first-child {
        .title-container {
          margin-top: 100px;
        }
      }
      &:nth-child(2) {
        .title-container {
          margin-top: 40px;
        }
      }
      .title-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: auto;
      }
      .feature-desc {
        padding: 0 0 20px 0;
        text-align: center;
        padding-left: 0;
        padding-right: 0;
        display: flex;
        flex-direction: column;
        align-items: left;

        .title {
          order: 1;
          margin-bottom: 0;
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
