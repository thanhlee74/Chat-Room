import React from 'react'
import { Row,Col } from 'antd'
import Userinfo from './Userinfo'
import Roomlist from './Roomlist'

import styled from 'styled-components'

const SideBarStyle=styled.div`
    background: #3f0e40;
    color: white;
    height: 100vh;
`;
export default function Sidebar() {
    return (
        <SideBarStyle>
            <Row>
                <Col span={24}>
                    <Userinfo/>
                </Col>
                <Col span={24}>
                    <Roomlist/>
                </Col>
            </Row>
        </SideBarStyle>
    )
}
