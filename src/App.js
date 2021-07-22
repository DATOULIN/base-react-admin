import MyRouter from "./router";
import store from "./store";
import {Provider} from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <MyRouter/>
        </Provider>
    );
}

export default App;
