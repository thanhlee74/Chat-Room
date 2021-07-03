import './App.css';
import Login from './component/login/index'
import ChatRoom  from './component/chatroom/index';
import {Route,Switch,BrowserRouter} from 'react-router-dom'
import AuthProvider from './context/authProvider';
import AppProvider from './context/AppProvider';
import AddRoomModal from './component/modal/AddRoomModal';
import InviteMemberModal from './component/modal/InviteMemberModal';

function App() {

  return <BrowserRouter>
            <AuthProvider>
              <AppProvider>
              <Switch>
                <Route component={Login} path="/login"/>
                <Route component={ChatRoom} path="/"/>
              </Switch>
              <AddRoomModal/>
              <InviteMemberModal/>
              </AppProvider>
            </AuthProvider>
         </BrowserRouter>
  
  
}

export default App;
