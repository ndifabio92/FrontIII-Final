import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Navbar} from "../components/UI/NavBar/Navbar.tsx";
import {routes} from "./routes.ts";
import {Suspense} from "react";

export const Navigation = () => {
    return (
        <Suspense fallback={ <span> Loading....</span>}>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    {
                        routes.map( ({ path, Component  }) => (
                            <Route
                                key={ path }
                                path={ path }
                                element={ <Component /> }
                            />
                        ))
                    }
                    <Route path="/*" element={<Navigate to={ routes[0].to } replace />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}