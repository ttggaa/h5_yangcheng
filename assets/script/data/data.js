﻿// {
//     "fish" :{
//         "name" :"锦鲤",
//         "lv" : 1,
//         "exp" : 0,
//         "max_exp" : 100
//     },
//     "mission": {
//         "title" : "任务",
//         "info":["接食物","人们在文昌门前送上了食物,快去接受漳州人民的食物吧!"]

//     }
// }
module.exports = {
    "fish_init_data": { //鱼的初始化信息
        "name": "锦鲤",
        "lv": 1,
        "exp": 0,
        "max_exp": Math.floor(200 * Math.pow(1, 1.5))
    },
    "prop_state_num_max": 1,
    "user_init_data": {                     //用户第一次玩的信息
        "fish": {},                         //鱼信息
        "time": null,                       //离线时间
        "prop_state": {},                   //偷取过的好友id
        "user_info": {                      //用户信息
            "user_id": null,                //用户id
            "nickname": null,               //名字
            "head_id": 1,                   //头像id
            "manifesto": '今天天气真好~'    //玩家宣言
        },
        "mission": {                        //任务
            "1": {
                "id": 1,
                "num": 0,
                "is_receive": 1
            },
            "2": {
                "id": 2,
                "num": 0,
                "is_receive": 1
            },
            "3": {
                "id": 3,
                "num": 0,
                "is_receive": 1
            },
            "4": {
                "id": 4,
                "num": 0,
                "is_receive": 1
            },
            "5": {
                "id": 5,
                "num": 0,
                "is_receive": 1
            },
            "6": {
                "id": 6,
                "num": 0,
                "is_receive": 1
            },
            "7": {
                "id": 7,
                "num": 0,
                "is_receive": 1
            }
        },
        "prop": {                                 //道具
            "1": {
                "id": 1,
                "num": 1
            },
            "2": {
                "id": 2,
                "num": 0
            },
            "3": {
                "id": 3,
                "num": 0
            },
            "4": {
                "id": 4,
                "num": 0
            },
            "5": {
                "id": 5,
                "num": 0
            },
            "6": {
                "id": 6,
                "num": 0
            },
            "7": {
                "id": 7,
                "num": 0
            },
            "8": {
                "id": 8,
                "num": 0
            }
        },
        "wen_chang_men_max_source": 0,            //文昌门最高分
        "integration_num": 0,                     //福缘积分
        "mission_score_max": 0,                   //任务分数
        "wen_chang_men_action_num": 3,            //还可以进行的文昌阁游戏次数
        "last_receive": {},                       //上一次领取奖励的时间
        "is_sign_in": false,                      //是否签到
        "is_question": false,                     //今日是否已经答题
    },
    "prop": {       //道具信息
        "1": {
            "name": "麻糍",
            "type": 1,
            "addition": 100,
            "introduce": "增加微量成长值",
            "protect_time": 15,
            "need_integral": 100
        },
        "2": {
            "name": "五香",
            "type": 1,
            "addition": 200,
            "introduce": "增加少量成长值",
            "protect_time": 30,
            "need_integral": 200
        },
        "3": {
            "name": "四果汤",
            "type": 1,
            "addition": 400,
            "introduce": "增加中量成长值",
            "protect_time": 45,
            "need_integral": 400
        },
        "4": {
            "name": "豆花粉丝",
            "type": 1,
            "addition": 800,
            "introduce": "增加大量成长值",
            "protect_time": 60,
            "need_integral": 800
        },
        "5": {
            "name": "漳州卤面",
            "type": 1,
            "addition": 1600,
            "introduce": "增加巨量成长值",
            "protect_time": 90,
            "need_integral": 1600
        },
        "6": {
            "name": "小食盒",                               //名字
            "type": 2,                                      //类型
            "addition": 0,                                  //增加的成长值
            "introduce": "有概率开出麻糍,五香或者四果汤",   //简介
            "openNumMin": 1,                                //一次最低开出几个
            "openNumMax": 3,                                //一次最多开出几个
            "open": [                                       //打开后可以获得的道具信息
                { "id": 1, "probability": 50 },             //id 道具ID   ;;  probability 开出的概率
                { "id": 2, "probability": 30 },
                { "id": 3, "probability": 20 }
            ],
            "need_integral": 400
        },
        "7": {
            "name": "大食盒",
            "type": 2,
            "addition": 0,
            "introduce": "有概率开出豆花粉丝,漳州卤面",
            "openNumMin": 1,
            "openNumMax": 3,
            "open": [
                { "id": 4, "probability": 80 },
                { "id": 5, "probability": 20 }
            ],
            "need_integral": 1200
        },
        "8": {
            "name": "橙车积分",
            "type": 3,
            "addition": 10,
            "introduce": "橙车积分,可在橙车app兑换福利哦！",
            "need_integral": 10
        },
    },
    "exchange": {
        "1": {
            "id": 1,
            "sample": 'bag_food_6',
            "name": "小食盒",
            "need_integral": 400,
            "prop_id": 6,
            "add_num": 1
        },
        "2": {
            "id": 2,
            "sample": 'bag_food_7',
            "name": "大食盒",
            "need_integral": 1200,
            "prop_id": 7,
            "add_num": 1
        },
        "3": {
            "id": 3,
            "sample": 'bag_food_8',
            "name": "10橙车积分",
            "need_integral": 500,
            "prop_id": 8,
            "add_num": 10
        },
        "4": {
            "id": 4,
            "sample": 'bag_food_8',
            "name": "15橙车积分",
            "need_integral": 1000,
            "prop_id": 8,
            "add_num": 15
        },
    },
    "mission": {        //任务信息
        "1": {
            "id": 1,    //["任务名", "任务内容",是否已领取奖励(0已领取,1未领取),当前任务次数 ,'任务最多次数',场景ID(0为没有场景ID),该任务奖励]
            "info": ["领取每日福袋", "每天登陆游戏获得丰厚奖励", null, 1, null, 1, [6, 2, 0, 1]]
        },
        "2": {
            "id": 2,
            "info": ["文昌门", " 人们在文昌门送上了美味的漳州小吃,快来拿吧!", null, 3, null, 1, [1, 1, 100, 2]]
        },
        "3": {
            "id": 3,
            "info": ["古镇", " 每到饭点古镇小吃店老板会送上好吃的小吃,快来领取吧!", null, 3, null, 2, [2, 1, 200, 5]]
        },
        "4": {
            "id": 4,
            "info": ["购买商品", " 每天在商城购买商品可以获得奖励哦!", null, 1, null, 0, [4, 1, 800, 1]]
        },
        "5": {
            "id": 5,
            "info": ["古镇问答", " 在古镇回答问题可以获得丰厚奖励。", null, 1, null, 2, [2, 1, 200, 2]]
        },
        "6": {
            "id": 6,
            "info": ["喂养锦鲤", "每日用小吃喂养锦鲤可以获得丰厚奖励。 ", null, 3, null, 0, [2, 1, 200, 2]]
        },
        // "6": {
        //     "id": 6,
        //     "info": ["呼朋唤友", "叫上你的朋友一起来喂养锦鲤吧!", null, null, 1, 0, [5, 1, 1600, 1]]
        // }
    },
    "shop": {           //商店信息
        "1": {
            "title": "麻糍店",
            "detalis": `麻糍是浙江、闽南、江西传统的汉族名点，它种类很多，成品洁白如雪，柔软如绵，光滑细腻，不粘碗，不钉牙糊口，老小皆宜，食者无所禁忌，倍受人们欢迎。漳州口味的麻糍，绝对是漳州人最骄傲的甜食，不仅与麻薯大不同，跟其他地方的麻糍也是大不同的！漳州人是从小吃到老，从来不觉得腻，永远都是漳州人的心头爱。`,
        },
        "2": {
            "title": "五香店",
            "detalis": `五香卷是一道来自于福建的特色名吃。逢年过节、婚寿喜庆，家家户户必备卤面，配以五香条来招待亲朋好友，这也是当地的传统民俗。`,
        },
        "3": {
            "title": "四果汤店",
            "detalis": `四果汤历史悠久，系福建闽南一带非常出名的特色小吃，兴于漳州、泉州一带，具有祛暑降温的作用，因而在夏季备受人们喜爱。每至炎夏，或是街边小摊，或是老字号店铺，人们总是喜欢适时地叫上一碗四果汤，消却炎炎夏日的闷热。`,
        },
        "4": {
            "title": "豆花粉丝店",
            "detalis": `漳州咸豆花中放入已在骨头汤里煮熟晾凉的粉丝，再配上大肠、笋干等各种佐料，咸辣清香，爽滑利口，单是豆花白玉的光泽和粉丝的透亮，就让你垂涎三尺却又不忍下口。`,
        },
        "5": {
            "title": "漳州卤面店",
            "detalis": `漳州卤面是一道色香味俱全的地方名点，属于闽菜系。据说已有一千三百多年的历史。南方的主食是大米，所以面食应该是公元686年建郡时，由移居此地的大批北方人带过来的。后来这些北方人入乡随俗，面食也就渐渐成了节日、婚嫁、搬家之类喜庆时候的特殊食品。`,
        }
    },
    "receive": {        //古镇福利
        "1": {
            "1": 1,
            "2": 1
        },
        "10": {
            "1": 2,
            "2": 2,
            "3": 1
        },
        "20": {
            "1": 3,
            "2": 3,
            "3": 1
        },
        "30": {
            "1": 5,
            "2": 5,
            "3": 2,
            "4": 1
        },
        "40": {
            "1": 7,
            "2": 7,
            "3": 2,
            "4": 1
        },
        "50": {
            "1": 10,
            "2": 10,
            "3": 3,
            "4": 2
        },
        "60": {
            "1": 15,
            "2": 15,
            "3": 4,
            "4": 2,
            "5": 1
        },
        "70": {
            "1": 20,
            "2": 20,
            "3": 8,
            "4": 5,
            "5": 3
        },
        "80": {
            "1": 25,
            "2": 25,
            "3": 12,
            "4": 10,
            "5": 5
        },
        "90": {
            "1": 30,
            "2": 30,
            "3": 20,
            "4": 15,
            "5": 10
        }
    },
    "ui_mission": {
        "1": {
            "name": "麻糍",
            "speed": 5,
            "score": 5,
        },
        "2": {
            "name": "五香",
            "speed": 4.5,
            "score": 10,
        },
        "3": {
            "name": "四果汤",
            "speed": 4,
            "score": 12,
        },
        "4": {
            "name": "豆花粉丝",
            "speed": 3.5,
            "score": 20,
        },
        "5": {
            "name": "漳州卤面",
            "speed": 3,
            "score": 25,
        },
    },
    "question": {                                     //题目信息
        "answer": [1, 2, 1, 1, 2, 1, 1, 2, 2],        //答案
        "info": {
            "1": {
                "subject": "下列哪个大桥位于漳州?",     //题目名字
                "option": ["战备大桥", "海沧大桥"]      //题目答案
            },
            "2": {
                "subject": "下列哪个是漳州著名小吃?",
                "option": ["刨冰", "四果汤"]
            },
            "3": {
                "subject": "漳州市市花是什么?",
                "option": ["水仙花", "牡丹"]
            },
            "4": {
                "subject": "漳州八县二区一市的市是哪个市?",
                "option": ["龙海市", "龙岩市"]
            },
            "5": {
                "subject": "漳州拜天公是在哪一天?",
                "option": ["正月初八", "正月初九"]
            },
            "6": {
                "subject": "漳州第一座人行天桥叫什么名字?",
                "option": ["安然桥", "彩虹桥"]
            },
            "7": {
                "subject": "漳州是中国女排娘家,中国女排在漳州训练的场地叫什么名字??",
                "option": ["腾飞馆", "华阳体育馆"]
            },
            "8": {
                "subject": "漳州平和特产水果是什么?",
                "option": ["龙眼", "柚子"]
            },
            "9": {
                "subject": "漳州云洞岩特色美食叫什么名字?",
                "option": ["烧鸡", "盐鸡"]
            }
        }
    },
    "everyday_receive": {           //每日奖励
        "1": {
            "1": 2
        },
        "10": {
            "1": 4,
            "2": 2
        },
        "30": {
            "1": 4,
            "2": 2,
            "3": 1
        },
        "50": {
            "1": 5,
            "2": 5,
            "3": 2,
            "4": 1
        },
        "70": {
            "1": 7,
            "2": 7,
            "3": 2,
            "4": 1
        },
        "90": {
            "1": 10,
            "2": 10,
            "3": 3,
            "4": 2,
            "5": 1
        }
    },

    "wen_chang_men_reward": {
        "1": {
            "score": 0,
            "reward": [{ "id": 1, "num": 1 }]
        },
        "2": {
            "score": 100,
            "reward": [{ "id": 1, "num": 2 }]
        },
        "3": {
            "score": 150,
            "reward": [{ "id": 2, "num": 2 }]
        },
        "4": {
            "score": 200,
            "reward": [{ "id": 2, "num": 3 }]
        },
        "5": {
            "score": 250,
            "reward": [{ "id": 3, "num": 2 }]
        },
        "6": {
            "score": 300,
            "reward": [{ "id": 3, "num": 3 }]
        },
        "7": {
            "score": 350,
            "reward": [{ "id": 4, "num": 2 }]
        },
        "8": {
            "score": 400,
            "reward": [{ "id": 4, "num": 3 }]
        },
        "9": {
            "score": 450,
            "reward": [{ "id": 5, "num": 2 }]
        },
        "10": {
            "score": 500,
            "reward": [{ "id": 5, "num": 3 }]
        },
    },

    "ui_mission": {
        "1": {
            "name": "麻糍",
            "speed": 2.5,
            "score": 5,
        },
        "2": {
            "name": "五香",
            "speed": 2.25,
            "score": 10,
        },
        "3": {
            "name": "四果汤",
            "speed": 2,
            "score": 12,
        },
        "4": {
            "name": "豆花粉丝",
            "speed": 1.75,
            "score": 20,
        },
        "5": {
            "name": "漳州卤面",
            "speed": 1.5,
            "score": 25,
        },
        "6": {
            "name": "鱼骨",
            "speed": 1.5,
            "score": 0,
        },
        "7": {
            "name": "菜叶",
            "speed": 3,
            "score": 0,
        },
    },

    "introduced": {
        "0": {
            "label": "通过完成每日任务，领取每日奖励，饭点前往古城领取食物，偷取好友食物，等方法来喂养你的锦鲤获取福缘获得丰厚奖励。锦鲤总共有三个阶段，每到达一个阶段就能获得丰厚的奖励噢，当锦鲤到达99级的时候如果越过了龙门，将会获得巨大的奖励，快来喂养你的锦鲤吧！",
        },
        "1": {
            "label": "通过接到美味的食物来增加你的游戏得分，如果不小心接到垃圾（烂菜叶、鱼骨头）会导致你游戏直接结束哦。得分越高获得的奖励越丰厚噢，一天可以有三次机会，好好珍惜你的游戏机会吧！",
        },
        "2": {
            "label": "每天早上9点，中午12点，晚上18点，古镇小吃店老板会给你送上美味的食物，快来领取吧！当你的锦鲤30级将解锁四果汤点，60级的时候将解锁豆花粉丝店，90级将解锁漳州卤面店，每个店面可领取的时间只有30分钟哦，不要忘记饭点！",
        }
    }
};