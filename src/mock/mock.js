import Mock from 'mockjs'
//mock模拟后端接口文档

//模拟登录接口
Mock.mock("localhost:8080/login", "post", (req) => {
    console.log(JSON.parse(req.body))
    const { username, password } = JSON.parse(req.body)
    if (username === "user" && password === "123456") {
        return {
            code: 200,
            message: "成功！",
            success: true,
            token: "3arc9h0vhcr0f8iprpnscmfo8s",
            nickname: "卡卡罗特"
        }
    } else {
        return {
            code: 100,
            message: "失败！",
            success: false,
        }
    }

})

//模拟菜单接口
const menuList = [
    {
        name: "首页",
        icon: "el-icon-s-home",
        url: "/index",
    },
    {
        name: "账户管理",
        icon: "el-icon-coin",
        url: "/account",
        children: [
            {
                name: "所有人员",
                icon: "el-icon-user",
                url: "/account/all",
            },
            {
                name: "业务人员",
                icon: "el-icon-phone-outline",
                url: "/account/business",
            },
            {
                name: "审核人员",
                icon: "el-icon-s-check",
                url: "/account/audit",
            },
            {
                name: "风控经理",
                icon: "el-icon-s-finance",
                url: "/account/risk",
            },
            {
                name: "管理员",
                icon: "el-icon-s-custom",
                url: "/account/admin",
            },
        ]
    },
    {
        name: "产品管理",
        icon: "el-icon-menu",
        url: "/product",
        children: [
            {
                name: "全部产品",
                icon: "el-icon-notebook-2",
                url: "/product/all",
            },
            {
                name: "汽车消费",
                icon: "el-icon-truck",
                url: "/product/carConsumption",
            },
            {
                name: "房产消费",
                icon: "el-icon-office-building",
                url: "/product/estate",
            },
            {
                name: "抵押贷款",
                icon: "el-icon-money",
                url: "/product/mortgage",
            },
        ]
    },
    {
        name: "订单管理",
        icon: "el-icon-s-order",
        url: "/order",
        children: [
            {
                name: "所有订单",
                icon: "el-icon-tickets",
                url: "/orders/all",
            },
            {
                name: "新建订单",
                icon: "el-icon-document",
                url: "/orders/create",
            },
        ]
    },
    {
        name: "客户管理",
        icon: "el-icon-user",
        url: "/customer",
        children: [
            {
                name: "基本信息",
                icon: "el-icon-chat-square",
                url: "/customer/info",
            },
            {
                name: "资金记录",
                icon: "el-icon-bank-card",
                url: "/record",
            },
        ]
    },
    {
        name: "待办事项",
        icon: "el-icon-chat-dot-square",
        url: "/todo",
    },
    {
        name: "个人中心",
        icon: "el-icon-user",
        url: "/my",
    },
]

Mock.mock("localhost:8080/menu", "get", () => {
    return {
        code: 200,
        success: true,
        message: "成功！",
        data: menuList
    }
})

//模拟入职信息接口
Mock.mock("localhost:8080/in", 'get', () => {
    return {
        code: 200,
        message: "请求成功！",
        success: true,
        date: "2020-08-14 00:00:00"
    }
})

//模拟首页表格数据
Mock.mock("localhost:8080/charts", 'post', (req) => {
    console.log(JSON.parse(req.body))
    let params = JSON.parse(req.body)
    if (params.type === "line") {
        return {
            code: 200,
            message: "请求成功！",
            success: true,
            data: {
                date: ["21-01", "21-02", "21-03", "21-04", "21-05", "21-06", "21-07"],
                number: [30, 84, 56, 46, 84, 61, 90]
            },
        }
    } else if (params.type === "pie") {
        return {
            code: 200,
            message: "请求成功！",
            success: true,
            data: [
                { value: 1048, name: "搜索引擎" },
                { value: 735, name: "直接访问" },
                { value: 580, name: "邮件营销" },
                { value: 484, name: "联盟广告" },
                { value: 300, name: "视频广告" },
            ],
        }
    } else {
        return {
            code: 100,
            success: false,
            message: "登录失败！",
        }
    }

})

//所有人员
Mock.mock('localhost:8080/all','get',()=>{
    //const {password,username}=JSON.parse(req.body)
    return {
        code:200,
        success:true,
        message:"成功！",
        data:Mock.mock({
            'list|20-40':[{
                'account|100000-999999':1,
                'id|+1':1,
                'name':'@cname',
                'character|1':['业务人员','审核人员','风控经理','管理员'],
                'remark|5-20':"@cword",
                'reason|1':["需要进系统录入进件补充资料","对进件进行风险审核",'对放款进行风险审核'],
                'status|1':[1,2],
            }],
            "total|1":[10,20,30,40,50]
        })
    }
})   
//所有产品
Mock.mock('localhost:8080/productList','get',()=>{
    return {
        code:200,
        success:true,
        message:"成功",
        data:Mock.mock({
            "list|8-20":[{
                'id|+1':10000,
                'type|1':["汽车消费","房产消费","抵押贷款"],
                'name|1':["巴贝拉贷款","麦穗金融","日借贷","爱猫借贷","樱花分期","小熊金融","借乐花","星星钱贷",],
                "limit|1":[100,200,300],
                "rate|1":[4.1,4.3,3.8,3.9,5,3],
                "number":Mock.Random.integer(30,200),
                "total":Mock.Random.integer(10000000,500000000),
                'average':Mock.Random.integer(10000000.250000000),
                "status|1":[1,2],
                'highest|1':[36,60,24,360],
                'date':Mock.Random.date(),
            }],
            "total|1":[10,20,30,40,50]
        })
    }
})
