import React from 'react';
import './mainBody.css';
import MainArea from "./MainArea.js";

function MainBody() {
    return (
        <div className="cz-main-body">
            <MainArea />
            <div className="cz-more-block">
                <div className="cz-csdn"><a href="https://blog.csdn.net/cccz1996">csdn博客</a></div>
                <div className="cz-github"><a href="https://github.com/cz1996">git hub</a></div>
                <div className="cz-gitlab"><a href="http://cccz1996.cn/gitlab.png">git lab工作图</a></div>
                <div className="cz-cc"><a href="http://cccz1996.cn/cc/">photos</a></div>
                <div className="cz-inc">© 2020 cccz1996</div>
            </div>
        </div>
    )
}

export default MainBody;