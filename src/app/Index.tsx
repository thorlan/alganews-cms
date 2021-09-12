import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import info from "../core/utils/info";
import EditorProfileView from "./views/EditorProfile.view";
import EditorsListView from "./views/EditorsList.view";
import HomeView from "./views/Home.view";
import NotFound404View from "./views/NotFound404.view";
import PostCreateView from "./views/PostCreate.view";
import PostEditView from "./views/PostEdit.view";

export default function App (){

  useEffect(() => {

    //captura os erros de promises
    window.onunhandledrejection = function (error: PromiseRejectionEvent) {

      info({
         title: error.reason.response?.data.title || 'Erro',
         description: error.reason.response?.data.detail || error.reason.message
      })
    }
    
  }, [])

    return <BrowserRouter>
    <Switch>
      <Route path='/' exact component={HomeView} />
      <Route path='/editores' exact component={EditorsListView} />
      <Route path='/editores/:id' exact component={EditorProfileView} />
      <Route path='/posts/criar' exact component={PostCreateView} />
      <Route path='/posts/editar/:id' exact component={PostEditView} />
      <Route component={NotFound404View} />
    </Switch>
  </BrowserRouter>
}