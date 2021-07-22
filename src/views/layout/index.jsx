import React from 'react';
import {Layout} from "antd";

import LayoutHeader from "./Header";
import LayoutSider from "./Sider";
import LayoutContent from "./Content";
import TagsView from "./TagsView";

const MyLayout = (props) => {
    return (
        <Layout style={{minHeight: '100vh'}}>
            <LayoutSider/>
            <Layout>
                <LayoutHeader/>
                <TagsView />
                <LayoutContent/>
            </Layout>
        </Layout>
    );
}

export default MyLayout;