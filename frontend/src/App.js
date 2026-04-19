import React from 'react';
import {Route, Switch, HashRouter, Redirect} from 'react-router-dom'
import './App.css';
/*import Couleurs from './Components/Couleurs'*/
import Timing from './Components/Timing'
import GestionTemps from './Components/GestionTemps'
import GestionTempsNL from './Components/GestionTempsNL'
import Delegation from './Components/Delegation'
import DelegationEN from './Components/DelegationEN'
import Intelligence from './Components/Intelligence'
import Caracteristique from './Components/Caracteristique'
import Home from './Components/Home'
import Drivers from './Components/Drivers'
import DriversNL from './Components/DriversNL'
import PersonaFROLD from './Components/personaFROLD'
import PersonaFR from './Components/personaFR'
import PersonaFRHautEnCouleur from './Components/PersonaFRhautencouleur'
import PersonaNL from './Components/personaNL'
import Gate from './Components/Gate'
import Creativite from './Components/Creativite'
import Creativiteit from './Components/Creativiteit'
import Tki from './Components/Tki'
import TKI_EN from './Components/TKI_EN'
import TKI_NM from './Components/TKI_NL'
import Assertivite from './Components/Assertivite'
import Leadership from './Components/Leadership'
import EcouteActive from './Components/EcouteActive'
import Lencioni from './Components/Lencioni'
import Skillsoft from './Components/Skillsoft'
import Activitemanageriale from './Components/Activitemanageriale'
import ActivitemanagerialeEN from './Components/ActivitemanagerialeEN'
import Assertiviteit from './Components/Assertiviteit'
import Assertiveness from './Components/Assertiveness'
import Beslissings from './Components/Beslissings'
import Individuel from './Components/SCTIndividuel'
import IndividuelTest from './Components/SCTIndividuelTest'
import DelegationNL from './Components/DelegationNL'
import AdminLoginPage from './admin/pages/AdminLoginPage'
import AdminDashboardPage from './admin/pages/AdminDashboardPage'
import { AdminAuthProvider } from './admin/context/AdminAuthContext'
import ProtectedAdminRoute from './admin/components/ProtectedAdminRoute'

function App() {
  return (
    <AdminAuthProvider>
    <HashRouter className="Route">
      {/* PASSAGE EN PRODUCTION
      <div className="Development">
        <p>DEVELOPPEMENT</p>
      </div>
      */}
      <Switch>
       {/*<Route path="/couleurs" component={Couleurs} />*/}
        <Route exact path="/admin" render={() => <Redirect to="/admin/login" />} />
        <Route path="/admin/login" component={AdminLoginPage} />
        <ProtectedAdminRoute path="/admin/dashboard" component={AdminDashboardPage} />
        <Route path="/timing" component={Timing}/>
        <Route path="/gestion" component={GestionTemps}/>
        <Route path="/gestion-nl" component={GestionTempsNL}/>
        <Route path="/delegation" component={Delegation}/>
        <Route path="/delegation-en" component={DelegationEN}/>
        <Route path="/delegation-nl" component={DelegationNL}/>
        <Route path="/intelligence" component={Intelligence}/>
        <Route path="/personaEN" component={Caracteristique}/>
        <Route path="/personaFR" component={PersonaFROLD}/>
        <Route path="/personacomplexefr" component={PersonaFR}/>
        <Route path="/personaNL" component={PersonaNL}/>
        <Route path="/drivers" component={Drivers}/>
        <Route path="/drivers-nl" component={DriversNL}/>
        <Route path="/portail" component={Home}/>
        <Route path="/creativite" component={Creativite}/>
        <Route path="/creativiteit" component={Creativiteit}/> 
        <Route path="/tki/fr" component={Tki}/>
        <Route path="/tki/en" component={TKI_EN}/>
        <Route path="/tki/nl" component={TKI_NM}/>
        <Route path="/assertivite" component={Assertivite}/>
        <Route path="/assertiviteit" component={Assertiviteit}/>
        <Route path="/assertiveness" component={Assertiveness}/>
        <Route path="/leadership" component={Leadership}/>
        <Route path="/ecouteactive" component={EcouteActive}/>
        <Route path="/lencioni" component={Lencioni}/>
        <Route path="/skillsoft" component={Skillsoft}/>
        <Route path="/activitemanageriale" component={Activitemanageriale}/>
        <Route path="/managerialactivity" component={ActivitemanagerialeEN}/>
        <Route path="/beslissings" component={Beslissings}/>
        <Route path="/sct/individuel" component={Individuel}/>
        <Route path="/sct/test/individuel" component={IndividuelTest}/>
        <Route path="/persona/hautencouleur" component={PersonaFRHautEnCouleur}/>
        <Route component={Gate} />
      </Switch>
    </HashRouter>
    </AdminAuthProvider>
  );
}

export default App;
