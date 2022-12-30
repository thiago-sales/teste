import Home from './Home';
import Alunos from './Alunos';
import Sobre from './Sobre';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


function Navbar(){
    return(

        <>
    <BrowserRouter>

  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <Link to='/'>
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
    </Link>
  </li>
  <li class="nav-item" role="presentation">
  <Link to='/alunos'>
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Alunos</button>
    </Link>
  </li>
  <li class="nav-item" role="presentation">
  <Link to='/sobre'>
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Sobre</button>
    </Link>
  </li>

</ul>


<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0"></div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0"></div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0"></div>
</div>


      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/alunos" element={<Alunos/>}></Route>
        <Route path="/sobre" element={<Sobre/>}></Route>
      </Routes>

      </BrowserRouter>
    </>


    );
}

export default Navbar;