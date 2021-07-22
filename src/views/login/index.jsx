import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import {Form, Input, Button, Checkbox} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {connect} from "react-redux";

import {login} from "../../store/actions/user";
import "./index.scss";

const Login = (props) => {
    const [loading, setLoading] = useState(false);
    const {token} = props
    const onFinish = (values) => {
        const {username, password} = values
        setLoading(true)
        login(username, password).then(res => {
            setLoading(false)
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    if (token) {
        return <Redirect to="/dashboard"/>;
    }

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <div className="title">
                    <h2>用户登录</h2>
                </div>
                <Form
                    className="content"
                    name="basic"
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="username"
                        rules={[{required: true, message: '请输入用户名!'}]}
                    >
                        <Input size="large" placeholder="请输入用户名" prefix={<UserOutlined/>}/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{required: true, message: '请输入密码!'}]}
                    >
                        <Input.Password size="large" placeholder="请输入密码" prefix={<LockOutlined/>}/>
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" style={{textAlign: 'left'}}>
                        <Checkbox>记住密码</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button loading={loading}
                                size="large"
                                type="primary"
                                htmlType="submit"
                                style={{width: "100%"}}>登录</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
const mapStateToProps = state => state.user

export default connect(mapStateToProps)(Login);
