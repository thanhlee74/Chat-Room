import React, { useContext } from 'react'
import {Modal,Form ,Input} from 'antd'
import { AppContext } from '../../context/AppProvider'
import { AuthContext } from '../../context/authProvider';
import { addDocument } from '../../firebase/service';
export default function AddRoomModal() {

    const {isAddRoomVisible, setIsAddRoomVisible}=useContext(AppContext)
    const {user: { uid }} = useContext(AuthContext);
    const [form] = Form.useForm();
    const handleOk=() =>{
        
        addDocument('rooms',{...form.getFieldsValue(),members:[uid]})
        form.resetFields()
        setIsAddRoomVisible(false)

    }
    const handleCancel=()=>{
        form.resetFields()
        setIsAddRoomVisible(false)
    }
    return (
        <div>
            <Modal
            title="Tạo phòng mới"
            visible={isAddRoomVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            >
                <Form form={form} layout='vertical'>
                    <Form.Item label="Tên phòng" name="name">
                        <Input placeholder="nhập tên phòng"/>
                    </Form.Item>
                    <Form.Item label="Mô tả" name="description">
                        <Input.TextArea placeholder="nhập mô tả phòng"/>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
