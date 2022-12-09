import {RouterProvider} from 'react-router-dom';
import { Header } from './components/Header';
import router from './router';
import {ConfigProvider} from 'antd';
import store from './store'
import { Provider } from 'react-redux';


function App() {
  return (
    <>
        <Provider store={store}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#00ABB5'
                    }
                }}
            >
                <RouterProvider router={router}></RouterProvider>
            </ConfigProvider>
        </Provider>
        
    </>

  );
}

export default App;
