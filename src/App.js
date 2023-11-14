import React, { useContext } from "react";
import Routes from "./routes";
import { AuthProvider } from "./contexts/auth";
import { AuthContext } from "./contexts/AuthContext";
import PrivateRoutes from "./routes/rotasprivadas";
import PublicRoutes from "./routes/index";

function App() {
  const { auth } = useContext(AuthContext)
  return auth ? <PrivateRoutes/> : <PublicRoutes/>
}
export default App;

// const App = () => {
//   const valor = useContext(AuthContext);
//   console.log(valor);
//   return (
//     <AuthProvider>
//       <Routes />
//     </AuthProvider>
//   );
// };

// export default App;
