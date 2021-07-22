import {Layout} from "antd";
import {connect} from "react-redux";

import MyMenu from "./Menu";

const {Sider} = Layout;

const LayoutSider = (props) => {
    const {sidebarCollapsed} = props
    return (
        <Sider
            collapsible
            collapsed={sidebarCollapsed}
            trigger={null}
        >
            <MyMenu/>
        </Sider>
    )
}
const mapStateToProps = (state) => state.app

export default connect(mapStateToProps)(LayoutSider)