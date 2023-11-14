import * as React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Admins from "../pages/Admins";
import Afastados from "../pages/Afastados";
import ContasBloq from "../pages/ContasBloq";
import Demitidos from "../pages/Demitidos";
import FalhasdeLog from "../pages/FalhasDeLog";
//import Home from "../pages/Home";
import LastLogon from "../pages/LastLogon";
import NeverExpires from "../pages/NeverExpires";
import NuncaAcessa from "../pages/NuncaAcessa";
import Menu from "../pages/Menu";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import useAuth from "../hooks/useAuth";
import ProtectedRoute from "../Components/ProtectedRoute";
import PrivateRoute from "../Components/PrivateRoute";
import VerdetalhesAdmSequoiaLog from "../pages/Admins/VerDetalhesSequoiaLog";
import VerdetalhesAdmSequoiaLocal from "../pages/Admins/VerDetalhesSequoiaLocal";
import VerdetalhesAfastBloq from "../pages/Afastados/VerDetalhesBloq";
import VerDetalhesAfastNaoBloq from "../pages/Afastados/VerDetalhesNaoBloq";
import VerdetalhesContasBloqSequoiaLocal from "../pages/ContasBloq/VerDetalhesSequoiaLocal";
import VerdetalhesContasBloqSequoiaLog from "../pages/ContasBloq/VerDetalhesSequoiaLog";
import VerdetalhesDesligadosBloq from "../pages/Demitidos/VerDetalhesBloq";
import VerdetalhesDesligadosNaoBloq from "../pages/Demitidos/VerDetalhesNaoBloq";
import VerdetalhesFalhasSequoiaLocal from "../pages/FalhasDeLog/VerDetalhesSequoiaLocal";
import VerdetalhesFalhasSequoiaLog from "../pages/FalhasDeLog/VerDetalhesSequoiaLog";
import VerdetalhesLastLogonSequoiaLocal from "../pages/LastLogon/VerDetalhesSequoiaLog";
import VerdetalhesLastLogonSequoiaLog from "../pages/LastLogon/VerDetalhesSequoiaLocal";
import VerdetalhesNeverExpiresSequoiaLog from "../pages/NeverExpires/VerDetalhesSequoiaLog";
import VerdetalhesNeverExpiresSequoiaLocal from "../pages/NeverExpires/VerDetalhesSequoiaLocal";
import VerdetalhesNuncaAcessaSequoiaLocal from "../pages/NuncaAcessa/VerDetalhesSequoiaLocal";
import VerdetalhesNuncaAcessaSequoiaLog from "../pages/NuncaAcessa/VerDetalhesSequoiaLog";
import AuthProvider from '../App';


const Rotas_privadas = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu/>} />
          <Route path="/Admins" element={<Admins />} />
          <Route path="/Afastados" element={<Afastados />} />
          <Route path="/ContasBloq" element={<ContasBloq />} />
          <Route path="/Demitidos" element={<Demitidos />} />
          <Route path="/FalhasdeLog" element={<FalhasdeLog />} />
          <Route path="/LastLogon" element={<LastLogon />} />
          <Route path="/NeverExpires" element={<NeverExpires />} />
          <Route path="/NuncaAcessa" element={<NuncaAcessa />} />
  
          <Route
            path="/VerdetalhesAdmSequoiaLog"
            element={<VerdetalhesAdmSequoiaLog />}
          />
  
          <Route
            path="/VerdetalhesAdmSequoiaLocal"
            element={<VerdetalhesAdmSequoiaLocal />}
          />
  
          <Route
            path="/VerdetalhesAfastBloq"
            element={<VerdetalhesAfastBloq />}
          />
  
          <Route
            path="/VerDetalhesAfastNaoBloq"
            element={<VerDetalhesAfastNaoBloq />}
          />
  
          <Route
            path="/VerdetalhesContasBloqSequoiaLog"
            element={<VerdetalhesContasBloqSequoiaLog />}
          />
  
          <Route
            path="/VerdetalhesContasBloqSequoiaLocal"
            element={<VerdetalhesContasBloqSequoiaLocal />}
          />
  
          <Route
            path="/VerdetalhesDesligadosBloq"
            element={<VerdetalhesDesligadosBloq />}
          />
  
          <Route
            path="/VerdetalhesDesligadosNaoBloq"
            element={<VerdetalhesDesligadosNaoBloq />}
          />
  
          <Route
            path="/VerdetalhesFalhasSequoiaLocal"
            element={<VerdetalhesFalhasSequoiaLocal />}
          />
  
          <Route
            path="/VerdetalhesFalhasSequoiaLog"
            element={<VerdetalhesFalhasSequoiaLog />}
          />
  
          <Route
            path="/VerdetalhesLastLogonSequoiaLocal"
            element={<VerdetalhesLastLogonSequoiaLocal />}
          />
  
          <Route
            path="/VerdetalhesLastLogonSequoiaLog"
            element={<VerdetalhesLastLogonSequoiaLog />}
          />
  
          <Route
            path="/VerdetalhesNeverExpiresSequoiaLog"
            element={<VerdetalhesNeverExpiresSequoiaLog />}
          />
  
          <Route
            path="/VerdetalhesNeverExpiresSequoiaLocal"
            element={<VerdetalhesNeverExpiresSequoiaLocal />}
          />
  
          <Route
            path="/VerdetalhesNuncaAcessaSequoiaLocal"
            element={<VerdetalhesNuncaAcessaSequoiaLocal />}
          />
  
          <Route
            path="/VerdetalhesNuncaAcessaSequoiaLog"
            element={<VerdetalhesNuncaAcessaSequoiaLog />}
          />
  
          {/* <Route path="/Signup" element={<Signup />} /> */}
          {/* <Route path="/Signin" element={<Signin />} /> */}
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default Rotas_privadas;
  