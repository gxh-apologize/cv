﻿import hzty from "./assets/logo_hzty.png";
import txdata from "./assets/logo_txdata.png";
import jiuli from "./assets/jiuli.jpg";
import anires from "./assets/anires.png";
import ibooks from "./assets/ibooks.png";

import dHome from "./assets/d_home.svg";
import dSkills from "./assets/d_skills.svg";
import dExp from "./assets/d_exp.svg";
import dWorks from "./assets/d_works.svg";
import dContact from "./assets/d_contact.svg";
import sGithub from "./assets/s_github.svg";
import sWeiBo from "./assets/s_wb.svg";
// import sSf from './assets/s_sf.svg';
import sBlog from "./assets/s_blog.svg";
import sZh from "./assets/s_zh.svg";
// import sJj from './assets/s_Jj.svg';
import SGitee from "./assets/s_gitee.svg";
import SJianshu from "./assets/s_jianshu.svg";
import SCSDN from "./assets/s_csdn.svg";

export default {
  cn: {
    header: {
      langList: ["中"],
      titleList: [
        {
          svg: dHome,
          title: "首页"
        },
        {
          svg: dSkills,
          title: "能力"
        },
        {
          svg: dExp,
          title: "经历"
        },
        {
          svg: dWorks,
          title: "作品集"
        },
        {
          svg: dContact,
          title: "联系我"
        }
      ]
    },
    footer: ["Released under the Apache License", "All Rights Reserved"],
    overview: {
      infoList: ["27岁", "本科", "北京", "在职"],
      quote:
        "不浮躁，不偏激，爱编程，爱后端，爱新技术，爱运动，执行力和学习能力都棒棒哒！",
      desList: [
        "我叫巩夏辉，Android工程师",
        "北京大有智尚科技发展有限公司",
        "gxh13521870263@163.com"
      ]
    },
    skill: {
      outCircleList: [
        {
          bg: {
            backgroundColor: "rgba(121,100,102,0.8)"
          },
          name: "Android"
        },
        {
          bg: {
            backgroundColor: "rgba(49,65,82,0.8)"
          },
          name: "JAVA"
        },
        {
          bg: {
            backgroundColor: "rgba(193,131,106,0.8)"
          },
          name: "kotlin"
        },
        {
          bg: {
            backgroundColor: "rgba(117,148,179,0.8)"
          },
          name: "Flutter"
        },
        {
          bg: {
            backgroundColor: "rgba(117,148,179,0.8)"
          },
          name: "架构"
        },
        {
          bg: {
            backgroundColor: "rgba(117,148,179,0.8)"
          },
          name: "优化"
        },
        {
          bg: {
            backgroundColor: "rgba(117,148,179,0.8)"
          },
          name: "NDK"
        },
        {
          bg: {
            backgroundColor: "rgba(117,148,179,0.8)"
          },
          name: "适配"
        }
      ],
      innerCircleList: [
        {
          bg: {
            backgroundColor: "rgba(179,164,140,0.8)"
          },
          name: "电商"
        },
        {
          bg: {
            backgroundColor: "rgba(171,209,220,0.8)"
          },
          name: "零售"
        },
        {
          bg: {
            backgroundColor: "rgba(238,215,163,0.8)"
          },
          name: "智能"
        },
        {
          bg: {
            backgroundColor: "rgba(207,184,178,0.8)"
          },
          name: "金融"
        }
      ],
      desList: [
        "我叫巩夏辉，27岁，坐标北京，是一名Android工程师，四年Android开发经验。",
        "熟悉软件开发的整个流程，有较强的逻辑思维能力",
        "主要涉及技术：Android开发、Flutter开发",
        "有良好的文档编写和代码书写规范，能独立解决问题"
      ],
      links: [
        {
          title: "● Github",
          des: "https://github.com/gxh-apologize",
          url: "https://github.com/gxh-apologize"
        },
        {
          title: "● 技术笔记",
          des: "https://blog.csdn.net/GXH_APOLOGIZE",
          url: "https://blog.csdn.net/GXH_APOLOGIZE"
        }
      ]
    },
    exp: {
      expList: [
        {
          title: "北京大有智尚科技发展有限公司",
          time: "2017.03-至今",
          post: "技术部/Android工程师",
          img: {
            backgroundImage: `url(${hzty})`
          },
          contentList: [
            "负责Android产品的框架设计与开发",
            "负责编写与产品或项目相关的技术文档",
            "产品功能迭代与性能调优"
          ]
        },
        {
          title: "北京人人购电子商务有限公司",
          time: "2016.08-2016.12",
          post: "技术部/Android工程师",
          img: {
            backgroundImage: `url(${txdata})`
          },
          contentList: [
            "负责惠客盟App的开发",
            "负责编写相关的技术文档",
            "参加讨论相关项目需求"
          ]
        }
      ]
    },
    works: {
      worksList: [
        {
          title: "大有收银",
          des: "门店收银系统",
          url: "",
          img: {
            src: `${jiuli}`,
            alt: "基于SpringBoot + Shiro + MyBatisPlus的权限管理框架"
          }
        },
        {
          title: "魔镜项目",
          des: "一款用于面膜店的皮肤检测、自助购物的系统",
          url: "",
          img: {
            src: `${jiuli}`,
            alt: "SpringBoot集成MyBatisPlus集成Shiro可以快速开发"
          }
        },
        {
          title: "人脸考勤项目",
          des: "通过本地人脸识别，比对成功后可控制闸机开门通过",
          url: "",
          img: {
            src: `${jiuli}`,
            alt: "自制spring boot starter for fastjson"
          }
        },
        {
          title: "玖里项目",
          des: "可随时随地通过摄像头查看、管理装修现场",
          url: "",
          img: {
            src: `${jiuli}`,
            alt:
              "基于web版kettle开发的一套分布式综合调度,管理,ETL开发的用户专业版B/S架构工具"
          }
        },
        {
          title: "惠客盟",
          des: "惠客盟收银台是一款移动支付扫码收款工具",
          url: "",
          img: {
            src: `${jiuli}`,
            alt: "一个会动的简历"
          }
        }
      ],
      viewMore: "前往GitHub上查看更多"
    },
    contact: {
      title: "联系我",
      desList1: ["灵感", "代码", "梦想", "未来"],
      desList2: [
        "Android开发和开源爱好者",
        "正在努力成为更优秀的开发者",
        "如果您认为我的能力能适应您的工作岗位",
        "请联系我 gxh13521870263@163.com"
      ],
      download: "下载简历",
      fileList: [
        {
          title: "PDF版",
          url: ""
        }
      ],
      typeList: [
        {
          title: "GitHub",
          icon: sGithub,
          url: "https://github.com/JoeyBling"
        },
        {
          title: "码云",
          icon: SGitee,
          url: "https://gitee.com/zhousiwei"
        },
        {
          title: "个人博客",
          icon: sBlog,
          url: "https://zhousiwei.gitee.io"
        },
        {
          title: "简书",
          icon: SJianshu,
          url: "https://www.jianshu.com/u/02cbf31a043a"
        },
        {
          title: "CSDN",
          icon: SCSDN,
          url: "https://blog.csdn.net/qq_30930805"
        },
        {
          title: "知乎",
          icon: sZh,
          url: "https://www.zhihu.com/people/joeybling"
        },
        {
          title: "微博",
          icon: sWeiBo,
          url: "http://weibo.com/jayinfo"
        }
      ],
      links: [
        {
          title: "● 开发笔记",
          des: "https://zhousiwei.gitee.io/ibooks",
          url: "https://zhousiwei.gitee.io/ibooks"
        }
      ]
    }
  },
  en: {
    header: {
      langList: ["CN", "EN"],
      titleList: [
        {
          svg: dHome,
          title: "home"
        },
        {
          svg: dSkills,
          title: "skills"
        },
        {
          svg: dExp,
          title: "exp"
        },
        {
          svg: dWorks,
          title: "works"
        },
        {
          svg: dContact,
          title: "contact"
        }
      ]
    },
    footer: ["Released under the Apache License", "All Rights Reserved"],
    overview: {
      infoList: ["23years", "B.S.", "Hangzhou", "On Job"],
      quote:
        "Not impetuous, not extreme, love programming, love back end, love new technology, love sports, execution and learning ability are awesome!",
      desList: [
        "My name is Zhou siwei, a Java software engineer",
        "Hangzhou TEYANG network technology co., LTD",
        "2434387555@qq.com"
      ]
    },
    skill: {
      outCircleList: [
        {
          bg: {
            backgroundColor: "rgba(121,100,102,0.8)"
          },
          name: "Java"
        },
        {
          bg: {
            backgroundColor: "rgba(49,65,82,0.8)"
          },
          name: "SpringBoot"
        },
        {
          bg: {
            backgroundColor: "rgba(193,131,106,0.8)"
          },
          name: "SpringCloud"
        },
        {
          bg: {
            backgroundColor: "rgba(117,148,179,0.8)"
          },
          name: "RabbitMQ"
        },
        {
          bg: {
            backgroundColor: "rgba(147,147,189,0.8)"
          },
          name: "MyBatis"
        },
        {
          bg: {
            backgroundColor: "rgba(172,223,159,0.8)"
          },
          name: "Linux"
        },
        {
          bg: {
            backgroundColor: "rgba(66,66,66,0.8)"
          },
          name: "miniP"
        },
        {
          bg: {
            backgroundColor: "rgba(71,83,94,0.8)"
          },
          name: "Vue"
        }
      ],
      innerCircleList: [
        {
          bg: {
            backgroundColor: "rgba(179,164,140,0.8)"
          },
          name: "MySQL"
        },
        {
          bg: {
            backgroundColor: "rgba(171,209,220,0.8)"
          },
          name: "Redis"
        },
        {
          bg: {
            backgroundColor: "rgba(238,215,163,0.8)"
          },
          name: "GitHub"
        },
        {
          bg: {
            backgroundColor: "rgba(207,184,178,0.8)"
          },
          name: "Nacos"
        }
      ],
      desList: [
        "My name is Zhou siwei, 23 years old, located in hangzhou, and I am a Java software engineer with three years of Java EE experience.",
        "Familiar with the whole process of software development, with strong logical thinking ability",
        "Mainly involved in technology: Java back-end development, aggregation payment, public account development, open source enthusiasts, Linux",
        "Good documentation and code writing skills, able to solve problems independently, persistent and detail-oriented"
      ],
      links: [
        {
          title: "● Github",
          des: "https://github.com/JoeyBling",
          url: "https://github.com/JoeyBling"
        },
        {
          title: "● Technical Notes",
          des: "https://zhousiwei.gitee.io/ibooks/",
          url: "https://zhousiwei.gitee.io/ibooks/"
        }
      ]
    },
    exp: {
      expList: [
        {
          title: "Hangzhou TEYANG network technology co., LTD",
          time: "2019.04-Now",
          post: "Technical department /Java software engineer",
          img: {
            backgroundImage: `url(${hzty})`
          },
          contentList: [
            "Using high concurrency, Multithreading provides solutions for (Internet + healthcare)",
            "Responsible for technical documentation related to product or project",
            "Use Linux command to complete daily system deployment and maintenance work"
          ]
        },
        {
          title: "Jiangxi 3xData information technology co. LTD",
          time: "2017.12-2019.03",
          post: "Technical department /Java software engineer",
          img: {
            backgroundImage: `url(${txdata})`
          },
          contentList: [
            "Using SSM, SpringCloud, Nacos, VueJS and other cutting-edge development technologies",
            "Excellent employee certificate awarded and sealed by the company",
            "Interface with front-end developers to solve bugs raised by testers"
          ]
        },
        {
          title: "Jiangxi yiqiang weiying information technology co., LTD",
          time: "2016.06-2017.11",
          post: "Technical department /Java software engineer",
          img: {},
          contentList: [
            "Participate in the discussion of related project requirements, outline design, and complete the core code writing",
            "Development with SpringBoot, SpringMVC and Mybatis",
            "Continuous code reconstruction and optimization, analysis of system deficiencies, improve system performance"
          ]
        }
      ]
    },
    works: {
      worksList: [
        {
          title: "bootplus",
          des:
            "A privilege management framework based on SpringBoot + Shiro + MyBatisPlus",
          url: "https://gitee.com/zhousiwei/bootplus",
          img: {
            src: `${jiuli}`,
            alt:
              "A privilege management framework based on SpringBoot + Shiro + MyBatisPlus"
          }
        },
        {
          title: "SpringBoot integration MyBatisPlus",
          des:
            "SpringBoot integration with MyBatisPlus integration with Shiro allows rapid development",
          url: "https://gitee.com/zhousiwei/springboot_mybatisplus",
          img: {
            src: `${jiuli}`,
            alt:
              "SpringBoot integration with MyBatisPlus integration with Shiro allows rapid development"
          }
        },
        {
          title: "fastjson-spring-boot-starter",
          des: "Spring boot starter for fastjson",
          url: "https://gitee.com/zhousiwei/fastjson-spring-boot-starter",
          img: {
            src: `${jiuli}`,
            alt: "Spring boot starter for fastjson"
          }
        },
        {
          title: "jiuli",
          des:
            "Web kettle developed a set of distributed integrated scheduling, management,ETL development user professional B/S architecture tools",
          url: "https://github.com/JoeyBling/webkettle",
          img: {
            src: `${jiuli}`,
            alt:
              "Web kettle developed a set of distributed integrated scheduling, management,ETL development user professional B/S architecture tools"
          }
        },
        {
          title: "anires",
          des: "A dynamic resume",
          url: "https://zhousiwei.gitee.io/anires/index.html",
          img: {
            src: `${anires}`,
            alt: "A dynamic resume"
          }
        },
        {
          title: "ibooks",
          des: "Record technical development notes with VuePress",
          url: "https://zhousiwei.gitee.io/ibooks",
          img: {
            src: `${ibooks}`,
            alt: "Record technical development notes with VuePress"
          }
        },
        {
          title: "Personal blog site",
          des: "My blog site",
          url: "https://zhousiwei.gitee.io/",
          img: {
            src: `${jiuli}`,
            alt: "My blog site"
          }
        },
        {
          title: "myBook",
          des: "Use GitBook to record development notes",
          url: "https://joeybling.github.io/myBook",
          img: {
            src: `${jiuli}`,
            alt: "Use GitBook to record development notes"
          }
        }
      ],
      viewMore: "Check out more on My GitHub"
    },
    contact: {
      title: "Contact Me",
      desList1: ["INSPIRATION", "CODE", "DREAM", "FUTURE"],
      desList2: [
        "Like to try, look forward to something new",
        "Programming is interested, interest is the future",
        "Line road friends, is a shortcut",
        "With me, see the bigger world together"
      ],
      download: "Download resume",
      fileList: [
        {
          title: "HTML",
          url: ""
        },
        {
          title: "PDF",
          url: ""
        }
      ],
      typeList: [
        {
          title: "GitHub",
          icon: sGithub,
          url: "https://github.com/gxh-apologize"
        },
        {
          title: "CSDN",
          icon: SCSDN,
          url: "https://blog.csdn.net/GXH_APOLOGIZE"
        }
      ],
      links: [
        {
          title: "● Development Notes",
          des: "https://zhousiwei.gitee.io/ibooks",
          url: "https://zhousiwei.gitee.io/ibooks"
        }
      ]
    }
  }
};
