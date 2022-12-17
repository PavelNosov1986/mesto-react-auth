import React from "react";
import { Redirect, Route } from "react-router-dom";
import api from '../utils/api';

function ProtectedRoute({ component: Component, ...props }) {


    const [currentUser, setCurrentUser] = React.useState();
    const jwt = localStorage.getItem("jwt");
    

    React.useEffect(() => {
        if (jwt) {
            api.fetchGetMe()
                .then((user) => {
                    setCurrentUser(user);
                })
                .catch((err) => {
                    console.log('Ошибка. Запрос не выполнен');
                });
        }
    }, []);

    if (!jwt)
        return (<>
         <Redirect to = "/signin" />
        </>);


    return (<>
     {currentUser &&  <Route>
            {<Component {...props} />}
        </Route>}
    </>)
       
       
    
}

export default ProtectedRoute;
