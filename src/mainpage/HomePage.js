import React from 'react';
import {
    LaptopOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    NotificationOutlined,
    UserOutlined
} from '@ant-design/icons';
import {Button, Layout, Menu, theme} from "antd";
import Slider from "../components/common/Carousel";

const {Header, Footer, Sider, Content} = Layout;

const items1 = ['Bài Học Cuộc Sống', 'Cổ Tích', 'Tiểu Thuyết'].map((key) => ({
    key,
    label: key,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index+1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `novel${key}`,        children : new Array(4).fill(null).map((_, j) => {
            const subKey = index*4+j+1;
            return {
                key: subKey,
                label : `option${subKey}`,
            };
        }),
    };
});
function HomePage(){
    const [collapsed, setCollapsed] = React.useState(false);
    const {
        token: {colorBgContainer},} = theme.useToken();
    return (
        <Layout>
            <Sider
                trigger={null} width={200}  style={{background:colorBgContainer}} collapsible collapsed={collapsed}>
                <Menu mode="inline" defaultSelectedKeys={['Bài Học Cuộc Sống']} defaultOpenKeys={['sub1']} style={{height: '100%', borderRight: 0}} items={items2}/>
            </Sider>
            <Layout>
                <Header style={{display: "flex", alignItems: 'center'}}>
                    <Button type="text" icon={collapsed? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>} onClick={() => setCollapsed(!collapsed)} style={{marginRight: 10,
                        fontSize:'16px',
                        width : 34,
                        height:34,
                        background:colorBgContainer}}/>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']} items={items1}/>
                </Header>
                <Content style={{padding: 24, margin : 0,minHeight: 300,background: colorBgContainer}}>
                    <div className="site-layout-content">
                      <Slider/>
                    </div>
                </Content>
                <Footer>
                    <div className="site-layout-content" style={{textAlign: 'center'}}>Footer</div>
                </Footer>
            </Layout>

        </Layout>
    );
}
export default HomePage;