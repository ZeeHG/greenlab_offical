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
    <div class="banner">
      <div class="container">
        <div class="banner-content">
          <div class="title">知学移民</div>
          <div class="title">启程</div>
          <div class="title">专业移民之路</div>
          <div class="contact-container">
            <div class="qr-code">
              <img src="../assets/images/qrcode.png" alt="QR Code" />
            </div>
            <div class="contact-info">
              <div class="title-content">联系方式：</div>
              <div class="title-content">微信：zhixuezixunxiaolv</div>
              <div class="title-content">邮箱：usgreenlab@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="solution">
      <div class="container">
        <div class="solution-title-content">
          <div class="title">知学创始故事</div>
          <div class="subtitle">
            知学移民(Green Lab) 专注于提供高端人才美国绿卡移民咨询服务
          </div>
          <div class="title-context">
            GreenLab学术专家文书团队汇集全球top30名校博士100+，手握多个绿卡申请成功案例；坐拥经验老道、专业审慎的律师，将客户需求摆在第一位提供高质量定制服务。Greenlab客群专一，集中火力只专注<span
              class="highlight"
              >服务美国高端人才移民</span
            >，积累USCIS审理趋势深度洞察，在以下类别<span class="highlight"
              >斩获大满贯：EB2-NIW、EB1B、EBl-A、和O-1。</span
            >
          </div>
          <div class="title-context">
            公司创始人是分别来自环境工程和生物医学专业的<span class="highlight"
              >3位美国顶尖院校毕业的全奖博士</span
            >，愿意与您分享真实的美国工作生活经历和绿卡申请经验。Greenlab劣势就是合伙人是科学家对商业化没经验，24年春天才在客户建议下成立公司，酒香也怕巷子深。
          </div>
          <div class="title-context">
            自公司成立，新客户大多来自老客户口口相传内推转介，现已为多名高校博士／博士后，科技大厂员工成功递交绿卡申请。美国梦，路漫漫，作为美国留学工作生活的亲历者，我们深知身份这一卡脖子问题的痛点。选择我们，助您最短时间锁定PD，为您和家人的美国生活挪去身份之忧。
          </div>
        </div>
        <div class="solution-content-box">
          <div class="solution-content solution-content-1">
            <div class="title">其他服务的劣势</div>
            <div class="context">
              <p>有问题只能邮件沟通， 1-3个工作日内回复？</p>
              <div class="divider"></div>
              <p>SoC只提供模版， 客户自己要花100＋小时？</p>
              <div class="divider"></div>
              <p>签约到递交平均耗时1年之久？</p>
            </div>
          </div>
          <div class="solution-content solution-content-2">
            <div class="title">我们的优势</div>
            <div class="context">
              <p>
                Greenlab提供<span class="highlight">24*7</span
                >微信群支持，及时答疑解惑
              </p>
              <div class="divider"></div>
              <p>
                Greenlab精挑您<span class="highlight">同方向名校学术专家</span
                >根据您的背景<span class="highlight">定制化</span>撰写
              </p>
              <div class="divider"></div>
              <p>
                Greenlab<span class="highlight">三对一</span
                >服务模式，从签约到递交<span class="highlight">2个月</span
                >拿下，提前锁定PD
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="summary">
      <div class="container">
        <div class="summary-title-content">
          <div class="title">创始人故事</div>
        </div>
        <div class="summary-content-box">
          <div class="summary-content">
            <img src="../assets/images/founder1.png" alt="" class="icon" />
            <div class="text-content">
              <div class="subtitle">Dr. Ma</div>
              <div class="title-context">Co-Founder & CTO</div>
              <div class="content">
                UCLA博士，国际顶级期刊发表论文15篇，和博士生导师合作成立公司并成功融资2000万美金。博士期间发表五篇顶尖期刊论文，是三家期刊的资深审稿人，斩获两项国际大奖，并拥有—项美国专利正在商业化中。致力于助力国际留学生取得绿卡，能够自由实现美国梦。
              </div>
            </div>
          </div>
          <div class="summary-content">
            <img src="../assets/images/founder2.png" alt="" class="icon" />
            <div class="text-content">
              <div class="subtitle">Dr. Yang</div>
              <div class="title-context">Co-Founder & CEO</div>
              <div class="content">
                本科毕业于华北电力大学，校级优秀毕业生，后获全额奖学金直博UCLA,攻读环境工程PhD，期间多次评选美国奖学金。博士期间致力于环境领域研究，致力于解决全球碳中和问题，项目获得了—项美国专利和百万美元投资人资助。踉合伙人创立两家公司，深知留学移民不易，将知学团队宝贵留学移民经验商业化，立志服务后来人少走前人弯路，以最高效专业的方式获得绿卡。
              </div>
            </div>
          </div>
          <div class="summary-content">
            <img src="../assets/images/founder3.png" alt="" class="icon" />
            <div class="text-content">
              <div class="subtitle">Dr. Zhang</div>
              <div class="title-context">Co-Founder & CTO</div>
              <div class="content">
                UCLA全奖博士，在国际顶尖期刊发表10＋篇论文，博士期间多次获评奖学金。同时是—位连续创业者，成功创立估值千万美金科技公司，融得百万美元投资。在美生活近10年，深知留学移民Fl,
                HlB,
                PERM、140、485等—路打怪升级的不容易，立志做—家市场上最专业最高效的留学机构，帮助同胞们最低成本、最高效率、最高专业度，斩获绿卡，实现美国梦！
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

