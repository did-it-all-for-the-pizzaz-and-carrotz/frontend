import Chat from 'containers/Chat/Chat'
import React from 'react'
import './ChatSection.scss'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import MyButton from 'components/Button/Button';
import { useAppNavigate } from 'hooks/useAppNavigate';
const { Header, Content, Footer, Sider } = Layout;

const ChatSection = () => {
    const { navigateHome } = useAppNavigate()

    return (
        <div className="chat_view">
            <Chat />
            <nav className="chat_view_navbar">
                <h2>Informacje</h2>
                <div>regulamin chatu</div>
                <MyButton title="Powrót na stronę główną" type="regular" onClick={navigateHome}/>
                <MyButton title="Zgłoś rozmówcę" type="regular_dark" />
            </nav>
        </div>

        // <Layout>
        //     <Layout>
        //         <Header
        //             style={{
        //                 padding: 0,
        //                 background: colorBgContainer,
        //             }}
        //         />
        //         <Chat />
        //     </Layout>
        //     <Sider
        //         breakpoint="lg"
        //         collapsedWidth="0"
        //         onBreakpoint={(broken) => {
        //             console.log(broken);
        //         }}
        //         onCollapse={(collapsed, type) => {
        //             console.log(collapsed, type);
        //         }}
        //     >
        //         <div className="logo" />
        //         <Menu
        //             theme="dark"
        //             mode="inline"
        //             defaultSelectedKeys={['4']}
        //             items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
        //                 (icon, index) => ({
        //                     key: String(index + 1),
        //                     icon: React.createElement(icon),
        //                     label: `nav ${index + 1}`,
        //                 }),
        //             )}
        //         />
        //     </Sider>
        // </Layout>
    )
}

export default ChatSection