import React from 'react';
import './mainArea.css';
import LinePhoto from "./LinePhoto.js";
import CZUserImg from "../img/cz_header.jpg";

function MainArea() {
    
    return (
        <div className="main-area">
            <div className="cz-title">我的简历</div>
            <div className="cz-line">
                <div className="cz-line-left"></div>
                <div className="cz-line-right"></div>
            </div>
            <div className="cz-main-block">
                <div className="cz-mian-bgline">
                    <LinePhoto className="cz-mian-bgline-1" lineName="基本信息"></LinePhoto>
                    <div className="cz-user-info-block">
                        <div className="cz-user-info-left">
                            <div><span className="cz-user-info-title-left">姓<span className="cz-word-auto"></span>名</span>:<span className="cz-user-info-word-left">程正</span></div>
                            <div><span className="cz-user-info-title-left">民<span className="cz-word-auto"></span>族</span>:<span className="cz-user-info-word-left">汉</span></div>
                            <div><span className="cz-user-info-title-left">电<span className="cz-word-auto"></span>话</span>:<span className="cz-user-info-word-left">13193169467</span></div>
                            <div><span className="cz-user-info-title-left">邮<span className="cz-word-auto"></span>箱</span>:<span className="cz-user-info-word-left">cccz1996@163.com</span></div>
                            <div><span className="cz-user-info-title-left">住<span className="cz-word-auto"></span>址</span>:<span className="cz-user-info-word-left">重庆市沙坪坝</span></div>
                        </div>
                        <div className="cz-user-info-center">
                            <div><span className="cz-user-info-title-center">出生年月</span>:<span className="cz-user-info-word-center">1996.09</span></div>
                            <div><span className="cz-user-info-title-center">身<span className="cz-word-auto"></span>高</span>:<span className="cz-user-info-word-center">171cm</span></div>
                            <div></div>
                            <div><span className="cz-user-info-title-center">毕业学校</span>:<span className="cz-user-info-word-center">重庆大学</span></div>
                            <div><span className="cz-user-info-title-center">学<span className="cz-word-auto"></span>历</span>:<span className="cz-user-info-word-center">本科</span></div>
                        </div>
                        <div className="cz-user-info-right">
                            <div className="cz-user-img" style={{backgroundImage:`url(${CZUserImg})` }}></div>
                        </div>
                    </div>
                
                    <LinePhoto className="cz-mian-bgline-2" lineName="教育背景"></LinePhoto>
                    <div className="cz-eduction-info-block">
                        <div className="cz-eduction-time">2014.09-2018.06</div>
                        <div className="cz-eduction-school">重庆大学</div>
                        <div className="cz-eduction-major">计算机科学与技术（本科）</div>
                    </div>

                    <LinePhoto className="cz-mian-bgline-3" lineName="工作经历"></LinePhoto>
                    <div className="cz-work-experience-block">
                        <div className="cz-work-info">
                            <div className="cz-work-time">2018.07-2020.06</div>
                            <div className="cz-work-compony">竞技世界（ 北京）网络技术有限公司</div>
                            <div className="cz-work-job">前端开发工程师</div>
                        </div>
                        <div className="cz-work-introduce">
                            <div className="cz-work-introduce-item">主要负责公司节日活动网页制作、网页新游官网制作、公司内部系统建设。其中可直接给运营人员使用的活动后台管理系统获公司年度优秀项目奖。</div>
                            <div className="cz-work-introduce-item">有直接使用原生js完成的单页面网站；也有使用框架搭建的复杂管理系统；有动画制作以及canvas绘画经验；也有基于node和koa的后台开发经历。</div>
                            <div className="cz-work-introduce-item">部分项目：2019、2020春节活动页面，日均访问量超过30万；基于echarts的后台图形展示系统；公司官网、校招官网、比赛报名官网等。</div>
                        </div>
                    </div>

                    <LinePhoto className="cz-mian-bgline-4" lineName="专业技能"></LinePhoto>
                    <div className="cz-professional-skill-block">
                        <div className="cz-skill-title">擅长</div>
                        <div className="cz-skill-infoword">react - 有复杂react项目经验，使用过redux（自改），路由，了解各个生命周期，可互用组件，组件内state管理，以及数据流的管理。</div>
                        <div className="cz-skill-title">熟悉</div>
                        <div className="cz-skill-infoword">typescript、node、vue、飞冰 - 有使用过这些技术开发过项目，或者是部分参与。熟悉语法，可快速上手。</div>
                        <div className="cz-skill-title">了解</div>
                        <div className="cz-skill-infoword">echarts、cocos creator、qrcode、babel、webpack、koa2、nginx、mysql、java等。</div>
                    </div>

                    <LinePhoto className="cz-mian-bgline-5" lineName="技能证书"></LinePhoto>
                    <div className="cz-skill-certificate-block">
                        <div>大学英语四级（CET-4），具有良好的听说读写能力，快速浏览英语专业文件及书籍。</div>
                    </div>

                    <LinePhoto className="cz-mian-bgline-6" lineName="自我评价"></LinePhoto>
                    <div className="cz-evaluation-block">
                        <div>对网页制作充满兴趣，喜欢尝试新事物，愿意研究自己不擅长的领域；热爱运动，能与人很好的沟通交流并成为好朋友；对工作认真负责，交付的任务能及时完成。网页前端是爱好也是职业，同时对后端充满兴趣，我会努力提升自己，走上通往全栈工程师的路。</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainArea;