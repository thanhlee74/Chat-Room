import React from 'react'
import { Row ,Col,Button} from 'antd'
import Title from 'antd/lib/typography/Title'
import firebase,{auth } from '../../firebase/config'
import { addDocument,generateKeywords } from '../../firebase/service';


const fbProvider= new firebase.auth.FacebookAuthProvider();
// const googleProvider = new firebase.auth.GoogleAuthProvider();
export default function Login() {
    
    const handleFblogin= async (provider) =>{
        const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

        if (additionalUserInfo?.isNewUser) {
          addDocument('user',{
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid,
            providerId: additionalUserInfo.providerId,
            keywords: generateKeywords(user.displayName?.toLowerCase()),
          })
        }
    }
    
    return (
        <div>
            <Row justify="center" style={{height:800}}>
                <Col span={8}>
                    <Title style={{textAlign:'center'}} level={3}>Fun chat</Title>
                    <Button style={{width:'100%',marginBottom:5}} onClick={() => handleFblogin(fbProvider)}>
                        Đăng nhập bằng facebook ở đây!
                    </Button>
                    <Button style={{width:'100%'}}>
                        Đăng nhập bằng google ở đây!
                    </Button>
                </Col>
            </Row>
        </div>
    )
}
