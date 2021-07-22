import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {Scrollbars} from "react-custom-scrollbars";
import {
    AppstoreOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
import {Menu} from "antd";
import './index.scss'
import menuList from "../../../../config/menuConfig";
import {getMenuItemInMenuListByProperty} from "../../../../utils";
import {addTag} from "../../../../store/actions/tagsView";

const {SubMenu} = Menu;

class MyMenu extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        menuTreeNode: null,
        openKey: [],
    };

    handleMenuSelect = ({key = "/dashboard"}) => {
        let menuItem = getMenuItemInMenuListByProperty(menuList, "path", key);
        this.props.addTag(menuItem);
    };

    getMenuNodes = (menuList) => {
        const path = this.props.location.pathname;

        return menuList.reduce((pre, item) => {

            if (!item.children) {
                pre.push(
                    <Menu.Item key={item.path}>
                        <Link to={item.path}>
                            {item.icon ? <AppstoreOutlined/> : null}
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                );
            } else {
                // 查找一个与当前请求路径匹配的子Item
                const cItem = item.children.find(
                    (cItem) => path.indexOf(cItem.path) === 0
                );
                // 如果存在, 说明当前item的子列表需要打开
                if (cItem) {
                    this.setState((state) => ({
                        openKey: [...state.openKey, item.path],
                    }));
                }

                // 向pre添加<SubMenu>
                pre.push(
                    <SubMenu
                        key={item.path}
                        title={
                            <span>
                                {
                                    item.icon ? <AppstoreOutlined/> : null
                                }
                                <span>{item.title}</span>
                            </span>
                        }>
                        {this.getMenuNodes(item.children)}
                    </SubMenu>
                );
            }
            return pre;
        }, []);
    }

    componentWillMount() {
        const menuTreeNode = this.getMenuNodes(menuList);
        this.setState({
            menuTreeNode,
        });
        this.handleMenuSelect(this.state.openKey);
    }

    render() {
        const openKey = this.state.openKey;
        const path = this.props.location.pathname;
        return (
            <div className="sidebar-menu-container">
                <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200}>
                    {
                        this.state.menuTreeNode.map((item, index) => {
                            return (
                                <Menu
                                    key={index}
                                    mode="inline"
                                    theme="dark"
                                    selectedKeys={[path]}
                                    defaultOpenKeys={openKey}
                                    onSelect={this.handleMenuSelect}

                                >
                                    {item}
                                </Menu>
                            )
                        })
                    }
                </Scrollbars>
            </div>
        );
    }
}

export default connect(null, {addTag})(withRouter(MyMenu));