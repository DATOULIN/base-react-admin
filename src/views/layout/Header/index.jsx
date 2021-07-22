import {Layout} from "antd";

import Hamburger from "../../../components/Hamburger/index.jsx";

const {Header} = Layout;

const LayoutHeader = () => {
    return (
        <Header>
            <Hamburger/>
        </Header>
    )
}

export default LayoutHeader