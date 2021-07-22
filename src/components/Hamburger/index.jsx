import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
import {connect} from "react-redux";
import './index.scss';
import {toggleSiderBar} from "../../store/actions/app";

const Hamburger = (props) => {
    const {toggleSiderBar, sidebarCollapsed} = props

    return (
        <div className="hamburger-container">
            {
                sidebarCollapsed
                    ?
                    <MenuUnfoldOutlined style={{color: '#fff'}} onClick={toggleSiderBar}/>
                    :
                    <MenuFoldOutlined style={{color: '#fff'}} onClick={toggleSiderBar}/>
            }
        </div>
    )
}
const mapStateToProps = (state) => state.app
export default connect(mapStateToProps, {toggleSiderBar})(Hamburger)