<style scoped lang="less">
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

.container {
  width: 1320px;
  max-width: 1320px;
  height: 560px;
  margin: auto auto;
  position: relative;
  // display: flex;
}
.banner {
  position: relative;
  width: 100%;
  height: 960px;
  background-color: white;
  background-image: url("../assets/images/banner.png");
  background-size: cover;
  background-position: center;

  .banner-content {
    position: absolute;
    top: 386px;
    // left: 200px;
    width: 690px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .title {
      width: 690px;
      height: 120px;
      font-family: "Montserrat";
      font-size: 80px;
      color: #1c53e8;
      line-height: 69px;
      letter-spacing: 1px;
      font-weight: 700;
      text-align: left;
    }

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
  }
}

.solution {
  background-color: white;
  width: 100%;
  padding-bottom: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .solution-title-content {
    margin-top: 120px;
    margin-bottom: 56px;
    text-align: left;

    .title {
      font-family: "Montserrat";
      font-weight: 700;
      font-size: 58px;
      color: #000000;
      line-height: 48px;
      margin-bottom: 24px;
    }

    .subtitle {
      font-family: "Montserrat";
      font-weight: 400;
      font-size: 28px;
      color: green;
      line-height: 48px;
      padding-bottom: 24px;
    }

    .title-context {
      font-family: "Montserrat";
      font-weight: 500;
      font-size: 17px;
      color: #333;
      margin-bottom: 16px;

      .highlight {
        color: rgb(255, 136, 0);
      }
    }
  }

  .solution-content-box {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    padding-bottom: 120px;

    .solution-content {
      display: flex;
      height: auto;
      background: white;
      border-radius: 25px;
      padding: 20px;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      border: 1px solid #d8dff0;

      .title {
        background: green;
        color: white;
        padding: 5px 10px;
        border-radius: 25px;
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: bold;
      }

      .context {
        font-family: "Montserrat";
        font-size: 17px;
        color: black;
        line-height: 24px;

        .divider {
          border-bottom: 1px dashed green;
          margin: 10px 0;
          width: 100%;
        }

        .highlight {
          color: rgb(255, 136, 0);
        }
      }
    }
  }
}
.summary {
  background-color: #ffffff; // 更改背景颜色为白色
  width: 100%;
  position: relative;
  padding-top: 100px; // 添加顶部间距以居中标题

  .summary-title-content {
    text-align: left; // 标题居中
    margin-bottom: 50px; // 添加底部间距

    .title {
      font-family: "Montserrat";
      font-weight: 700;
      font-size: 58px;
      color: #000000;
      line-height: 48px;
      text-align: center; // 标题居中
      padding-bottom: 24px;
    }
  }

  .summary-content-box {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(300px, 1fr)
    ); // 使用自动调整的列
    gap: 30px; // 调整网格间距
    justify-items: center; // 水平居中
    padding-bottom: 80px;
    .summary-content {
      height: auto; // 自动高度
      width: 100%; // 宽度100%
      max-width: 380px; // 最大宽度
      background: #e0f8e0; // 更改方框内部颜色为浅绿色
      border-radius: 25px;
      padding: 30px; // 添加内边距
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      .icon {
        width: 100px;
        height: 100px;
        border-radius: 50%; // 使图片变成圆形
        margin-bottom: 20px; // 添加底部间距
      }

      .text-content {
        .subtitle {
          font-family: "Montserrat";
          font-weight: 600;
          font-size: 20px;
          color: #09ba2c; // 更改小标题颜色
          margin-bottom: 10px; // 添加底部间距
        }

        .title-context {
          font-family: "Montserrat";
          font-weight: 400;
          font-size: 17px;
          color: #333333;
          margin-bottom: 20px; // 添加底部间距
        }

        .content {
          font-family: "Montserrat";
          font-weight: 400;
          font-size: 15px;
          color: rgba(21, 38, 65, 0.8);
          line-height: 22px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .container {
    width: 654px;
    max-width: 100%;
    height: 1560px;
    position: relative;
  }

  .banner {
    background-size: cover;
    position: relative;

    .banner-content {
      left: 0;
      top: 0px;
      width: 100%;
      padding: 10px;
      position: absolute;

      .title {
        width: 100%;
        height: auto;
        font-family: "Montserrat-Bold";
        font-size: 40px;
        color: #1c53e8;
        line-height: 36px;
        letter-spacing: 1px;
        font-weight: 900;
        text-align: left;
        margin-bottom: 15px;
      }

      .title-content {
        width: 100%;
        font-family: "Montserrat-Regular";
        font-size: 20px;
        color: #000000;
        line-height: 18px;
        text-align: left;
        font-weight: 700;
      }
    }
  }

  .solution {
    padding: 20px;
    height: 1100px;
  }

  .summary {
    padding: 20px;

    .summary-content-box {
      grid-template-columns: 1fr; // 单列布局
    }
  }
}
</style>
